function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlImage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlImage, _Component);

  function MjmlImage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlImage.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-image', handleMjmlProps(this.props), null);
  };

  return MjmlImage;
}(Component);