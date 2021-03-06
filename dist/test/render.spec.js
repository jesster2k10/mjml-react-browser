"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

var _src = require("../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('render()', function () {
  it('should render the HTML', function () {
    var email = /*#__PURE__*/_react["default"].createElement(_src.Mjml, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlHead, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlTitle, null, "Title")), /*#__PURE__*/_react["default"].createElement(_src.MjmlBody, null, /*#__PURE__*/_react["default"].createElement(_src.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("p", null, "Paragraph"))));

    var _render = (0, _src.render)(email),
        html = _render.html;

    (0, _chai.expect)(html).to.not.be.undefined;
    (0, _chai.expect)(html).to.contain('<!doctype html>');
    (0, _chai.expect)(html).to.contain('<title>Title</title>');
    (0, _chai.expect)(html).to.contain('<p>Paragraph</p>');
  });
  it('should throw an error if invalid markup is given', function () {
    var email = /*#__PURE__*/_react["default"].createElement("div", null, "Ooops!");

    (0, _chai.expect)(function () {
      return (0, _src.render)(email);
    }).to["throw"]('Element div doesn\'t exist or is not registered');
  });
  it('should not throw an error if soft validation level is passed', function () {
    var email = /*#__PURE__*/_react["default"].createElement("div", null, "Ooops!");

    var _render2 = (0, _src.render)(email, {
      validationLevel: 'soft',
      minify: false
    }),
        errors = _render2.errors;

    (0, _chai.expect)(errors.length).to.equal(1);
    (0, _chai.expect)(errors[0].message).to.contain('Element div doesn\'t exist or is not registered');
  });
});