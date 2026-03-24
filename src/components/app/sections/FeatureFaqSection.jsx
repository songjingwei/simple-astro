import LaserFlow from "@/components/LaserFlow"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"
import { Marquee } from "@/registry/magicui/marquee"
import {
  filingLinks,
  featurePreviewPhotoRows,
} from "@/components/app/constants"
import { useI18n } from "@/i18n/context"
import {
  FaqChevronDownIcon,
  FaqChevronUpIcon,
} from "@/components/app/AppPageSectionIcons"
import {
  CdkeyConnectorBottomLeftSvg,
  CdkeyConnectorBottomRightSvg,
  CdkeyConnectorTopLeftSvg,
  CdkeyConnectorTopRightSvg,
  CdkeyIconEnSvg,
  CdkeyIconZhSvg,
  CdkeyLinkLeftSvg,
  CdkeyLinkRightSvg,
  EpicLogoSvg,
  FeaturePreviewGlowSvg,
} from "@/components/app/AppPageSectionSvgs"

function renderFaqAnswer(item) {
  if (!item.linkText) {
    return item.answer
  }

  const [before, after] = item.answer.split(item.linkText)
  if (before === undefined || after === undefined) {
    return item.answer
  }

  return (
    <>
      {before}
      <a
        href={filingLinks.faqCompatList}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#3B82F6", textDecoration: "underline" }}
      >
        {item.linkText}
      </a>
      {after}
    </>
  )
}

export function FeatureFaqSection({ openFaqIndex, onToggleFaq, onOpenDownload }) {
  const { t } = useI18n()
  const faqFooter = t.faq.footer

  return (
    <section className="feature-preview-section" id="feature-preview">
      <div className="feature-preview-glow-wrapper">
        <FeaturePreviewGlowSvg />
      </div>
      <div className="feature-preview-content">
        <h2 className="feature-preview-title">{t.feature.title}</h2>
        <p className="feature-preview-desc">{t.feature.desc}</p>
        <div className="feature-preview-cards">
          <div className="feature-preview-card feature-preview-card-epic">
            <div className="feature-card-logo-container">
              <EpicLogoSvg />
              <span className="feature-card-corner-dot feature-card-corner-dot-tl" aria-hidden="true"></span>
              <span className="feature-card-corner-dot feature-card-corner-dot-tr" aria-hidden="true"></span>
              <span className="feature-card-corner-dot feature-card-corner-dot-bl" aria-hidden="true"></span>
              <span className="feature-card-corner-dot feature-card-corner-dot-br" aria-hidden="true"></span>
            </div>
            <img className="feature-card-bottom-circuit feature-card-bottom-circuit-left" src="/epic-circuit-bottom-left.svg" alt="" aria-hidden="true" />
            <img className="feature-card-bottom-circuit feature-card-bottom-circuit-right" src="/epic-circuit-bottom-right.svg" alt="" aria-hidden="true" />
            <h3 className="feature-card-title">{t.feature.epic.title}</h3>
            <p className="feature-card-desc">{t.feature.epic.desc}</p>
          </div>
          <div className="feature-preview-card feature-preview-card-games">
            <h3 className="feature-card-title">{t.feature.games.title}</h3>
            <p className="feature-card-desc">{t.feature.games.desc}</p>
            <div className="feature-card-games-box" aria-hidden="true">
              <div className="feature-card-games-marquees">
                <Marquee className="feature-card-games-marquee feature-card-games-marquee-row1" style={{ "--duration": "26s", "--gap": "7px" }}>
                  {featurePreviewPhotoRows[0].map((item, index) => (
                    <div key={`fp-row1-${index}`} className="feature-card-games-image-wrap">
                      <img src={item.src} alt="" className="feature-card-games-image" style={{ objectPosition: item.position }} />
                    </div>
                  ))}
                </Marquee>
                <Marquee className="feature-card-games-marquee feature-card-games-marquee-row2" reverse style={{ "--duration": "24s", "--gap": "7px" }}>
                  {featurePreviewPhotoRows[1].map((item, index) => (
                    <div key={`fp-row2-${index}`} className="feature-card-games-image-wrap">
                      <img src={item.src} alt="" className="feature-card-games-image" style={{ objectPosition: item.position }} />
                    </div>
                  ))}
                </Marquee>
                <Marquee className="feature-card-games-marquee feature-card-games-marquee-row3" style={{ "--duration": "30s", "--gap": "7px" }}>
                  {featurePreviewPhotoRows[2].map((item, index) => (
                    <div key={`fp-row3-${index}`} className="feature-card-games-image-wrap">
                      <img src={item.src} alt="" className="feature-card-games-image" style={{ objectPosition: item.position }} />
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="feature-card-games-fade-left" />
              <div className="feature-card-games-fade-right" />
            </div>
          </div>
          <div className="feature-preview-card feature-preview-card-cdkey">
            <h3 className="feature-card-title">{t.feature.platform.title}</h3>
            <p className="feature-card-desc">{t.feature.platform.desc}</p>
            <div className="feature-card-cdkey-boxes">
              <CdkeyConnectorTopLeftSvg />
              <CdkeyConnectorTopRightSvg />
              <CdkeyLinkLeftSvg />
              <CdkeyLinkRightSvg />
              <div className="feature-card-cdkey-box">
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tl" aria-hidden="true"></span>
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tr" aria-hidden="true"></span>
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-bl" aria-hidden="true"></span>
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-br" aria-hidden="true"></span>
                <div className="feature-card-cdkey-inner-box">
                  <CdkeyIconEnSvg />
                </div>
              </div>
              <div className="feature-card-cdkey-box">
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tl" aria-hidden="true"></span>
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tr" aria-hidden="true"></span>
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-bl" aria-hidden="true"></span>
                <span className="feature-card-cdkey-dot feature-card-cdkey-dot-br" aria-hidden="true"></span>
                <div className="feature-card-cdkey-inner-box">
                  <CdkeyIconZhSvg />
                </div>
              </div>
              <CdkeyConnectorBottomLeftSvg />
              <CdkeyConnectorBottomRightSvg />
            </div>
          </div>
        </div>
        <section className="faq-section">
          <h2 className="faq-title">{t.faq.title}</h2>
          <div className="faq-list">
            {t.faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index
              return (
                <article key={index} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="faq-item-trigger"
                    type="button"
                    onClick={() => onToggleFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-item-icon" aria-hidden="true">
                      {isOpen ? (
                        <FaqChevronUpIcon />
                      ) : (
                        <FaqChevronDownIcon />
                      )}
                    </span>
                    <span className="faq-item-question">{item.question}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-item-content">
                      <p className="faq-item-answer">{renderFaqAnswer(item)}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
          <div className="faq-bottom-logo">
            <img src="/logo2.png" alt={t.faq.logoAlt} className="faq-bottom-logo-image" />
            <p className="faq-bottom-logo-text">{t.faq.logoText}</p>
          </div>
          <div className="faq-bottom-headline">
            <HeroHeadlineBlock
              enText={t.faq.headline.en}
              zhText={t.faq.headline.zh}
              subtitle={t.faq.headline.subtitle}
              showDownloadButton
              onDownload={onOpenDownload}
            />
          </div>
          <div className="faq-bottom-panel">
            <LaserFlow
              className="faq-bottom-panel-laser"
              color="#B2FCFF"
              horizontalSizing={1.6}
              verticalSizing={3.7}
              horizontalBeamOffset={0}
              verticalBeamOffset={-0.5}
              wispDensity={3.9}
              wispSpeed={40}
              wispIntensity={5}
              flowSpeed={0.77}
              flowStrength={0.4}
              fogIntensity={0.75}
              fogScale={0.3}
              fogFallSpeed={0.6}
              decay={1.1}
              falloffStart={1.2}
            />
            <p className="faq-bottom-panel-copyright">{faqFooter.copyright}</p>
            <div className="faq-bottom-panel-footer">
              <div className="faq-bottom-panel-footer-row">
                {faqFooter.filings.map((filing, index) => (
                  <div key={filing.label} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    {filing.showIcon && (
                      <img src="/wenhuajingying 1.png" alt="" className="faq-bottom-panel-footer-icon" />
                    )}
                    <a
                      href={filingLinks[filing.linkKey]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {filing.label}
                    </a>
                    {index < faqFooter.filings.length - 1 && <span className="faq-bottom-panel-footer-sep" />}
                  </div>
                ))}
              </div>
              <div className="faq-bottom-panel-footer-row">
                <span>{faqFooter.company}</span>
                <span className="faq-bottom-panel-footer-sep" />
                <span>{faqFooter.address}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
