'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MixBarComponent = function (_Component) {
  _inherits(MixBarComponent, _Component);

  function MixBarComponent() {
    _classCallCheck(this, MixBarComponent);

    return _possibleConstructorReturn(this, (MixBarComponent.__proto__ || Object.getPrototypeOf(MixBarComponent)).apply(this, arguments));
  }

  _createClass(MixBarComponent, [{
    key: 'render',
    value: function render() {

      var data = [{
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400
      }, {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210
      }, {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290
      }, {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000
      }, {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181
      }, {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500
      }, {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100
      }];

      return _react2.default.createElement(
        _reactstrap.Container,
        null,
        _react2.default.createElement(
          'h2',
          { className: 'text-center' },
          'Mixed Chart'
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '12', md: { size: 6, offset: 3 } },
            _react2.default.createElement(
              _recharts.BarChart,
              {
                width: 500,
                height: 300,
                data: data,
                margin: {
                  top: 20, right: 30, left: 20, bottom: 5
                }
              },
              _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
              _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
              _react2.default.createElement(_recharts.YAxis, null),
              _react2.default.createElement(_recharts.Tooltip, null),
              _react2.default.createElement(_recharts.Legend, null),
              _react2.default.createElement(_recharts.Bar, { dataKey: 'pv', stackId: 'a', fill: '#8884d8' }),
              _react2.default.createElement(_recharts.Bar, { dataKey: 'amt', stackId: 'a', fill: '#82ca9d' }),
              _react2.default.createElement(_recharts.Bar, { dataKey: 'uv', fill: '#ffc658' })
            )
          )
        )
      );
    }
  }]);

  return MixBarComponent;
}(_react.Component);

exports.default = MixBarComponent;