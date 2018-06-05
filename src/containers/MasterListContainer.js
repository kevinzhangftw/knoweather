import React from 'react'
import MasterListView from '../components/MasterListView'

const responsedata = [
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]


export default class MasterListContainer extends React.Component {

  render() {
    return (
      <MasterListView
        navigation={this.props.navigation}
        data={responsedata}
      />
    )
  }
}


