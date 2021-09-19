const diff = [{"children": [{"key": "follow", "obj2Value": false, "type": "added"}, {"key": "setting1", "obj1Value": "Value 1", "obj2Value": "Value 1", "type": "notChanged"}, {"key": "setting2", "obj1Value": 200, "type": "deleted"}, {"key": "setting3", "obj1Value": true, "obj2Value": null, "type": "changed"}, {"key": "setting4", "obj2Value": "blah blah", "type": "added"}, {"key": "setting5", "obj2Value": {"key5": "value5"}, "type": "added"}, {"children": [{"children": [{"key": "wow", "obj1Value": "", "obj2Value": "so much", "type": "changed"}], "key": "doge", "type": "nested"}, {"key": "key", "obj1Value": "value", "obj2Value": "value", "type": "notChanged"}, {"key": "ops", "obj2Value": "vops", "type": "added"}], "key": "setting6", "type": "nested"}], "key": "common", "type": "nested"}, {"children": [{"key": "baz", "obj1Value": "bas", "obj2Value": "bars", "type": "changed"}, {"key": "foo", "obj1Value": "bar", "obj2Value": "bar", "type": "notChanged"}, {"key": "nest", "obj1Value": {"key": "value"}, "obj2Value": "str", "type": "changed"}], "key": "group1", "type": "nested"}, {"key": "group2", "obj1Value": {"abc": 12345, "deep": {"id": 45}}, "type": "deleted"}, {"key": "group3", "obj2Value": {"deep": {"id": {"number": 45}}, "fee": 100500}, "type": "added"}]

const toString = (item) => {
  if (!_.isObject(item)) {
    return item;
  }

  const [key, value] = Object.entries(item);

}

const stylish = (diffList) => {
    if (node.type === 'added') {
      acc[`+ ${node.key}`] = node.obj2Value;
      console.log('acc: ', acc);
      console.log('===============');
      return acc;
    }
    if (node.type === 'deleted') {
      acc[`- ${node.key}`] = node.obj1Value;
      console.log('acc: ', acc);
      console.log('===============');
      return acc;
    }
    if (node.type === 'notChanged') {
      acc[`  ${node.key}`] = node.obj1Value;
      acc[`  ${node.key}`] = node.obj2Value;
      console.log('acc: ', acc);
      console.log('===============');
      return acc;
    }
    if (node.type === 'changed') {
       acc[`- ${node.key}`] = node.obj1Value;
       acc[`+ ${node.key}`] = node.obj2Value;
       console.log('acc: ', acc);
       console.log('===============');
      return acc;
    }
    if (node.type === 'nested') {
      console.log('acc: ', acc);
      console.log('===============');
      acc[`+ ${node.key}`] = t(node.children, acc); 
      
      return acc;
    }
  }
  
const t = (tree, acc) => tree.reduce(reducer, acc);
const result = t(diff, {});
console.log('+++++++++++++++++++++++++++++++++++++++++++++');
console.log(result)
