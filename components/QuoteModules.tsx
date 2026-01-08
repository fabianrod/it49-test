export default function QuoteModules() {
  return (
    <div className="space-y-6">
      {/* Módulo Superior: Request A Property Management Quote */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Request A Property Management Quote</h2>
        <p className="text-white mb-6 opacity-90">
          Mashcole Property Management, Inc. enables property owners to increase the value and profitability of their assets.
        </p>
        <button className="bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg w-full hover:opacity-90 transition">
          REQUEST A TOUR
        </button>
      </div>

      {/* Módulo Inferior: Free Market Analysis */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Free Market Analysis</h2>
        <p className="text-white mb-6 opacity-90">
          Let our experts analyze and provide insights into your current property management agreement for free.
        </p>
        <button className="bg-blue-dark text-white font-semibold px-6 py-3 rounded-lg w-full hover:opacity-90 transition">
          REQUEST A TOUR
        </button>
      </div>
    </div>
  )
}
