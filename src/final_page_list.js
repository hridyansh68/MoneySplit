import React from 'react';

export class FinalSpan extends React.Component{
	render(){
		const term = this.props.spanList.map((item)=><li>{item[0]} {item[1]}</li>);
			return(
			<div><ul>{term}</ul></div>);
	}
}