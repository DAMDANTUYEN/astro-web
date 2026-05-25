# GLSL Utility Snippets for Space Scenes

## Hash / Random

```glsl
float hash(float n) { return fract(sin(n) * 43758.5453); }
vec2  hash2(vec2 p)  { return fract(sin(vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)))) * 43758.5453); }
```

## Value Noise

```glsl
float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f*f*(3.0 - 2.0*f);
  return mix(mix(mix(hash(dot(i,vec3(1,57,113))),hash(dot(i+vec3(1,0,0),vec3(1,57,113))),f.x),
                 mix(hash(dot(i+vec3(0,1,0),vec3(1,57,113))),hash(dot(i+vec3(1,1,0),vec3(1,57,113))),f.x),f.y),
             mix(mix(hash(dot(i+vec3(0,0,1),vec3(1,57,113))),hash(dot(i+vec3(1,0,1),vec3(1,57,113))),f.x),
                 mix(hash(dot(i+vec3(0,1,1),vec3(1,57,113))),hash(dot(i+vec3(1,1,1),vec3(1,57,113))),f.x),f.y),f.z);
}
```

## FBM (Fractal Brownian Motion) — for nebula clouds

```glsl
float fbm(vec3 p) {
  float v = 0.0, a = 0.5;
  mat3 rot = mat3(0.8,-0.6,0.0, 0.6,0.8,0.0, 0.0,0.0,1.0);
  for (int i=0; i<6; i++) {
    v += a * noise(p);
    p = rot * p * 2.0;
    a *= 0.5;
  }
  return v;
}
```

## Rotation Matrix

```glsl
mat2 rotate2D(float angle) {
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}
mat3 rotateY(float a) {
  float c=cos(a), s=sin(a);
  return mat3(c,0,s, 0,1,0, -s,0,c);
}
```

## Fresnel (atmosphere rim)

```glsl
float fresnel(vec3 normal, vec3 viewDir, float power) {
  return pow(1.0 - max(dot(normalize(normal), normalize(viewDir)), 0.0), power);
}
```

## Star Twinkle

```glsl
float twinkle(float phase, float time) {
  return 0.7 + 0.3 * sin(time * 3.0 + phase) * cos(time * 1.7 + phase * 2.3);
}
```

## Soft Circle (for point sprites)

```glsl
float softCircle(vec2 uv, float radius) {
  return smoothstep(radius, radius * 0.5, length(uv - 0.5));
}
```

## HDR Star Color from temperature (Kelvin-ish)

```glsl
vec3 starColor(float temp) {
  // temp: 0=red giant, 0.5=white, 1=blue
  return mix(
    mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 1.0, 0.9), smoothstep(0.0, 0.5, temp)),
    mix(vec3(1.0, 1.0, 0.9), vec3(0.5, 0.7, 1.0), smoothstep(0.5, 1.0, temp)),
    step(0.5, temp)
  );
}
```

## Warp Stretch (vertex shader)

```glsl
// Apply in vertex shader after modelViewMatrix transform
// warpFactor: 0 = normal, 1 = full hyperspace
vec4 applyWarpStretch(vec4 mvPos, float warpFactor) {
  float depth  = abs(mvPos.z);
  float stretch = 1.0 + warpFactor * depth * 0.05;
  mvPos.xy /= stretch;
  mvPos.z  *= stretch;
  return mvPos;
}
```

## Volumetric Ray March (simple, for nebula billboard)

```glsl
// 8-step cheap ray march through fbm noise volume
float volumeNebula(vec3 ro, vec3 rd) {
  float density = 0.0;
  float t = 0.0;
  for (int i = 0; i < 8; i++) {
    vec3 p = ro + rd * t;
    density += fbm(p * 0.5) * 0.125;
    t += 0.5;
  }
  return clamp(density, 0.0, 1.0);
}
```
