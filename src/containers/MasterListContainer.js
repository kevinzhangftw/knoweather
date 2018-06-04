import React from 'react'
import MasterListView from '../components/MasterListView'

export default class MasterListContainer extends React.Component {
  render() {
    return (
      <MasterListView navigation={this.props.navigation}/>
    )
  }
}


