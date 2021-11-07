# How to run

```terminal
jscodeshift -t replace-module-parent.js replace-module-parent.input.js -d -p
```

This comemod will refactor

```js
if(!module.parent) {

}
```

to

```js
if(require.main === module){

}
```

This is very useful if your scripts have module.parent, because module.parent is deprecate.
