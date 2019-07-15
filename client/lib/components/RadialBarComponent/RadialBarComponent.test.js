'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _RadialBarComponent = require('./RadialBarComponent');

var _RadialBarComponent2 = _interopRequireDefault(_RadialBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<RadialBarComponent />', function () {
  test('renders', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadialBarComponent2.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});