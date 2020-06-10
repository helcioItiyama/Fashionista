import { LOAD_PRODUCTS_SUCCESS } from '../actions/actionsTypes';

export default function dataReducer(state = [], { type, payload }) {
  switch (type) {
    case LOAD_PRODUCTS_SUCCESS:
      return [...state, ...payload];

    default:
      return state;
  }
}
