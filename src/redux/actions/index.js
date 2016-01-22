import {searchProfiles, getMembersOfTheDay} from './api'
import {getGenders, getGendersSuccess, getGendersError} from './aw-api/getGenders.js';
import {getOrientations, getOrientationsSuccess, getOrientationsError} from './aw-api/GetOrientations.js';
import {genderSelected, serviceSelected, orientationSelected} from './searchBar'
export default {
  searchProfiles,
  getMembersOfTheDay,
  getGenders, getGendersSuccess, getGendersError,
  getOrientations, getOrientationsSuccess, getOrientationsError,
  genderSelected, serviceSelected, orientationSelected
};
