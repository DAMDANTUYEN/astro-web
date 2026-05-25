import { useRef, useMemo, forwardRef, useImperativeHandle } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '../shaders/star.vert?raw'
import fragmentShader from '../shaders/star.frag?raw'

const StarShader = forwardRef(function StarShader({ count = 12000, warpFactor = 0, density = 1 }, ref) {
  const meshRef = useRef()
  const warpRef = useRef(0)

  const { positions, sizes, phases, colorTemps } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)
    const colorTemps = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const radius = 100 + Math.random() * 2000
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      sizes[i] = 0.3 + Math.random() * 2.5
      phases[i] = Math.random() * Math.PI * 2
      colorTemps[i] = Math.random()
    }
    return { positions, sizes, phases, colorTemps }
  }, [count])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWarpFactor: { value: 0 },
    uSize: { value: 1.2 },
    uStarDensity: { value: 1 },
  }), [])

  useImperativeHandle(ref, () => ({
    setDensity: (v) => { uniforms.uStarDensity.value = v },
  }))

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.00015
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.00008) * 0.02
    }
    uniforms.uTime.value = clock.getElapsedTime()
    warpRef.current += (warpFactor - warpRef.current) * 0.05
    uniforms.uWarpFactor.value = warpRef.current
    uniforms.uStarDensity.value = density
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={count}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aPhase"
          count={count}
          array={phases}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aColorTemp"
          count={count}
          array={colorTemps}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
})

export default StarShader
