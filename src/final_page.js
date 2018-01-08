import React from 'react';
import {FinalSpan} from './final_page_list.js';
import Panel from 'muicss/lib/react/panel';
const divStyle={
	textAlign : "center"
	
}


class FinalPage extends React.Component{
   render(){    if(this.props.payingList.length === 0)
   	            {
                    return(<Panel><div style={divStyle}><h1>NO NEED FOR TRANSACTION</h1></div></Panel>);
   	            }
   	            else 
   	            {  const temp = this.props.payingList.map((item)=>
   	              <Panel> <div>{item[0]} has to pay <FinalSpan spanList={item.slice(1)}/></div></Panel>);
   	               return (<div style={divStyle}><ul>{temp}</ul></div>);
   	            }
   	        }
      
      }
      
export default FinalPage;