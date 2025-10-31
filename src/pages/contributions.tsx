import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Container, Heading, SimpleGrid, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { allContributions } from '@data/contributions'
import { Contribution } from '../components/structure/Contributions/Contribution'
import { PersonSchema, BreadcrumbSchema } from '@components/seo'
import { MainLayout } from '../components/layouts/MainLayout'
import Head from 'next/head'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ContributionsPage: React.FC = () => {
  // Translation not needed for this page

  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ashanwithana.dev' },
          {
            name: 'Contributions',
            url: 'https://ashanwithana.dev/contributions',
          },
        ]}
      />
      <Head>
        <title>All Contributions | Ashan Withana</title>
        <meta name="description" content="Explore all my professional projects and contributions across various technologies and domains." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ashanwithana.com/contributions" />
      </Head>
      <MainLayout>
        {/* Header */}
        <VStack spacing={4} align='stretch'>
          <Box
            px={{ base: '4', md: '8' }}
            pt='16'
            pb='3'
            bg='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            borderRadius='none'
          >
            <Heading
              as='h1'
              color='white'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }}
              textAlign='center'
              fontWeight='bold'
              lineHeight='shorter'
            >
              All Contributions
            </Heading>
          </Box>
        </VStack>

        <Container maxW='7xl' py={4}>
          <VStack spacing={6} align='stretch'>
            {/* Description Section */}
            <VStack spacing={6} textAlign='center' py={4}>
              <Text
                fontSize='xl'
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW='3xl'
                lineHeight='tall'
              >
                Explore all my professional projects and contributions across various
                technologies and domains. A showcase of collaborative work and
                open-source contributions.
              </Text>
            </VStack>

            {/* Projects Grid */}
            <MotionSimpleGrid
              columns={{ base: 1, md: 2, xl: 3 }}
              spacing={8}
              variants={container}
              initial='hidden'
              animate='visible'
            >
              {allContributions.map((contribution, index) => (
                <MotionBox
                  key={`${contribution.repository}-${index}`}
                  variants={item}
                >
                  <Contribution {...contribution} />
                </MotionBox>
              ))}
            </MotionSimpleGrid>
          </VStack>
        </Container>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default ContributionsPage
