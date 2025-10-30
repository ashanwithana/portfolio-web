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
      fontSize: { base: '4xl', md: '4rem' },
      lineHeight: 1,
    },
    hero: {
      fontSize: { base: '5xl', md: '6xl' },
      lineHeight: 1,
    },
  },
}
