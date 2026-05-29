import { useEffect, useRef } from 'react'

/**
 * useParallax
 * อัปเดต background-position ของ element ตาม scroll
 * เหมือน style="background-position: center calc(50% + Xpx)"
 *
 * @param {number} speed - ความเร็ว parallax (แนะนำ 0.15 - 0.3)
 * @returns {React.RefObject} - ใส่ ref นี้ใน element ที่ต้องการ
 */
export function useParallax(speed = 0.2) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        let rafId = null

        const update = () => {
            const rect = el.getBoundingClientRect()
            const viewH = window.innerHeight

            // เปอร์เซ็นต์ที่ section เลื่อนผ่าน viewport (0 = เริ่มเข้า, 1 = ออกไปแล้ว)
            const progress = 1 - (rect.bottom / (viewH + rect.height))

            // แปลง progress (0→1) เป็น offset (-maxOffset → +maxOffset)
            // maxOffset เล็กเพื่อให้รูปไม่หลุดออกนอกกรอบ
            const maxOffset = rect.height * 0.15
            const offset = (progress - 0.5) * 2 * maxOffset * speed * 5

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