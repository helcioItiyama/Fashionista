import {
  GET_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  CHOOSE_PRODUCT,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CLOSE_MODAL,
  TOGGLE_CART_MODAL,
  UPDATE_CART_PRODUCT,
  UPDATE_COUNTER_REQUEST,
  UPDATE_COUNTER_SUCCESS,
  INCREMENT_COUNTER_REQUEST,
  DECREMENT_COUNTER_REQUEST,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
} from './actionsTypes';

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const loadProductsSuccess = (priceFormattedData) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: priceFormattedData,
});

export const loadProductsFailure = () => ({
  type: LOAD_PRODUCTS_FAILURE,
});

export const chooseProduct = (product) => ({
  type: CHOOSE_PRODUCT,
  payload: product,
});

export const removeProductRequest = (id) => ({
  type: REMOVE_PRODUCT_REQUEST,
  id,
});

export const removeProductSuccess = (removedProductArray) => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload: removedProductArray,
});

export const addToCartRequest = (id, product) => ({
  type: ADD_TO_CART_REQUEST,
  id,
  product,
});

export const addToCartSuccess = (product) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: product,
});

export const updateCartProduct = (product) => ({
  type: UPDATE_CART_PRODUCT,
  payload: product,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const toggleCartModal = (boolean) => ({
  type: TOGGLE_CART_MODAL,
  payload: boolean,
});

export const incrementCounterRequest = (id) => ({
  type: INCREMENT_COUNTER_REQUEST,
  id,
});

export const decrementCounterRequest = (id) => ({
  type: DECREMENT_COUNTER_REQUEST,
  id,
});

export const updateCounterRequest = () => ({
  type: UPDATE_COUNTER_REQUEST,
});

export const updateCounterSuccess = (totalCount, totalPrice) => ({
  type: UPDATE_COUNTER_SUCCESS,
  payload: { totalCount, totalPrice },
});

export const searchProductRequest = (search) => ({
  type: SEARCH_PRODUCT_REQUEST,
  search,
});

export const searchProductSuccess = (products) => ({
  type: SEARCH_PRODUCT_SUCCESS,
  payload: products,
});
