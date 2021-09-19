import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const all = _.union(obj1Keys, obj2Keys).sort();
  const deleted = _.difference(obj1Keys, obj2Keys);
  const added = _.difference(obj2Keys, obj1Keys);
  const common = _.intersection(obj1Keys, obj2Keys);

  const result = _.flatMap(all, (key) => {
    if (deleted.includes(key)) {
      const value1 = obj1[key];
      return `  - ${key}: ${value1}`;
    }
    if (added.includes(key)) {
      const value2 = obj2[key];
      return `  + ${key}: ${value2}`;
    }
    if (common.includes(key)) {
      const value1 = obj1[key];
      const value2 = obj2[key];
      if (value1 !== value2) {
        return [[`  - ${key}: ${value1}`], [`  + ${key}: ${value2}`]];
      }
      if (value1 === value2) {
        return `    ${key}: ${value1}`;
      }
    }
  });

  return `{\n${result.join('\n')}\n}`;
};

export default getDiff;
