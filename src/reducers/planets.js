import { LOAD_PLANETS } from "../actions/types";

const initialState = {};

//export default function (state = initialState, action) {}
let planetsReducer = function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PLANETS:
      return payload;

    default:
      return state;
  }
};

export default planetsReducer;
