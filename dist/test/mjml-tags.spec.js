"use strict";

var _react = _interopRequireDefault(require("react"));

var _chai = require("chai");

var tags = _interopRequireWildcard(require("../src"));

var _extensions = require("../src/extensions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var renderToMjml = tags.renderToMjml;
describe('mjml tags', function () {
  it('should render <Mjml/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.Mjml, null, "Content"))).to.equal('<mjml>Content</mjml>');
  });
  describe('<MjmlTitle/>', function () {
    it('should render string', function () {
      (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlTitle, null, "Content"))).to.equal('<mj-title>Content</mj-title>');
    });
    it('should render an expression', function () {
      var variable = 'Nice';
      (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlTitle, null, variable, " Content"))).to.equal('<mj-title>Nice Content</mj-title>');
    });
    it('should render functional component', function () {
      var HelloWorld = function HelloWorld() {
        return 'Hello World!';
      };

      (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlTitle, null, /*#__PURE__*/_react["default"].createElement(HelloWorld, null)))).to.equal('<mj-title>Hello World!</mj-title>');
    });
    it('should render component', function () {
      var HelloWorld = /*#__PURE__*/function (_React$Component) {
        _inheritsLoose(HelloWorld, _React$Component);

        function HelloWorld() {
          return _React$Component.apply(this, arguments) || this;
        }

        var _proto = HelloWorld.prototype;

        _proto.render = function render() {
          return 'Hello World!';
        };

        return HelloWorld;
      }(_react["default"].Component);

      (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlTitle, null, /*#__PURE__*/_react["default"].createElement(HelloWorld, null)))).to.equal('<mj-title>Hello World!</mj-title>');
    });
  });
  it('should render <MjmlStyle/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlStyle, null, '.button{}'))).to.equal('<mj-style>.button{}</mj-style>');
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlStyle, {
      inline: true
    }, '.button{}'))).to.equal('<mj-style inline="inline">.button{}</mj-style>');
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlStyle, null, 'body > div {}'))).to.equal('<mj-style>body > div {}</mj-style>');
  });
  it('should render <MjmlRaw/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlRaw, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hello World!")))).to.equal('<mj-raw><h1>Hello World!</h1></mj-raw>');
  });
  it('should render <MjmlPreview/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlPreview, null, "Hello World!"))).to.equal('<mj-preview>Hello World!</mj-preview>');
  });
  it('should render <MjmlHead/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlHead, null, "I am the head"))).to.equal('<mj-head>I am the head</mj-head>');
  });
  it('should render <MjmlFont/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlFont, {
      name: "Roboto",
      href: "https://fonts.googleapis.com/css?family=Roboto"
    }))).to.equal('<mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto"></mj-font>');
  });
  it('should render <MjmlBreakpoint/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlBreakpoint, {
      width: 400
    }))).to.equal('<mj-breakpoint width="400px"></mj-breakpoint>');
  });
  it('should render <MjmlBody/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlBody, {
      width: 100,
      backgroundColor: "blue",
      cssClass: "body"
    }, "Hello World!"))).to.equal('<mj-body width="100px" background-color="blue" css-class="body">Hello World!</mj-body>');
  });
  it('should render <MjmlSection/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlSection, {
      fullWidth: true,
      paddingTop: 10,
      cssClass: "first-section"
    }, "Content"))).to.equal('<mj-section full-width="full-width" padding-top="10px" css-class="first-section">Content</mj-section>');
  });
  it('should render <MjmlColumn/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlColumn, {
      borderRadius: 10,
      width: 20
    }, "Content"))).to.equal('<mj-column border-radius="10px" width="20px">Content</mj-column>');
  });
  it('should render <MjmlButton/> with content', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlButton, {
      height: 20,
      fontSize: 22,
      lineHeight: 22 * 1.5
    }, "Click Me"))).to.equal('<mj-button height="20px" font-size="22px" line-height="33px">Click Me</mj-button>');
  });
  it('should allow passing array as content of <MjmlButton>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlButton, null, 'First Line', 'Second Line'))).to.equal('<mj-button>First LineSecond Line</mj-button>');
  });
  it('should render <MjmlDivider/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlDivider, {
      borderWidth: 2,
      borderColor: "red"
    }))).to.equal('<mj-divider border-width="2px" border-color="red"></mj-divider>');
  });
  it('should render <MjmlImage/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlImage, {
      src: "https://www.wix.com/logo.png"
    }))).to.equal('<mj-image src="https://www.wix.com/logo.png"></mj-image>');
  });
  it('should render <MjmlSpacer/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlSpacer, {
      height: 10
    }))).to.equal('<mj-spacer height="10px"></mj-spacer>');
  });
  it('should render <MjmlText/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlText, {
      fontWeight: 20,
      letterSpacing: 2
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Hello World!")))).to.equal('<mj-text font-weight="20" letter-spacing="2px"><span>Hello World!</span></mj-text>');
  });
  it('should render <MjmlWrapper/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlWrapper, {
      padding: 20,
      fullWidth: true
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Hello World!")))).to.equal('<mj-wrapper padding="20px" full-width="full-width"><span>Hello World!</span></mj-wrapper>');
  });
  it('should render <MjmlAttributes/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlAttributes, null, /*#__PURE__*/_react["default"].createElement(tags.MjmlText, {
      padding: 0
    }, "Line Of Text"), /*#__PURE__*/_react["default"].createElement(tags.MjmlClass, {
      name: "white",
      color: "white"
    }), /*#__PURE__*/_react["default"].createElement(tags.MjmlAll, {
      padding: 0
    })))).to.equal('<mj-attributes><mj-text padding="0px">Line Of Text</mj-text><mj-class name="white" color="white"></mj-class><mj-all padding="0px"></mj-all></mj-attributes>');
  });
  it('should render <MjmlHero/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(tags.MjmlHero, {
      backgroundUrl: "https://www.wix.com/logo.png"
    }, /*#__PURE__*/_react["default"].createElement(tags.MjmlImage, {
      src: "https://www.wix.com/logo.png"
    })))).to.equal('<mj-hero background-url="https://www.wix.com/logo.png"><mj-image src="https://www.wix.com/logo.png"></mj-image></mj-hero>');
  });
  it('should render <MjmlComment/>', function () {
    (0, _chai.expect)(renderToMjml( /*#__PURE__*/_react["default"].createElement(_extensions.MjmlComment, null, "Hello World!"))).to.equal('<mj-raw><!--Hello World!--></mj-raw>');
  });
});