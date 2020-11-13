import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Planets from "../Planets";
import Films from "../Films";
import Residents from "../Residents";
import PlanetDetails from "../PlanetDetails";
import Alert from "../Alert";

function App() {
  return (
    <Router>
      <div className="App">
        <Alert />
        <Route
          exact
          path="/"
          render={(props) => (
            <Fragment>
              <Planets {...props} showFilms={true} showResidents={true} />
            </Fragment>
          )}
        />
        <Route path="/films" component={Films} />
        <Route path="/residents" component={Residents} />
        <Route path="/planet-details/:id" component={PlanetDetails} />
      </div>
    </Router>
  );
}

export default App;
