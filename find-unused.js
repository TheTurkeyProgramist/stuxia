const fs = require("fs");
const path = require("path");

// Розширення медіафайлів (аудіо, відео, зображення)
const MEDIA_EXTENSIONS = /\.(mp3|mp4|webm|webp|jpg|jpeg|png|gif|svg)$/i;

// Розширення файлів коду/стилів, у яких шукаємо згадки
const CODE_EXTENSIONS = /\.(js|jsx|ts|tsx|css|scss|sass|html|vue|svelte|json)$/i;

// Головна папка для пошуку
const SRC_DIR = path.join(__dirname, "src");

/**
 * Рекурсивно витягує ВСІ файли з src та всіх вкладених підпапок
 */
function getAllFiles(dirPath) {
  let filesList = [];
  if (!fs.existsSync(dirPath)) return filesList;

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      // Заходимо в глибину будь-якої підпапки
      filesList = filesList.concat(getAllFiles(fullPath));
    } else {
      filesList.push(fullPath);
    }
  }

  return filesList;
}

function findUnusedMedia() {
  console.log("🔎 Сканування папки src та всіх вкладених папок...");

  // Збираємо всі файли з усього дерева src
  const allFiles = getAllFiles(SRC_DIR);

  // Окремо відбираємо медіафайли та файли коду
  const mediaFiles = allFiles.filter((file) => MEDIA_EXTENSIONS.test(file));
  const codeFiles = allFiles.filter((file) => CODE_EXTENSIONS.test(file));

  console.log(`📦 Знайдено всього медіафайлів (у всіх підпапках): ${mediaFiles.length}`);
  console.log(`📄 Файлів коду для перевірки: ${codeFiles.length}`);

  if (mediaFiles.length === 0) {
    console.log("⚠️ Медіафайлів у папці src не знайдено.");
    return;
  }

  // Зчитуємо вміст коду в пам'ять один раз
  const codeContents = codeFiles.map((filePath) => {
    try {
      return fs.readFileSync(filePath, "utf8");
    } catch {
      return "";
    }
  });

  console.log("\n🔎 Перевірка використання...");

  const unusedFiles = mediaFiles.filter((mediaPath) => {
    const fileName = path.basename(mediaPath); // Назва файлу, наприклад "hero-bg.webp"
    return !codeContents.some((content) => content.includes(fileName));
  });

  // Вивід результату
  console.log("\n-------------------------------------------------");
  if (unusedFiles.length > 0) {
    console.log(`❌ НЕВИКОРИСТОВУВАНІ ФАЙЛИ (${unusedFiles.length}):`);
    unusedFiles.forEach((file) => {
      // Показує повний відносний шлях (наприклад, src/assets/images/old/photo.webp)
      console.log(`- ${path.relative(__dirname, file)}`);
    });
    console.log("-------------------------------------------------");
    console.log(`Разом можна видалити: ${unusedFiles.length} файлів.`);
  } else {
    console.log("✅ Усі медіафайли з усіх папок використовуються у коді!");
    console.log("-------------------------------------------------");
  }
}

findUnusedMedia();