import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NextLink from 'next/link'
import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import { MainLayout } from '@components/layouts/MainLayout'
import { config } from '@config/config'

const Project: NextPage = () => {
  return (
    <MainLayout>
      <Center px='6' py='48'>
        <VStack spacing='12'>
          <Heading as='h1' variant='banner' size='hero'>
            Coming Soon
          </Heading>
          <NextLink href='/' passHref legacyBehavior>
            <Button as='a' variant='outline'>
              Back to Home
            </Button>
          </NextLink>
        </VStack>
      </Center>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export default Project
