# Primeira publicação da Base de Conhecimento

## Arquivos contidos neste pacote

| Arquivo | Função |
| --- | --- |
| `docs/conhecimento/entra-id/registro-ingresso-hibrido.md` | Primeiro artigo técnico completo. |
| `docs/assets/diagramas/estados-dispositivos-entra.svg` | Diagrama ilustrativo autoral. |
| `docs/stylesheets/artigos.css` | Identidade visual dos artigos técnicos. |
| `docs/conhecimento/entra-id/index.md` | Lista de artigos da categoria Entra ID. |
| `docs/assets/dados/catalogo-conhecimento.json` | Cadastro do artigo na pesquisa da Base de Conhecimento. |
| `docs/javascripts/conhecimento.js` | Suporte ao rótulo Artigo técnico nos cartões da pesquisa. |
| `zensical.toml` | Menus e CSS adicionais para a nova página. |
| `MODELOS_EDITORIAIS/` | Modelos para publicações futuras, sem aparecer no site. |
| `PLANO_DE_IMAGENS.md` | Locais reservados para capturas reais. |

## Publicar pelo GitHub Desktop

1. Confirme que o GitHub Desktop esteja na branch `main` e não haja alterações locais pendentes.
2. Extraia o ZIP para uma pasta temporária, fora do repositório.
3. Copie as pastas e os arquivos extraídos para a pasta local de `raphael-avilla.github.io`, substituindo somente os arquivos com nomes coincidentes.
4. **Não apague a pasta `.git`**, nem exclua outros arquivos do seu site.
5. No GitHub Desktop, confira as alterações e registre um commit com a mensagem `Primeiro artigo: estados de dispositivos no Entra ID`.
6. Clique em **Push origin**. Fetch origin não publica alterações locais.
7. Confira a execução `Publicar portfólio técnico` em `https://github.com/Raphael-Avilla/raphael-avilla.github.io/actions`.
8. Abra `https://raphael-avilla.github.io/conhecimento/entra-id/registro-ingresso-hibrido/`.
9. Teste também a pesquisa em `https://raphael-avilla.github.io/conhecimento/` usando os termos `registro`, `híbrido` ou `dsregcmd`.

## Observações

* A página explica conceitos. Ela não simula uma configuração real executada por Raphael.
* Prints reais são opcionais nesta primeira publicação. Há pontos de inserção já comentados para uma atualização posterior.
* Não há travessões no texto editorial do artigo.
* Nenhum arquivo das páginas Início, Sobre, Projetos ou Contato foi modificado neste pacote.
