import Image from 'next/image'
import { IMAGE_PATHS } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section 
      className="lg:col-span-2 relative rounded-2xl overflow-hidden h-full min-h-[480px] md:min-h-0"
      role="region"
      aria-labelledby="hero-heading"
    >
      <div className="relative h-full min-h-[480px] md:min-h-0">
        <Image
          src={IMAGE_PATHS.hero}
          alt="Property buildings in Los Angeles"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 1400px"
          role="img"
        />

        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col items-start justify-end text-left pb-6 pl-4 sm:pb-8 sm:pl-6 md:pb-6 md:pl-8 z-10">
          <div className="max-w-2xl w-full px-2 sm:px-0">
            <p className="text-white text-sm sm:text-base uppercase tracking-wider mb-3 sm:mb-4" role="text">
              SERVICE, INTEGRITY, & PROFITABILITY
            </p>
            <h1 id="hero-heading" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Property Management in Los Angeles
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              We provide leasing and property management services in Los Angeles,
              Long Beach, Orange County, and throughout Southern California
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" role="group" aria-label="Main actions">
              <Button variant="primary" size="md" aria-label="Contact us">
                CONTACT US
              </Button>
              <button 
                className="bg-white text-primary-blue-dark px-6 py-2 rounded-lg font-light text-base hover:opacity-90 transition-all duration-200 border-0 outline-none"
                aria-label="View our services"
                type="button"
              >
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
