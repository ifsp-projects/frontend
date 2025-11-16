/**
 * Generates a URL-friendly slug from the provided text.
 *
 * Normalizes Unicode characters, removes diacritics, converts to lowercase,
 * replaces spaces/underscores with hyphens, removes special characters,
 * and trims excess hyphens.
 *
 * @example
 * generateSlug({ text: "Hello World!" }) // returns "hello-world"
 * generateSlug({ text: "Café_Résumé" }) // returns "cafe-resume"
 */
export const generateSlug = ({ text }: { text: string }): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
