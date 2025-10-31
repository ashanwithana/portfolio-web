import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import {
  Button,
  chakra,
  Flex,
  Heading,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import { ButtonArrow } from '../../meta'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionButton = motion(Button)

// Function to calculate banner height dynamically
const getBannerHeight = () => {
  // Navbar heights (top position + pill height + some padding)
  // Based on Header.tsx: top={4/6/8/10} + pill height (~60px) + gap
  const navbarSpace = {
    base: 'calc(100vh - 80px)', // Mobile: top(4) + pill(~60px) + gap(~16px)
    md: 'calc(100vh - 90px)',   // Medium: top(6) + pill(~66px) + gap(~18px)
    xl: 'calc(100vh - 160px)',  // Large: top(8) + pill(~72px) + gap(~20px)
    '2xl': 'calc(100vh - 190px)' // XL: top(10) + pill(~76px) + gap(~24px)
  }
  return navbarSpace
}

export const Banner: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()
  const dynamicHeight = getBannerHeight()

  return (
    <MotionFlex
      h={dynamicHeight}
      minH={dynamicHeight}
      maxH={dynamicHeight}
      px={{ base: '4', md: '8', xl: '12', '2xl': '16' }}
      pt={{ base: '80px', md: '90px', xl: '100px', '2xl': '110px' }}
      pb={{ base: '8', md: '10', xl: '12', '2xl': '16' }}
      align='center'
      justify='center'
      position='relative'
      overflow='hidden'
      animate={{
        background: [
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 8 }}
    >
      <VStack align='flex-start' maxW={{ base: 'container.md', xl: 'container.lg', '2xl': 'container.xl' }} spacing={{ base: '6', xl: '8', '2xl': '12' }} w='full'>
        <MotionHeading
          as='h1'
          variant='banner'
          size='banner'
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl', xl: '6xl', '2xl': '7xl' }}
          lineHeight={{ base: '1.1', xl: '1.05', '2xl': '1' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {t('hero-title')}
        </MotionHeading>
        <MotionButton
          as={NextLink}
          href='/#projects'
          variant='accent'
          size={{ base: 'lg', xl: 'xl', '2xl': '2xl' }}
          fontSize={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
          px={{ base: 6, xl: 8, '2xl': 12 }}
          py={{ base: 3, xl: 4, '2xl': 6 }}
          alignSelf={{ base: 'flex-start', md: 'flex-start' }}
          sx={{
            '&:hover svg': {
              transform: 'scaleX(1.1)',
            },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          onClick={() => posthog.capture('hero_button_clicked')}
        >
          <chakra.span mr={{ base: '2', md: '4' }}>{t('hero-cta')}</chakra.span>
          <ButtonArrow
            transformOrigin='left'
            transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
          />
        </MotionButton>
      </VStack>

      {/* ASCII Art Name - Clickable */}
      <Box
        as={NextLink}
        href='/about'
        position='absolute'
        bottom='8'
        right='8'
        display={{ base: 'none', lg: 'block' }}
        opacity='0.3'
        cursor='pointer'
        transition='all 0.3s ease'
        _hover={{
          opacity: '0.6',
          transform: 'scale(1.05)',
        }}
        title='Click to learn more about me'
        onClick={() => posthog.capture('ascii_name_clicked')}
      >
        <Text
          fontFamily='monospace'
          fontSize='sm'
          lineHeight='1'
          color='white'
          whiteSpace='pre'
          textShadow='2px 2px 4px rgba(0,0,0,0.5)'
        >
          {`  ▄▄▄       ██████  ██░ ██  ▄▄▄       ███▄    █ 
 ▒████▄   ▒██    ▒ ▓██░ ██▒▒████▄     ██ ▀█   █ 
 ▒██  ▀█▄ ░ ▓██▄   ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒
 ░██▄▄▄▄██  ▒   ██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒
  ▓█   ▓██▒██████▒▒░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░
  ▒▒   ▓▒█▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ 
   ▒   ▒▒ ░ ░▒  ░ ░ ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░
   ░   ▒  ░  ░  ░   ░  ░░ ░  ░   ▒      ░   ░ ░ 
       ░  ░     ░   ░  ░  ░      ░  ░         ░`}
        </Text>
      </Box>
    </MotionFlex>
  )
}
