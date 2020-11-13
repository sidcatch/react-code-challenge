import { LOAD_FILMS } from "./types";
import axios from "axios";

export const loadFilms = (urls) => (dispatch) => {
  let requests = urls.map((url) => axios.get(url));

  axios
    .all(requests)
    .then(
      axios.spread((...responses) => {
        //console.log(responses);
        let films = responses.map((res) => ({ ...res.data }));
        //console.log(films);
        dispatch({ type: LOAD_FILMS, payload: films });
      })
    )
    .catch((errors) => {
      console.log("Can't load films");
    });
};
