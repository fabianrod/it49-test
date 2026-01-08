'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 pt-3 pb-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Mashcole Property Management" 
              width={180} 
              height={126}
              className="h-auto lg:w-[180px] w-[120px]"
              priority
            />
          </div>

          {/* Botones y Navegación - Desktop */}
          <div className="hidden lg:flex flex-col items-end">
            {/* Botones superiores */}
            <div className="flex items-center space-x-2 mb-5">
              <button className="bg-[#f5c143] text-[#114177] font-normal px-4 py-2 rounded-lg text-base hover:opacity-90">
                PAY ONLINE
              </button>
              <button className="bg-[#e9f2fb] text-[#114177] font-normal px-4 py-2 rounded-lg text-base hover:opacity-90">
                EMPLOYEES
              </button>
              <button className="bg-[#0e76c0] text-white font-normal px-4 py-2 rounded-lg text-base hover:opacity-90">
                (818) 888-8052
              </button>
            </div>

            {/* Navegación Principal */}
            <nav className="flex items-center space-x-6">
            <div className="relative group">
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl flex items-center" style={{ fontWeight: 300 }}>
                Property Management
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              {/* Menú Desplegable */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#204186] rounded-xl shadow-[0_4px_6px_-1px_rgba(51,136,208,0.3),0_2px_4px_-1px_rgba(51,136,208,0.2)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-white hover:bg-[#16569d] rounded-lg mx-2 my-1">The Mashcole Method</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-[#16569d] rounded-lg mx-2 my-1">Asset Operation</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-[#16569d] rounded-lg mx-2 my-1">Account Operations</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-[#16569d] rounded-lg mx-2 my-1">Due Diligence</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-[#16569d] rounded-lg mx-2 my-1">Newsletters</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>For Rent</a>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>Residents</a>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>Owners</a>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>Testimonials</a>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>About Us</a>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>Blog</a>
            <a href="#" className="text-black hover:text-[#0e76c0] text-xl" style={{ fontWeight: 300 }}>Contact Us</a>
            </nav>
          </div>

          {/* Menú Hamburguesa - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h20M8 12h16M4 18h20" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            {/* Botones */}
            <div className="flex flex-col space-y-2 mt-4">
              <button className="bg-[#f5c143] text-[#114177] font-normal px-4 py-2 rounded-lg text-base hover:opacity-90 w-full">
                PAY ONLINE
              </button>
              <button className="bg-[#e9f2fb] text-[#114177] font-normal px-4 py-2 rounded-lg text-base hover:opacity-90 w-full">
                EMPLOYEES
              </button>
              <button className="bg-[#0e76c0] text-white font-normal px-4 py-2 rounded-lg text-base hover:opacity-90 w-full">
                (818) 888-8052
              </button>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col mt-4 space-y-2">
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>Property Management</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>For Rent</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>Residents</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>Owners</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>Testimonials</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>About Us</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>Blog</a>
              <a href="#" className="text-black hover:text-[#0e76c0] text-xl py-2" style={{ fontWeight: 300 }}>Contact Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
