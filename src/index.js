import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const list={
	listItem : [],
	addItem : function (newData){
		this.listItem.push(newData);
	}
	
};


ReactDOM.render(<App myList={list} />, document.getElementById('root'));
registerServiceWorker();
