"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var SectionWrapper = styled_components_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  padding: 60px 0;\n  display: block;\n"], ["\n  background: #fff;\n  padding: 60px 0;\n  display: block;\n"])));
var ContentContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* width: 100%;\n  height: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column: 1rem;\n  padding: 5rem 10rem 5rem 10rem;\n  grid-gap: 3px;\n  justify-items: center;\n  align-items: top;\n  background-color: ", "; */\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n"], ["\n  /* width: 100%;\n  height: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column: 1rem;\n  padding: 5rem 10rem 5rem 10rem;\n  grid-gap: 3px;\n  justify-items: center;\n  align-items: top;\n  background-color: ", "; */\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n"])), function (props) { return (props.dark ? '#171717' : ' #262626'); });
var HeaderSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var SectionTitle = styled_components_1["default"].h2(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var CardsContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var Card = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 0.8fr 0.2fr;\n  grid-gap: 3px;\n  border-radius: 15px;\n  width: 650px;\n  height: 175px;\n  background-color: #212121;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  padding: 3rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n"], ["\n  display: grid;\n  grid-template-columns: 0.8fr 0.2fr;\n  grid-gap: 3px;\n  border-radius: 15px;\n  width: 650px;\n  height: 175px;\n  background-color: #212121;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  padding: 3rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n"])));
var CardLeftContainer = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  justify-items: center;\n  align-items: center;\n"], ["\n  justify-items: center;\n  align-items: center;\n"])));
var CardRightContainer = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  justify-items: right;\n  align-items: top;\n"], ["\n  justify-items: right;\n  align-items: top;\n"])));
var CardTitle = styled_components_1["default"].h2(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-weight: 500;\n  color: #66fcf1;\n"], ["\n  font-weight: 500;\n  color: #66fcf1;\n"])));
var CardText = styled_components_1["default"].p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: #a3a3a3;\n  margin-top: 0;\n"], ["\n  color: #a3a3a3;\n  margin-top: 0;\n"])));
var IntroductionContainer = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  width: 350px;\n"], ["\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  width: 350px;\n"])));
var IntroductionTitle = styled_components_1["default"].h1(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  color: #fff;\n  font-size: 40px;\n  font-weight: 400;\n  margin-top: 2rem;\n"], ["\n  color: #fff;\n  font-size: 40px;\n  font-weight: 400;\n  margin-top: 2rem;\n"])));
var IntroductionText = styled_components_1["default"].p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  color: #fff;\n  font-size: 16px;\n  font-weight: 300;\n"], ["\n  color: #fff;\n  font-size: 16px;\n  font-weight: 300;\n"])));
var ContentSection = function (_a) {
    var dark = _a.dark;
    return (react_1["default"].createElement(SectionWrapper, null,
        react_1["default"].createElement(ContentContainer, { dark: dark },
            react_1["default"].createElement(IntroductionContainer, null,
                react_1["default"].createElement(HeaderSection, null,
                    react_1["default"].createElement(SectionTitle, null, "Skills"))))));
};
exports["default"] = ContentSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
