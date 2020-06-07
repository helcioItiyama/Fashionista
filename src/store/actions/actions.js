import {
  GET_PRODUCTS_SAGA,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CLOSE_MODAL,
  UPDATE_PRODUCT_AMOUNT,
} from './actionsTypes';

export const getProducts = () => ({
  type: GET_PRODUCTS_SAGA,
});

export const addToCartRequest = (product) => ({
  type: ADD_TO_CART_REQUEST,
  payload: product,
});

export const addToCartSuccess = (product) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: product,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const updateProductAmount = (amount, index) => ({
  type: UPDATE_PRODUCT_AMOUNT,
  payload: { amount, index },
});
