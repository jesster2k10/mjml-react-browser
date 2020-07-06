"use strict";

exports.__esModule = true;
exports.MjmlTrackingPixel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mjmlRaw = require("../mjml-raw");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var MjmlTrackingPixel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlTrackingPixel, _Component);

  function MjmlTrackingPixel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlTrackingPixel.prototype;

  _proto.render = function render() {
    var src = this.props.src;
    var trackingPixelStyle = {
      display: 'table',
      height: '1px!important',
      width: '1px!important',
      border: '0!important',
      margin: '0!important',
      padding: '0!important'
    };
    return /*#__PURE__*/_react["default"].createElement(_mjmlRaw.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("img", {
      src: src,
      style: trackingPixelStyle,
      width: 1,
      height: 1,
      border: 0
    }));
  };

  return MjmlTrackingPixel;
}(_react.Component);

exports.MjmlTrackingPixel = MjmlTrackingPixel;