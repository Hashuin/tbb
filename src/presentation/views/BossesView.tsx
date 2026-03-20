import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import type { InterestEntry } from '../../domain/interest/entities'

type BossItem = {
  id: number
  name: string
  mechanics: readonly string[]
  image?: string
  guideId?: string
}

type BossesData = {
  bosses: {
    title: string
    lead: string
    guideCta: string
    items: readonly BossItem[]
  }
  interests: {
    interested: string
  }
}

type DungeonRef = {
  id: string
}

type SectionRoutesShape = {
  guias: string
}

type BossesViewProps = {
  ViewHeader: ComponentType
  data: BossesData
  sectionRoutes: SectionRoutesShape
  mergedDungeonGuides: readonly DungeonRef[]
  interestByGuide: Map<string, InterestEntry[]>
  bossGuideById: Map<number, string>
}

export const BossesView = ({
  ViewHeader,
  data,
  sectionRoutes,
  mergedDungeonGuides,
  interestByGuide,
  bossGuideById,
}: BossesViewProps) => {
  return (
    <div className="route-view">
      <ViewHeader />
      <section className="section reveal">
        <div className="section-header">
          <h2>{data.bosses.title}</h2>
          <p>{data.bosses.lead}</p>
        </div>
        <div className="boss-grid">
          {data.bosses.items.map((boss) => {
            const bossGuideId = boss.guideId || bossGuideById.get(boss.id)
            const bossDungeonIndex = bossGuideId
              ? mergedDungeonGuides.findIndex((dungeon) => dungeon.id === bossGuideId)
              : -1
            const interested =
              bossDungeonIndex >= 0
                ? interestByGuide.get(String(bossDungeonIndex)) || []
                : []
            const hasGuideLink = Boolean(bossGuideId)
            const bossImage = boss.image?.trim()
              ? boss.image
              : `/wakassets/bossIllustrations/${boss.id}.png`

            const cardBody = (
              <article className="boss-card" key={boss.id}>
                <div
                  className="boss-media"
                  style={{
                    backgroundImage: `url(${bossImage})`,
                  }}
                >
                  <span className="boss-id">#{boss.id}</span>
                </div>
                <div className="boss-body">
                  <h3>{boss.name}</h3>
                  <ul>
                    {boss.mechanics.map((mechanic) => (
                      <li key={mechanic}>{mechanic}</li>
                    ))}
                  </ul>
                  {hasGuideLink ? <p className="boss-link-hint">{data.bosses.guideCta}</p> : null}
                  {interested.length > 0 && (
                    <div className="interest-summary">
                      <strong>
                        {interested.length} {data.interests.interested}
                      </strong>
                    </div>
                  )}
                </div>
              </article>
            )

            if (!hasGuideLink) {
              return cardBody
            }

            return (
              <Link className="boss-card-link" key={`boss-link-${boss.id}`} to={`${sectionRoutes.guias}/${bossGuideId}`}>
                {cardBody}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
