function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlAll = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlAll, _Component);

  function MjmlAll() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlAll.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement('mj-all', handleMjmlProps(this.props), null);
  };

  return MjmlAll;
}(Component);