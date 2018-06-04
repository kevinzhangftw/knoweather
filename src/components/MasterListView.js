import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class MasterListContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>MasterListView</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Home: {
    screen: MasterListContainer
  },
})

