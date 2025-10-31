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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
            }}
            transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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

      {/* Creative Mobile Navigation - Floating Dock Style */}
      <Flex
        justify='center'
        align='center'
        display={{ base: 'flex', md: 'none' }}
        px='4'
        py='2'
      >
        <Flex
          align='center'
          justify='space-between'
          w='full'
          maxW='380px'
          position='relative'
          px='4'
          py='3'
          background={useColorModeValue(
            'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
            'linear-gradient(145deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.9) 100%)'
          )}
          backdropFilter='blur(20px)'
          borderRadius='25px'
          boxShadow={useColorModeValue(
            '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 1px 3px rgba(0, 0, 0, 0.1)',
            '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3)'
          )}
          border='1px solid'
          borderColor={useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 255, 255, 0.1)'
          )}
          _before={{
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #f59e0b)',
            borderRadius: '27px',
            opacity: 0.6,
            filter: 'blur(8px)',
            zIndex: -2,
          }}
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: useColorModeValue(
              'rgba(255, 255, 255, 0.3)',
              'rgba(26, 32, 44, 0.8)'
            ),
            borderRadius: '25px',
            zIndex: -1,
          }}
        >
          {/* Logo Section - Morphing Circle */}
          <Box position='relative'>
            <Flex
              as={NextLink}
              href='/'
              align='center'
              justify='center'
              w='14'
              h='14'
              borderRadius='full'
              background='linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)'
              color='white'
              fontWeight='900'
              fontSize='lg'
              position='relative'
              cursor='pointer'
              transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              _hover={{
                transform: 'scale(1.1) rotate(180deg)',
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
              }}
              _active={{
                transform: 'scale(0.95)',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                borderRadius: 'full',
                opacity: 0.3,
                filter: 'blur(6px)',
                zIndex: -1,
                animation: 'pulse 2s infinite',
              }}
            >
              {NAME.charAt(0)}
            </Flex>
          </Box>

          {/* Interactive Control Orbs */}
          <HStack spacing='3'>
            {/* Theme Toggle Orb */}
            <Box
              position='relative'
              cursor='pointer'
              onClick={() => {
                toggleColorMode()
                posthog.capture('color_mode_toggled', {
                  mode: colorMode === 'light' ? 'dark' : 'light',
                  location: 'mobile-dock',
                })
              }}
              transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              _hover={{
                transform: 'translateY(-2px) scale(1.1)',
              }}
              _active={{
                transform: 'scale(0.9)',
              }}
            >
              <Flex
                align='center'
                justify='center'
                w='12'
                h='12'
                borderRadius='full'
                background={useColorModeValue(
                  'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                )}
                color='white'
                boxShadow={useColorModeValue(
                  '0 4px 12px rgba(251, 191, 36, 0.4)',
                  '0 4px 12px rgba(99, 102, 241, 0.4)'
                )}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: useColorModeValue(
                    'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  ),
                  borderRadius: 'full',
                  opacity: 0.3,
                  filter: 'blur(4px)',
                  zIndex: -1,
                }}
              >
                <AppIcon
                  iconName={colorMode === 'light' ? 'darkMode' : 'lightMode'}
                  strokeWidth={2.5}
                  boxSize={5}
                />
              </Flex>
            </Box>

            {/* Menu Toggle Orb with Morphing Animation */}
            <Box
              position='relative'
              cursor='pointer'
              onClick={onToggle}
              transition='all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              _hover={{
                transform: 'translateY(-2px) scale(1.1)',
              }}
              _active={{
                transform: 'scale(0.9)',
              }}
            >
              <Flex
                align='center'
                justify='center'
                w='12'
                h='12'
                borderRadius='full'
                background={isOpen
                  ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                  : 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                }
                color='white'
                boxShadow={isOpen
                  ? '0 4px 12px rgba(239, 68, 68, 0.4)'
                  : '0 4px 12px rgba(16, 185, 129, 0.4)'
                }
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: isOpen
                    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                    : 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: 'full',
                  opacity: 0.3,
                  filter: 'blur(4px)',
                  zIndex: -1,
                }}
              >
                <AppIcon
                  iconName={isOpen ? 'close' : 'menu'}
                  strokeWidth={2.5}
                  boxSize={5}
                />
              </Flex>
            </Box>
          </HStack>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  )
}
