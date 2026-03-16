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

export function DownloadModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <ModalCloseIcon />
        </button>

        <div className="modal-header">
          <div className="modal-brand">
            <BrandIcon />
            <BrandTextIcon />
          </div>
          <p className="modal-tagline">Mac 也可以是游戏机</p>
        </div>

        <div className="modal-version-badge">
          <span className="modal-version-dot" />
          内测版本 Beta 0.1.0
        </div>

        <div className="modal-main-action">
          <a
            href="#"
            className="modal-download-btn"
            onClick={(e) => e.preventDefault()}
          >
            <AppleIcon />
            <span>立即下载 for macOS</span>
          </a>
          <p className="modal-system-req">仅支持 Mac M 系列芯片 · macOS 13+</p>
        </div>

        <div className="modal-divider" />

        <div className="modal-info-grid">
          <div className="modal-info-item">
            <span className="modal-info-label">版本号</span>
            <span className="modal-info-value">Beta 0.1.0</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">文件大小</span>
            <span className="modal-info-value">约 128 MB</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">更新日期</span>
            <span className="modal-info-value">2026 年 3 月</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">系统要求</span>
            <span className="modal-info-value">macOS 13 Ventura+</span>
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-community">
          <p className="modal-community-title">加入内测社群</p>
          <p className="modal-community-desc">
            与数千位内测用户一起，第一时间体验新功能，参与反馈共建
          </p>
          <button className="modal-community-btn">
            <ModalCommunityIcon />
            加入社群
          </button>
        </div>

        <div className="modal-features">
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureCheckIcon />
            </div>
            <div>
              <p className="modal-feature-title">海量游戏库</p>
              <p className="modal-feature-desc">支持数百款 Mac 适配游戏，持续扩充</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureChipIcon />
            </div>
            <div>
              <p className="modal-feature-title">Apple Silicon 原生优化</p>
              <p className="modal-feature-desc">M 系列芯片深度适配，低延迟高帧率</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureGamepadIcon />
            </div>
            <div>
              <p className="modal-feature-title">游戏手柄支持</p>
              <p className="modal-feature-desc">兼容主流手柄设备，即插即用</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
