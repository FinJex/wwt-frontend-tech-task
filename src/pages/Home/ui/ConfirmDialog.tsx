import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'
import { CloseIcon } from '@/shared/ui/CloseIcon'

interface ConfirmDialogProps {
	onApplyNew: () => void
	onUseOld: () => void
	onClose: () => void
}

export const ConfirmDialog = ({
	onApplyNew,
	onUseOld,
	onClose
}: ConfirmDialogProps) => {
	const { t } = useTranslation('filter')

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black/20 px-4 backdrop-blur-sm">
			<div
				role="alertdialog"
				aria-modal="true"
				aria-labelledby="confirm-title"
				className="relative w-full max-w-[1280px] rounded-2xl bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
			>
				<h2
					id="confirm-title"
					className="text-[40px] font-medium"
				>
					{t('confirmTitle')}
				</h2>
				<button
					type="button"
					onClick={onClose}
					aria-label={t('close')}
					className="absolute top-8 right-8"
				>
					<CloseIcon />
				</button>
				<div className="mt-[120px] flex justify-center gap-8">
					<Button
						variant="outline"
						className="w-[280px]"
						onClick={onUseOld}
					>
						{t('useOld')}
					</Button>
					<Button
						className="w-[280px]"
						onClick={onApplyNew}
					>
						{t('applyNew')}
					</Button>
				</div>
			</div>
		</div>
	)
}
