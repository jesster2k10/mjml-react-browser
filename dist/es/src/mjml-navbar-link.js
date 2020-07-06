function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { handleMjmlProps } from './utils';
export var MjmlNavbarLink = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlNavbarLink, _Component);

  function MjmlNavbarLink() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlNavbarLink.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    return /*#__PURE__*/React.createElement('mj-navbar-link', handleMjmlProps(rest), children);
  };

  return MjmlNavbarLink;
}(Component);