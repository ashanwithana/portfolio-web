import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { NextSeo } from 'next-seo'

import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Divider,
} from '@chakra-ui/react'
import {
  type BlogPost as BlogPostType,
  blogPosts,
  getPostBySlug,
} from '@data/blog'
import { MainLayout } from '@components/layouts/MainLayout'
import { config } from '@config/config'
import ReactMarkdown from 'react-markdown'

interface BlogPostPageProps {
  post: BlogPostType
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  // Translation not needed for this page

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <MainLayout>
      {/* <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          images: post.coverImage
            ? [{ url: post.coverImage, alt: post.title }]
            : [],
        }}
      /> */}
      <Container maxW='4xl' py='8'>
        <VStack spacing='8' align='stretch'>
          {/* Header */}
          <VStack spacing='4' align='stretch'>
            <Heading as='h1' size='2xl' fontWeight='bold'>
              {post.title}
            </Heading>
            <HStack justify='space-between' wrap='wrap'>
              <Text color='gray.600'>{formatDate(post.publishedAt)}</Text>
              <Text color='gray.600'>{post.readingTime} min read</Text>
            </HStack>
            <HStack wrap='wrap' spacing='2'>
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant='subtle' colorScheme='blue'>
                  {tag}
                </Badge>
              ))}
            </HStack>
          </VStack>

          {/* Cover Image */}
          {post.coverImage && (
            <AspectRatio ratio={16 / 9} maxW='full'>
              <Image
                src={post.coverImage}
                alt={post.title}
                objectFit='cover'
                borderRadius='none'
              />
            </AspectRatio>
          )}

          <Divider />

          {/* Content */}
          <Box
            fontSize='lg'
            lineHeight='tall'
            sx={{
              '& h1': {
                fontSize: '2xl',
                fontWeight: 'bold',
                mt: '8',
                mb: '4',
              },
              '& h2': {
                fontSize: 'xl',
                fontWeight: 'semibold',
                mt: '6',
                mb: '3',
              },
              '& h3': {
                fontSize: 'lg',
                fontWeight: 'semibold',
                mt: '4',
                mb: '2',
              },
              '& p': {
                mb: '4',
              },
              '& ul, & ol': {
                ml: '6',
                mb: '4',
              },
              '& li': {
                mb: '1',
              },
              '& code': {
                bg: 'gray.100',
                px: '1',
                py: '0.5',
                borderRadius: 'none',
                fontSize: 'sm',
              },
              '& pre': {
                bg: 'gray.50',
                p: '4',
                borderRadius: 'none',
                overflow: 'auto',
                mb: '4',
              },
              '& blockquote': {
                borderLeft: '4px solid',
                borderColor: 'blue.400',
                pl: '4',
                py: '2',
                bg: 'blue.50',
                mb: '4',
              },
            }}
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </Box>
        </VStack>
      </Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
  locale = config.defaultLocale,
}) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default BlogPostPage
