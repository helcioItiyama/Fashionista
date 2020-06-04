import { GET_PRODUCTS } from './actionsTypes';

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
}
