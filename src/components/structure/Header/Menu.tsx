import {
  Stack,
  HStack,
  IconButton,
  Link,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { AppIcon } from '@components/icons'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'
import { NavItem, type NavItemProps } from './NavItem'

const navItems: Omit<NavItemProps, 'onClose'>[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contributions', href: '/contributions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
]

const MotionStack = motion(Stack)

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const posthog = usePostHog()
  const bgColor = useColorModeValue(
    'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%), rgba(255, 255, 255, 0.95)',
    'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%), rgba(26, 32, 44, 0.95)'
  )
  const borderColor = useColorModeValue(
    'rgba(99, 102, 241, 0.15)',
    'rgba(168, 85, 247, 0.25)'
  )

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <MotionStack
          key='header-menu'
          as='nav'
          pos='absolute'
          top='16'
          left='4'
          right='4'
          py='6'
          px='6'
          direction='column'
          spacing='3'
          background={bgColor}
          backdropFilter='blur(20px)'
          borderRadius='2xl'
          boxShadow='0 8px 32px rgba(99, 102, 241, 0.15), 0 4px 16px rgba(168, 85, 247, 0.1)'
          border='1px solid'
          borderColor={borderColor}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {/* Navigation Items */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing='2'>
            {navItems.map((item) => (
              <NavItem key={item.name} onClose={onClose} {...item} />
            ))}
          </Stack>

          {/* Mobile Social Links */}
          <Stack display={{ base: 'block', md: 'none' }}>
            <Divider />
            <HStack justify='center' spacing='6' pt='2'>
              <IconButton
                as={Link}
                href={config.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub Profile'
                icon={<AppIcon iconName='github' />}
                variant='ghost'
                size='lg'
                borderRadius='full'
                color='gray.700'
                _hover={{
                  bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  color: 'white',
                  transform: 'scale(1.1)',
                }}
                transition='all 0.2s ease-in-out'
                onClick={() => {
                  posthog.capture('github_clicked', { location: 'mobile_menu' })
                  onClose()
                }}
              />
              <IconButton
                as={Link}
                href={config.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn Profile'
                icon={<AppIcon iconName='linkedin' />}
                variant='ghost'
                size='lg'
                borderRadius='full'
                color='gray.700'
                _hover={{
                  bg: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  color: 'white',
                  transform: 'scale(1.1)',
                }}
                transition='all 0.2s ease-in-out'
                onClick={() => {
                  posthog.capture('linkedin_clicked', {
                    location: 'mobile_menu',
                  })
                  onClose()
                }}
              />
            </HStack>
          </Stack>
        </MotionStack>
      )}
    </AnimatePresence>
  )
}
