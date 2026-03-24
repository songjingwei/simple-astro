import { useState } from "react"
import { usePageZoom } from "@/components/app/usePageZoom"
import { AppPageSections } from "@/components/app/AppPageSections"
import { I18nProvider } from "@/i18n/context"

export default function AppPageContent({ locale = "zh" }) {
  const [showDownload, setShowDownload] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const appRef = usePageZoom()

  return (
    <I18nProvider locale={locale}>
      <AppPageSections
        appRef={appRef}
        showDownload={showDownload}
        openFaqIndex={openFaqIndex}
        onOpenDownload={() => setShowDownload(true)}
        onCloseDownload={() => setShowDownload(false)}
        onToggleFaq={setOpenFaqIndex}
      />
    </I18nProvider>
  )
}
