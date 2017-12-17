import React from 'react';
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import {DropdownList} from './dropdown_bar_list.js';


const transactionObject = {
      nameofpayee:"",
      amount:0,
      paidfor:[]
    };


class DropdownBar extends React.Component{
    
     constructor(props){
      super(props);
      this.state = {transactionList:[]};
      this.valueChangeHandler1 = this.valueChangeHandler1.bind(this);
      this.valueChangeHandler2 = this.valueChangeHandler2.bind(this);
      this.valueChangeHandler3 = this.valueChangeHandler3.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    
    
  
    valueChangeHandler1(value){
            transactionObject.nameofpayee = value.label;
          
    }

    valueChangeHandler2(event){
            transactionObject.amount = event.target.value;
       
    }

    valueChangeHandler3(value){
            transactionObject.paidfor = value.map((item)=>item.label);
         
    }

    clickHandler(){
      this.setState({transactionList:[...this.state.transactionList, transactionObject]});
     
      console.log(this.state.transactionList);
      
    }



   render(){
  
     return (<div><SimpleSelect
            placeholder = "Select Name"
            options = {this.props.myList.listItem.map(
              (name,i) => ({label: name, value: i})
            )}
            onValueChange = {this.valueChangeHandler1}
        />
        <Input label="Enter Expense" floatingLabel={true} type="number" onChange={this.valueChangeHandler2}/>
        <MultiSelect
            placeholder = "Select Names"
            options = {this.props.myList.listItem.map(
              (name,i) => ({label: name, value: i})
            )}
            onValuesChange = { this.valueChangeHandler3 }
        />
        <Button onClick={this.clickHandler}>Submit transaction</Button>
        <DropdownList listToPrint={this.state.transactionList} />
        
        </div>);}
      
      }
      
export default DropdownBar;
