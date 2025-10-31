import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState, useMemo } from 'react'
// import { NextSeo } from 'next-seo'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  HStack,
  VStack,
  Flex,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { fetchGitHubRepos, ProcessedRepo } from '@data/github'
import { BreadcrumbSchema, PersonSchema } from '@components/seo'
import { MainLayout } from '@components/layouts/MainLayout'
import { ProjectCard } from '@components/structure/ProjectCard/ProjectCard'
import { SectionDivider } from '@components/structure'
import { config } from '@config/config'
import Head from 'next/head'

const MotionFlex = motion(Flex)

interface ProjectsPageProps {
  repos: ProcessedRepo[]
  error?: string
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ repos, error }) => {
  // Translation not needed for this page
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [showArchived, setShowArchived] = useState('hide')

  // Color mode values
  const inputBg = useColorModeValue('white', 'gray.700')
  const inputBorderColor = useColorModeValue('gray.300', 'gray.600')
  const inputHoverBorderColor = useColorModeValue('gray.400', 'gray.500')
  const inputFocusBorderColor = useColorModeValue('blue.500', 'blue.300')
  const inputFocusBoxShadow = useColorModeValue(
    '0 0 0 1px #3182ce',
    '0 0 0 1px #90cdf4'
  )
  const iconColor = useColorModeValue('gray.300', 'gray.500')
  const resultTextColor = useColorModeValue('gray.600', 'gray.400')
  const noResultsTextColor = useColorModeValue('gray.500', 'gray.400')

  // Get all unique languages
  const languages = useMemo(() => {
    const langs = Array.from(new Set(repos.map((repo) => repo.language)))
    return langs.sort()
  }, [repos])

  // Filter repositories
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.topics.some((topic) =>
          topic.toLowerCase().includes(searchTerm.toLowerCase())
        )

      const matchesLanguage =
        selectedLanguage === 'all' || repo.language === selectedLanguage

      const matchesArchived = showArchived === 'show' || !repo.isArchived

      return matchesSearch && matchesLanguage && matchesArchived
    })
  }, [repos, searchTerm, selectedLanguage, showArchived])

  const stats = useMemo(() => {
    const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0)
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks, 0)
    const languageCount = languages.length

    return { totalStars, totalForks, languageCount, totalRepos: repos.length }
  }, [repos, languages])

  if (error) {
    return (
      <MainLayout>
        <Head>
          <title>Projects | Ashan Withana</title>
          <meta name="description" content="Error loading projects from GitHub" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://ashanwithana.com/projects" />
        </Head>
        <Container maxW='6xl' py='20'>
          <Center>
            <VStack spacing='4'>
              <Heading color='red.500'>Error Loading Projects</Heading>
              <Text>{error}</Text>
            </VStack>
          </Center>
        </Container>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ashanwithana.dev' },
          { name: 'Projects', url: 'https://ashanwithana.dev/projects' },
        ]}
      />
      <Head>
        <title>All Projects | Ashan Withana</title>
        <meta name="description" content={`Browse all ${stats.totalRepos} of my GitHub projects featuring ${stats.languageCount} programming languages with ${stats.totalStars} total stars.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ashanwithana.com/projects" />
      </Head>
      {/* Header */}
      <VStack spacing={4} align='stretch'>
        <Box
          px={{ base: '4', md: '8' }}
          pt='16'
          pb='3'
          bg='linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)'
          borderRadius='none'
        >
          <Heading as='h1' color='white' size='2xl' textAlign='center'>
            All Projects
          </Heading>
        </Box>
      </VStack>

      {/* Description Section */}
      <Container maxW='7xl' py={4}>
        <VStack spacing={6} textAlign='center'>
          <Text
            fontSize='xl'
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW='3xl'
            lineHeight='tall'
          >
            Explore my complete collection of open-source projects and contributions.
            From backend systems to full-stack applications, discover the technologies
            and solutions I've built.
          </Text>

          {/* Stats */}
          <HStack spacing='8' pt='4'>
            <VStack spacing='1'>
              <Text fontSize='2xl' fontWeight='bold'>
                {stats.totalRepos}
              </Text>
              <Text fontSize='sm' opacity='0.8'>
                Repositories
              </Text>
            </VStack>
            <VStack spacing='1'>
              <Text fontSize='2xl' fontWeight='bold'>
                {stats.totalStars}
              </Text>
              <Text fontSize='sm' opacity='0.8'>
                Stars
              </Text>
            </VStack>
            <VStack spacing='1'>
              <Text fontSize='2xl' fontWeight='bold'>
                {stats.languageCount}
              </Text>
              <Text fontSize='sm' opacity='0.8'>
                Languages
              </Text>
            </VStack>
            <VStack spacing='1'>
              <Text fontSize='2xl' fontWeight='bold'>
                {stats.totalForks}
              </Text>
              <Text fontSize='sm' opacity='0.8'>
                Forks
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>

      <SectionDivider />
      {/* Filters and Projects */}
      <Container maxW='7xl' py='12'>
        {/* Filters */}
        <VStack spacing='6' mb='8'>
          <VStack
            spacing='4'
            w='full'
            maxW='2xl'
            display={{ base: 'flex', md: 'none' }}
          >
            {/* Mobile: Stacked Layout */}
            <InputGroup w='full'>
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color={iconColor} />
              </InputLeftElement>
              <Input
                placeholder='Search repositories...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg={inputBg}
                borderColor={inputBorderColor}
                _hover={{ borderColor: inputHoverBorderColor }}
                _focus={{
                  borderColor: inputFocusBorderColor,
                  boxShadow: inputFocusBoxShadow,
                }}
              />
            </InputGroup>

            <HStack spacing='3' w='full'>
              <Select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                bg={inputBg}
                borderColor={inputBorderColor}
                _hover={{ borderColor: inputHoverBorderColor }}
                _focus={{
                  borderColor: inputFocusBorderColor,
                  boxShadow: inputFocusBoxShadow,
                }}
                flex='1'
              >
                <option value='all'>All Languages</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>

              <Select
                value={showArchived}
                onChange={(e) => setShowArchived(e.target.value)}
                bg={inputBg}
                borderColor={inputBorderColor}
                _hover={{ borderColor: inputHoverBorderColor }}
                _focus={{ borderColor: inputFocusBoxShadow }}
                flex='1'
              >
                <option value='hide'>Hide Archived</option>
                <option value='show'>Show All</option>
              </Select>
            </HStack>
          </VStack>

          {/* Desktop: Horizontal Layout */}
          <HStack
            spacing='4'
            w='full'
            maxW='2xl'
            flexWrap='wrap'
            display={{ base: 'none', md: 'flex' }}
          >
            <InputGroup flex='1' minW='250px'>
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color={iconColor} />
              </InputLeftElement>
              <Input
                placeholder='Search repositories...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                bg={inputBg}
                borderColor={inputBorderColor}
                _hover={{ borderColor: inputHoverBorderColor }}
                _focus={{
                  borderColor: inputFocusBorderColor,
                  boxShadow: inputFocusBoxShadow,
                }}
              />
            </InputGroup>

            <Select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              bg={inputBg}
              minW='150px'
              borderColor={inputBorderColor}
              _hover={{ borderColor: inputHoverBorderColor }}
              _focus={{
                borderColor: inputFocusBorderColor,
                boxShadow: inputFocusBoxShadow,
              }}
            >
              <option value='all'>All Languages</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </Select>

            <Select
              value={showArchived}
              onChange={(e) => setShowArchived(e.target.value)}
              bg={inputBg}
              minW='140px'
              borderColor={inputBorderColor}
              _hover={{ borderColor: inputHoverBorderColor }}
              _focus={{
                borderColor: inputFocusBorderColor,
                boxShadow: inputFocusBoxShadow,
              }}
            >
              <option value='hide'>Hide Archived</option>
              <option value='show'>Show All</option>
            </Select>
          </HStack>

          {/* Results count */}
          <Text color={resultTextColor}>
            Showing {filteredRepos.length} of {repos.length} repositories
          </Text>
        </VStack>

        {/* Projects Grid */}
        {filteredRepos.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: '4', md: '6' }}
          >
            {filteredRepos.map((repo) => (
              <ProjectCard key={repo.id} {...repo} />
            ))}
          </SimpleGrid>
        ) : (
          <Center py='20'>
            <VStack spacing='4'>
              <Text fontSize='lg' color={noResultsTextColor}>
                No repositories found matching your criteria
              </Text>
              <Text color={resultTextColor}>
                Try adjusting your search or filters
              </Text>
            </VStack>
          </Center>
        )}
      </Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async ({
  locale = config.defaultLocale,
}) => {
  try {
    // Extract GitHub username from the GitHub URL in config
    const githubUsername = config.github.split('/').pop() || 'ashanwithana'
    const repos = await fetchGitHubRepos(githubUsername)

    return {
      props: {
        repos,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)

    return {
      props: {
        repos: [],
        error: 'Failed to load repositories from GitHub',
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  }
}

export default ProjectsPage
