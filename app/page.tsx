import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import QuoteModules from '@/components/QuoteModules'
import OfficesSection from '@/components/OfficesSection'
import FindRentals from '@/components/FindRentals'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Sección Principal: Hero y Módulos Laterales */}
      <section className="mt-32 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HeroSection />
          <QuoteModules />
        </div>
      </section>

      {/* Sección Inferior: Offices y Find Rentals */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OfficesSection />
          <FindRentals />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">© 2024 Mashcole Property Management, Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
