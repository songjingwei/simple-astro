import { useEffect, useRef, useState } from "react"
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
  VideoPlayBtnBgSvg,
  VideoPlayIconSvg,
} from "@/components/app/AppPageSectionSvgs"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"
import { useI18n } from "@/i18n/context"
import { useGameCovers } from "@/components/app/constants"

export function HeroSection({ onOpenDownload }) {
  const { t } = useI18n()
  const VIDEO_MODAL_CLOSE_MS = 280
  const [isVideoModalMounted, setIsVideoModalMounted] = useState(false)
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false)
  const modalVideoRef = useRef(null)
  const closeTimerRef = useRef(null)
  const heroVideoSrc = "https://www.w3schools.com/html/mov_bbb.mp4"
  const heroVideoPoster = "/source_image.png"
  const gameCovers = useGameCovers()

  const openVideoModal = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setIsVideoModalMounted(true)
    requestAnimationFrame(() => {
      setIsVideoModalVisible(true)
    })
  }

  const closeVideoModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
    setIsVideoModalVisible(false)
    closeTimerRef.current = setTimeout(() => {
      setIsVideoModalMounted(false)
    }, VIDEO_MODAL_CLOSE_MS)
  }

  useEffect(() => {
    if (!isVideoModalVisible || !modalVideoRef.current) {
      return
    }

    modalVideoRef.current.currentTime = 0
    modalVideoRef.current.play().catch(() => {})

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideoModal()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isVideoModalVisible])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

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
            href="https://qun.qq.com/universal-share/share?ac=1&authKey=Rp3w75Bd6K7%2BZ8nWgg8IQrS7rhur1qyXbeehPiQLi8YimvBWPSNLGuq06BXzCAwk&busi_data=eyJncm91cENvZGUiOiIxMDc5MjQ2NTQzIiwidG9rZW4iOiJmWHY5U0NXcWNDZno1dW1xQ1NzeUtPN0o3Rk1NbURSNFZlVjN2Y25MdEUvSnNoQUxRMHlzWWMwZmJGaENZcEg1IiwidWluIjoiMzE1NDc1NTY5NCJ9&data=oLzlFkd2CpiGI5G2ZICajN9SjUWc5etc9Tk7VPetS-1Zz3sRa9Rz9Nf8H5QiHQCoQI-lHvEudh78RzBStOF6Ag&svctype=4&tempid=h5_group_info"
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
              <video
                className="hero-video"
                muted
                playsInline
                preload="metadata"
                poster={heroVideoPoster}
              />
              <button
                type="button"
                className="hero-video-play-btn"
                onClick={openVideoModal}
                aria-label={t.hero.videoPlayLabel}
              >
                <span className="hero-video-play-btn-inner">
                  <VideoPlayBtnBgSvg />
                  <span className="hero-video-play-icon-wrapper">
                    <VideoPlayIconSvg />
                  </span>
                </span>
              </button>
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
                    src="/hero-showcase-right.png"
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

      {isVideoModalMounted && (
        <div
          className={`video-modal ${isVideoModalVisible ? "is-open" : "is-closing"}`}
          role="presentation"
          onClick={closeVideoModal}
        >
          <div
            className={`video-modal-dialog ${isVideoModalVisible ? "is-open" : "is-closing"}`}
            role="dialog"
            aria-modal="true"
            aria-label={t.hero.videoModalLabel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={closeVideoModal}
              aria-label={t.hero.videoCloseLabel}
            >
              ×
            </button>
            <video
              ref={modalVideoRef}
              className="video-modal-player"
              controls
              playsInline
              src={heroVideoSrc}
            />
          </div>
        </div>
      )}
    </>
  )
}
