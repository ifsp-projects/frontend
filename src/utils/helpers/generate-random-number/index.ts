import { randomBytes } from 'crypto'

export const generateRandomNumber = (min: number, max: number): number => {
  const range = max - min + 1
  const bytes = randomBytes(4)
  const value = bytes.readUInt32BE(0)
  return min + (value % range)
}
