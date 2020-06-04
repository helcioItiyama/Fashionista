import { GET_PRODUCTS } from './actionsTypes';

export function getProducts(data) {
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
}
