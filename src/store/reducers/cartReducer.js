/* eslint-disable no-case-declarations */
import {
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_PRODUCT,
  UPDATE_COUNTER_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
} from '../actions/actionsTypes';

const initialState = {
  productToCart: [],
  totalCount: 0,
  totalPrice: 0,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        productToCart: [...state.productToCart, payload],
      };

    case UPDATE_CART_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const index = state.productToCart.findIndex(
        (product) => product.id === payload.id
      );
      state.productToCart[index] = payload;
      const newProductToCart = state.productToCart;
      return {
        ...state,
        productToCart: newProductToCart,
      };

    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        productToCart: payload,
      };

    case UPDATE_COUNTER_SUCCESS:
      return {
        ...state,
        totalCount: payload.totalCount,
        totalPrice: payload.totalPrice,
      };

    default:
      return state;
  }
}
