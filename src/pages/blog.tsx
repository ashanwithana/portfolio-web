import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NextLink from 'next/link'
// import { NextSeo } from 'next-seo'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  HStack,
  Image,
  AspectRatio
} from '@chakra-ui/react'
import { type BlogPost as BlogPostType, blogPosts, getAllTags } from '@data/blog'
import { MainLayout } from '@components/layouts/MainLayout'
import { config } from '@config/config'

interface BlogProps {
  posts: BlogPostType[]
  tags: string[]
}

const Blog: NextPage<BlogProps> = ({ posts, tags }) => {
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
        title={`Blog | ${config.seo.title}`}
        description='Thoughts, insights, and experiences from my journey in software development'
        canonical={`${config.seo.canonical}/blog`}
      /> */}
      <Container maxW='6xl' py='8'>
        <VStack spacing='8' align='stretch'>
          {/* Header */}
          <VStack spacing='4' textAlign='center'>
            <Heading as='h1' variant='sectionTitle' size='2xl'>
              Blog
            </Heading>
            <Text fontSize='lg' color='gray.600' maxW='2xl'>
              Thoughts, insights, and experiences from my journey in software development
            </Text>
          </VStack>

          {/* Blog Posts Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='6'>
            {posts.map((post) => (
              <Card
                key={post.id}
                as={NextLink}
                href={`/blog/${post.slug}`}
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'lg'
                }}
                transition='all 0.2s'
                cursor='pointer'
              >
                {post.coverImage && (
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      objectFit='cover'
                      borderTopRadius='md'
                    />
                  </AspectRatio>
                )}
                <CardBody>
                  <VStack align='stretch' spacing='3'>
                    <Heading as='h3' size='md' noOfLines={2}>
                      {post.title}
                    </Heading>
                    <Text color='gray.600' noOfLines={3} fontSize='sm'>
                      {post.excerpt}
                    </Text>
                    <HStack justify='space-between' wrap='wrap'>
                      <Text fontSize='xs' color='gray.500'>
                        {formatDate(post.publishedAt)}
                      </Text>
                      <Text fontSize='xs' color='gray.500'>
                        {post.readingTime} min read
                      </Text>
                    </HStack>
                    <HStack wrap='wrap' spacing='1'>
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} size='sm' variant='subtle' colorScheme='blue'>
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          {posts.length === 0 && (
            <VStack spacing='4' py='12' textAlign='center'>
              <Heading as='h2' size='lg' color='gray.500'>
                No posts yet
              </Heading>
              <Text color='gray.600'>
                Check back soon for new content!
              </Text>
            </VStack>
          )}
        </VStack>
      </Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({
  locale = config.defaultLocale,
}) => {
  return {
    props: {
      posts: blogPosts,
      tags: getAllTags(),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Blog
