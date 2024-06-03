// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const fs = require("fs");
const path = require("path");
const dir = __dirname;
const files = fs.readdirSync(dir);

files.forEach((file) => {
  let ext = path.extname(file);
  ext = ext.slice(1);
  let directory = dir + "/" + ext;
  if (!fs.existsSync(directory) && !["js", "json"].includes(ext)) {
    fs.mkdirSync(directory);
  }
  if (!["js", "json"].includes(ext)) {
    fs.renameSync(dir + "/" + file, directory + "/" + file);
  }
});
