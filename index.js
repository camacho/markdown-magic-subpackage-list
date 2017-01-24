const fs = require('fs');
const path = require('path');

const defaults = {
  dir: './packages',
  verbose: false,
  bullet: '*'
}

module.exports = function SUBPACKAGELIST(content, _options, config) {
  const options = Object.assign({}, defaults, _options);

  const packagesDir = path.resolve(process.cwd(), options.dir);

  return fs
    .readdirSync(packagesDir)
    .map(filename => path.join(packagesDir, filename))
    .filter(filePath => fs.statSync(filePath).isDirectory())
    .filter(dirPath => fs.existsSync(path.join(dirPath, 'package.json')))
    .map(dirPath => [
      path.relative(path.dirname(config.originalPath), dirPath),
      require(path.join(dirPath, 'package.json'))
    ]).map(([link, package]) => {
      let entry = `${options.bullet} [${package.name}](${link})`;
      if (options.verbose === 'true' && package.description.trim().length) {
        entry += ` - ${package.description.trim()}`
      }
      return entry;
    }).join('\n');
}
