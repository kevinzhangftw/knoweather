import React from 'react'
import { Provider } from 'react-redux'
import * as redux from 'redux'
import thunkMiddleware from 'redux-thunk'
import { config } from 'fetch-redux-crud'

import RootStack from './src/RootStack'
import reducers from './src/reducers'


config.apiUrl = 'http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10'

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


