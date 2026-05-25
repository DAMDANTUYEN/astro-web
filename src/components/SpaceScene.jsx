import { Canvas } from '@react-three/fiber'
import StarShader from './StarShader'
import Galaxy from './Galaxy'
import Planet from './Planet'
import SpacePostFX from './SpacePostFX'

function SceneContent({ bortle }) {
  const density = Math.max(0.08, bortle / 100)

  return (
    <>
      <color attach="background" args={['#05080f']} />
      <fog attach="fog" args={['#05080f', 100, 800]} />
      <ambientLight intensity={0.02} />
      <pointLight position={[100, 100, 100]} intensity={0.3} color="#f0d78c" />
      <pointLight position={[-100, -50, -100]} intensity={0.15} color="#7c4dff" />

      <StarShader count={12000} density={density} />
      <Galaxy arms={4} count={40000} density={density} />
      <Planet position={[25, 3, -40]} scale={1.8} />

      <SpacePostFX intensity={1 + (1 - density) * 0.5} />
    </>
  )
}

export default function SpaceScene({ bortle }) {
  return (
    <div className="space-scene">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 10000 }}
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent bortle={bortle} />
      </Canvas>
    </div>
  )
}
