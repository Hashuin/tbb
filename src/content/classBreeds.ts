import type { ClassSetLink, Language } from '../domain/content/types'

export type ClassGender = 'male' | 'female'

export type ClassBreedOption = {
  key: string
  nameEs: string
  nameEn: string
  maleId: number
  femaleId: number
}

export const classBreedOptions: readonly ClassBreedOption[] = [
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

export const availableBreedIllustrationIds = new Set([
  10, 11, 20, 21, 30, 31, 40, 41, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91,
  100, 101, 110, 111, 120, 121, 130, 131, 140, 141, 150, 151, 160, 161,
  180, 181, 190, 191,
])

export const getClassBreedOption = (breed?: string) =>
  classBreedOptions.find((option) => option.key === breed)

export const getClassNameFromBreed = (
  breed: string | undefined,
  language: Language,
  fallbackName: string,
) => {
  const option = getClassBreedOption(breed)
  if (!option) return fallbackName
  return language === 'es' ? option.nameEs : option.nameEn
}

export const getClassImageFromBreed = (
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

export const normalizeClassLinks = (
  links?: readonly (string | ClassSetLink)[],
): ClassSetLink[] =>
  (links || []).map((link) =>
    typeof link === 'string'
      ? { url: link, label: '' }
      : { url: link.url || '', label: link.label || '' },
  )
