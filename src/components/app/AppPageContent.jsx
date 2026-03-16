import { useState } from "react"
import { usePageZoom } from "@/components/app/usePageZoom"
import { AppPageSections } from "@/components/app/AppPageSections"

export default function AppPageContent() {
  const [showDownload, setShowDownload] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const appRef = usePageZoom()

  return (
    <AppPageSections
      appRef={appRef}
      showDownload={showDownload}
      openFaqIndex={openFaqIndex}
      onOpenDownload={() => setShowDownload(true)}
      onCloseDownload={() => setShowDownload(false)}
      onToggleFaq={setOpenFaqIndex}
    />
  )
}
