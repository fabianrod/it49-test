export default function QuoteModules() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Módulo Superior: Request A Property Management Quote */}
      <div className="bg-gradient-to-br from-[#114177] to-[#0099FF] rounded-2xl p-8 text-white flex-1 flex flex-col">
        <h2 className="text-3xl font-normal mb-4">Request A Property Management Quote</h2>
        <p className="text-white text-lg font-light mb-6 opacity-90 flex-1">
          Mashcole Property Management, Inc. enables property owners to increase the value and profitability of their assets.
        </p>
        <button className="bg-[#204186] text-white font-light px-6 py-2 rounded-lg self-end hover:opacity-90 transition">
          REQUEST A TOUR
        </button>
      </div>

      {/* Módulo Inferior: Free Market Analysis */}
      <div className="bg-gradient-to-br from-[#010101] to-[#556d8a] rounded-2xl p-8 text-white flex-1 flex flex-col">
        <h2 className="text-3xl font-normal mb-4">Free Market Analysis</h2>
        <p className="text-white text-lg font-light mb-6 opacity-90 flex-1">
          Let our experts analyze and provide insights into your current property management agreement for free.
        </p>
        <button className="bg-[#204186] text-white font-light px-6 py-2 rounded-lg self-end hover:opacity-90 transition">
          REQUEST A TOUR
        </button>
      </div>
    </div>
  )
}
