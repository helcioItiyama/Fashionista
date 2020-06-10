import { call, all, put, select, takeLatest } from 'redux-saga/effects';
import {
  GET_PRODUCTS,
  ADD_TO_CART_REQUEST,
  CHOOSE_PRODUCT,
  UPDATE_COUNTER_REQUEST,
  INCREMENT_COUNTER_REQUEST,
  DECREMENT_COUNTER_REQUEST,
  REMOVE_PRODUCT_REQUEST,
  SEARCH_PRODUCT_REQUEST,
} from '../actions/actionsTypes';
import api from '../../services/api';
import { numberFormat, priceFormat } from '../../utils/format';
import {
  addToCartSuccess,
  loadProductsSuccess,
  updateCartProduct,
  chooseProduct,
  updateCounterRequest,
  updateCounterSuccess,
  removeProductSuccess,
  searchProductSuccess,
} from '../actions/actions';

let priceFormattedData = [];

function* loadProducts() {
  const response = yield call(api.get);
  const { data } = response;

  const newData = data.map((number) => ({
    ...number,
    regularFormattedNumber: numberFormat(number.regular_price),
    actualFormattedNumber: numberFormat(number.actual_price),
    regular_price: priceFormat(number.regular_price),
    actual_price: priceFormat(number.actual_price),
  }));

  priceFormattedData = newData.map((number) => ({
    ...number,
    regular_price: priceFormat(number.regularFormattedNumber),
    actual_price: priceFormat(number.actualFormattedNumber),
  }));

  yield put(loadProductsSuccess(priceFormattedData));
}

function* updateCounter() {
  const getCounters = yield select((state) => state.cartReducer.productToCart);

  const { totalCount, totalPrice } = getCounters.reduce(
    (total, { count, totalProductPrice }) => {
      if (count) {
        total.totalCount += count;
      }
      if (totalProductPrice) {
        total.totalPrice += totalProductPrice;
      }
      return total;
    },
    {
      totalCount: 0,
      totalPrice: 0,
    }
  );

  yield put(updateCounterSuccess(totalCount, priceFormat(totalPrice)));
}

function* incrementCounter({ id }) {
  const getProduct = yield select((state) =>
    state.cartReducer.productToCart.find((item) => item.productId === id)
  );

  const {
    count,
    product,
    size,
    installments,
    totalProductPrice,
    totalInstallment,
  } = getProduct;

  const increasePrice = totalProductPrice / count;
  const increaseInstallment = totalInstallment / count;

  const formattedProduct = {
    id,
    product,
    size,
    installments,
    totalProductPrice: totalProductPrice + increasePrice,
    totalInstallment: totalInstallment + increaseInstallment,
    formattedTotalProductPrice: priceFormat(totalProductPrice + increasePrice),
    formattedTotalInstallment: priceFormat(
      totalInstallment + increaseInstallment
    ),
    count: count + 1,
  };

  yield put(chooseProduct(formattedProduct));

  const addProduct = yield select((state) => state.productReducer);

  yield put(updateCartProduct(addProduct));
  yield put(updateCounterRequest());
}

function* decrementCounter({ id }) {
  const getProduct = yield select((state) =>
    state.cartReducer.productToCart.find((item) => item.productId === id)
  );

  const {
    count,
    product,
    size,
    installments,
    totalProductPrice,
    totalInstallment,
  } = getProduct;

  if (count <= 1) {
    return;
  }

  const decreasePrice = totalProductPrice / count;
  const decreaseInstallment = totalInstallment / count;

  const formattedProduct = {
    type: CHOOSE_PRODUCT,
    id,
    product,
    size,
    installments,
    totalProductPrice: totalProductPrice - decreasePrice,
    totalInstallment: totalInstallment - decreaseInstallment,
    formattedTotalProductPrice: priceFormat(totalProductPrice - decreasePrice),
    formattedTotalInstallment: priceFormat(
      totalInstallment - decreaseInstallment
    ),
    count: count - 1,
  };

  yield put(chooseProduct(formattedProduct));

  const addProduct = yield select((state) => state.productReducer);
  yield put(updateCartProduct(addProduct));
  yield put(updateCounterRequest());
}

function* addToCart({ id, product }) {
  const productExists = yield select((state) =>
    state.cartReducer.productToCart.find((item) => item.productId === id)
  );

  const productSize = product.sizes.find((size) => size.sku === id);

  // eslint-disable-next-line no-unused-vars
  const [number, _] = product.installments.split('x');
  const totalInstallment = product.actualFormattedNumber / Number(number);

  if (!productExists) {
    const formattedProduct = {
      type: CHOOSE_PRODUCT,
      id,
      product,
      size: productSize.size,
      installments: number,
      totalProductPrice: product.actualFormattedNumber,
      totalInstallment,
      formattedTotalProductPrice: priceFormat(product.actualFormattedNumber),
      formattedTotalInstallment: priceFormat(totalInstallment),
      count: 1,
    };

    yield put(chooseProduct(formattedProduct));

    const addProduct = yield select((state) => state.productReducer);

    yield put(addToCartSuccess(addProduct));
    yield put(updateCounterRequest());
    return;
  }

  const formattedProduct = {
    type: CHOOSE_PRODUCT,
    id,
    product,
    size: productSize.size,
    installments: number,
    totalProductPrice:
      productExists?.totalProductPrice + product.actualFormattedNumber,
    totalInstallment: productExists?.totalInstallment + totalInstallment,
    formattedTotalProductPrice: priceFormat(
      productExists?.totalProductPrice + product.actualFormattedNumber
    ),
    formattedTotalInstallment: priceFormat(
      productExists?.totalInstallment + totalInstallment
    ),
    count: productExists?.count + 1,
  };

  yield put(chooseProduct(formattedProduct));

  const addProduct = yield select((state) => state.productReducer);
  yield put(updateCartProduct(addProduct));
  yield put(updateCounterRequest());
}

function* removeFromCart({ id }) {
  const removedProductArray = yield select((state) =>
    state.cartReducer.productToCart.filter((item) => item.productId !== id)
  );
  yield put(removeProductSuccess(removedProductArray));
  yield put(updateCounterRequest());
}

function* searchProduct({ search }) {
  let getProducts = yield select((state) =>
    state.dataReducer.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  if (search.length === 0) {
    getProducts = [];
  }

  yield put(searchProductSuccess(getProducts));
}

export default all([
  takeLatest(GET_PRODUCTS, loadProducts),
  takeLatest(UPDATE_COUNTER_REQUEST, updateCounter),
  takeLatest(ADD_TO_CART_REQUEST, addToCart),
  takeLatest(INCREMENT_COUNTER_REQUEST, incrementCounter),
  takeLatest(DECREMENT_COUNTER_REQUEST, decrementCounter),
  takeLatest(REMOVE_PRODUCT_REQUEST, removeFromCart),
  takeLatest(SEARCH_PRODUCT_REQUEST, searchProduct),
]);
