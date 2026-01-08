export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs
    .filter(Boolean)
    .join(' ')
    .split(' ')
    .filter((cls, index, arr) => arr.indexOf(cls) === index)
    .join(' ')
}
