import { useTranslation } from 'react-i18next'

import { useFilterItems } from '@/shared/api/useFilterItems'

interface FilterModalProps {
	onClose: () => void
}

export const FilterModal = ({ onClose }: FilterModalProps) => {
	const { t } = useTranslation('filter')
	const { data: filterItems, isPending, isError } = useFilterItems()

	return (
		<div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="filter-title"
				className="w-full max-w-xl rounded-lg bg-white p-6"
			>
				<header className="flex items-center justify-between">
					<h2
						id="filter-title"
						className="text-xl font-medium"
					>
						{t('title')}
					</h2>
					<button
						type="button"
						onClick={onClose}
					>
						{t('close')}
					</button>
				</header>
				{isPending && <p>{t('loading')}</p>}
				{isError && <p>{t('error')}</p>}
				<ul>{filterItems?.map(item => <li key={item.id}>{item.name}</li>)}</ul>
			</div>
		</div>
	)
}
