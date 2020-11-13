import { combineReducers } from "redux";
import planets from "./planets";
import films from "./films";
import residents from "./residents";
import alert from "./alert";

export default combineReducers({
  planets,
  films,
  residents,
  alert,
});
