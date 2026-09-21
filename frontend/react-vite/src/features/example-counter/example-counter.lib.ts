export function clampCount(value: number, min = 0, max = 99): number {
  return Math.min(max, Math.max(min, value))
}

export function formatCountLabel(count: number): string {
  return count === 1 ? '1 item' : `${count} items`
}
