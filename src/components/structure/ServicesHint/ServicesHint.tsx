import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { services } from '@data/services'
import { useRouter } from 'next/router'

export const ServicesHint: React.FC = () => {
  const router = useRouter()

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('black', 'gray.600')
  const shadowColor = useColorModeValue('black', 'gray.600')
  const titleColor = useColorModeValue('gray.800', 'white')
  const descColor = useColorModeValue('gray.600', 'gray.300')
  const sectionBorderColor = useColorModeValue('black', 'gray.600')

  const handleSectionClick = () => {
    router.push('/services')
  }

  return (
    <VStack
      as='section'
      align='stretch'
      pb='20'
      borderColor={sectionBorderColor}
      borderTop='1px solid'
      spacing='16'
      cursor='pointer'
      onClick={handleSectionClick}
      _hover={{
        transform: 'translateY(-2px)',
        transition: 'all 0.2s ease-in-out',
      }}
      transition='all 0.2s ease-in-out'
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt='32'
        pb='3'
        bg='linear-gradient(90deg, #87a2d7ff 0%, #ccecf5ff 100%)'
      >
        <Heading
          as='h2'
          variant='sectionTitle'
          color='gray.800'
          size='2xl'
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
        >
          Expertise
        </Heading>
      </Box>

      <Box px={{ base: '4', md: '8' }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing='0'
          maxW='6xl'
          mx='auto'
        >
          {services.slice(0, 4).map((service) => {
            return (
              <Box
                key={service.id}
                p={6}
                bg={cardBg}
                border='1px solid'
                borderColor={borderColor}
                borderRadius='0'
                shadow={`8px 8px 0px 0px ${shadowColor}`}
                transition='all 0.1s ease-in-out'
                _hover={{
                  shadow: 'none',
                  transform: 'translate(8px, 8px)',
                }}
              >
                <VStack spacing={3} align='start'>
                  <Box>
                    <Box
                      fontSize='lg'
                      fontWeight='semibold'
                      color={titleColor}
                      mb={2}
                    >
                      {service.title}
                    </Box>
                    <Box fontSize='sm' color={descColor} lineHeight='1.5'>
                      {service.description}
                    </Box>
                  </Box>
                </VStack>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>
    </VStack>
  )
}
