import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.12
      current.current.y += (pos.current.y - current.current.y) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        pointerEvents: 'none',
        zIndex: 9999,
        translate: '-50% -50%',
        mixBlendMode: 'difference',
      }}
    />
  )
}