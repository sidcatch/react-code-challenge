import { LOAD_PLANETS } from "./types";
import axios from "axios";

export const loadPlanets = () => async (dispatch) => {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");

    dispatch({ type: LOAD_PLANETS, payload: res.data });
  } catch (err) {
    console.log("Can't load planets");
  }
};
