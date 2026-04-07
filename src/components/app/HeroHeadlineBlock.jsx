import { AppleIcon } from "@/components/app/icons"
import { useI18n } from "@/i18n/context"

export function HeroHeadlineBlock({ enText, zhText, subtitle, showDownloadButton = false, onDownload }) {
  const { t } = useI18n()

  return (
    <>
      <div className="hero-headline" aria-label={`${enText} ${zhText}`}>
        <span className="hero-headline-en">{enText}</span>
        <span className="hero-headline-zh">{zhText}</span>
      </div>
      <p className="hero-subtitle">{subtitle}</p>
      {/* {showDownloadButton && (
        <div className="hero-single-action">
          <button
            type="button"
            className="download-button-primary"
            onClick={onDownload}
          >
            <AppleIcon />
            <span className="download-button-label">{t.hero.downloadButton}</span>
          </button>
        </div>
      )} */}
    </>
  )
}
