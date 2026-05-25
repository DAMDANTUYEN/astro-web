import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ bortle }) {
  const ref = useRef()
  const count = 6000

  const [positions, colors, sizes, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const pha = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 200 + Math.random() * 800
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const b = 0.3 + Math.random() * 0.7
      const tint = Math.random()
      if (tint < 0.04) {
        col[i * 3] = 0.5; col[i * 3 + 1] = 0.3; col[i * 3 + 2] = 1.0
      } else if (tint < 0.08) {
        col[i * 3] = 1.0; col[i * 3 + 1] = 0.7; col[i * 3 + 2] = 0.4
      } else if (tint < 0.13) {
        col[i * 3] = 0.4; col[i * 3 + 1] = 0.8; col[i * 3 + 2] = 0.9
      } else {
        col[i * 3] = b; col[i * 3 + 1] = b; col[i * 3 + 2] = b
      }
      siz[i] = 0.3 + Math.random() * 2.5
      pha[i] = Math.random() * Math.PI * 2
    }
    return [pos, col, siz, pha]
  }, [])

  const materialRef = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.00025
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.00012) * 0.04
    }
    if (materialRef.current) {
      const size = 1.2 + Math.sin(clock.getElapsedTime() * 0.5) * 0.3
      materialRef.current.size = size
    }
  })

  const opacity = Math.max(0.08, bortle / 100)

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
        ref={materialRef}
        size={1.5}
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

function BrightStars({ bortle }) {
  const ref = useRef()
  const count = 80

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 300 + Math.random() * 600
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      siz[i] = 2 + Math.random() * 4
    }
    return [pos, siz]
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.00025
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.00012) * 0.04
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
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        color="#f0d78c"
        transparent
        opacity={opacity * 0.6}
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
    const pos = new Float32Array(3000 * 3)
    const colors = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      const angle = (Math.random() - 0.5) * 2.5
      const spread = Math.random() * 100
      const dist = 350 + Math.random() * 400
      pos[i * 3] = Math.cos(angle) * dist
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = Math.sin(angle) * dist
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.00015
    }
  })

  const opacity = Math.max(0, (bortle - 30) / 70) * 0.2

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={3000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={5}
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
        <BrightStars bortle={bortle} />
      </Canvas>
    </div>
  )
}
