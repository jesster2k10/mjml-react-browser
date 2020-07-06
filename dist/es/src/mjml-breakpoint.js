function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlBreakpoint = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlBreakpoint, _Component);

  function MjmlBreakpoint() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlBreakpoint.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-breakpoint', handleMjmlProps(this.props), null);
  };

  return MjmlBreakpoint;
}(Component);