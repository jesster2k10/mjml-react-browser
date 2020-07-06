function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlCarouselImage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlCarouselImage, _Component);

  function MjmlCarouselImage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlCarouselImage.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-carousel-image', handleMjmlProps(this.props), null);
  };

  return MjmlCarouselImage;
}(Component);