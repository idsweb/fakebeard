// The this keyword has four contexts
// https://rainsoft.io/gentle-explanation-of-this-in-javascript/
/*
*function invocation: alert('Hello World!')
*method invocation: console.log('Hello World!')
*constructor invocation: new RegExp('\\d')
*indirect invocation: alert.call(undefined, 'Hello World!')
*/

// function invocation

// lack of strict typing
//======================
var greet = function(msg1, msg2){
    console.log(msg1 + msg2);
}

greet('hello' + ' world');
greet(5,5); //operator changed to addition rather than error

// block scope
var test = function(flag){

    if(flag){
        var i = 0;
    }

    return i;
}

console.log(test(false));