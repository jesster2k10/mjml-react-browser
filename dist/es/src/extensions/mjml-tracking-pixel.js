function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { MjmlRaw } from '../mjml-raw';
export var MjmlTrackingPixel = /*#__PURE__*/function (_Component) {
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
    return /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("img", {
      src: src,
      style: trackingPixelStyle,
      width: 1,
      height: 1,
      border: 0
    }));
  };

  return MjmlTrackingPixel;
}(Component);