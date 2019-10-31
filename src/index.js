import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

const MOUNT_NODE = document.getElementById('root');

function render() {
    ReactDOM.render((
        <Provider store={store}>
            <App />
        </Provider>
    ), MOUNT_NODE);
};

render();

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}