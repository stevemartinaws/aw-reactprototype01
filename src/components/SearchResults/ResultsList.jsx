import React from 'react';
import {connect} from 'react-redux';
import GridCard from '../ProfileCard/GridCard.jsx'

const ResultsList = ({profiles}) => {
  if(!profiles){
    return <div>No Data</div>
  }
  return (<ul className="media-list">
      {profiles.map((p) => <li key={p.UserID} className="col-sm-6 col-md-4 col-lg-3"><GridCard {...p}/></li>)}
    </ul>
  )
}

function filterState(state){
  return {
    profiles: state.profiles
  }
}

export default connect(filterState)(ResultsList);
