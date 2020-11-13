import { LOAD_RESIDENTS } from "./types";
import axios from "axios";

export const loadResidents = (urls) => (dispatch) => {
  let requests = urls.map((url) => axios.get(url));

  axios
    .all(requests)
    .then(
      axios.spread((...responses) => {
        //console.log(responses);
        let residents = responses.map((res) => ({ ...res.data }));
        //console.log(residents);
        dispatch({ type: LOAD_RESIDENTS, payload: residents });
      })
    )
    .catch((errors) => {
      console.log("Can't load residents");
    });
};
