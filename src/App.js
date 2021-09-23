import {
    Route,
    Switch,
    HashRouter,
    
  } from "react-router-dom";
import { AppHeader } from './components/AppHeader';


export const App = () => {
  return (
    <div>
      <HashRouter>
          <Switch>
            <AppHeader/>
            <Route exact path="/" component={AppHeader} />
          </Switch>
      </HashRouter>


    </div>
  );
}