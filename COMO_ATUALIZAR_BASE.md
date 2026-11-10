# Administração da base de conhecimento

A página `docs/conhecimento/index.md` é o catálogo visual. O Zensical publica o conteúdo, e um JavaScript filtra os materiais pelo título, descrição, etiquetas e palavras-chave.

## Como incluir um novo artigo no catálogo

1. Crie o artigo Markdown na pasta temática, por exemplo `docs/conhecimento/entra-id/novo-artigo.md`.
2. Abra `docs/assets/dados/catalogo-conhecimento.json` e acrescente um novo objeto em `materiais`, respeitando o formato dos itens já existentes.
3. Use `tipo: "modelo"` apenas para materiais que sejam modelos. Use `tipo: "area"` para páginas de categorias. Quando um guia finalizado for publicado, use `tipo: "guia"` para identificá-lo como guia técnico. Os tipos disponíveis são `modelo`, `area` e `guia`.
4. Defina `categoria` usando `entra`, `intune`, `defender` ou `automacao`. O campo `url` é relativo à página da base de conhecimento.
5. Inclua o novo artigo na navegação de `zensical.toml` se quiser que ele apareça também no menu lateral. A busca do catálogo utiliza somente o JSON.
6. Faça commit e Push origin pelo GitHub Desktop.

## Dicas

A busca ignora diferenças entre letras maiúsculas e minúsculas e entre palavras com ou sem acento. Os filtros operam no próprio navegador e não enviam a pesquisa para um servidor externo.

Mantenha os campos `palavras_chave` e `etiquetas` coerentes com o conteúdo real. Uma publicação marcada como modelo não deve ser apresentada como experiência concluída.

## Arquivos envolvidos

* `docs/conhecimento/index.md`: estrutura visual da página.
* `docs/assets/dados/catalogo-conhecimento.json`: textos e links dos cartões.
* `docs/javascripts/conhecimento.js`: busca e filtros.
* `docs/stylesheets/extra.css`: aparência do catálogo.
* `zensical.toml`: registro do JavaScript no Zensical.

Para adicionar uma nova tecnologia aos filtros, acrescente uma categoria em `categorias`, indique o mesmo identificador no novo material e publique o JSON atualizado. Os botões são criados automaticamente.
