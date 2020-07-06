function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlFont = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlFont, _Component);

  function MjmlFont() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlFont.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-font', handleMjmlProps(this.props), null);
  };

  return MjmlFont;
}(Component);