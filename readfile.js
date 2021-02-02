import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
  const fullPath = path.resolve(filePath, process.cwd());
  const data = fs.readFileSync(fullPath);

  return data;
};

export default readFile;
