import { SET_PRODUCTS_SAGA } from '../actions/actionsTypes';

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case SET_PRODUCTS_SAGA:
      return [...state, ...payload];

    default:
      return state;
  }
}
