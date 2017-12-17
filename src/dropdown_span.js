import React from 'react';


export class DropdownSpan extends React.Component{

	render(){
		const temp = this.props.list.map((item)=>
			<li>{item}</li>);

			return(<ul>{temp}</ul>);
	}


	}