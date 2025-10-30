import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Container, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { allContributions } from '@data/contributions'
import { Contribution } from '../components/structure/Contributions/Contribution'
import { PersonSchema, BreadcrumbSchema } from '@components/seo'
import { MainLayout } from '../components/layouts/MainLayout'
// import { NextSeo } from 'next-seo'

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
  const { t: _ } = useTranslation('common')

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
      {/* <NextSeo
        title='All Contributions | Ashan Withana'
        description='Explore all my professional projects and contributions across various technologies and domains.'
      /> */}
      <MainLayout>
        <Container maxW='7xl' py={8}>
          <VStack spacing={8} align='stretch'>
            {/* Header */}
            <VStack spacing={4} align='stretch'>
              <Box
                px={{ base: '4', md: '8' }}
                pt='16'
                pb='3'
                bg='linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)'
                borderRadius='xl'
              >
                <Heading as='h1' color='white' size='2xl' textAlign='center'>
                  All Contributions
                </Heading>
              </Box>
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
