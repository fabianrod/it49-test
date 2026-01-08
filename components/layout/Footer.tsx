'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CONTACT_INFO, FOOTER_NAVIGATION, SOCIAL_MEDIA } from '@/lib/constants'
import Icon from '@/components/ui/Icon'
import SocialIcon from '@/components/ui/SocialIcon'
import Button from '@/components/ui/Button'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de suscripción aquí
    console.log('Subscribe:', email)
  }

  return (
    <footer className="mt-12 relative" role="contentinfo">
      {/* Sección Superior - Fondo Oscuro */}
      <div 
        className="bg-[#161c24] rounded-3xl pt-16 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/union.png)',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '300px auto'
        }}
        role="region"
        aria-label="Contact information and links"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Columna 1: Get In Touch */}
            <div role="region" aria-labelledby="contact-heading">
              <h3 id="contact-heading" className="text-white font-normal text-lg mb-4">Get In Touch</h3>
              <p className="text-white font-light mb-6">{CONTACT_INFO.companyName}</p>
              
              <address className="space-y-4 not-italic">
                {CONTACT_INFO.offices.map((office, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="location" className="text-white flex-shrink-0 mt-1" size={20} aria-hidden="true" />
                    <p className="text-white text-sm font-light">{office.address}</p>
                  </div>
                ))}
                
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="flex items-center space-x-3 text-white underline hover:opacity-80 font-light"
                  aria-label={`Call phone number ${CONTACT_INFO.phone}`}
                >
                  <Icon name="phone" className="flex-shrink-0" size={20} aria-hidden="true" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="flex items-center space-x-3 text-white underline hover:opacity-80 font-light"
                  aria-label={`Send email to ${CONTACT_INFO.email}`}
                >
                  <Icon name="email" className="flex-shrink-0" size={20} aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </address>
            </div>

            {/* Columna 2: Enlaces de Navegación */}
            <div role="region" aria-labelledby="footer-nav-heading">
              <h3 id="footer-nav-heading" className="sr-only">Navigation links</h3>
              <nav className="flex flex-col space-y-3" role="navigation" aria-label="Footer links">
                {FOOTER_NAVIGATION.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-primary-blue-light transition-colors font-light"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Columna 3: Redes Sociales */}
            <div role="region" aria-labelledby="social-heading">
              <h3 id="social-heading" className="sr-only">Social media</h3>
              <div className="flex flex-col space-y-3" role="list">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center space-x-3 text-white hover:text-primary-blue-light transition-colors font-light"
                    aria-label={`Visit our ${social.name} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={social.icon} className="flex-shrink-0 text-[#556d8a]" size={20} aria-hidden="true" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 4: Newsletter */}
            <div role="region" aria-labelledby="newsletter-heading">
              <h3 id="newsletter-heading" className="text-white font-light text-lg mb-4">Subscribe To Our Newsletter</h3>
              <form onSubmit={handleSubscribe} className="space-y-4" aria-label="Newsletter subscription form">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-blue-light"
                  aria-required="true"
                  aria-describedby="newsletter-description"
                />
                <span id="newsletter-description" className="sr-only">
                  Enter your email address to subscribe to our newsletter
                </span>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="bg-[#0099FF] font-bold uppercase self-start"
                  aria-label="Subscribe to newsletter"
                >
                  SUBSCRIBE
                </Button>
              </form>
              
              {/* Iconos de Apartment Owners y Equal Housing */}
              <div className="mt-6" role="img" aria-label="Apartment Owners Association and Equal Housing Opportunity">
                <Image
                  src="/images/icons-footer.png"
                  alt=""
                  width={400}
                  height={150}
                  quality={100}
                  unoptimized
                  className="max-w-[200px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget de Copyright */}
      <div className="relative -mt-8 w-full max-w-[1400px] mx-auto px-6" role="region" aria-label="Legal information and copyright">
        <div className="bg-[#F8FAFC] rounded-2xl shadow-lg py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Lado Izquierdo */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4" role="list" aria-label="Social media">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[#556d8a] hover:text-primary-blue-dark transition-colors"
                    aria-label={`Visit our ${social.name} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={social.icon} size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-sm font-light opacity-80">
                Copyright © mashcole.com, All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm font-light opacity-80">
                Property Management Web Design by IT49 Multimedia
              </p>
            </div>

            {/* Lado Derecho */}
            <div className="flex flex-col space-y-3">
              <div className="text-gray-500 text-sm font-light opacity-80">
                <span>DRE#: {CONTACT_INFO.dre} | </span>
                <a href="#" className="underline hover:text-primary-blue-dark" aria-label="Privacy Policy">Privacy Policy</a>
                <span> | </span>
                <a href="#" className="underline hover:text-primary-blue-dark" aria-label="Terms of service">Terms of service</a>
              </div>
              <p className="text-gray-500 text-sm max-w-md font-light opacity-80">
                Full-Service Property Management throughout Southern California. We manage
                residential properties efficiently and effectively in Los Angeles, Long Beach,
                Orange County, San Diego County, Riverside County, Kern County among others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
