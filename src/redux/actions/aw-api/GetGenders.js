import {
  AWAPI_GETGENDERS_SUCCESS,
  AWAPI_GETGENDERS_ERROR
} from '../../constants/index'


function fetchGetGenders() {
  return fetch('https://api-sandbox.adultwork.com/v1/lists/GetGenders?apikey=G4laVgcqGCxYDHFmHVsNCQKB3QGlCBSuO7SEgMvSscM');
}

export function getGenders() {
  return function (dispatch) {
    return fetchGetGenders().then(
      response => response.json(),
      error => dispatch(getGendersError(error))
    ).then(
      json => dispatch(getGendersSuccess(json))
    );
  };
}

export function getGendersSuccess(response){
  return {
    type: AWAPI_GETGENDERS_SUCCESS,
    data: response
  }
}

export function getGendersError(error){
  return {
    type: AWAPI_GETGENDERS_ERROR,
    error: error
  }
}
