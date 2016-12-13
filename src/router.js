import React,{Component, PropTypes} from 'react';
import App from './App';
import Work from './Work';
import Home from './home';
import { Router, Route, hashHistory, Link , IndexRoute} from 'react-router';


    class Routers extends React.Component {
      render () {
        return(
          <div>
            <Router history={hashHistory}>
              <Route path="/" component={App} >
              <IndexRoute component={Home} />
              <Route path="/work" component={Work}/>
              </Route>
           </Router>
          </div>
        )
      }
    }

    export default Routers;
