varying float vBrightness;
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  if (dist > 0.5) discard;

  float alpha = smoothstep(0.5, 0.0, dist) * vBrightness;

  vec3 glow = vColor * (1.0 + (1.0 - dist * 2.0) * 0.5);
  gl_FragColor = vec4(glow, alpha);
}
