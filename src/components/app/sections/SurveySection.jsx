import { SparklesCore } from "@/components/ui/sparkles"
import { useI18n } from "@/i18n/context"
import {
  SurveyButtonBackgroundSvg,
  SurveyButtonSparkleSvg,
  SurveyGlowSvg,
} from "@/components/app/AppPageSectionSvgs"

export function SurveySection() {
  const { t } = useI18n()

  return (
    <section className="survey-section" id="survey-feedback">
      <h2 className="survey-title">{t.survey.title}</h2>
      <p className="survey-desc">{t.survey.descPrefix}<span className="survey-desc-bold">{t.survey.descHighlight}</span><br />{t.survey.descSuffix}</p>
      <a className="survey-btn" href="https://gamesirworld.feishu.cn/base/Oksyb0sBGaxM7esjwi1cLc6pnwh?table=tblYK0E8bAcNiFQg&view=vewoiUIlNk" target="_blank" rel="noopener noreferrer">
        <SurveyButtonBackgroundSvg />
        <span className="survey-btn-text">
          <SurveyButtonSparkleSvg />
          {t.survey.button}
        </span>
      </a>
      <div className="survey-glow-wrapper">
        <div className="survey-particles">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.8}
            particleDensity={420}
            className="survey-particles-canvas"
            particleColor="#F2FDFF"
          />
        </div>
        <SurveyGlowSvg />
      </div>
    </section>
  )
}
