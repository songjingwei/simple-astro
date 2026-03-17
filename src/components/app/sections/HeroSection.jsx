import { useEffect, useRef, useState } from "react"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { CometCard } from "@/components/ui/comet-card"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { FlipNumber } from "@/components/app/FlipNumber"
import { UserPopupCard } from "@/components/app/UserPopupCard"
import { AppleIcon } from "@/components/app/icons"
import {
  firstRowUsers,
  gameCovers,
  secondRowUsers,
} from "@/components/app/constants"
import pageText from "@/components/app/page-text.json"
import {
  ShowcaseAppleOutlineSvg,
  VideoPlayBtnBgSvg,
  VideoPlayIconSvg,
} from "@/components/app/AppPageSectionSvgs"
import { HeroHeadlineBlock } from "@/components/app/HeroHeadlineBlock"

export function HeroSection({ onOpenDownload }) {
  const VIDEO_MODAL_CLOSE_MS = 280
  const [isVideoModalMounted, setIsVideoModalMounted] = useState(false)
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false)
  const modalVideoRef = useRef(null)
  const closeTimerRef = useRef(null)
  const heroVideoSrc = "https://www.w3schools.com/html/mov_bbb.mp4"
  const heroVideoPoster = "/source_image.png"

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
                aria-label="播放视频"
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
              <div className="showcase-box-large-media">
                <img
                  className="showcase-box-large-image"
                  src="/hero-showcase-right.png"
                  alt="多设备游戏展示"
                />
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
                  <FlipNumber className="steam-hours-value" value={pageText.steam.cards.value} />
                </div>
              </div>
              <span className="steam-data-card-label">{pageText.steam.cards.valueLabel}</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-left">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <FlipNumber className="steam-hours-value" value={pageText.steam.cards.hoursValue} />
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
            aria-label="视频播放弹窗"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={closeVideoModal}
              aria-label="关闭视频弹窗"
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
