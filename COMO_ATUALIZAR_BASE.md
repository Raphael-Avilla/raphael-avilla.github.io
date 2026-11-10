# Atualização dos catálogos

## Base de conhecimento

Os artigos aparecem na busca quando são cadastrados em `docs/assets/dados/catalogo-conhecimento.json`.

1. Crie um novo `.md` na pasta correspondente em `docs/conhecimento`.
2. Adicione um item ao array `materiais`, incluindo `titulo`, `descricao`, `categoria`, `tipo`, `url`, `etiquetas` e `palavras_chave`.
3. Adicione a página à navegação em `zensical.toml` se desejar exibi-la no menu.

As categorias ficam disponíveis mesmo quando o array de materiais está vazio. O catálogo não deve incluir páginas que ainda não foram publicadas.

## Projetos práticos

Os projetos aparecem na página `projetos/` a partir de `docs/assets/dados/catalogo-projetos.json`.

1. Crie a página de projeto em `docs/projetos/`.
2. Adicione um item ao array `projetos` com `titulo`, `descricao`, `categoria`, `contexto`, `url`, `tecnologias` e `palavras_chave`.
3. Informe claramente no artigo se o caso é laboratório, projeto pessoal ou implementação autorizada.
4. Inclua a nova página no menu `zensical.toml` quando fizer sentido.

### Exemplo de estrutura de cadastro

```json
{
  "titulo": "Nome do projeto",
  "descricao": "Objetivo e escopo resumidos",
  "categoria": "identidade",
  "contexto": "LABORATÓRIO",
  "url": "nome-do-projeto/",
  "tecnologias": ["Microsoft Entra ID"],
  "palavras_chave": ["controle de acesso"]
}
```

O exemplo acima é somente uma referência para administrar o catálogo, não um projeto publicado.
