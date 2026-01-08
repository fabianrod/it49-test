'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IMAGE_PATHS } from '@/lib/constants'
import HeaderButtons from './HeaderButtons'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import Icon from '@/components/ui/Icon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed w-full top-0 z-50" role="navigation">
      <div className="max-w-[1400px] mx-auto px-6 pt-3 pb-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" aria-label="Mashcole Property Management - Go to homepage">
              <Image
                src={IMAGE_PATHS.logo}
                alt="Mashcole Property Management"
                width={180}
                height={126}
                className="h-auto lg:w-[180px] w-[120px]"
                priority
              />
            </a>
          </div>

          {/* Botones y Navegación - Desktop */}
          <div className="hidden lg:flex flex-col items-end" role="region" aria-label="Main navigation">
            <HeaderButtons />
            <Navigation />
          </div>

          {/* Menú Hamburguesa - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <Icon
              name={isMenuOpen ? 'close' : 'menu'}
              className="w-8 h-8"
              size={32}
            />
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  )
}
