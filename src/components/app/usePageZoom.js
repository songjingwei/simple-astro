import { useEffect, useRef } from "react"

export function usePageZoom() {
  const appRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (!appRef.current) return
      appRef.current.style.zoom = "1"
      const viewportWidth = document.documentElement.clientWidth
      const zoom = Math.min(1, viewportWidth / 1440)
      appRef.current.style.zoom = zoom
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return appRef
}
