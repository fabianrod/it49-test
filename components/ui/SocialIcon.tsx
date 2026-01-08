import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaYelp,
} from 'react-icons/fa'

interface SocialIconProps {
  name: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'linkedin' | 'yelp'
  className?: string
  size?: number
}

const iconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  yelp: FaYelp,
}

export default function SocialIcon({ name, className = '', size = 24, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden }: SocialIconProps & { 'aria-label'?: string; 'aria-hidden'?: boolean }) {
  const IconComponent = iconMap[name]

  return (
    <IconComponent 
      className={className} 
      size={size}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    />
  )
}
