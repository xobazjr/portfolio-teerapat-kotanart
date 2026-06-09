import { useEffect, useRef } from 'react'
 
export function useParallax(desktopSpeed = 0.2, mobileSpeed = 0, breakpoint = 1024) {
    const containerRef = useRef(null)
    const bgRef = useRef(null)
 
    useEffect(() => {
        const container = containerRef.current
        const bg = bgRef.current
        if (!container || !bg) return
 
        let rafId = null
        let ticking = false
 
        const isDesktop = () => window.innerWidth >= breakpoint
 
        const update = () => {
            const speed = isDesktop() ? desktopSpeed : mobileSpeed
            const scrollY = window.scrollY
            const rect = container.getBoundingClientRect()
 
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                ticking = false
                return
            }
 
            if (speed === 0) {
                bg.style.backgroundPosition = 'center center'
                ticking = false
                return
            }
 
            const offset = scrollY * speed
            bg.style.backgroundPosition = `center calc(50% + ${offset}px)`
            ticking = false
        }
 
        const onScroll = () => {
            if (!ticking) {
                rafId = requestAnimationFrame(update)
                ticking = true
            }
        }
 
        const onResize = () => {
            if (!isDesktop()) {
                bg.style.backgroundPosition = 'center center'
            }
        }
 
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)
        update()
 
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [desktopSpeed, mobileSpeed, breakpoint])
 
    return { containerRef, bgRef }
}