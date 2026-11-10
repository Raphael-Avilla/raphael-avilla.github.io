---
hide:
  - toc
---

<div class="knowledge-hub" id="knowledge-hub" data-catalog-url="../assets/dados/catalogo-conhecimento.json">
  <section class="knowledge-hero" aria-labelledby="knowledge-title">
    <div class="knowledge-hero__copy">
      <p class="knowledge-eyebrow"><span class="knowledge-signal" aria-hidden="true"></span> BASE DE CONHECIMENTO <span aria-hidden="true" class="knowledge-eyebrow__slash">/</span> BIBLIOTECA TÉCNICA</p>
      <h1 id="knowledge-title">Guias e documentações <span>para consulta e estudo.</span></h1>
      <p class="knowledge-hero__lead">Tutoriais, referências e procedimentos sobre identidade, dispositivos, segurança e automação no ecossistema Microsoft.</p>
      <p class="knowledge-hero__support">A biblioteca está em construção e será ampliada conforme novos conteúdos forem documentados. Você pode navegar por tecnologia ou pesquisar um assunto para encontrar os materiais disponíveis.</p>
    </div>
    <aside class="knowledge-guide" aria-label="Como explorar a biblioteca">
      <p class="knowledge-guide__label">COMO EXPLORAR</p>
      <div class="knowledge-guide__step"><span>01</span><div><strong>Pesquise um tema</strong><p>Use palavras como MFA, Intune, Windows ou Defender.</p></div></div>
      <div class="knowledge-guide__step"><span>02</span><div><strong>Filtre por tecnologia</strong><p>Encontre conteúdos dentro da área que deseja estudar.</p></div></div>
      <div class="knowledge-guide__step"><span>03</span><div><strong>Acesse a documentação</strong><p>Consulte guias, modelos e páginas de referência.</p></div></div>
    </aside>
  </section>

  <section class="knowledge-explorer" aria-labelledby="knowledge-search-heading">
    <div class="knowledge-explorer__heading">
      <div><p class="knowledge-kicker">EXPLORE OS MATERIAIS</p><h2 id="knowledge-search-heading">Buscar por assunto, ferramenta ou palavra-chave</h2></div>
    </div>
    <div class="knowledge-search-box">
      <svg class="knowledge-search-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4.2-4.2"/></svg>
      <input id="knowledge-search" type="search" autocomplete="off" spellcheck="false" placeholder="Ex.: Acesso Condicional, MFA, Intune, Defender..." aria-controls="knowledge-results" />
      <button class="knowledge-clear" id="knowledge-clear" type="button" hidden aria-label="Limpar pesquisa">Limpar</button>
    </div>
    <div class="knowledge-filters-row">
      <span class="knowledge-filter-label">FILTRAR POR TECNOLOGIA</span>
      <div class="knowledge-filters" role="group" aria-label="Filtrar por tecnologia">
        <button type="button" class="knowledge-filter is-active" data-category="todos" aria-pressed="true">Todos</button>
      </div>
    </div>
  </section>

  <section class="knowledge-library" aria-labelledby="knowledge-library-heading">
    <div class="knowledge-library__heading">
      <div><p class="knowledge-kicker">CATÁLOGO DE CONHECIMENTO</p><h2 id="knowledge-library-heading">Materiais disponíveis</h2></div>
      <p id="knowledge-result-count" class="knowledge-result-count" role="status" aria-live="polite">Carregando materiais...</p>
    </div>
    <div id="knowledge-results" class="knowledge-results" aria-live="off">
      <div class="knowledge-loading" role="status">Preparando os materiais da biblioteca...</div>
    </div>
    <div id="knowledge-empty" class="knowledge-empty" hidden>
      <div class="knowledge-empty__symbol" aria-hidden="true">?</div>
      <h3>Nenhum resultado encontrado</h3>
      <p>Tente outra palavra ou remova o filtro selecionado.</p>
      <button type="button" id="knowledge-reset">Limpar filtros</button>
    </div>
    <div id="knowledge-error" class="knowledge-empty" hidden>
      <h3>O catálogo não pôde ser carregado agora</h3>
      <p>Você ainda pode acessar as áreas técnicas pelos links abaixo.</p>
    </div>
  </section>

  <section class="knowledge-footer" aria-label="Informações sobre os materiais">
    <div><p class="knowledge-kicker">CONTEÚDO EM EVOLUÇÃO</p><h2>Aprender, documentar e compartilhar.</h2><p>Esta biblioteca será ampliada à medida que novos estudos, laboratórios e projetos forem documentados. Os itens identificados como <strong>modelo didático</strong> são estruturas de referência e não representam implementações concluídas.</p></div>
    <div class="knowledge-footer__links"><a href="entra-id/">Microsoft Entra ID <span aria-hidden="true">↗</span></a><a href="intune/">Microsoft Intune <span aria-hidden="true">↗</span></a><a href="defender/">Microsoft Defender <span aria-hidden="true">↗</span></a><a href="../scripts/">Scripts e automações <span aria-hidden="true">↗</span></a></div>
  </section>
</div>
