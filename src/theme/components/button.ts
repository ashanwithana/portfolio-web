import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  variants: {
    minimal: {
      bg: 'transparent',
      color: 'inherit',
      borderRadius: 0,
      transition: 'border 0.1s ease-in',
      _hover: {
        borderColor: 'black',
        border: '1px solid',
      },
    },
    accent: {
      bg: 'transparent',
      textTransform: 'uppercase',
      color: 'black',
      fontSize: 'lg',
      fontWeight: 'bold',
      p: 0,
      _hover: {
        color: 'gray.700',
      },
    },
    outline: {
      bg: 'white',
      borderRadius: 0,
      borderColor: 'black',
      border: '1px solid',
      px: '8',
      _hover: {
        bg: 'gray.100',
      },
    },
    toggle: {
      bg: 'white',
      borderRadius: 0,
      borderColor: 'black',
      border: '1px solid',
      px: '8',
      _hover: {
        bg: 'gray.100',
      },
      _active: {
        bg: 'black',
        borderColor: 'black',
        color: 'white',
      },
    },
    navigation: {
      borderRadius: 0,
      bg: 'white',
      justifyContent: 'flex-start',
      minW: '44',
      h: '20',
      borderColor: 'black',
      border: '1px solid',
      px: '8',
      _hover: {
        backgroundImage:
          'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(0, 0, 0, 1) 24px, rgba(0, 0, 0, 1) 25px)',
      },
      _activeLink: {
        fontStyle: 'italic',
      },
    },
  },
  sizes: {
    minimal: {
      p: 0,
      h: 10,
      minW: 10,
      fontSize: 'lg',
    },
  },
}
