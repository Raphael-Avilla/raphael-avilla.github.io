---
hide:
  - toc
---

<div class="knowledge-hub projects-hub" id="projects-hub" data-catalog-url="../assets/dados/catalogo-projetos.json">
  <section class="knowledge-hero" aria-labelledby="knowledge-title">
    <div class="knowledge-hero__copy">
      <p class="knowledge-eyebrow"><span class="knowledge-signal" aria-hidden="true"></span> PROJETOS PRÁTICOS <span class="knowledge-eyebrow__slash" aria-hidden="true">/</span> VISÃO GERAL</p>
      <h1 id="knowledge-title">Projetos técnicos <span>com contexto e resultados.</span></h1>
      <p class="knowledge-hero__lead">Um espaço para reunir implementações, laboratórios e soluções documentadas, com atenção às decisões técnicas e aos resultados obtidos.</p>
      <p class="knowledge-hero__support">Os projetos serão publicados à medida que forem concluídos e revisados. Cada registro deixará claro o cenário, a implementação e a forma de validação.</p>
    </div>
    <aside class="knowledge-guide" aria-label="Como os projetos serão documentados">
      <p class="knowledge-guide__label">COMO OS PROJETOS SÃO ORGANIZADOS</p>
      <div class="knowledge-guide__step"><span>01</span><div><strong>Cenário e objetivo</strong><p>O problema, o ambiente e o resultado esperado.</p></div></div>
      <div class="knowledge-guide__step"><span>02</span><div><strong>Implementação</strong><p>As escolhas técnicas e as etapas executadas.</p></div></div>
      <div class="knowledge-guide__step"><span>03</span><div><strong>Validação</strong><p>Testes, evidências, limitações e aprendizados.</p></div></div>
    </aside>
  </section>

  <section class="knowledge-explorer" aria-labelledby="projects-search-heading">
    <div class="knowledge-explorer__heading"><div><p class="knowledge-kicker">EXPLORE OS PROJETOS</p><h2 id="projects-search-heading">Buscar por projeto, tecnologia ou tema</h2></div></div>
    <div class="knowledge-search-box">
      <svg class="knowledge-search-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.2-4.2"/></svg>
      <input id="projects-search" type="search" autocomplete="off" spellcheck="false" placeholder="Ex.: Entra ID, Intune, segurança, automação..." aria-label="Pesquisar projetos" aria-controls="projects-results" />
      <button class="knowledge-clear" id="projects-clear" type="button" hidden aria-label="Limpar pesquisa">Limpar</button>
    </div>
    <div class="knowledge-filters-row"><span class="knowledge-filter-label">FILTRAR POR ÁREA</span>
      <div class="knowledge-filters" role="group" aria-label="Filtrar projetos por área"><button type="button" class="knowledge-filter is-active" data-category="todos" aria-pressed="true">Todos</button></div>
    </div>
  </section>

  <section class="knowledge-library" aria-labelledby="projects-list-heading">
    <div class="knowledge-library__heading"><div><p class="knowledge-kicker">ACERVO DE PROJETOS</p><h2 id="projects-list-heading">Projetos publicados</h2></div><p id="projects-result-count" class="knowledge-result-count" role="status" aria-live="polite">Carregando projetos...</p></div>
    <div id="projects-results" class="knowledge-results"><div class="knowledge-loading">Preparando o catálogo de projetos...</div></div>
    <div id="projects-empty" class="knowledge-empty" hidden>
      <div class="knowledge-empty__symbol" aria-hidden="true">+</div>
      <h3>Nenhum projeto publicado por enquanto</h3>
      <p>A página já está preparada para receber projetos documentados quando estiverem concluídos.</p>
      <button type="button" id="projects-reset" hidden>Limpar filtros</button>
    </div>
    <div id="projects-error" class="knowledge-empty" hidden><h3>Não foi possível carregar os projetos</h3><p>Tente novamente mais tarde.</p></div>
  </section>

  <section class="projects-method" aria-labelledby="projects-method-title">
    <div class="projects-method__heading"><p class="knowledge-kicker">DOCUMENTAÇÃO DOS PROJETOS</p><h2 id="projects-method-title">O que cada publicação vai apresentar</h2><p>Um registro técnico pensado para mostrar tanto a solução quanto o caminho percorrido.</p></div>
    <div class="projects-method__grid">
      <div class="projects-method__item"><span>01</span><h3>Contexto</h3><p>Necessidade, objetivos, ambiente e requisitos.</p></div>
      <div class="projects-method__item"><span>02</span><h3>Execução</h3><p>Planejamento, configurações e decisões técnicas.</p></div>
      <div class="projects-method__item"><span>03</span><h3>Verificação</h3><p>Testes, resultados, limites e pontos de melhoria.</p></div>
    </div>
  </section>

  <section class="knowledge-footer" aria-label="Navegação adicional">
    <div><p class="knowledge-kicker">REGISTROS COM CONTEXTO</p><h2>Documentação que acompanha a prática.</h2><p>Os projetos poderão envolver laboratórios, trabalhos pessoais ou implementações autorizadas. A identificação de cada cenário fará parte da documentação, sempre preservando dados e configurações sensíveis.</p></div>
    <div class="knowledge-footer__links"><a href="../conhecimento/">Consultar base de conhecimento <span aria-hidden="true">↗</span></a><a href="../sobre/">Sobre o portfólio <span aria-hidden="true">↗</span></a></div>
  </section>
</div>
