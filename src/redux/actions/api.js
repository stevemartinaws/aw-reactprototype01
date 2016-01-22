require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'
import {SEARCH_PROFILES_SUCCESS, SEARCH_PROFILES_ERROR} from '../constants/index'


function fetchSearchProfiles(searchQuery) {
  console.log(searchQuery)
  if (searchQuery) {
    var queryString = ''
    Object.keys(searchQuery).map(function (key) {
      if(searchQuery[key]!==''){
        queryString += '&'+searchQuery[key];
      }
      });

    console.log('SEARCHQUERY IS ', queryString);
  } else {
    var queryString = '';
  }


var myHeaders = new Headers();
myHeaders.append('X-ApiSecret', 'F5Xc5404jEF7Cz7xIFAYKsN6WNKSAD8pdtIsrNflUWA');
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
  //TODO API doesnt seem to support the OPTIONS verb so sending headers is not working
  return fetch(`https://api-sandbox.adultwork.com/v1/search/searchProfiles?apikey=G4laVgcqGCxYDHFmHVsNCQKB3QGlCBSuO7SEgMvSscM${queryString}`);
}

export function searchProfiles(searchQuery) {
  return function (dispatch) {
    return fetchSearchProfiles(searchQuery).then(
      response => response.json(),
      error => dispatch(searchProfilesError(error))
    ).then(
      json => dispatch(searchProfilesSuccess(json))
    );
  };
}

export function searchProfilesSuccess(response){
  return {
    type: SEARCH_PROFILES_SUCCESS,
    data: response
  }
}

export function searchProfilesError(error){
  return {
    type: SEARCH_PROFILES_ERROR,
    error: error
  }
}
