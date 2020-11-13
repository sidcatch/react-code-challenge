import { LOAD_RESIDENTS } from "../actions/types";

const initialState = [];

//export default function (state = initialState, action) {}
let residentsReducer = function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_RESIDENTS:
      return payload;

    default:
      return state;
  }
};

export default residentsReducer;
