import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import reducer from '../reducers/'
import App from "./App";
import {searchSuccess} from '../actions/Search';
import searchSaga from '../sagas/Search';
import createSagaMiddleware from 'redux-saga';



const sagas=createSagaMiddleware();
const store=createStore(
    reducer,
    applyMiddleware(createLogger(),sagas
));
sagas.run(searchSaga);
const results=[
    {
    full:'https://media2.giphy.com/media/g5KhmX06Q0XBu/giphy.gif?cid=e529419f9e4c27dc3f0f3475f274b704f4d961238d9951a0&rid=giphy.gif',
    thumbnail: 'https://media2.giphy.com/media/g5KhmX06Q0XBu/100_s.gif?cid=e529419f9e4c27dc3f0f3475f274b704f4d961238d9951a0&rid=100_s.gif',
    },
    {
    full:'https://media2.giphy.com/media/uw3fTCTNMbXAk/giphy.gif?cid=e529419f9e4c27dc3f0f3475f274b704f4d961238d9951a0&rid=giphy.gif',
    thumbnail: 'https://media2.giphy.com/media/uw3fTCTNMbXAk/100_s.gif?cid=e529419f9e4c27dc3f0f3475f274b704f4d961238d9951a0&rid=100_s.gif',
    },
]

// window.setTimeout(()=>{
//     store.dispatch(searchSuccess(results),4000);
// })
ReactDOM.render(
    <Provider store = {store}><App /></Provider>, document.getElementById('root') );