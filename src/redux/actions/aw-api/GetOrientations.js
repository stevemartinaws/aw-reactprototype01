import {
  AWAPI_GETORIENTATIONS_SUCCESS,
  AWAPI_GETORIENTATIONS_ERROR
} from '../../constants/index'


function fetchGetOrientations() {
  return fetch('https://api-sandbox.adultwork.com/v1/lists/getOrientations?apikey=G4laVgcqGCxYDHFmHVsNCQKB3QGlCBSuO7SEgMvSscM');
}

export function getOrientations() {
  return function (dispatch) {
    return fetchGetOrientations().then(
      response => response.json(),
      error => dispatch(getOrientationsError(error))
    ).then(
      json => dispatch(getOrientationsSuccess(json))
    );
  };
}

export function getOrientationsSuccess(response){
  return {
    type: AWAPI_GETORIENTATIONS_SUCCESS,
    data: response
  }
}

export function getOrientationsError(error){
  return {
    type: AWAPI_GETORIENTATIONS_ERROR,
    error: error
  }
}
