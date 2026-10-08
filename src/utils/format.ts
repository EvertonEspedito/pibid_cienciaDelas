const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

/** "2026-03" → "Março de 2026"; "2026-03-15" → "15 de março de 2026"; "2026" → "2026". */
export function formatDate(value: string): string {
  const [year, month, day] = value.split('-')
  if (!month) return year
  const monthName = MONTHS[Number(month) - 1]
  if (!monthName) return value
  if (!day) return `${monthName.charAt(0).toUpperCase()}${monthName.slice(1)} de ${year}`
  return `${Number(day)} de ${monthName} de ${year}`
}
