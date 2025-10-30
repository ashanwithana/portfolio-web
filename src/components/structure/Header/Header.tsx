import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Link,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { AppIcon } from '@components/icons'
import { usePostHog } from 'posthog-js/react'
import { NAME, config } from '@config/config'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const posthog = usePostHog()
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()

  const pillBg = useColorModeValue(
    'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%), rgba(255, 255, 255, 0.9)',
    'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%), rgba(26, 32, 44, 0.9)'
  )
  const activeBg = useColorModeValue(
    'rgba(99, 102, 241, 0.15)',
    'rgba(168, 85, 247, 0.2)'
  )
  const borderColor = useColorModeValue(
    'rgba(99, 102, 241, 0.2)',
    'rgba(168, 85, 247, 0.3)'
  )
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const activeTextColor = useColorModeValue('black', 'white')
  const hoverTextColor = useColorModeValue('gray.900', 'white')

  const isActiveRoute = (href: string) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <Box as='header' pos='fixed' zIndex='banner' top='4' left='0' right='0'>
      {/* Desktop Pill Navigation */}
      <Flex justify='center' px='4' display={{ base: 'none', md: 'flex' }}>
        <HStack
          background={pillBg}
          backdropFilter='blur(20px)'
          borderRadius='full'
          px='6'
          py='3'
          spacing='1'
          boxShadow='0 8px 32px rgba(99, 102, 241, 0.15), 0 4px 16px rgba(168, 85, 247, 0.1)'
          border='1px solid'
          borderColor={borderColor}
        >
          {/* Navigation Links - Left side */}
          <NextLink href='/about' passHref legacyBehavior>
            <Button
              as='a'
              variant='ghost'
              size='sm'
              fontWeight='medium'
              color={isActiveRoute('/about') ? activeTextColor : textColor}
              bg={isActiveRoute('/about') ? activeBg : 'transparent'}
              borderRadius='full'
              px='4'
              py='2'
              fontSize='sm'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s ease-in-out'
            >
              About
            </Button>
          </NextLink>

          <NextLink href='/projects' passHref legacyBehavior>
            <Button
              as='a'
              variant='ghost'
              size='sm'
              fontWeight='medium'
              color={isActiveRoute('/projects') ? activeTextColor : textColor}
              bg={isActiveRoute('/projects') ? activeBg : 'transparent'}
              borderRadius='full'
              px='4'
              py='2'
              fontSize='sm'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s ease-in-out'
            >
              Projects
            </Button>
          </NextLink>

          <NextLink href='/services' passHref legacyBehavior>
            <Button
              as='a'
              variant='ghost'
              size='sm'
              fontWeight='medium'
              color={isActiveRoute('/services') ? activeTextColor : textColor}
              bg={isActiveRoute('/services') ? activeBg : 'transparent'}
              borderRadius='full'
              px='4'
              py='2'
              fontSize='sm'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s ease-in-out'
            >
              Services
            </Button>
          </NextLink>

          {/* Home Icon - Center */}
          <NextLink href='/' passHref legacyBehavior>
            <IconButton
              as='a'
              aria-label='Home'
              icon={<AppIcon iconName='home' strokeWidth={1} />}
              variant='ghost'
              size='sm'
              color={isActiveRoute('/') ? activeTextColor : textColor}
              bg={isActiveRoute('/') ? activeBg : 'transparent'}
              borderRadius='full'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px) scale(1.05)',
              }}
              transition='all 0.2s ease-in-out'
            />
          </NextLink>

          {/* Navigation Links - Right side */}
          <NextLink href='/contributions' passHref legacyBehavior>
            <Button
              as='a'
              variant='ghost'
              size='sm'
              fontWeight='medium'
              color={
                isActiveRoute('/contributions') ? activeTextColor : textColor
              }
              bg={isActiveRoute('/contributions') ? activeBg : 'transparent'}
              borderRadius='full'
              px='4'
              py='2'
              fontSize='sm'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s ease-in-out'
            >
              Contributions
            </Button>
          </NextLink>

          <NextLink href='/blog' passHref legacyBehavior>
            <Button
              as='a'
              variant='ghost'
              size='sm'
              fontWeight='medium'
              color={isActiveRoute('/blog') ? activeTextColor : textColor}
              bg={isActiveRoute('/blog') ? activeBg : 'transparent'}
              borderRadius='full'
              px='4'
              py='2'
              fontSize='sm'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s ease-in-out'
            >
              Blog
            </Button>
          </NextLink>

          <NextLink href='/#contact' passHref legacyBehavior>
            <Button
              as='a'
              variant='ghost'
              size='sm'
              fontWeight='medium'
              color={textColor}
              borderRadius='full'
              px='4'
              py='2'
              fontSize='sm'
              _hover={{
                bg: activeBg,
                color: hoverTextColor,
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s ease-in-out'
            >
              Contact
            </Button>
          </NextLink>

          {/* Divider */}
          <Box
            w='1px'
            h='6'
            bg='linear-gradient(to bottom, #6366f1, #a855f7)'
            mx='2'
          />

          {/* Social Icons */}
          <IconButton
            as={Link}
            href={config.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
            icon={<AppIcon iconName='github' strokeWidth={2.5} />}
            variant='ghost'
            size='sm'
            borderRadius='full'
            color={textColor}
            _hover={{
              bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'translateY(-1px) scale(1.05)',
            }}
            transition='all 0.2s ease-in-out'
            onClick={() =>
              posthog.capture('github_clicked', { location: 'header' })
            }
          />

          <IconButton
            as={Link}
            href={config.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
            icon={<AppIcon iconName='linkedin' strokeWidth={2.5} />}
            variant='ghost'
            size='sm'
            borderRadius='full'
            color={textColor}
            _hover={{
              bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'translateY(-1px) scale(1.05)',
            }}
            transition='all 0.2s ease-in-out'
            onClick={() =>
              posthog.capture('linkedin_clicked', { location: 'header' })
            }
          />

          {/* Color Mode Toggle */}
          <IconButton
            aria-label={
              colorMode === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
            icon={
              <AppIcon
                iconName={colorMode === 'light' ? 'darkMode' : 'lightMode'}
                strokeWidth={2.5}
              />
            }
            variant='ghost'
            size='sm'
            borderRadius='full'
            color={textColor}
            _hover={{
              bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'translateY(-1px) scale(1.05)',
            }}
            transition='all 0.2s ease-in-out'
            onClick={() => {
              toggleColorMode()
              posthog.capture('color_mode_toggled', {
                mode: colorMode === 'light' ? 'dark' : 'light',
                location: 'header',
              })
            }}
          />
        </HStack>
      </Flex>

      {/* Mobile Navigation */}
      <Flex
        justify='space-between'
        align='center'
        px='4'
        display={{ base: 'flex', md: 'none' }}
        background={pillBg}
        backdropFilter='blur(20px)'
        mx='4'
        borderRadius='full'
        py='3'
        boxShadow='0 8px 32px rgba(99, 102, 241, 0.15), 0 4px 16px rgba(168, 85, 247, 0.1)'
        border='1px solid'
        borderColor={borderColor}
      >
        <NextLink href='/' passHref legacyBehavior>
          <Text
            as='a'
            fontWeight='bold'
            fontSize='lg'
            bgGradient='linear(135deg, #6366f1 0%, #a855f7 100%)'
            bgClip='text'
            color='transparent'
          >
            {NAME.split(' ')[0]}
          </Text>
        </NextLink>

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
                strokeWidth={2.5}
              />
            }
            variant='ghost'
            size='sm'
            borderRadius='full'
            color={textColor}
            _hover={{
              bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'scale(1.05)',
            }}
            transition='all 0.2s ease-in-out'
            onClick={() => {
              toggleColorMode()
              posthog.capture('color_mode_toggled', {
                mode: colorMode === 'light' ? 'dark' : 'light',
                location: 'mobile-header',
              })
            }}
          />

          <IconButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            icon={
              <AppIcon iconName={isOpen ? 'close' : 'menu'} strokeWidth={2.5} />
            }
            variant='ghost'
            size='sm'
            borderRadius='full'
            color={textColor}
            _hover={{
              bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'scale(1.05)',
            }}
            transition='all 0.2s ease-in-out'
            onClick={onToggle}
          />
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  )
}
