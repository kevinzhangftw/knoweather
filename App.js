import React from 'react'
import { Provider } from 'react-redux'
import * as redux from 'redux'
import thunkMiddleware from 'redux-thunk'
import { config } from 'fetch-redux-crud'

import RootStack from './src/RootStack'
import reducers from './src/reducers'


config.apiUrl = 'http://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22'

const store = redux.createStore(
	reducers,
	redux.applyMiddleware(thunkMiddleware)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}


