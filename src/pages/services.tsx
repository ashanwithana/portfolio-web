import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { Services } from '@components/structure'
import { MainLayout } from '@components/layouts/MainLayout'
import { PersonSchema, ServiceSchema, BreadcrumbSchema } from '@components/seo'
import { services } from '@data/services'
import { NAME } from '@config/config'

const ServicesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services - {NAME}</title>
        <meta
          name='description'
          content='Professional software development services including backend development, full-stack solutions, cloud deployment, and technical consulting.'
        />
        <meta
          name='keywords'
          content='backend development, full-stack development, cloud solutions, API development, database design, technical consulting'
        />
        <meta property='og:title' content={`Services - ${NAME}`} />
        <meta
          property='og:description'
          content='Professional software development services including backend development, full-stack solutions, cloud deployment, and technical consulting.'
        />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`Services - ${NAME}`} />
        <meta
          name='twitter:description'
          content='Professional software development services including backend development, full-stack solutions, cloud deployment, and technical consulting.'
        />
      </Head>

      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://ashanwithana.dev' },
          { name: 'Services', url: 'https://ashanwithana.dev/services' },
        ]}
      />
      {services.map((service) => (
        <ServiceSchema key={service.id} service={service} />
      ))}

      <MainLayout>
        <Services />
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default ServicesPage
