import {SEARCH_PROFILES_SUCCESS, SET_PROFILE_HIDDEN, GET_MEMBERS_OF_THE_DAY_SUCCESS,
  GET_ESCORT_OF_THE_DAY_SUCCESS,
  GET_ESCORT_OF_THE_DAY_ERROR,
  GET_DIRECTCAM_OF_THE_DAY_SUCCESS,
  GET_DIRECTCAM_OF_THE_DAY_ERROR,
  GET_PHONECHAT_OF_THE_DAY_SUCCESS,
  GET_PHONECHAT_OF_THE_DAY_ERROR,
  GET_GROUP_OF_THE_DAY_SUCCESS,
  GET_GROUP_OF_THE_DAY_ERROR} from '../constants/index'


export const profiles = (state=[], action) => {
  switch (action.type) {
    case SEARCH_PROFILES_SUCCESS:
      return [...action.data.Profiles]
    case SET_PROFILE_HIDDEN:
      return state.map(p => {
        if(action.id===p.UserID){
          return {
            ...p,
            hidden:true
          }
        } else {
          return p;
        }
      })
    default:
      return state
  }
}


export const escortOfTheDay = (state={}, action) => {
  switch (action.type) {
    case GET_ESCORT_OF_THE_DAY_SUCCESS:
    //hack to display thumbnail URL as its not in the api data for getProfile
    let obj = {...action.data}
    obj.Profile = {...obj.Profile, ProfileThumbnailURL: '//cdn.adultwork.com/images/t/API/MF_H.jpg'}
      return obj
    default:
      return state
  }
}
export const directCamOfTheDay = (state={}, action) => {
  switch (action.type) {
    case GET_DIRECTCAM_OF_THE_DAY_SUCCESS:
    //hack to display thumbnail URL as its not in the api data for getProfile
    let obj = {...action.data}
    obj.Profile = {...obj.Profile, ProfileThumbnailURL: '//cdn.adultwork.com/images/t/API/MF_H.jpg'}
      return obj
    default:
      return state
  }
}
export const phoneChatOfTheDay = (state={}, action) => {
  switch (action.type) {
    case GET_PHONECHAT_OF_THE_DAY_SUCCESS:
    //hack to display thumbnail URL as its not in the api data for getProfile
    let obj = {...action.data}
    obj.Profile = {...obj.Profile, ProfileThumbnailURL: '//cdn.adultwork.com/images/t/API/MF_H.jpg'}
      return obj
    default:
      return state
  }
}
export const groupOfTheDay = (state={}, action) => {
  switch (action.type) {
    case GET_GROUP_OF_THE_DAY_SUCCESS:
    //hack to display thumbnail URL as its not in the api data for getProfile
    let obj = {...action.data}
    obj.Profile = {...obj.Profile, ProfileThumbnailURL: '//cdn.adultwork.com/images/t/API/MF_H.jpg'}
      return obj
    default:
      return state
  }
}
