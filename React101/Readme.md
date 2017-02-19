React 101
=========
Facebooks React javascript framework uses class libraries to build component trees so you can build up whole UIs using a client side framework.

React uses JSX (html like syntax) and ES6 syntax, which gets transpiled into ES5. For production you would want to use a build process but for learning and demo purposes you can link to the Babel CDN.

Create a node/epress web application with a public folder for static content and add the html page below(serving straight from the file system gives a CORS error in Chrome).

Create the html skeleton below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        #oddsAndEven{
            background-color: #efefef;
            border:solid 1px #ccc;
        }
    </style>
</head>
<body>
    <div id="oddsAndEven">
        <div id="numberCollector">
            <label for="number">Please enter a number: </label> 
            <input type="text" name="number" type="text" value="5"/>
        </div>
        <div id="numberEvaluator">
            <span>The number is odd</span>
        </div>
    </div>
</body>
</html>
```
Creating a component
--------------------
Next add the following script references to the bottom of the page before the end of the body element. React uses JSX and ES6 so the Babel script will transpile our script for us - don't forget the type "text/babel" attribute.

```html
    <script src="https://fb.me/react-15.0.1.js"></script>
    <script src="https://fb.me/react-dom-15.0.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script type="text/babel"  src="react101.jsx"></script>
```
Remove the markup between the div tages from the html page and add a new place holder as below:

```html
<div id="jsxContainer"></div>
```

Your page should now look like this [full html page](https://raw.githubusercontent.com/idsweb/fakebeard/master/React101/public/react101.html)
Create a script file with the jsx file extension and add the script below: 

```javascript 
class OddsAndEvens extends React.Component{
    render(){
        return    <div id="oddsAndEven">
        <div id="numberCollector">
            <label for="number">Please enter a number: </label> 
            <input type="text" name="number" type="text" value="5"/>
        </div>
        <div id="numberEvaluator">
            <span>The number is odd</span>
        </div>
    </div>
    }
}

ReactDOM.render(<OddsAndEvens/>, document.getElementById('jsxContainer'));
```
This is the new React syntax using ES6 classes and inheritance in Javascript. React will build a virtual dom and then manipulate the actual dom, adding our control.

Note - you will receive an error about the value of the input box but we will fix that later.

Creating child components
-------------------------
Create two new classes for the number collector and the number number evaluator
```javascript
class NumberCollector extends React.Component{
    render(){
        return <div id="numberCollector">
            <label for="number">Please enter a number: </label> 
            <input type="text" name="number" type="text" value="5"/>
        </div>
    }
}

class NumberEvaluator extends React.Component{
    render(){
        return <div id="numberEvaluator">
            <span>The number is odd</span>
      </div>
    }
}
```
Modify the original component to return the outer markup and the two child components

```javascript
class OddsAndEvens extends React.Component{
    render(){
        return    <div id="oddsAndEven">
           <NumberCollector/>
           <NumberEvaluator/>
    </div>
    }
}
```
TIP - You can use the React Chrome debug tools to inspect the JSX markup.

Passing down data with props
----------------------------
In React data is passed down the chain using props. It is important that components do not modify there own props. Modify the NumberEvaluator component so that it gets a number passed in and then chooses the correct answer.

```javascript
class NumberEvaluator extends React.Component{
    render(){
        var message = "The number is odd";
        if((this.props.number % 2) === 0){
            message = "The number is even";
        }
        return <div id="numberEvaluator">
            <span>{ message }</span>
      </div>
    }
}
```
Notice the **this.props**, this is passed in by the parent control, using an argument to the jsx element which matches the props **number="5"**. The {} brackets are javascript in React, e.g. { message }.

```javascript
class OddsAndEvens extends React.Component{
    render(){
        return    <div id="oddsAndEven">
           <NumberCollector/>
           <NumberEvaluator number="5"/>
    </div>
    }
}
``` 
State and events
----------------

Data flows down with React, in order to keep our component design clean we maintain state in the parent and pass it down. Lets add state to the parent control using a constructor.

```javascript
class OddsAndEvens extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        number: 6
        }
    }

    render(){
        return    <div id="oddsAndEven">
           <NumberCollector/>
           <NumberEvaluator number= {this.state.number}/>
    </div>
    }
}
```
What we need is to use the text box on the first child component to trigger an event that gets handled and changes the state of the parent which passes it down to the child controls. 

One of the rules of state is that you don't modify it directly but you use the setState() method. Note this isn't garuanteed to happen synchronously so there is an overload that takes a call back function. Also when passing functions down it is important to bind them so they get fired in the right context.

```javascript
class NumberCollector extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number:props.number
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event){
        this.setState({number:event.target.value}, function(){
            if(this.state.number != ""){
                this.props.handleChange(this.state.number);
            }
        });
    }

    render(){
        return <div id="numberCollector">
            <label for="number">Please enter a number: </label> 
            <input type="text" value={this.state.number} name="number" onChange={this.handleTextChange} type="text"/>
        </div>
    }
}
```

The input box is what React refers to as a 'controlled component' (remember the error right at the begining?). The state of the input box is controlled by the components state using **this.state.number**, using an event handler function called **handleTextChange**. It is important to bind the method to the control in the constructor.

```javascript
this.handleTextChange = this.handleTextChange.bind(this);
```

The issue we have is that we want to pass the data down from the parent to the controls (the one that displays a message based on the odd/even number). We can call a method on the parent that is passed in via props, **this.props.handleChange(this.state.number)**. This can update the state of the parent and pass props down to other controls.

```javascript
class OddsAndEvens extends React.Component{

    constructor(props){
        .......
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }

    handleNumberChange(number){
        this.setState({number:number});
    }

    render(){
        return    <div id="oddsAndEven">
           <NumberCollector handleChange={this.handleNumberChange} number = {this.state.number}/>
           ......
    }
}
```
We can finish off by passing the number in the first instance to the number collector as a default

```javascript
class NumberCollector extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number:props.number
        }
        ...
    }
```

The entire script is looks like the [React101.jsx](https://raw.githubusercontent.com/idsweb/fakebeard/master/React101/public/react101.jsx) script.

Moving on
---------
Managing state between components relies on convention and Facebook produced the Flux framework which standardises the way this process happens, using Dispatchers, Stores and Actions, but that is for another day ;-)