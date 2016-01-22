import React from 'react';
import {connect} from 'react-redux';
import SearchResults from '../SearchResults/Container.jsx'

const Home = (props) => {
  return (
    <div className="search-results container-fluid">
      <div className="col-md-12">
        <SearchResults />
      </div>
    </div>
  )
}

export default connect()(Home);
