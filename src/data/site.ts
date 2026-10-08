/**
 * TEXTOS E INFORMAÇÕES DO SITE
 *
 * Tudo que está entre colchetes [assim] é um PLACEHOLDER: troque pelo texto oficial.
 * Não foram inventadas informações sobre escola, universidade, PIBID ou resultados.
 */
export const site = {
  name: 'Ciência Delas',
  tagline: 'Conhecimento, criatividade e protagonismo transformando a ciência.',
  heroText:
    'Um acervo público com os projetos, experimentos, pôsteres, vídeos e sites que as estudantes produziram durante a intervenção do PIBID. [Descrição oficial do projeto]',

  /** Rodapé / contato */
  school: '[Nome da escola]',
  university: '[Nome da instituição de ensino superior]',
  coordinator: '[Nome do(a) coordenador(a)]',
  contactEmail: '[E-mail de contato]',

  /** Seção "Sobre". Pode adicionar, remover ou reordenar blocos. */
  about: {
    title: 'O que é o Ciência Delas?',
    intro:
      '[Descrição oficial do projeto] O Ciência Delas reúne atividades de ciência e tecnologia desenvolvidas com estudantes durante a intervenção do PIBID, valorizando a participação das meninas na ciência.',
    pillars: [
      { icon: 'flask', title: 'Ciência', text: 'Investigar, testar hipóteses e aprender fazendo. [Adicionar informação]' },
      { icon: 'globe', title: 'Tecnologia', text: 'Programação, robótica e criação de sites pelas próprias estudantes. [Adicionar informação]' },
      { icon: 'users', title: 'Educação', text: 'A atuação do PIBID levando a universidade para dentro da escola. [Adicionar informação]' },
    ] as Array<{ icon: 'flask' | 'globe' | 'users'; title: string; text: string }>,
    blocks: [
      { title: 'O que é o PIBID?', text: '[Descrição oficial do PIBID — Programa Institucional de Bolsa de Iniciação à Docência. Adicionar texto fornecido pela coordenação.]' },
      { title: 'Objetivos da intervenção', text: '[Adicionar informação — objetivos gerais e específicos.]' },
      { title: 'Metodologia', text: '[Adicionar informação — como as atividades foram planejadas e conduzidas.]' },
      { title: 'Importância e resultados', text: '[Adicionar informação — relevância da iniciativa e resultados. Não preencher com números sem confirmação.]' },
    ],
  },
}
