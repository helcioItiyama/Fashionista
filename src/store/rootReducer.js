import { combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import modalReducer from './reducers/modalReducer';

export default combineReducers({
  dataReducer,
  cartReducer,
  productReducer,
  modalReducer,
});
