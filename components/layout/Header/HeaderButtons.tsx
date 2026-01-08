import Button from '@/components/ui/Button'

export default function HeaderButtons() {
  return (
    <div className="flex items-center space-x-2 mb-5" role="toolbar" aria-label="Quick actions">
      <Button variant="secondary" size="md" aria-label="Pay online">
        PAY ONLINE
      </Button>
      <Button variant="ghost" size="md" aria-label="Employee portal">
        EMPLOYEES
      </Button>
      <Button 
        variant="primary" 
        size="md" 
        className="bg-primary-blue-light"
        aria-label="Call phone number (818) 888-8052"
      >
        (818) 888-8052
      </Button>
    </div>
  )
}
