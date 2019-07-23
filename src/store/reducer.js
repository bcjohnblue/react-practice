import { combineReducers } from 'redux';
import cardReducer from './modules/card/reducer';

export default combineReducers({
  card: cardReducer
});
