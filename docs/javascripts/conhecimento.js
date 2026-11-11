/* Catálogo interativo da Base de Conhecimento. Dados em docs/assets/dados/catalogo-conhecimento.json */
(function () {
  "use strict";

  function normalize(text) {
    return String(text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function initializeKnowledgeHub() {
    const root = document.getElementById("knowledge-hub");
    if (!root || root.dataset.knowledgeInitialized === "true") return;
    root.dataset.knowledgeInitialized = "true";

    const input = root.querySelector("#knowledge-search");
    const clear = root.querySelector("#knowledge-clear");
    const results = root.querySelector("#knowledge-results");
    const summary = root.querySelector("#knowledge-result-count");
    const empty = root.querySelector("#knowledge-empty");
    const error = root.querySelector("#knowledge-error");
    const reset = root.querySelector("#knowledge-reset");
    const filterContainer = root.querySelector(".knowledge-filters");
    let filters = Array.from(filterContainer.querySelectorAll(".knowledge-filter"));
    const state = { category: "todos", items: [], categories: new Map() };

    function renderCard(item) {
      const category = state.categories.get(item.categoria) || { nome: "Tema", icone: "TI" };
      const isModel = item.tipo === "modelo";
      const isGuide = item.tipo === "guia";
      const isArticle = item.tipo === "artigo";
      const link = el("a", "knowledge-card");
      link.href = item.url;
      link.setAttribute("aria-label", item.titulo + ". " + (isModel ? "Abrir modelo didático" : (isGuide ? "Abrir guia técnico" : (isArticle ? "Ler artigo técnico" : "Explorar área temática"))));
      const top = el("div", "knowledge-card__top");
      top.append(el("span", "knowledge-card__symbol", category.icone));
      top.append(el("span", "knowledge-card__type" + (isModel ? " knowledge-card__type--model" : (isGuide ? " knowledge-card__type--guide" : "")), isModel ? "MODELO DIDÁTICO" : (isGuide ? "GUIA TÉCNICO" : (isArticle ? "ARTIGO TÉCNICO" : "ÁREA TEMÁTICA"))));
      const meta = el("span", "knowledge-card__category", category.nome);
      const title = el("h3", "knowledge-card__title", item.titulo);
      const description = el("p", "knowledge-card__description", item.descricao);
      const tags = el("div", "knowledge-card__tags");
      (item.etiquetas || []).slice(0, 3).forEach(tag => tags.append(el("span", "knowledge-card__tag", tag)));
      const action = el("span", "knowledge-card__action", isModel ? "Consultar modelo" : (isGuide ? "Ler guia" : (isArticle ? "Ler artigo" : "Explorar conteúdo")));
      action.append(el("span", "", "↗"));
      action.lastElementChild.setAttribute("aria-hidden", "true");
      link.append(top, meta, title, description, tags, action);
      return link;
    }

    function paint() {
      const query = normalize(input.value).trim();
      const terms = query ? query.split(/\s+/).filter(Boolean) : [];
      const visible = state.items.filter(function (item) {
        if (state.category !== "todos" && item.categoria !== state.category) return false;
        const haystack = normalize([item.titulo, item.descricao, item.categoria, item.tipo, ...(item.etiquetas || []), ...(item.palavras_chave || [])].join(" "));
        return terms.every(term => haystack.includes(term));
      });
      const fragment = document.createDocumentFragment();
      visible.forEach(item => fragment.append(renderCard(item)));
      results.replaceChildren(fragment);
      const noPublications = state.items.length === 0;
      summary.textContent = noPublications ? "0 materiais publicados" : (visible.length === 1 ? "1 material encontrado" : visible.length + " materiais encontrados");
      empty.hidden = visible.length !== 0;
      const emptyTitle = empty.querySelector("h3");
      const emptyText = empty.querySelector("p");
      if (emptyTitle) emptyTitle.textContent = noPublications ? "Nenhum material publicado por enquanto" : "Nenhum resultado encontrado";
      if (emptyText) emptyText.textContent = noPublications ? "A biblioteca está sendo organizada. Explore as categorias acima enquanto os primeiros materiais são preparados." : "Tente outra palavra ou remova o filtro selecionado.";
      reset.hidden = noPublications;
      error.hidden = true;
      clear.hidden = input.value.length === 0;
    }

    function changeCategory(category) {
      state.category = category;
      filters.forEach(function (button) {
        const active = button.dataset.category === category;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      paint();
    }

    function clearAll() {
      input.value = "";
      changeCategory("todos");
      input.focus();
    }

    input.addEventListener("input", paint);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        input.value = "";
        paint();
      }
    });
    clear.addEventListener("click", function () { input.value = ""; paint(); input.focus(); });
    reset.addEventListener("click", clearAll);
    function buildCategoryFilters() {
      const fragment = document.createDocumentFragment();
      const options = [{ id: "todos", nome: "Todos" }, ...Array.from(state.categories.entries(), function (entry) { return { id: entry[0], nome: entry[1].nome }; })];
      options.forEach(function (option) {
        const count = option.id === "todos" ? state.items.length : state.items.filter(item => item.categoria === option.id).length;
        const button = el("button", "knowledge-filter" + (option.id === state.category ? " is-active" : ""), option.nome + " ");
        button.type = "button";
        button.dataset.category = option.id;
        button.setAttribute("aria-pressed", String(option.id === state.category));
        const counter = el("span", "", String(count));
        counter.setAttribute("aria-hidden", "true");
        button.append(counter);
        button.addEventListener("click", function () { changeCategory(option.id); });
        fragment.append(button);
      });
      filterContainer.replaceChildren(fragment);
      filters = Array.from(filterContainer.querySelectorAll(".knowledge-filter"));
    }

    fetch(new URL(root.dataset.catalogUrl, document.baseURI), { cache: "no-cache" })
      .then(function (response) { if (!response.ok) throw new Error("Falha ao carregar catálogo"); return response.json(); })
      .then(function (catalog) {
        if (!Array.isArray(catalog.materiais) || !Array.isArray(catalog.categorias)) throw new Error("Catálogo inválido");
        state.items = catalog.materiais;
        state.categories = new Map(catalog.categorias.map(category => [category.id, category]));
        buildCategoryFilters();
        paint();
      })
      .catch(function () {
        results.replaceChildren();
        summary.textContent = "Catálogo temporariamente indisponível";
        empty.hidden = true;
        error.hidden = false;
      });
  }

  // O Zensical pode trocar páginas sem recarregar o navegador.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initializeKnowledgeHub);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeKnowledgeHub);
  } else {
    initializeKnowledgeHub();
  }
})();
