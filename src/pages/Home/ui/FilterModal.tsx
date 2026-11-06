import { useTranslation } from 'react-i18next'

import { useFilterItems } from '@/shared/api/useFilterItems'

interface FilterModalProps {
	onClose: () => void
}

export const FilterModal = ({ onClose }: FilterModalProps) => {
	const { t } = useTranslation('filter')
	const { data: filterItems, isPending, isError } = useFilterItems()

	return (
		<div className="fixed inset-0 z-10 overflow-y-auto bg-black/50 px-4 py-10">
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="filter-title"
				className="mx-auto w-full max-w-[1280px] rounded-2xl bg-white px-8 pb-8 font-[Inter] text-[#31393c]"
			>
				<header className="relative border-b border-gray-300 py-6 text-center">
					<h2
						id="filter-title"
						className="text-[40px] font-medium"
					>
						{t('title')}
					</h2>
					<button
						type="button"
						onClick={onClose}
						aria-label={t('close')}
						className="absolute top-1/2 right-0 -translate-y-1/2"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								d="M5 5l14 14M19 5L5 19"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					</button>
				</header>
				{isPending && <p className="py-8">{t('loading')}</p>}
				{isError && <p className="py-8">{t('error')}</p>}
				{filterItems?.map(item => (
					<fieldset
						key={item.id}
						className="border-b border-gray-300 pt-8 pb-[46px]"
					>
						<legend className="float-left w-full text-2xl font-medium">
							{item.name}
						</legend>
						<div className="clear-both grid grid-cols-3 gap-x-8 gap-y-4 pt-6">
							{item.options.map(option => (
								<label
									key={option.id}
									className="flex items-center gap-4"
									title={option.description}
								>
									<input
										type="checkbox"
										className="size-5 accent-[#ff5f00]"
									/>
									{option.name}
								</label>
							))}
						</div>
					</fieldset>
				))}
			</div>
		</div>
	)
}
