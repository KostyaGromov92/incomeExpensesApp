'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _MixBarComponent = require('./MixBarComponent');

var _MixBarComponent2 = _interopRequireDefault(_MixBarComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<MixBarComponent />', function () {
  test('renders', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_MixBarComponent2.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});