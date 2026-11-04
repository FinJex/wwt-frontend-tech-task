import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterModal } from './FilterModal'

export const App = () => {
	const { t } = useTranslation('filter')
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	return (
		<section className="w-full h-dvh flex items-center justify-center">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<button onClick={() => setIsFilterOpen(true)}>{t('button')}</button>
			{isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
		</section>
	)
}
