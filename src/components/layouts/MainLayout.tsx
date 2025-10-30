import type { ReactNode } from 'react'
import { Box, type BoxProps, Flex, Container } from '@chakra-ui/react'
import { Footer, Header, FloatingSocial } from '@components/structure'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => (
  <Container maxW={{ base: 'container.xl', xl: '85vw', '2xl': '90vw' }} px={{ base: 4, lg: 8, xl: 16, '2xl': 20 }}>
    <Flex
      minH='100vh'
      direction='column'
      borderColor='black'
      borderTop={{ base: '1px solid', sm: 'none' }}
      borderBottom={{ base: '1px solid', sm: 'none' }}
      borderLeft='1px solid'
      borderRight='1px solid'
    >
      <Header />
      <Box as='main' flex={1} pt={{ base: '20', xl: '28', '2xl': '36' }} {...props}>
        {children}
      </Box>
      <Footer />
      <FloatingSocial />
    </Flex>
  </Container>
)
