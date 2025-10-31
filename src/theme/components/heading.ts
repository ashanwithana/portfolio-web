import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Heading: ComponentSingleStyleConfig = {
  variants: {
    banner: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      _light: {
        color: '#383434',
      },
      _dark: {
        color: 'white',
      },
    },
    sectionTitle: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: { base: '2xl', md: '3xl', lg: '4xl', xl: '5xl' },
      lineHeight: 1.0,
      textAlign: { base: 'center', md: 'left' },
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      _light: {
        color: '#383434',
      },
      _dark: {
        color: 'white',
      },
    },
    categoryTitle: {
      fontSize: '2rem',
      fontFamily: 'body',
      _light: {
        color: '#4A5568',
      },
      _dark: {
        color: 'gray.300',
      },
    },
  },
  sizes: {
    banner: {
      fontSize: { base: '3xl', md: '3.5rem' },
      lineHeight: 1.1,
    },
    hero: {
      fontSize: { base: '4xl', md: '5xl' },
      lineHeight: 1.1,
    },
    '3xl': {
      fontSize: { base: 'xl', md: '2xl' },
      lineHeight: 1.2,
    },
    '2xl': {
      fontSize: { base: 'lg', md: 'xl' },
      lineHeight: 1.2,
    },
    'xl': {
      fontSize: { base: 'md', md: 'lg' },
      lineHeight: 1.3,
    },
  },
}
