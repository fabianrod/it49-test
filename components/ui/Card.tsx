import { CardProps } from '@/lib/types'
import { cn } from '@/lib/utils'

const cardVariants = {
  default: 'bg-white shadow-lg',
  gradient: '',
  elevated: 'bg-white shadow-xl',
}

export default function Card({
  children,
  className,
  variant = 'default',
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: CardProps & { role?: string; 'aria-label'?: string; 'aria-labelledby'?: string }) {
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        'rounded-2xl p-8',
        variant === 'default' && cardVariants.default,
        variant === 'elevated' && cardVariants.elevated,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
