'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChartComponent = function (_React$Component) {
  _inherits(LineChartComponent, _React$Component);

  function LineChartComponent() {
    _classCallCheck(this, LineChartComponent);

    return _possibleConstructorReturn(this, (LineChartComponent.__proto__ || Object.getPrototypeOf(LineChartComponent)).apply(this, arguments));
  }

  _createClass(LineChartComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Container,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'text-center' },
          'Line Chart'
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '12', md: '12' },
            _react2.default.createElement(
              _recharts.ResponsiveContainer,
              {
                idth: '100%',
                height: 300,
                formMiss: true
              },
              _react2.default.createElement(
                _recharts.LineChart,
                { data: this.props.lineChartData },
                _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
                _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                _react2.default.createElement(_recharts.YAxis, null),
                _react2.default.createElement(_recharts.Tooltip, null),
                _react2.default.createElement(_recharts.Legend, null),
                _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'pv', stroke: '#8884d8', activeDot: { r: 8 } }),
                _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'uv', stroke: '#82ca9d' })
              )
            )
          )
        )
      );
    }
  }]);

  return LineChartComponent;
}(_react2.default.Component);

exports.default = LineChartComponent;