import values from 'lodash/values'

export const getWeather = (state) => values(state.list)
