import { useEffect, useRef, useCallback } from "react"

export function usePageZoom() {
  const appRef = useRef(null)

  const applyScale = useCallback(() => {
    const el = appRef.current
    if (!el) return

    const viewportWidth = window.innerWidth
    const scale = Math.min(1, viewportWidth / 1440)

    if (scale < 1) {
      el.style.transform = `scale(${scale})`
      el.style.transformOrigin = "top left"
      // transform 不影响文档流，需要用负 margin 收回多余空间
      const contentHeight = el.scrollHeight
      el.style.marginBottom = `${-(contentHeight * (1 - scale))}px`
    } else {
      el.style.transform = ""
      el.style.transformOrigin = ""
      el.style.marginBottom = ""
    }
  }, [])

  useEffect(() => {
    applyScale()
    window.addEventListener("resize", applyScale)

    // 监听内容高度变化（如 FAQ 展开/收起）
    let ro
    if (appRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(applyScale)
      ro.observe(appRef.current)
    }

    return () => {
      window.removeEventListener("resize", applyScale)
      if (ro) ro.disconnect()
    }
  }, [applyScale])

  return appRef
}
