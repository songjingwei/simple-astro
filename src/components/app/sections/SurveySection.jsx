import { SparklesCore } from "@/components/ui/sparkles"
import pageText from "@/components/app/page-text.json"
import {
  SurveyButtonBackgroundSvg,
  SurveyButtonSparkleSvg,
  SurveyGlowSvg,
} from "@/components/app/AppPageSectionSvgs"

export function SurveySection() {
  return (
    <section className="survey-section">
      <h2 className="survey-title">{pageText.survey.title}</h2>
      <p className="survey-desc">{pageText.survey.descPrefix}<span className="survey-desc-bold">{pageText.survey.descHighlight}</span><br />{pageText.survey.descSuffix}</p>
      <div className="survey-btn">
        <SurveyButtonBackgroundSvg />
        <span className="survey-btn-text">
          <SurveyButtonSparkleSvg />
          {pageText.survey.button}
        </span>
      </div>
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
