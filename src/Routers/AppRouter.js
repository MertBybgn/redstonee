import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Example from "../pages/Example";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import '../styles/reset.scss';
function AppRouter() {
  return (
    
    <Layout>
<Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/example">
            <Example />
          </Route>
        </Switch>
    </Router>
    </Layout>
  
  )
}

export default AppRouter ;

