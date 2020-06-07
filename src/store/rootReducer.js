import { combineReducers } from 'redux';
import reducer from './reducers/reducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

export default combineReducers({
  reducer,
  cartReducer,
  productReducer,
});
