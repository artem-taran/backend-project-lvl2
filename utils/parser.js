import yaml from 'js-yaml';
import path from 'path';

export default (inputPath) => {
  const format = path.extname(inputPath);
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yaml' || '.yml':
      return yaml.safeLoad;
    default:
      throw new Error(`Unexpected format ${format}, please choose
      between json or yaml (yml)`);
  }
};
