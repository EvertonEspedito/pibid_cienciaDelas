/** Minúsculas e sem acentos — para busca tolerante ("quimica" encontra "Química"). */
export function normalize(value: string): string {
  return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
}

/** Une uma lista em português: "A, B e C". */
export function joinList(items: string[]): string {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join(', ')} e ${items[items.length - 1]}`
}

/** Resume um texto sem cortar palavras no meio. */
export function truncate(text: string, max = 140): string {
  if (text.length <= max) return text
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`
}
