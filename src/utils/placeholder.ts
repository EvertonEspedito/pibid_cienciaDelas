/**
 * Gerador de imagens ilustrativas (SVG em data URI).
 *
 * Capa automática (ilustração geométrica) usada quando um projeto não tem foto própria,
 * e nas imagens de EXEMPLO. Substitua por fotos reais colocando-as em public/.
 */

export type PlaceholderMotif = 'molecule' | 'orbit' | 'circuit' | 'waves' | 'stars' | 'hex' | 'leaf'

interface Palette {
  from: string
  to: string
  accent: string
  soft: string
}

const PALETTES: Palette[] = [
  { from: '#3b1d73', to: '#6a3fb8', accent: '#ff8fa3', soft: '#d9ccff' },
  { from: '#1d2f73', to: '#3f6ab8', accent: '#7ee0c3', soft: '#cfe0ff' },
  { from: '#6b1d4a', to: '#b83f7e', accent: '#ffd36e', soft: '#ffd3e6' },
  { from: '#0f4a46', to: '#2a9d8f', accent: '#ffb4c2', soft: '#c9f5ea' },
  { from: '#4a2a1d', to: '#b8643f', accent: '#ffe08a', soft: '#ffd9c2' },
]

const MOTIFS: PlaceholderMotif[] = ['molecule', 'orbit', 'circuit', 'waves', 'stars', 'hex', 'leaf']

function hash(text: string): number {
  let h = 0
  for (let i = 0; i < text.length; i += 1) {
    h = (h * 31 + text.charCodeAt(i)) >>> 0
  }
  return h
}

function motifSvg(motif: PlaceholderMotif, p: Palette): string {
  switch (motif) {
    case 'molecule':
      return `
        <g stroke="${p.soft}" stroke-width="5" stroke-linecap="round" opacity=".85">
          <line x1="400" y1="300" x2="270" y2="220"/><line x1="400" y1="300" x2="540" y2="230"/>
          <line x1="400" y1="300" x2="420" y2="440"/><line x1="540" y1="230" x2="640" y2="320"/>
          <line x1="270" y1="220" x2="190" y2="320"/>
        </g>
        <circle cx="400" cy="300" r="46" fill="${p.accent}"/>
        <circle cx="270" cy="220" r="30" fill="${p.soft}"/><circle cx="540" cy="230" r="34" fill="${p.soft}"/>
        <circle cx="420" cy="440" r="28" fill="${p.soft}"/><circle cx="640" cy="320" r="22" fill="${p.accent}"/>
        <circle cx="190" cy="320" r="22" fill="${p.accent}"/>`
    case 'orbit':
      return `
        <g fill="none" stroke="${p.soft}" stroke-width="4" opacity=".85" transform="translate(400 300)">
          <ellipse rx="230" ry="80" transform="rotate(-30)"/><ellipse rx="230" ry="80" transform="rotate(30)"/>
          <ellipse rx="230" ry="80" transform="rotate(90)"/>
        </g>
        <circle cx="400" cy="300" r="34" fill="${p.accent}"/>
        <circle cx="590" cy="215" r="14" fill="${p.soft}"/><circle cx="210" cy="385" r="14" fill="${p.soft}"/>
        <circle cx="400" cy="80" r="14" fill="${p.accent}"/>`
    case 'circuit':
      return `
        <g fill="none" stroke="${p.soft}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85">
          <path d="M120 200 H300 V300 H460 V160 H680"/><path d="M120 400 H260 V480 H520 V360 H680"/>
          <path d="M300 300 V400 H400"/>
        </g>
        <g fill="${p.accent}"><circle cx="120" cy="200" r="14"/><circle cx="680" cy="160" r="14"/>
        <circle cx="120" cy="400" r="14"/><circle cx="680" cy="360" r="14"/></g>
        <rect x="372" y="372" width="56" height="56" rx="10" fill="${p.soft}"/>`
    case 'waves':
      return `
        <g fill="none" stroke="${p.soft}" stroke-width="5" stroke-linecap="round" opacity=".9">
          <path d="M60 220 Q160 120 260 220 T460 220 T660 220 T760 220"/>
          <path d="M60 300 Q160 200 260 300 T460 300 T660 300 T760 300" stroke="${p.accent}"/>
          <path d="M60 380 Q160 280 260 380 T460 380 T660 380 T760 380"/>
        </g>`
    case 'stars':
      return `
        <g fill="${p.soft}">
          <path d="M400 150 l24 70 74 4 -58 46 20 72 -60 -42 -60 42 20 -72 -58 -46 74 -4z"/>
        </g>
        <g fill="${p.accent}"><circle cx="190" cy="180" r="9"/><circle cx="620" cy="250" r="12"/>
        <circle cx="260" cy="430" r="8"/><circle cx="560" cy="440" r="10"/><circle cx="690" cy="130" r="7"/></g>`
    case 'hex':
      return `
        <g fill="none" stroke="${p.soft}" stroke-width="5" stroke-linejoin="round" opacity=".9">
          <path d="M400 150 l80 46 v92 l-80 46 -80 -46 v-92z"/>
          <path d="M560 244 l80 46 v92 l-80 46 -80 -46 v-92z" stroke="${p.accent}"/>
          <path d="M240 244 l80 46 v92 l-80 46 -80 -46 v-92z" stroke="${p.accent}"/>
        </g>`
    case 'leaf':
    default:
      return `
        <g fill="${p.soft}" opacity=".9">
          <path d="M400 130 C560 190 600 340 400 470 C200 340 240 190 400 130z"/>
        </g>
        <path d="M400 150 V480" stroke="${p.from}" stroke-width="6" stroke-linecap="round"/>
        <g stroke="${p.from}" stroke-width="5" stroke-linecap="round">
          <path d="M400 260 L330 215"/><path d="M400 330 L320 280"/><path d="M400 260 L470 215"/><path d="M400 330 L480 280"/>
        </g>
        <circle cx="620" cy="140" r="22" fill="${p.accent}"/>`
  }
}

export interface PlaceholderOptions {
  /** Texto que define cor e motivo (mesma semente = mesma imagem). */
  seed: string
  motif?: PlaceholderMotif
  /** Formato da imagem. */
  width?: number
  height?: number
  /** Texto pequeno no canto (ex.: "exemplo"). Vazio = sem texto. */
  note?: string
}

/** Retorna um data URI SVG pronto para usar em <img src>. */
export function placeholderImage({ seed, motif, width = 800, height = 600, note = '' }: PlaceholderOptions): string {
  const h = hash(seed)
  const palette = PALETTES[h % PALETTES.length]
  const chosen = motif ?? MOTIFS[(h >> 3) % MOTIFS.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.from}"/><stop offset="1" stop-color="${palette.to}"/>
    </linearGradient></defs>
    <rect width="800" height="600" fill="url(#g)"/>
    <g opacity=".12" stroke="#fff" stroke-width="1">${Array.from({ length: 15 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="600"/>`).join('')}${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="800" y2="${i * 60}"/>`).join('')}</g>
    ${motifSvg(chosen, palette)}
    ${note ? `<text x="24" y="578" font-family="Arial,sans-serif" font-size="18" fill="#fff" opacity=".7">${note}</text>` : ''}
  </svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
