import '../node_modules/bootstrap/less/bootstrap.less';
import './styles/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistory } from 'redux-simple-router'
import { reducers, middleware } from './redux/index.js';
import { App, Home } from './components/_Pages/index.js';

const initialState = {
  searchBar: {
    visible:true,
    listItems: {
      services:[{value:0, label:'All', queryString:''},
        {value:1, label:'Escort', queryString:'IsEscort=1'},
        {value:2, label:'Webcam', queryString:'IsWebcam=1'},
        {value:3, label:'Phone Chat', queryString:'IsPhoneChat=1'},
        {value:4, label:'SMS Chat', queryString:'IsSMSChat=1'}]
    },
    genderSelectedValue:0,
    servicesSelectedValue:0,
    orientationsSelectedValue:0

  }
}

const history = createHashHistory();
const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, middleware.logger, middleware.thunk)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root'));
