import React, {Component } from 'react';
import {List} from './list'

class InputBar  extends Component {
    
    constructor(props){
    	super(props);
		this.state = { term:'',items :[] };
    	this.changeHandler = this.changeHandler.bind(this);
    	this.clickHandler = this.clickHandler.bind(this);
    }
//{event => this.setState({term : event.target.value})}

changeHandler(event){
      this.setState({term : event.target.value});
}

clickHandler(){
      if (this.state.term==="")
      { alert("Please enter the name");}
      else{
	  this.props.myList.addItem(this.state.term);
	  this.setState({term : "",items : [...this.state.items, this.state.term]});
      }
      
      
}
      

	render() {
		const listItem = this.state.items.map((item,i) =>
		<List key={i} dispItem={item} myList={this.props.myList} pos={i}/> );
		return (
	<div>
	<label>Name of Participant:
	<input 
	value={this.state.term}
	onChange={this.changeHandler} />
	</label>
	<button onClick={this.clickHandler} >Add More</button>
	<ul>
		{
			listItem
		}
	</ul>
	</div>
	
) ;
	
	}


}

export default InputBar;