'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reduxLogger = require('redux-logger');

var _reducersFactory = require('../reducersFactory');

var _reducersFactory2 = _interopRequireDefault(_reducersFactory);

var _reactRouterRedux = require('react-router-redux');

var _rootSaga = require('../rootSaga');

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _HistoryConfig = require('../services/HistoryConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();
var middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  var logger = (0, _reduxLogger.createLogger)({
    level: 'info',
    collapsed: true
  });

  middleware.push(logger);
}

var router = (0, _reactRouterRedux.routerMiddleware)(_HistoryConfig.appHistory);

middleware.push(router);

var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);

function configureStore(initialState) {
  var reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  var store = createStoreWithMiddleware(_reducersFactory2.default, initialState, reduxDevTools);

  sagaMiddleware.run(_rootSaga2.default, store);

  return store;
}

var Store = configureStore();

exports.default = Store;