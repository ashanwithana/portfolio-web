import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { AppIcon } from '@components/icons'
import React from 'react'
import { usePostHog } from 'posthog-js/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { env } from '@config/browser.env'
import { config } from '@config/config'

const ContactMeSchema = z
  .object({
    email: z.string().email(),
    message: z.string().min(1),
  })
  .strict()

type ContactMeData = z.infer<typeof ContactMeSchema>

export const Contact: React.FC = () => {
  const posthog = usePostHog()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMeData>({
    resolver: zodResolver(ContactMeSchema),
  })

  const inputBg = useColorModeValue('gray.50', 'gray.700')
  const inputBorder = useColorModeValue('gray.200', 'gray.600')

  const onSubmit = handleSubmit(async (data) => {
    try {
      await fetch(env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      posthog.capture('contact_form_submitted_successfully', {
        email: data.email,
      })

      posthog.identify(data.email)

      toast({
        title: 'Message Sent.',
        description: "I'll respond to you promptly.",
        status: 'success',
        duration: 7500,
        isClosable: true,
      })

      reset()
    } catch (error) {
      toast({
        title: 'There was an error sending your message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  })

  return (
    <Stack
      as='section'
      id='contact'
      direction={{ base: 'column', md: 'row' }}
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor={useColorModeValue(
        'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)',
        'rgba(99, 102, 241, 0.5)'
      )}
      borderTop='2px solid'
      spacing={{ base: '16', md: '4', xl: '2' }}
      scrollMarginTop='calc(var(--chakra-sizes-header-height) - 1px)'
      bg={useColorModeValue(
        'linear-gradient(135deg, rgba(99, 102, 241, 0.02) 0%, rgba(168, 85, 247, 0.02) 100%)',
        'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)'
      )}
    >
      <VStack flex='1' spacing={{ base: '6', md: '8' }} align='flex-start'>
        <Heading
          as='h2'
          size={{ base: 'xl', md: '2xl' }}
          color={useColorModeValue('black', 'white')}
          fontWeight='bold'
        >
          Contact Me
        </Heading>

        {/* Contact Options */}
        <VStack spacing={{ base: '3', md: '4' }} align='flex-start' w='full'>
          <HStack spacing={{ base: '3', md: '4' }} align='center'>
            <Box
              fontSize={{ base: '16px', md: '20px' }}
              color={useColorModeValue('black', 'white')}
              display='flex'
              alignItems='center'
            >
              <AppIcon iconName='email' />
            </Box>
            <VStack spacing='1' align='flex-start'>
              <Text
                fontWeight='semibold'
                color={useColorModeValue('black', 'white')}
                fontSize={{ base: 'sm', md: 'md' }}
              >
                Email
              </Text>
              <Link
                href={`mailto:${config.email}`}
                color={useColorModeValue('black', 'white')}
                fontSize={{ base: 'xs', md: 'sm' }}
                textDecoration='underline'
                _hover={{ opacity: 0.7 }}
              >
                {config.email}
              </Link>
            </VStack>
          </HStack>

          <HStack spacing={{ base: '3', md: '4' }} align='center'>
            <Box
              fontSize={{ base: '16px', md: '20px' }}
              color={useColorModeValue('black', 'white')}
              display='flex'
              alignItems='center'
            >
              <AppIcon iconName='linkedin' />
            </Box>
            <VStack spacing='1' align='flex-start'>
              <Text
                fontWeight='semibold'
                color={useColorModeValue('black', 'white')}
                fontSize={{ base: 'sm', md: 'md' }}
              >
                LinkedIn
              </Text>
              <Link
                href={config.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                color={useColorModeValue('black', 'white')}
                fontSize={{ base: 'xs', md: 'sm' }}
                textDecoration='underline'
                _hover={{ opacity: 0.7 }}
              >
                Connect with me
              </Link>
            </VStack>
          </HStack>
        </VStack>
      </VStack>

      <VStack
        as='form'
        onSubmit={onSubmit}
        flex='1'
        spacing={{ base: '4', md: '6' }}
      >
        <FormControl isInvalid={!!errors.email}>
          <FormLabel
            fontWeight='semibold'
            color={useColorModeValue('black', 'white')}
            fontSize={{ base: 'sm', md: 'md' }}
            mb={2}
          >
            Email
          </FormLabel>
          <Input
            placeholder='your_email@gmail.com'
            {...register('email')}
            bg={inputBg}
            border='2px solid'
            borderColor={inputBorder}
            borderRadius='lg'
            py={{ base: 4, md: 6 }}
            fontSize={{ base: 'sm', md: 'md' }}
            _hover={{
              borderColor: 'purple.300',
            }}
            _focus={{
              borderColor: 'purple.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)',
            }}
            transition='all 0.2s ease-in-out'
          />
          <FormErrorMessage
            color={useColorModeValue('black', 'white')}
            fontSize='sm'
          >
            {errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <FormLabel
            fontWeight='semibold'
            color={useColorModeValue('black', 'white')}
            fontSize={{ base: 'sm', md: 'md' }}
            mb={2}
          >
            Message
          </FormLabel>
          <Textarea
            minH={{ base: '32', md: '40' }}
            placeholder="Let's build something amazing together."
            {...register('message')}
            bg={inputBg}
            border='2px solid'
            borderColor={inputBorder}
            borderRadius='lg'
            py={4}
            fontSize={{ base: 'sm', md: 'md' }}
            resize='vertical'
            _hover={{
              borderColor: 'purple.300',
            }}
            _focus={{
              borderColor: 'purple.500',
              boxShadow: '0 0 0 1px var(--chakra-colors-purple-500)',
            }}
            transition='all 0.2s ease-in-out'
          />
          <FormErrorMessage
            color={useColorModeValue('black', 'white')}
            fontSize='sm'
          >
            {errors.message?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          alignSelf={{ base: 'stretch', md: 'flex-start' }}
          isLoading={isSubmitting}
          loadingText='Sending...'
          type='submit'
          bg={useColorModeValue('black', 'white')}
          color={useColorModeValue('white', 'black')}
          size={{ base: 'md', md: 'lg' }}
          height={{ base: '10', md: '12' }}
          px={{ base: 6, md: 8 }}
          borderRadius='lg'
          fontWeight='bold'
          fontSize='md'
          leftIcon={<AppIcon iconName='send' />}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: useColorModeValue(
              '0 8px 25px rgba(0, 0, 0, 0.15)',
              '0 8px 25px rgba(255, 255, 255, 0.15)'
            ),
          }}
          _active={{
            transform: 'translateY(0)',
          }}
          transition='all 0.2s ease-in-out'
        >
          Send
        </Button>
      </VStack>
    </Stack>
  )
}
