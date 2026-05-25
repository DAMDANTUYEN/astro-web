import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import StarShader from './StarShader'
import Galaxy from './Galaxy'
import Planet from './Planet'
import SpacePostFX from './SpacePostFX'

function SceneContent({ bortle, starRef }) {
  const density = Math.max(0.08, bortle / 100)

  useEffect(() => {
    if (starRef.current) {
      starRef.current.setDensity(density)
    }
  }, [density, starRef])

  const ambientLight = useMemo(() => {
    const intensity = (100 - bortle) / 200
    return <ambientLight intensity={Math.max(0.01, intensity * 0.5)} />
  }, [bortle])

  return (
    <>
      <ambientLight intensity={0.02} />
      <pointLight position={[100, 100, 100]} intensity={0.3} color="#f0d78c" />
      <pointLight position={[-100, -50, -100]} intensity={0.15} color="#7c4dff" />

      <StarShader ref={starRef} count={12000} density={density} />
      <Galaxy arms={4} count={60000} density={density} />
      <Planet position={[80, 15, -120]} scale={1.2} />

      <SpacePostFX intensity={1 + (1 - density) * 0.5} />
    </>
  )
}

export default function SpaceScene({ bortle }) {
  const starRef = useRef(null)

  return (
    <div className="space-scene">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 10000 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <SceneContent bortle={bortle} starRef={starRef} />
      </Canvas>
    </div>
  )
}
