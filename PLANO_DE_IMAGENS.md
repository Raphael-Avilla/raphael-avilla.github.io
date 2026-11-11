# Plano de imagens do primeiro artigo

O artigo já utiliza um diagrama SVG próprio, incluído em `docs/assets/diagramas/estados-dispositivos-entra.svg`.

As posições para capturas reais foram reservadas como comentários no arquivo do artigo. Esses comentários **não aparecem para os visitantes**. Assim, é possível publicar o material sem prints fictícios ou espaços vazios.

## Prints recomendados

1. `docs/assets/imagens/entra-id/registro-conta-windows.png`: tela Configurações > Contas > Acessar trabalho ou escola em um dispositivo registrado.
2. `docs/assets/imagens/entra-id/ingresso-windows.png`: evidência de dispositivo ingressado na organização, sem identificação de pessoas.
3. `docs/assets/imagens/entra-id/ingresso-hibrido-portal.png`: estado de ingresso híbrido mostrado no centro de administração do Entra ID.
4. `docs/assets/imagens/entra-id/dsregcmd-status.png`: saída de `dsregcmd /status` destacando Device State e User State.

## Como inserir uma captura de tela

No arquivo `docs/conhecimento/entra-id/registro-ingresso-hibrido.md`, localize o comentário referente ao print desejado. Remova o comentário e insira no lugar:

```html
<figure class="tech-article__figure">
  <img src="/assets/imagens/entra-id/registro-conta-windows.png" alt="Tela de Contas do Windows exibindo a conexão com a organização." loading="lazy">
  <figcaption>Figura. Exemplo de registro do dispositivo no Microsoft Entra ID.</figcaption>
</figure>
```

Antes de publicar, confirme que a imagem está no caminho informado.

## Segurança e qualidade

* Use preferencialmente um laboratório isolado e autorizado.
* Oculte e-mails, nomes de usuários, nomes de dispositivos, IDs de diretório, endereços internos e demais dados que possam revelar informações corporativas.
* Verifique se não há informações sensíveis em notificações, abas, perfis ou outras partes da tela.
* Não apresente imagens simuladas como evidências de implementações reais.
* Garanta legibilidade, utilize PNG ou WebP e descreva cada figura por meio de texto alternativo e legenda.
