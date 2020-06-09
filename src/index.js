import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducer';
import thunk from 'redux-thunk';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById("root"));