/**
 * Converts a hexadecimal color string (e.g., `#ff00ff` or shorthand `#f0f`)
 * into an RGB object.
 *
 * This utility supports both 3-digit shorthand and 6-digit hex formats.
 * If the input is invalid, it returns `null`.
 *
 * Example usage:
 * ```ts
 * const rgb = hexToRgb('#03f');
 * console.log(rgb); // { r: 0, g: 51, b: 255 }
 *
 * const rgb2 = hexToRgb('#ff00ff');
 * console.log(rgb2); // { r: 255, g: 0, b: 255 }
 * ```
 *
 * @param {string} hex - A hexadecimal color string (with or without `#`).
 * @returns {{ r: number; g: number; b: number } | null} An object with `r`, `g`, and `b` properties
 * representing the red, green, and blue channels, or `null` if the input is invalid.
 */
export const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}
