import { useCallback, useEffect, useRef, useState } from 'react'
import './test.scss'
export default function InfiniteLooper({
  speed,
  direction,
  children
}: {
  speed: number
  direction: 'right' | 'left'
  children: React.ReactNode
}) {
  const [looperInstances, setLooperInstances] = useState(2)
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
  }, [looperInstances])

  useEffect(() => {
    setupInstances()
  }, [])

  console.log('render')
  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal'
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
