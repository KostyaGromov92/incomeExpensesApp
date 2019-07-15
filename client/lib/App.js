'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LineChartContainer = require('./containers/LineChartContainer');

var _LineChartContainer2 = _interopRequireDefault(_LineChartContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(_LineChartContainer2.default, null)
  );
};

// CONTAINERS
exports.default = App;