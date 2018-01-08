import React from 'react';
import {DropdownSpan} from './dropdown_span.js';
import Panel from 'muicss/lib/react/panel';
const divStyle={
	textAlign : "center"
	
}
export class DropdownList extends React.Component{


	render(){

		const temp = this.props.listToPrint.map((item)=>
	<div style={divStyle}><Panel>{item.nameofpayee} paid &#8377;{item.amount} for <DropdownSpan list={item.paidfor} /></Panel></div>)	;
			if(this.props.listToPrint.length === 0){
			return (
				<div>
				</div>
			);
			}
			else{
		return(<div>
                {temp}
				
			</div>);
			}
	}


}