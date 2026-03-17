'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Color } from 'three'
import ThreeGlobe from 'three-globe'

import countries from '@/constants/components/globe/globe.json'
import { genRandomNumbers } from '@/utils/helpers/get-random-number'
import { hexToRgb } from '@/utils/helpers/hex-to-rgb'
import { extend } from '@react-three/fiber'

import type { WorldProps } from './types'

const RING_PROPAGATION_SPEED = 3
let numbersOfRings: number[] = []

extend({ ThreeGlobe })

const Globe: React.FC<WorldProps> = ({ globeConfig, data }) => {
  const globeRef = useRef<ThreeGlobe | null>(null)

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: '#ffffff',
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: 'rgba(255,255,255,0.7)',
    globeColor: '#1d072e',
    emissive: '#000000',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig
  }

  const globeData = useMemo(() => {
    const points = data.flatMap(arc => {
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number }

      return [
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.startLat,
          lng: arc.startLng
        },
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.endLat,
          lng: arc.endLng
        }
      ]
    })

    const filtered = points.filter(
      (v, i, a) =>
        a.findIndex(v2 =>
          ['lat', 'lng'].every(
            k => v2[k as 'lat' | 'lng'] === v[k as 'lat' | 'lng']
          )
        ) === i
    )

    return filtered
  }, [data, defaultProps.pointSize])

  const _buildMaterial = () => {
    if (!globeRef.current) return

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color
      emissive: Color
      emissiveIntensity: number
      shininess: number
    }

    globeMaterial.color = new Color(defaultProps.globeColor)
    globeMaterial.emissive = new Color(defaultProps.emissive)
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity
    globeMaterial.shininess = defaultProps.shininess
  }

  useEffect(() => {
    if (!globeRef.current) return

    _buildMaterial()

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor)

    startAnimation()
  }, [globeRef.current, globeData])

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return

    globeRef.current
      .arcsData(data)
      .arcStartLat(d => (d as { startLat: number }).startLat)
      .arcStartLng(d => (d as { startLng: number }).startLng)
      .arcEndLat(d => (d as { endLat: number }).endLat)
      .arcEndLng(d => (d as { endLng: number }).endLng)
      .arcColor(e => (e as { color: string }).color)
      .arcAltitude(e => (e as { arcAlt: number }).arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap(e => (e as { order: number }).order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime)

    globeRef.current
      .pointsData(data)
      .pointColor(e => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2)

    globeRef.current
      .ringsData([])
      .ringColor((e: any) => (t: any) => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      )
  }

  useEffect(() => {
    if (!globeRef.current || !globeData) return

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return
      numbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      )

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [globeRef.current, globeData])

  const [shouldRenderGlobe, setShouldRenderGlobe] = useState<boolean>(true)

  useEffect(() => {
    const cores = navigator.hardwareConcurrency || 4
    const memory = (navigator as any).deviceMemory || 8

    if (cores <= 2 || memory < 4) {
      setShouldRenderGlobe(false)
    }
  }, [])

  if (!shouldRenderGlobe) {
    return <></>
  }

  return <threeGlobe ref={globeRef} />
}

export default Globe
