import { useState } from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import type { SkillGroup as ISkillGroup } from '@utils/types'
import { SkillBox } from './SkillBox'

const MotionBox = motion(Box)

const group: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Get primary skill color from the first skill in the group
const getPrimaryColor = (skills: ISkillGroup['skills']) => {
  return skills[0]?.color || '#6366f1'
}

export type SkillGroupProps = ISkillGroup

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  const [borderColor, setBorderColor] = useState('transparent')
  const primaryColor = getPrimaryColor(skills)

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColorStatic = useColorModeValue('black', 'white')

  return (
    <MotionBox variants={group}>
      <Box
        bg={cardBg}
        p='6'
        borderColor={borderColorStatic}
        border='1px solid'
        shadow={`8px 8px 0px 0px ${borderColor === 'transparent' ? primaryColor : borderColor
          }`}
        transition='all 0.1s ease-in-out'
        _hover={{
          shadow: 'none',
          transform: 'translate(8px, 8px)',
        }}
        height='full'
      >
        <VStack align='stretch' spacing='4' height='full'>
          <Heading
            as='h4'
            fontFamily='Gilroy, sans-serif'
            fontWeight='800'
            fontSize={{ base: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}
            color={useColorModeValue('black', 'white')}
            textTransform='capitalize'
            letterSpacing='-0.02em'
            lineHeight='shorter'
            mb='2'
          >
            {category}
          </Heading>
          <SimpleGrid columns={3} spacing='3' flex='1' alignItems='center'>
            {skills.map((skill) => (
              <SkillBox
                key={skill.name}
                setBorderColor={setBorderColor}
                {...skill}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </MotionBox>
  )
}
