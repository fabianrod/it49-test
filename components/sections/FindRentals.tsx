import Button from '@/components/ui/Button'

export default function FindRentals() {
  return (
    <section 
      className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden"
      role="region"
      aria-labelledby="find-rentals-heading"
    >
      <h2 id="find-rentals-heading" className="text-3xl font-bold mb-4">Find Rentals</h2>
      <p className="text-white mb-8 opacity-90">
        With more than 7000 units available in the Greater Los Angeles area, we
        can help you find the right one for you.
      </p>

      {/* Imágenes de propiedades */}
      <div className="flex -space-x-4 mb-8" role="list" aria-label="Sample available properties">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg"
            style={{ zIndex: num * 10 }}
            role="listitem"
          >
            <img
              src={`https://via.placeholder.com/200x200/4a5568/ffffff?text=Property+${num}`}
              alt={`Sample property ${num}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        size="lg"
        className="bg-primary-blue-dark w-full"
        aria-label="View all available rental listings"
      >
        SEE ALL RENTAL LISTINGS
      </Button>
    </section>
  )
}
