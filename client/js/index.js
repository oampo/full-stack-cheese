import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import CheeseList from './components/cheese-list';
import cheeseReducer from './reducers/cheese';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

const store = createStore(cheeseReducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <CheeseList />
    </Provider>
), document.getElementById('main'));


