import { ButtonProps } from '@/lib/types'
import { cn } from '@/lib/utils'

const buttonVariants = {
  primary: 'bg-primary-blue-dark text-white hover:opacity-90',
  secondary: 'bg-secondary-yellow text-primary-blue hover:opacity-90',
  outline: 'bg-white text-primary-blue-dark border-2 border-primary-blue-dark hover:bg-gray-50',
  ghost: 'bg-secondary-light-blue text-primary-blue hover:opacity-90',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={cn(
        'font-light rounded-lg transition-all duration-200',
        buttonVariants[variant],
        buttonSizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
