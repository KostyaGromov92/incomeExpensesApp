import { fork } from 'redux-saga/effects';

import * as mockDataSagas from './sagas/mockData';

export default function* rootSaga() {
  yield fork(mockDataSagas.watchHandleGetMockDataSaga);
}
