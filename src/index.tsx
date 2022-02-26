import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'antd/dist/antd.css';
import './i18n/configs';
import { Provider } from 'react-redux';
import rootStore from './redux/store';
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = rootStore || {};

axios.defaults.headers['x-icode'] = '46D2C8FB792CDC91';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
