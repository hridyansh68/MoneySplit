import React, {Component } from 'react';
import {List} from './list';
import Container from 'muicss/lib/react/container';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const styleInput={
	width : "96%",
	display: "inline-block"
};
const styleButton={
	display: "inline-block"
};


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
	<Container>
	<Input style={styleInput}   label="Enter Name"  floatingLabel={true} value={this.state.term} onChange={this.changeHandler}/>
	<Button style={styleButton}  variant="fab" size="small" color="primary" onClick={this.clickHandler}>+</Button>
	</Container>
		{
			listItem
		}
	</div>
	
) ;}
	
	}

export default InputBar;