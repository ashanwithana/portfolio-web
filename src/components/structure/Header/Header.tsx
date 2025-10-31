import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect - keep transparent throughout but add slight enhancement when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pillBg = useColorModeValue(
    isScrolled
      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%), rgba(255, 255, 255, 0.4)'
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(168, 85, 247, 0.02) 50%, rgba(236, 72, 153, 0.02) 100%), rgba(255, 255, 255, 0.15)',
    isScrolled
      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%), rgba(26, 32, 44, 0.4)'
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%), rgba(26, 32, 44, 0.15)'
  )
  const activeBg = useColorModeValue(
    'rgba(99, 102, 241, 0.15)',
    'rgba(168, 85, 247, 0.2)'
  )
  const borderColor = useColorModeValue(
    isScrolled ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.03)',
    isScrolled ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.05)'
  )
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const activeTextColor = useColorModeValue('black', 'white')
  const hoverTextColor = useColorModeValue('gray.900', 'white')

  const isActiveRoute = (href: string) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <Box as='header' pos='fixed' zIndex='banner' top={{ base: '0', md: '13px', xl: '20px', '2xl': '30px' }} left='0' right='0'>
      {/* Desktop Pill Navigation */}
      <Flex justify='center' px='4' display={{ base: 'none', md: 'flex' }}>
        <HStack
          background={pillBg}
          backdropFilter={isScrolled ? 'blur(24px)' : 'blur(20px)'}
          borderRadius='full'
          px={{ base: '6', xl: '8', '2xl': '10' }}
          py={{ base: '3', xl: '4', '2xl': '5' }}
          spacing={{ base: '1', xl: '2', '2xl': '3' }}
          boxShadow={
            isScrolled
              ? '0 12px 40px rgba(99, 102, 241, 0.25), 0 8px 24px rgba(168, 85, 247, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)'
              : '0 4px 16px rgba(99, 102, 241, 0.08), 0 2px 8px rgba(168, 85, 247, 0.05)'
          }
          border='1px solid'
          borderColor={borderColor}
          transform={isScrolled ? 'translateY(2px)' : 'translateY(0px)'}
          transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          >
            Projects
          </Button>

          <Button
            as={NextLink}
            href='/expertise'
            variant='ghost'
            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            fontWeight='medium'
            color={isActiveRoute('/expertise') ? activeTextColor : textColor}
            bg={isActiveRoute('/expertise') ? activeBg : 'transparent'}
            borderRadius='full'
            px={{ base: '4', xl: '6', '2xl': '8' }}
            py={{ base: '2', xl: '3', '2xl': '4' }}
            fontSize={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
            _hover={{
              bg: activeBg,
              color: hoverTextColor,
              transform: 'translateY(-1px)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          >
            Expertise
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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

      {/* Minimal Mobile Navigation */}
      <Flex
        justify='space-between'
        align='center'
        display={{ base: 'flex', md: 'none' }}
        px='6'
        py='4'
        bg={useColorModeValue(
          isScrolled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)',
          isScrolled ? 'rgba(26, 32, 44, 0.4)' : 'rgba(26, 32, 44, 0.15)'
        )}
        backdropFilter={isScrolled ? 'blur(20px)' : 'blur(16px)'}
        borderBottom={isScrolled ? '1px solid' : 'none'}
        borderColor={useColorModeValue(
          'rgba(0, 0, 0, 0.08)',
          'rgba(255, 255, 255, 0.08)'
        )}
        boxShadow={
          isScrolled
            ? '0 4px 20px rgba(0, 0, 0, 0.08)'
            : '0 2px 8px rgba(0, 0, 0, 0.02)'
        }
        transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      >
        {/* Simple Logo */}
        <Text
          as={NextLink}
          href='/'
          fontWeight='700'
          fontSize='xl'
          color={textColor}
          _hover={{ color: 'blue.500' }}
          transition='color 0.2s'
        >
          {NAME.split(' ')[0]}
        </Text>

        {/* Clean Control Buttons */}
        <HStack spacing='3'>
          <IconButton
            aria-label='Toggle color mode'
            icon={
              <AppIcon
                iconName={colorMode === 'light' ? 'darkMode' : 'lightMode'}
                strokeWidth={2}
              />
            }
            variant='ghost'
            size='sm'
            color={textColor}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
            onClick={() => {
              toggleColorMode()
              posthog.capture('color_mode_toggled', {
                mode: colorMode === 'light' ? 'dark' : 'light',
                location: 'mobile-header',
              })
            }}
          />

          <IconButton
            aria-label='Toggle menu'
            icon={
              <AppIcon
                iconName={isOpen ? 'close' : 'menu'}
                strokeWidth={2}
              />
            }
            variant='ghost'
            size='sm'
            color={textColor}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
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
