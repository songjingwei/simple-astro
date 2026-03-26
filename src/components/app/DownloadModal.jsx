import {
  AppleIcon,
  BrandIcon,
  BrandTextIcon,
  ModalCloseIcon,
  ModalCommunityIcon,
  ModalFeatureCheckIcon,
  ModalFeatureChipIcon,
  ModalFeatureGamepadIcon,
} from "@/components/app/icons"
import { useI18n } from "@/i18n/context"

export function DownloadModal({ onClose }) {
  const { t, locale } = useI18n()
  const dm = t.downloadModal
  const downloadUrl = t.downloadUrl
  const communityUrl = t.communityUrl

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={dm.closeLabel}>
          <ModalCloseIcon />
        </button>

        <div className="modal-header">
          <div className="modal-brand">
            <BrandIcon />
            <BrandTextIcon locale={locale} />
          </div>
          <p className="modal-tagline">{dm.tagline}</p>
        </div>

        <div className="modal-version-badge">
          <span className="modal-version-dot" />
          {dm.versionBadge}
        </div>

        <div className="modal-main-action">
          <a
            href={downloadUrl}
            className="modal-download-btn"
          >
            <AppleIcon />
            <span>{dm.downloadBtn}</span>
          </a>
          <p className="modal-system-req">{dm.systemReq}</p>
        </div>

        <div className="modal-divider" />

        <div className="modal-info-grid">
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.versionLabel}</span>
            <span className="modal-info-value">Beta 0.1.0</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.fileSizeLabel}</span>
            <span className="modal-info-value">{dm.fileSizeValue}</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.updateDateLabel}</span>
            <span className="modal-info-value">{dm.updateDateValue}</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.systemReqLabel}</span>
            <span className="modal-info-value">macOS 13 Ventura+</span>
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-community">
          <p className="modal-community-title">{dm.communityTitle}</p>
          <p className="modal-community-desc">
            {dm.communityDesc}
          </p>
          <a href={communityUrl} target="_blank" rel="noopener noreferrer" className="modal-community-btn">
            <ModalCommunityIcon />
            {dm.communityBtn}
          </a>
        </div>

        <div className="modal-features">
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureCheckIcon />
            </div>
            <div>
              <p className="modal-feature-title">{dm.featureGames}</p>
              <p className="modal-feature-desc">{dm.featureGamesDesc}</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureChipIcon />
            </div>
            <div>
              <p className="modal-feature-title">{dm.featureSilicon}</p>
              <p className="modal-feature-desc">{dm.featureSiliconDesc}</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureGamepadIcon />
            </div>
            <div>
              <p className="modal-feature-title">{dm.featureGamepad}</p>
              <p className="modal-feature-desc">{dm.featureGamepadDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
