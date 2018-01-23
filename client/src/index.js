import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';


// create store ( Reducer , Initial state of my application , apply middleware code )
const store = createStore( reducers , {} , applyMiddleware(reduxThunk));


ReactDOM.render( 
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root') 
);