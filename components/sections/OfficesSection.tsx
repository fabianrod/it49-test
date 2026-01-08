import { CONTACT_INFO } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'

export default function OfficesSection() {
  return (
    <Card variant="elevated" role="region" aria-labelledby="offices-heading">
      <h2 id="offices-heading" className="text-primary-blue-dark text-3xl font-bold mb-6">
        Offices In California
      </h2>

      <address className="space-y-4 mb-8 not-italic">
        {CONTACT_INFO.offices.map((office, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon
              name="location"
              className="text-primary-blue-dark flex-shrink-0 mt-1"
              size={24}
              aria-hidden="true"
            />
            <p className="text-primary-blue-dark">{office.address}</p>
          </div>
        ))}

        {/* Teléfono */}
        <div className="flex items-center space-x-3">
          <Icon
            name="phone"
            className="text-primary-blue-dark flex-shrink-0"
            size={24}
            aria-hidden="true"
          />
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="text-primary-blue-dark font-semibold hover:underline"
            aria-label={`Call phone number ${CONTACT_INFO.phone}`}
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
      </address>

      {/* Ilustración */}
      <div className="mt-8 h-32 bg-gray-200 rounded-lg flex items-center justify-center" role="img" aria-label="City illustration">
        <img
          src="https://via.placeholder.com/500x150/e5e7eb/6b7280?text=City+Illustration"
          alt=""
          className="w-full h-full object-cover rounded-lg opacity-60"
        />
      </div>
    </Card>
  )
}
