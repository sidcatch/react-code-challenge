import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Planets from "../Planets";
import Films from "../Films";
import Residents from "../Residents";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Planets} />
        <Route path="/films" component={Films} />
        <Route path="/residents" component={Residents} />
      </div>
    </Router>
  );
}

export default App;
