const diff = [{
   children: [
     { key: "follow", obj2Value: false, type: "added" },
     { key: "setting2", obj1Value: 200, type: "deleted" },
   ],
   key: "common",
  type: "nested",
}];

const t = (diff, counter) => diff.map(node => {
  const value1 = node.obj1Value
  const value2 = node.obj2Value
  const label = ' ';
    if (node.type === 'added') {
      return `+ ${node.key}: ${node.obj2Value}`;
    }
    if (node.type === 'deleted') {
      return `- ${node.key}: ${ node.obj1Value }`;
    }
    if (node.type === 'notChanged') {
      return [
        `  ${node.key}: ${value1}`,
        `  ${node.key}:, ${value2}`,
      ];
    }
    if (node.type === 'changed') {
      return [
        `- ${node.key}: ${value1}`,
        `+ ${node.key}: ${value2}`,
      ];
    }
    if (node.type === 'nested') {
      return `  ${node.key}:  ${t(node.children, counter += 1)}`;
    }
  }
  );

const result = t(diff, 0);
console.log(result.join('\n'));
