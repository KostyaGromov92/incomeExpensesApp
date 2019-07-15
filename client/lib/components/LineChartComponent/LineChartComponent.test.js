'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _LineChartComponent = require('./LineChartComponent');

var _LineChartComponent2 = _interopRequireDefault(_LineChartComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LineChart />', function () {
	test('renders', function () {
		var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LineChartComponent2.default, null));
		expect(wrapper).toMatchSnapshot();
	});
});