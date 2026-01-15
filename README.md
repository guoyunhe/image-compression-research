# Image Compression Research

Which image format and compression options to use in real world applications?

Use [Sharp](https://sharp.pixelplumbing.com/) to compress images.

## Avatar 32x32px

Winner: WebP

| Format | Quality | Size | % of JPEG | Preview                                                         |
| ------ | ------- | ---- | --------- | --------------------------------------------------------------- |
| JPEG   | 80      | 724B | 100%      | ![JPEG](./avatar-32x32/output.jpg)  |
| AVIF   | 50      | 644B | 89.0%     | ![AVIF](./avatar-32x32/output.avif) |
| WebP   | 80      | 586B | 80.9%     | ![WebP](./avatar-32x32/output.webp) |

## Avatar 64x64px

Winner: AVIF

| Format | Quality | Size  | % of JPEG | Preview                                                         |
| ------ | ------- | ----- | --------- | --------------------------------------------------------------- |
| JPEG   | 80      | 1655B | 100%      | ![JPEG](./avatar-64x64/output.jpg)  |
| WebP   | 80      | 1416B | 85.6%     | ![WebP](./avatar-64x64/output.webp) |
| AVIF   | 50      | 1291B | 78.0%     | ![AVIF](./avatar-64x64/output.avif) |
