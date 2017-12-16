import React, { Component } from 'react';
import InputBar from './input_bar.js';
import Container from 'muicss/lib/react/container';
import DropdownBar from './dropdown_bar.js';
import FinalPage from './final_page.js';
import Button from 'muicss/lib/react/button';

const ButtonStyle={
    display : 'block',
    marginLeft:"auto",
     marginRight:"auto"
  };

class App extends Component {
   
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
         <Container>         
             <div className="App">
            <InputBar myList={this.props.myList}/>
            <Button style={ButtonStyle} variant="raised" color="primary" onClick={this.clickHandler}>Next</Button>
         </div>
         </Container>

        
             );
    }
   else if(this.state.clickCheck ===1)
    {
      return (
        <Container>
        
        <div className="App2">
          <DropdownBar myList={this.props.myList}/>
          <Button style={ButtonStyle} variant="raised" color="primary" onClick={this.clickHandler}>Next</Button>
        </div>
        </Container>)
        ;
     }
    else if(this.state.clickCheck ===2)
    {  
        return (
            <Container>           
        <div className="App3">
          <FinalPage/>
        </div>
        </Container>
    );
    }
     }
}

export default App;


