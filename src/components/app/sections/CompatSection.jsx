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
} from "@/components/app/AppPageSectionIcons"

export function CompatSection() {
  return (
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
  )
}
