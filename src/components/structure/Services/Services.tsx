import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Grid,
  GridItem,
  useColorModeValue,
  Card,
  CardBody,
  List,
  ListItem,
} from '@chakra-ui/react'
import { AppIcon } from '@components/icons'
import { services, type Service } from '@data/services'
import { config } from '@config/config'

const renderTechIcon = (tech: string) => {
  // Return full technology name in lowercase
  return (
    <Text fontSize='xs' fontWeight='medium'>
      {tech.toLowerCase()}
    </Text>
  )
}

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Card
      bg={cardBg}
      border='2px solid'
      borderColor={borderColor}
      borderRadius='xl'
      p={{ base: 6, lg: 5 }}
      position='relative'
      height='full'
      _hover={{
        transform: 'translateY(-6px) scale(1.01)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
      }}
      transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    >
      {service.popular && (
        <Badge
          position='absolute'
          top='-12px'
          left='50%'
          transform='translateX(-50%)'
          bg={useColorModeValue('black', 'white')}
          color={useColorModeValue('white', 'black')}
          px={3}
          py={1}
          borderRadius='full'
          fontSize='xs'
          fontWeight='bold'
          boxShadow='0 4px 15px rgba(0, 0, 0, 0.2)'
          display='flex'
          alignItems='center'
          gap={1}
        >
          <AppIcon iconName='star' fontSize='xs' />
          Popular
        </Badge>
      )}

      <CardBody p={0}>
        <VStack spacing={{ base: 4, lg: 3 }} align='stretch' height='full'>
          <VStack spacing={3} align='center' textAlign='center'>
            <Box
              p={{ base: 3, lg: 2 }}
              borderRadius='xl'
              bg={useColorModeValue('gray.50', 'gray.700')}
              display='flex'
              alignItems='center'
              justifyContent='center'
              role='img'
              aria-label={service.title}
            >
              <AppIcon
                iconName={service.icon}
                fontSize={{ base: '4xl', lg: '3xl' }}
                color={useColorModeValue('gray.700', 'gray.300')}
              />
            </Box>
            <Heading
              size={{ base: 'lg', lg: 'md' }}
              color={
                service.popular
                  ? 'purple.600'
                  : useColorModeValue('gray.800', 'white')
              }
              fontWeight='bold'
              lineHeight='short'
            >
              {service.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.600', 'gray.300')}
              fontSize={{ base: 'md', lg: 'sm' }}
              lineHeight='snug'
              noOfLines={3}
            >
              {service.description}
            </Text>

            {/* Technology Icons */}
            <HStack spacing={2} justify='center' flexWrap='wrap'>
              {service.technologies.slice(0, 5).map((tech, index) => (
                <Box
                  key={index}
                  p={2}
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  borderRadius='md'
                  title={tech}
                  fontSize='sm'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  color={useColorModeValue('gray.700', 'gray.300')}
                >
                  {renderTechIcon(tech)}
                </Box>
              ))}
            </HStack>
          </VStack>

          <Box flex='1'>
            <Text
              fontWeight='bold'
              mb={{ base: 3, lg: 2 }}
              color={useColorModeValue('gray.800', 'white')}
              fontSize={{ base: 'md', lg: 'sm' }}
            >
              What's included:
            </Text>
            <List spacing={{ base: 2, lg: 1 }}>
              {service.features.slice(0, 4).map((feature, index) => (
                <ListItem key={index} display='flex' alignItems='flex-start'>
                  <AppIcon
                    iconName='checkCircle'
                    color={service.popular ? 'purple.500' : 'green.500'}
                    fontSize={{ base: 'lg', lg: 'md' }}
                    mt={0.5}
                    mr={2}
                  />
                  <Text
                    fontSize={{ base: 'sm', lg: 'xs' }}
                    color={useColorModeValue('gray.700', 'gray.300')}
                    fontWeight='medium'
                    lineHeight='short'
                  >
                    {feature}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>

          <Button
            as='a'
            href={`mailto:${config.email}?subject=Inquiry about ${service.title}&body=Hi Ashan,%0D%0A%0D%0AI'm interested in your ${service.title} service. Could you please provide more details?%0D%0A%0D%0AThank you!`}
            bg={useColorModeValue('black', 'white')}
            color={useColorModeValue('white', 'black')}
            size={{ base: 'lg', lg: 'md' }}
            height={{ base: '12', lg: '10' }}
            leftIcon={<AppIcon iconName='email' />}
            borderRadius='lg'
            fontWeight='bold'
            fontSize={{ base: 'md', lg: 'sm' }}
            _hover={{
              bg: useColorModeValue('gray.800', 'gray.200'),
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            }}
            transition='all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          >
            Get Started
          </Button>
        </VStack>
      </CardBody>
    </Card>
  )
}

export const Services: React.FC = () => {
  return (
    <Box
      as='section'
      py={{ base: 8, md: 12 }}
      minH='100vh'
      display='flex'
      alignItems='center'
    >
      <Container maxW='7xl'>
        <VStack spacing={{ base: 8, md: 12 }} align='stretch'>
          {/* Header Section */}
          <VStack spacing={6} textAlign='center' py={8}>
            <Heading
              as='h1'
              variant='sectionTitle'
              size='2xl'
              textAlign='center'
            >
              Services
            </Heading>
            <Text
              fontSize='xl'
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW='3xl'
              lineHeight='tall'
            >
              Transform your ideas into robust, scalable solutions with my
              comprehensive development services. From backend architecture to
              full-stack applications, I deliver quality code that drives
              results.
            </Text>
          </VStack>

          {/* Services Grid */}
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: 6, md: 8, lg: 6 }}
            maxW='full'
            mx='auto'
          >
            {services.map((service) => (
              <GridItem key={service.id}>
                <ServiceCard service={service} />
              </GridItem>
            ))}
          </Grid>

          {/* CTA Section */}
          <VStack
            spacing={{ base: 4, md: 6 }}
            bg={useColorModeValue(
              'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
              'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)'
            )}
            p={{ base: 6, md: 8 }}
            borderRadius='2xl'
            textAlign='center'
          >
            <Heading size={{ base: 'md', md: 'lg' }}>
              Ready to Start Your Project?
            </Heading>
            <Text
              color='gray.600'
              maxW='md'
              fontSize={{ base: 'sm', md: 'md' }}
            >
              Let's discuss your requirements and create something amazing
              together. I'm here to help you build robust, scalable solutions.
            </Text>
            <VStack spacing={3} w='full' display={{ base: 'flex', md: 'none' }}>
              <Button
                as='a'
                href={`mailto:${config.email}?subject=Project Inquiry&body=Hi Ashan,%0D%0A%0D%0AI have a project I'd like to discuss with you. Here are the details:%0D%0A%0D%0A[Please describe your project]%0D%0A%0D%0AThank you!`}
                bg={useColorModeValue('black', 'white')}
                color={useColorModeValue('white', 'black')}
                size='md'
                leftIcon={<AppIcon iconName='email' />}
                w='full'
                maxW='xs'
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                }}
              >
                Start a Project
              </Button>
              <Button
                variant='outline'
                size='md'
                leftIcon={<AppIcon iconName='star' />}
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                w='full'
                maxW='xs'
                _hover={{
                  transform: 'translateY(-2px)',
                  borderColor: useColorModeValue('gray.400', 'gray.500'),
                }}
              >
                View Portfolio
              </Button>
            </VStack>
            <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Button
                as='a'
                href={`mailto:${config.email}?subject=Project Inquiry&body=Hi Ashan,%0D%0A%0D%0AI have a project I'd like to discuss with you. Here are the details:%0D%0A%0D%0A[Please describe your project]%0D%0A%0D%0AThank you!`}
                bg={useColorModeValue('black', 'white')}
                color={useColorModeValue('white', 'black')}
                size='lg'
                leftIcon={<AppIcon iconName='email' />}
                _hover={{
                  bg: useColorModeValue('gray.800', 'gray.200'),
                  transform: 'translateY(-2px)',
                }}
                transition='all 0.2s ease-in-out'
              >
                Get in Touch
              </Button>
              <Button
                as='a'
                href='/#contact'
                variant='outline'
                size='lg'
                bg={useColorModeValue('white', 'gray.800')}
                borderColor={useColorModeValue('black', 'gray.600')}
                color={useColorModeValue('black', 'white')}
                border='2px solid'
                _hover={{
                  bg: useColorModeValue('gray.100', 'gray.700'),
                  borderColor: useColorModeValue('gray.800', 'gray.500'),
                  transform: 'translateY(-2px)',
                }}
                transition='all 0.2s ease-in-out'
              >
                View Contact Info
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
