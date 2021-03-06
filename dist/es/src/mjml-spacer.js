function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlSpacer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlSpacer, _Component);

  function MjmlSpacer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlSpacer.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-spacer', handleMjmlProps(this.props), null);
  };

  return MjmlSpacer;
}(Component);