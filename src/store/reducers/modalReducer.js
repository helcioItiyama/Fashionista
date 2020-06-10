import {
  SEARCH_PRODUCT_SUCCESS,
  CLOSE_MODAL,
  TOGGLE_CART_MODAL,
} from '../actions/actionsTypes';

const initialState = {
  searchProducts: [],
  isSearchModal: false,
  isCartModal: false,
};

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isSearchModal: true,
        isCartModal: false,
        searchProducts: [...payload],
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isSearchModal: false,
        isCartModal: false,
        searchProducts: [],
      };

    case TOGGLE_CART_MODAL:
      return {
        ...state,
        isSearchModal: false,
        isCartModal: payload,
      };

    default:
      return state;
  }
}
