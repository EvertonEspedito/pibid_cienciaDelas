/**
 * JORNADA (linha do tempo) — acrescente ou edite os marcos da intervenção.
 * Imagem é opcional. Para esconder a seção inteira, deixe a lista vazia: `[]`.
 *
 * Os textos abaixo são PLACEHOLDERS (datas e descrições fictícias). Substitua pelos fatos reais.
 */
import { placeholderImage } from '@/utils/placeholder'
import type { TimelineEvent } from './types'

const ex = (seed: string, motif: Parameters<typeof placeholderImage>[0]['motif']) => placeholderImage({ seed, motif, note: 'exemplo' })

export const timeline: TimelineEvent[] = [
  { date: '2026-01', title: 'Início da intervenção', description: '[Adicionar informação] Apresentação da proposta às turmas.', image: ex('tl-1', 'stars') },
  { date: '2026-02', title: 'Primeiras atividades', description: '[Adicionar informação] Dinâmicas de investigação e curiosidade.', image: ex('tl-2', 'orbit') },
  { date: '2026-03', title: 'Oficinas', description: '[Adicionar informação] Oficinas práticas de experimentos e programação.', image: ex('tl-3', 'molecule') },
  { date: '2026-04', title: 'Desenvolvimento dos projetos', description: '[Adicionar informação] Os grupos escolhem temas e desenvolvem seus trabalhos.', image: ex('tl-4', 'circuit') },
  { date: '2026-05', title: 'Exposição e resultados', description: '[Adicionar informação] Apresentação dos trabalhos para a comunidade.', image: ex('tl-5', 'hex') },
]
