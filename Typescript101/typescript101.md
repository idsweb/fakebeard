typescript 101
=====================

Building your first TypeScript file
---------------------------------

1. Create a new directory in VS Code 
2. Add a file called **helloworld** with the **.ts** extension and add a function
```
function greet(message){
}
greet('hi');
```
3. Launch the integrated console with `Ctrl + '`
4. Type `tsc helloworld.ts`
5. Open the created **.js** file and examine it (hint it should be the same, as this is simply JavaScript)
6. Add the code below  
```
function greet(message: string){
}
greet(5);
```
Notice the squiggly under 5
6. Correct the code so the input is a string
7. Run the tsc command again atnd see the output, this time notice the code is converted to JavaScript and the string typing is gone

Setting up the environment
--------------------------------
1. Create the directory structure and open VS Conde
```
MKDIR ts101
CD ts101
MKDIR scripts
MKDIR ts
CODE .
```
2. Add a **greet.ts** file in the ts folder with a function
```
function greet(message: string)
{
   return message;
};
```
3. Add another **helloWorld.ts** file
4. type ref and add a reference to the greet ts file
4. **Ctrl + Shift + b**, then select **configure build task**, then select **typescript with a tsconfig file**
5. Change task.config file args to `[-p, ts]` (instead of . for the current directory)
6. Add a **tsconfig** file in ts, for now remove module and exceptions entries
7. Add `outFile: ../scripts/app.js`
8. Add `sourceMaps: true` entry
9. Add index.html
10. Type `html:5` and press tab
11. Add a script tag `<scrpt type="text/javascript" src="scripts/app.js"></script>`

Basic typescript types
--------------------------------------------------------
```
let isDone: boolean = false;

\\ All numbers are floating point values
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

\\ Strings
let color: string = "blue";
color = 'red';
```

**template strings**
```
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`
```
**Array**
```
let list: number[] = [1, 2, 3];
// generic array type
let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// Enum
enum Color {Red, Green, Blue};
```