varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;

  float glow = smoothstep(0.5, 0.0, d);
  float alpha = glow * vAlpha;

  gl_FragColor = vec4(vColor, alpha);
}
