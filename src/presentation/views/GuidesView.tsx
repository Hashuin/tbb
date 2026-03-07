import type { ComponentType, ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import type { InterestEntry } from '../../domain/interest/entities'

type Language = 'es' | 'en'
type LocalizedText = unknown

type GuideSummary = {
  id: string
  name: LocalizedText
  subtitle?: LocalizedText
  levelRange?: LocalizedText
  summary?: readonly LocalizedText[]
}

type GuidesData = {
  guides: {
    title: string
    lead: string
    steps: readonly string[]
    dungeonTitle: string
  }
  interests: {
    needHelp: string
  }
}

type SectionRoutesShape = {
  guias: string
}

type BaseProps<TDungeon extends GuideSummary> = {
  ViewHeader: ComponentType
  data: GuidesData
  language: Language
  mergedDungeonGuides: readonly TDungeon[]
  interestByGuide: Map<string, InterestEntry[]>
  getText: (value: unknown, language: Language) => string
  sectionRoutes: SectionRoutesShape
}

type GuidesIndexViewProps<TDungeon extends GuideSummary> = BaseProps<TDungeon>

export const GuidesIndexView = <TDungeon extends GuideSummary>({
  ViewHeader,
  data,
  language,
  mergedDungeonGuides,
  interestByGuide,
  getText,
  sectionRoutes,
}: GuidesIndexViewProps<TDungeon>) => {
  return (
    <div className="route-view">
      <ViewHeader />
      <section className="section reveal">
        <div className="section-header">
          <h2>{data.guides.title}</h2>
          <p>{data.guides.lead}</p>
        </div>
        <div className="steps">
        </div>
      </section>
      {mergedDungeonGuides.length > 0 ? (
        <section className="section reveal">
          <div className="section-header">
            <h2>{data.guides.dungeonTitle}</h2>
            <p>
              {language === 'es'
                ? 'Selecciona una guia para verla en una vista dedicada.'
                : 'Select a guide to open it in a dedicated view.'}
            </p>
          </div>
          <div className="dungeon-grid">
            {mergedDungeonGuides.map((dungeon, dungeonIndex) => {
              const interested = interestByGuide.get(String(dungeonIndex)) || []

              return (
                <article className="dungeon-card" key={dungeon.id}>
                  <header className="dungeon-header">
                    <div>
                      <h3>{getText(dungeon.name, language)}</h3>
                      {dungeon.subtitle ? <p>{getText(dungeon.subtitle, language)}</p> : null}
                    </div>
                    {dungeon.levelRange ? (
                      <span className="dungeon-pill">{getText(dungeon.levelRange, language)}</span>
                    ) : null}
                  </header>
                  <ul className="dungeon-summary">
                    {Array.isArray(dungeon.summary) && dungeon.summary.slice(0, 2).map((item) => {
                      const text = getText(item, language)
                      return <li key={String(text).slice(0, 50)}>{text}</li>
                    })}
                  </ul>
                  {interested.length > 0 ? (
                    <div className="interest-summary">
                      <strong>
                        {interested.length} {data.interests.needHelp}
                      </strong>
                    </div>
                  ) : null}
                  <div className="guide-index-actions">
                    <Link className="button small" to={`${sectionRoutes.guias}/${dungeon.id}`}>
                      {language === 'es' ? 'Abrir guia completa' : 'Open full guide'}
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}

type GuideDetailRouteViewProps<TDungeon extends GuideSummary> = Omit<BaseProps<TDungeon>, 'data'> & {
  dungeonLead: string
  routeKey: string
  renderDungeonGuideDetails: (dungeon: TDungeon, interested: InterestEntry[]) => ReactNode
}

export const GuideDetailRouteView = <TDungeon extends GuideSummary>({
  ViewHeader,
  language,
  mergedDungeonGuides,
  interestByGuide,
  getText,
  sectionRoutes,
  dungeonLead,
  routeKey,
  renderDungeonGuideDetails,
}: GuideDetailRouteViewProps<TDungeon>) => {
  const { guideId } = useParams<{ guideId: string }>()
  const dungeonIndex = mergedDungeonGuides.findIndex((dungeon) => dungeon.id === guideId)

  if (dungeonIndex === -1) {
    return <Navigate to={sectionRoutes.guias} replace />
  }

  const dungeon = mergedDungeonGuides[dungeonIndex]
  const interested = interestByGuide.get(String(dungeonIndex)) || []

  return (
    <div className="route-view" key={routeKey}>
      <ViewHeader />
      <section className="section reveal">
        <div className="section-header">
          <h2>{getText(dungeon.name, language)}</h2>
          <p>{dungeonLead}</p>
          <Link className="ghost small" to={sectionRoutes.guias}>
            {language === 'es' ? 'Volver al listado de guias' : 'Back to guides list'}
          </Link>
        </div>
        {renderDungeonGuideDetails(dungeon, interested)}
      </section>
    </div>
  )
}
