import React from 'react';

export class List extends React.Component{
  constructor(props){
    super(props);
    this.state = { showList: true};
    this.hideList = this.hideList.bind(this);
  }
  hideList(){
    this.props.myList.deleteItem(this.props.pos);
    this.setState({ showList: false});
  }
  render(){
    if(this.state.showList){
    return(
  <div>
    <li>
      {this.props.dispItem}
      <button onClick={this.hideList}>Delete</button>
    </li>
  </div>);
  }
  else
  return <div></div>;
}
}