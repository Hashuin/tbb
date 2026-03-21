export type Language = 'es' | 'en'

export type MultiidiomaTrad = {
  fr: string
  en: string
  es: string
}

export type ClassSetLink = {
  url: string
  label?: string
}

type AppContentSchema = {
  badge: string
  navTitle: string
  navToggle: string
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
  nav: readonly { id: string; label: string }[]
  viewSubtitles: Record<string, string>
  transition: string
  stats: readonly { value: string; label: string }[]
  home: {
    quickTitle: string
    quickLead: string
    quickCta: string
    quickCards: readonly { id: string; title: string; text: string }[]
    glanceTitle: string
    glanceItems: readonly string[]
  }
  objectives: {
    title: string
    lead: string
    bullets: readonly string[]
  }
  plan: {
    title: string
    lead: string
    items: readonly { title: string; text: string }[]
  }
  guides: {
    title: string
    lead: string
    steps: readonly string[]
    dungeonTitle: string
    dungeonLead: string
    dungeons: readonly unknown[]
  }
  bosses: {
    title: string
    lead: string
    guideCta?: string
    items: readonly {
      id: number
      name: string
      image: string
      guideId: string
      mechanics: readonly string[]
    }[]
  }
  stelesHub: {
    title: string
    lead: string
    guides: readonly unknown[]
  }
  schedule: {
    title: string
    lead: string
    items: readonly { name: string; focus: string; cadence: string }[]
  }
  classes: {
    title: string
    lead: string
    items: readonly unknown[]
  }
  gear: {
    title: string
    lead: string
    note: string
  }
  form: {
    title: string
    lead: string
    note: string
    warning: string
    fields: Record<string, string>
    placeholders: Record<string, string>
    weekDays: readonly string[]
    timeRange: string
    from: string
    to: string
    levelOptions: readonly string[]
    selectPlaceholder: string
    addItem: string
    removeItem: string
    priorities: readonly string[]
    submit: string
    success: string
    error: string
  }
  interests: {
    title: string
    loading: string
    empty: string
    interested: string
    needHelp: string
    andMore: string
    gearRequests: string
    bossesTitle: string
    activitiesTitle: string
    guidesTitle: string
    gearTitle: string
    gearEmpty: string
  }
  summary: {
    title: string
    highlights: readonly string[]
    fullTitle: string
    fullText: readonly string[]
  }
  footer: string
  [key: string]: unknown
}

export type AppContent = Record<Language, AppContentSchema>
