---
name: threejs-astro-travel
description: >
  Create stunning, production-grade 3D space and astronomy scenes using Three.js in React + Vite projects.
  ALWAYS use this skill when the user asks for: space scenes, starfields, galaxy/nebula visuals, planet orbits,
  warp speed / hyperspace / space-stretch effects, camera fly-through in space, deep space travel animations,
  cosmic backgrounds, astronomy travel websites, or any WebGL/Three.js scene with a space theme.
  Covers advanced GLSL shaders, particle systems, post-processing, and cinematic camera rigs.
  Trigger even if the user says "make it look like flying through stars" or "space animation" without mentioning Three.js.
---

# Three.js Astro Travel Skill

Production-grade 3D astronomy scenes for **React + Vite** projects. Covers:
- 🌟 Starfield / star field 3D (static & animated)
- 🪐 Planets with textures, atmospheres, orbital paths
- 🌌 Milky Way / nebula (volumetric particle clouds)
- 🚀 Camera fly-through / warp speed / hyperspace stretch
- ✨ Space-stretch warp (stars elongate toward vanishing point)

---

## Stack

```
react + vite
three (^0.165)
@react-three/fiber ^8
@react-three/drei ^9
@react-three/postprocessing ^2
leva (debug GUI, optional)
```

Install:
```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
```

---

## Project Structure

```
src/
  components/
    StarField.jsx         # Particle starfield + warp stretch
    Galaxy.jsx            # Milky Way / nebula GLSL particles
    Planet.jsx            # Sphere + texture + atmosphere shader
    OrbitalSystem.jsx     # Planet orbits
    WarpTunnel.jsx        # Hyperspace warp effect
    SpaceScene.jsx        # Main canvas composer
  shaders/
    star.vert / star.frag
    atmosphere.vert / atmosphere.frag
    nebula.vert / nebula.frag
    warp.vert / warp.frag
  hooks/
    useWarp.js            # Warp speed state + animation
  App.jsx
```

---

## Core Patterns

### 1. Canvas Setup (SpaceScene.jsx)

```jsx
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function SpaceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 10000 }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: '#000005' }}
    >
      <StarField count={12000} />
      <Galaxy />
      <OrbitalSystem />

      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration offset={[0.0005, 0.0005]} />
      </EffectComposer>
    </Canvas>
  )
}
```

---

### 2. Starfield + Warp Stretch Effect

**Key technique**: In warp mode, pass a `warpFactor` uniform to the vertex shader. Stars elongate along the camera's forward axis (Z) by scaling their Y/X displacement toward the horizon.

```glsl
// star.vert — warp stretch shader
uniform float uTime;
uniform float uWarpFactor;   // 0 = normal, 1 = full warp
uniform float uSize;

attribute float aSize;
attribute float aPhase;      // random offset per star

varying float vBrightness;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  // Warp: stretch stars along view-space Z (depth axis)
  float stretch = 1.0 + uWarpFactor * abs(mvPosition.z) * 0.04;
  mvPosition.xy *= 1.0 / stretch;          // thin in XY
  mvPosition.z  *= stretch;                // elongate in Z

  // Twinkle
  vBrightness = 0.6 + 0.4 * sin(uTime * 2.0 + aPhase);

  gl_PointSize = aSize * uSize * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
```

```glsl
// star.frag
varying float vBrightness;

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  if (dist > 0.5) discard;

  // Soft glow core
  float alpha = smoothstep(0.5, 0.0, dist) * vBrightness;
  vec3 color = mix(vec3(0.6, 0.8, 1.0), vec3(1.0, 1.0, 1.0), vBrightness);
  gl_FragColor = vec4(color, alpha);
}
```

```jsx
// StarField.jsx
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '../shaders/star.vert?raw'
import fragmentShader from '../shaders/star.frag?raw'

export function StarField({ count = 12000, warpFactor = 0 }) {
  const ref = useRef()

  const { positions, sizes, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2000 + 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      sizes[i]  = Math.random() * 2.5 + 0.5
      phases[i] = Math.random() * Math.PI * 2
    }
    return { positions, sizes, phases }
  }, [count])

  const uniforms = useMemo(() => ({
    uTime:       { value: 0 },
    uWarpFactor: { value: 0 },
    uSize:       { value: 1.5 },
  }), [])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    uniforms.uWarpFactor.value += (warpFactor - uniforms.uWarpFactor.value) * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize"    args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase"   args={[phases, 1]} />
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
```

---

### 3. Warp Speed Hook

```js
// hooks/useWarp.js
import { useState, useRef, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export function useWarp() {
  const [active, setActive] = useState(false)
  const warpRef = useRef(0)   // 0–1
  const fovRef  = useRef(75)

  const engage  = useCallback(() => setActive(true), [])
  const disengage = useCallback(() => setActive(false), [])

  useFrame((state, delta) => {
    const target = active ? 1 : 0
    easing.damp(warpRef, 'current', target, 0.4, delta)

    // Dolly FOV for zoom-in effect
    const targetFov = active ? 110 : 75
    easing.damp(fovRef, 'current', targetFov, 0.5, delta)
    state.camera.fov = fovRef.current
    state.camera.updateProjectionMatrix()
  })

  return { warpFactor: warpRef.current, engage, disengage, active }
}
```

---

### 4. Nebula / Galaxy Particle Cloud

```glsl
// nebula.vert
uniform float uTime;
attribute float aRandom;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec3 pos = position;

  // Slow turbulent drift
  pos.x += sin(uTime * 0.1 + aRandom * 6.28) * 2.0;
  pos.y += cos(uTime * 0.13 + aRandom * 3.14) * 2.0;

  vAlpha = 0.3 + 0.2 * aRandom;
  vColor = mix(
    vec3(0.5, 0.0, 0.8),   // purple
    vec3(0.0, 0.4, 1.0),   // blue
    aRandom
  );

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (80.0 + aRandom * 60.0) * (1.0 / -mvPos.z);
  gl_Position  = projectionMatrix * mvPos;
}
```

```glsl
// nebula.frag
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float alpha = smoothstep(0.5, 0.0, d) * vAlpha * 0.6;
  gl_FragColor = vec4(vColor, alpha);
}
```

```jsx
// Galaxy.jsx  — 80,000 particle Milky Way arm
export function Galaxy({ arms = 5, count = 80000 }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const rnd = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const arm     = (i % arms) * ((Math.PI * 2) / arms)
      const radius  = Math.pow(Math.random(), 0.5) * 400
      const spin    = radius * 0.003
      const scatter = (Math.random() - 0.5) * radius * 0.25

      pos[i*3]     = Math.cos(arm + spin) * radius + scatter
      pos[i*3+1]   = (Math.random() - 0.5) * 20
      pos[i*3+2]   = Math.sin(arm + spin) * radius + scatter
      rnd[i]        = Math.random()
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('aRandom',  new THREE.BufferAttribute(rnd, 1))
    return geo
  }, [count, arms])

  // ... shaderMaterial with nebula vert/frag, AdditiveBlending
}
```

---

### 5. Planet with Atmosphere Shader

```glsl
// atmosphere.frag  — Fresnel rim glow
varying vec3 vNormal;
varying vec3 vViewDir;
uniform vec3 uAtmosphereColor;

void main() {
  float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(vViewDir)), 3.0);
  gl_FragColor = vec4(uAtmosphereColor, fresnel * 0.8);
}
```

```jsx
// Planet.jsx
import { useTexture } from '@react-three/drei'

export function Planet({ radius = 1, textureUrl, atmosphereColor = [0.3, 0.6, 1.0], ...props }) {
  const texture = useTexture(textureUrl)

  return (
    <group {...props}>
      {/* Surface */}
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Atmosphere glow — slightly larger sphere, backside render */}
      <mesh scale={1.05}>
        <sphereGeometry args={[radius, 32, 32]} />
        <shaderMaterial
          vertexShader={atmosphereVert}
          fragmentShader={atmosphereFrag}
          uniforms={{ uAtmosphereColor: { value: atmosphereColor } }}
          transparent side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
```

---

### 6. Camera Fly-Through

```jsx
// Use @react-three/drei CameraControls or manual animation
import { CameraControls } from '@react-three/drei'
import { useRef } from 'react'

export function FlyCamera({ waypoints }) {
  const ccRef = useRef()

  // Animate through waypoints on user trigger
  const fly = async () => {
    for (const wp of waypoints) {
      await ccRef.current.setLookAt(
        ...wp.position, ...wp.target, true  // true = animated
      )
    }
  }

  return <CameraControls ref={ccRef} />
}
```

---

## Performance Guidelines

| Scene | Target FPS | Tips |
|---|---|---|
| Starfield only | 60fps | `depthWrite=false`, AdditiveBlending |
| + Galaxy 80k | 60fps | frustum cull, LOD on radius |
| + Planets + Post | 60fps | limit bloom passes, use FXAA not MSAA |
| Warp active | 60fps | reduce count to 6k during warp |

- Use `instancedMesh` for repeated objects (asteroids, distant stars)
- `useFrame` delta-time always, never fixed steps
- Dispose geometries/materials on unmount: `useEffect(() => () => geo.dispose(), [])`
- `dpr={[1, 2]}` on Canvas to cap pixel ratio on retina

---

## Vite Config for GLSL

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GLSL imported as ?raw strings — no extra plugin needed with Three.js
})
```

Import shaders:
```js
import vertexShader   from './shaders/star.vert?raw'
import fragmentShader from './shaders/star.frag?raw'
```

---

## Common Pitfalls

- **Stars disappear in warp**: set `depthTest={false}` on star material
- **Bloom bleeds on UI**: use `<EffectComposer renderPriority={1}>` and set HTML UI `z-index` above canvas
- **Galaxy arms clump**: use `Math.pow(random, 0.5)` for radius to spread inner density
- **Atmosphere z-fighting**: use `polygonOffset` or scale atmosphere slightly larger
- **Warp FOV jump**: always lerp FOV with easing, never set directly

---

## Read Also

- `references/glsl-snippets.md` — reusable noise, hash, rotate GLSL functions
- `references/postprocessing.md` — full EffectComposer recipe for space scenes
