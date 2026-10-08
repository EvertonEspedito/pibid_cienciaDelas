/**
 * ============================================================================
 *  PROJETOS DO SITE — É AQUI QUE VOCÊ ADICIONA OS PROJETOS
 * ============================================================================
 *
 * Como adicionar um projeto:
 *   1. Copie um bloco `{ ... },` da lista abaixo e cole no final da lista.
 *   2. Troque os textos. Só `slug`, `title`, `summary`, `description`, `category`,
 *      `year` e `authors` são obrigatórios — o resto pode ser apagado.
 *   3. Fotos: coloque os arquivos em `public/projetos/<slug>/` e use o caminho
 *      "projetos/<slug>/foto1.jpg". (Também pode usar um link https://...)
 *   4. Vídeos: cole o link do YouTube ou do Google Drive (compartilhado como "qualquer pessoa com o link").
 *   5. Salve. A categoria nova, o ano e os números do site se atualizam sozinhos.
 *
 * Os projetos abaixo são EXEMPLOS FICTÍCIOS (têm `example: true`).
 * APAGUE todos antes de publicar. Quando nenhum projeto for `example`, o aviso
 * de "versão de demonstração" some do site.
 */
import { placeholderImage, type PlaceholderMotif } from '@/utils/placeholder'
import type { Project } from './types'

/** Imagem ilustrativa gerada por código — só para os exemplos. */
const ex = (seed: string, motif: PlaceholderMotif) => placeholderImage({ seed, motif, note: 'exemplo' })

const EX_VIDEO = 'https://www.youtube.com/watch?v=EXEMPLO'
const EX_LINK = 'https://example.com'

export const projects: Project[] = [
  {
    slug: 'energia-solar-na-escola',
    title: 'Energia solar na escola',
    summary: 'Um protótipo que transforma luz do sol em movimento para explicar energia renovável.',
    description:
      '[Exemplo] As estudantes construíram um protótipo simples com uma placa fotovoltaica pequena e um motor, investigando como a luz solar pode virar energia elétrica. [Descrição do projeto — substituir pelo texto real].',
    category: 'Física',
    year: 2026,
    authors: ['Estudante A.', 'Estudante B.', 'Estudante C.'],
    advisors: ['[Nome do(a) professor(a) supervisor(a)]', '[Nome do(a) bolsista PIBID]'],
    school: '[Nome da escola]',
    objective: '[Exemplo] Compreender a conversão de energia e discutir fontes renováveis.',
    development: '[Exemplo] Pesquisa em grupo, montagem do protótipo, medições em diferentes horários do dia e registro dos resultados.',
    results: '[Exemplo] Apresentação do protótipo e de um pôster para a comunidade escolar.',
    cover: ex('energia', 'orbit'),
    images: [
      { src: ex('energia-1', 'orbit'), caption: 'Protótipo em teste' },
      { src: ex('energia-2', 'stars'), caption: 'Medições ao sol' },
    ],
    links: [
      { type: 'poster', label: 'Pôster (exemplo)', url: EX_LINK },
      { type: 'slide', label: 'Slides da apresentação (exemplo)', url: EX_LINK },
    ],
    keywords: ['energia', 'renovável', 'fotovoltaica', 'sustentabilidade'],
    featured: true,
    example: true,
  },
  {
    slug: 'horta-de-ciencias',
    title: 'Horta de ciências',
    summary: 'Cultivo de plantas para observar germinação, luz e água, com registro em diário de campo.',
    description:
      '[Exemplo] Uma horta experimental para observar o ciclo de vida das plantas e testar variáveis como luz e água. [Descrição do projeto — substituir pelo texto real].',
    category: 'Biologia',
    year: 2026,
    authors: ['Estudante D.', 'Estudante E.'],
    advisors: ['[Nome do(a) professor(a) supervisor(a)]'],
    objective: '[Exemplo] Praticar o método científico observando o crescimento de plantas.',
    development: '[Exemplo] Plantio em grupos, medição semanal e registro fotográfico em diário de campo.',
    results: '[Exemplo] Painel com gráficos de crescimento e vídeo-resumo da experiência.',
    cover: ex('horta', 'leaf'),
    images: [
      { src: ex('horta-1', 'leaf'), caption: 'Primeiros brotos' },
      { src: ex('horta-2', 'leaf'), caption: 'Registro semanal' },
    ],
    videos: [{ title: 'Diário da horta (exemplo)', url: EX_VIDEO }],
    keywords: ['plantas', 'germinação', 'método científico'],
    featured: true,
    example: true,
  },
  {
    slug: 'quimica-do-dia-a-dia',
    title: 'Química do dia a dia',
    summary: 'Experimentos seguros com materiais caseiros: ácidos, bases e indicadores naturais.',
    description:
      '[Exemplo] Série de experimentos seguros que usam repolho roxo como indicador de pH em produtos do cotidiano. [Descrição do projeto — substituir pelo texto real].',
    category: 'Química',
    year: 2026,
    authors: ['Estudante F.', 'Estudante G.', 'Estudante H.'],
    objective: '[Exemplo] Relacionar conceitos de ácidos e bases a situações do cotidiano.',
    development: '[Exemplo] Preparo do indicador natural, testes com diferentes soluções e registro das cores observadas.',
    results: '[Exemplo] Roteiro de experimentos em PDF e vídeo da oficina.',
    cover: ex('quimica', 'molecule'),
    images: [{ src: ex('quimica-1', 'molecule'), caption: 'Escala de cores do indicador' }],
    videos: [{ title: 'Oficina de indicadores (exemplo)', url: EX_VIDEO }],
    links: [{ type: 'pdf', label: 'Roteiro dos experimentos (exemplo)', url: EX_LINK }],
    keywords: ['pH', 'indicador', 'experimento'],
    featured: true,
    example: true,
  },
  {
    slug: 'robo-seguidor-de-linha',
    title: 'Robô seguidor de linha',
    summary: 'Montagem e programação de um pequeno robô que segue um caminho desenhado no chão.',
    description:
      '[Exemplo] Estudantes montaram e programaram um robô com sensores infravermelhos para seguir uma pista. [Descrição do projeto — substituir pelo texto real].',
    category: 'Robótica',
    year: 2026,
    authors: ['Estudante I.', 'Estudante J.'],
    objective: '[Exemplo] Introduzir lógica de programação e eletrônica básica de forma prática.',
    development: '[Exemplo] Montagem, calibração dos sensores, programação e testes na pista.',
    results: '[Exemplo] Demonstração ao vivo e vídeo do percurso.',
    cover: ex('robo', 'circuit'),
    videos: [{ title: 'Robô na pista (exemplo)', url: EX_VIDEO }],
    links: [{ type: 'documento', label: 'Esquema de ligação dos sensores (exemplo)', url: EX_LINK }],
    keywords: ['robô', 'sensores', 'eletrônica'],
    example: true,
  },
  {
    slug: 'jogo-da-tabela-periodica',
    title: 'Jogo da tabela periódica',
    summary: 'Um jogo de perguntas e respostas feito pelas estudantes para aprender os elementos.',
    description:
      '[Exemplo] Um jogo web de perguntas sobre elementos químicos, programado pelas próprias estudantes. [Descrição do projeto — substituir pelo texto real].',
    category: 'Programação',
    year: 2026,
    authors: ['Estudante B.', 'Estudante K.'],
    objective: '[Exemplo] Aprender programação criando um produto útil para a turma.',
    development: '[Exemplo] Roteiro das perguntas, design das telas e programação em HTML, CSS e JavaScript.',
    results: '[Exemplo] Jogo publicado e usado em sala de aula.',
    cover: ex('jogo', 'hex'),
    links: [{ type: 'site', label: 'Visitar projeto', url: EX_LINK }],
    keywords: ['jogo', 'programação', 'web'],
    example: true,
  },
  {
    slug: 'matematica-das-estrelas',
    title: 'Matemática das estrelas',
    summary: 'Proporção, escala e distância: como medir o que não conseguimos alcançar.',
    description:
      '[Exemplo] Atividades de escala e proporção usando o sistema solar e constelações como contexto. [Descrição do projeto — substituir pelo texto real].',
    category: 'Matemática',
    year: 2026,
    authors: ['Estudante A.', 'Estudante L.'],
    objective: '[Exemplo] Aplicar proporções e escalas em um problema que desperte curiosidade.',
    development: '[Exemplo] Construção de um modelo em escala do sistema solar no pátio.',
    results: '[Exemplo] Pôster e apresentação de slides sobre o modelo.',
    cover: ex('estrelas', 'stars'),
    links: [
      { type: 'poster', label: 'Pôster (exemplo)', url: EX_LINK },
      { type: 'slide', label: 'Slides (exemplo)', url: EX_LINK },
    ],
    keywords: ['escala', 'proporção', 'astronomia'],
    example: true,
  },
]
