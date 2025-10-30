import Head from 'next/head'

interface PersonSchemaProps {
  includeOrganization?: boolean
}

export const PersonSchema: React.FC<PersonSchemaProps> = ({
  includeOrganization = false,
}) => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ashan Withana',
    jobTitle: 'Software Engineer & Backend Developer',
    description:
      'Experienced Software Engineer specializing in Laravel, .NET, and Python. Building scalable backend systems and innovative solutions for modern applications.',
    url: 'https://ashanwithana.dev',
    sameAs: [
      'https://github.com/ashanwithana',
      'https://www.linkedin.com/in/ashanwithana',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Padukka',
      addressCountry: 'Sri Lanka',
    },
    email: 'ashanwithana4@gmail.com',
    telephone: '+94 71 1722 653',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'NSBM Green University',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pitipana',
          addressCountry: 'Sri Lanka',
        },
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Ural Federal University',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Russia',
        },
      },
    ],
    knowsAbout: [
      'Laravel',
      '.NET',
      'Python',
      'Node.js',
      'TypeScript',
      'React',
      'Angular',
      'Vue.js',
      'API Development',
      'Database Design',
      'Cloud Computing',
      'Software Architecture',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Sri Lanka',
      },
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ashan Withana - Software Development Services',
    description:
      'Professional software development services including backend development, full-stack solutions, and technical consulting.',
    url: 'https://ashanwithana.dev/services',
    provider: {
      '@type': 'Person',
      name: 'Ashan Withana',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Backend Development',
      'Full-Stack Web Development',
      'Mobile App Development',
      'API Integration & Services',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Padukka',
      addressCountry: 'Sri Lanka',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94 71 1722 653',
      email: 'ashanwithana4@gmail.com',
      contactType: 'Customer Service',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ashan Withana Portfolio',
    description:
      'Portfolio website of Ashan Withana, Software Engineer specializing in backend development and full-stack solutions.',
    url: 'https://ashanwithana.dev',
    author: {
      '@type': 'Person',
      name: 'Ashan Withana',
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Ashan Withana',
    },
  }

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      {includeOrganization && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      )}
    </Head>
  )
}

interface ServiceSchemaProps {
  service: {
    id: string
    title: string
    description: string
    features: string[]
    technologies: string[]
  }
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Ashan Withana',
      url: 'https://ashanwithana.dev',
    },
    serviceType: service.title,
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://ashanwithana.dev/services',
      serviceSmsNumber: '+94 71 1722 653',
      servicePhone: '+94 71 1722 653',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: index + 1,
      })),
    },
  }

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </Head>
  )
}

interface ProjectSchemaProps {
  project: {
    name: string
    description: string
    url?: string
    technologies: string[]
    dateCreated?: string
  }
}

export const ProjectSchema: React.FC<ProjectSchemaProps> = ({ project }) => {
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    url: project.url,
    author: {
      '@type': 'Person',
      name: 'Ashan Withana',
      url: 'https://ashanwithana.dev',
    },
    programmingLanguage: project.technologies,
    dateCreated: project.dateCreated,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web Browser',
  }

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
    </Head>
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({
  items,
}) => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </Head>
  )
}
