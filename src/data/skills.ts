import {
  SiAmazonwebservices,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import type { SkillGroup } from '@utils/types'

export const skills: SkillGroup[] = [
  {
    id: '1',
    category: 'languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'C#', icon: SiDotnet, color: '#512BD4' },
    ],
  },
  {
    id: '2',
    category: 'front-end',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    id: '3',
    category: 'back-end',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ],
  },
  {
    id: '4',
    category: 'cloud',
    skills: [
      { name: 'AWS', icon: SiAmazonwebservices, color: '#232F3E' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
  {
    id: '5',
    category: 'databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
]
