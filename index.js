/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import storeState from './redux/store';

const RNRedux = () => (
    <Provider store = { storeState }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);
 