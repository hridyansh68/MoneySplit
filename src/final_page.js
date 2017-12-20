import React from 'react';
import {FinalSpan} from './final_page_list.js';


class FinalPage extends React.Component{
   render(){   const temp = this.props.payingList.map((item)=>
   	             <li>{item[0]} has to pay <FinalSpan spanList={item.slice(1)}/></li>);
   	            

      return (<div><ul>{temp}</ul></div>);}
      
      }
      
export default FinalPage;