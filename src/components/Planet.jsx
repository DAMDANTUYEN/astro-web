import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import atmosphereVert from '../shaders/atmosphere.vert?raw'
import atmosphereFrag from '../shaders/atmosphere.frag?raw'

export default function Planet({ position: pos = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()

  const atmosphereUniforms = useMemo(() => ({
    uAtmosphereColor: { value: new THREE.Color(0.3, 0.6, 1.0) },
    uTime: { value: 0 },
  }), [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = pos[1] + Math.sin(clock.getElapsedTime() * 0.2) * 2
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
    atmosphereUniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <group ref={groupRef} position={pos} scale={scale}>
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial
          color="#2a4a7a"
          roughness={0.7}
          metalness={0.3}
          emissive="#0a1a3a"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh scale={1.06}>
        <sphereGeometry args={[4, 48, 48]} />
        <shaderMaterial
          vertexShader={atmosphereVert}
          fragmentShader={atmosphereFrag}
          uniforms={atmosphereUniforms}
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh rotation={[0.3, 0, 0]}>
        <ringGeometry args={[5.5, 7.5, 64]} />
        <meshBasicMaterial
          color="#4a6a9a"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
