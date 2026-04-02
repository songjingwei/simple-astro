import { useState } from "react"
import { usePageZoom } from "@/components/app/usePageZoom"
import { AppPageSections } from "@/components/app/AppPageSections"
import { I18nProvider } from "@/i18n/context"
import { fetchLatestVersion } from "@/lib/downloadApi"

export default function AppPageContent({ locale = "zh" }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const appRef = usePageZoom()

  const handleDownload = async () => {
    try {
      const info = await fetchLatestVersion(locale)
      if (info.downloadUrl) {
        const a = document.createElement("a")
        a.href = info.downloadUrl
        a.download = ""
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
    } catch (e) {
      console.error("获取下载链接失败", e)
    }
  }

  return (
    <I18nProvider locale={locale}>
      <AppPageSections
        appRef={appRef}
        openFaqIndex={openFaqIndex}
        onOpenDownload={handleDownload}
        onToggleFaq={setOpenFaqIndex}
      />
    </I18nProvider>
  )
}
