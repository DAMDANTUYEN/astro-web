uniform float uTime;
uniform float uWarpFactor;
uniform float uSize;
uniform float uStarDensity;

attribute float aSize;
attribute float aPhase;
attribute float aColorTemp;

varying float vBrightness;
varying vec3 vColor;

vec3 starColor(float temp) {
  return mix(
    mix(vec3(1.0, 0.3, 0.1), vec3(1.0, 1.0, 0.9), smoothstep(0.0, 0.5, temp)),
    mix(vec3(1.0, 1.0, 0.9), vec3(0.5, 0.7, 1.0), smoothstep(0.5, 1.0, temp)),
    step(0.5, temp)
  );
}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  float stretch = 1.0 + uWarpFactor * abs(mvPosition.z) * 0.04;
  mvPosition.xy /= stretch;
  mvPosition.z *= stretch;

  float twinkle = 0.4 + 0.6 * sin(uTime * (1.5 + aPhase * 0.5) + aPhase * 6.28);
  vBrightness = twinkle;

  vColor = starColor(aColorTemp);

  float pointSize = aSize * uSize * (800.0 / -mvPosition.z) * uStarDensity;
  gl_PointSize = max(pointSize, 0.5);
  gl_Position = projectionMatrix * mvPosition;
}
