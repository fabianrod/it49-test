'use client'

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-dark rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-dark font-bold text-sm leading-tight">MASHCOLE PROPERTY</span>
              <span className="text-blue-dark text-xs leading-tight">MANAGEMENT, INC.</span>
            </div>
          </div>

          {/* Navegación Principal */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm flex items-center">
                Property Management
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              {/* Menú Desplegable */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-blue-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-white bg-blue-light hover:bg-blue-600 rounded mx-2 my-1">The Mashcole Method</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 rounded mx-2 my-1">Asset Operation</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 rounded mx-2 my-1">Account Operations</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 rounded mx-2 my-1">Due Diligence</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-blue-600 rounded mx-2 my-1">Newsletters</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">For Rent</a>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">Residents</a>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">Owners</a>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">Testimonials</a>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">About Us</a>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">Blog</a>
            <a href="#" className="text-blue-dark hover:text-blue-600 font-medium text-sm">Contact Us</a>
          </nav>

          {/* Utilidades */}
          <div className="flex items-center space-x-3">
            <button className="bg-yellow-btn text-black font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90">
              PAY ONLINE
            </button>
            <button className="bg-white border-2 border-blue-dark text-blue-dark font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
              EMPLOYEES
            </button>
            <button className="bg-blue-dark text-white font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90">
              (818) 888-8052
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
