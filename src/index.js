import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Rootreducer from './Reducer/rootreducer';
import { Provider } from 'react-redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
const store=createStore(
	Rootreducer,	
	compose(applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
		
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig),
	)
);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);


serviceWorker.unregister();
