---
hide:
  - toc
---

<div class="tech-article">
  <header class="tech-article__hero">
    <div class="tech-article__eyebrow"><span class="tech-article__dot" aria-hidden="true"></span> BASE DE CONHECIMENTO <span class="tech-article__separator">/</span> MICROSOFT ENTRA ID</div>
    <div class="tech-article__tags" aria-label="Classificação do material"><span>Artigo técnico</span><span>Fundamentos</span><span>Identidade de dispositivos</span></div>
    <h1>Registro, ingresso e ingresso híbrido no Microsoft Entra ID</h1>
    <p class="tech-article__subtitle">Três estados de identidade de dispositivos, com objetivos diferentes. Entenda como cada um funciona, quando costuma ser utilizado e como verificar o vínculo de um computador Windows.</p>
    <div class="tech-article__meta"><span>Por <strong>Raphael Avilla</strong></span><span>Revisado em novembro de 2026</span><span>Leitura estimada: 8 minutos</span></div>
  </header>

  <nav class="tech-article__contents" aria-label="Navegação pelo artigo">
    <span class="tech-article__contents-label">NESTE ARTIGO</span>
    <a href="#conceitos">01. Conceitos</a>
    <a href="#comparacao">02. Comparação</a>
    <a href="#verificacao">03. Verificação no Windows</a>
    <a href="#duvidas">04. Dúvidas comuns</a>
  </nav>

  <div class="tech-article__body">
    <p>Quando um dispositivo aparece no centro de administração do Microsoft Entra, nem sempre está claro o que aquele vínculo representa. Um equipamento pode estar <strong>registrado</strong>, <strong>ingressado</strong> ou <strong>ingressado de forma híbrida</strong>. Esses estados não são equivalentes e influenciam a maneira como o usuário se autentica e como a organização administra o acesso aos recursos.</p>
    <p>Este artigo apresenta os conceitos e os cenários mais comuns, utilizando computadores Windows como referência. O objetivo é oferecer uma base para compreender o assunto antes de executar qualquer configuração.</p>

    <section class="tech-section" id="conceitos">
      <div class="tech-section__heading"><span class="tech-section__number">01</span><div><p class="tech-section__kicker">ENTENDENDO O VÍNCULO</p><h2>O que muda entre os três estados?</h2></div></div>
      <figure class="tech-article__figure">
        <img src="/assets/diagramas/estados-dispositivos-entra.svg" width="1400" height="500" loading="lazy" alt="Comparação ilustrada de três estados: registro com conta pessoal ou local, ingresso com conta corporativa no Windows e ingresso híbrido com Active Directory local e Microsoft Entra ID." />
        <figcaption>Diagrama conceitual elaborado para este artigo. Na coluna de ingresso híbrido, o mesmo dispositivo é representado em relação ao AD DS local e ao Microsoft Entra ID.</figcaption>
      </figure>

      <div class="tech-state-card" id="registrado">
        <div class="tech-state-card__label"><span class="tech-state-card__pill">01</span> DISPOSITIVO REGISTRADO</div>
        <h3>Registro no Microsoft Entra ID</h3>
        <p>O registro cria uma identidade do dispositivo no diretório da organização sem exigir que o usuário entre no Windows com sua conta corporativa. É frequente em cenários de uso de dispositivos pessoais, também conhecidos como <em>Bring Your Own Device</em> (BYOD).</p>
        <p><strong>Exemplo:</strong> uma pessoa utiliza o notebook particular e acessa um aplicativo do Microsoft 365 com a conta de trabalho. Dependendo da experiência e das políticas da organização, esse dispositivo poderá ser registrado no Entra ID. A entrada no Windows continua sendo feita com a conta pessoal ou local.</p>
        <div class="tech-state-card__takeaway"><strong>O ponto principal:</strong> a identidade corporativa é utilizada para acessar recursos da organização, mas não necessariamente para iniciar a sessão no Windows.</div>
      </div>
      <!-- POSIÇÃO RESERVADA PARA PRINT 01: tela do Windows com a conta corporativa conectada em Configurações > Contas > Acessar trabalho ou escola. Não publicar captura sem anonimizar os dados. Ver PLANO_DE_IMAGENS.md. -->

      <div class="tech-state-card" id="ingressado">
        <div class="tech-state-card__label"><span class="tech-state-card__pill">02</span> DISPOSITIVO INGRESSADO</div>
        <h3>Ingresso no Microsoft Entra ID</h3>
        <p>O ingresso vincula o dispositivo diretamente ao Microsoft Entra ID. Em um computador Windows compatível, o usuário pode entrar no próprio sistema operacional com a conta corporativa. Esse modelo é comum em equipamentos da organização e em estratégias de gerenciamento centradas na nuvem.</p>
        <p><strong>Exemplo:</strong> a empresa prepara um notebook para um colaborador que utilizará Microsoft 365 e outros aplicativos corporativos. O dispositivo pode ingressar no Entra ID durante a preparação do Windows ou por meio de uma experiência de provisionamento apropriada.</p>
        <div class="tech-state-card__takeaway"><strong>O ponto principal:</strong> o dispositivo é associado à organização e aceita a identidade do Microsoft Entra para a entrada no Windows.</div>
        <p class="tech-article__inline-note">Em computadores Windows 10 e Windows 11, o ingresso no Microsoft Entra ID não é compatível com as edições Home.</p>
      </div>
      <!-- POSIÇÃO RESERVADA PARA PRINT 02: Windows com dispositivo ingressado no Entra ID; sem dados de usuário, tenant ou identificadores. -->

      <div class="tech-state-card" id="hibrido">
        <div class="tech-state-card__label"><span class="tech-state-card__pill">03</span> DISPOSITIVO INGRESSADO DE FORMA HÍBRIDA</div>
        <h3>Ingresso híbrido no Microsoft Entra ID</h3>
        <p>O dispositivo continua ingressado no Active Directory Domain Services (AD DS) local e, ao mesmo tempo, também passa a existir no Microsoft Entra ID. Em outras palavras, o mesmo computador participa dos dois ambientes. É uma alternativa para organizações com infraestrutura de domínio local que precisam aproveitar recursos de identidade e segurança na nuvem.</p>
        <p><strong>Exemplo:</strong> uma organização já utiliza Active Directory, políticas de grupo e aplicativos que dependem do domínio local. O ingresso híbrido permite manter essa relação com o AD DS e integrar a identidade do dispositivo ao Entra ID.</p>
        <div class="tech-state-card__takeaway"><strong>O ponto principal:</strong> o mesmo dispositivo mantém o vínculo com o domínio local e também possui identidade no Microsoft Entra ID. O modelo híbrido une os dois ambientes e continua dependente de aspectos da infraestrutura local, especialmente da conectividade periódica com os controladores de domínio.</div>
      </div>
      <!-- POSIÇÃO RESERVADA PARA PRINT 03: portal Microsoft Entra exibindo dispositivo com tipo de ingresso híbrido; ocultar tenant e IDs. -->
    </section>

    <section class="tech-section" id="comparacao">
      <div class="tech-section__heading"><span class="tech-section__number">02</span><div><p class="tech-section__kicker">VISÃO COMPARATIVA</p><h2>Comparando os modelos</h2></div></div>
      <div class="tech-table-wrap" role="region" aria-label="Tabela comparativa dos estados de dispositivos" tabindex="0">
        <table class="tech-comparison">
          <thead><tr><th scope="col">Característica</th><th scope="col">Registrado</th><th scope="col">Ingressado</th><th scope="col">Híbrido</th></tr></thead>
          <tbody>
            <tr><th scope="row">Cenário comum</th><td>Dispositivo pessoal (BYOD)</td><td>Dispositivo corporativo</td><td>Dispositivo corporativo em domínio local</td></tr>
            <tr><th scope="row">Entrada no Windows</th><td>Conta pessoal ou local</td><td>Conta corporativa do Entra ID</td><td>Conta corporativa do domínio local</td></tr>
            <tr><th scope="row">Identidade do dispositivo</th><td>Registrada no Entra ID</td><td>Ingressada no Entra ID</td><td>Ingressada no AD DS e no Entra ID</td></tr>
            <tr><th scope="row">Dependência do AD DS local</th><td>Não inerente ao registro</td><td>Não inerente ao ingresso</td><td>Sim, como parte do modelo</td></tr>
            <tr><th scope="row">Intune obrigatório?</th><td>Não</td><td>Não</td><td>Não</td></tr>
          </tbody>
        </table>
      </div>
      <p class="tech-article__caption">A tabela apresenta cenários típicos de dispositivos Windows. O estado de identidade não substitui a análise da estratégia de gerenciamento, das licenças ou das políticas de segurança.</p>
      <div class="tech-alert"><strong>Registro no Entra ID não é inscrição no Intune.</strong><p>Um dispositivo pode possuir identidade no Microsoft Entra ID e não estar gerenciado pelo Microsoft Intune. A inscrição no MDM, a conformidade e as políticas aplicadas precisam ser verificadas separadamente. O inverso também exige analisar o método de inscrição utilizado.</p></div>
    </section>

    <section class="tech-section" id="verificacao">
      <div class="tech-section__heading"><span class="tech-section__number">03</span><div><p class="tech-section__kicker">CONSULTA PRÁTICA</p><h2>Como verificar o estado no Windows</h2></div></div>
      <p>O Windows disponibiliza o comando <code>dsregcmd /status</code>, que permite consultar informações sobre a identidade do dispositivo. Abra um Prompt de Comando no contexto do usuário que você deseja verificar e execute:</p>
      <div class="tech-command"><div class="tech-command__label"><span>Prompt de Comando</span><span>Consulta somente leitura</span></div><pre><code>dsregcmd /status</code></pre></div>
      <p>Na saída, procure a seção <strong>Device State</strong>. Os campos <code>AzureAdJoined</code> e <code>DomainJoined</code> ajudam a diferenciar o ingresso em nuvem do híbrido.</p>
      <div class="tech-diagnostic-grid">
        <div class="tech-diagnostic"><span>INGRESSADO NO ENTRA ID</span><code>AzureAdJoined: YES</code><code>DomainJoined: NO</code></div>
        <div class="tech-diagnostic"><span>INGRESSO HÍBRIDO</span><code>AzureAdJoined: YES</code><code>DomainJoined: YES</code></div>
        <div class="tech-diagnostic"><span>SOMENTE AD DS LOCAL</span><code>AzureAdJoined: NO</code><code>DomainJoined: YES</code></div>
      </div>
      <p>Para investigar o <strong>registro</strong> do dispositivo, consulte também <code>WorkplaceJoined</code> na seção <strong>User State</strong>. Esse valor reflete o contexto da conta do usuário. Por isso, execute a consulta na sessão adequada e não utilize apenas os dois primeiros campos para decidir se existe registro.</p>
      <p class="tech-article__inline-note">A presença de URLs de MDM na saída do comando não comprova, isoladamente, que o dispositivo está inscrito e gerenciado no Intune.</p>
      <!-- POSIÇÃO RESERVADA PARA PRINT 04: imagem real da saída de dsregcmd /status, com os campos de Device State e User State em destaque. Ocultar DeviceId, TenantId, UPN, domínio interno e demais identificadores. -->
    </section>

    <section class="tech-section" id="duvidas">
      <div class="tech-section__heading"><span class="tech-section__number">04</span><div><p class="tech-section__kicker">DÚVIDAS FREQUENTES</p><h2>O que costuma gerar confusão?</h2></div></div>
      <div class="tech-faq">
        <details><summary>Um dispositivo registrado está automaticamente no Intune?</summary><p>Não. Registro no Microsoft Entra ID e inscrição em uma ferramenta de gerenciamento MDM são operações distintas. É necessário verificar a inscrição e o estado de gerenciamento.</p></details>
        <details><summary>Um dispositivo ingressado no Entra ID precisa de Active Directory local?</summary><p>Não. O ingresso no Entra ID não exige o ingresso do equipamento no domínio AD DS. O acesso a determinados recursos locais, quando necessário, depende dos requisitos de rede e autenticação do ambiente.</p></details>
        <details><summary>O ingresso híbrido é sempre a melhor opção em ambientes que possuem AD DS?</summary><p>Não necessariamente. A escolha depende das aplicações, das necessidades de autenticação, da estratégia de gerenciamento e do planejamento de modernização. Mesmo em ambientes híbridos, o ingresso direto no Entra ID pode ser apropriado para novos dispositivos.</p></details>
        <details><summary>Acessar o Teams ou Outlook com a conta de trabalho significa que o Windows ingressou no Entra ID?</summary><p>Não. A autenticação em um aplicativo e o ingresso do sistema operacional são coisas diferentes. Dependendo das opções escolhidas e das políticas aplicáveis, a conta pode estar apenas conectada ou o dispositivo pode ter sido registrado.</p></details>
      </div>
    </section>

    <section class="tech-section tech-section--conclusion" id="conclusao">
      <p class="tech-section__kicker">CONSIDERAÇÕES FINAIS</p>
      <h2>Escolher o vínculo começa por entender o cenário</h2>
      <p>O registro costuma atender a situações em que dispositivos pessoais acessam recursos organizacionais. O ingresso conecta dispositivos à identidade corporativa na nuvem e permite a entrada no Windows com essa conta. Já o ingresso híbrido preserva o vínculo com o domínio local enquanto integra o equipamento ao Microsoft Entra ID.</p>
      <p>Esses conceitos serão a base de três guias práticos separados sobre registro, ingresso e ingresso híbrido. Cada procedimento será publicado quando as etapas e os testes puderem ser documentados com evidências adequadas.</p>
    </section>

    <section class="tech-section tech-references" id="referencias">
      <p class="tech-section__kicker">FONTES E LEITURAS COMPLEMENTARES</p>
      <h2>Referências oficiais</h2>
      <ul>
        <li><a href="https://learn.microsoft.com/pt-br/entra/identity/devices/overview" target="_blank" rel="noopener noreferrer">Microsoft Learn: Identidade de dispositivo no Microsoft Entra ID</a></li>
        <li><a href="https://learn.microsoft.com/pt-br/entra/identity/devices/concept-device-registration" target="_blank" rel="noopener noreferrer">Microsoft Learn: Dispositivos registrados</a></li>
        <li><a href="https://learn.microsoft.com/pt-br/entra/identity/devices/concept-directory-join" target="_blank" rel="noopener noreferrer">Microsoft Learn: Dispositivos ingressados</a></li>
        <li><a href="https://learn.microsoft.com/pt-br/entra/identity/devices/concept-hybrid-join" target="_blank" rel="noopener noreferrer">Microsoft Learn: Dispositivos ingressados de forma híbrida</a></li>
        <li><a href="https://learn.microsoft.com/pt-br/entra/identity/devices/troubleshoot-device-dsregcmd" target="_blank" rel="noopener noreferrer">Microsoft Learn: Diagnóstico com dsregcmd</a></li>
      </ul>
      <p class="tech-article__caption">Artigo elaborado com base na documentação pública da Microsoft, consultada em novembro de 2026. Nomes de menus, requisitos e funcionalidades podem mudar ao longo do tempo.</p>
    </section>
    <div class="tech-article__back"><a href="../../">Voltar para Base de Conhecimento <span aria-hidden="true">↗</span></a><a href="../../">Explorar Base de Conhecimento <span aria-hidden="true">↗</span></a></div>
  </div>
</div>
