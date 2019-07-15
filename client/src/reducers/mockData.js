/* eslint-disable max-len */
// USER - REDUCER
// =============================================================================

import { handleActions } from 'redux-actions';

// ACTION TYPES
import * as MockDataActionTypes from '../actions/types/mockData';

export type MockDataState = {
  isFetching: boolean,
  mockDataResults: ?Array<Object>,
  error: ?Object,
};

export const initialState: MockDataState = {
  isFetching: false,
  mockDataResults: null,
  error: null,
};

const handlerMap = {
  [MockDataActionTypes.GET_MOCK_DATA_REQUEST]: state => ({
    ...state,
    isFetching: true,
  }),

  [MockDataActionTypes.GET_MOCK_DATA_DONE]: (state, action) => ({
    ...state,
    isFetching: false,
    mockDataResults: action.payload,
  }),

  [MockDataActionTypes.GET_MOCK_DATA_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload,
  }),
};

export default handleActions(handlerMap, initialState);
