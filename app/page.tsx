import Header from '@/components/layout/Header/Header'
import HeroSection from '@/components/sections/HeroSection'
import QuoteModules from '@/components/sections/QuoteModules'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only skip-to-main"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <main id="main-content" className="bg-white" role="main" aria-label="Main content">
        <Header />
      {/* Sección Principal: Hero y Módulos Laterales */}
      <section 
        className="mt-32 max-w-[1400px] mx-auto px-6 py-8"
        role="region"
        aria-label="Main content section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-stretch">
          <HeroSection />
          <QuoteModules />
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
