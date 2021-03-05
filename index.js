import fs from 'fs';
import getDiff from './getDiff.js';

export default (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, 'utf-8');
  const data2 = fs.readFileSync(filepath2, 'utf-8');

  const diff = getDiff(data1, data2);

  return diff;
};
