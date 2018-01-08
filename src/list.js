import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Clear from 'react-icons/lib/md/clear';

const ClearStyle={
  display : 'block',
  marginLeft:"auto",
   marginRight:"0"
};
const Align = {
  textAlign : "center"
};

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
    <Panel>
     <div style={Align}> <span>{this.props.dispItem} </span></div>
      <Clear style={ClearStyle} color="primary" onClick={this.hideList}/>
    </Panel>
  </div>);
  }
  else
  return <div></div>;
}
}