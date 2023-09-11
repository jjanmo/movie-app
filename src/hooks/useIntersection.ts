import { useEffect, useRef } from 'react'
import throttle from 'lodash/throttle'

// eslint-disable-next-line no-unused-vars
type OnIntersection = (entries: IntersectionObserverEntry[], observer?: IntersectionObserver) => void
interface Props {
  onIntersection: OnIntersection
  options?: {
    root: Element | Document | null
    rootMargin: string
    threshold: number
  }
}

const WAIT = 500

export default function useIntersection<T extends Element>({
  onIntersection,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
}: Props) {
  const target = useRef<T>(null)

  const intersectionCallback: IntersectionObserverCallback = throttle(onIntersection, WAIT)

  useEffect(() => {
    if (!target.current) return

    const observer = new IntersectionObserver(intersectionCallback, options)
    observer.observe(target.current as T)

    return () => {
      observer && observer.disconnect()
    }
  }, [intersectionCallback, options])

  return {
    target,
  }
}
