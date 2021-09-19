const tree = [{
    children: [
      { key: "baz", obj1Value: "bas", obj2Value: "bars", type: "changed" },
      { key: "foo", obj1Value: "bar", obj2Value: "bar", type: "notChanged" },
      {
        key: "nest",
        obj1Value: { key: "value" },
        obj2Value: "str",
        type: "changed",
      },
    ],
    key: "group1",
    type: "nested",
  }];
const t = (diff, counter) => diff.map(node => {
    if (node.type === 'added') {
      return [`+ ${node.key}:`, node.obj2Value];
    }

    if (node.type === 'nested') {
      return [`  ${node.key}: `, `${t(node.children, counter += 1)}`];
    }
  });

const result = t(tree, 0);
console.log(result)
