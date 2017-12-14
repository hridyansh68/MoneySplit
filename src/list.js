import React from 'react';

export class List extends React.Component{
  render(){
    const listItem = this.props.ranV.map((item,i) =>
    <li key={i}>{item}</li>);
    return(
  <ul>
    {listItem}
  </ul>);
  }
}