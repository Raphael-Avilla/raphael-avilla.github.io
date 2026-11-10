/* Pesquisa e filtros dos projetos, sem bibliotecas externas. */
(function () {
  "use strict";
  const normalize = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  function make(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function setup() {
    const root = document.getElementById("projects-hub");
    if (!root || root.dataset.initialized) return;
    root.dataset.initialized = "true";
    const input = root.querySelector("#projects-search");
    const clear = root.querySelector("#projects-clear");
    const results = root.querySelector("#projects-results");
    const summary = root.querySelector("#projects-result-count");
    const empty = root.querySelector("#projects-empty");
    const error = root.querySelector("#projects-error");
    const reset = root.querySelector("#projects-reset");
    const filters = root.querySelector(".knowledge-filters");
    const state = { category: "todos", items: [], categories: new Map() };
    function renderCard(item) {
      const category = state.categories.get(item.categoria) || { nome: "Projeto", icone: "TI" };
      const a = make("a", "knowledge-card");
      a.href = item.url;
      a.setAttribute("aria-label", "Consultar projeto: " + item.titulo);
      const top = make("div", "knowledge-card__top");
      top.append(make("span", "knowledge-card__symbol", category.icone), make("span", "knowledge-card__type", item.contexto || "PROJETO"));
      const tags = make("div", "knowledge-card__tags");
      (item.tecnologias || []).slice(0,4).forEach(tag => tags.append(make("span", "knowledge-card__tag", tag)));
      a.append(top, make("span", "knowledge-card__category", category.nome), make("h3", "knowledge-card__title", item.titulo), make("p", "knowledge-card__description", item.descricao), tags, make("span", "knowledge-card__action", "Ver documentação ↗"));
      return a;
    }
    function paint() {
      const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
      const matches = state.items.filter(item => {
        if (state.category !== "todos" && item.categoria !== state.category) return false;
        const text = normalize([item.titulo, item.descricao, item.categoria, item.contexto, ...(item.tecnologias || []), ...(item.palavras_chave || [])].join(" "));
        return terms.every(term => text.includes(term));
      });
      const fragment = document.createDocumentFragment();
      matches.forEach(item => fragment.append(renderCard(item)));
      results.replaceChildren(fragment);
      const nonePublished = state.items.length === 0;
      summary.textContent = nonePublished ? "0 projetos publicados" : matches.length + (matches.length === 1 ? " projeto encontrado" : " projetos encontrados");
      empty.hidden = matches.length > 0;
      error.hidden = true;
      empty.querySelector("h3").textContent = nonePublished ? "Nenhum projeto publicado por enquanto" : "Nenhum projeto encontrado";
      empty.querySelector("p").textContent = nonePublished ? "Esta seção está preparada para receber projetos técnicos depois de documentados e revisados." : "Tente outro termo ou limpe o filtro selecionado.";
      reset.hidden = nonePublished;
      clear.hidden = input.value.length === 0;
    }
    function pick(category) {
      state.category = category;
      filters.querySelectorAll("button").forEach(button => {
        const active = button.dataset.category === category;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      paint();
    }
    function buildFilters() {
      const fragment = document.createDocumentFragment();
      [{ id:"todos", nome:"Todos" }, ...Array.from(state.categories, ([id, category]) => ({ id, nome:category.nome }))].forEach(option => {
        const count = option.id === "todos" ? state.items.length : state.items.filter(item => item.categoria === option.id).length;
        const b = make("button", "knowledge-filter" + (option.id === "todos" ? " is-active" : ""), option.nome + " ");
        b.type = "button"; b.dataset.category = option.id;
        b.setAttribute("aria-pressed", String(option.id === "todos"));
        const badge = make("span", "", String(count)); badge.setAttribute("aria-hidden", "true"); b.append(badge);
        b.addEventListener("click", () => pick(option.id));
        fragment.append(b);
      });
      filters.replaceChildren(fragment);
    }
    input.addEventListener("input", paint);
    input.addEventListener("keydown", event => { if (event.key === "Escape") { input.value=""; paint(); } });
    clear.addEventListener("click", () => { input.value=""; paint(); input.focus(); });
    reset.addEventListener("click", () => { input.value=""; pick("todos"); input.focus(); });
    fetch(new URL(root.dataset.catalogUrl, document.baseURI), { cache:"no-cache" })
      .then(response => { if (!response.ok) throw new Error("Falha ao carregar catálogo"); return response.json(); })
      .then(data => { if (!Array.isArray(data.projetos) || !Array.isArray(data.categorias)) throw new Error("Formato inválido"); state.items=data.projetos; state.categories=new Map(data.categorias.map(c=>[c.id,c])); buildFilters(); paint(); })
      .catch(() => { results.replaceChildren(); summary.textContent="Catálogo indisponível"; empty.hidden=true; error.hidden=false; });
  }
  if (typeof document$ !== "undefined" && document$.subscribe) document$.subscribe(setup);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();
})();
