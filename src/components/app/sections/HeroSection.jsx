import { useState, useEffect, useRef } from "react"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { FlipNumber } from "@/components/app/FlipNumber"
import { UserPopupCard } from "@/components/app/UserPopupCard"
import { AppleIcon } from "@/components/app/icons"
import {
  firstRowUsers,
  secondRowUsers,
} from "@/components/app/constants"
import {
  ShowcaseAppleOutlineSvg,
} from "@/components/app/AppPageSectionSvgs"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"
import { useI18n } from "@/i18n/context"
import { useGameCovers } from "@/components/app/constants"

export function HeroSection({ onOpenDownload }) {
  const { t, locale } = useI18n()
  const gameCovers = useGameCovers()
  const [heroImgLoaded, setHeroImgLoaded] = useState(false)
  const heroImgRef = useRef(null)
  const heroImageSrc = locale === "en"
    ? "/MacBook-air2.png"
    : "/MacBook-air3.png"

  useEffect(() => {
    setHeroImgLoaded(false)
    const img = heroImgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setHeroImgLoaded(true)
    }
  }, [heroImageSrc])

  return (
    <>
      <section className="hero" id="version-intro">
        <h1 className="hero-title">{t.hero.title}</h1>
        <HeroHeadlineBlock
          enText={t.hero.headline.en}
          zhText={t.hero.headline.zh}
          subtitle={t.hero.headline.subtitle}
        />
        <div className="hero-actions">
          <button
            type="button"
            className="download-button-primary"
            onClick={onOpenDownload}
          >
            <AppleIcon />
            <span className="download-button-label">{t.hero.downloadButton}</span>
          </button>
          <a
            href={t.communityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button-secondary"
          >
            <span className="download-button-secondary-label">{t.hero.communityButton}</span>
          </a>
        </div>
        <p className="hero-caption">{t.hero.caption}</p>
        <div className="hero-showcase-outer">
          <ShowcaseSparkles />
          <div className="hero-showcase">
            <div className="hero-video-container">
              {!heroImgLoaded && <div className="hero-video-skeleton" />}
              <img
                ref={heroImgRef}
                className="hero-video"
                src={heroImageSrc}
                alt={t.hero.videoPlayLabel}
                onLoad={() => setHeroImgLoaded(true)}
                onError={() => setHeroImgLoaded(true)}
                style={{ visibility: heroImgLoaded ? "visible" : "hidden" }}
              />
            </div>
          </div>
        </div>
        <div className="showcase-content">
          <h2 className="showcase-title">{t.hero.showcase.title}</h2>
          <p className="showcase-subtitle">
            {t.hero.showcase.subtitle}
          </p>
          <div className="showcase-grid">
            <div className="showcase-box-anim">
              <div className="showcase-box showcase-box-small">
                <div className="showcase-box-icon">
                  <ShowcaseAppleOutlineSvg />
                  <div className="showcase-box-text">{t.hero.showcase.cardLabel}</div>
                </div>
              </div>
            </div>
            <div className="showcase-box-anim showcase-box-anim-delay">
              <div className="showcase-box showcase-box-large">
                <div className="showcase-box-large-media">
                  <img
                    className="showcase-box-large-image"
                    src={locale === "en" ? "/hero-showcase-right-en.png" : "/hero-showcase-right.png"}
                    alt={t.hero.showcaseImageAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="steam-management">
          <h2 className="steam-management-title">{t.steam.title}</h2>
          <p className="steam-management-subtitle">
            {t.steam.subtitle}
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
        <div className="steam-data-text">{t.steam.syncDataTitle}</div>
        <div className="steam-data-section">
          <img className="steam-data-bg" src="/Background.png" alt="" />
          <img className="steam-data-center-img" src="/logo2.png" alt="" />
          <div className="steam-data-grid">
            <div className="steam-data-card">
              <div className="game-covers-stack">
                <AnimatedTooltip items={gameCovers} autoPlay autoInterval={2500} />
              </div>
              <span className="steam-data-card-label">{t.steam.cards.countLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-right">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <FlipNumber className="steam-hours-value" value={t.steam.cards.value} counting />
                </div>
              </div>
              <span className="steam-data-card-label">{t.steam.cards.valueLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-left">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <FlipNumber className="steam-hours-value" value={t.steam.cards.hoursValue} counting />
                </div>
              </div>
              <span className="steam-data-card-label">{t.steam.cards.hoursLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-right">
            <div className="steam-data-card steam-data-card-cloud">
              <img className="steam-cloud-icon" src="/Group 2 (6).svg" alt="" />
              <span className="steam-data-card-label">{t.steam.cards.cloudLabel}</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
