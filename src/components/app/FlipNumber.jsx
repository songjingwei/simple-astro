import { useEffect, useRef } from "react"

export function FlipNumber({ value, className, counting = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const strips = el.querySelectorAll(".flip-strip")
    const digitStrips = Array.from(strips)

    const current = digitStrips.map((s) => {
      return Math.abs(parseInt(s.dataset.target)) / 10
    })

    strips.forEach((s, i) => {
      s.style.transform = `translateY(-${current[i] * 10}%)`
    })

    if (counting) {
      let counter = 1000
      let raf = null
      let lastTime = 0

      function tick(time) {
        if (time - lastTime >= 350) {
          lastTime = time
          counter = counter >= 9999 ? 1000 : counter + 1
          const decimal = Math.floor(Math.random() * 10)
          const numStr = String(counter) + String(decimal)

          digitStrips.forEach((s, i) => {
            if (i < numStr.length) {
              const d = parseInt(numStr[i])
              s.style.transition = "transform 0.8s cubic-bezier(0.22,1,0.36,1)"
              s.style.transform = `translateY(-${d * 10}%)`
            }
          })
        }
        raf = requestAnimationFrame(tick)
      }

      raf = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(raf)
    }

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
  }, [counting])

  const chars = value.split("")

  return (
    <span ref={ref} className={className || ""} style={{ display: "inline-flex", alignItems: "center" }}>
      {chars.map((char, i) => {
        const isDigit = /\d/.test(char)
        if (!isDigit) {
          return (
            <span key={i} style={{ display: "inline-block", height: "1em", lineHeight: "1em" }}>
              {char}
            </span>
          )
        }
        const digit = parseInt(char, 10)
        return (
          <span
            key={i}
            className="flip-col"
            style={{ display: "inline-block", overflow: "hidden", height: "1em" }}
          >
            <span
              className="flip-strip"
              data-target={`-${digit * 10}%`}
              data-delay={i * 80}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span key={n} className="flip-d" style={{ display: "block", height: "1em", lineHeight: "1em" }}>
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
