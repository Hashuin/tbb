import type { ComponentType } from 'react'

type StelesGuide = {
  id: string
  name: string
  keyRequired: string
  appliesTo: readonly string[]
  overview: readonly string[]
  dungeonEffects: readonly string[]
  tips: readonly string[]
  table: {
    actionHeader: string
    effectHeader: string
    rows: readonly {
      action: string
      effect: string
    }[]
  }
}

type StelesHubData = {
  title: string
  lead: string
  guides: readonly StelesGuide[]
}

type StelesViewProps = {
  ViewHeader: ComponentType
  stelesHubData: StelesHubData
}

export const StelesView = ({ ViewHeader, stelesHubData }: StelesViewProps) => {
  return (
    <div className="route-view">
      <ViewHeader />
      <section className="section reveal">
        <div className="section-header">
          <h2>{stelesHubData.title}</h2>
          <p>{stelesHubData.lead}</p>
        </div>
        <div className="boss-grid">
          {stelesHubData.guides.map((guide) => (
            <article className="boss-card" key={guide.id}>
              <div className="boss-body">
                <h3>{guide.name}</h3>
                <p><strong>Key:</strong> {guide.keyRequired}</p>
                <p><strong>Aplica en:</strong> {guide.appliesTo.join(', ')}</p>

                <ul>
                  {guide.overview.map((item) => (
                    <li key={`${guide.id}-${item}`}>{item}</li>
                  ))}
                </ul>

                {guide.table.rows.length > 0 ? (
                  <div className="dungeon-block" style={{ marginTop: 12 }}>
                    <h5>{guide.name} · Referencia</h5>
                    <table className="steles-table">
                      <thead>
                        <tr>
                          <th>{guide.table.actionHeader}</th>
                          <th>{guide.table.effectHeader}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {guide.table.rows.map((row) => (
                          <tr key={`${guide.id}-${row.action}`}>
                            <td>{row.action}</td>
                            <td>{row.effect}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {guide.dungeonEffects.length > 0 ? (
                  <>
                    <h5 style={{ marginTop: 14 }}>Efectos por dungeon</h5>
                    <ul>
                      {guide.dungeonEffects.map((item) => (
                        <li key={`${guide.id}-effect-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {guide.tips.length > 0 ? (
                  <>
                    <h5 style={{ marginTop: 14 }}>Tips</h5>
                    <ul>
                      {guide.tips.map((item) => (
                        <li key={`${guide.id}-tip-${item}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
