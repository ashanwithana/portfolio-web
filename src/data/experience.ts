export interface WorkExperience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  logo: string
  companyUrl?: string
}

export const workExperience: WorkExperience[] = [
  {
    id: 'saberion',
    company: 'Saberion',
    position: 'Software Engineer',
    location: 'Hybrid',
    startDate: '2022-01',
    endDate: 'Present',
    description: [
      'Lead development of scalable web applications using modern technologies',
      'Architect and implement full-stack solutions with focus on performance and user experience',
      'Collaborate with cross-functional teams to deliver high-quality software products',
      'Mentor junior developers and contribute to technical decision-making',
    ],
    technologies: [
      'Laravel',
      'TypeScript',
      'Node.js',
      '.Net',
      'GraphQL',
      'PostgreSQL',
      'AWS',
      'Docker',
    ],
    logo: '/img/saberion_logo.jpeg',
    companyUrl: 'https://saberion.com',
  },
]

export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate)
  const end = endDate === 'Present' ? new Date() : new Date(endDate)

  const startFormatted = start.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })

  const endFormatted =
    endDate === 'Present'
      ? 'Present'
      : end.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })

  return `${startFormatted} - ${endFormatted}`
}

export const calculateDuration = (
  startDate: string,
  endDate: string
): string => {
  const start = new Date(startDate)
  const end = endDate === 'Present' ? new Date() : new Date(endDate)

  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())

  const years = Math.floor(diffInMonths / 12)
  const months = diffInMonths % 12

  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`
  } else {
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${
      months !== 1 ? 's' : ''
    }`
  }
}
