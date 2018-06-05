import React from 'react'
import { Provider } from 'react-redux'
import * as redux from 'redux'
import thunkMiddleware from 'redux-thunk'
import { config } from 'fetch-redux-crud'

import RootStack from './src/RootStack'
import reducers from './src/reducers'


config.apiUrl = 'https://mayfly.localtunnel.me/'

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


