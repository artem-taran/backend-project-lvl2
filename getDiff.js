import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const unionKeys = _.union(obj1Keys, obj2Keys).sort();
  const deletedKeys = _.difference(obj1Keys, obj2Keys);
  const addedKeys = _.difference(obj2Keys, obj1Keys);
  const commonKeys = _.intersection(obj1Keys, obj2Keys);

  const reducer = (acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (addedKeys.includes(key)) {
      acc[`+ ${key}`] = value2;
    }
    if (deletedKeys.includes(key)) {
      acc[`- ${key}`] = value1;
    }
    if (commonKeys.includes(key)) {
      if (value1 === value2) {
        acc[`  ${key}`] = value2;
      } else {
        acc[`- ${key}`] = value1;
        acc[`+ ${key}`] = value2;
      }
    }
    return acc;
  };

  const result = unionKeys.reduce(reducer, {});

  return result;
};

export default getDiff;
