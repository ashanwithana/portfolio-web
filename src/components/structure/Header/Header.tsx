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
    <Box as='header' pos='fixed' zIndex='banner' top={{ base: '9px', md: '13px', xl: '20px', '2xl': '30px' }} left='0' right='0'>
      {/* Desktop Pill Navigation */}
      <Flex justify='center' px='4' display={{ base: 'none', md: 'flex' }}>
        <HStack
          background={pillBg}
          backdropFilter='blur(20px)'
          borderRadius='full'
          px={{ base: '6', xl: '8', '2xl': '10' }}
          py={{ base: '3', xl: '4', '2xl': '5' }}
          spacing={{ base: '1', xl: '2', '2xl': '3' }}
          boxShadow='0 8px 32px rgba(99, 102, 241, 0.15), 0 4px 16px rgba(168, 85, 247, 0.1)'
          border='1px solid'
          borderColor={borderColor}
        >
          {/* Navigation Links - Left side */}
          <Button
            as={NextLink}
            href='/about'
            variant='ghost'
            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            fontWeight='medium'
            color={isActiveRoute('/about') ? activeTextColor : textColor}
            bg={isActiveRoute('/about') ? activeBg : 'transparent'}
            borderRadius='full'
            px={{ base: '4', xl: '6', '2xl': '8' }}
            py={{ base: '2', xl: '3', '2xl': '4' }}
            fontSize={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            _hover={{
              bg: activeBg,
              color: hoverTextColor,
              transform: 'translateY(-1px)',
            }}
            transition='all 0.2s ease-in-out'
          >
            About
          </Button>

          <Button
            as={NextLink}
            href='/projects'
            variant='ghost'
            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            fontWeight='medium'
            color={isActiveRoute('/projects') ? activeTextColor : textColor}
            bg={isActiveRoute('/projects') ? activeBg : 'transparent'}
            borderRadius='full'
            px={{ base: '4', xl: '6', '2xl': '8' }}
            py={{ base: '2', xl: '3', '2xl': '4' }}
            fontSize={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            _hover={{
              bg: activeBg,
              color: hoverTextColor,
              transform: 'translateY(-1px)',
            }}
            transition='all 0.2s ease-in-out'
          >
            Projects
          </Button>

          <Button
            as={NextLink}
            href='/services'
            variant='ghost'
            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            fontWeight='medium'
            color={isActiveRoute('/services') ? activeTextColor : textColor}
            bg={isActiveRoute('/services') ? activeBg : 'transparent'}
            borderRadius='full'
            px={{ base: '4', xl: '6', '2xl': '8' }}
            py={{ base: '2', xl: '3', '2xl': '4' }}
            fontSize={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            _hover={{
              bg: activeBg,
              color: hoverTextColor,
              transform: 'translateY(-1px)',
            }}
            transition='all 0.2s ease-in-out'
          >
            Services
          </Button>

          {/* Home Icon - Center */}
          <IconButton
            as={NextLink}
            href='/'
            aria-label='Home'
            icon={<AppIcon iconName='home' strokeWidth={1} />}
            variant='ghost'
            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
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

          {/* Navigation Links - Right side */}
          <Button
            as={NextLink}
            href='/contributions'
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

          <Button
            as={NextLink}
            href='/blog'
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

          <Button
            as={NextLink}
            href='/#contact'
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

      {/* Modern Mobile Navigation */}
      <Flex
        justify='space-between'
        align='center'
        px='6'
        display={{ base: 'flex', md: 'none' }}
        mx='4'
        position='relative'
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)',
          backdropFilter: 'blur(25px)',
          borderRadius: '20px',
          border: '1px solid',
          borderColor: useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)'),
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          zIndex: -1,
        }}
        py='4'
        minH='16'
        overflow='hidden'
      >
        {/* Logo with modern styling */}
        <Box position='relative'>
          <Text
            as={NextLink}
            href='/'
            fontWeight='800'
            fontSize='xl'
            bgGradient='linear(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)'
            bgClip='text'
            color='transparent'
            position='relative'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
              borderRadius: '8px',
              opacity: 0.1,
              transform: 'scale(1.2)',
              filter: 'blur(8px)',
              zIndex: -1,
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            _hover={{
              transform: 'translateY(-1px)',
              _before: {
                opacity: 0.2,
                transform: 'scale(1.3)',
              }
            }}
          >
            {NAME.split(' ')[0]}
          </Text>
        </Box>

        {/* Right side controls with modern floating design */}
        <HStack spacing='3'>
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
                boxSize={5}
              />
            }
            variant='ghost'
            size='md'
            borderRadius='12px'
            color={textColor}
            background='rgba(255, 255, 255, 0.05)'
            backdropFilter='blur(10px)'
            border='1px solid'
            borderColor={useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)')}
            _hover={{
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'translateY(-2px) scale(1.05)',
              borderColor: 'transparent',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
            }}
            _active={{
              transform: 'translateY(0) scale(0.98)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              <AppIcon
                iconName={isOpen ? 'close' : 'menu'}
                strokeWidth={2.5}
                boxSize={5}
              />
            }
            variant='ghost'
            size='md'
            borderRadius='12px'
            color={isOpen ? 'white' : textColor}
            background={isOpen ? 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' : 'rgba(255, 255, 255, 0.05)'}
            backdropFilter='blur(10px)'
            border='1px solid'
            borderColor={isOpen ? 'transparent' : useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)')}
            boxShadow={isOpen ? '0 8px 25px rgba(99, 102, 241, 0.3)' : 'none'}
            _hover={{
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              color: 'white',
              transform: 'translateY(-2px) scale(1.05)',
              borderColor: 'transparent',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
            }}
            _active={{
              transform: 'translateY(0) scale(0.98)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
