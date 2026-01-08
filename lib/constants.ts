// Colores del tema
export const COLORS = {
  primary: {
    blue: '#114177',
    blueDark: '#204186',
    blueLight: '#0e76c0',
    blueAccent: '#0099FF',
  },
  secondary: {
    yellow: '#f5c143',
    lightBlue: '#e9f2fb',
  },
  neutral: {
    black: '#010101',
    gray: '#556d8a',
    white: '#ffffff',
  },
} as const

// Rutas de navegación
export const NAVIGATION_ITEMS = [
  { label: 'Property Management', href: '#', hasDropdown: true },
  { label: 'For Rent', href: '#' },
  { label: 'Residents', href: '#' },
  { label: 'Owners', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
] as const

// Items del dropdown de Property Management
export const PROPERTY_MANAGEMENT_ITEMS = [
  { label: 'The Mashcole Method', href: '#' },
  { label: 'Asset Operation', href: '#' },
  { label: 'Account Operations', href: '#' },
  { label: 'Due Diligence', href: '#' },
  { label: 'Newsletters', href: '#' },
] as const

// Información de contacto
export const CONTACT_INFO = {
  phone: '(818) 888-8052',
  email: 'info@mashcole.com',
  companyName: 'MASHCOLE PROPERTY MANAGEMENT, INC.',
  offices: [
    {
      address: '26901 Agoura Road, Suite 250, Calabasas, CA 91301',
      type: 'office' as const,
    },
    {
      address: '3846 E Anaheim St, Long Beach, CA 90804',
      type: 'office' as const,
    },
  ],
  dre: '01495377',
} as const

// Enlaces de navegación del footer
export const FOOTER_NAVIGATION = [
  { label: 'Home', href: '#' },
  { label: 'Property Management', href: '#' },
  { label: 'Find Rentals', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Owners', href: '#' },
  { label: 'Resident', href: '#' },
  { label: 'Blogs', href: '#' },
  { label: 'Contact', href: '#' },
] as const

// Redes sociales
export const SOCIAL_MEDIA = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'TikTok', icon: 'tiktok', href: '#' },
  { name: 'Youtube', icon: 'youtube', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'Yelp', icon: 'yelp', href: '#' },
] as const

// Rutas de imágenes
export const IMAGE_PATHS = {
  logo: '/images/logo.svg',
  hero: '/images/property-management-angeles.png',
} as const
