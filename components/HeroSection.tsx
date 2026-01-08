export default function HeroSection() {
  return (
    <div className="lg:col-span-2 relative rounded-2xl overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="relative h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://via.placeholder.com/800x600/1e3a5f/ffffff?text=Property+Buildings" 
          alt="Property Buildings" 
          className="w-full h-full object-cover opacity-50"
        />
        
        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
          <p className="text-white text-sm uppercase tracking-wider mb-4">SERVICE, INTEGRITY, & PROFITABILITY</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Property Management in Los Angeles</h1>
          <p className="text-white text-lg mb-8 max-w-2xl">
            We provide leasing and property management services in Los Angeles, Long Beach, Orange County, and throughout Southern California
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-dark text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition">
              CONTACT US
            </button>
            <button className="bg-white text-blue-dark font-semibold px-8 py-3 rounded-lg border-2 border-blue-dark hover:bg-gray-50 transition">
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
