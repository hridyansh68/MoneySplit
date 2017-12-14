import React from 'react';

export class List extends React.Component{
  render(){
    return(
  <li>
    {this.props.dispItem}
  </li>);
  }
}