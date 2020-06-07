import { ADD_TO_CART_SUCCESS, CLOSE_MODAL } from '../actions/actionsTypes';

const initialState = {
  productToCart: [],
  isModal: false,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isModal: true,
        productToCart: [...state.productToCart, payload],
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModal: false,
      };

    default:
      return state;
  }
}
