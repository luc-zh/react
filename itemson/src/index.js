import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {createStore, applyMiddleware,compose} from "redux"
import reducer from "./store/reducers"
import thunk from "redux-thunk"

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const  echancer=composeEnhancer(applyMiddleware(thunk))
const store = createStore(reducer,echancer)
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
