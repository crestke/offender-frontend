import {
    Route,
    Switch,
    Redirect,
    BrowserRouter as Router,
    
  } from "react-router-dom";
import { AppHeader } from './components/AppHeader';


export const App = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route basename={process.env.PUBLIC_URL} exact path="/" component={AppHeader} />
            <Redirect exact from="/offender-frontend" to="/" />
          </Switch>
      </Router>


    </div>
  );
}