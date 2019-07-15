'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

var _reactstrap = require('reactstrap');

var _radialBarData = require('../../constants/radialBarData');

var _radialBarData2 = _interopRequireDefault(_radialBarData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// CONSTANTS


var RadialBarComponent = function (_Component) {
  _inherits(RadialBarComponent, _Component);

  function RadialBarComponent() {
    _classCallCheck(this, RadialBarComponent);

    return _possibleConstructorReturn(this, (RadialBarComponent.__proto__ || Object.getPrototypeOf(RadialBarComponent)).apply(this, arguments));
  }

  _createClass(RadialBarComponent, [{
    key: 'render',
    value: function render() {
      var style = {
        top: 0,
        left: 350,
        lineHeight: '24px'
      };

      return _react2.default.createElement(
        _reactstrap.Container,
        { className: 'chart-block' },
        _react2.default.createElement(
          'h2',
          { className: 'text-center' },
          'Radial Chart'
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '12', md: { size: 6, offset: 3 } },
            _react2.default.createElement(
              _recharts.RadialBarChart,
              { width: 500, height: 300, cx: 150, cy: 150, innerRadius: 20, outerRadius: 140, barSize: 10, data: _radialBarData2.default },
              _react2.default.createElement(_recharts.RadialBar, { minAngle: 15, label: { position: 'insideStart', fill: '#fff' }, background: true, clockWise: true, dataKey: 'uv' }),
              _react2.default.createElement(_recharts.Legend, { iconSize: 10, width: 120, height: 140, layout: 'vertical', verticalAlign: 'middle', wrapperStyle: style })
            )
          )
        )
      );
    }
  }]);

  return RadialBarComponent;
}(_react.Component);

exports.default = RadialBarComponent;