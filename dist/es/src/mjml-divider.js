function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlDivider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlDivider, _Component);

  function MjmlDivider() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlDivider.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-divider', handleMjmlProps(this.props), null);
  };

  return MjmlDivider;
}(Component);