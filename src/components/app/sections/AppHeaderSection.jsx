import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { BrandIcon, BrandTextIcon } from "@/components/app/icons"
import pageText from "@/components/app/page-text.json"

const navTargetIds = ["version-intro", "survey-feedback", "feature-preview"]

export function AppHeaderSection({ onOpenDownload }) {
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
          <img src="/logoo.svg" alt="盖世游戏" className="header-brand-icon" />
          <BrandTextIcon />
        </div>
        <nav className="header-nav">
          {pageText.header.nav.map((item, index) => (
            <div
              className="header-nav-item"
              key={item}
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
          <RainbowButton
            className="header-rainbow-button"
            variant="outline"
            onClick={onOpenDownload}
          >
            {pageText.header.downloadButton}
          </RainbowButton>
        </div>
      </div>
    </header>
  )
}
