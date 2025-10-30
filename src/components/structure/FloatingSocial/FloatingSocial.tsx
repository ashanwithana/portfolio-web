import { Box, IconButton, Link, Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'
import { AppIcon } from '../../icons'

const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export const FloatingSocial: React.FC = () => {
  const posthog = usePostHog()

  return (
    <>
      {/* GitHub Button */}
      <MotionBox
        position='fixed'
        bottom={{ base: '4', md: '6' }}
        right={{ base: '4', md: '6' }}
        zIndex='tooltip'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.5,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 200,
        }}
      >
        <Tooltip
          label='View GitHub Profile'
          placement='left'
          hasArrow
          bg='gray.800'
          color='white'
          fontWeight='semibold'
          px={3}
          py={2}
          borderRadius='lg'
        >
          <MotionIconButton
            as={Link}
            href={config.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
            icon={<AppIcon iconName='github' boxSize={5} />}
            size={{ base: 'md', md: 'lg' }}
            borderRadius='full'
            background='linear-gradient(135deg, #333 0%, #24292e 100%)'
            color='white'
            boxShadow='0 4px 20px rgba(51, 51, 51, 0.3)'
            border={{ base: '2px solid white', md: '3px solid white' }}
            _hover={{
              background: 'linear-gradient(135deg, #24292e 0%, #1b1f23 100%)',
              boxShadow: '0 6px 30px rgba(51, 51, 51, 0.4)',
              transform: 'scale(1.1)',
            }}
            _active={{
              transform: 'scale(0.95)',
            }}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            transition='all 0.2s ease-in-out'
            onClick={() => posthog.capture('github_floating_clicked')}
          />
        </Tooltip>
      </MotionBox>

      {/* LinkedIn Button */}
      <MotionBox
        position='fixed'
        bottom={{ base: '20', md: '24' }}
        right={{ base: '4', md: '6' }}
        zIndex='tooltip'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2.2,
          duration: 0.5,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 200,
        }}
      >
        <Tooltip
          label='Connect on LinkedIn'
          placement='left'
          hasArrow
          bg='blue.600'
          color='white'
          fontWeight='semibold'
          px={3}
          py={2}
          borderRadius='lg'
        >
          <MotionIconButton
            as={Link}
            href={config.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
            icon={<AppIcon iconName='linkedin' boxSize={5} />}
            size={{ base: 'md', md: 'lg' }}
            borderRadius='full'
            background='linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)'
            color='white'
            boxShadow='0 4px 20px rgba(0, 119, 181, 0.3)'
            border={{ base: '2px solid white', md: '3px solid white' }}
            _hover={{
              background: 'linear-gradient(135deg, #005885 0%, #0077b5 100%)',
              boxShadow: '0 6px 30px rgba(0, 119, 181, 0.4)',
              transform: 'scale(1.1)',
            }}
            _active={{
              transform: 'scale(0.95)',
            }}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            transition='all 0.2s ease-in-out'
            onClick={() => posthog.capture('linkedin_floating_clicked')}
          />
        </Tooltip>
      </MotionBox>
    </>
  )
}
