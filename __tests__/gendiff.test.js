import { test, expect } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../index.js';
import getDiffAlternative from '../getDiffAlternative.js';
import stylish from '../utils/formatters/stylish';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

/*
  test('gendiff', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    const result = JSON.parse(readFile('expected_file.json'));

    expect(gendiff(filepath1, filepath2)).toEqual(result);
  });
  */

test('getDiffAlternative', () => {
  const data1 = JSON.parse(readFile('file1.json'));
  const data2 = JSON.parse(readFile('file2.json'));
  const result = JSON.parse(readFile('expected_file.json'));

  expect(getDiffAlternative(data1, data2).flat(Infinity)).toEqual(result);
});
