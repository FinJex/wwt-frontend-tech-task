import { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends ComponentProps<'button'> {
	variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-[#ff5f00] text-white hover:bg-[#e65500]',
	outline:
		'border-2 border-[#b4b4b4] bg-white text-[#31393c] hover:border-[#31393c]'
}

export const Button = ({
	variant = 'primary',
	className = '',
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={`inline-flex h-16 min-w-[184px] items-center justify-center rounded-2xl px-8 font-medium transition-colors ${variantClasses[variant]} ${className}`}
		{...props}
	/>
)
