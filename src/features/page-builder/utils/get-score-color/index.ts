export const getScoreColor = (n: number) =>
  n >= 90 ? 'text-green-400' : n >= 50 ? 'text-yellow-400' : 'text-red-400'
