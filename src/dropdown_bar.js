import React from 'react';
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import {DropdownList} from './dropdown_bar_list.js';
import Panel from 'muicss/lib/react/panel';

const dropStyle = {
  display : "inline-block",
  width : "100%"
};
const styleButton={
	display: "block",
	margin: "auto"
};



class DropdownBar extends React.Component{
    
     constructor(props){
      super(props);
      this.state = {nameofpayee:"",amount:0,paidfor:[],transactionList:[]};
      this.valueChangeHandler1 = this.valueChangeHandler1.bind(this);
      this.valueChangeHandler2 = this.valueChangeHandler2.bind(this);
      this.valueChangeHandler3 = this.valueChangeHandler3.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    
    
  
    valueChangeHandler1(value){
            this.setState({nameofpayee: value.label});
          
    }

    valueChangeHandler2(event){
      this.setState({amount:event.target.value});
       
    }

    valueChangeHandler3(value){
      this.setState({paidfor:value.map((item)=>item.label)});
         
    }

    clickHandler(){
      const transactionObject={
        nameofpayee : this.state.nameofpayee,
        amount : this.state.amount,
        paidfor : this.state.paidfor
      }
      this.props.finalList.addItem(transactionObject);
      this.setState({amount:0, transactionList:[...this.state.transactionList, transactionObject]});
     
      
      
    }



   render(){
  
     return (<div>
       <Panel><SimpleSelect
            placeholder = "Select Name"
            options = {this.props.myList.listItem.map(
              (name,i) => ({label: name, value: i})
            )}
            onValueChange = {this.valueChangeHandler1} style={dropStyle}
        />
        <br/><br/>
        <Input label="Enter Expense" floatingLabel={true} type="number" value={this.state.amount} onChange={this.valueChangeHandler2}/>
        <MultiSelect
            placeholder = "Select Names"
            options = {this.props.myList.listItem.map(
              (name,i) => ({label: name, value: i})
            )}
            onValuesChange = { this.valueChangeHandler3 } style={dropStyle}
        />
        <br/><br/>
        <Button style={styleButton}  variant="fab" size="small" color="primary" onClick={this.clickHandler}>+</Button>
        </Panel>
        <DropdownList listToPrint={this.state.transactionList} />
        </div>);}
      
      }
      
export default DropdownBar;
