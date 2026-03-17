const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

self.onmessage = (e: MessageEvent) => {
  const data = e.data

  const points = []

  for (let i = 0; i < data.length; i++) {
    const arc = data[i]
    const rgb = hexToRgb(arc.color)
    if (!rgb) continue
    points.push({
      size: 1,
      order: arc.order,
      color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
      lat: arc.startLat,
      lng: arc.startLng
    })
    points.push({
      size: 1,
      order: arc.order,
      color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
      lat: arc.endLat,
      lng: arc.endLng
    })
  }

  const filteredPoints = points.filter(
    (v, i, a) => a.findIndex(v2 => v2.lat === v.lat && v2.lng === v.lng) === i
  )

  postMessage(filteredPoints)
}
