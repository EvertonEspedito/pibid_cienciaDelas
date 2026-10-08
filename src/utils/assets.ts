/**
 * Resolve o caminho de uma imagem/arquivo.
 *  - URLs completas (https://...) e data: passam direto.
 *  - Caminhos relativos apontam para a pasta `public/` (ex.: "projetos/horta/foto1.jpg").
 */
export function resolveAsset(src: string): string {
  if (/^(https?:|data:|blob:)/.test(src)) return src
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`
}
