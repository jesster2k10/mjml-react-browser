function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlClass = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlClass, _Component);

  function MjmlClass() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlClass.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-class', handleMjmlProps(this.props), null);
  };

  return MjmlClass;
}(Component);