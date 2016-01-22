import {
  AWAPI_GETORIENTATIONS_SUCCESS, AWAPI_GETORIENTATIONS_SUCCESS_ERROR
}
from '../../constants/index.js'

export const orientations = (state = [], action) => {
  switch (action.type) {
    case AWAPI_GETORIENTATIONS_SUCCESS:
      const arr = [{
          value: 0,
          label: 'All',
          queryString:''
        }] // Adds an All value to the array
      const orientationsArr = action.data.map(i => {
          return {
            value: i.OrientationID,
            label: i.OrientationName,
            queryString:`OrientationIDs=${i.OrientationID}`
          }
        }) //creates the orientations array in the format we want.
      return [...arr, ...orientationsArr] //replaces the orientations state entirely
    default:
      return state
  }
}
