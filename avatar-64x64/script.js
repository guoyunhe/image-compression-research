import { stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const size = 64;

const input = join(import.meta.dirname, '..', 'avatar-32x32', 'input.jpg');

const jpegOutput = join(import.meta.dirname, 'output.jpg');
await sharp(input).resize(size, size).toFile(jpegOutput);
const {size: jpegSize} = await stat(jpegOutput);
console.log('JPEG', jpegSize, '100%');

const webpOutput = join(import.meta.dirname, 'output.webp');    
await sharp(input).resize(size, size).toFormat('webp').toFile(webpOutput);
const {size: webpSize} = await stat(webpOutput);
console.log('WebP', webpSize, `${(webpSize / jpegSize * 100).toFixed(1)}%`);

const avifOutput = join(import.meta.dirname, 'output.avif');
await sharp(input).resize(size, size).toFormat('avif').toFile(avifOutput);
const {size: avifSize} = await stat(avifOutput);
console.log('AVIF', avifSize, `${(avifSize / jpegSize * 100).toFixed(1)}%`);
