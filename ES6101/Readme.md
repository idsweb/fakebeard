New features in ES6
===================
There a lot of new features in ES6, Chrome supports many of them but transpilers like Babel can be used to convert to ES5 now.

Let
---
With ES5 variables get 'hoisted' to the top (but their initialization does not). The following would log 'undefined'
```javascript
function doIt(){
 console.log(i);
}
doIt();
var i = 5;
```
```i``` is 'hoisted' so there is no error even though it was declared **after** the function. However its value wasn't initialized then, so we get 'undefined'.

With the keyword let (instead of var) we get an error:
```Uncaught ReferenceError: i is not defined```.

