'use client'

import { NAVIGATION_ITEMS, CONTACT_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div 
      id="mobile-menu"
      className="lg:hidden mt-4 pb-4 border-t border-gray-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Botones */}
      <div className="flex flex-col space-y-2 mt-4" role="toolbar" aria-label="Quick actions">
        <Button variant="secondary" size="md" className="w-full" aria-label="Pay online">
          PAY ONLINE
        </Button>
        <Button variant="ghost" size="md" className="w-full" aria-label="Employee portal">
          EMPLOYEES
        </Button>
        <Button
          variant="primary"
          size="md"
          className="w-full bg-primary-blue-light"
          aria-label={`Call phone number ${CONTACT_INFO.phone}`}
        >
          {CONTACT_INFO.phone}
        </Button>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col mt-4 space-y-2" role="navigation" aria-label="Mobile navigation">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-black hover:text-primary-blue-light text-xl py-2 font-light"
            onClick={onClose}
            role="menuitem"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
