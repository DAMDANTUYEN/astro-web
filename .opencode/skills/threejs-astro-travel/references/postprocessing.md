# Post-Processing Recipe for Space Scenes

## Full EffectComposer Stack (React Three Fiber)

```jsx
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Noise, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'

function SpacePostFX({ warpFactor = 0 }) {
  return (
    <EffectComposer multisampling={0}>
      {/* Bloom: makes stars and nebula glow */}
      <Bloom
        intensity={warpFactor > 0.5 ? 3.0 : 1.2}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.85}
        kernelSize={KernelSize.LARGE}
        blendFunction={BlendFunction.ADD}
      />

      {/* Chromatic aberration: stronger during warp */}
      <ChromaticAberration
        offset={[0.0005 + warpFactor * 0.003, 0.0005 + warpFactor * 0.003]}
        blendFunction={BlendFunction.NORMAL}
      />

      {/* Subtle film grain for depth */}
      <Noise opacity={0.03} blendFunction={BlendFunction.ADD} />

      {/* Vignette: focus the eye toward center */}
      <Vignette offset={0.3} darkness={0.6} blendFunction={BlendFunction.NORMAL} />

      {/* DOF: blur distant stars slightly (optional) */}
      {/* <DepthOfField focusDistance={0.01} focalLength={0.02} bokehScale={2} /> */}
    </EffectComposer>
  )
}
```

## Warp-Specific Post Effects

During warp, add:
- Increase ChromaticAberration offset (color split)
- Boost Bloom intensity to 2.5–3.5
- Add a radial blur pass (custom ShaderPass)

```jsx
// Radial motion blur for warp — custom ShaderPass
const radialBlurShader = {
  uniforms: {
    tDiffuse:   { value: null },
    uStrength:  { value: 0.0 },
    uCenter:    { value: new THREE.Vector2(0.5, 0.5) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    uniform vec2 uCenter;
    varying vec2 vUv;
    void main() {
      vec2 dir = vUv - uCenter;
      vec4 color = vec4(0.0);
      int SAMPLES = 12;
      for (int i = 0; i < 12; i++) {
        float t = float(i) / float(12);
        color += texture2D(tDiffuse, vUv - dir * uStrength * t);
      }
      gl_FragColor = color / float(12);
    }
  `,
}
```

## Performance Tiers

| Quality | multisampling | Bloom kernel | Extras |
|---------|--------------|--------------|--------|
| Low  | 0 | SMALL  | Bloom only |
| Mid  | 0 | MEDIUM | + Vignette |
| High | 0 | LARGE  | + ChromAb + Noise |
| Warp | 0 | HUGE   | + RadialBlur |

Always set `multisampling={0}` with EffectComposer — MSAA conflicts with post-processing. Use FXAA if needed.
