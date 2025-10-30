import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { NextSeo } from 'next-seo'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { type BlogPost as BlogPostType } from '@data/blog'
import { MainLayout } from '@components/layouts/MainLayout'
import { config } from '@config/config'

const MotionFlex = motion(Flex)

interface BlogProps {
  posts: BlogPostType[]
  tags: string[]
}

const Blog: NextPage<BlogProps> = () => {
  return (
    <MainLayout>
      {/* <NextSeo
        title={`Blog | ${config.seo.title}`}
        description='Thoughts, insights, and experiences from my journey in software development'
        canonical={`${config.seo.canonical}/blog`}
      /> */}
      <MotionFlex
        minH='100vh'
        flexDir='column'
        justify='center'
        align='center'
        py={['8', '16']}
        px={{ base: '4', md: '8' }}
        rowGap='8'
        animate={{
          background: [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          ],
        }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 8 }}
      >
        <VStack spacing='6' textAlign='center' maxW='2xl'>
          <Heading as='h1' variant='banner' size='hero' color='white'>
            Blog Coming Soon
          </Heading>
          <Text fontSize='xl' color='whiteAlpha.900' fontWeight='medium'>
            I'm currently crafting amazing content about software development,
            technology insights, and programming best practices.
          </Text>
          <Text fontSize='lg' color='whiteAlpha.800'>
            Stay tuned for articles on Laravel, Python, .NET Core, and modern
            web development! 🚀
          </Text>
          <Box mt='8'>
            <Text fontSize='sm' color='whiteAlpha.700'>
              Meanwhile, feel free to check out my projects and get in touch!
            </Text>
          </Box>
        </VStack>
      </MotionFlex>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({
  locale = config.defaultLocale,
}) => {
  return {
    props: {
      posts: [],
      tags: [],
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Blog
