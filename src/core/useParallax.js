import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.3) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        let rafId = null

        const update = () => {
            const rect = el.getBoundingClientRect()
            const viewH = window.innerHeight
            const centerOffset = rect.top + rect.height / 2 - viewH / 2
            const offset = centerOffset * speed

            el.style.backgroundPosition = `center calc(50% + ${offset}px)`
            rafId = null
        }

        const onScroll = () => {
            if (rafId) return
            rafId = requestAnimationFrame(update)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        update()

        return () => {
            window.removeEventListener('scroll', onScroll)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [speed])

    return ref
}