import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, VStack, Heading } from '@chakra-ui/react'
import { Services } from '@components/structure'
import { MainLayout } from '@components/layouts/MainLayout'
import { PersonSchema, ServiceSchema, BreadcrumbSchema } from '@components/seo'
import { services } from '@data/services'
import { config, NAME } from '@config/config'

const ExpertisePage: NextPage = () => {

    return (
        <>
            <Head>
                <title>Expertise | {NAME}</title>
                <meta
                    name="description"
                    content="Professional software development expertise including backend development, full-stack solutions, cloud deployment, and technical consulting."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://ashanwithana.com/expertise" />

                {/* Open Graph meta tags */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="https://ashanwithana.com/expertise" />
                <meta property="og:title" content={`Expertise | ${NAME}`} />
                <meta
                    property="og:description"
                    content="Professional software development expertise including backend development, full-stack solutions, cloud deployment, and technical consulting."
                />
                <meta property="og:site_name" content="Ashan Withana" />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Expertise | ${NAME}`} />
                <meta
                    name="twitter:description"
                    content="Professional software development expertise including backend development, full-stack solutions, cloud deployment, and technical consulting."
                />
            </Head>
            <PersonSchema />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: 'https://ashanwithana.com' },
                    { name: 'Expertise', url: 'https://ashanwithana.com/expertise' },
                ]}
            />
            {services.map((service) => (
                <ServiceSchema key={service.id} service={service} />
            ))}
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
                            All Expertise
                        </Heading>
                    </Box>
                </VStack>
                <Services />
            </MainLayout>
        </>
    )
}

export default ExpertisePage