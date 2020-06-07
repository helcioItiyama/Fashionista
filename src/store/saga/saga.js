import { call, all, put, select, takeLatest } from 'redux-saga/effects';
import {
  GET_PRODUCTS_SAGA,
  SET_PRODUCTS_SAGA,
  ADD_TO_CART_REQUEST,
} from '../actions/actionsTypes';
import api from '../../services/api';
import { numberFormat, priceFormat } from '../../utils/format';
import { addToCartSuccess, updateProductAmount } from '../actions/actions';

let priceFormattedData = [];

function* loadProductsSaga() {
  const response = yield call(api.get);
  const { data } = response;
  const installmentPercentage = 3;

  const newData = data.map((number) => ({
    ...number,
    regularFormattedNumber: numberFormat(number.regular_price),
    actualFormattedNumber: numberFormat(number.actual_price),
    regular_price: priceFormat(number.regular_price),
    actual_price: priceFormat(number.actual_price),
  }));

  priceFormattedData = newData.map((number) => ({
    ...number,
    installmentFormattedNumber: (
      number.actualFormattedNumber / installmentPercentage
    ).toFixed(2),
    regular_price: priceFormat(number.regularFormattedNumber),
    actual_price: priceFormat(number.actualFormattedNumber),
  }));

  // const totalAmount = newData.reduce((total, product) => {
  //   total += product.actualFormattedNumber;
  //   return total;
  // }, 0);

  yield put({ type: SET_PRODUCTS_SAGA, payload: priceFormattedData });
}

function* addToCart(product) {
  const productExists = yield select((state) =>
    state.cartReducer.productToCart.find((item) => item === product.payload)
  );

  const { productAmount } = yield select((state) => state.productReducer);

  const currentAmount = productExists ? productAmount : 0;

  const amount = currentAmount + 1;

  if (productExists) {
    const index = yield select((state) =>
      state.cartReducer.productToCart.findIndex(
        (prod) => prod === productExists
      )
    );
    yield put(updateProductAmount(amount, index));
    return;
  }

  const productChosen = product.payload;

  yield put(addToCartSuccess(productChosen));
}

export default all([
  takeLatest(GET_PRODUCTS_SAGA, loadProductsSaga),
  takeLatest(ADD_TO_CART_REQUEST, addToCart),
]);
