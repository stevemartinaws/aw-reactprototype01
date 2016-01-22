import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Navbar from '../Navbar/Container.jsx'

import {getGenders, getOrientations} from '../../redux/actions/index.js'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.props.dispatch(getGenders());
    this.props.dispatch(getOrientations());
  }
  render () {
    const {dispatch} = this.props
    return (
      <div>
        <Navbar/>
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect()(App);
