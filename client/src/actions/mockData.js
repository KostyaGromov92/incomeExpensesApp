// APP - ACTIONS
// =============================================================================

import { createAction } from 'redux-actions';

import * as actionTypes from './types/mockData';

export const getMockDataRequest = createAction(actionTypes.GET_MOCK_DATA_REQUEST);
export const getMockDataDone = createAction(actionTypes.GET_MOCK_DATA_DONE);
export const getMockDataFailure = createAction(actionTypes.GET_MOCK_DATA_FAILURE);
