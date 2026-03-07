import { useEffect, useMemo, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../../lib/supabase'

type Language = 'es' | 'en'
type LocalizedText = string | Partial<Record<Language | 'fr', string>>

type PlanItem = {
  title?: string
  text?: string
}

type PlanSection = {
  title?: string
  lead?: string
  items?: readonly PlanItem[]
}

type GuideDungeon = {
  id?: string | number
  name?: LocalizedText
  subtitle?: LocalizedText
  levelRange?: LocalizedText
  summary?: readonly LocalizedText[]
}

type GuidesSection = {
  title?: string
  lead?: string
  steps?: readonly string[]
  dungeonTitle?: string
  dungeonLead?: string
  dungeons?: readonly GuideDungeon[]
}

type StelesTableRow = {
  action?: string
  effect?: string
}

type StelesGuide = {
  id?: string
  name?: string
  keyRequired?: string
  appliesTo?: readonly string[]
  overview?: readonly string[]
  dungeonEffects?: readonly string[]
  tips?: readonly string[]
  table?: {
    actionHeader?: string
    effectHeader?: string
    rows?: readonly StelesTableRow[]
  }
}

type StelesHubSection = {
  title?: string
  lead?: string
  guides?: readonly StelesGuide[]
}

type BossItem = {
  id?: string | number
  name?: string
  image?: string
  mechanics?: readonly string[]
}

type BossesSection = {
  title?: string
  lead?: string
  items?: readonly BossItem[]
}

type AdminClassItem = {
  breed?: string
  gender?: ClassGender
  name?: string
  image?: string
  description?: string
  links?: readonly (string | ClassSetLink)[]
}

type ClassesSection = {
  title?: string
  lead?: string
  items?: readonly AdminClassItem[]
}

type AdminLangData = {
  badge?: string
  title?: string
  subtitle?: string
  ctaPrimary?: string
  ctaSecondary?: string
  transition?: string
  footer?: string
  plan?: PlanSection
  guides?: GuidesSection
  stelesHub?: StelesHubSection
  bosses?: BossesSection
  classes?: ClassesSection
  [key: string]: unknown
}

type AdminContent = Record<Language, AdminLangData>

type ClassGender = 'male' | 'female'

type ClassBreedOption = {
  key: string
  nameEs: string
  nameEn: string
  maleId: number
  femaleId: number
}

type ClassSetLink = {
  url: string
  label?: string
}

const classBreedOptions: readonly ClassBreedOption[] = [
  { key: 'feca', nameEs: 'Feca', nameEn: 'Feca', maleId: 10, femaleId: 11 },
  { key: 'osamodas', nameEs: 'Osamodas', nameEn: 'Osamodas', maleId: 20, femaleId: 21 },
  { key: 'anutrof', nameEs: 'Anutrof', nameEn: 'Anutrof', maleId: 30, femaleId: 31 },
  { key: 'sram', nameEs: 'Sram', nameEn: 'Sram', maleId: 40, femaleId: 41 },
  { key: 'xelor', nameEs: 'Xelor', nameEn: 'Xelor', maleId: 50, femaleId: 51 },
  { key: 'zurcarak', nameEs: 'Zurcarak', nameEn: 'Zurcarak', maleId: 60, femaleId: 61 },
  { key: 'eniripsa', nameEs: 'Eniripsa', nameEn: 'Eniripsa', maleId: 70, femaleId: 71 },
  { key: 'yopuka', nameEs: 'Yopuka', nameEn: 'Yopuka', maleId: 80, femaleId: 81 },
  { key: 'ocra', nameEs: 'Ocra', nameEn: 'Ocra', maleId: 90, femaleId: 91 },
  { key: 'sadida', nameEs: 'Sadida', nameEn: 'Sadida', maleId: 100, femaleId: 101 },
  { key: 'sacrogrito', nameEs: 'Sacrogrito', nameEn: 'Sacrogrito', maleId: 110, femaleId: 111 },
  { key: 'pandawa', nameEs: 'Pandawa', nameEn: 'Pandawa', maleId: 120, femaleId: 121 },
  { key: 'tymador', nameEs: 'Tymador', nameEn: 'Tymador', maleId: 130, femaleId: 131 },
  { key: 'zobal', nameEs: 'Zobal', nameEn: 'Zobal', maleId: 140, femaleId: 141 },
  { key: 'uginak', nameEs: 'Uginak', nameEn: 'Uginak', maleId: 150, femaleId: 151 },
  { key: 'steamer', nameEs: 'Steamer', nameEn: 'Steamer', maleId: 160, femaleId: 161 },
  { key: 'selatrop', nameEs: 'Selatrop', nameEn: 'Selatrop', maleId: 180, femaleId: 181 },
  { key: 'hipermago', nameEs: 'Hipermago', nameEn: 'Hipermago', maleId: 190, femaleId: 191 },
] as const

const availableBreedIllustrationIds = new Set([
  10, 11, 20, 21, 30, 31, 40, 41, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91,
  100, 101, 110, 111, 120, 121, 130, 131, 140, 141, 150, 151, 160, 161,
  180, 181, 190, 191,
])

const getClassBreedOption = (breed?: string) =>
  classBreedOptions.find((option) => option.key === breed)

const getClassNameFromBreed = (
  breed: string | undefined,
  language: Language,
  fallbackName: string,
) => {
  const option = getClassBreedOption(breed)
  if (!option) return fallbackName
  return language === 'es' ? option.nameEs : option.nameEn
}

const getClassImageFromBreed = (
  breed: string | undefined,
  gender: ClassGender,
  fallbackImage: string,
) => {
  const option = getClassBreedOption(breed)
  if (!option) return fallbackImage

  const preferredId = gender === 'female' ? option.femaleId : option.maleId
  if (availableBreedIllustrationIds.has(preferredId)) {
    return `/wakassets/breedsIllusrations/${preferredId}.png`
  }

  const fallbackId = option.maleId
  if (availableBreedIllustrationIds.has(fallbackId)) {
    return `/wakassets/breedsIllusrations/${fallbackId}.png`
  }

  return fallbackImage
}

const normalizeClassLinks = (
  links?: readonly (string | ClassSetLink)[],
): ClassSetLink[] =>
  (links || []).map((link) =>
    typeof link === 'string'
      ? { url: link, label: '' }
      : { url: link.url || '', label: link.label || '' },
  )

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

// Supabase Auth Admin Login
type AdminLoginProps = {
  onAuthenticated: () => void
}

export function AdminLogin({ onAuthenticated }: AdminLoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!isSupabaseConfigured || !supabase) {
      setError('Supabase no está configurado')
      setLoading(false)
      return
    }

    try {
      if (mode === 'login') {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (signInError) {
          setError(signInError.message === 'Invalid login credentials' 
            ? 'Email o contraseña incorrectos' 
            : signInError.message)
        } else {
          onAuthenticated()
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (signUpError) {
          setError(signUpError.message)
        } else {
          setError(null)
          setMode('login')
          alert('Cuenta creada. Por favor inicia sesión.')
        }
      }
    } catch {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  if (!isSupabaseConfigured) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
        <h3>Supabase no configurado</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Para usar el panel de administración necesitas configurar Supabase en el archivo .env
        </p>
      </div>
    )
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh',
      padding: '2rem',
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          width: '100%',
          padding: '2rem',
          background: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h2 style={{ margin: 0, marginBottom: '0.5rem' }}>Panel de Administración</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            {mode === 'login' ? 'Inicia sesión con tu cuenta' : 'Crea una cuenta de administrador'}
          </p>
        </div>

        {error && (
          <div style={{
            padding: '0.75rem',
            background: '#e74c3c',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}>
            ? {error}
          </div>
        )}

        <label style={{ display: 'block', marginBottom: '1rem' }}>
          <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
            autoFocus
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              background: 'var(--color-bg)',
              color: 'inherit',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Contraseña
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === 'login' ? 'Tu contraseña' : 'Mínimo 6 caracteres'}
            required
            minLength={6}
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              background: 'var(--color-bg)',
              color: 'inherit',
            }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: loading ? '#95a5a6' : 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: '1rem',
          }}
        >
          {loading ? '⏳ Verificando...' : (mode === 'login' ? '🔑 Iniciar Sesión' : '🆕 Crear Cuenta')}
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '0.9rem',
            background: 'transparent',
            color: 'var(--color-primary)',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '0.75rem',
          background: 'var(--color-bg)',
          borderRadius: '4px',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong>🔒 Seguro:</strong> Autenticación con Supabase. Las sesiones son gestionadas de forma segura.
        </div>
      </form>
    </div>
  )
}

type AdminPanelProps = {
  content: AdminContent
  defaultContent: AdminContent
  onSave: (newContent: AdminContent) => void
  onReset: () => void
  onLogout: () => void
}

export function AdminPanel({ content, defaultContent, onSave, onReset, onLogout }: AdminPanelProps) {
  const [editLang, setEditLang] = useState<Language>('es')
  const [editSection, setEditSection] = useState<
    | 'inicio'
    | 'plan'
    | 'guias'
    | 'estelas'
    | 'bosses'
    | 'clases'
    | 'avanzado'
  >('inicio')
  const [draftContent, setDraftContent] = useState<AdminContent>(content)
  const [jsonText, setJsonText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const hasPendingChanges = useMemo(
    () => JSON.stringify(draftContent) !== JSON.stringify(content),
    [draftContent, content],
  )

  useEffect(() => {
    setDraftContent(content)
  }, [content])

  useEffect(() => {
    setJsonText(JSON.stringify(draftContent[editLang], null, 2))
  }, [draftContent, editLang])

  const linesToArray = (value: string) =>
    value
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)

  const arrayToLines = (value?: readonly string[]) => (value || []).join('\n')

  const tableRowsToLines = (rows?: ReadonlyArray<{ action?: string; effect?: string }>) =>
    (rows || []).map((row) => `${row.action || ''} | ${row.effect || ''}`).join('\n')

  const linesToTableRows = (value: string) =>
    value
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf('|')
        if (separatorIndex === -1) {
          return { action: line, effect: '' }
        }

        return {
          action: line.slice(0, separatorIndex).trim(),
          effect: line.slice(separatorIndex + 1).trim(),
        }
      })

  const updateGuideDungeonById = (
    guideId: string,
    updater: (target: Record<string, unknown>) => void,
  ) => {
    setDraftContent((prev: AdminContent) => {
      const next = JSON.parse(JSON.stringify(prev)) as AdminContent
      const langRoot = next[editLang] as unknown as Record<string, unknown>
      const guides = (langRoot.guides as Record<string, unknown> | undefined) || {}
      const dungeons = ((guides.dungeons as unknown[] | undefined) || []) as Record<string, unknown>[]

      const foundIndex = dungeons.findIndex((dungeon) => String(dungeon.id || '') === guideId)
      const target = foundIndex >= 0
        ? dungeons[foundIndex]
        : ({ id: guideId } as Record<string, unknown>)

      updater(target)

      if (foundIndex >= 0) {
        dungeons[foundIndex] = target
      } else {
        dungeons.push(target)
      }

      guides.dungeons = dungeons
      langRoot.guides = guides
      return next
    })
  }

  const setGuideLocalizedField = (
    guideId: string,
    field: 'name' | 'subtitle' | 'levelRange',
    value: string,
  ) => {
    updateGuideDungeonById(guideId, (target) => {
      const rawField = target[field]

      if (typeof rawField === 'object' && rawField !== null) {
        target[field] = {
          ...(rawField as Record<string, unknown>),
          [editLang]: value,
        }
      } else {
        target[field] = { [editLang]: value }
      }
    })
  }

  const setGuideSummaryLines = (guideId: string, value: string) => {
    const lines = linesToArray(value)

    updateGuideDungeonById(guideId, (target) => {
      const currentSummary = Array.isArray(target.summary) ? (target.summary as unknown[]) : []

      target.summary = lines.map((line, index) => {
        const current = currentSummary[index]
        if (typeof current === 'object' && current !== null) {
          return {
            ...(current as Record<string, unknown>),
            [editLang]: line,
          }
        }

        return { [editLang]: line }
      })
    })
  }

  const setDraftValue = (path: Array<string | number>, value: unknown) => {
    setDraftContent((prev: AdminContent) => {
      const next = JSON.parse(JSON.stringify(prev)) as AdminContent
      let cursor: unknown = next[editLang]

      for (let index = 0; index < path.length - 1; index += 1) {
        const key = path[index]
        const nextKey = path[index + 1]

        if (typeof key === 'number') {
          if (!Array.isArray(cursor)) return prev
          if (cursor[key] === undefined || cursor[key] === null) {
            cursor[key] = typeof nextKey === 'number' ? [] : {}
          }
          cursor = cursor[key]
          continue
        }

        if (typeof cursor !== 'object' || cursor === null) return prev
        const record = cursor as Record<string, unknown>
        if (record[key] === undefined || record[key] === null) {
          record[key] = typeof nextKey === 'number' ? [] : {}
        }
        cursor = record[key]
      }

      const lastKey = path[path.length - 1]
      if (typeof lastKey === 'number') {
        if (!Array.isArray(cursor)) return prev
        cursor[lastKey] = value
        return next
      }

      if (typeof cursor !== 'object' || cursor === null) return prev
      ;(cursor as Record<string, unknown>)[lastKey] = value
      return next
    })
  }

  const langData = draftContent[editLang] as AdminLangData
  const mergedGuideDungeons = useMemo(() => {
    const base = defaultContent[editLang].guides?.dungeons || []
    const current = langData.guides?.dungeons || []
    const currentById = new Map(current.map((dungeon: GuideDungeon) => [String(dungeon.id), dungeon]))

    const merged = base.map((baseDungeon: GuideDungeon) => {
      const customDungeon = currentById.get(String(baseDungeon.id))
      return customDungeon || baseDungeon
    })

    const extras = current.filter(
      (customDungeon: GuideDungeon) => !merged.some((mergedDungeon: GuideDungeon) => String(mergedDungeon.id) === String(customDungeon.id)),
    )

    return [...merged, ...extras]
  }, [defaultContent, editLang, langData.guides?.dungeons])

  const sectionAnimationKey = `${editLang}-${editSection}`
  const adminSections = [
    { key: 'inicio', label: 'Inicio', icon: '🏠', hint: 'Contenido principal de la vista Inicio' },
    { key: 'plan', label: 'Plan', icon: '📋', hint: 'Bloques del plan de progreso' },
    { key: 'guias', label: 'Guías', icon: '📚', hint: 'Texto guía y dungeons visibles en usuario' },
    { key: 'estelas', label: 'Estelas', icon: '✨', hint: 'Guías de estelas y tablas de referencia' },
    { key: 'bosses', label: 'Bosses', icon: '👹', hint: 'Nombres, mecánicas e imágenes' },
    { key: 'clases', label: 'Clases', icon: '🧙', hint: 'Nombre, descripción y enlaces de sets' },
    { key: 'avanzado', label: 'Avanzado (JSON)', icon: '⚙️', hint: 'Edición técnica completa' },
  ] as const
  const activeSection = adminSections.find((section) => section.key === editSection)

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    
    try {
      const newContent =
        editSection === 'avanzado'
          ? {
              ...draftContent,
              [editLang]: JSON.parse(jsonText),
            }
          : draftContent
      
      // Save to Supabase first (if configured)
      if (isSupabaseConfigured && supabase) {
        const { error: supabaseError } = await supabase
          .from('app_content')
          .upsert({
            id: 1,
            content: newContent,
            updated_at: new Date().toISOString(),
          })
        
        if (supabaseError) {
          throw new Error(`Error en Supabase: ${supabaseError.message}`)
        }
      }
      
      // Save locally and update state
      onSave(newContent)
      setDraftContent(newContent)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'JSON inválido')
    } finally {
      setSaving(false)
    }
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'content-backup.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string)
        setDraftContent(imported)
        setError(null)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
      } catch {
        setError('Error al importar archivo')
      }
    }
    reader.readAsText(file)
  }

  const renderSectionEditor = () => {
    const inputStyle: React.CSSProperties = {
      width: '100%',
      padding: '0.72rem 0.85rem',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      background: 'rgba(7, 12, 17, 0.55)',
      color: 'inherit',
      marginTop: '0.35rem',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
    }

    const textareaStyle: React.CSSProperties = {
      ...inputStyle,
      minHeight: '110px',
      resize: 'vertical',
      lineHeight: 1.5,
    }

    const groupStyle: React.CSSProperties = {
      marginBottom: '1rem',
      padding: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '14px',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    }

    const labelStyle: React.CSSProperties = {
      display: 'block',
      fontWeight: 600,
      marginBottom: '0.25rem',
      color: 'var(--accent-strong)',
    }

    if (editSection === 'avanzado') {
      return (
        <>
          <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
            <p style={{ margin: 0 }}>
              Modo avanzado para cambios técnicos. Si prefieres algo simple, usa las secciones de formularios.
            </p>
          </div>
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            spellCheck={false}
            style={{
              width: '100%',
              minHeight: '560px',
              padding: '1rem',
              fontFamily: 'monospace',
              fontSize: '14px',
              lineHeight: '1.6',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              background: 'var(--color-bg-secondary)',
              color: 'inherit',
              resize: 'vertical',
            }}
          />
        </>
      )
    }

    if (editSection === 'inicio') {
      return (
        <>
          <div style={groupStyle}>
            <label style={labelStyle}>Nombre del gremio</label>
            <input
              value={langData.badge || ''}
              onChange={(e) => setDraftValue(['badge'], e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Título principal</label>
            <input
              value={langData.title || ''}
              onChange={(e) => setDraftValue(['title'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Subtítulo</label>
            <textarea
              value={langData.subtitle || ''}
              onChange={(e) => setDraftValue(['subtitle'], e.target.value)}
              style={textareaStyle}
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Botón principal</label>
            <input
              value={langData.ctaPrimary || ''}
              onChange={(e) => setDraftValue(['ctaPrimary'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Botón secundario</label>
            <input
              value={langData.ctaSecondary || ''}
              onChange={(e) => setDraftValue(['ctaSecondary'], e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Texto de transición</label>
            <textarea
              value={langData.transition || ''}
              onChange={(e) => setDraftValue(['transition'], e.target.value)}
              style={textareaStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Footer</label>
            <input
              value={langData.footer || ''}
              onChange={(e) => setDraftValue(['footer'], e.target.value)}
              style={inputStyle}
            />
          </div>
        </>
      )
    }

    if (editSection === 'plan') {
      return (
        <>
          <div style={groupStyle}>
            <label style={labelStyle}>Título de sección</label>
            <input
              value={langData.plan?.title || ''}
              onChange={(e) => setDraftValue(['plan', 'title'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Descripción de sección</label>
            <textarea
              value={langData.plan?.lead || ''}
              onChange={(e) => setDraftValue(['plan', 'lead'], e.target.value)}
              style={textareaStyle}
            />
          </div>
          {(langData.plan?.items || []).map((item: PlanItem, index: number) => (
            <div style={groupStyle} key={`plan-item-${index}`}>
              <label style={labelStyle}>Bloque {index + 1} - Título</label>
              <input
                value={item.title || ''}
                onChange={(e) => setDraftValue(['plan', 'items', index, 'title'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Bloque {index + 1} - Descripción</label>
              <textarea
                value={item.text || ''}
                onChange={(e) => setDraftValue(['plan', 'items', index, 'text'], e.target.value)}
                style={textareaStyle}
              />
            </div>
          ))}
        </>
      )
    }

    if (editSection === 'guias') {
      return (
        <>
          <div style={groupStyle}>
            <label style={labelStyle}>Título</label>
            <input
              value={langData.guides?.title || ''}
              onChange={(e) => setDraftValue(['guides', 'title'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Texto principal</label>
            <textarea
              value={langData.guides?.lead || ''}
              onChange={(e) => setDraftValue(['guides', 'lead'], e.target.value)}
              style={textareaStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Pasos (una línea por paso)</label>
            <textarea
              value={arrayToLines(langData.guides?.steps)}
              onChange={(e) => setDraftValue(['guides', 'steps'], linesToArray(e.target.value))}
              style={textareaStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Título del listado de dungeons</label>
            <input
              value={langData.guides?.dungeonTitle || ''}
              onChange={(e) => setDraftValue(['guides', 'dungeonTitle'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Texto introductorio del listado</label>
            <textarea
              value={langData.guides?.dungeonLead || ''}
              onChange={(e) => setDraftValue(['guides', 'dungeonLead'], e.target.value)}
              style={textareaStyle}
            />
          </div>

          {mergedGuideDungeons.map((dungeon: GuideDungeon, index: number) => {
            const dungeonId = String(dungeon.id || `extra-${index}`)

            return (
              <details key={`guide-dungeon-${dungeonId}`} style={groupStyle}>
                <summary style={{ cursor: 'pointer', fontWeight: 700 }}>
                  {index + 1}. {getText(dungeon.name, editLang) || dungeonId}
                </summary>

                <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Dungeon #{index + 1} - ID</label>
                <input value={dungeonId} readOnly style={{ ...inputStyle, opacity: 0.8 }} />

                <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Nombre</label>
                <input
                  value={getText(dungeon.name, editLang)}
                  onChange={(e) => setGuideLocalizedField(dungeonId, 'name', e.target.value)}
                  style={inputStyle}
                />

                <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Subtítulo</label>
                <input
                  value={getText(dungeon.subtitle, editLang)}
                  onChange={(e) => setGuideLocalizedField(dungeonId, 'subtitle', e.target.value)}
                  style={inputStyle}
                />

                <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Rango de nivel</label>
                <input
                  value={getText(dungeon.levelRange, editLang)}
                  onChange={(e) => setGuideLocalizedField(dungeonId, 'levelRange', e.target.value)}
                  style={inputStyle}
                />

                <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Resumen (una línea por punto)</label>
                <textarea
                  value={arrayToLines((dungeon.summary || []).map((item: LocalizedText) => getText(item, editLang)))}
                  onChange={(e) => setGuideSummaryLines(dungeonId, e.target.value)}
                  style={{ ...textareaStyle, minHeight: '140px' }}
                />
              </details>
            )
          })}
        </>
      )
    }

    if (editSection === 'estelas') {
      return (
        <>
          <div style={groupStyle}>
            <label style={labelStyle}>Título</label>
            <input
              value={langData.stelesHub?.title || ''}
              onChange={(e) => setDraftValue(['stelesHub', 'title'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Texto principal</label>
            <textarea
              value={langData.stelesHub?.lead || ''}
              onChange={(e) => setDraftValue(['stelesHub', 'lead'], e.target.value)}
              style={textareaStyle}
            />
          </div>

          {(langData.stelesHub?.guides || []).map((guide: StelesGuide, guideIndex: number) => (
            <div style={groupStyle} key={`steles-guide-${guide.id || guideIndex}`}>
              <label style={labelStyle}>Guía #{guideIndex + 1} - ID</label>
              <input
                value={guide.id || ''}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'id'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Nombre</label>
              <input
                value={guide.name || ''}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'name'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Llave requerida</label>
              <input
                value={guide.keyRequired || ''}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'keyRequired'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Aplica en (una línea por dungeon)</label>
              <textarea
                value={arrayToLines(guide.appliesTo)}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'appliesTo'], linesToArray(e.target.value))}
                style={textareaStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Overview (una línea por punto)</label>
              <textarea
                value={arrayToLines(guide.overview)}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'overview'], linesToArray(e.target.value))}
                style={textareaStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Efectos por dungeon (una línea por punto)</label>
              <textarea
                value={arrayToLines(guide.dungeonEffects)}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'dungeonEffects'], linesToArray(e.target.value))}
                style={textareaStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Tips (una línea por tip)</label>
              <textarea
                value={arrayToLines(guide.tips)}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'tips'], linesToArray(e.target.value))}
                style={textareaStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Encabezado columna acción</label>
              <input
                value={guide.table?.actionHeader || ''}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'table', 'actionHeader'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Encabezado columna efecto</label>
              <input
                value={guide.table?.effectHeader || ''}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'table', 'effectHeader'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Filas tabla (formato: acción | efecto)</label>
              <textarea
                value={tableRowsToLines(guide.table?.rows)}
                onChange={(e) => setDraftValue(['stelesHub', 'guides', guideIndex, 'table', 'rows'], linesToTableRows(e.target.value))}
                style={{ ...textareaStyle, minHeight: '180px' }}
              />
            </div>
          ))}
        </>
      )
    }

    if (editSection === 'bosses') {
      return (
        <>
          <div style={groupStyle}>
            <label style={labelStyle}>Título de sección</label>
            <input
              value={langData.bosses?.title || ''}
              onChange={(e) => setDraftValue(['bosses', 'title'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Texto principal</label>
            <textarea
              value={langData.bosses?.lead || ''}
              onChange={(e) => setDraftValue(['bosses', 'lead'], e.target.value)}
              style={textareaStyle}
            />
          </div>
          {(langData.bosses?.items || []).map((boss: BossItem, index: number) => {
            const bossImage = boss.image?.trim()
              ? boss.image
              : `/wakassets/bossIllustrations/${boss.id}.png`

            return (
            <div style={groupStyle} key={`boss-item-${boss.id}-${index}`}>
              <div
                style={{
                  marginBottom: '0.8rem',
                  borderRadius: '10px',
                  minHeight: '130px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.8)), url(${bossImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.55)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  #{boss.id}
                </span>
                <div style={{ position: 'absolute', left: '12px', bottom: '10px', color: 'white' }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{boss.name}</div>
                  <div style={{ fontSize: '0.82rem', opacity: 0.9 }}>
                    {(boss.mechanics || []).slice(0, 1).join('')}
                  </div>
                </div>
              </div>

              <label style={labelStyle}>Boss #{boss.id} - Nombre</label>
              <input
                value={boss.name || ''}
                onChange={(e) => setDraftValue(['bosses', 'items', index, 'name'], e.target.value)}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Imagen (URL o ruta local)</label>
              <input
                value={boss.image || ''}
                onChange={(e) => setDraftValue(['bosses', 'items', index, 'image'], e.target.value)}
                placeholder={`/wakassets/bossIllustrations/${boss.id}.png`}
                style={inputStyle}
              />
              <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Mecánicas (una línea por mecánica)</label>
              <textarea
                value={arrayToLines(boss.mechanics)}
                onChange={(e) => setDraftValue(['bosses', 'items', index, 'mechanics'], linesToArray(e.target.value))}
                style={textareaStyle}
              />
            </div>
            )
          })}
        </>
      )
    }

    if (editSection === 'clases') {
      const classItems =
        ((langData as unknown as { classes?: { items?: readonly AdminClassItem[] } }).classes?.items || [])

      const addClass = () => {
        const nextItems = [
          ...classItems,
          { breed: 'feca', gender: 'male' as ClassGender, description: '', links: [] as string[] },
        ]
        setDraftValue(['classes', 'items'], nextItems)
      }

      const removeClass = (index: number) => {
        const nextItems = classItems.filter((_, itemIndex) => itemIndex !== index)
        setDraftValue(['classes', 'items'], nextItems)
      }

      const addLink = (classIndex: number) => {
        const currentLinks = normalizeClassLinks(classItems[classIndex]?.links)
        setDraftValue(['classes', 'items', classIndex, 'links'], [...currentLinks, { url: '', label: '' }])
      }

      const removeLink = (classIndex: number, linkIndex: number) => {
        const currentLinks = normalizeClassLinks(classItems[classIndex]?.links)
        const nextLinks = currentLinks.filter((_, index: number) => index !== linkIndex)
        setDraftValue(['classes', 'items', classIndex, 'links'], nextLinks)
      }

      const updateLinkField = (
        classIndex: number,
        linkIndex: number,
        field: 'url' | 'label',
        value: string,
      ) => {
        const currentLinks = normalizeClassLinks(classItems[classIndex]?.links)
        const nextLinks = currentLinks.map((link, index) =>
          index === linkIndex ? { ...link, [field]: value } : link,
        )
        setDraftValue(['classes', 'items', classIndex, 'links'], nextLinks)
      }

      return (
        <>
          <div style={groupStyle}>
            <label style={labelStyle}>Título de sección</label>
            <input
              value={langData.classes?.title || ''}
              onChange={(e) => setDraftValue(['classes', 'title'], e.target.value)}
              style={inputStyle}
            />
            <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Descripción de sección</label>
            <textarea
              value={langData.classes?.lead || ''}
              onChange={(e) => setDraftValue(['classes', 'lead'], e.target.value)}
              style={textareaStyle}
            />
            <button type="button" className="ghost small" onClick={addClass} style={{ marginTop: '0.8rem' }}>
              Añadir clase
            </button>
          </div>
          <div className="admin-class-accordion">
            {classItems.map((classItem, index) => {
              const selectedGender: ClassGender = classItem.gender === 'female' ? 'female' : 'male'
              const selectedName = getClassNameFromBreed(classItem.breed, editLang, classItem.name || '')
              const selectedImage = getClassImageFromBreed(classItem.breed, selectedGender, classItem.image || '')

              return (
                <details className="admin-class-item" key={`class-item-${index}`}>
                  <summary className="admin-class-item__summary">
                    <span>{selectedName || `Clase #${index + 1}`}</span>
                    <span className="admin-class-item__meta">#{index + 1}</span>
                    <button
                      type="button"
                      className="ghost small"
                      onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        removeClass(index)
                      }}
                    >
                      Quitar clase
                    </button>
                  </summary>
                  <div style={groupStyle}>
                    <label style={{ ...labelStyle, marginTop: '0.2rem' }}>Raza</label>
                    <select
                      value={classItem.breed || ''}
                      onChange={(e) => setDraftValue(['classes', 'items', index, 'breed'], e.target.value)}
                      style={inputStyle}
                    >
                      <option value="">Selecciona raza</option>
                      {classBreedOptions.map((breedOption) => (
                        <option key={breedOption.key} value={breedOption.key}>
                          {editLang === 'es' ? breedOption.nameEs : breedOption.nameEn}
                        </option>
                      ))}
                    </select>
                    <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Ilustración</label>
                    <select
                      value={selectedGender}
                      onChange={(e) => setDraftValue(['classes', 'items', index, 'gender'], e.target.value as ClassGender)}
                      style={inputStyle}
                    >
                      <option value="male">Hombre</option>
                      <option value="female">Mujer</option>
                    </select>
                    <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Nombre automático</label>
                    <input value={selectedName} readOnly style={{ ...inputStyle, opacity: 0.85 }} />
                    <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Imagen automática</label>
                    <input value={selectedImage} readOnly style={{ ...inputStyle, opacity: 0.85 }} />
                    {selectedImage ? (
                      <div
                        style={{
                          marginTop: '0.8rem',
                          borderRadius: '10px',
                          minHeight: '170px',
                          overflow: 'hidden',
                          border: '1px solid var(--color-border)',
                          backgroundImage: `url(${selectedImage})`,
                          backgroundSize: 'auto 145%',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center 22%',
                          backgroundColor: 'rgba(8, 12, 18, 0.55)',
                        }}
                      />
                    ) : null}
                    <label style={{ ...labelStyle, marginTop: '0.8rem' }}>Descripción / recomendaciones</label>
                    <textarea
                      value={classItem.description || ''}
                      onChange={(e) => setDraftValue(['classes', 'items', index, 'description'], e.target.value)}
                      style={textareaStyle}
                    />

                    <div style={{ display: 'grid', gap: '0.6rem', marginTop: '0.8rem' }}>
                      <label style={labelStyle}>Vínculos a sets</label>
                      {normalizeClassLinks(classItem.links).map((link, linkIndex) => (
                        <div key={`class-${index}-link-${linkIndex}`} style={{ display: 'grid', gap: '0.45rem' }}>
                          <input
                            value={link.url}
                            onChange={(e) => updateLinkField(index, linkIndex, 'url', e.target.value)}
                            placeholder="https://..."
                            style={inputStyle}
                          />
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <input
                              value={link.label || ''}
                              onChange={(e) => updateLinkField(index, linkIndex, 'label', e.target.value)}
                              placeholder="Descripción del vínculo (ej: Build crítico PvE)"
                              style={inputStyle}
                            />
                            <button type="button" className="ghost small" onClick={() => removeLink(index, linkIndex)}>
                              Quitar
                            </button>
                          </div>
                        </div>
                      ))}
                      <button type="button" className="ghost small" onClick={() => addLink(index)}>
                        Añadir vínculo
                      </button>
                    </div>
                  </div>
                </details>
              )
            })}
          </div>
        </>
      )
    }

    return null
  }

  return (
    <div className="admin-panel">
      <div className="admin-toolbar-card">
        <div className="admin-toolbar-top">
          <div className="admin-lang-switch">
          <button
            onClick={() => setEditLang('es')}
            className={`admin-pill ${editLang === 'es' ? 'active' : ''}`}
          >
            Español
          </button>
          <button
            onClick={() => setEditLang('en')}
            className={`admin-pill ${editLang === 'en' ? 'active' : ''}`}
          >
            English
          </button>
        </div>

          <div className={`admin-status-chip ${saving ? 'saving' : saved ? 'saved' : hasPendingChanges ? 'pending' : ''}`}>
            {saving
              ? '? Guardando...'
              : saved
                ? '? Guardado'
                : hasPendingChanges
                  ? '🟡 Cambios pendientes'
                  : '✅ Sin cambios'}
          </div>
        </div>

        <div className="admin-toolbar-actions">
          <button
            onClick={handleSave}
            disabled={saving}
            className="primary"
          >
            {saving ? '⏳ Guardando...' : '💾 Guardar Cambios'}
          </button>

          <button
            onClick={handleExport}
            className="ghost"
          >
            📤 Exportar
          </button>

          <label className="ghost admin-upload-label">
            📥 Importar
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              style={{ display: 'none' }}
            />
          </label>

          <button
            onClick={async () => {
              if (confirm('¿Resetear todo el contenido a valores por defecto?')) {
                setSaving(true)
                setError(null)
                
                try {
                  if (isSupabaseConfigured && supabase) {
                    await supabase
                      .from('app_content')
                      .delete()
                      .eq('id', 1)
                  }
                  
                  onReset()
                  setSaved(true)
                  setTimeout(() => setSaved(false), 3000)
                } catch {
                  setError('Error al resetear contenido')
                } finally {
                  setSaving(false)
                }
              }
            }}
            disabled={saving}
            className="ghost admin-danger"
          >
            ♻️ Resetear
          </button>

          <button
            onClick={() => {
              if (confirm('Cerrar sesión de administrador?')) {
                onLogout()
              }
            }}
            className="ghost"
          >
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            padding: '1rem',
            background: '#e74c3c',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '1rem',
          }}
        >
          ❌ {error}
        </div>
      )}

      {saved && (
        <div
          style={{
            padding: '1rem',
            background: '#27ae60',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '1rem',
          }}
        >
          ✅ Cambios guardados correctamente
        </div>
      )}

      <div className="admin-info-card">
        {isSupabaseConfigured ? (
          <>
            <p className="admin-info-mode">
              <strong>☁️ Modo Supabase:</strong> Los cambios se guardan en la base de datos y son visibles para todos los usuarios.
            </p>
            <p>
              <strong>Instrucciones:</strong> Edita los campos por sección. Al guardar, el contenido se sincroniza con Supabase y todos los usuarios verán los cambios.
            </p>
          </>
        ) : (
          <>
            <p className="admin-info-mode">
              <strong>💻 Modo Local:</strong> Supabase no está configurado. Los cambios solo se guardan en tu navegador.
            </p>
            <p>
              <strong>Instrucciones:</strong> Edita los campos por sección. Los cambios se guardan solo en localStorage de tu navegador.
            </p>
          </>
        )}
        <p>
          💡 <strong>Tip:</strong> Para cambios técnicos muy puntuales, usa la sección Avanzado (JSON).
        </p>
      </div>

      <div className="admin-sections">
        {adminSections.map((section) => (
          <button
            key={section.key}
            onClick={() => setEditSection(section.key as typeof editSection)}
            className={`admin-section-tab ${editSection === section.key ? 'active' : ''}`}
          >
            <span>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>

      <div className="admin-editor-layout">
        <div className="admin-editor-main">
          <div className="admin-editor-header">
            <div>
              <h3>
                {activeSection?.icon} {activeSection?.label}
              </h3>
              <p>{activeSection?.hint}</p>
            </div>
          </div>
          <div key={sectionAnimationKey} className="admin-section-content">
            {renderSectionEditor()}
          </div>
        </div>

        <aside className="admin-editor-side">
          <h4>Vista rápida</h4>
          <ul>
            <li>
              <strong>Idioma activo:</strong> {editLang === 'es' ? 'Español' : 'English'}
            </li>
            <li>
              <strong>Sección:</strong> {activeSection?.label}
            </li>
            <li>
              <strong>Bosses:</strong> {langData.bosses?.items?.length || 0}
            </li>
            <li>
              <strong>Clases:</strong> {langData.classes?.items?.length || 0}
            </li>
            <li>
              <strong>Estado:</strong> {saving ? '⏳ Guardando...' : hasPendingChanges ? '🟡 Pendiente' : '✅ Sin cambios'}
            </li>
          </ul>
          <p>
            Consejo: usa <strong>Guardar Cambios</strong> al terminar cada bloque para mantener iteraciones pequeñas.
          </p>
        </aside>
      </div>
    </div>
  )
}

