import { useEffect, useRef } from "react"

export function FlipNumber({ value, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const h = parseFloat(getComputedStyle(el).lineHeight) || 24
    const cols = el.querySelectorAll(".flip-col")
    const strips = el.querySelectorAll(".flip-strip")

    cols.forEach((col) => {
      col.style.height = `${h}px`
      col.style.overflow = "hidden"
      col.style.display = "inline-block"
    })
    el.querySelectorAll(".flip-d").forEach((d) => {
      d.style.height = `${h}px`
      d.style.lineHeight = `${h}px`
    })

    // 记录每个 strip 当前数字
    const current = Array.from(strips).map((s) => {
      return Math.abs(parseInt(s.dataset.target)) / 10
    })

    // 设置初始位置
    strips.forEach((s, i) => {
      s.style.transform = `translateY(-${current[i] * 10}%)`
    })

    const digitStrips = Array.from(strips)
    let timer = null

    function rollRandom() {
      const count = Math.random() > 0.5 ? 2 : 1
      const indices = []
      while (indices.length < count && indices.length < digitStrips.length) {
        const idx = Math.floor(Math.random() * digitStrips.length)
        if (!indices.includes(idx)) indices.push(idx)
      }

      indices.forEach((idx) => {
        const s = digitStrips[idx]
        let next
        do {
          next = Math.floor(Math.random() * 10)
        } while (next === current[idx])
        current[idx] = next
        s.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1)"
        s.style.transform = `translateY(-${next * 10}%)`
      })

      timer = setTimeout(rollRandom, 2000 + Math.random() * 1000)
    }

    timer = setTimeout(rollRandom, 1000)
    return () => clearTimeout(timer)
  }, [])

  const chars = value.split("")

  return (
    <span ref={ref} className={className || ""} style={{ display: "inline-flex" }}>
      {chars.map((char, i) => {
        const isDigit = /\d/.test(char)
        if (!isDigit) return <span key={i}>{char}</span>
        const digit = parseInt(char, 10)
        return (
          <span key={i} className="flip-col">
            <span
              className="flip-strip"
              data-target={`-${digit * 10}%`}
              data-delay={i * 80}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n} className="flip-d" style={{ display: "block" }}>
                  {n}
                </span>
              ))}
            </span>
          </span>
        )
      })}
    </span>
  )
}
