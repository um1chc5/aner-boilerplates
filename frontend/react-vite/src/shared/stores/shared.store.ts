import { create } from 'zustand'

type SharedState = {
  isReady: boolean
  setReady: (isReady: boolean) => void
}

export const useSharedStore = create<SharedState>((set) => ({
  isReady: false,
  setReady: (isReady) => set({ isReady }),
}))
