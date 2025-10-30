import { SiTypescript, SiLaravel, SiFlutter, SiDotnet } from 'react-icons/si'
import type { ContributionProps } from '@components/structure/Contributions/Contribution'

export const contributions: ContributionProps[] = [
  {
    user: 'ashanwithana',
    repository: 'player-prediction-system',
    role: {
      label: 'creator',
      color: 'green',
    },
    githubUrl: 'https://github.com/ashanwithana/player-prediction-system',
    description: {
      en: 'Football player prediction system using Python for machine learning, Node.js for backend, and Flutter for mobile app.',
    },
    topics: ['python', 'machine-learning', 'nodejs'],
    language: {
      name: 'Python',
      icon: SiTypescript,
      color: '#3776AB',
    },
  },
  {
    user: 'ashanwithana',
    repository: 'security-management-platform',
    role: {
      label: 'creator',
      color: 'green',
    },
    githubUrl: '',
    description: {
      en: 'Enterprise security management application with mobile app for security firms to manage employees and locations using Laravel backend APIs and Flutter for real-time coordination.',
    },
    topics: ['laravel', 'flutter', 'security', 'enterprise'],
    language: {
      name: 'Flutter',
      icon: SiFlutter,
      color: '#02569B',
    },
  },
  {
    user: 'ashanwithana',
    repository: 'donation-management-system',
    role: {
      label: 'creator',
      color: 'green',
    },
    githubUrl: '',
    description: {
      en: 'Comprehensive donation management application built with Laravel, featuring secure payment processing, donor management, and detailed reporting capabilities.',
    },
    topics: ['laravel', 'flutter', 'payment-processing'],
    language: {
      name: 'Flutter',
      icon: SiFlutter,
      color: '#3776AB',
    },
  },
]

// All contributions for the separate page
export const allContributions: ContributionProps[] = [
  ...contributions,
  {
    user: 'ashanwithana',
    repository: 'cdb bank web',
    role: {
      label: 'contributor',
      color: 'blue',
    },
    githubUrl: 'https://www.cdb.lk/',
    description: {
      en: 'Enterprise-level Laravel-based web applications for Citizens Development Bank (CDB) with secure RESTful APIs, optimized database performance, and robust security features.',
    },
    topics: ['laravel', 'banking', 'enterprise'],
    language: {
      name: 'Laravel',
      icon: SiLaravel,
      color: '#FF2D20',
    },
    company: {
      name: 'Saberion',
      logo: '/img/saberion_logo.jpeg',
      website: 'https://saberion.com',
    },
  },
  {
    user: 'ashanwithana',
    repository: 'sliit web platform',
    role: {
      label: 'contributor',
      color: 'blue',
    },
    githubUrl: '',
    description: {
      en: 'Comprehensive web application for Sri Lanka Institute of Information Technology (SLIIT) built with Laravel, featuring deployment management and live system monitoring.',
    },
    topics: ['laravel', 'enterprise', 'devops'],
    language: {
      name: 'Laravel',
      icon: SiLaravel,
      color: '#FF2D20',
    },
    company: {
      name: 'Saberion',
      logo: '/img/saberion_logo.jpeg',
      website: 'https://saberion.com',
    },
  },
  {
    user: 'ashanwithana',
    repository: 'minforening-mobile-platform',
    role: {
      label: 'contributor',
      color: 'blue',
    },
    githubUrl: 'https://minforening.dk/',
    description: {
      en: 'Cross-platform mobile booking application developed using Xamarin Forms with ASP.NET backend, featuring comprehensive booking management, user authentication, and employee coordination systems.',
    },
    topics: ['xamarin', 'asp.net', 'mobile', 'booking'],
    language: {
      name: 'ASP.NET',
      icon: SiDotnet,
      color: '#FF2D20',
    },
    company: {
      name: 'Saberion',
      logo: '/img/saberion_logo.jpeg',
      website: 'https://saberion.com',
    },
  },
]
