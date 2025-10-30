import {
  Flex,
  HStack,
  Link,
  usePrefersReducedMotion,
  useColorModeValue,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { config } from '@config/config'

const loop = keyframes`
  0% {
    transform: translate3d(-25%, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

export const GitHubMarquee: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const borderColor = useColorModeValue('black', 'gray.600')

  const animation = prefersReducedMotion
    ? undefined
    : `${loop} infinite 20s linear`

  return (
    <Flex
      pos='relative'
      w='100vw'
      maxWidth='100%'
      borderColor={borderColor}
      borderTop='1px solid'
      overflowX='hidden'
    >
      <HStack
        aria-hidden='true'
        pos='relative'
        spacing='12'
        whiteSpace='nowrap'
        animation={animation}
        role='group'
        _hover={{
          animationPlayState: 'paused',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            key={i}
            href={`https://github.com/${config.github}`}
            variant='showcase'
            py='3'
            isExternal
          >
            Discover more projects on my GitHub.
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}

export const LinkedInMarquee: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const borderColor = useColorModeValue('black', 'gray.600')

  const animation = prefersReducedMotion
    ? undefined
    : `${loop} infinite 20s linear`

  return (
    <Flex
      pos='relative'
      w='100vw'
      maxWidth='100%'
      borderColor={borderColor}
      borderTop='1px solid'
      overflowX='hidden'
    >
      <HStack
        aria-hidden='true'
        pos='relative'
        spacing='12'
        whiteSpace='nowrap'
        animation={animation}
        role='group'
        _hover={{
          animationPlayState: 'paused',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            key={i}
            href={config.linkedin}
            variant='showcase'
            py='3'
            isExternal
          >
            Connect with me on LinkedIn.
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}
