import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions/weatheractions'
import { getWeather } from '../selectors/weatherselectors'
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

class MasterListContainer extends React.Component {
  componentDidMount() {
		const { dispatch } = this.props
		dispatch(fetchWeather())
	}

  render() {
    console.log('props is:', this.props)
    const { jobs } = this.props
    console.log('jobs is:', jobs)
    return (
      <MasterListView
        navigation={this.props.navigation}
        data={responsedata}
      />
    )
  }
}

MasterListContainer.propTypes = {
  dispatch: PropTypes.func,
  weather: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  weather: state
})

export default connect(mapStateToProps)(MasterListContainer)


