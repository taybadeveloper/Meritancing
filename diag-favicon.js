const sharp = require("sharp");
const pngToIco = require("png-to-ico");
const path = require("path");

const SRC = "C:/Users/Tayyaba Saleem/Desktop/Meritancing/public/logo-icon.webp";
const OUT = "C:/Users/Tayyaba Saleem/Desktop/Meritancing/public";

(async () => {
  // 192x192 PNG favicon
  await sharp(SRC).resize(192, 192).png().toFile(path.join(OUT, "favicon.png"));
  console.log("favicon.png (192) done");

  // 180x180 apple touch icon
  await sharp(SRC).resize(180, 180).png().toFile(path.join(OUT, "apple-touch-icon.png"));
  console.log("apple-touch-icon.png (180) done");

  // ico from 48 and 32 px
  const png48 = await sharp(SRC).resize(48, 48).png().toBuffer();
  const png32 = await sharp(SRC).resize(32, 32).png().toBuffer();
  const ico = await pngToIco([png48, png32]);
  require("fs").writeFileSync(path.join(OUT, "favicon.ico"), ico);
  console.log("favicon.ico done,", ico.length, "bytes");
})();
