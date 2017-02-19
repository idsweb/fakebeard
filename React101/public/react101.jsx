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

class OddsAndEvens extends React.Component{

    constructor(props){
            super(props);
            this.state = {
            number: 6
        }
    
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }

    handleNumberChange(number){
        this.setState({number:number});
    }

    render(){
        return    <div id="oddsAndEven">
           <NumberCollector handleChange={this.handleNumberChange} number = {this.state.number}/>
           <NumberEvaluator number = {this.state.number}/>
    </div>
    }
}

ReactDOM.render(<OddsAndEvens/>, document.getElementById('jsxContainer'));