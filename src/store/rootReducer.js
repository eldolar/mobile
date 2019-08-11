import { combineReducers } from 'redux';
import { reducer as banks } from './reducers/banks';

export default function configureReducers() {
  return combineReducers({
    banks,
  });
}
