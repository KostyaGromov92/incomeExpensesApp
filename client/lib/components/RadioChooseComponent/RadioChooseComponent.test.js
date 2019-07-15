'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _RadioChooseComponent = require('./RadioChooseComponent');

var _RadioChooseComponent2 = _interopRequireDefault(_RadioChooseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<RadioChooseComponent />', function () {
  test('renders', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioChooseComponent2.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});