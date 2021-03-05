import _ from 'lodash';

const getDiff = (json1, json2) => {
  const before = JSON.parse(json1);
  const after = JSON.parse(json2);
  const beforeKeys = Object.keys(before);
  const afterKeys = Object.keys(after);
  const keys = _.union(beforeKeys, afterKeys).sort();

  const notChangedKeys = _.difference(beforeKeys, afterKeys);
  const addedKeys = _.difference(afterKeys, beforeKeys);
  const commonKeys = _.intersection(beforeKeys, afterKeys);

  const reducer = (acc, key) => {
    if (addedKeys.includes(key)) {
      acc[`+ ${key}`] = after[key];
    }
    if (notChangedKeys.includes(key)) {
      acc[`- ${key}`] = before[key];
    }
    if (commonKeys.includes(key)) {
      if (before[key] === after[key]) {
        acc[`  ${key}`] = before[key];
      } else {
        acc[`- ${key}`] = before[key];
        acc[`+ ${key}`] = after[key];
      }
    }
    return acc;
  };

  const result = keys.reduce(reducer, {});

  return result;
};

export default getDiff;
