import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Button,
  Link,
  Text,
} from '@chakra-ui/react'
import { contributions } from '@data/contributions'
import { Contribution } from './Contribution'

export const Contributions: React.FC = () => {
  return (
    <VStack
      as='section'
      align='stretch'
      pb='20'
      borderColor='black'
      borderTop='1px solid'
      spacing='16'
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt='32'
        pb='3'
        bg='linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)'
      >
        <Heading
          as='h2'
          variant='sectionTitle'
          color='white'
          size='2xl'
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
        >
          Contributions
        </Heading>
      </Box>
      <VStack spacing='8' px={{ base: '4', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing='16' w='full'>
          {contributions.map((contribution) => (
            <Contribution key={contribution.repository} {...contribution} />
          ))}
        </SimpleGrid>

        <Button
          as={Link}
          href='/contributions'
          size='lg'
          colorScheme='purple'
          variant='outline'
          rightIcon={<Text>→</Text>}
          _hover={{
            bg: 'purple.500',
            color: 'white',
            textDecoration: 'none',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition='all 0.2s'
        >
          View All Contributions
        </Button>
      </VStack>
    </VStack>
  )
}
