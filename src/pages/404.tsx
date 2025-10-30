import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { MainLayout } from '@components/layouts/MainLayout'
import { config } from '@config/config'

const NotFound: NextPage = () => {
  return (
    <MainLayout title='Page Not Found'>
      <Box
        minH='calc(100vh - var(--chakra-sizes-header-height))'
        px='8'
        pt='36'
      >
        <VStack align='center' spacing='4'>
          <Heading as='h1' variant='banner' size='hero'>
            404
          </Heading>
          <Heading as='h2' fontSize='4xl'>
            Page Not Found
          </Heading>
        </VStack>
      </Box>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'error'])),
  },
})

export default NotFound
