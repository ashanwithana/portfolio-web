import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Link: ComponentSingleStyleConfig = {
  variants: {
    external: {
      textDecoration: 'underline dashed',
      textDecorationThickness: '2px',
      textUnderlineOffset: '1px',
      _hover: {
        textDecoration: 'underline',
      },
    },
    contact: {
      textTransform: 'uppercase',
      fontWeight: 'semibold',
      _light: {
        color: 'black',
      },
      _dark: {
        color: 'white',
      },
    },
    showcase: {
      fontWeight: 'medium',
      transition: 'color 0.1s ease',
      _light: {
        color: 'black',
      },
      _dark: {
        color: 'white',
      },
      _groupHover: {
        color: '#7e91bc',
        textDecoration: 'underline',
        textDecorationColor: '#7e91bc',
        textUnderlineOffset: '2px',
      },
    },
  },
}
