// @flow
// MOCK DATA - SAGAS
// =============================================================================

import type { PutEffect, IOEffect } from 'redux-saga/effects';
import { call, put, takeEvery } from 'redux-saga/effects';

// import type { FluxStandardAction } from '../types/flux';

// TYPES
import * as mockDataActionTypes from '../actions/types/mockData';

// ACTIONS
import * as mockDataAction from '../actions/mockData';

// SERVICES
import { processRequest } from '../services/Api';


export function* handleGetMockDataSaga(): Generator<PutEffect, *, *> {
  try {
    const availableUsers = yield call(processRequest, 'posts', 'GET');

    yield put(mockDataAction.getMockDataDone(availableUsers));
  } catch (e) {
    yield put(mockDataAction.getMockDataFailure(e));
  }
}

export function* watchHandleGetMockDataSaga(): Generator<IOEffect, *, *> {
  yield takeEvery(mockDataActionTypes.GET_MOCK_DATA_REQUEST, handleGetMockDataSaga);
}
