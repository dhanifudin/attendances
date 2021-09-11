const glob = require("glob");
const { countCharacters } = require("wcmd/lib/utils");

(async () => {
  glob("./attendances/**/*.md", (err, files) => {
    files.forEach((file) => {
      const result = countCharacters(file);
      const words = result.lines
        .map((line) => line.length)
        .reduce((l1, l2) => l1 + l2);
      if (words < 1000) process.exit(1);
    });
    process.exit(0);
  });
})();
