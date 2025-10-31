import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  Link,
  Flex,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { AppIcon } from '@components/icons'
import { usePostHog } from 'posthog-js/react'
import { motion } from 'framer-motion'
import { ProcessedRepo, getLanguageColor, formatDate } from '@data/github'

const MotionBox = motion(Box)

export const ProjectCard: React.FC<ProcessedRepo> = ({
  name,
  description,
  url,
  homepage,
  language,
  stars,
  forks,
  topics,
  lastUpdated,
  isArchived,
  isFork,
}) => {
  const posthog = usePostHog()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  const handleRepoClick = () => {
    posthog.capture('github_repo_clicked', {
      repo_name: name,
      repo_url: url,
      language,
      stars,
      forks,
    })
  }

  const handleHomepageClick = () => {
    posthog.capture('github_repo_homepage_clicked', {
      repo_name: name,
      homepage_url: homepage,
    })
  }

  return (
    <MotionBox
      bg={bgColor}
      borderWidth='1px'
      borderColor={borderColor}
      borderRadius='none'
      p={{ base: '5', md: '6' }}
      shadow={`8px 8px 0px 0px ${getLanguageColor(language)}`}
      position='relative'
      overflow='hidden'
      opacity={isArchived ? 0.7 : 1}
      height='full'
      display='flex'
      flexDirection='column'
      whileHover={{
        y: -6,
        scale: 1.01,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      _hover={{
        borderColor: 'blue.300',
        shadow: 'none',
        transform: 'translate(8px, 8px)',
      }}
    >
      {/* Archive/Fork badges */}
      <HStack
        position='absolute'
        top={{ base: '2', md: '3' }}
        right={{ base: '2', md: '3' }}
        spacing='1'
      >
        {isFork && (
          <Tooltip label='Forked repository'>
            <Badge colorScheme='yellow' size='sm'>
              Fork
            </Badge>
          </Tooltip>
        )}
        {isArchived && (
          <Tooltip label='Archived repository'>
            <Badge colorScheme='gray' size='sm'>
              Archived
            </Badge>
          </Tooltip>
        )}
      </HStack>

      <VStack align='stretch' spacing={{ base: '3', md: '4' }} height='full'>
        {/* Header */}
        <VStack align='stretch' spacing='2'>
          <Link
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleRepoClick}
            _hover={{ textDecoration: 'none' }}
          >
            <HStack>
              <AppIcon iconName='github' fontSize='lg' />
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight='bold'
                color='blue.600'
                _hover={{ color: 'blue.800' }}
                transition='color 0.2s'
                noOfLines={1}
                wordBreak='break-word'
              >
                {name}
              </Text>
            </HStack>
          </Link>

          <Text
            color={textColor}
            fontSize='sm'
            lineHeight='tall'
            noOfLines={3}
            wordBreak='break-word'
            flex='1'
          >
            {description}
          </Text>
        </VStack>

        {/* Topics */}
        {topics.length > 0 && (
          <HStack wrap='wrap' spacing='1'>
            {topics.slice(0, 4).map((topic) => (
              <Badge
                key={topic}
                variant='subtle'
                colorScheme='blue'
                fontSize='xs'
                borderRadius='full'
                px='2'
              >
                {topic}
              </Badge>
            ))}
            {topics.length > 4 && (
              <Badge
                variant='subtle'
                colorScheme='gray'
                fontSize='xs'
                borderRadius='full'
                px='2'
              >
                +{topics.length - 4}
              </Badge>
            )}
          </HStack>
        )}

        {/* Footer */}
        <Flex
          justify='space-between'
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '2', md: '0' }}
        >
          <HStack spacing={{ base: '3', md: '4' }} wrap='wrap'>
            {/* Language */}
            <HStack spacing='1'>
              <Box
                w='3'
                h='3'
                borderRadius='full'
                bg={getLanguageColor(language)}
              />
              <Text fontSize='xs' color={textColor}>
                {language}
              </Text>
            </HStack>

            {/* Stars */}
            {stars > 0 && (
              <HStack spacing='1'>
                <Text fontSize='xs' color='yellow.400'>
                  <AppIcon iconName='star' fontSize='sm' />
                </Text>
                <Text fontSize='xs' color={textColor}>
                  {stars}
                </Text>
              </HStack>
            )}

            {/* Forks */}
            {forks > 0 && (
              <HStack spacing='1'>
                <Text fontSize='xs' color={textColor}>
                  🌿
                </Text>
                <Text fontSize='xs' color={textColor}>
                  {forks}
                </Text>
              </HStack>
            )}
          </HStack>

          <HStack
            spacing='2'
            justify={{ base: 'space-between', md: 'flex-end' }}
            w={{ base: 'full', md: 'auto' }}
          >
            {/* Last updated */}
            <Text fontSize='xs' color={textColor}>
              {formatDate(lastUpdated)}
            </Text>

            {/* Homepage link */}
            {homepage && (
              <Tooltip label='Visit homepage'>
                <Link
                  href={homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={handleHomepageClick}
                >
                  <Text
                    fontSize='xs'
                    color='blue.500'
                    _hover={{ color: 'blue.700' }}
                    transition='color 0.2s'
                  >
                    🔗
                  </Text>
                </Link>
              </Tooltip>
            )}
          </HStack>
        </Flex>
      </VStack>
    </MotionBox>
  )
}
