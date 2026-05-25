uniform vec3 uAtmosphereColor;
uniform float uTime;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  float fresnel = pow(1.0 - max(dot(normalize(vNormal), normalize(vViewDir)), 0.0), 3.0);

  float pulse = 0.9 + 0.1 * sin(uTime * 0.5);
  vec3 color = uAtmosphereColor * pulse;

  gl_FragColor = vec4(color, fresnel * 0.7);
}
