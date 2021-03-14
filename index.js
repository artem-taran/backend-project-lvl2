import fs from 'fs';
import getDiff from './getDiff.js';
import parser from './utils/parser.js';

export default (filepath1, filepath2) => {
  const file1 = fs.readFileSync(filepath1, 'utf-8');
  const file2 = fs.readFileSync(filepath2, 'utf-8');

  const parser1 = parser(filepath1);
  const parser2 = parser(filepath2);

  const diff = getDiff(parser1(file1), parser2(file2));

  return diff;
};
