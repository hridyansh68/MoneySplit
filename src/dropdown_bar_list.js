import React from 'react';
import {DropdownSpan} from './dropdown_span.js';

export class DropdownList extends React.Component{


	render(){

		const temp = this.props.listToPrint.map((item)=>
			<li>{item.nameofpayee} paid {item.amount} for <DropdownSpan list={item.paidfor} /></li>);
		return(<div><ul>
                {temp}
                </ul>
			</div>);
	}


}