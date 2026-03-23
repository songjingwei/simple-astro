import { SparklesCore } from "@/components/ui/sparkles"
import pageText from "@/components/app/page-text.json"
import {
  SurveyButtonBackgroundSvg,
  SurveyButtonSparkleSvg,
  SurveyGlowSvg,
} from "@/components/app/AppPageSectionSvgs"

export function SurveySection() {
  return (
    <section className="survey-section" id="survey-feedback">
      <h2 className="survey-title">{pageText.survey.title}</h2>
      <p className="survey-desc">{pageText.survey.descPrefix}<span className="survey-desc-bold">{pageText.survey.descHighlight}</span><br />{pageText.survey.descSuffix}</p>
      <a className="survey-btn" href="https://gamesirworld.feishu.cn/base/Oksyb0sBGaxM7esjwi1cLc6pnwh?table=tblYK0E8bAcNiFQg&view=vewoiUIlNk" target="_blank" rel="noopener noreferrer">
        <SurveyButtonBackgroundSvg />
        <span className="survey-btn-text">
          <SurveyButtonSparkleSvg />
          {pageText.survey.button}
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
