import { IconName } from '@components/icons'

export interface Service {
  id: string
  title: string
  description: string
  icon: IconName
  technologies: string[]
  features: string[]
  rating: number
  price?: string
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 'backend-development',
    title: 'Backend Development',
    description:
      'Powerful server-side solutions with modern architecture and database integration.',
    icon: 'server',
    technologies: ['Laravel', 'TypeScript', 'Node.js', '.NET', 'C#'],
    features: [
      'RESTful & GraphQL APIs',
      'Database Design & Optimization',
      'Authentication & Authorization',
      'Real-time Data Processing',
      'Security & Performance',
    ],
    rating: 5,
    popular: true,
  },
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description:
      'Modern web applications with cutting-edge technologies and seamless user experiences.',
    icon: 'monitor',
    technologies: ['Blade', 'Angular', 'Next.js', 'React', 'Vue.js'],
    features: [
      'Cutting-Edge Frontend Frameworks',
      'Progressive Web Apps (PWA)',
      'Responsive & Accessible Design',
      'State Management & Optimization',
      'SEO & Performance Tuning',
    ],
    rating: 5,
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications with native performance and modern UI/UX.',
    icon: 'smartphone',
    technologies: ['Flutter', 'React Native', 'Firebase'],
    features: [
      'React Native Development',
      'iOS & Android Compatibility',
      'Native Module Integration',
      'Push Notifications & Analytics',
      'App Store Deployment',
    ],
    rating: 4,
    popular: true,
  },
  {
    id: 'api-integration',
    title: 'API Integration & Services',
    description:
      'Seamless system integration with third-party services and microservices architecture.',
    icon: 'layers',
    technologies: ['REST API', 'GraphQL', 'Webhooks', 'OAuth'],
    features: [
      'Third-party API Integration',
      'Microservices Architecture',
      'Data Synchronization & Migration',
      'Webhook Implementation',
      'Rate Limiting & Error Handling',
    ],
    rating: 4,
  },
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id)
}

export const getFeaturedServices = (): Service[] => {
  return services.filter((service) => service.popular)
}
