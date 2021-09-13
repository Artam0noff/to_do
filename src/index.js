import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RRApp from './AppReactRedux';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {Provider} from 'react-redux';





    ReactDOM.render(
      <React.StrictMode>
        <Provider store = {store}>
          <RRApp />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );



reportWebVitals();
