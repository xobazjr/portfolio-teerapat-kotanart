import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.15, ease = 0.08) {
    const containerRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth <= 1024) return;

        const container = containerRef.current
        const bg = bgRef.current
        if (!container || !bg) return

        let rafId = null
        let targetY = 0
        let currentY = 0

        const onScroll = () => {
            const rect = container.getBoundingClientRect()
            const viewH = window.innerHeight
            
            if (rect.top < viewH && rect.bottom > 0) {
                const centerOffset = (rect.top + rect.height / 2) - viewH / 2
                targetY = centerOffset * speed
            }
        }

        const updateAnimation = () => {
            currentY += (targetY - currentY) * ease
            bg.style.transform = `translate3d(0, ${currentY}px, 0) scale(1.15)`
            
            rafId = requestAnimationFrame(updateAnimation)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        rafId = requestAnimationFrame(updateAnimation)

        return () => {
            window.removeEventListener('scroll', onScroll)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [speed, ease])

    return { containerRef, bgRef }
}