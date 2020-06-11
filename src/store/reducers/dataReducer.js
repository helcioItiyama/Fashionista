import {
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
} from '../actions/actionsTypes';

const initialState = {
  isError: false,
  store: [],
};

export default function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_PRODUCTS_SUCCESS:
      return {
        isError: false,
        store: [...state.store, ...payload],
      };

    case LOAD_PRODUCTS_FAILURE:
      return {
        isError: true,
        store: [...state.store],
      };

    default:
      return state;
  }
}
