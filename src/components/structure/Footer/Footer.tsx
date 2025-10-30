import {
  Flex,
  Link,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'
import { AppIcon } from '../../icons'

const links: { name: string; href: string }[] = [
  { name: 'Email', href: config.email_link },
  { name: 'Github', href: config.github },
  { name: 'LinkedIn', href: config.linkedin },
]

export const Footer: React.FC = () => {
  const posthog = usePostHog()
  const { colorMode, toggleColorMode } = useColorMode()

  const textColor = useColorModeValue('gray.600', 'gray.400')
  const linkColor = useColorModeValue('gray.800', 'gray.200')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex
      as='footer'
      align='center'
      justify={{ base: 'center', md: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      gap='8'
      py='8'
      px={{ base: '4', md: '8' }}
      borderTop='1px solid'
      borderColor={borderColor}
      maxW='7xl'
      mx='auto'
    >
      {/* Left side - Copyright & Location */}
      <HStack spacing='4' fontSize='sm' color={textColor} fontWeight='medium'>
        <Text>
          © {new Date().getFullYear()}{' '}
          {config.copyright.replace(/©\s*\d{4}\s*/, '')}
        </Text>
        <Text color={useColorModeValue('gray.400', 'gray.500')}>•</Text>
        <Text>Sri Lanka 🇱🇰</Text>
      </HStack>

      {/* Center - Links */}
      <HStack spacing='8' display={{ base: 'none', md: 'flex' }}>
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            fontSize='sm'
            fontWeight='medium'
            color={linkColor}
            _hover={{
              color: useColorModeValue('black', 'white'),
              textDecoration: 'none',
            }}
            transition='color 0.2s ease'
            onClick={() =>
              posthog.capture('footer_link_clicked', { name, link: href })
            }
            isExternal
          >
            {name}
          </Link>
        ))}
      </HStack>

      {/* Mobile Links */}
      <HStack spacing='6' display={{ base: 'flex', md: 'none' }}>
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            fontSize='sm'
            fontWeight='medium'
            color={linkColor}
            _hover={{
              color: useColorModeValue('black', 'white'),
              textDecoration: 'none',
            }}
            transition='color 0.2s ease'
            onClick={() =>
              posthog.capture('footer_link_clicked', { name, link: href })
            }
            isExternal
          >
            {name}
          </Link>
        ))}
      </HStack>

      {/* Right side - Actions */}
      <HStack spacing='2'>
        <IconButton
          aria-label={
            colorMode === 'light'
              ? 'Switch to dark mode'
              : 'Switch to light mode'
          }
          icon={
            <AppIcon
              iconName={colorMode === 'light' ? 'darkMode' : 'lightMode'}
              boxSize={4}
              strokeWidth={1.5}
            />
          }
          variant='ghost'
          size='sm'
          color={textColor}
          _hover={{
            color: useColorModeValue('black', 'white'),
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          onClick={() => {
            toggleColorMode()
            posthog.capture('color_mode_toggled', {
              mode: colorMode === 'light' ? 'dark' : 'light',
            })
          }}
        />
        <IconButton
          aria-label='Go to top'
          icon={<AppIcon iconName='arrowUp' boxSize={4} strokeWidth={1.5} />}
          variant='ghost'
          size='sm'
          color={textColor}
          _hover={{
            color: useColorModeValue('black', 'white'),
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          onClick={() => window.scrollTo(0, 0)}
        />
      </HStack>
    </Flex>
  )
}
