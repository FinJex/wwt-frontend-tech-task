import filterData from '../temp/filterData.json'
import { FilterItem } from './types/Filter'

export const getFilterItems = async (): Promise<FilterItem[]> =>
	filterData.filterItems as FilterItem[]
