import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var list={
	listItem : [],
	addItem : function (newData){
		this.listItem.push(newData);
	}
	
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
