import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Flex, keyframes } from '@chakra-ui/react'

const infiniteSlideAnimationKeyframes = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`

const infiniteSlideAnimation = `${infiniteSlideAnimationKeyframes} linear infinite`

const InfiniteSlider = ({
  speed,
  direction,
  children
}: {
  speed: number
  direction: 'right' | 'left'
  children: React.ReactNode
}) => {
  const [looperInstances, setLooperInstances] = useState(3)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return

    const { width } = innerRef.current.getBoundingClientRect()

    const { width: parentWidth } = outerRef.current.getBoundingClientRect()

    const instanceWidth = width / innerRef.current.children.length

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width))
    }
  }, [])

  useEffect(() => {
    setupInstances()
  }, [])

  return (
    <Box width="100%" overflow="hidden" ref={outerRef}>
      <Box width="fit-content" justifyContent="center" ref={innerRef}>
        <Flex>
          {[...Array(looperInstances)].map((_, ind) => (
            <Box
              key={ind}
              width="max-content"
              animation={infiniteSlideAnimation}
              sx={{
                animationDuration: `${speed}s`,
                animationDirection: direction === 'right' ? 'reverse' : 'normal'
              }}
            >
              <Flex>{children}</Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default InfiniteSlider
