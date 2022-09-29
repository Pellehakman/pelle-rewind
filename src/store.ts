import create from 'zustand'

interface BearState {
  people: string
  increase: (by: number) => void
}

const useStore = create<BearState>()((set) => ({
  people: 'pelle',
  increase: (by) => set((state) => ({ people: state.people + by })),
}))


export default useStore