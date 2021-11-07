function transform (fileInfo, api) {
  const j = api.jscodeshift;

  const root = j(fileInfo.source)

  root
  .find(j.IfStatement, {
      type : 'IfStatement',
      test : {
        type : 'UnaryExpression',
        operator : '!',
        argument : {
          type: 'MemberExpression',
          object: {
            type: 'Identifier',
            name: 'module'
          },
          property: {
            type: 'Identifier',
            name: 'parent'
        }
      }
    }
  })
  .filter((path) => {
    if (path.node.test.type !== 'UnaryExpression') {
      return false;
    }
    return true;
  })
  .forEach((path) => {
    const requireMain = j.ifStatement(
      j.binaryExpression(
        '===',
        j.memberExpression(
          j.identifier('require'),
          j.identifier('main')
        ),
        j.identifier('module')
      ),
      path.node.consequent,
      path.node.alternate
    )
    j(path).replaceWith(requireMain)
  });
  return root.toSource();
};

module.exports = transform;
module.exports.parser = 'ts';
