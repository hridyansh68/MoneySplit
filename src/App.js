import React, { Component } from 'react';
import InputBar from './input_bar.js';
import Container from 'muicss/lib/react/container';
import DropdownBar from './dropdown_bar.js';
import FinalPage from './final_page.js';
import Button from 'muicss/lib/react/button';

const ButtonStyle={
    display : 'block',
    marginLeft:"auto",
     marginRight:"auto"
  };

class App extends Component {
   
    constructor(props){
    	super(props);
    	this.state = { clickCheck: 0,calculationList:[],payingList:[]};
    	this.clickHandler = this.clickHandler.bind(this);
    	}

 clickHandler(){
    if(this.state.clickCheck === 0){
        this.setState({clickCheck:1});
        this.setState({calculationList:this.props.myList.listItem.map((item)=>[item,0])});
      }
    else if(this.state.clickCheck === 1){
        this.setState({clickCheck:2});
        var cL = this.state.calculationList;
        //making list with single numbers
        for(var i=0;i<this.props.finalList.listItem.length;i++)
        { //adding directly for payee
          for(var j=0;j<cL.length;j++)
          {
                  if(this.props.finalList.listItem[i].nameofpayee===cL[j][0])
                    {cL[j][1]+=Number(this.props.finalList.listItem[i].amount);}
          }
          
          //subtraction for people in paidfor list
          var tem=this.props.finalList.listItem[i].amount/this.props.finalList.listItem[i].paidfor.length;
          for(var k=0;k<this.props.finalList.listItem[i].paidfor.length;k++)
          {  
              for( j=0;j<cL.length;j++)
              {
                     if(this.props.finalList.listItem[i].paidfor[k]===this.state.calculationList[j][0])
                      {cL[j][1]-=tem;}
              }
          }
        }

        //sorting
        
        for( i=0;i<cL.length;i++)
        {
          for( j=i+1;j<cL.length;j++)
          {
               if(cL[i][1]>this.state.calculationList[j][1])
                { var tem = cL[i];
                  cL[i]=cL[j];
                  cL[j]=tem;
                }
          }
        }
        
        //seperate list for payee and acceptor
        
        var payingPeople = [];
        var acceptingPeople = [];
        
        for( i=0;i<cL.length;i++)
        {
          if(cL[i][1]<0)
            {payingPeople.push(cL[i]);}
          else if(cL[i][1]>0)
            {acceptingPeople.push(cL[i]);}
        }
        
        //final calculation
         j = 0;
        for(i=(acceptingPeople.length-1);i>=0;i--)
        {    
             while(acceptingPeople[i][1]!==0)
             {  tem = acceptingPeople[i][1]+payingPeople[j][1];
                if(tem>-0.00001&&tem<0.00001)
                  {tem=0;}


                if(tem===0)
                  { var p =(payingPeople[j][1]*-1);
                    payingPeople[j].push([acceptingPeople[i][0],p]);
                    payingPeople[j][1] = 0;
                    j++;
                   acceptingPeople[i][1]=0;
                  }
                else if(tem>0)
                {   var p = (payingPeople[j][1]*-1);
                    payingPeople[j].push([acceptingPeople[i][0],p]);
                    payingPeople[j][1]=0;
                    j++;
                    acceptingPeople[i][1] = tem;
                }
                else
                { var a = acceptingPeople[i][0];
                  var b = acceptingPeople[i][1];
                  payingPeople[j][1]=tem;
                  payingPeople[j].push([a,b]);
                  acceptingPeople[i][1]=0;
                }
             }
        }

        console.log(payingPeople);
        
        // deleting 0
        for(i=0;i<payingPeople.length;i++)
        {
          payingPeople[i].splice(1,1);
        }

        this.state.payingList = payingPeople;
        console.log(this.state.payingList);
        
      }
     
 }
  
  render() {
   if(this.state.clickCheck ===0)
   { 
      return (
         <Container>         
             <div className="App">
            <InputBar myList={this.props.myList}/>
            <Button style={ButtonStyle} variant="raised" color="primary" onClick={this.clickHandler}>Next</Button>
         </div>
         </Container>

        
             );
    }
   else if(this.state.clickCheck ===1)
    {
      return (
        <Container>
        
        <div className="App2">
          <DropdownBar myList={this.props.myList} finalList = {this.props.finalList} />
          <Button style={ButtonStyle} variant="raised" color="primary" onClick={this.clickHandler}>Next</Button>
        </div>
        </Container>)
        ;
     }
    else if(this.state.clickCheck ===2)
    {  
        return (
            <Container>           
        <div className="App3">
          <FinalPage payingList={this.state.payingList}/>
        </div>
        </Container>
    );
    }
     }
}

export default App;


