export const HOME_SLUG = 'home'

export function isHomeSlug(slug: string | null | undefined): boolean {
  return slug === HOME_SLUG
}

export function pageToPath(slug: string | null | undefined): string {
  return isHomeSlug(slug) ? '/' : `/${slug}`
}
