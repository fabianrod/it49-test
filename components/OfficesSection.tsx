export default function OfficesSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-blue-dark text-3xl font-bold mb-6">Offices In California</h2>
      
      <div className="space-y-4 mb-8">
        {/* Dirección 1 */}
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-blue-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <p className="text-blue-dark">26901 Agoura Road, Suite 250, Calabasas, CA 91301</p>
        </div>
        
        {/* Dirección 2 */}
        <div className="flex items-start space-x-3">
          <svg className="w-6 h-6 text-blue-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <p className="text-blue-dark">3846 E Anaheim St, Long Beach, CA 90804</p>
        </div>
        
        {/* Teléfono */}
        <div className="flex items-center space-x-3">
          <svg className="w-6 h-6 text-blue-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <p className="text-blue-dark font-semibold">(818) 888-8052</p>
        </div>
      </div>

      {/* Ilustración */}
      <div className="mt-8 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
        <img 
          src="https://via.placeholder.com/500x150/e5e7eb/6b7280?text=City+Illustration" 
          alt="City Illustration" 
          className="w-full h-full object-cover rounded-lg opacity-60"
        />
      </div>
    </div>
  )
}
