'use client'

import { NAVIGATION_ITEMS, PROPERTY_MANAGEMENT_ITEMS } from '@/lib/constants'
import Icon from '@/components/ui/Icon'

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-6" role="navigation" aria-label="Main navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <div key={item.label} className="relative group">
          <a
            href={item.href}
            className="text-black hover:text-primary-blue-light text-xl flex items-center font-light"
            aria-haspopup={item.hasDropdown ? "true" : undefined}
            aria-expanded={item.hasDropdown ? "false" : undefined}
          >
            {item.label}
            {item.hasDropdown && (
              <Icon name="chevron-down" className="w-4 h-4 ml-1" aria-hidden={true} />
            )}
          </a>
          {item.hasDropdown && (
            <div 
              className="absolute top-full left-0 mt-2 w-64 bg-primary-blue-dark rounded-xl shadow-[0_4px_6px_-1px_rgba(51,136,208,0.3),0_2px_4px_-1px_rgba(51,136,208,0.2)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              role="menu"
              aria-label={`${item.label} submenu`}
            >
              <div className="py-2">
                {PROPERTY_MANAGEMENT_ITEMS.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-4 py-2 text-white hover:bg-[#16569d] rounded-lg mx-2 my-1"
                    role="menuitem"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
