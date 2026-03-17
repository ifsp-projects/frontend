/* eslint-disable */

'use client'

import React from 'react'
import { Fog, PerspectiveCamera, Scene, Vector3 } from 'three'

import { OrbitControls } from '@react-three/drei'
import { WorldProps } from './globe/types'
import { WebGLRendererConfig } from './webgl-config'
import dynamic from 'next/dynamic'

const Canvas = dynamic(
  () => import('@react-three/fiber').then(mod => mod.Canvas),
  {
    ssr: false
  }
)

const Globe = dynamic(() => import('./globe'), { ssr: false })

const aspect = 1.2
const cameraZ = 300

export const World: React.FC<WorldProps> = ({ data, globeConfig }) => {
  const scene = new Scene()

  scene.fog = new Fog(0xf8fafc, 400, 2000)

  return (
    <Canvas camera={new PerspectiveCamera(50, aspect, 180, 1800)} scene={scene}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        intensity={0.8}
        position={new Vector3(-200, 500, 200)}
      />
      <Globe data={data} globeConfig={globeConfig} />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={1}
        enablePan={false}
        enableZoom={false}
        maxDistance={cameraZ}
        maxPolarAngle={Math.PI - Math.PI / 3}
        minDistance={cameraZ}
        minPolarAngle={Math.PI / 3.5}
      />
    </Canvas>
  )
}
