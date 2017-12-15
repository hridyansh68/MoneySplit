import React, { Component } from 'react';
import InputBar from './input_bar.js';
import DropdownBar from './dropdown_bar.js';
import FinalPage from './final_page.js';
class App extends React.Component {
   
    constructor(props){
    	super(props);
    	this.state = { clickCheck: 0};
    	this.clickHandler = this.clickHandler.bind(this);
    	}

 clickHandler(){
    if(this.state.clickCheck === 0){
        this.setState({clickCheck:1});}
    else if(this.state.clickCheck === 1){
        this.setState({clickCheck:2});}
     
 }
  
  render() {
   if(this.state.clickCheck ===0)
   { 
      return (
         <div className="App">
            <InputBar myList={this.props.myList}/>
            <button onClick={this.clickHandler}>Next</button>
         </div>
             );
    }
   else if(this.state.clickCheck ===1)
    {
      return (
        <div className="App2">
          <DropdownBar/>
          <button onClick={this.clickHandler}>Next</button>
        </div>);
     }
    else if(this.state.clickCheck ===2)
    {  
        return (
        <div className="App3">
          <FinalPage/>
        </div>);
    }
     }
}

export default App;


