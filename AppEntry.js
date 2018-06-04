import React from 'react'
import { createStackNavigator } from 'react-navigation'

//Routing
import MasterListContainer from './src/containers/MasterListContainer'
import DetailContainer from './src/containers/DetailContainer'
const RootStack = createStackNavigator(
  {
    Home: MasterListContainer,
    Details: DetailContainer
  },
  {
    initialRouteName: 'Home'
  }
)

export default class AppEntry extends React.Component {
  render() {
    return (
      <RootStack/>
    )
  }
}

