import {profiles} from './api';
import {searchBar} from './searchBar'
import {genders} from './aw-api/Genders.js'
import {orientations} from './aw-api/Orientations.js'
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
  searchBar,
  profiles,
  genders,
  orientations,
  routing: routeReducer
});
