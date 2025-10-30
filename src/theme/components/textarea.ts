import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Textarea: ComponentSingleStyleConfig = {
  variants: {
    primary: {
      background: 'white',
      borderColor: 'black',
      border: '1px solid',
      borderRadius: 0,
      _hover: {
        bg: 'gray.100',
      },
      _focusVisible: {
        borderColor: 'black',
        border: '2px solid',
        bg: 'gray.100',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}
