import 'react-select/less/default.less'
import './styles.less'
import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar/Container.jsx'

class NavContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleNavbarToggleClick = this.handleNavbarToggleClick.bind(this)
  }
  render () {
    const {handleNavbarToggleClick, searchBarVisible} = this.props;
    return (
      <div className="">
        <div className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button onClick={this.handleNavbarToggleClick} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <button onClick={this.handleNavbarToggleClick} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <span className="primary-color">adult</span>
                <span className="secondary-color">work.com</span>
                <span className="subtext-color">|react</span>
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">SEARCH</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">MY ACCOUNT
                    <b className="caret"></b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
              {searchBarVisible ?
                <div className="navbar subnav" role="navigation">
                  <div className="container-fluid">
                    <div className="row">
                      <SearchBar />
                    </div>
                  </div>
                </div>
               : null}
        </div>

    )
  }
  handleNavbarToggleClick(){
    console.log('handleNavbarToggleClick')
    //this.props.dispatch(toggleSubNavSearchVisibility())
  }
}

function filterState(state) {
  return {searchBarVisible: state.searchBar.visible,}
}
export default connect(filterState)(NavContainer);
