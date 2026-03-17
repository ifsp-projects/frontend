export const genRandomNumbers = (
  min: number,
  max: number,
  count: number
): number[] => {
  const arr = []
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (arr.indexOf(r) === -1) arr.push(r)
  }

  return arr
}
