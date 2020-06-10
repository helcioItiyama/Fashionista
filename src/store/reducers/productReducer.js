import { CHOOSE_PRODUCT } from '../actions/actionsTypes';

const initialState = {
  id: '',
  product: {},
  productId: 0,
  installments: 0,
  count: 0,
  size: '',
  totalProductPrice: '',
  totalInstallment: '',
  formattedTotalProductPrice: '',
  formattedTotalInstallment: '',
};

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CHOOSE_PRODUCT:
      return {
        ...state,
        id: payload.id,
        product: payload.product,
        productId: payload.id,
        installments: payload.installments,
        count: payload.count,
        size: payload.size,
        totalProductPrice: payload.totalProductPrice,
        totalInstallment: payload.totalInstallment,
        formattedTotalProductPrice: payload.formattedTotalProductPrice,
        formattedTotalInstallment: payload.formattedTotalInstallment,
      };

    default:
      return state;
  }
}
