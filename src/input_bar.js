import React, {Component } from 'react';

class InputBar  extends Component {
    
    constructor(props){
    	super(props);
    	this.state = { term:''};
    	this.changeHandler = this.changeHandler.bind(this);
    	this.clickHandler = this.clickHandler.bind(this);
    }
//{event => this.setState({term : event.target.value})}

changeHandler(event){
      this.setState({term : event.target.value});
}

clickHandler(){
      if (this.state.term=="")
      { alert("Please enter the name");}
      else{
      this.props.myList.addItem(this.state.term);
      this.setState({term : ""});
      console.log(this.props.myList);
      }
      
      
}
      

	render() {
		return (
	<div>
	<label>Name of participant:
	<input 
	value={this.state.term}
	onChange={this.changeHandler} />
	</label>
	<button onClick={this.clickHandler} >Add more</button>
	</div>) ;
	
	}


}

export default InputBar;