import React from 'react'
import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import type { RoleType, Skill } from '@utils/types'

export interface ContributionProps {
  user: string
  repository: string
  role: RoleType
  githubUrl: string
  description: { en: string }
  topics: string[]
  language: Skill
  company?: {
    name: string
    logo: string
    website: string
  }
}

export const Contribution: React.FC<ContributionProps> = ({
  user,
  repository,
  role,
  githubUrl,
  description,
  topics,
  language,
  company,
}) => {
  return (
    <LinkBox
      p='4'
      borderColor='black'
      border='1px solid'
      shadow={`8px 8px 0px 0px ${language.color}`}
      transition='all 0.1s ease-in-out'
      _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
    >
      <Flex h='full' flexDir='column'>
        <Flex justify='space-between' align='flex-start' mb='2'>
          <HStack spacing='1' fontSize='xl' flex='1'>
            <Text whiteSpace='nowrap'>{user}</Text>
            <Text as='span'>/</Text>
            <Text fontWeight='semibold'>
              <LinkOverlay href={githubUrl} isExternal>
                {repository}
              </LinkOverlay>
            </Text>
          </HStack>
          {company && (
            <Tooltip label={`Built at ${company.name}`} placement='top'>
              <Box ml='2' flexShrink={0}>
                <Link href={company.website} isExternal>
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width='24px'
                    height='24px'
                    borderRadius='md'
                    fallback={
                      <Box
                        width='24px'
                        height='24px'
                        bg='gray.200'
                        borderRadius='md'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        fontSize='xs'
                        fontWeight='bold'
                        color='gray.600'
                      >
                        {company.name.charAt(0)}
                      </Box>
                    }
                  />
                </Link>
              </Box>
            </Tooltip>
          )}
        </Flex>
        <Flex mt='2' mb='4'>
          <Badge colorScheme={role.color}>{role.label}</Badge>
        </Flex>
        <Text flex='1' mb='4'>
          {description.en}
        </Text>
        <Flex justify='space-between'>
          <HStack>
            {topics.map((topic) => (
              <Tag
                key={topic}
                variant='subtle'
                colorScheme='blue'
                borderRadius='full'
              >
                {topic}
              </Tag>
            ))}
          </HStack>
          <Box
            color={language.color}
            fontSize='24px'
            display='flex'
            alignItems='center'
            fontWeight='bold'
          >
            <Icon as={language.icon as React.ComponentType} boxSize='6' />
          </Box>
        </Flex>
      </Flex>
    </LinkBox>
  )
}
