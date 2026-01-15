# Image Compression Research

Which image format and compression options to use in real world applications?

Use [Sharp](https://sharp.pixelplumbing.com/) to compress images.

## Avatar 32x32px

Winner: WebP

| Format | Size | % of JPEG | Preview                                                         |
| ------ | ---- | --------- | --------------------------------------------------------------- |
| JPEG   | 724B | 100%      | <img src="./avatar-32x32/output.jpg" width="256" height="256">  |
| AVIF   | 644B | 89.0%     | <img src="./avatar-32x32/output.avif" width="256" height="256"> |
| WebP   | 586B | 80.9%     | <img src="./avatar-32x32/output.webp" width="256" height="256"> |

## Avatar 64x64px

| Format | Size  | % of JPEG | Preview                                                         |
| ------ | ----- | --------- | --------------------------------------------------------------- |
| JPEG   | 1655B | 100%      | <img src="./avatar-64x64/output.jpg" width="256" height="256">  |
| WebP   | 1416B | 85.6%     | <img src="./avatar-64x64/output.webp" width="256" height="256"> |
| AVIF   | 1291B | 78.0%     | <img src="./avatar-64x64/output.avif" width="256" height="256"> |
