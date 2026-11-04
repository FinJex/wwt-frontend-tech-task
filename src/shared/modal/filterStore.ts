import { create } from 'zustand'

import { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

interface FilterStore {
	filters: SearchRequestFilter
	setFilters: (filters: SearchRequestFilter) => void
}

export const useFilterStore = create<FilterStore>(set => ({
	filters: [],
	setFilters: filters => set({ filters })
}))
