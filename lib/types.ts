export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'elevated'
}

export interface NavigationItem {
  label: string
  href: string
  hasDropdown?: boolean
}

export interface Office {
  address: string
  type: 'office' | 'phone'
}
