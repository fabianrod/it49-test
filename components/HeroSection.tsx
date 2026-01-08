export default function HeroSection() {
  return (
    <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-full min-h-[480px] md:min-h-0">
      {/* Imagen de fondo */}
      <div className="relative h-full min-h-[480px] md:min-h-0">
        <img 
          src="/property-management-angeles.png" 
          alt="Property Buildings" 
          className="w-full h-full object-cover"
        />
        
        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col items-start justify-end text-left pb-6 pl-4 sm:pb-8 sm:pl-6 md:pb-6 md:pl-8 z-10">
          <div className="max-w-2xl w-full px-2 sm:px-0">
            <p className="text-white text-sm sm:text-base uppercase tracking-wider mb-3 sm:mb-4">SERVICE, INTEGRITY, & PROFITABILITY</p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Property Management in Los Angeles</h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              We provide leasing and property management services in Los Angeles, Long Beach, Orange County, and throughout Southern California
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-[#204186] text-white font-light px-6 sm:px-8 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base w-fit">
              CONTACT US
            </button>
            <button className="bg-white text-[#204186] font-light px-6 sm:px-8 py-2 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base w-fit">
              OUR SERVICES
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
