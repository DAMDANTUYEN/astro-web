uniform float uTime;
uniform float uStarDensity;

attribute float aRandom;

varying vec3 vColor;
varying float vAlpha;

float hash(float n) { return fract(sin(n) * 43758.5453); }

void main() {
  vec3 pos = position;

  pos.x += sin(uTime * 0.08 + aRandom * 6.28) * 3.0;
  pos.y += cos(uTime * 0.1 + aRandom * 3.14) * 2.0;
  pos.z += sin(uTime * 0.06 + aRandom * 4.71) * 2.0;

  float r = aRandom;
  vAlpha = (0.15 + 0.25 * r) * uStarDensity;
  vColor = mix(
    mix(vec3(0.4, 0.0, 0.7), vec3(0.0, 0.3, 0.9), r),
    vec3(0.8, 0.2, 0.6),
    smoothstep(0.6, 1.0, r)
  );

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (40.0 + r * 60.0) * (4.0 / -mvPos.z);
  gl_Position = projectionMatrix * mvPos;
}
