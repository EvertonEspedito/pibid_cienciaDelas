/**
 * GALERIA DE FOTOS — acrescente as fotos das atividades.
 *
 * Coloque os arquivos em `public/galeria/` e use "galeria/nome-da-foto.jpg".
 * ⚠️ Publique somente fotos com autorização de uso de imagem (escola/responsáveis).
 * Para esconder a seção inteira, deixe a lista vazia: `[]`.
 *
 * As fotos abaixo são ILUSTRAÇÕES DE EXEMPLO geradas por código (não são fotos reais).
 */
import { placeholderImage, type PlaceholderMotif } from '@/utils/placeholder'
import type { GalleryPhoto } from './types'

const ex = (seed: string, motif: PlaceholderMotif) => placeholderImage({ seed, motif, note: 'exemplo' })

export const gallery: GalleryPhoto[] = [
  { src: ex('g1', 'circuit'), title: 'Oficina de programação', description: 'Atividade com lógica e blocos.', date: '2026-03', activity: 'Oficinas' },
  { src: ex('g2', 'molecule'), title: 'Experimento com indicadores', description: 'Observando mudanças de cor.', date: '2026-03', activity: 'Oficinas' },
  { src: ex('g3', 'orbit'), title: 'Montagem do protótipo solar', description: 'Teste da placa e do motor.', date: '2026-04', activity: 'Projetos' },
  { src: ex('g4', 'leaf'), title: 'Cuidando da horta', description: 'Registro do diário de campo.', date: '2026-04', activity: 'Projetos' },
  { src: ex('g5', 'stars'), title: 'Modelo do sistema solar', description: 'Escala construída no pátio.', date: '2026-04', activity: 'Projetos' },
  { src: ex('g6', 'hex'), title: 'Preparando os pôsteres', description: 'Organização das ideias.', date: '2026-05', activity: 'Exposição' },
  { src: ex('g7', 'stars'), title: 'Ensaio das apresentações', description: 'Treino em grupo.', date: '2026-05', activity: 'Exposição' },
  { src: ex('g8', 'orbit'), title: 'Dia da exposição', description: 'Comunidade visitando os projetos.', date: '2026-05', activity: 'Exposição' },
]
