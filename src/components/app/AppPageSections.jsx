import { DownloadModal } from "@/components/app/DownloadModal"
import { AppHeaderSection } from "@/components/app/sections/AppHeaderSection"
import { CompatSection } from "@/components/app/sections/CompatSection"
import { FeatureFaqSection } from "@/components/app/sections/FeatureFaqSection"
import { HeroSection } from "@/components/app/sections/HeroSection"
import { SurveySection } from "@/components/app/sections/SurveySection"

export function AppPageSections({
  appRef,
  showDownload,
  openFaqIndex,
  onOpenDownload,
  onCloseDownload,
  onToggleFaq,
}) {
  return (
    <main className="app" ref={appRef}>
      <AppHeaderSection onOpenDownload={onOpenDownload} />
      <HeroSection onOpenDownload={onOpenDownload} />
      <CompatSection />
      <SurveySection />
      <FeatureFaqSection
        openFaqIndex={openFaqIndex}
        onToggleFaq={onToggleFaq}
        onOpenDownload={onOpenDownload}
      />
      {showDownload && <DownloadModal onClose={onCloseDownload} />}
    </main>
  )
}
