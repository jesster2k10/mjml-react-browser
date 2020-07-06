function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { MjmlRaw } from '../mjml-raw';
export var MjmlYahooStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MjmlYahooStyle, _Component);

  function MjmlYahooStyle() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MjmlYahooStyle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    if (children && children.trim().length) {
      return /*#__PURE__*/React.createElement(MjmlRaw, rest, /*#__PURE__*/React.createElement("style", null, "@media screen yahoo {" + children + "}"));
    }

    return null;
  };

  return MjmlYahooStyle;
}(Component);