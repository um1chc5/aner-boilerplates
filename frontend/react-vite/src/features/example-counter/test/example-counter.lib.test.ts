import { describe, expect, it } from 'vitest'
import { clampCount, formatCountLabel } from '../example-counter.lib'

describe('clampCount', () => {
  it('keeps values inside the range', () => {
    expect(clampCount(3)).toBe(3)
    expect(clampCount(-4)).toBe(0)
    expect(clampCount(120)).toBe(99)
  })
})

describe('formatCountLabel', () => {
  it('uses singular for one', () => {
    expect(formatCountLabel(1)).toBe('1 item')
  })

  it('uses plural otherwise', () => {
    expect(formatCountLabel(0)).toBe('0 items')
    expect(formatCountLabel(4)).toBe('4 items')
  })
})
