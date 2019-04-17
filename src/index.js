// react things
import React from 'react';
import ReactDOM from 'react-dom';

// redux things
import { Provider } from 'react-redux'
import store from './redux/store'

// components
import TodoApp from './TodoApp';

// other
import './index.css';


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    rootElement
);
