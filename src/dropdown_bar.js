import React from 'react';
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class DropdownBar extends React.Component{
   render(){
      return (<div><SimpleSelect
            placeholder = "Select Name"
            options = {this.props.myList.listItem.map(
              (name,i) => ({label: name, value: i})
            )}
            onValuesChange = {value => alert(value)}
        />
        <Input label="Enter Expense" floatingLabel={true} type="number"/>
        <MultiSelect
            placeholder = "Select Name"
            options = {this.props.myList.listItem.map(
              (name,i) => ({label: name, value: i})
            )}
            onValuesChange = {value => alert(value)}
        /></div>);}
      
      }
      
export default DropdownBar;