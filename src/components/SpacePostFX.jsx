import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'

export default function SpacePostFX({ intensity = 1 }) {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={1.5 * intensity}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.85}
        kernelSize={KernelSize.LARGE}
        blendFunction={BlendFunction.ADD}
      />
      <ChromaticAberration
        offset={[0.0004, 0.0004]}
        blendFunction={BlendFunction.NORMAL}
      />
      <Vignette
        offset={0.35}
        darkness={0.65}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
