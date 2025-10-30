import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'
import {
  FiHome,
  FiMail,
  FiSend,
  FiStar,
  FiCheck,
  FiCheckCircle,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiMenu,
  FiX,
  FiUser,
  FiFolder,
  FiSettings,
  FiCode,
  FiEdit3,
  FiArrowUp,
  FiSun,
  FiMoon,
  FiCircle,
  FiServer,
  FiGlobe,
  FiSmartphone,
  FiLink,
  FiDatabase,
  FiMonitor,
  FiLayers,
  FiZap,
} from 'react-icons/fi'
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGraduationCap,
  FaHome,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiChakraui,
  SiVercel,
  SiExpo,
  SiFirebase,
} from 'react-icons/si'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { HiOutlineBriefcase, HiHome } from 'react-icons/hi'
import { RiTrophyLine } from 'react-icons/ri' // Icon mapping for consistent usage across the app
export const IconMap = {
  // Navigation
  home: FiHome,
  homeAlt: FaHome, // Solid home icon
  homeFilled: HiHome, // Another home variant
  homeMinimal: FiCircle, // Ultra minimal - just a circle
  menu: FiMenu,
  close: FiX,
  user: FiUser,
  folder: FiFolder,
  code: FiCode,
  edit: FiEdit3,
  settings: FiSettings,
  arrowUp: FiArrowUp,

  // Theme - Multiple options for better UX
  lightMode: FiSun, // Better sun icon
  darkMode: FiMoon, // Better moon icon
  lightModeAlt: MdLightMode, // Alternative light mode
  darkModeAlt: MdDarkMode, // Alternative dark mode

  // Social & Contact
  email: FiMail,
  send: FiSend,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  briefcase: HiOutlineBriefcase,

  // Rating & Status
  star: FiStar,
  check: FiCheck,
  checkCircle: FiCheckCircle, // Better tick icon
  trophy: RiTrophyLine,
  award: FiAward, // Date & Location
  calendar: FiCalendar,
  location: FiMapPin,
  education: FaGraduationCap,

  // Services
  server: FiServer,
  globe: FiGlobe,
  smartphone: FiSmartphone,
  mobile: FiSmartphone, // Alias
  link: FiLink,
  database: FiDatabase,
  monitor: FiMonitor,
  layers: FiLayers,
  zap: FiZap,

  // Technologies
  react: FaReact,
  nodejs: FaNodeJs,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  redis: SiRedis,
  docker: FaDocker,
  nextjs: SiNextdotjs,
  chakraui: SiChakraui,
  vercel: SiVercel,
  expo: SiExpo,
  firebase: SiFirebase,
} as const

export type IconName = keyof typeof IconMap

interface AppIconProps extends Omit<IconProps, 'as'> {
  iconName: IconName
  size?: number
}

export const AppIcon: React.FC<AppIconProps> = ({
  iconName,
  size = 24,
  color,
  ...props
}) => {
  const IconComponent = IconMap[iconName]

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in IconMap`)
    return null
  }

  return (
    <Icon
      as={IconComponent as React.ComponentType}
      boxSize={`${size}px`}
      color={color}
      {...props}
    />
  )
}

// Technology icon mapping for services
export const getTechIcon = (tech: string): IconName | null => {
  const techMap: { [key: string]: IconName } = {
    React: 'react',
    'Node.js': 'nodejs',
    TypeScript: 'typescript',
    PostgreSQL: 'postgresql',
    Redis: 'redis',
    Docker: 'docker',
    'Next.js': 'nextjs',
    'Chakra UI': 'chakraui',
    Vercel: 'vercel',
    'React Native': 'react', // Use React icon for React Native
    Expo: 'expo',
    Firebase: 'firebase',
  }

  return techMap[tech] || null
}

// Render star rating with proper icons
export const renderStarRating = (rating = 5) => {
  return Array.from({ length: 5 }, (_, index) => (
    <AppIcon
      key={index}
      iconName='star'
      color={index < rating ? 'yellow.400' : 'gray.300'}
      size={16}
    />
  ))
}
