import {
  Box,
  Center,
  Icon,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import type { Skill } from '@utils/types'

export interface SkillProps extends Skill {
  setBorderColor: (color: string) => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon,
  color,
  setBorderColor,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const skillBg = useColorModeValue('gray.50', 'gray.700')
  const skillHoverBg = useColorModeValue('white', 'gray.600')

  return (
    <Tooltip
      aria-label={name}
      label={name}
      isOpen={isOpen}
      placement='top'
      hasArrow
      bg={color}
      color='white'
      fontWeight='bold'
      px={3}
      py={2}
      borderRadius='lg'
      shouldWrapChildren
    >
      <Box
        as='button'
        p='4'
        borderRadius='xl'
        bg={skillBg}
        border='2px solid'
        borderColor='transparent'
        cursor='pointer'
        transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        _hover={{
          bg: skillHoverBg,
          borderColor: color,
          transform: 'translateY(-2px) scale(1.02)',
          boxShadow: `0 4px 12px ${color}30`,
        }}
        _active={{
          transform: 'translateY(-1px) scale(1.01)',
        }}
        onMouseEnter={() => {
          setBorderColor(color)
          onOpen()
        }}
        onMouseLeave={() => {
          setBorderColor('transparent')
          onClose()
        }}
        onClick={onToggle}
        width='full'
        height='16'
      >
        <Center height='full' flexDirection='column' gap='1'>
          <Box
            color={color}
            fontSize='24px'
            display='flex'
            alignItems='center'
            fontWeight='bold'
            transition='all 0.2s ease-in-out'
          >
            <Icon as={icon as React.ComponentType} boxSize='6' />
          </Box>
          <Text
            fontSize='2xs'
            fontWeight='medium'
            color={useColorModeValue('gray.600', 'gray.400')}
            textAlign='center'
            lineHeight='tight'
            noOfLines={1}
          >
            {name}
          </Text>
        </Center>
      </Box>
    </Tooltip>
  )
}
