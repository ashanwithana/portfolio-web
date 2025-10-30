import { useTranslation } from 'next-i18next'
import { Heading, VStack, Box } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { projects } from '@data/projects'
import { OtherProjectsMarquee } from './OtherProjectsMarquee'
import { ProjectShowcase } from './ProjectShowcase'

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

export const Portfolio: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <VStack
        id='projects'
        as='section'
        align='stretch'
        py='20'
        px={{ base: '4', md: '8' }}
        spacing='16'
        scrollMarginTop='var(--chakra-sizes-header-height)'
      >
        <Heading as='h2' variant='sectionTitle' size='2xl'>
          {t('selected-projects')}
        </Heading>
        <MotionVStack
          align='stretch'
          spacing='12'
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
      <OtherProjectsMarquee />
    </>
  )
}
