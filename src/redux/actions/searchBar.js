import {SEARCHBAR_GENDER_SELECTED, SEARCHBAR_SERVICE_SELECTED, SEARCHBAR_ORIENTAION_SELECTED} from '../constants/index.js'

export const genderSelected = (item) => {
  return {
    type: SEARCHBAR_GENDER_SELECTED,
    item: item
  }
}

export const serviceSelected = (item) => {
  return {
    type: SEARCHBAR_SERVICE_SELECTED,
    item: item
  }
}

export const orientationSelected = (item) => {
  return {
    type: SEARCHBAR_ORIENTAION_SELECTED,
    item: item
  }
}
