import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { BrandIcon, BrandTextIcon } from "@/components/app/icons"
import pageText from "@/components/app/page-text.json"

export function AppHeaderSection({ onOpenDownload }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-brand">
          <BrandIcon />
          <BrandTextIcon />
        </div>
        <nav className="header-nav">
          {pageText.header.nav.map((item) => (
            <div className="header-nav-item" key={item}>{item}</div>
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
