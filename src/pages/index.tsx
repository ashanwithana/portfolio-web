import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainLayout } from '@components/layouts/MainLayout'
import {
  Contact,
  Banner,
  Contributions,
  Technologies,
  SectionDivider,
  SelectedProjects,
  ServicesHint,
  GitHubMarquee,
  LinkedInMarquee,
} from '@components/structure'
import { PersonSchema } from '@components/seo'
import { useLogMessage } from '@utils/hooks/use-log-message'
import { config } from '@config/config'

const Home: NextPage = () => {
  useLogMessage()

  return (
    <MainLayout>
      <PersonSchema includeOrganization />
      <Banner />
      <SectionDivider />
      <ServicesHint />
      <GitHubMarquee />
      <Contributions />
      <LinkedInMarquee />
      <Technologies />
      <GitHubMarquee />
      <SelectedProjects />
      <LinkedInMarquee />
      <Contact />
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

export default Home
