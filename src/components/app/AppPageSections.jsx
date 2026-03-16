import { useState, useRef } from "react"
import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { CometCard } from "@/components/ui/comet-card"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import LaserFlow from "@/components/LaserFlow"
import { DownloadModal } from "@/components/app/DownloadModal"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"
import { UserPopupCard } from "@/components/app/UserPopupCard"
import { AppleIcon, BrandIcon, BrandTextIcon } from "@/components/app/icons"
import {
  faqItems,
  filingLinks,
  featurePreviewPhotoRows,
  firstRowUsers,
  gameCovers,
  secondRowUsers,
} from "@/components/app/constants"
import pageText from "@/components/app/page-text.json"
import {
  CompatAvxIcon,
  CompatDinputIcon,
  CompatEnvIcon,
  CompatGamePathIcon,
  CompatLanguageIcon,
  CompatLaunchArgsIcon,
  CompatLayerIcon,
  CompatMetalHudIcon,
  CompatPlanIcon,
  CompatSyncModeIcon,
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
  ShowcaseAppleOutlineSvg,
  SurveyButtonBackgroundSvg,
  SurveyButtonSparkleSvg,
  SurveyGlowSvg,
  SurveyParticlesSvg,
  VideoPauseIconSvg,
  VideoPlayBtnBgSvg,
  VideoPlayIconSvg,
} from "@/components/app/AppPageSectionSvgs"

export function AppPageSections({
  appRef,
  showDownload,
  openFaqIndex,
  onOpenDownload,
  onCloseDownload,
  onToggleFaq,
}) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const renderFaqAnswer = (item) => {
    if (item.question !== "如何配置模拟器兼容性方案？") {
      return item.answer
    }

    const linkText = "配置专属兼容性方案的游戏名单持续更新中"
    const [before, after] = item.answer.split(linkText)
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
          {linkText}
        </a>
        {after}
      </>
    )
  }

  return (
    <main className="app" ref={appRef}>
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
      <section className="hero">
        <h1 className="hero-title">{pageText.hero.title}</h1>
        <HeroHeadlineBlock
          enText={pageText.hero.headline.en}
          zhText={pageText.hero.headline.zh}
          subtitle={pageText.hero.headline.subtitle}
        />
        <div className="hero-actions">
          <button
            type="button"
            className="download-button-primary"
            onClick={onOpenDownload}
          >
            <AppleIcon />
            <span className="download-button-label">{pageText.hero.downloadButton}</span>
          </button>
          <button type="button" className="download-button-secondary">
            <span className="download-button-secondary-label">{pageText.hero.communityButton}</span>
          </button>
        </div>
        <p className="hero-caption">{pageText.hero.caption}</p>
        <div className="hero-showcase-outer">
          <ShowcaseSparkles />
          <div className="hero-showcase">
          <div className="hero-video-container">
            <video
              ref={videoRef}
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <div className={`hero-video-play-btn ${isPlaying ? 'is-playing' : ''}`} onClick={togglePlay}>
              <div className="hero-video-play-btn-inner">
                <VideoPlayBtnBgSvg />
                <div className="hero-video-play-icon-wrapper">
                  {!isPlaying ? <VideoPlayIconSvg /> : <VideoPauseIconSvg />}
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        <div className="showcase-content">
          <h2 className="showcase-title">{pageText.hero.showcase.title}</h2>
          <p className="showcase-subtitle">
            {pageText.hero.showcase.subtitle}
          </p>
          <div className="showcase-grid">
            <CometCard className="showcase-box showcase-box-small">
              <div className="showcase-box-icon">
                <ShowcaseAppleOutlineSvg />
                <div className="showcase-box-text">{pageText.hero.showcase.cardLabel}</div>
              </div>
            </CometCard>
            <CometCard className="showcase-box showcase-box-large">
              <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute top-12 text-[#86868B] text-xl font-light tracking-widest">{pageText.hero.showcase.banner}</div>
                <div className="relative z-10 text-6xl font-bold text-white/10 select-none pointer-events-none">
                  {pageText.hero.showcase.bannerWord}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-[500px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />
                </div>
              </div>
            </CometCard>
          </div>
        </div>
        <div className="steam-management">
          <h2 className="steam-management-title">{pageText.steam.title}</h2>
          <p className="steam-management-subtitle">
            {pageText.steam.subtitle}
          </p>
        </div>
        <div className="user-popup-container">
          <Marquee style={{ "--duration": "60s", "--gap": "24px" }}>
            {firstRowUsers.map((user, j) => (
              <UserPopupCard key={`r1-${j}`} user={user} />
            ))}
          </Marquee>
          <Marquee reverse style={{ "--duration": "60s", "--gap": "24px" }}>
            {secondRowUsers.map((user, j) => (
              <UserPopupCard key={`r2-${j}`} user={user} />
            ))}
          </Marquee>
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
        </div>
        <div className="steam-data-text">{pageText.steam.syncDataTitle}</div>
        <div className="steam-data-section">
          <img className="steam-data-bg" src="/Background.png" alt="" />
          <img className="steam-data-center-img" src="/image 213.png" alt="" />
          <div className="steam-data-grid">
            <div className="steam-data-card">
              <div className="game-covers-stack">
                <AnimatedTooltip items={gameCovers} />
              </div>
              <span className="steam-data-card-label">{pageText.steam.cards.countLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-right">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <span className="steam-hours-value">{pageText.steam.cards.value}</span>
                </div>
              </div>
              <span className="steam-data-card-label">{pageText.steam.cards.valueLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-left">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <span className="steam-hours-value">{pageText.steam.cards.hoursValue}</span>
                </div>
              </div>
              <span className="steam-data-card-label">{pageText.steam.cards.hoursLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-right">
            <div className="steam-data-card steam-data-card-cloud">
              <img className="steam-cloud-icon" src="/Group 2 (6).svg" alt="" />
              <span className="steam-data-card-label">{pageText.steam.cards.cloudLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="compat-section">
        <h2 className="compat-title">{pageText.compat.title}</h2>
        <p className="compat-desc">{pageText.compat.desc}</p>
        <div className="compat-cards">
          <div className="compat-card">
            <h3 className="compat-card-title">{pageText.compat.leftCard.title}</h3>
            <p className="compat-card-desc">{pageText.compat.leftCard.desc}</p>
            <div className="compat-inner-box">
              <div className="compat-inner-box-content">
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <CompatMetalHudIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{pageText.compat.leftCard.metalHud.title}</span>
                  <span className="compat-setting-desc">{pageText.compat.leftCard.metalHud.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <CompatAvxIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{pageText.compat.leftCard.avx.title}</span>
                  <span className="compat-setting-desc">{pageText.compat.leftCard.avx.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <CompatEnvIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{pageText.compat.leftCard.env.title}</span>
                  <span className="compat-setting-desc">{pageText.compat.leftCard.env.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item compat-setting-item-last">
                <div className="compat-setting-row">
                  <span className="compat-setting-icon">
                    <CompatLaunchArgsIcon />
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">{pageText.compat.leftCard.launchArgs.title}</span>
                    <span className="compat-setting-desc">{pageText.compat.leftCard.launchArgs.desc}</span>
                  </div>
                </div>
                <div className="compat-setting-input">
                  <span className="compat-setting-input-text">{pageText.compat.leftCard.inputPlaceholder}</span>
                </div>
              </div>
              </div>
            </div>
            <div className="compat-inner-box-2">
              <div className="compat-inner-box-2-content">
              <div className="compat-setting-item compat-setting-item-img">
                <img className="compat-game-cover" src="/Rectangle 111.png" alt="" />
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <CompatGamePathIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{pageText.compat.leftCard.gamePath.title}</span>
                  <span className="compat-setting-desc">{pageText.compat.leftCard.gamePath.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <CompatLanguageIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{pageText.compat.leftCard.language.title}</span>
                  <span className="compat-setting-desc">{pageText.compat.leftCard.language.desc}</span>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="compat-card">
            <h3 className="compat-card-title">{pageText.compat.rightCard.title}</h3>
            <p className="compat-card-desc">{pageText.compat.rightCard.desc}</p>
            <div className="compat-inner-box-right">
              <div className="compat-inner-box-right-content">
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <CompatPlanIcon />
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">{pageText.compat.rightCard.plan.title}</span>
                    <span className="compat-setting-desc">{pageText.compat.rightCard.plan.desc}</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <CompatLayerIcon />
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">{pageText.compat.rightCard.layer.title}</span>
                    <span className="compat-setting-desc">{pageText.compat.rightCard.layer.desc}</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <CompatSyncModeIcon />
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">{pageText.compat.rightCard.syncMode.title}</span>
                    <span className="compat-setting-desc">{pageText.compat.rightCard.syncMode.desc}</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <CompatDinputIcon />
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">{pageText.compat.rightCard.dinput.title}</span>
                    <span className="compat-setting-desc">{pageText.compat.rightCard.dinput.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="survey-section">
        <h2 className="survey-title">{pageText.survey.title}</h2>
        <p className="survey-desc">{pageText.survey.descPrefix}<span className="survey-desc-bold">{pageText.survey.descHighlight}</span><br/>{pageText.survey.descSuffix}</p>
        <div className="survey-btn">
          <SurveyButtonBackgroundSvg />
          <span className="survey-btn-text">
            <SurveyButtonSparkleSvg />
            {pageText.survey.button}
          </span>
        </div>
        <div className="survey-glow-wrapper">
          <div className="survey-particles">
            <SurveyParticlesSvg />
          </div>
          <SurveyGlowSvg />
        </div>
      </section>

      <section className="feature-preview-section">
        <div className="feature-preview-glow-wrapper">
          <FeaturePreviewGlowSvg />
        </div>
        <div className="feature-preview-content">
          <h2 className="feature-preview-title">{pageText.feature.title}</h2>
          <p className="feature-preview-desc">{pageText.feature.desc}</p>
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
              <h3 className="feature-card-title">{pageText.feature.epic.title}</h3>
              <p className="feature-card-desc">{pageText.feature.epic.desc}</p>
            </div>
            <div className="feature-preview-card feature-preview-card-games">
              <h3 className="feature-card-title">{pageText.feature.games.title}</h3>
              <p className="feature-card-desc">{pageText.feature.games.desc}</p>
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
              <h3 className="feature-card-title">{pageText.feature.platform.title}</h3>
              <p className="feature-card-desc">{pageText.feature.platform.desc}</p>
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
            <h2 className="faq-title">{pageText.faq.title}</h2>
            <p className="faq-subtitle">{pageText.faq.subtitle}</p>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <article key={item.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
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
              <img src="/image 202.png" alt={pageText.faq.logoAlt} className="faq-bottom-logo-image" />
              <p className="faq-bottom-logo-text">{pageText.faq.logoText}</p>
            </div>
            <div className="faq-bottom-headline">
              <HeroHeadlineBlock
                enText={pageText.faq.headline.en}
                zhText={pageText.faq.headline.zh}
                subtitle={pageText.faq.headline.subtitle}
                showDownloadButton
                onDownload={onOpenDownload}
              />
              </div>
              <div className="faq-bottom-panel">
                <LaserFlow
                  className="faq-bottom-panel-laser"
                  color="#B2FCFF"
                  horizontalSizing={1.2}
                  verticalSizing={3.0}
                  horizontalBeamOffset={0}
                  verticalBeamOffset={-0.5}
                  wispDensity={0.6}
                  wispSpeed={10}
                  wispIntensity={4}
                  flowSpeed={0.25}
                  flowStrength={0.2}
                  fogIntensity={0.9}
                  fogScale={0.25}
                  fogFallSpeed={0.4}
                  decay={1.4}
                  falloffStart={1.5}
                />
                <p className="faq-bottom-panel-copyright">Copyright 2025 All Rights Reserved.</p>
                <div className="faq-bottom-panel-footer">
                  <div className="faq-bottom-panel-footer-row">
                    <img src="/wenhuajingying 1.png" alt="" className="faq-bottom-panel-footer-icon" />
                    <a
                      href={filingLinks.wenwangwen}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      粤网文[2016]575-1561号
                    </a>
                    <span className="faq-bottom-panel-footer-sep" />
                    <a
                      href={filingLinks.icp}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      粤ICP备10217906号-14
                    </a>
                    <span className="faq-bottom-panel-footer-sep" />
                    <a
                      href={filingLinks.gongan}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      公安备案号44010602003042
                    </a>
                  </div>
                  <div className="faq-bottom-panel-footer-row">
                    <span>广州小鸡快跑网络科技有限公司</span>
                    <span className="faq-bottom-panel-footer-sep" />
                    <span>地址：广州市天河区员村西街2号大院19号1001、1003房</span>
                  </div>
                </div>
              </div>
          </section>
        </div>
      </section>
    </main>
  )
}
