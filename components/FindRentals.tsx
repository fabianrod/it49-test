export default function FindRentals() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-4">Find Rentals</h2>
      <p className="text-white mb-8 opacity-90">
        With more than 7000 units available in the Greater Los Angeles area, we can help you find the right one for you.
      </p>
      
      {/* Imágenes de propiedades */}
      <div className="flex -space-x-4 mb-8">
        <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="https://via.placeholder.com/200x200/4a5568/ffffff?text=Property+1" 
            alt="Property 1" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg z-10">
          <img 
            src="https://via.placeholder.com/200x200/4a5568/ffffff?text=Property+2" 
            alt="Property 2" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg z-20">
          <img 
            src="https://via.placeholder.com/200x200/4a5568/ffffff?text=Property+3" 
            alt="Property 3" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <button className="bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg w-full hover:opacity-90 transition">
        SEE ALL RENTAL LISTINGS
      </button>
    </div>
  )
}
