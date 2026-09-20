import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
const files = await glob('src/**/*.{webp,jpg,png}');

console.log(`Знайдено ${files.length} зображень для конвертації в AVIF...`);

for (const file of files) {
  const avifPath = file.replace(/\.(webp|jpg|png)$/, '.avif');
  await sharp(file)
    .avif({ quality: 75, effort: 5 })
    .toFile(avifPath);
  console.log(`Конвертовано: ${path.basename(avifPath)}`);
}

console.log('Готово!');