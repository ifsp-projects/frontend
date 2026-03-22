export function normalizeEventProperty(property: string) {
  return property.replace(/([A-Z])/g, '_$1').toLowerCase()
}

// Ensures that all events properties are normalized to lowercase with underscores (snake_case). Example: courseId -> course_id
export function normalizeEventProperties(eventProperties: Record<string, any>) {
  return Object.entries(eventProperties).reduce((acc, [key, value]) => {
    const normalizedKey = normalizeEventProperty(key)
    acc[normalizedKey] = value
    return acc
  }, {})
}
