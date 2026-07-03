'use client'

import { useEffect } from 'react'

import { useThree } from '@react-three/fiber'

export const WebGLRendererConfig: React.FC = () => {
  const { gl, size } = useThree()

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    gl.setSize(size.width, size.height)
    gl.setClearColor(0xf8fafc, 0)
  }, [])

  return null
}
