import {
  SEARCHBAR_GENDER_SELECTED,
  SEARCHBAR_SERVICE_SELECTED,
  SEARCHBAR_ORIENTAION_SELECTED
}
from '../constants/index'

export const searchBar = (state = {}, action) => {
  switch (action.type) {
    case SEARCHBAR_GENDER_SELECTED:
      let gen_searchQuery_obj = {...state.searchQuery
      }
      gen_searchQuery_obj['GENDER'] = action.item.queryString;
      return {
        ...state,
        searchQuery: {...gen_searchQuery_obj
        },
        genderSelectedValue: action.item.value
      }
    case SEARCHBAR_SERVICE_SELECTED:
      let ser_searchQuery_obj = {...state.searchQuery
      }
      ser_searchQuery_obj['SERVICE'] = action.item.queryString;
      return {
        ...state,
        searchQuery: {...ser_searchQuery_obj
        },
        servicesSelectedValue: action.item.value
      }
    case SEARCHBAR_ORIENTAION_SELECTED:
      let ori_searchQuery_obj = {...state.searchQuery
      }
      ori_searchQuery_obj['ORIENTATION'] = action.item.queryString;
      return {
        ...state,
        searchQuery: {...ori_searchQuery_obj
        },
        orientationsSelectedValue: action.item.value
      }
    default:
      return state
  }

}
