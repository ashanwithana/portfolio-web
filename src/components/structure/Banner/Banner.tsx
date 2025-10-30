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

export const Banner: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()

  return (
    <MotionFlex
      h='calc(100vh - var(--chakra-sizes-header-height))'
      px={{ base: '4', md: '8' }}
      align='center'
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
      <VStack align='flex-start' pb='32' maxW='container.md' spacing='12'>
        <MotionHeading
          as='h1'
          variant='banner'
          size='banner'
          wordBreak='break-word'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {t('hero-title')}
        </MotionHeading>
        <NextLink href='/#projects' passHref legacyBehavior>
          <MotionButton
            as='a'
            variant='accent'
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
            <chakra.span mr='4'>{t('hero-cta')}</chakra.span>
            <ButtonArrow
              transformOrigin='left'
              transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
            />
          </MotionButton>
        </NextLink>
      </VStack>

      {/* ASCII Art Name - Clickable */}
      <NextLink href='/about' passHref legacyBehavior>
        <Box
          as='a'
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
      </NextLink>
    </MotionFlex>
  )
}
