import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@/shared/modal/filterStore'
import { Button } from '@/shared/ui/Button'

import { FilterModal } from './FilterModal'

export const App = () => {
	const { t } = useTranslation('filter')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const filters = useFilterStore(state => state.filters)

	return (
		<section className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 px-4 py-10">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-center text-6xl text-gray-600">
				WinWinTravel frontend test task
			</h1>
			<Button onClick={() => setIsFilterOpen(true)}>{t('button')}</Button>
			<pre className="w-full max-w-xl overflow-x-auto rounded-2xl bg-gray-100 p-4 text-sm">
				{JSON.stringify(filters, null, 2)}
			</pre>
			{isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
		</section>
	)
}
