import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './Styles/index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import reducer from './Reducers/index'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Containers/App', () => {
    const NextApp = require('./Containers/App').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
