import { extendTheme } from '@chakra-ui/react'
import { Button, Heading, Input, Link, Textarea } from './components'

export const theme = extendTheme({
  colors: {
    black: '#1A202C',
    primary: {
      100: '#E2E8F0',
      200: '#CBD5E0',
      300: '#A0AEC0',
      400: '#718096',
      500: '#4A5568',
      600: '#2D3748',
      700: '#1A202C',
      800: '#171923',
      900: '#0D1117',
    },
    secondary: {
      100: '#FFF5F5',
      200: '#FED7D7',
      300: '#FEB2B2',
      400: '#FC8181',
      500: '#F56565',
      600: '#E53E3E',
      700: '#C53030',
      800: '#9B2C2C',
      900: '#742A2A',
    },
    accent: {
      100: '#E6FFFA',
      200: '#B2F5EA',
      300: '#81E6D9',
      400: '#4FD1C7',
      500: '#38B2AC',
      600: '#319795',
      700: '#2C7A7B',
      800: '#285E61',
      900: '#234E52',
    },
  },
  styles: {
    global: {
      html: {
        // scrollBehavior: 'smooth',
      },
      '::selection': {
        background: 'accent.200',
        color: 'primary.800',
      },
    },
  },
  fonts: {
    heading: 'Hanson, sans-serif',
    body: 'Manrope Variable, sans-serif',
  },
  shadows: {
    gray: '0 0 1px 2px rgba(75, 85, 99, .75)',
  },
  sizes: {
    header: {
      height: '6.5625rem',
    },
  },
  components: {
    Button,
    Heading,
    Input,
    Link,
    Textarea,
  },
})
