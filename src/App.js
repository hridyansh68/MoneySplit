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
  const divStyle={
    textAlign : "center"
    
  }
// "position: absolute; top: 0; left: 0; border: 0;"
const imgStyle={
  position : "absolute",
  top : 0,
  left : 0,
  border : 0
}
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
                { tem = cL[i];
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
                {   p = (payingPeople[j][1]*-1);
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

        this.setState({payingList :payingPeople});
        console.log(this.state.payingList);
        
      }
     
 }
  
  render() {
   if(this.state.clickCheck ===0)
   { 
      return (
        <div>
          <a href="https://github.com/hridyanshsahu/MoneySplit"><img style={imgStyle} src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"/></a>
         <Container>         
             <div className="App">
            <InputBar myList={this.props.myList}/>
            <Button style={ButtonStyle} variant="raised" color="primary" onClick={this.clickHandler}>Next</Button>
         </div>
         </Container>
         <div style={divStyle}>Developed by <a href="http://hridyanshsahu.com">Hridyansh Sahu</a> and <a href="https://ristri.com">Rishabh Tripathi</a>.</div>
         </div>
        
             );
    }
   else if(this.state.clickCheck ===1)
    {
      return (
        <div>
        <Container>
        
        <div className="App2">
          <DropdownBar myList={this.props.myList} finalList = {this.props.finalList} />
          <Button style={ButtonStyle} variant="raised" color="primary" onClick={this.clickHandler}>Next</Button>
        </div>
        </Container>
        <div style={divStyle}>Developed by <a href="http://hridyanshsahu.com">Hridyansh Sahu</a> and <a href="https://ristri.com">Rishabh Tripathi</a>.</div>
        </div>)
        ;
     }
    else if(this.state.clickCheck ===2)
    {  
        return (
          <div>
            <Container>           
        <div className="App3">
          <FinalPage payingList={this.state.payingList}/>
        </div>
        </Container>
        <div style={divStyle}>Developed by <a href="http://hridyanshsahu.com">Hridyansh Sahu</a> and <a href="https://ristri.com">Rishabh Tripathi</a>.</div>
        </div>
    );
    }
     }
}

export default App;


