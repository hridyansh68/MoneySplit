import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-selectize/themes/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const finalList = {
	listItem : [],
	addItem : function (newData){
		this.listItem.push(newData);	
	}
};

const list={
	listItem : [],
	addItem : function (newData){
		this.listItem.push(newData);	
	},
	deleteItem : function(position){
		this.listItem.splice(position,1);
	}
	
};


ReactDOM.render(<App myList={list} finalList = {finalList}/>, document.getElementById('root'));
