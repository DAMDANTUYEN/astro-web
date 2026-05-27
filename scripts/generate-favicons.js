/* eslint-env node */
import sharp from 'sharp'
import { mkdirSync, writeFileSync, copyFileSync } from 'fs'

const src = 'logo.png'
const outDir = 'public'

mkdirSync(outDir, { recursive: true })

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
]

for (const { name, size } of sizes) {
  await sharp(src)
    .resize(size, size)
    .png()
    .toFile(`${outDir}/${name}`)
  console.log(`  ✓ ${name} (${size}x${size})`)
}

// Generate ICO: 16x16, 32x32, 48x48
const icoSizes = [16, 32, 48]
const icoPngBuffers = []
for (const s of icoSizes) {
  const buf = await sharp(src).resize(s, s).png().toBuffer()
  icoPngBuffers.push(buf)
}

const icoHeader = Buffer.alloc(6)
icoHeader.writeUInt16LE(0, 0)
icoHeader.writeUInt16LE(1, 2)
icoHeader.writeUInt16LE(icoPngBuffers.length, 4)

let icoOffset = 6 + icoPngBuffers.length * 16
const icoEntries = []

for (let i = 0; i < icoPngBuffers.length; i++) {
  const buf = icoPngBuffers[i]
  const entry = Buffer.alloc(16)
  const d = icoSizes[i]
  entry.writeUInt8(d, 0)
  entry.writeUInt8(d, 1)
  entry.writeUInt8(0, 2)
  entry.writeUInt8(0, 3)
  entry.writeUInt16LE(1, 4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(buf.length, 8)
  entry.writeUInt32LE(icoOffset, 12)
  icoOffset += buf.length
  icoEntries.push(entry)
}

const icoFile = Buffer.concat([icoHeader, ...icoEntries, ...icoPngBuffers])
writeFileSync(`${outDir}/favicon.ico`, icoFile)
console.log('  ✓ favicon.ico (16x16 + 32x32 + 48x48)')

copyFileSync(src, `${outDir}/logo.png`)
console.log('  ✓ logo.png (copied to public/)')

console.log('\nDone. All favicons in public/')
