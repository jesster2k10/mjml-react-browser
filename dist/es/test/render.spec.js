import React from 'react';
import { expect } from 'chai';
import { render, Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlRaw } from '../src';
describe('render()', function () {
  it('should render the HTML', function () {
    var email = /*#__PURE__*/React.createElement(Mjml, null, /*#__PURE__*/React.createElement(MjmlHead, null, /*#__PURE__*/React.createElement(MjmlTitle, null, "Title")), /*#__PURE__*/React.createElement(MjmlBody, null, /*#__PURE__*/React.createElement(MjmlRaw, null, /*#__PURE__*/React.createElement("p", null, "Paragraph"))));

    var _render = render(email),
        html = _render.html;

    expect(html).to.not.be.undefined;
    expect(html).to.contain('<!doctype html>');
    expect(html).to.contain('<title>Title</title>');
    expect(html).to.contain('<p>Paragraph</p>');
  });
  it('should throw an error if invalid markup is given', function () {
    var email = /*#__PURE__*/React.createElement("div", null, "Ooops!");
    expect(function () {
      return render(email);
    }).to["throw"]('Element div doesn\'t exist or is not registered');
  });
  it('should not throw an error if soft validation level is passed', function () {
    var email = /*#__PURE__*/React.createElement("div", null, "Ooops!");

    var _render2 = render(email, {
      validationLevel: 'soft',
      minify: false
    }),
        errors = _render2.errors;

    expect(errors.length).to.equal(1);
    expect(errors[0].message).to.contain('Element div doesn\'t exist or is not registered');
  });
});