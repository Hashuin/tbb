import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { isSupabaseConfigured, supabase } from './lib/supabase'
import type { InterestEntry } from './domain/interest/entities'
import { normalizeInterestEntry } from './domain/interest/entities'
import { loadInterests, saveInterest } from './application/interest/interestUseCases'
import { LocalStorageInterestCache } from './infrastructure/interest/LocalStorageInterestCache'
import { SupabaseInterestRepository } from './infrastructure/interest/SupabaseInterestRepository'
import { sectionRoutes } from './app/routing/sectionRoutes'
import { GuideDetailRouteView, GuidesIndexView } from './presentation/views/GuidesView'
import { RegisterView } from './presentation/views/RegisterView'
import { BossesView } from './presentation/views/BossesView'
import { ClassesView } from './presentation/views/ClassesView'
import { StelesView } from './presentation/views/StelesView'
import { AdminLogin, AdminPanel } from './presentation/views/AdminView'
import { content, dungeonGuides, uiLabels } from './content/appContent'
import {
  getClassImageFromBreed,
  getClassNameFromBreed,
  normalizeClassLinks,
} from './content/classBreeds'
import type {
  ClassSetLink,
  Language,
  MultiidiomaTrad,
} from './domain/content/types'
import type { ClassGender } from './content/classBreeds'

// Helper to get text in selected language
const getText = (
  value: unknown,
  lang: Language,
): string => {
  if (typeof value === 'string') return value
  if (typeof value === 'object' && value !== null) {
    const obj = value as { [key: string]: string }
    return obj?.[lang] || obj?.['fr'] || ''
  }
  return ''
}

function buildAmbientParticleSeed(count: number): Array<{
  x: string
  size: string
  drift: string
  delay: string
  duration: string
}> {
  return Array.from({ length: count }, (_, index) => {
    const x = `${Math.round((index * 61) % 100)}%`
    const size = `${2 + ((index * 13) % 5)}px`
    const drift = `${((index * 19) % 15) - 7}px`
    const delay = `${((index * 17) % 30) / 10}s`
    const duration = `${8 + ((index * 7) % 12)}s`
    return { x, size, drift, delay, duration }
  })
}

function buildAmbientFlashSeed(count: number): Array<{
  x: string
  y: string
  size: string
  delay: string
  duration: string
}> {
  return Array.from({ length: count }, (_, index) => {
    const x = `${Math.round((index * 47) % 100)}%`
    const y = `${Math.round((index * 29) % 100)}%`
    const size = `${10 + ((index * 9) % 22)}px`
    const delay = `${((index * 13) % 80) / 10}s`
    const duration = `${6 + ((index * 5) % 8)}s`
    return { x, y, size, delay, duration }
  })
}

// UI Labels translations for dungeon sections

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [interestGuides, setInterestGuides] = useState<number[]>([])
  const [interestEntries, setInterestEntries] = useState<InterestEntry[]>([])
  const [availabilityDays, setAvailabilityDays] = useState<string[]>([])
  const [availabilityStart, setAvailabilityStart] = useState('')
  const [availabilityEnd, setAvailabilityEnd] = useState('')
  const [customContent, setCustomContent] = useState<typeof content | null>(null)
  const [contentLoading, setContentLoading] = useState(true)
  const [adminAuthenticated, setAdminAuthenticated] = useState(false)
  const [particlesEnabled, setParticlesEnabled] = useState(true)
  const location = useLocation()
  const ambientParticles = useMemo(() => buildAmbientParticleSeed(34), [])
  const ambientFlashes = useMemo(() => buildAmbientFlashSeed(8), [])

  const interestCache = useMemo(() => new LocalStorageInterestCache(), [])
  const interestRepository = useMemo(() => {
    if (!isSupabaseConfigured || !supabase) {
      return undefined
    }

    return new SupabaseInterestRepository(supabase)
  }, [])
  
  // Check Supabase auth session
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setAdminAuthenticated(false)
      return
    }

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAdminAuthenticated(!!session)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAdminAuthenticated(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Detect scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAdminLogin = () => {
    setAdminAuthenticated(true)
  }

  const handleAdminLogout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut()
    }
    setAdminAuthenticated(false)
  }
  
  // Load custom content from Supabase (priority) or localStorage (fallback)
  useEffect(() => {
    const loadContent = async () => {
      setContentLoading(true)
      
      // Try Supabase first
      if (isSupabaseConfigured && supabase) {
        try {
          const { data, error } = await supabase
            .from('app_content')
            .select('content')
            .eq('id', 1)
            .single()
          
          if (!error && data?.content) {
            setCustomContent(data.content)
            // Cache in localStorage
            localStorage.setItem('custom_content', JSON.stringify(data.content))
            setContentLoading(false)
            return
          }
        } catch (e) {
          console.error('Failed to load content from Supabase:', e)
        }
      }
      
      // Fallback to localStorage
      const stored = localStorage.getItem('custom_content')
      if (stored) {
        try {
          setCustomContent(JSON.parse(stored))
        } catch (e) {
          console.error('Failed to parse local content:', e)
        }
      }
      
      setContentLoading(false)
    }
    
    loadContent()
  }, [])
  
  const activeContent = customContent || content
  const data = activeContent[language]
  const stelesHubData = data.stelesHub || content[language].stelesHub
  const planLeadText = data.plan.lead || content[language].plan.lead || data.objectives.lead
  const classesData = useMemo(() => {
    type ClassItemShape = {
      breed?: string
      gender?: ClassGender
      name?: string
      image?: string
      description?: string
      links?: readonly (string | ClassSetLink)[]
    }
    type ClassSectionShape = {
      title?: string
      lead?: string
      items?: readonly ClassItemShape[]
    }

    const baseClasses = content[language].classes as ClassSectionShape
    const customClasses = (data as unknown as { classes?: ClassSectionShape }).classes
    const classItems = (customClasses?.items || []).map((item) => ({
      breed: item.breed || '',
      gender: item.gender === 'female' ? 'female' : 'male',
      name: getClassNameFromBreed(item.breed, language, item.name || ''),
      image: getClassImageFromBreed(item.breed, item.gender === 'female' ? 'female' : 'male', item.image || ''),
      description: item.description || '',
      links: normalizeClassLinks(item.links).filter((link) => Boolean(link.url.trim())),
    }))

    if (classItems.length > 0 || customClasses?.title || customClasses?.lead) {
      return {
        title: customClasses?.title || baseClasses.title || '',
        lead: customClasses?.lead || baseClasses.lead || '',
        items: classItems,
      }
    }

    return {
      title: baseClasses.title || '',
      lead: baseClasses.lead || '',
      items: [],
    }
  }, [data, language])
  const mergedDungeonGuides = useMemo(() => {
    const current = data.guides.dungeons || []
    const currentById = new Map(current.map((dungeon) => [dungeon.id, dungeon]))

    const merged = dungeonGuides.map((baseDungeon) => {
      const customDungeon = currentById.get(baseDungeon.id)
      return customDungeon || baseDungeon
    })

    const extraCustom = current.filter(
      (customDungeon) => !merged.some((mergedDungeon) => mergedDungeon.id === customDungeon.id),
    )

    return [...merged, ...extraCustom]
  }, [data.guides.dungeons])
  const mergedBossItems = useMemo(() => {
    const baseItems = content[language].bosses?.items || []
    const currentItems = data.bosses?.items || []
    const currentById = new Map(currentItems.map((boss) => [boss.id, boss]))

    const merged = baseItems.map((baseBoss) => {
      const customBoss = currentById.get(baseBoss.id)
      return customBoss || baseBoss
    })

    const extraCustom = currentItems.filter(
      (customBoss) => !merged.some((mergedBoss) => mergedBoss.id === customBoss.id),
    )

    return [...merged, ...extraCustom]
  }, [content, data.bosses?.items, language])
  const bossesViewData = useMemo(
    () => ({
      ...data,
      bosses: {
        ...data.bosses,
        items: mergedBossItems,
      },
    }),
    [data, mergedBossItems],
  )
  const isAdminRoute = location.pathname === '/admin'
  
  // Set dark theme on mount
  useEffect(() => {
    document.documentElement.dataset.theme = 'dark'
  }, [])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ui_particles_enabled')
      if (stored !== null) {
        setParticlesEnabled(stored === '1')
      }
    } catch {
      // Ignore storage read failures and keep default setting.
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('ui_particles_enabled', particlesEnabled ? '1' : '0')
    } catch {
      // Ignore storage write failures.
    }
  }, [particlesEnabled])

  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!navOpen) {
      document.body.classList.remove('mobile-nav-open')
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.classList.add('mobile-nav-open')
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.classList.remove('mobile-nav-open')
      document.body.style.overflow = previousOverflow
    }
  }, [navOpen])

  useEffect(() => {
    if (location.pathname !== sectionRoutes.guias || !location.hash) return

    const id = location.hash.replace('#', '')
    requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }, [location.pathname, location.hash, mergedDungeonGuides.length])

  const resolvedNav = useMemo(() => {
    const hiddenNavIds = new Set(['objetivo', 'resumen'])
    const normalizedNav = data.nav.map((item) => {
      const normalizedId = String(item.id) === 'actividades' ? 'clases' : item.id
      const normalizedLabel =
        normalizedId === 'clases'
          ? language === 'es'
            ? 'Clases'
            : 'Classes'
          : item.label

      return {
        ...item,
        id: normalizedId,
        label: normalizedLabel,
      }
    })
    const filteredNav = normalizedNav.filter((item) => !hiddenNavIds.has(String(item.id)))

    if (filteredNav.some((item) => item.id === 'estelas')) {
      return filteredNav
    }

    const insertAfter = filteredNav.findIndex((item) => item.id === 'guias')
    const navCopy = [...filteredNav]
    const estelasLabel = language === 'es' ? 'Estelas' : 'Steles'

    if (insertAfter === -1) {
      navCopy.push({ id: 'estelas', label: estelasLabel })
    } else {
      navCopy.splice(insertAfter + 1, 0, { id: 'estelas', label: estelasLabel })
    }

    return navCopy
  }, [data.nav, language])

  const currentSection = useMemo(() => {
    if (location.pathname.startsWith(`${sectionRoutes.guias}/`)) {
      return 'guias'
    }

    const match = Object.entries(sectionRoutes).find(
      ([, path]) => path === location.pathname,
    )
    return match ? match[0] : 'inicio'
  }, [location.pathname])

  const currentLabel = useMemo(() => {
    return resolvedNav.find((item) => item.id === currentSection)?.label ?? resolvedNav[0].label
  }, [currentSection, resolvedNav])

  const registerLabel = useMemo(() => {
    return resolvedNav.find((item) => item.id === 'registro')?.label ?? 'Registro'
  }, [resolvedNav])

  const bossGuideById = useMemo(
    () => new Map<number, string>([
      [180, 'ravageurs'],
      [176, 'phytomorphes'],
      [177, 'vaciantes'],
      [178, 'demhorribles'],
      [179, 'egares'],
      [187, 'poisseux-abyssaux'],
      [188, 'steamers'],
      [197, 'ferociraptor'],
      [198, 'primount'],
      [199, 'starvannah'],
      [200, 'bworkana-clan'],
      [201, 'nox-machines'],
      [202, 'timeless-theater'],
      [203, 'heart-of-nox-clock'],
    ]),
    [],
  )

  const interestByGuide = useMemo(() => {
    const map = new Map<string, InterestEntry[]>()
    interestEntries.forEach((entry) => {
      entry.interest_guide_ids?.forEach((id) => {
        const key = String(id)
        if (!map.has(key)) {
          map.set(key, [])
        }
        map.get(key)?.push(entry)
      })
    })
    return map
  }, [interestEntries])

  const gearRequests = useMemo(() => {
    return interestEntries.flatMap((entry) =>
      (entry.item_requests ?? []).map((request) => ({
        entry,
        request,
      })),
    )
  }, [interestEntries])

  const currentSubtitle =
    currentSection === 'inicio'
      ? ''
      : data.viewSubtitles[currentSection as keyof typeof data.viewSubtitles] || ''
  const particlesLabel = language === 'es' ? 'Particulas' : 'Particles'
  const particlesToggleTitle =
    language === 'es'
      ? particlesEnabled
        ? 'Desactivar particulas'
        : 'Activar particulas'
      : particlesEnabled
        ? 'Disable particles'
        : 'Enable particles'

  const ViewHeader = () => (
    <div className="view-header">
      <div className="view-breadcrumb">
        <Link to={sectionRoutes.inicio}>{resolvedNav[0].label}</Link>
        <span className="view-separator">/</span>
        <span>{currentLabel}</span>
      </div>
      {currentSubtitle ? <p className="view-subtitle">{currentSubtitle}</p> : null}
    </div>
  )

  const loadInterestEntries = async () => {
    const entries = await loadInterests(interestCache, interestRepository)
    setInterestEntries(entries)
  }

  useEffect(() => {
    void loadInterestEntries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(false)
    setSubmitError(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const availabilityString = availabilityDays.length > 0 && availabilityStart && availabilityEnd
      ? `${availabilityDays.join(' ')} ${availabilityStart}-${availabilityEnd}`
      : ''

    const payload = {
      language,
      name: String(formData.get('name') || ''),
      role: String(formData.get('role') || ''),
      level: String(formData.get('level') || ''),
      availability: availabilityString,
      contact: String(formData.get('contact') || ''),
      build: String(formData.get('build') || ''),
      item_requests: [],
      interest_boss_ids: [],
      interest_activity_ids: [],
      interest_guide_ids: interestGuides,
      created_at: new Date().toISOString(),
    }

    const nextEntry = normalizeInterestEntry(payload)
    setInterestEntries((prev) => [nextEntry, ...prev])

    const saveResult = await saveInterest(nextEntry, interestCache, interestRepository)

    if (saveResult.remoteError) {
      const looksForbidden =
        saveResult.remoteError.code === '42501' ||
        /403|forbidden|permission|policy|rls/i.test(saveResult.remoteError.message || '')

      setSubmitError(
        looksForbidden
          ? language === 'es'
            ? 'Guardado localmente. Supabase rechazó la inserción (403/RLS). Revisa políticas de la tabla guild_interest.'
            : 'Saved locally. Supabase rejected the insert (403/RLS). Check guild_interest table policies.'
          : data.form.error,
      )
      setSubmitted(false)
      return
    }

    if (saveResult.remoteSynced) {
      await loadInterestEntries()
    }

    form.reset()
    setInterestGuides([])
    setAvailabilityDays([])
    setAvailabilityStart('')
    setAvailabilityEnd('')
    setSubmitted(true)
  }

  const toggleInterest = (
    value: number,
    setSelected: React.Dispatch<React.SetStateAction<number[]>>,
  ) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const renderEntryList = (entries: InterestEntry[]) => {
    const maxShow = 5
    const visibleEntries = entries.slice(0, maxShow)
    const remaining = entries.length - maxShow
    
    return (
      <ul className="interest-list">
        {visibleEntries.map((entry, index) => (
          <li key={`${entry.name}-${entry.created_at ?? index}`} className="interest-entry">
            <strong>{entry.name}</strong>
            <small>
              {entry.role}
              {entry.level ? ` · ${entry.level}` : ''}
              {entry.availability ? ` · ${entry.availability}` : ''}
            </small>
          </li>
        ))}
        {remaining > 0 && (
          <li className="interest-more">
            {data.interests.andMore.replace('{count}', remaining.toString())}
          </li>
        )}
      </ul>
    )
  }

  const renderGearRequests = () => (
    <ul className="interest-list">
      {gearRequests.map(({ entry, request }, index) => (
        <li key={`${entry.name}-${index}`} className="interest-entry">
          <strong>{entry.name}</strong>
          <small>
            {request.item}
            {request.slot ? ` · ${request.slot}` : ''}
            {request.priority ? ` · ${request.priority}` : ''}
            {request.source ? ` · ${request.source}` : ''}
          </small>
        </li>
      ))}
    </ul>
  )

  const renderStats = (stats?: readonly (string | MultiidiomaTrad)[]) => {
    if (!stats || stats.length === 0) {
      return null
    }

    return (
      <div className="dungeon-tags">
        {stats.map((stat, index) => (
          <span key={`${String(getText(stat, language)).slice(0, 20)}-${index}`} className="dungeon-tag">
            {getText(stat, language)}
          </span>
        ))}
      </div>
    )
  }

  const renderSpellList = (
    spells: ReadonlyArray<{
      name: string | MultiidiomaTrad
      effect: string | MultiidiomaTrad
      cost?: string | MultiidiomaTrad
      range?: string | MultiidiomaTrad
      limit?: string | MultiidiomaTrad
      tag?: string | MultiidiomaTrad
    }>,
  ) => (
    <div className="dungeon-spells">
      {spells.map((spell) => (
        <div key={String(getText(spell.name, language)).slice(0, 30)} className="dungeon-spell">
          <div className="dungeon-spell__title">
            <strong>{getText(spell.name, language)}</strong>
            {spell.tag ? <span className="dungeon-tag">{getText(spell.tag, language)}</span> : null}
          </div>
          <p>{getText(spell.effect, language)}</p>
          <div className="dungeon-meta">
            {spell.cost ? <span>{getText(spell.cost, language)}</span> : null}
            {spell.range ? <span>{getText(spell.range, language)}</span> : null}
            {spell.limit ? <span>{getText(spell.limit, language)}</span> : null}
          </div>
        </div>
      ))}
    </div>
  )

  const renderDungeonGuideDetails = (
    dungeon: (typeof mergedDungeonGuides)[number],
    interested: InterestEntry[],
  ) => (
    <article className="dungeon-card" key={dungeon.id} id={`guide-${dungeon.id}`}>
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
        {Array.isArray(dungeon.summary) && dungeon.summary.map((item) => {
          const text = getText(item, language)
          return <li key={String(text).slice(0, 50)}>{text}</li>
        })}
      </ul>
      <div className="dungeon-details">
        <details className="dungeon-section">
          <summary>{getText(uiLabels.monstres, language)}</summary>
          <div className="dungeon-section__body">
            {dungeon.monsters.map((monster) => (
              <div className="dungeon-block" key={String(getText(monster.name, language)).slice(0, 30)}>
                <div className="dungeon-block__header">
                  <h5>{getText(monster.name, language)}</h5>
                  <span>{getText(monster.level, language)}</span>
                </div>
                {monster.description ? <p>{getText(monster.description, language)}</p> : null}
                {monster.bonus ? (
                  <p className="dungeon-highlight">{getText(monster.bonus, language)}</p>
                ) : null}
                {renderSpellList(monster.spells)}
                {monster.passive ? (
                  <p className="dungeon-passive">
                    <strong>{getText(uiLabels.passif, language)}</strong> {getText(monster.passive, language)}
                  </p>
                ) : null}
                {monster.notes?.length ? (
                  <ul className="dungeon-notes">
                    {monster.notes.map((note) => (
                      <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                    ))}
                  </ul>
                ) : null}
                {renderStats(monster.stats)}
              </div>
            ))}
          </div>
        </details>
        <details className="dungeon-section">
          <summary>{getText(uiLabels.boss, language)}</summary>
          <div className="dungeon-section__body">
            <div className="dungeon-block">
              <div className="dungeon-block__header">
                <h5>{getText(dungeon.boss.name, language)}</h5>
                <span>{getText(dungeon.boss.level, language)}</span>
              </div>
              {dungeon.boss.description ? (
                <p>{getText(dungeon.boss.description, language)}</p>
              ) : null}
              {renderSpellList(dungeon.boss.spells)}
              {dungeon.boss.passives?.length ? (
                <div className="dungeon-subsection">
                  <h6>{getText(uiLabels.passifArtillerie, language)}</h6>
                  {dungeon.boss.passives.map((passive) => (
                    <div className="dungeon-passive" key={String(getText(passive.name, language)).slice(0, 30)}>
                      <strong>{getText(passive.name, language)}:</strong> {getText(passive.effect, language)}
                      {passive.notes?.length ? (
                        <ul className="dungeon-notes">
                          {passive.notes.map((note) => (
                            <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
              {renderStats(dungeon.boss.stats)}
            </div>
          </div>
        </details>
        <details className="dungeon-section">
          <summary>{getText(uiLabels.mecaniques, language)}</summary>
          <div className="dungeon-section__body">
            {Array.isArray(dungeon.mechanics) && dungeon.mechanics.map((section) => (
              <div className="dungeon-block" key={String(getText(section.title, language)).slice(0, 30)}>
                <h5>{getText(section.title, language)}</h5>
                {Array.isArray(section.paragraphs) && section.paragraphs.map((paragraph: unknown) => (
                  <p key={String(getText(paragraph, language)).slice(0, 50)}>{getText(paragraph, language)}</p>
                ))}
              </div>
            ))}
          </div>
        </details>
        <details className="dungeon-section">
          <summary>{getText(uiLabels.steles, language)}</summary>
          <div className="dungeon-section__body">
            <div className="dungeon-block">
              <p>{getText(dungeon.steles.lead, language)}</p>
              <ul className="dungeon-notes">
                {Array.isArray(dungeon.steles.notes) && dungeon.steles.notes.map((note) => (
                  <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                ))}
              </ul>
            </div>
            <div className="dungeon-subsection">
              <h6>{getText(uiLabels.protoBoss, language)}</h6>
              {dungeon.steles.protoBosses.map((proto) => (
                <div className="dungeon-block" key={String(getText(proto.name, language)).slice(0, 30)}>
                  <div className="dungeon-block__header">
                    <h5>{getText(proto.name, language)}</h5>
                  </div>
                  {proto.description ? <p>{getText(proto.description, language)}</p> : null}
                  {renderSpellList(proto.spells)}
                  {proto.passive ? (
                    <p className="dungeon-passive">
                      <strong>{getText(uiLabels.passif, language)}</strong> {getText(proto.passive, language)}
                    </p>
                  ) : null}
                  {proto.notes?.length ? (
                    <ul className="dungeon-notes">
                      {proto.notes.map((note) => (
                        <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                      ))}
                    </ul>
                  ) : null}
                  {renderStats(proto.stats)}
                </div>
              ))}
            </div>
            <div className="dungeon-subsection">
              <h6>{getText(uiLabels.cristalStasis, language)}</h6>
              <div className="dungeon-block">
                <ul className="dungeon-notes">
                  {dungeon.steles.crystals.types.map((item) => (
                    <li key={String(getText(item, language)).slice(0, 50)}>{getText(item, language)}</li>
                  ))}
                </ul>
                <ul className="dungeon-notes">
                  {dungeon.steles.crystals.notes.map((note) => (
                    <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                  ))}
                </ul>
                {renderStats(dungeon.steles.crystals.stats)}
              </div>
            </div>
          </div>
        </details>
        {interested.length > 0 ? (
          <details className="dungeon-section">
            <summary>
              {interested.length} {data.interests.needHelp}
            </summary>
            <div className="dungeon-section__body">
              {renderEntryList(interested)}
            </div>
          </details>
        ) : null}
      </div>
    </article>
  )

  // Show loading while fetching content
  if (contentLoading) {
    return (
      <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <p>Cargando contenido...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      {!isAdminRoute && particlesEnabled ? (
        <div className="ambient-particles" aria-hidden>
          {ambientFlashes.map((flash, index) => (
            <span
              key={`ambient-flash-${index}`}
              className="ambient-flash"
              style={
                {
                  '--x': flash.x,
                  '--y': flash.y,
                  '--size': flash.size,
                  '--duration': flash.duration,
                  animationDelay: flash.delay,
                } as CSSProperties
              }
            />
          ))}
          {ambientParticles.map((particle, index) => (
            <span
              key={index}
              className={`ambient-particle ${index % 3 === 0 ? 'ambient-particle--far' : ''}`}
              style={
                {
                  '--x': particle.x,
                  '--size': particle.size,
                  '--drift': particle.drift,
                  '--duration': particle.duration,
                  animationDelay: particle.delay,
                } as CSSProperties
              }
            />
          ))}
        </div>
      ) : null}
      {!isAdminRoute && (
        <nav className={`navbar ${navOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
          <div className="nav-inner">
            <div className="nav-brand">
              <img src="/logo/logopng.png" alt="The Bloody Brotherhood" className="nav-logo" />
              <div>
                <span className="nav-title">{data.navTitle}</span>
                <span className="nav-subtitle">{data.badge}</span>
              </div>
            </div>
            <button
              className="nav-toggle"
              type="button"
              onClick={() => setNavOpen((open) => !open)}
              aria-expanded={navOpen}
              aria-controls="nav-panel"
            >
              {data.navToggle}
            </button>
            <div className="nav-panel" id="nav-panel">
              <div className="nav-links" role="list">
                {resolvedNav.map((item) => (
                  (() => {
                    const targetRoute = sectionRoutes[item.id as keyof typeof sectionRoutes] || sectionRoutes.inicio
                    return (
                  <NavLink
                    key={item.id}
                    to={targetRoute}
                    end={item.id === 'inicio'}
                    className={({ isActive }) =>
                      [
                        'nav-link',
                        item.id === 'registro' ? 'nav-link--registro' : '',
                        isActive || currentSection === item.id ? 'active' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')
                    }
                    onClick={() => setNavOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                    )
                  })()
                ))}
              </div>
              <Link className="nav-cta" to={sectionRoutes.registro}>
                {registerLabel}
              </Link>
              <div className="toggles">
                <div className="lang-toggle icon-toggle" role="group" aria-label="Language">
                  <button
                    className={language === 'es' ? 'active' : ''}
                    onClick={() => setLanguage('es')}
                    type="button"
                    aria-label="Español"
                    title="Español"
                  >
                    🇪🇸
                    <span className="sr-only">ES</span>
                  </button>
                  <button
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                    type="button"
                    aria-label="English"
                    title="English"
                  >
                    🇺🇸
                    <span className="sr-only">EN</span>
                  </button>
                </div>
                <div className="fx-toggle icon-toggle" role="group" aria-label={particlesLabel}>
                  <button
                    className={particlesEnabled ? 'active' : ''}
                    onClick={() => setParticlesEnabled((enabled) => !enabled)}
                    type="button"
                    aria-label={particlesToggleTitle}
                    aria-pressed={particlesEnabled}
                    title={particlesToggleTitle}
                  >
                    FX
                    <span className="sr-only">{particlesLabel}</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div
            className="nav-overlay"
            aria-hidden={!navOpen}
            onClick={() => setNavOpen(false)}
          />
        </nav>
      )}
      <Routes>
        <Route
          path={sectionRoutes.inicio}
          element={
            <div className="route-view" key={location.pathname}>
              <header className="hero">
                <div className="hero-top">
                  <img src="/logo/logopng.png" alt="The Bloody Brotherhood" className="guild-logo" />
                  <span className="badge">{data.badge}</span>
                </div>
                <div className="hero-content">
                  <div className="hero-text">
                    <h1>{data.title}</h1>
                    <p className="hero-subtitle">{data.subtitle}</p>
                    <p className="hero-note">{data.transition}</p>
                    <div className="hero-actions">
                      <Link className="primary" to={sectionRoutes.registro}>
                        {data.ctaPrimary}
                      </Link>
                      <Link className="ghost" to={sectionRoutes.plan}>
                        {data.ctaSecondary}
                      </Link>
                    </div>
                  </div>
                  <div className="hero-panel">
                    {data.stats.map((stat) => (
                      <div className="stat" key={stat.label}>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </header>
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.home.quickTitle}</h2>
                  <p>{data.home.quickLead}</p>
                </div>
                <div className="quick-grid">
                  {data.home.quickCards.map((card) => (
                    <Link
                      key={card.id}
                      className="quick-card"
                      to={sectionRoutes[card.id as keyof typeof sectionRoutes]}
                    >
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <span>{data.home.quickCta}</span>
                    </Link>
                  ))}
                </div>
              </section>
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.home.glanceTitle}</h2>
                </div>
                <ul className="glance-list">
                  {data.home.glanceItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.objetivo}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.objectives.title}</h2>
                  <p>{data.objectives.lead}</p>
                </div>
                <ul className="pill-list">
                  {data.objectives.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.plan}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.plan.title}</h2>
                  {planLeadText ? <p>{planLeadText}</p> : null}
                </div>
                <div className="grid">
                  {data.plan.items.map((item) => (
                    <article className="card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.guias}
          element={
            <GuidesIndexView
              ViewHeader={ViewHeader}
              data={data}
              language={language}
              mergedDungeonGuides={mergedDungeonGuides}
              interestByGuide={interestByGuide}
              getText={getText}
              sectionRoutes={sectionRoutes}
            />
          }
        />
        <Route
          path={`${sectionRoutes.guias}/:guideId`}
          element={
            <GuideDetailRouteView
              ViewHeader={ViewHeader}
              language={language}
              mergedDungeonGuides={mergedDungeonGuides}
              interestByGuide={interestByGuide}
              getText={getText}
              sectionRoutes={sectionRoutes}
              dungeonLead={data.guides.dungeonLead}
              routeKey={location.pathname}
              renderDungeonGuideDetails={renderDungeonGuideDetails}
            />
          }
        />
        <Route
          path={sectionRoutes.estelas}
          element={
            <StelesView
              ViewHeader={ViewHeader}
              stelesHubData={stelesHubData}
            />
          }
        />
        <Route
          path={sectionRoutes.bosses}
          element={
            <BossesView
              ViewHeader={ViewHeader}
              data={bossesViewData}
              sectionRoutes={sectionRoutes}
              mergedDungeonGuides={mergedDungeonGuides}
              interestByGuide={interestByGuide}
              bossGuideById={bossGuideById}
            />
          }
        />
        <Route
          path={sectionRoutes.clases}
          element={
            <ClassesView
              ViewHeader={ViewHeader}
              classesData={classesData}
              language={language}
            />
          }
        />
        <Route path="/actividades" element={<Navigate to={sectionRoutes.clases} replace />} />
        <Route
          path={sectionRoutes.equipamiento}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.gear.title}</h2>
                  <p>{data.gear.lead}</p>
                </div>
                <div className="callout">
                  <p>{data.gear.note}</p>
                </div>
                {gearRequests.length > 0 && (
                  <div className="gear-requests">
                    <h3>{data.interests.gearRequests}</h3>
                    {renderGearRequests()}
                  </div>
                )}
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.registro}
          element={
            <RegisterView
              ViewHeader={ViewHeader}
              data={data}
              language={language}
              isSupabaseConfigured={isSupabaseConfigured}
              handleSubmit={handleSubmit}
              availabilityDays={availabilityDays}
              setAvailabilityDays={setAvailabilityDays}
              availabilityStart={availabilityStart}
              setAvailabilityStart={setAvailabilityStart}
              availabilityEnd={availabilityEnd}
              setAvailabilityEnd={setAvailabilityEnd}
              mergedDungeonGuides={mergedDungeonGuides}
              getText={getText}
              interestGuides={interestGuides}
              setInterestGuides={setInterestGuides}
              toggleInterest={toggleInterest}
              submitted={submitted}
              submitError={submitError}
            />
          }
        />
        {/* Hidden resumen route - uncomment to restore */}
        {/* <Route
          path={sectionRoutes.resumen}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.summary.title}</h2>
                </div>
                <div className="summary">
                  <div>
                    <ul className="summary-list">
                      {data.summary.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <details className="summary-details">
                    <summary>{data.summary.fullTitle}</summary>
                    {data.summary.fullText.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </details>
                </div>
              </section>
            </div>
          }
        /> */}
        <Route
          path="/admin"
          element={
            <div className="route-view" key={location.pathname}>
              <section className="section reveal">
                {!adminAuthenticated ? (
                  <>
                    <div className="section-header">
                      <h2>🔧 Panel de Administración</h2>
                      <p>Acceso restringido - Autenticación requerida</p>
                    </div>
                    <AdminLogin onAuthenticated={handleAdminLogin} />
                  </>
                ) : (
                  <>
                    <div className="section-header">
                      <h2>🔧 Panel de Administración</h2>
                      <p>Edita el contenido completo de la aplicación (español e inglés)</p>
                    </div>
                    <AdminPanel 
                      content={activeContent} 
                      defaultContent={content}
                      onSave={(newContent) => {
                        const nextContent = newContent as unknown as typeof content
                        setCustomContent(nextContent)
                        localStorage.setItem('custom_content', JSON.stringify(nextContent))
                      }}
                      onReset={() => {
                        setCustomContent(null)
                        localStorage.removeItem('custom_content')
                      }}
                      onLogout={handleAdminLogout}
                    />
                  </>
                )}
              </section>
            </div>
          }
        />
        <Route path="*" element={<Navigate to={sectionRoutes.inicio} replace />} />
      </Routes>

      <footer className="footer">{data.footer}</footer>
    </div>
  )
}

export default App
