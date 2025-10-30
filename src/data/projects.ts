import {
  SiFlutter,
  SiPython,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiReact,
  SiMongodb,
} from 'react-icons/si'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Research Project (Wiseyard)',
    description: {
      en: 'Football player prediction system using Python for machine learning, Node.js for backend, and Flutter for mobile app.',
    },
    github: 'https://github.com/ashanwithana/wiseyard',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Machine Learning', icon: SiPython, color: '#FF6F00' },
    ],
    tags: [
      { label: 'machine-learning', colorScheme: 'purple' },
      { label: 'mobile', colorScheme: 'blue' },
      { label: 'research', colorScheme: 'green' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'CDB Banking Solutions',
    description: {
      en: 'Enterprise-level Laravel-based web applications for Citizens Development Bank (CDB) with secure RESTful APIs, optimized database performance, and robust security features.',
    },
    github: '',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'RESTful APIs', icon: SiNodedotjs, color: '#61DAFB' },
    ],
    tags: [
      { label: 'enterprise', colorScheme: 'purple' },
      { label: 'banking', colorScheme: 'green' },
      { label: 'full-stack', colorScheme: 'pink' },
    ],
    isShowcased: false,
  },
  {
    id: '3',
    title: 'SLIIT Educational Platform',
    description: {
      en: 'Comprehensive web application for Sri Lanka Institute of Information Technology (SLIIT) built with Laravel, featuring deployment management and live system monitoring.',
    },
    github: '',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'DevOps', icon: SiNodedotjs, color: '#326CE5' },
    ],
    tags: [
      { label: 'education', colorScheme: 'blue' },
      { label: 'enterprise', colorScheme: 'purple' },
      { label: 'full-stack', colorScheme: 'pink' },
    ],
    isShowcased: false,
  },
  {
    id: '4',
    title: 'Donation Management System',
    description: {
      en: 'Comprehensive donation management application built with Laravel, featuring secure payment processing, donor management, and detailed reporting capabilities.',
    },
    github: '',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Payment APIs', icon: SiNodedotjs, color: '#00C851' },
    ],
    tags: [
      { label: 'non-profit', colorScheme: 'green' },
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'payments', colorScheme: 'orange' },
    ],
    isShowcased: false,
  },
  {
    id: '5',
    title: 'Security Management Platform',
    description: {
      en: 'Enterprise security management application with mobile app for security firms to manage employees and locations using Laravel backend APIs and Flutter for real-time coordination.',
    },
    github: 'https://github.com/ashanwithana/burhani-systems',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'RESTful APIs', icon: SiNodedotjs, color: '#61DAFB' },
    ],
    tags: [
      { label: 'enterprise', colorScheme: 'purple' },
      { label: 'security', colorScheme: 'red' },
      { label: 'full-stack', colorScheme: 'pink' },
    ],
    isShowcased: false,
  },
  {
    id: '6',
    title: 'Minforening Mobile Platform',
    description: {
      en: 'Cross-platform mobile booking application developed using Xamarin Forms with ASP.NET backend, featuring comprehensive booking management, user authentication, and employee coordination systems.',
    },
    github: 'https://github.com/ashanwithana/minforening-booking',
    technologies: [
      { name: 'ASP.NET', icon: SiReact, color: '#512BD4' },
      { name: 'Xamarin', icon: SiFlutter, color: '#3498DB' },
      { name: 'C#', icon: SiMongodb, color: '#512BD4' },
      { name: 'Mobile Development', icon: SiFlutter, color: '#02569B' },
    ],
    tags: [
      { label: 'mobile', colorScheme: 'blue' },
      { label: 'booking', colorScheme: 'orange' },
      { label: 'asp.net', colorScheme: 'purple' },
    ],
    isShowcased: false,
  },
]
