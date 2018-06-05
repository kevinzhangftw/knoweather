import React from 'react'
import { createStackNavigator } from 'react-navigation'

//Routing
import MasterListContainer from './containers/MasterListContainer'
import DetailContainer from './containers/DetailContainer'

const RootStack = createStackNavigator(
  {
    Home: MasterListContainer,
    Details: DetailContainer
  },
  {
    initialRouteName: 'Home'
  }
)

export default RootStack

