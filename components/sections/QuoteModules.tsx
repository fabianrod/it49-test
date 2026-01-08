import Button from '@/components/ui/Button'

export default function QuoteModules() {
  return (
    <div className="space-y-6 h-full flex flex-col" role="complementary" aria-label="Request modules">
      {/* Módulo Superior: Request A Property Management Quote */}
      <section 
        className="bg-gradient-to-br from-primary-blue to-primary-blue-accent rounded-2xl p-8 text-white flex-1 flex flex-col"
        role="region"
        aria-labelledby="quote-heading"
      >
        <h2 id="quote-heading" className="text-3xl font-normal mb-4">
          Request A Property Management Quote
        </h2>
        <p className="text-white text-lg font-light mb-6 opacity-90 flex-1">
          Mashcole Property Management, Inc. enables property owners to increase
          the value and profitability of their assets.
        </p>
        <Button
          variant="primary"
          size="md"
          className="bg-primary-blue-dark self-end"
          aria-label="Request a property management quote"
        >
          REQUEST A TOUR
        </Button>
      </section>

      {/* Módulo Inferior: Free Market Analysis */}
      <section 
        className="bg-gradient-to-br from-neutral-black to-neutral-gray rounded-2xl p-8 text-white flex-1 flex flex-col"
        role="region"
        aria-labelledby="analysis-heading"
      >
        <h2 id="analysis-heading" className="text-3xl font-normal mb-4">Free Market Analysis</h2>
        <p className="text-white text-lg font-light mb-6 opacity-90 flex-1">
          Let our experts analyze and provide insights into your current property
          management agreement for free.
        </p>
        <Button
          variant="primary"
          size="md"
          className="bg-primary-blue-dark self-end"
          aria-label="Request a free market analysis"
        >
          REQUEST A TOUR
        </Button>
      </section>
    </div>
  )
}
