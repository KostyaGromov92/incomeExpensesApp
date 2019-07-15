import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// REDUCERS
import mockData from './reducers/mockData';

export default combineReducers({
  routing,
  mockData,
});
