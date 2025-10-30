import { useTranslation } from 'next-i18next'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { projects } from '@data/projects'
import { ProjectShowcase } from '../Portfolio/ProjectShowcase'

const MotionBox = motion(Box)

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

const MotionVStack = motion(VStack)

export const SelectedProjects: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <VStack
        as='section'
        align='stretch'
        pb='12'
        borderColor='black'
        borderTop='1px solid'
        spacing='10'
      >
        <Box
          id='projects'
          px={{ base: '4', md: '8' }}
          pt='32'
          pb='3'
          bg='linear-gradient(90deg, #8B5A96 0%, #E6B800 100%)'
          scrollMarginTop='var(--chakra-sizes-header-height)'
        >
          <Heading
            as='h2'
            variant='sectionTitle'
            color='white'
            size='2xl'
            wordBreak={{ base: 'break-all', sm: 'break-word' }}
          >
            {t('selected-projects')}
          </Heading>
        </Box>
        <MotionVStack
          align='stretch'
          spacing='8'
          px={{ base: '4', md: '8' }}
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {projects
            .filter((project) => project.isShowcased)
            .map((project) => (
              <MotionBox key={project.id} variants={item}>
                <ProjectShowcase {...project} />
              </MotionBox>
            ))}
        </MotionVStack>
      </VStack>
    </>
  )
}
