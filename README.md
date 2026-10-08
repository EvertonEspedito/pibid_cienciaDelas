# Ciência Delas — landing page do PIBID

Landing page (uma página só) que reúne os projetos, pôsteres, vídeos, sites e fotos das estudantes na intervenção do PIBID **"Ciência Delas"**. Não tem backend nem API: **você edita alguns arquivos de texto e publica**.

Seções: Início · Sobre · Números · Exposição (destaques) · Projetos (busca e filtros) · Jornada · Galeria · Contato. Cada projeto abre numa janela e tem link próprio (`seusite.com/#projeto/nome-do-projeto`). Tem modo claro/escuro, funciona bem no celular e segue boas práticas de acessibilidade.

> ⚠️ Os projetos, fotos, datas e textos atuais são **EXEMPLOS FICTÍCIOS**. Um aviso de "versão de demonstração" aparece no topo enquanto existir algum projeto com `example: true`.

## Rodar no seu computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install
npm run dev      # abre em http://localhost:5173 e atualiza ao salvar
```

## Onde editar cada coisa

Tudo fica em `src/data/`. Salvou, o site atualiza.

| Arquivo | O que controla |
| --- | --- |
| `src/data/projects.ts` | **Os projetos** (cartões, janela do projeto, filtros, números) |
| `src/data/site.ts` | Textos da Home/Sobre, nome da escola, universidade, coordenação e contato |
| `src/data/timeline.ts` | Marcos da seção "Nossa jornada" |
| `src/data/gallery.ts` | Fotos da galeria |

Textos entre colchetes, como `[Nome da escola]`, são **placeholders**: troque pelo texto oficial. Nada foi inventado sobre escola, universidade, PIBID ou resultados.

## Como adicionar um projeto

1. Abra `src/data/projects.ts`, copie um bloco `{ ... },` e cole no fim da lista.
2. Preencha. Só `slug`, `title`, `summary`, `description`, `category`, `year` e `authors` são obrigatórios; o resto você pode apagar.

```ts
{
  slug: 'energia-solar',                 // sem espaços/acentos; vira o link #projeto/energia-solar
  title: 'Energia solar na escola',
  summary: 'Frase curta que aparece no cartão.',
  description: 'Texto completo do projeto.',
  category: 'Física',                    // categoria nova aparece sozinha nos filtros
  year: 2026,
  authors: ['Maria S.', 'Ana P.'],       // como o nome deve aparecer em público
  advisors: ['Prof.ª Fulana'],           // opcional
  school: 'Nome da escola',              // opcional
  objective: '...', development: '...', results: '...',   // opcionais
  cover: 'projetos/energia-solar/capa.jpg',               // opcional
  images: [{ src: 'projetos/energia-solar/foto1.jpg', caption: 'Montagem do protótipo' }],
  videos: [{ title: 'Apresentação', url: 'https://www.youtube.com/watch?v=XXXX' }],
  links: [
    { type: 'poster', label: 'Pôster em PDF', url: 'projetos/energia-solar/poster.pdf' },
    { type: 'site', label: 'Visitar projeto', url: 'https://...' },   // vira o botão "Visitar projeto"
  ],
  keywords: ['energia', 'sustentabilidade'],   // ajudam na busca
  featured: true,                              // aparece também na seção "Exposição"
},
```

Tipos de `links`: `poster`, `slide`, `pdf`, `site`, `documento`, `outro`.

3. Para **apagar os exemplos**, remova os blocos que têm `example: true`. Quando não sobrar nenhum, o aviso de demonstração some. Faça o mesmo em `timeline.ts` e `gallery.ts` (listas vazias `[]` escondem a seção).

## Fotos, PDFs e vídeos

- **Fotos e PDFs:** coloque os arquivos em `public/` (por exemplo `public/projetos/energia-solar/foto1.jpg`) e use o caminho **sem a barra inicial**: `projetos/energia-solar/foto1.jpg`. Para a galeria, use `public/galeria/`. Também pode usar links `https://...`.
- **Tamanho:** reduza as fotos antes (ideal até ~300 KB cada, largura de 1600 px). Formatos: JPG, PNG, WEBP.
- **Vídeos:** não coloque vídeo pesado no site. Envie para o YouTube (pode ser "não listado") ou Google Drive (compartilhado como "qualquer pessoa com o link") e cole o link em `videos`. O vídeo só carrega quando a pessoa clica em "Assistir".
- **Sem capa?** O site gera uma ilustração automática.

## Privacidade dos estudantes

- Em `authors`, escreva o nome **como foi autorizado** pela escola (ex.: `"Maria S."` ou `"Maria Silva"`).
- Não coloque CPF, telefone, endereço ou documentos em nenhum arquivo.
- Publique fotos e vídeos de estudantes **somente com autorização** de uso de imagem.

## Publicar (site estático, grátis)

```bash
npm run build     # gera a pasta dist/
```

Envie a pasta `dist/` para qualquer hospedagem estática:

- **Netlify:** arraste a pasta `dist` em app.netlify.com/drop.
- **Vercel:** importe o repositório (build `npm run build`, saída `dist`).
- **GitHub Pages:** publique o conteúdo de `dist/` (o site usa caminhos relativos e funciona em subpastas).

Depois de publicar, edite `og:image` em `index.html` se quiser uma imagem de compartilhamento própria (`public/og-image.svg` é provisória) e troque `public/favicon.svg` se houver logotipo oficial.

## Estrutura

```
src/
  data/         ← VOCÊ EDITA AQUI (projects, site, timeline, gallery)
  sections/     seções da página (Hero, About, Stats, Featured, Projects, Journey, Gallery)
  components/   cartão e janela de projeto, galeria de fotos, vídeo, busca; ui/ = botões, modal, ícones
  layouts/      menu, rodapé, alternância claro/escuro
  styles/       cores e tema (claro/escuro) em index.css
  utils/        busca, formatação, imagens
public/         fotos, PDFs, favicon (arquivos estáticos)
```

Para mudar as cores da identidade, edite as variáveis no começo de `src/styles/index.css`.

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Confere os tipos e gera `dist/` |
| `npm run preview` | Testa o build localmente |
