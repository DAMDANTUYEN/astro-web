import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '../shaders/nebula.vert?raw'
import fragmentShader from '../shaders/nebula.frag?raw'

export default function Galaxy({ arms = 4, count = 60000, density = 1 }) {
  const ref = useRef()

  const { positions, randoms } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const rnd = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const arm = (i % arms) * ((Math.PI * 2) / arms)
      const radius = Math.pow(Math.random(), 0.4) * 500
      const spin = radius * 0.005
      const scatter = (Math.random() - 0.5) * radius * 0.3
      const scatterZ = (Math.random() - 0.5) * 30

      pos[i * 3] = Math.cos(arm + spin) * radius + scatter
      pos[i * 3 + 1] = scatterZ
      pos[i * 3 + 2] = Math.sin(arm + spin) * radius + scatter
      rnd[i] = Math.random()
    }
    return { positions: pos, randoms: rnd }
  }, [count, arms])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uStarDensity: { value: 1 },
  }), [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.00008
    }
    uniforms.uTime.value = clock.getElapsedTime()
    uniforms.uStarDensity.value = density
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={count}
          array={randoms}
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
}
