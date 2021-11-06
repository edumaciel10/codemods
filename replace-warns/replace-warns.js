export default (fileInfo, api) => {
  const j = api.jscodeshift;

  const root = j(fileInfo.source)

  return root.find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { type: 'Identifier', name: 'console' },
        property: { type: 'Identifier', name: 'warn' }
      },
    }
  )
  .replaceWith(nodePath=>{
    const { node } = nodePath;
    node.callee.property.name = 'log';
    return node;
  })
  .toSource();

};