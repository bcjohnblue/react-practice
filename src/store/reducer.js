import { combineReducers } from 'redux';
import cardReducer from './modules/card/reducer';
import driveReducer from './modules/drive/reducer';
import noteReducer from './modules/note/reducer';

export default combineReducers({
  card: cardReducer,
  drive: driveReducer,
  note: noteReducer
});
