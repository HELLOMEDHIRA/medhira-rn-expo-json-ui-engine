const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');
const { minify } = require('terser');

const patterns = ['./lib/commonjs/**/*.js', './lib/module/**/*.js'];

async function minifyBuiltOutput() {
  const files = await glob(patterns, {
    ignore: ['**/*.map'],
  });

  let failed = false;

  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const result = await minify(source, {
      compress: true,
      mangle: true,
      format: { comments: false },
    });

    if (!result.code) {
      console.error(`Error minifying ${file}: no output`);
      failed = true;
      continue;
    }

    fs.writeFileSync(file, result.code, 'utf8');
    console.log(`Minified: ${file}`);
  }

  if (failed) {
    process.exit(1);
  }

  console.log(`Minification complete (${files.length} files).`);
}

minifyBuiltOutput().catch((error) => {
  console.error('Minification failed:', error);
  process.exit(1);
});
