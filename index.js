import fs from 'fs';
import path from 'path';

const defaults = {
  dir: './packages',
  verbose: false,
  bullet: '*',
};

export default function SUBPACKAGELIST({ content, options = {}, srcPath }) {
  const opts = Object.assign({}, defaults, options);

  const packagesDir = path.resolve(path.dirname(srcPath), opts.dir);

  return fs
    .readdirSync(packagesDir)
    .map((filename) => path.join(packagesDir, filename))
    .filter((filePath) => fs.statSync(filePath).isDirectory())
    .filter((dirPath) => fs.existsSync(path.join(dirPath, 'package.json')))
    .map((dirPath) => [
      path.relative(path.dirname(srcPath), dirPath),
      JSON.parse(fs.readFileSync(path.join(dirPath, 'package.json'), 'utf8')),
    ])
    .map(([link, pkg]) => {
      let entry = `${opts.bullet} [${pkg.name}](${link})`;
      const description = pkg.description?.trim();
      if (opts.verbose === 'true' && description?.length) {
        entry += ` - ${description}`;
      }
      return entry;
    })
    .join('\n');
}
