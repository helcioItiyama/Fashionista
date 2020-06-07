import { UPDATE_PRODUCT_AMOUNT } from '../actions/actionsTypes';

const initialState = {
  product: [],
};

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_PRODUCT_AMOUNT:
      return {
        ...state,
        index: payload.index,
        product[payload.index]: payload.amount
      };

    default:
      return state;
  }
}
