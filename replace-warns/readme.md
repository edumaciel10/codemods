# How to run

```terminal
jscodeshift -t replace-warns.js replace-warns.input.js -p
```

This will replace all `console.warns` statements from the input file to `console.log`.
