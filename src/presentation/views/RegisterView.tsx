import type { ComponentType, Dispatch, FormEventHandler, SetStateAction } from 'react'

type Language = 'es' | 'en'

type LocalizedText = unknown

type DungeonSummary = {
  id: string
  name: LocalizedText
}

type RegisterFormData = {
  title: string
  lead: string
  note: string
  warning: string
  submit: string
  success: string
  fields: {
    name: string
    role: string
    level: string
    availability: string
    contact: string
    build: string
  }
  placeholders: {
    name: string
    role: string
    contact: string
    build: string
  }
  selectPlaceholder: string
  levelOptions: readonly string[]
  weekDays: readonly string[]
  from: string
  to: string
}

type RegisterViewData = {
  form: RegisterFormData
}

type RegisterViewProps = {
  ViewHeader: ComponentType
  data: RegisterViewData
  language: Language
  isSupabaseConfigured: boolean
  handleSubmit: FormEventHandler<HTMLFormElement>
  availabilityDays: string[]
  setAvailabilityDays: Dispatch<SetStateAction<string[]>>
  availabilityStart: string
  setAvailabilityStart: Dispatch<SetStateAction<string>>
  availabilityEnd: string
  setAvailabilityEnd: Dispatch<SetStateAction<string>>
  mergedDungeonGuides: readonly DungeonSummary[]
  getText: (value: unknown, lang: Language) => string
  interestGuides: number[]
  setInterestGuides: Dispatch<SetStateAction<number[]>>
  toggleInterest: (
    value: number,
    setSelected: Dispatch<SetStateAction<number[]>>,
  ) => void
  submitted: boolean
  submitError: string | null
}

export const RegisterView = ({
  ViewHeader,
  data,
  language,
  isSupabaseConfigured,
  handleSubmit,
  availabilityDays,
  setAvailabilityDays,
  availabilityStart,
  setAvailabilityStart,
  availabilityEnd,
  setAvailabilityEnd,
  mergedDungeonGuides,
  getText,
  interestGuides,
  setInterestGuides,
  toggleInterest,
  submitted,
  submitError,
}: RegisterViewProps) => {
  return (
    <div className="route-view">
      <ViewHeader />
      <section className="section reveal">
        <div className="section-header">
          <h2>{data.form.title}</h2>
          <p>{data.form.lead}</p>
          <span className="form-note">{data.form.note}</span>
          {!isSupabaseConfigured ? (
            <span className="form-warning">{data.form.warning}</span>
          ) : null}
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            {data.form.fields.name}
            <input
              name="name"
              placeholder={data.form.placeholders.name}
              required
            />
          </label>
          <label>
            {data.form.fields.role}
            <input
              name="role"
              placeholder={data.form.placeholders.role}
              required
            />
          </label>
          <label>
            {data.form.fields.level}
            <select name="level" required>
              <option value="">{data.form.selectPlaceholder}</option>
              {data.form.levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              {data.form.fields.availability}
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {data.form.weekDays.map((day) => (
                <label key={day} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={availabilityDays.includes(day)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAvailabilityDays([...availabilityDays, day])
                      } else {
                        setAvailabilityDays(availabilityDays.filter((d) => d !== day))
                      }
                    }}
                  />
                  <span>{day}</span>
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <label style={{ flex: '1', minWidth: '120px' }}>
                {data.form.from}
                <input
                  type="time"
                  value={availabilityStart}
                  onChange={(e) => setAvailabilityStart(e.target.value)}
                  required
                />
              </label>
              <label style={{ flex: '1', minWidth: '120px' }}>
                {data.form.to}
                <input
                  type="time"
                  value={availabilityEnd}
                  onChange={(e) => setAvailabilityEnd(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <label>
            {data.form.fields.contact}
            <input
              name="contact"
              placeholder={data.form.placeholders.contact}
              required
            />
          </label>
          <label>
            {data.form.fields.build}
            <textarea
              name="build"
              rows={4}
              placeholder={data.form.placeholders.build}
            />
          </label>
          <div className="interest-block">
            <div className="interest-group">
              <h3>{language === 'es' ? 'Interés en dungeons' : 'Interested dungeons'}</h3>
              <div className="interest-options">
                {mergedDungeonGuides.map((dungeon, index) => (
                  <label key={dungeon.id} className="interest-option">
                    <span>{getText(dungeon.name, language)}</span>
                    <input
                      type="checkbox"
                      checked={interestGuides.includes(index)}
                      onChange={() =>
                        toggleInterest(index, setInterestGuides)
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="primary">
            {data.form.submit}
          </button>
          {submitted && !submitError ? <p className="success">{data.form.success}</p> : null}
          {submitError ? <p className="error">{submitError}</p> : null}
        </form>
      </section>
    </div>
  )
}
