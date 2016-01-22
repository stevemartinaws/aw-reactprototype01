import './styles.less'
import React from 'react';
import {connect} from 'react-redux';
import {searchProfiles} from '../../redux/actions/api.js'
import ResultsList from './ResultsList.jsx'

class ProfileSearchResultsContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  componentWillMount () {
    this.props.dispatch(searchProfiles())
  }
  render () {
    const {profiles} = this.props
    return (
      <div className="search-results container-fluid">
        <div className="row sort-icons">
          <div className="sort-icons">
            <span className="list-view">
              <i className="fa fa-list fa-2x"></i>
              List
            </span>
            <span className="grid-view">
              <i className="fa fa-th fa-2x"></i>
              Grid
            </span>
          </div>
        </div>
        <div className="col-md-12">
          <ResultsList/>
        </div>
      </div>
    )
  }
}

export default connect()(ProfileSearchResultsContainer);
