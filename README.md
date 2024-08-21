Simple plugin that blocks [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops.
In my experience they seem to be mostly used by accident when for..of is actually intended.

Usage in **eslint.config.js**

```javascript
const noForIn = require("@starkertyp/eslint-no-for-in");

module.exports = [
    {
        files: ["examples/*.js"],
        plugins: {
            "starkertyp": noForIn
        },
        rules: {
            "starkertyp/no-for-in": "error"
        }
    }
]

```
