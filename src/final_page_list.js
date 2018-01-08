import React from 'react';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';

export class FinalSpan extends React.Component{
	render(){
		const term = this.props.spanList.map((item)=><li>&#8377;{item[1]} <FaArrowRight/> {item[0]}</li>);
			return(
			<div><ul>{term}</ul></div>);
	}
}