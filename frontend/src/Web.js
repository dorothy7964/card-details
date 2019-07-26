import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Company from './Company';
import Details from './Details';

class Web extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route>
            <Route exact path="/company" component={Company} />
            <Route path="/company/:id" component={Details} />
          </Route>
        </div>
      </Router>
    )
  }
}

export default Web;
