# Microsoft Cloud & Security — Portfólio Técnico

Este repositório contém os arquivos-fonte de um site público de documentação técnica, feito com [Zensical](https://zensical.org/) e publicado com o GitHub Pages.

> **Importante:** os artigos demonstrativos são MODELOS de escrita, não implementações realizadas. Edite os textos e substitua as lacunas por experiências próprias antes de divulgar como portfólio profissional.

## Onde editar

- `zensical.toml`: nome, menus, idioma, cores e configurações do site.
- `docs/index.md`: página inicial.
- `docs/sobre.md`: apresentação profissional.
- `docs/conhecimento/`: guias e procedimentos por tecnologia.
- `docs/projetos/`: projetos práticos e estudos de caso.
- `docs/scripts/`: documentação dos scripts de automação.
- `.github/workflows/docs.yml`: publicação automática no GitHub Pages.

## Como publicar pelo GitHub (sem instalar nada)

1. Crie um repositório público com o nome exato `SEUUSUARIO.github.io` (troque SEUUSUARIO pelo seu login do GitHub).
2. Faça upload de **todos os arquivos e pastas da raiz** deste projeto para a **raiz** do repositório. Não envie o ZIP fechado. Confira que `zensical.toml`, `docs/` e `.github/workflows/docs.yml` ficaram na raiz correta.
3. Vá em **Settings > Pages > Build and deployment > Source**, escolha **GitHub Actions**.
4. Abra a aba **Actions** e verifique a execução de **Publicar portfólio técnico**. Se o fluxo não iniciou, use **Run workflow**.
5. Confira em **Settings > Pages** o link de acesso ou abra `https://SEUUSUARIO.github.io/`.

Se a pasta oculta `.github` não aparecer ao extrair o ZIP, habilite a exibição de arquivos ocultos (Windows: Exibir > Itens ocultos; macOS: Command + Shift + ponto). Outra opção é criar o arquivo pelo editor web do GitHub, com o caminho `.github/workflows/docs.yml`, copiando o conteúdo deste pacote.

**Cuidado:** a pasta extraída tem um nome próprio, mas você deve enviar o **conteúdo** dela para a raiz do repositório, e não enviar uma pasta com todos os arquivos dentro.

## Como publicar um artigo novo

1. No GitHub, abra `docs/conhecimento/entra-id/` (ou outra seção).
2. Clique em **Add file > Create new file** e dê um nome terminado em `.md`, por exemplo `mfa-resistente-a-phishing.md`.
3. Escreva usando Markdown. Comece com um título `#`.
4. Clique em **Commit changes**.
5. Para ter controle da ordem e do título nos menus, adicione o novo caminho na lista `nav` em `zensical.toml` e faça outro commit. Também é possível remover a lista `nav` inteira para que o menu seja montado automaticamente a partir das pastas.
6. Na aba Actions, acompanhe a publicação.

## Boas práticas para conteúdo público

- Nunca publique credenciais, tokens, nomes de usuários corporativos, dados pessoais, IDs de ambiente sensíveis ou capturas de tela confidenciais.
- Não publique material interno de clientes ou da empresa sem autorização.
- Indique claramente se um cenário é **laboratório**, **simulação** ou **implantação real autorizada**.
- Não apresente projetos de exemplo como trabalhos executados.

## Prévia local (opcional, para um segundo momento)

Com Python instalado, siga as instruções oficiais do Zensical para instalar o pacote e usar `zensical serve`. Não é necessário para a publicação inicial pelo GitHub.
