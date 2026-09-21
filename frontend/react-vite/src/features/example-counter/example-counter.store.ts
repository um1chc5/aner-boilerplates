import { create } from 'zustand'
import { clampCount } from './example-counter.lib'

type ExampleCounterState = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useExampleCounterStore = create<ExampleCounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: clampCount(state.count + 1) })),
  decrement: () => set((state) => ({ count: clampCount(state.count - 1) })),
  reset: () => set({ count: 0 }),
}))
