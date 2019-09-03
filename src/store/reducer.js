import { combineReducers } from 'redux';
import cardReducer from './modules/card/reducer';
import driveReducer from './modules/drive/reducer';

export default combineReducers({
  card: cardReducer,
  drive: driveReducer
});
