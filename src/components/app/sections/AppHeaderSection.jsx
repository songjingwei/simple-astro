import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { BrandIcon, BrandTextIcon } from "@/components/app/icons"
import { useI18n } from "@/i18n/context"

const navTargetIds = ["version-intro", "survey-feedback", "feature-preview"]

export function AppHeaderSection({ onOpenDownload }) {
  const { t, locale } = useI18n()

  const handleNavClick = (targetId) => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-brand">
          <img src="/logoo.svg" alt={t.brandAlt} className="header-brand-icon" />
          <BrandTextIcon locale={locale} />
        </div>
        <nav className="header-nav">
          {t.header.nav.map((item, index) => (
            <div
              className="header-nav-item"
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => handleNavClick(navTargetIds[index])}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleNavClick(navTargetIds[index])
              }}
            >
              {item}
            </div>
          ))}
        </nav>
        <div className="header-action">
          <a className="header-lang-switch" href={t.bottomBar.langSwitchHref}>
            {t.bottomBar.langSwitch}
          </a>
          {/* <RainbowButton
            className="header-rainbow-button"
            variant="outline"
            onClick={onOpenDownload}
          >
            {t.header.downloadButton}
          </RainbowButton> */}
        </div>
      </div>
    </header>
  )
}
