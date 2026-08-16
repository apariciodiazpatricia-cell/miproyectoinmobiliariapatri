import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp
 * Animates a number from 0 to `target` when the element enters the viewport.
 *
 * @param {number} target   - Final value to count up to
 * @param {number} duration - Animation duration in ms (default: 1800)
 * @returns {[number, React.RefObject]} [currentCount, observerRef]
 */
function useCountUp(target, duration = 1800) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                observer.disconnect()

                let current = 0
                const step = Math.ceil(target / (duration / 16))

                const timer = setInterval(() => {
                    current += step
                    if (current >= target) {
                        setCount(target)
                        clearInterval(timer)
                    } else {
                        setCount(current)
                    }
                }, 16)
            },
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [target, duration])

    return [count, ref]
}

export default useCountUp
