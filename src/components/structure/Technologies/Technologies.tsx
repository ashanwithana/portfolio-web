import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { SkillGroup } from './SkillGroup'
import { skills } from '@data/skills'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}

const MotionSimpleGrid = motion(SimpleGrid)

export const Technologies: React.FC = () => {
  return (
    <VStack
      as='section'
      align='stretch'
      pb={{ base: 16, md: 24 }}
      borderColor='black'
      borderTop='1px solid'
      spacing={{ base: 12, md: 16 }}
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt={{ base: '24', md: '32' }}
        pb='3'
        bg='linear-gradient(90deg, #A8CCDB 0%, #E8D5C4 100%)'
      >
        <Heading
          as='h2'
          variant='sectionTitle'
          color='white'
          size={{ base: 'xl', md: '2xl' }}
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
        >
          Technical Expertise
        </Heading>
      </Box>

      <Container maxW='7xl'>
        <VStack spacing={{ base: 6, md: 4 }} align='stretch'>
          <Text
            fontSize={{ base: 'md', md: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW='2xl'
            lineHeight='tall'
            textAlign='center'
            mx='auto'
            px={{ base: 4, md: 0 }}
          >
            A comprehensive toolkit of modern technologies and frameworks I use
            to build scalable, high-performance applications.
          </Text>

          {/* Skills Grid */}
          <MotionSimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 4, md: 6, lg: 8 }}
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <SkillGroup key={skill.id} {...skill} />
            ))}
          </MotionSimpleGrid>
        </VStack>
      </Container>
    </VStack>
  )
}
