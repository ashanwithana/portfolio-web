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
        <>
          {/* Backdrop */}
          <motion.div
            key='backdrop'
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 999,
              cursor: 'pointer',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onTap={onClose}
          />

          {/* Side Menu */}
          <MotionStack
            key='header-menu'
            as='nav'
            pos='fixed'
            top='0'
            right='0'
            bottom='0'
            w='80'
            py='20'
            px='6'
            direction='column'
            spacing='4'
            background={bgColor}
            backdropFilter='blur(20px)'
            borderLeft='1px solid'
            borderColor={borderColor}
            boxShadow='0 0 40px rgba(0, 0, 0, 0.15)'
            overflowY='auto'
            zIndex={1000}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
        </>
      )}
    </AnimatePresence>
  )
}
