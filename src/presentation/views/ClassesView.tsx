import type { ComponentType } from 'react'

type Language = 'es' | 'en'

type ClassLink = {
  url: string
  label?: string
}

type ClassItem = {
  name?: string
  image?: string
  description?: string
  links?: readonly ClassLink[]
}

type ClassesData = {
  title: string
  lead?: string
  items: readonly ClassItem[]
}

type ClassesViewProps = {
  ViewHeader: ComponentType
  classesData: ClassesData
  language: Language
}

export const ClassesView = ({
  ViewHeader,
  classesData,
  language,
}: ClassesViewProps) => {
  return (
    <div className="route-view">
      <ViewHeader />
      <section className="section reveal">
        <div className="section-header">
          <h2>{classesData.title}</h2>
          {classesData.lead ? <p>{classesData.lead}</p> : null}
        </div>
        {classesData.items.length > 0 ? (
          <div className="class-accordion">
            {classesData.items.map((item, index) => {
              const classImage = item.image?.trim()
              const className = item.name || `${language === 'es' ? 'Clase' : 'Class'} ${index + 1}`
              return (
                <details className="class-item" key={`${className}-${index}`}>
                  <summary className="class-item__summary">
                    <span>{className}</span>
                    <span className="class-item__chevron">▾</span>
                  </summary>
                  <div className="class-item__body">
                    {classImage ? (
                      <div
                        className="class-media"
                        style={{
                          backgroundImage: `url(${classImage})`,
                        }}
                      />
                    ) : null}
                    {item.description ? <p>{item.description}</p> : null}
                    {item.links && item.links.length > 0 ? (
                      <div className="class-links">
                        <h4>{language === 'es' ? 'Sets sugeridos' : 'Suggested sets'}</h4>
                        {item.links.map((link, linkIndex) => (
                          <a key={`${className}-link-${linkIndex}`} href={link.url} target="_blank" rel="noreferrer">
                            {link.label?.trim() ? link.label : link.url}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </details>
              )
            })}
          </div>
        ) : (
          <div className="callout">
            <p>
              {language === 'es'
                ? 'Aún no hay clases cargadas. Agrégalas desde el panel Admin en la sección Clases.'
                : 'No classes configured yet. Add them from Admin in the Classes section.'}
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
