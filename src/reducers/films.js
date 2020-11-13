import { LOAD_FILMS } from "../actions/types";

const initialState = [];

//export default function (state = initialState, action) {}
let filmsReducer = function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FILMS:
      return payload;

    default:
      return state;
  }
};

export default filmsReducer;
