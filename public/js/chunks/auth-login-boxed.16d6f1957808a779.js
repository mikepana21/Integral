"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth-login-boxed"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_authentication_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/authentication/auth-boxed.scss */ "./resources/js/src/assets/sass/authentication/auth-boxed.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'login_boxed',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Login Boxed'
    });
    var pwd_type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('password');

    var set_pwd_type = function set_pwd_type() {
      if (pwd_type.value === 'password') {
        pwd_type.value = 'text';
      } else {
        pwd_type.value = 'password';
      }
    };

    var __returned__ = {
      pwd_type: pwd_type,
      set_pwd_type: set_pwd_type,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form auth-boxed"
};
var _hoisted_2 = {
  "class": "form-container outer"
};
var _hoisted_3 = {
  "class": "form-form"
};
var _hoisted_4 = {
  "class": "form-form-wrap"
};
var _hoisted_5 = {
  "class": "form-container"
};
var _hoisted_6 = {
  "class": "form-content"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": ""
}, "Sign In", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Log in to your account to continue.", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "text-start"
};
var _hoisted_10 = {
  "class": "form"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"username-field\" class=\"field-wrapper input\"><label for=\"username\">USERNAME</label><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-user\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg><input type=\"text\" class=\"form-control\" placeholder=\"e.g John_Doe\"></div>", 1);

var _hoisted_12 = {
  id: "password-field",
  "class": "field-wrapper input mb-2"
};
var _hoisted_13 = {
  "class": "d-flex justify-content-between"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password"
}, "PASSWORD", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Forgot Password?");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-lock"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "3",
  y: "11",
  width: "18",
  height: "11",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4"
})], -1
/* HOISTED */
);

var _hoisted_17 = ["type"];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_18, _hoisted_19];

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-sm-flex justify-content-between\"><div class=\"field-wrapper\"><button type=\"submit\" class=\"btn btn-primary\">Log In</button></div></div><div class=\"division\"><span>OR</span></div><div class=\"social\"><a href=\"javascript:void(0);\" class=\"btn social-fb\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-facebook\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg><span class=\"brand-name\">Facebook</span></a><a href=\"javascript:void(0);\" class=\"btn social-github\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-github\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg><span class=\"brand-name\">Github</span></a></div>", 3);

var _hoisted_24 = {
  "class": "signup-link"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Not registered ? ");

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create an account");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/auth/pass-recovery-boxed",
    "class": "forgot-pass-link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.pwd_type,
    "class": "form-control",
    placeholder: "Password"
  }, null, 8
  /* PROPS */
  , _hoisted_17), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    onClick: $setup.set_pwd_type,
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    id: "toggle-password",
    "class": "feather feather-eye"
  }, _hoisted_20))]), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/auth/register-boxed"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_26];
    }),
    _: 1
    /* STABLE */

  })])])])])])])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: auto;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n}\n\n.auth-boxed {\n  background: #fff;\n}\n\n.auth-boxed .form-form {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  margin: 0 auto;\n}\n\n.auth-boxed .form-form .form-form-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  min-width: 311px;\n  align-self: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n\n.auth-boxed .form-form .form-container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  width: 100%;\n  min-height: 100%;\n}\n\n.auth-boxed .form-form .form-container .form-content {\n  display: block;\n  width: 100%;\n  padding: 25px;\n  background: #fff;\n  text-align: center;\n  border-radius: 15px;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.002), 0 0.2px 0px rgba(0, 0, 0, 0.003), 0 0.4px 0px rgba(0, 0, 0, 0.004), 0 0.6px 0px rgba(0, 0, 0, 0.004), 0 0.9px 0px rgba(0, 0, 0, 0.005), 0 1.2px 0px rgba(0, 0, 0, 0.006), 0 1.8px 0px rgba(0, 0, 0, 0.006), 0 2.6px 0px rgba(0, 0, 0, 0.007), 0 3.9px 0px rgba(0, 0, 0, 0.008), 0 7px 0px rgba(0, 0, 0, 0.01);\n}\n\n.auth-boxed .form-form .form-container .form-content h1 {\n  font-size: 32px;\n  color: #3b3f5c;\n}\n\n.auth-boxed .form-form .form-container .form-content > p {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n  margin-bottom: 35px;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta {\n  margin-bottom: 35px;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta img {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  margin-right: 15px;\n  border: 4px solid #e0e6ed;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta div {\n  align-self: center;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta p {\n  font-size: 31px;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap h1 .brand-name {\n  color: #3b3f5c;\n  font-weight: 600;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link {\n  font-size: 14px;\n  color: #3b3f5c;\n  font-weight: 700;\n  margin-bottom: 15px;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link.register {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n  margin-bottom: 25px;\n  margin-top: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link.recovery {\n  margin-top: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link a {\n  color: #4361ee;\n  border-bottom: 1px solid;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper {\n  width: 100%;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.input {\n  padding: 11px 0px 16px 0;\n  border-bottom: none;\n  position: relative;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.input:focus {\n  border: 1px solid #000;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.toggle-pass p {\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .logged-in-user-name {\n  font-size: 37px;\n  color: #3b3f5c;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper label {\n  font-size: 10px;\n  font-weight: 700;\n  color: #3b3f5c;\n  margin-bottom: 8px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition {\n  margin-bottom: 20px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition label {\n  font-size: 14px;\n  color: #888ea8;\n  padding-left: 31px;\n  font-weight: 100;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition a {\n  color: #4361ee;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-user {\n  top: 53px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-lock {\n  top: 50px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-at-sign {\n  top: 47px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-at-sign.register {\n  top: 53px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg:not(.feather-eye) {\n  position: absolute;\n  left: 12px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n  width: 20px;\n  height: 20px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-eye {\n  position: absolute;\n  top: 49px;\n  right: 13px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n  width: 17px;\n  cursor: pointer;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper input {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 6px;\n  min-width: 50px;\n  max-width: 635px;\n  width: 100%;\n  transition: all 0.2s ease-in-out 0s;\n  color: #3b3f5c;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 13px 35px 13px 46px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper input::-webkit-input-placeholder, .auth-boxed .form-form .form-form-wrap form .field-wrapper input::-ms-input-placeholder, .auth-boxed .form-form .form-form-wrap form .field-wrapper input::-moz-placeholder {\n  color: #bfc9d4;\n  font-size: 14px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper button.btn {\n  align-self: center;\n  width: 100%;\n  padding: 11px 14px;\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper a.forgot-pass-link {\n  font-weight: 600;\n  color: #888ea8;\n  display: block;\n  letter-spacing: 1px;\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator {\n  top: 2px;\n  border: 1px solid #bfc9d4;\n  background-color: #f1f2f3;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator:after {\n  top: 54%;\n}\n\n.auth-boxed .new-control.new-checkbox.checkbox-primary > input:checked ~ span.new-control-indicator {\n  border: none;\n}\n\n.auth-boxed .form-form .form-form-wrap form .division {\n  text-align: center;\n  font-size: 13px;\n  margin: 35px 0 38px 0;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social {\n  text-align: center;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a {\n  background: transparent;\n  box-shadow: none;\n  border: 1px solid #e0e6ed;\n  padding: 12px 10px;\n  width: 181px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb {\n  margin-right: 15px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb svg,\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb .brand-name {\n  color: #4361ee;\n}\n\n@media (max-width: 991px) {\n  .auth-boxed .form-form {\n    width: 100%;\n  }\n  .auth-boxed .form-form .form-form-wrap {\n    min-width: auto;\n    margin: 0 auto;\n  }\n  .auth-boxed .form-form .form-container .form-content {\n    border-radius: 15px;\n  }\n}\n@media (max-width: 575px) {\n  .auth-boxed .form-form .form-form-wrap form .field-wrapper.toggle-pass {\n    margin-bottom: 28px;\n  }\n  .auth-boxed .form-form .form-form-wrap form .social a.social-fb, .auth-boxed .form-form .form-form-wrap form .social a.social-github {\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n    display: block;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .auth-boxed .form-form .form-form-wrap {\n    width: 100%;\n  }\n  .auth-boxed .form-form .form-container {\n    height: 100%;\n  }\n}\n@supports (-ms-ime-align: auto) {\n  .auth-boxed .form-form .form-form-wrap {\n    height: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/authentication/auth-boxed.scss":
/*!*********************************************************************!*\
  !*** ./resources/js/src/assets/sass/authentication/auth-boxed.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./auth-boxed.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=template&id=eb6bc012 */ "./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012");
/* harmony import */ var _login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/auth/login_boxed.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_boxed_vue_vue_type_template_id_eb6bc012__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_boxed.vue?vue&type=template&id=eb6bc012 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012");


/***/ })

}]);