import {
  AWAPI_GETGENDERS_SUCCESS, AWAPI_GETGENDERS_ERROR
}
from '../../constants/index.js'

export const genders = (state = [], action) => {
  switch (action.type) {
    case AWAPI_GETGENDERS_SUCCESS:
      const arr = [{
          value: 0,
          label: 'Any',
          queryString:''
        }] // Adds an Any value to the array
      const gendersArr = action.data.map(i => {
          return {
            value: i.GenderID,
            label: i.GenderName,
            queryString:`GenderIDs=${i.GenderID}`
          }
        }) //creates the genders array in the format we want.
      return [...arr, ...gendersArr] //replaces the genders state entirely
    default:
      return state
  }
}
