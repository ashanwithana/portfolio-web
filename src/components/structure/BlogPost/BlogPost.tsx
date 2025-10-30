import {
  AspectRatio,
  Image,
  HStack,
  Skeleton,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Flex,
  Badge,
} from '@chakra-ui/react'
import { usePostHog } from 'posthog-js/react'
import NextLink from 'next/link'
import type { BlogPost as BlogPostType } from '@data/blog'

export const BlogPost: React.FC<BlogPostType> = ({
  title,
  excerpt,
  coverImage,
  tags,
  publishedAt,
  readingTime,
  slug,
}) => {
  const posthog = usePostHog()
  const postTags = tags.length ? tags : ['General']

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <LinkBox
      as='article'
      bgColor='gray.50'
      borderColor='black'
      border='1px solid'
      role='group'
      transition='transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Flex h='full' flexDir='column' align='stretch'>
        {coverImage && (
          <Box position='relative' borderColor='black' borderBottom='1px solid'>
            <AspectRatio w='full' ratio={16 / 9}>
              <Image
                src={coverImage}
                alt={title}
                fallback={<Skeleton />}
                rounded='sm'
              />
            </AspectRatio>
            <Flex
              display='none'
              position='absolute'
              align='center'
              justify='center'
              left='0'
              right='0'
              top='0'
              bottom='0'
              bg='blackAlpha.600'
              _groupHover={{ display: 'flex' }}
            >
              <Text fontWeight='bold' color='white' letterSpacing='wide'>
                Read Article
              </Text>
            </Flex>
          </Box>
        )}
        <Box px='4' py='4' flex='1' display='flex' flexDir='column'>
          <Text fontWeight='bold' fontSize='lg' mb='2'>
            <NextLink href={`/blog/${slug}`} passHref legacyBehavior>
              <LinkOverlay
                onClick={() =>
                  posthog.capture('blog_post_clicked', { title, slug })
                }
              >
                {title}
              </LinkOverlay>
            </NextLink>
          </Text>
          <Text color='gray.600' fontSize='sm' mb='3' flex='1'>
            {excerpt}
          </Text>
          <Flex justify='space-between' align='center' mb='3'>
            <Text fontSize='xs' color='gray.500'>
              {formatDate(publishedAt)}
            </Text>
            <Text fontSize='xs' color='gray.500'>
              {readingTime} min read
            </Text>
          </Flex>
          <HStack wrap='wrap' spacing='2'>
            {postTags.map((tag: string) => (
              <Badge
                key={tag}
                variant='subtle'
                colorScheme='blue'
                fontSize='xs'
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Flex>
    </LinkBox>
  )
}
