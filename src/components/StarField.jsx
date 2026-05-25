import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ bortle }) {
  const ref = useRef()
  const count = 4000

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 300 + Math.random() * 700
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const b = 0.4 + Math.random() * 0.6
      const tint = Math.random()
      if (tint < 0.05) {
        col[i * 3] = 0.6; col[i * 3 + 1] = 0.4; col[i * 3 + 2] = 1.0
      } else if (tint < 0.1) {
        col[i * 3] = 1.0; col[i * 3 + 1] = 0.8; col[i * 3 + 2] = 0.5
      } else {
        col[i * 3] = b; col[i * 3 + 1] = b; col[i * 3 + 2] = b
      }
      siz[i] = 0.5 + Math.random() * 2
    }
    return [pos, col, siz]
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.0003
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.00015) * 0.05
    }
  })

  const opacity = Math.max(0.05, bortle / 100)

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
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        vertexColors
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function MilkyWay({ bortle }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      const angle = (Math.random() - 0.5) * 2
      const spread = Math.random() * 80
      const dist = 400 + Math.random() * 300
      pos[i * 3] = Math.cos(angle) * dist
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = Math.sin(angle) * dist
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.0002
    }
  })

  const opacity = Math.max(0, (bortle - 40) / 60) * 0.15

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={4}
        color="#a78bfa"
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function StarField({ bortle }) {
  return (
    <div className="starfield-container">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <MilkyWay bortle={bortle} />
        <Stars bortle={bortle} />
      </Canvas>
    </div>
  )
}
