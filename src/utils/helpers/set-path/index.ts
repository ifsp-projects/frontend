// src/utils/set-path.ts

type Key = string | number
type Path = Key | Key[]

/**
 * Parses a lodash-style path string into an array of keys.
 * Supports dot notation and bracket/array-index notation:
 *   'a.b.c'      -> ['a', 'b', 'c']
 *   'items[0].name' -> ['items', 0, 'name']
 */
function toPath(path: Path): Key[] {
  if (Array.isArray(path)) return path
  if (typeof path === 'number') return [path]

  const keys: Key[] = []
  const regex = /[^.[\]]+/g
  let match: RegExpExecArray | null

  while ((match = regex.exec(path)) !== null) {
    const part = match[0]
    keys.push(/^\d+$/.test(part) ? Number(part) : part)
  }

  return keys
}

/**
 * Deeply sets `value` at `path` within `target`, creating any
 * intermediate objects/arrays that don't exist yet.
 *
 * Mutates `target` in place — designed to be called inside an
 * immer producer (e.g. zustand's `immer` middleware), where
 * mutating the draft is the correct, intended pattern.
 */
export function setPath<T extends Record<string, any>>(
  target: T,
  path: Path,
  value: unknown
): T {
  const keys = toPath(path)
  if (keys.length === 0) return target

  let node: any = target

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const nextKey = keys[i + 1]
    const child = node[key]

    if (child === null || typeof child !== 'object') {
      node[key] = typeof nextKey === 'number' ? [] : {}
    }

    node = node[key]
  }

  node[keys[keys.length - 1]] = value

  return target
}
