import { GetStaticProps } from 'next'
// import { NextSeo } from 'next-seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react'
import { AppIcon } from '../components/icons/IconMap'
import { PersonSchema, BreadcrumbSchema } from '@components/seo'
import { MainLayout } from '@components/layouts/MainLayout'
import { config } from '@config/config'
import {
  workExperience,
  formatDateRange,
  calculateDuration,
} from '@data/experience'

interface Education {
  degree: string
  institution: string
  year: string
  location: string
  grade?: string
  description?: string
}

const educationData: Education[] = [
  {
    degree: 'MSc in Artificial Intelligence (Reading)',
    institution: 'Ural Federal University, Russia',
    year: '09/2025 - Present',
    location: 'Russia',
    description:
      'Advanced studies in Machine Learning, Deep Learning, and AI systems development.',
  },
  {
    degree: 'BSc in Management Information Systems (Special)',
    institution: 'NSBM Green University',
    year: '09/2019 - 09/2023',
    location: 'Pitipana, Sri Lanka',
    description:
      'Successfully completed Bachelor of Science (BSc) in Management Information Systems (Special) with focus on software development, database management, and system analysis.',
  },
  {
    degree: 'G.C.E (O/L, A/L) Commerce / ICT Stream',
    institution: 'Mahanama College, Colombo 03',
    year: '02/2010 - 08/2018',
    location: 'Colombo, Sri Lanka',
    description:
      'Completed secondary education with Commerce / ICT stream specialization.',
  },
]

export default function AboutPage() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('black', 'white')

  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ashanwithana.dev' },
          { name: 'About', url: 'https://ashanwithana.dev/about' },
        ]}
      />
      {/* <NextSeo
        title='About Me - Ashan Withana | Software Developer'
        description="Learn more about Ashan Withana's background, education qualifications, and professional journey in software development. University of Moratuwa graduate specializing in full-stack development."
        canonical='https://ashanwithana.dev/about'
        openGraph={{
          title: 'About Me - Ashan Withana',
          description:
            'Software developer passionate about crafting innovative solutions with modern technologies. University of Moratuwa graduate with expertise in full-stack development.',
          url: 'https://ashanwithana.dev/about',
          type: 'profile',
          profile: {
            firstName: 'Ashan',
            lastName: 'Withana',
            username: 'ashanwithana',
            gender: 'male',
          },
        }}
      /> */}
      <MainLayout>
        <Container maxW='6xl' py={{ base: 8, md: 16 }}>
          <VStack spacing={{ base: 8, md: 12 }} align='stretch'>
            {/* Header Section */}
            <VStack spacing={6} textAlign='center'>
              <Box
                position='relative'
                width='200px'
                height='200px'
                bg={cardBg}
                borderRadius='none'
                shadow={`8px 8px 0px 0px ${useColorModeValue(
                  '#6366f1',
                  '#a855f7'
                )}`}
                transition='all 0.1s ease-in-out'
                cursor='pointer'
                _hover={{
                  shadow: 'none',
                  transform: 'translate(8px, 8px)',
                }}
                overflow='hidden'
              >
                <Image
                  src='/img/DSC03956.JPEG'
                  alt='Ashan Withana'
                  width='100%'
                  height='100%'
                  objectFit='cover'
                />
              </Box>
              <VStack spacing={2}>
                <Heading
                  as='h1'
                  variant='sectionTitle'
                  size='xl'
                  fontWeight='bold'
                >
                  ASHAN WITHANA
                </Heading>
                <Text
                  fontSize='xl'
                  color={textColor}
                  maxW='2xl'
                  fontFamily='body'
                >
                  Software Engineer | Backend Developer with 3+ years of
                  experience in scalable systems
                </Text>
              </VStack>
            </VStack>

            {/* Introduction Section */}
            <Box
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              borderColor={useColorModeValue('black', 'white')}
              border='1px solid'
              shadow={`8px 8px 0px 0px ${useColorModeValue(
                '#6366f1',
                '#a855f7'
              )}`}
              transition='all 0.1s ease-in-out'
              _hover={{
                shadow: 'none',
                transform: 'translate(8px, 8px)',
              }}
            >
              <VStack spacing={4} align='stretch'>
                <Heading as='h2' size='lg' variant='sectionTitle'>
                  Introduction
                </Heading>
                <Text
                  fontSize='md'
                  lineHeight='tall'
                  color={textColor}
                  fontFamily='body'
                >
                  Hello! I&apos;m Ashan Withana, a Software Engineer and Backend
                  Developer based in Padukka, Sri Lanka. With over 3 years of
                  hands-on experience, I specialize in building robust,
                  scalable, and high performing systems using Laravel, .NET, and
                  Python. I&apos;m skilled in developing RESTful APIs, optimizing
                  databases, and integrating cloud-native solutions to support
                  modern, data-driven applications.
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='tall'
                  color={textColor}
                  fontFamily='body'
                >
                  Currently pursuing my MSc in Artificial Intelligence at Ural
                  Federal University, Russia, I&apos;m passionate about designing
                  end-to-end system workflows that are both efficient and
                  maintainable. I&apos;m known for writing clean, well-structured
                  code and solving complex backend problems with practical,
                  user-focused solutions.
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='tall'
                  color={textColor}
                  fontFamily='body'
                >
                  As a strong team player, I communicate effectively and enjoy
                  working in collaborative, agile environments. I&apos;m always eager
                  to learn new technologies, follow best practices, and
                  contribute to high-quality software that delivers real value.
                  My experience spans from full-stack development to specialized
                  backend engineering.
                </Text>
              </VStack>
            </Box>

            {/* Work Experience Section */}
            <VStack spacing={6} align='stretch'>
              <Heading as='h2' size='xl' variant='sectionTitle'>
                <Text mr={3} fontSize='xl'>
                  <AppIcon iconName='briefcase' fontSize='xl' />
                </Text>
                Work Experience
              </Heading>

              <VStack spacing={6} align='stretch'>
                {workExperience.map((job) => (
                  <Box
                    key={job.id}
                    bg={cardBg}
                    p={{ base: 6, md: 8 }}
                    borderColor={useColorModeValue('black', 'white')}
                    border='1px solid'
                    shadow={`8px 8px 0px 0px ${useColorModeValue(
                      '#6366f1',
                      '#a855f7'
                    )}`}
                    transition='all 0.1s ease-in-out'
                    _hover={{
                      shadow: 'none',
                      transform: 'translate(8px, 8px)',
                    }}
                  >
                    <VStack spacing={6} align='stretch'>
                      {/* Header with Company Logo and Details */}
                      <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justify='space-between'
                        align={{ base: 'flex-start', md: 'flex-start' }}
                        gap={4}
                      >
                        <HStack spacing={4} align='flex-start'>
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            boxSize='60px'
                            borderRadius='none'
                            objectFit='cover'
                            border='2px solid'
                            borderColor={borderColor}
                          />
                          <VStack spacing={1} align='flex-start'>
                            <Heading
                              as='h3'
                              size='lg'
                              color={accentColor}
                              fontFamily='heading'
                              fontWeight='bold'
                            >
                              {job.position}
                            </Heading>
                            <HStack spacing={2} align='center'>
                              <Text
                                fontWeight='semibold'
                                color={useColorModeValue('black', 'white')}
                                fontSize='md'
                              >
                                {job.company}
                              </Text>
                              {job.companyUrl && (
                                <Link
                                  href={job.companyUrl}
                                  isExternal
                                  color={textColor}
                                  _hover={{ color: accentColor }}
                                >
                                  <Text fontSize='xs'>🔗</Text>
                                </Link>
                              )}
                            </HStack>
                          </VStack>
                        </HStack>

                        <VStack
                          spacing={2}
                          align={{ base: 'flex-start', md: 'flex-end' }}
                        >
                          <Text
                            fontSize='sm'
                            color={textColor}
                            fontWeight='medium'
                          >
                            {formatDateRange(job.startDate, job.endDate)}
                          </Text>
                          <Text fontSize='xs' color={textColor}>
                            {calculateDuration(job.startDate, job.endDate)}
                          </Text>
                          <HStack spacing={1}>
                            <Text fontSize='sm' color={textColor}>
                              <AppIcon iconName='location' fontSize='sm' />
                            </Text>
                            <Text fontSize='sm' color={textColor}>
                              {job.location}
                            </Text>
                          </HStack>
                        </VStack>
                      </Flex>

                      {/* Job Description */}
                      <VStack spacing={3} align='stretch'>
                        {job.description.map((desc, index) => (
                          <Text
                            key={index}
                            fontSize='sm'
                            color={textColor}
                            lineHeight='tall'
                            pl={4}
                            position='relative'
                            _before={{
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: useColorModeValue('#6366f1', '#a855f7'),
                              fontWeight: 'bold',
                            }}
                          >
                            {desc}
                          </Text>
                        ))}
                      </VStack>

                      {/* Technologies */}
                      <Box>
                        <Text
                          fontSize='sm'
                          fontWeight='semibold'
                          color={accentColor}
                          mb={2}
                        >
                          Technologies:
                        </Text>
                        <Flex wrap='wrap' gap={2}>
                          {job.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant='outline'
                              colorScheme='gray'
                              fontSize='xs'
                            >
                              {tech}
                            </Badge>
                          ))}
                        </Flex>
                      </Box>
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </VStack>

            {/* Education Section */}
            <VStack spacing={6} align='stretch'>
              <Heading as='h2' size='xl' variant='sectionTitle'>
                <Text mr={3} fontSize='xl'>
                  <AppIcon iconName='education' fontSize='xl' />
                </Text>
                Education
              </Heading>

              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
                {educationData.map((education, index) => (
                  <Box
                    key={index}
                    bg={cardBg}
                    p='6'
                    borderColor={useColorModeValue('black', 'white')}
                    border='1px solid'
                    shadow={`8px 8px 0px 0px ${useColorModeValue(
                      '#6366f1',
                      '#a855f7'
                    )}`}
                    transition='all 0.1s ease-in-out'
                    _hover={{
                      shadow: 'none',
                      transform: 'translate(8px, 8px)',
                    }}
                    height='full'
                  >
                    <VStack spacing={4} align='stretch'>
                      <VStack spacing={2} align='stretch'>
                        <Heading
                          as='h3'
                          size='md'
                          color={accentColor}
                          fontFamily='heading'
                          fontWeight='bold'
                        >
                          {education.degree}
                        </Heading>
                        <Text
                          fontWeight='medium'
                          color={useColorModeValue('black', 'white')}
                        >
                          {education.institution}
                        </Text>
                      </VStack>

                      <HStack spacing={4} wrap='wrap'>
                        <HStack spacing={1}>
                          <Text fontSize='sm' color={textColor}>
                            <AppIcon iconName='calendar' fontSize='sm' />
                          </Text>
                          <Text fontSize='sm' color={textColor}>
                            {education.year}
                          </Text>
                        </HStack>
                        <HStack spacing={1}>
                          <Text fontSize='sm' color={textColor}>
                            <AppIcon iconName='location' fontSize='sm' />
                          </Text>
                          <Text fontSize='sm' color={textColor}>
                            {education.location}
                          </Text>
                        </HStack>
                      </HStack>

                      {education.grade && (
                        <Badge colorScheme='green' alignSelf='flex-start'>
                          {education.grade}
                        </Badge>
                      )}

                      {education.description && (
                        <Text fontSize='sm' color={textColor} lineHeight='tall'>
                          {education.description}
                        </Text>
                      )}
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>

            {/* Languages Section */}
            <VStack spacing={6} align='stretch'>
              <Heading as='h2' size='xl' variant='sectionTitle'>
                <Text mr={3} fontSize='xl'>
                  <AppIcon iconName='trophy' fontSize='xl' />
                </Text>
                Languages
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box
                  bg={cardBg}
                  p='6'
                  borderColor={useColorModeValue('black', 'white')}
                  border='1px solid'
                  shadow={`8px 8px 0px 0px ${useColorModeValue(
                    '#6366f1',
                    '#a855f7'
                  )}`}
                  transition='all 0.1s ease-in-out'
                  _hover={{
                    shadow: 'none',
                    transform: 'translate(8px, 8px)',
                  }}
                >
                  <HStack justify='space-between' align='center'>
                    <Text
                      fontWeight='semibold'
                      color={useColorModeValue('black', 'white')}
                    >
                      English
                    </Text>
                    <Badge colorScheme='gray' variant='solid'>
                      Proficient
                    </Badge>
                  </HStack>
                </Box>

                <Box
                  bg={cardBg}
                  p='6'
                  borderColor={useColorModeValue('black', 'white')}
                  border='1px solid'
                  shadow={`8px 8px 0px 0px ${useColorModeValue(
                    '#6366f1',
                    '#a855f7'
                  )}`}
                  transition='all 0.1s ease-in-out'
                  _hover={{
                    shadow: 'none',
                    transform: 'translate(8px, 8px)',
                  }}
                >
                  <HStack justify='space-between' align='center'>
                    <Text
                      fontWeight='semibold'
                      color={useColorModeValue('black', 'white')}
                    >
                      Sinhala
                    </Text>
                    <Badge colorScheme='green' variant='solid'>
                      Native
                    </Badge>
                  </HStack>
                </Box>
              </SimpleGrid>
            </VStack>
          </VStack>
        </Container>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
