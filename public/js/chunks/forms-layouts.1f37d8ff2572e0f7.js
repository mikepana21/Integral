"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-layouts"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/layouts.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/layouts.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'layouts',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Form Layouts'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    var toggleCode = function toggleCode(name) {
      if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter(function (d) {
          return d != name;
        });
      } else {
        code_arr.value.push(name);
      }
    };

    var __returned__ = {
      code_arr: code_arr,
      toggleCode: toggleCode,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      highlight: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      useMeta: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/layouts.vue?vue&type=template&id=1ca434e2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/layouts.vue?vue&type=template&id=1ca434e2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "navbar-nav flex-row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "page-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": "breadcrumb-one",
  "aria-label": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  "class": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;"
}, "Forms")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Layouts")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "nav sidenav"
};
var _hoisted_5 = {
  "class": "sidenav-content"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#flStackForm\" class=\"nav-link\">Stack Forms</a><a href=\"#flHorizontalForm\" class=\"nav-link\">Horizontal form</a><a href=\"#flRegistrationForm\" class=\"nav-link\">Registration Forms</a><a href=\"#flLoginForm\" class=\"nav-link\">Login Form</a><a href=\"#flFormsGrid\" class=\"nav-link\">Forms Grid</a><a href=\"#flInlineForm\" class=\"nav-link\">Inline forms</a><a href=\"#flAutoSizing\" class=\"nav-link\">Auto-sizing</a><a href=\"#flActionButtons\" class=\"nav-link\">Actions Buttons</a>", 8);

var _hoisted_14 = [_hoisted_6];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/forms/layout\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/forms/layout </a></div></div></div>", 1);

var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  id: "flStackForm",
  "class": "col-lg-12 layout-spacing layout-top-spacing"
};
var _hoisted_18 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Stack Forms")])])], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "panel-body"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"form-group mb-3\"><input type=\"email\" class=\"form-control\" id=\"sEmail\" aria-describedby=\"emailHelp1\" placeholder=\"Email address\"><small id=\"emailHelp1\" class=\"block text-muted\">We&#39;ll never share your email with anyone else.</small></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" id=\"sPassword\" placeholder=\"Password\"></div><div><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"sChkbox\"><label class=\"custom-control-label\" for=\"sChkbox\">Subscribe to weekly newsletter</label></div></div><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></form>", 1);

var _hoisted_22 = {
  "class": "code-section-container show-code"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Stack Forms -->\n<form>\n    <div class=\"form-group mb-3\">\n        <input type=\"email\" class=\"form-control\" id=\"sEmail\" aria-describedby=\"emailHelp1\" placeholder=\"Email address\" />\n        <small id=\"emailHelp1\" class=\"block text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" id=\"sPassword\" placeholder=\"Password\" />\n    </div>\n    <div>\n        <div class=\"custom-control custom-checkbox checkbox-primary\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"sChkbox\" />\n            <label class=\"custom-control-label\" for=\"sChkbox\">Subscribe to weekly newsletter</label>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_27 = {
  id: "flHorizontalForm",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_28 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Horizontal form")])])], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "panel-body"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"form-group row\"><label for=\"hEmail\" class=\"col-xl-2 col-sm-3 col-sm-2 col-form-label\">Email</label><div class=\"col-xl-10 col-lg-9 col-sm-10\"><input type=\"email\" class=\"form-control\" id=\"hEmail\" placeholder=\"\"></div></div><div class=\"form-group row\"><label for=\"hPassword\" class=\"col-xl-2 col-sm-3 col-sm-2 col-form-label\">Password</label><div class=\"col-xl-10 col-lg-9 col-sm-10\"><input type=\"password\" class=\"form-control\" id=\"hPassword\" placeholder=\"\"></div></div><fieldset class=\"form-group\"><div class=\"row\"><label class=\"col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0\">Choose Segements</label><div class=\"col-xl-10 col-lg-9 col-sm-10\"><div class=\"radio-classic radio-primary custom-control custom-radio\"><input type=\"radio\" class=\"custom-control-input\" id=\"hRadio1\" name=\"classicRadio\"><label class=\"custom-control-label\" for=\"hRadio1\"> Segements 1 </label></div><div class=\"radio-classic radio-primary custom-control custom-radio\"><input type=\"radio\" class=\"custom-control-input\" id=\"hRadio2\" name=\"classicRadio\"><label class=\"custom-control-label\" for=\"hRadio2\"> Segements 2 </label></div><div class=\"radio-classic radio-primary custom-control custom-radio\"><input type=\"radio\" class=\"custom-control-input\" id=\"hRadio3\" name=\"classicRadio\" disabled><label class=\"custom-control-label\" for=\"hRadio3\"> Segements 3 ( disabled ) </label></div></div></div></fieldset><div class=\"form-group row\"><div class=\"col-sm-2\">Apply</div><div class=\"col-sm-10\"><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"hChkbox\"><label class=\"custom-control-label\" for=\"hChkbox\">Terms Conditions</label></div></div></div><div class=\"form-group row\"><div class=\"col-sm-10\"><button type=\"submit\" class=\"btn btn-primary mt-3\">Lets Go</button></div></div></form>", 1);

var _hoisted_32 = {
  "class": "code-section-container show-code"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_34 = [_hoisted_33];
var _hoisted_35 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Horizontal Form -->\n<form>\n    <div class=\"form-group mb-3\">\n        <input type=\"email\" class=\"form-control\" id=\"sEmail\" aria-describedby=\"emailHelp1\" placeholder=\"Email address\" />\n        <small id=\"emailHelp1\" clas<form>\n    <div class=\"form-group row\">\n        <label for=\"hEmail\" class=\"col-xl-2 col-sm-3 col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-xl-10 col-lg-9 col-sm-10\">\n            <input type=\"email\" class=\"form-control\" id=\"hEmail\" placeholder=\"\" />\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"hPassword\" class=\"col-xl-2 col-sm-3 col-sm-2 col-form-label\">Password</label>\n        <div class=\"col-xl-10 col-lg-9 col-sm-10\">\n            <input type=\"password\" class=\"form-control\" id=\"hPassword\" placeholder=\"\" />\n        </div>\n    </div>\n    <fieldset class=\"form-group\">\n        <div class=\"row\">\n            <label class=\"col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0\">Choose Segements</label>\n            <div class=\"col-xl-10 col-lg-9 col-sm-10\">\n                <div class=\"radio-classic radio-primary custom-control custom-radio\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"hRadio1\" name=\"classicRadio\" />\n                    <label class=\"custom-control-label\" for=\"hRadio1\"> Segements 1 </label>\n                </div>\n                <div class=\"radio-classic radio-primary custom-control custom-radio\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"hRadio2\" name=\"classicRadio\" />\n                    <label class=\"custom-control-label\" for=\"hRadio2\"> Segements 2 </label>\n                </div>\n                <div class=\"radio-classic radio-primary custom-control custom-radio\">\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"hRadio3\" name=\"classicRadio\" disabled />\n                    <label class=\"custom-control-label\" for=\"hRadio3\"> Segements 3 ( disabled ) </label>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-2\">Apply</div>\n        <div class=\"col-sm-10\">\n            <div class=\"custom-control custom-checkbox checkbox-primary\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"hChkbox\" />\n                <label class=\"custom-control-label\" for=\"hChkbox\">Terms Conditions</label>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-primary mt-3\">Lets Go</button>\n        </div>\n    </div>\n</form>s=\"block text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" id=\"sPassword\" placeholder=\"Password\" />\n    </div>\n    <div>\n        <div class=\"custom-control custom-checkbox checkbox-primary\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"sChkbox\" />\n            <label class=\"custom-control-label\" for=\"sChkbox\">Subscribe to weekly newsletter</label>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_37 = {
  id: "flRegistrationForm",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_38 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Registration Forms")])])], -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "panel-body"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"form-group\"><input type=\"email\" class=\"form-control\" id=\"rEmail\" placeholder=\"Email address *\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" id=\"rPassword\" placeholder=\"Password *\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" id=\"rConfirmPassword\" placeholder=\"Confirm Password *\"></div><small id=\"emailHelp2\" class=\"block text-muted\">*Required Fields</small><div class=\"form-group ps-0 mt-3\"><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"rChkbox\"><label class=\"custom-control-label\" for=\"rChkbox\">Subscribe to weekly newsletter</label></div></div><button type=\"submit\" class=\"btn btn-primary mt-3\">Submit</button></form>", 1);

var _hoisted_42 = {
  "class": "code-section-container show-code"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_44 = [_hoisted_43];
var _hoisted_45 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Registration Form -->\n<form>\n    <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" id=\"rEmail\" placeholder=\"Email address *\" />\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" id=\"rPassword\" placeholder=\"Password *\" />\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" id=\"rConfirmPassword\" placeholder=\"Confirm Password *\" />\n    </div>\n    <small id=\"emailHelp2\" class=\"block text-muted\">*Required Fields</small>\n    <div class=\"form-group ps-0 mt-3\">\n        <div class=\"custom-control custom-checkbox checkbox-primary\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"rChkbox\" />\n            <label class=\"custom-control-label\" for=\"rChkbox\">Subscribe to weekly newsletter</label>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mt-3\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_47 = {
  id: "flLoginForm",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_48 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Login Form")])])], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "panel-body"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"lFullName\" placeholder=\"Full Name *\"></div><div class=\"form-group\"><input type=\"email\" class=\"form-control\" id=\"lEmail\" placeholder=\"Email address *\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" id=\"lPassword\" placeholder=\"Password *\"></div><small id=\"emailHelp\" class=\"d-block text-muted\">*Required Fields</small><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></form>", 1);

var _hoisted_52 = {
  "class": "code-section-container show-code"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_54 = [_hoisted_53];
var _hoisted_55 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Login Form -->\n<form>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" id=\"lFullName\" placeholder=\"Full Name *\" />\n    </div>\n    <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" id=\"lEmail\" placeholder=\"Email address *\" />\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" id=\"lPassword\" placeholder=\"Password *\" />\n    </div>\n    <small id=\"emailHelp\" class=\"d-block text-muted\">*Required Fields</small>\n    <button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_57 = {
  id: "flFormsGrid",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_58 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Forms Grid")])])], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "panel-body"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"row\"><div class=\"form-group col-md-6\"><label for=\"inputEmail4\">Email</label><input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\"></div><div class=\"form-group col-md-6\"><label for=\"inputPassword4\">Password</label><input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\"></div></div><div class=\"form-group\"><label for=\"inputAddress\">Address</label><input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\"></div><div class=\"form-group\"><label for=\"inputAddress2\">Address 2</label><input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\"></div><div class=\"row\"><div class=\"form-group col-md-6\"><label for=\"inputCity\">City</label><input type=\"text\" class=\"form-control\" id=\"inputCity\"></div><div class=\"form-group col-md-4\"><label for=\"inputState\">State</label><select id=\"inputState\" class=\"form-select\"><option selected>Choose...</option><option>...</option></select></div><div class=\"form-group col-md-2\"><label for=\"inputZip\">Zip</label><input type=\"text\" class=\"form-control\" id=\"inputZip\"></div></div><div class=\"form-group\"><div class=\"form-check ps-0\"><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"gridCheck\"><label class=\"custom-control-label\" for=\"gridCheck\">Check me out</label></div></div></div><button type=\"submit\" class=\"btn btn-primary mt-3\">Sign in</button></form>", 1);

var _hoisted_62 = {
  "class": "code-section-container show-code"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_64 = [_hoisted_63];
var _hoisted_65 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Forms grid -->\n<form>\n    <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n            <label for=\"inputEmail4\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\" />\n        </div>\n        <div class=\"form-group col-md-6\">\n            <label for=\"inputPassword4\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\" />\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputAddress2\">Address 2</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\" />\n    </div>\n    <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n            <label for=\"inputCity\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\" />\n        </div>\n        <div class=\"form-group col-md-4\">\n            <label for=\"inputState\">State</label>\n            <select id=\"inputState\" class=\"form-select\">\n                <option selected>Choose...</option>\n                <option>...</option>\n            </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n            <label for=\"inputZip\">Zip</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputZip\" />\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"form-check ps-0\">\n            <div class=\"custom-control custom-checkbox checkbox-primary\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"gridCheck\" />\n                <label class=\"custom-control-label\" for=\"gridCheck\">Check me out</label>\n            </div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mt-3\">Sign in</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_67 = {
  id: "flInlineForm",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_68 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Inline forms")])])], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "panel-body"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form class=\"row align-items-center justify-content-center\"><div class=\"col-12 col-sm-auto\"><label class=\"sr-only\" for=\"inlineFormInputName2\">Name</label><input type=\"text\" class=\"form-control mb-2 me-sm-2\" id=\"inlineFormInputName2\" placeholder=\"Jane Doe\"></div><div class=\"col-12 col-sm-auto\"><label class=\"sr-only\" for=\"inlineFormInputGroupUsername2\">Username</label><div class=\"input-group mb-2 me-sm-2\"><div class=\"input-group-text\">@</div><input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Username\"></div></div><div class=\"col-12 col-sm-auto mb-2 me-sm-2\"><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"inlineFormCheck\"><label class=\"custom-control-label\" for=\"inlineFormCheck\">Remember me</label></div></div><div class=\"col-12 text-center\"><button type=\"submit\" class=\"btn btn-primary mb-2\">Submit</button></div></form>", 1);

var _hoisted_72 = {
  "class": "code-section-container show-code"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_74 = [_hoisted_73];
var _hoisted_75 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Inline Forms -->\n<form class=\"row align-items-center justify-content-center\">\n    <div class=\"col-12 col-sm-auto\">\n        <label class=\"sr-only\" for=\"inlineFormInputName2\">Name</label>\n        <input type=\"text\" class=\"form-control mb-2 me-sm-2\" id=\"inlineFormInputName2\" placeholder=\"Jane Doe\" />\n    </div>\n    <div class=\"col-12 col-sm-auto\">\n        <label class=\"sr-only\" for=\"inlineFormInputGroupUsername2\">Username</label>\n        <div class=\"input-group mb-2 me-sm-2\">\n            <div class=\"input-group-text\">@</div>\n            <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Username\" />\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-auto mb-2 me-sm-2\">\n        <div class=\"custom-control custom-checkbox checkbox-primary\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"inlineFormCheck\" />\n            <label class=\"custom-control-label\" for=\"inlineFormCheck\">Remember me</label>\n        </div>\n    </div>\n    <div class=\"col-12 text-center\">\n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Submit</button>\n    </div>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_77 = {
  id: "flAutoSizing",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_78 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Auto-sizing")])])], -1
/* HOISTED */
);

var _hoisted_80 = {
  "class": "panel-body"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"row align-items-center justify-content-center\"><div class=\"col-auto\"><label class=\"sr-only\" for=\"inlineFormInput\">Name</label><input type=\"text\" class=\"form-control mb-2\" id=\"inlineFormInput\" placeholder=\"Jane Doe\"></div><div class=\"col-auto\"><label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label><div class=\"input-group mb-2\"><div class=\"input-group-text\">@</div><input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Username\"></div></div><div class=\"col-auto\"><div class=\"form-check mb-2 ps-0\"><div class=\"custom-control custom-checkbox checkbox-primary\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"autoSizingCheck\"><label class=\"custom-control-label\" for=\"autoSizingCheck\">Remember me</label></div></div></div><div class=\"col-auto\"><button type=\"submit\" class=\"btn btn-primary\">Submit</button></div></div></form>", 1);

var _hoisted_82 = {
  "class": "code-section-container show-code"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_84 = [_hoisted_83];
var _hoisted_85 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Auto-sizing -->\n<form>\n    <div class=\"row align-items-center justify-content-center\">\n        <div class=\"col-auto\">\n            <label class=\"sr-only\" for=\"inlineFormInput\">Name</label>\n            <input type=\"text\" class=\"form-control mb-2\" id=\"inlineFormInput\" placeholder=\"Jane Doe\" />\n        </div>\n        <div class=\"col-auto\">\n            <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\n            <div class=\"input-group mb-2\">\n                <div class=\"input-group-text\">@</div>\n                <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Username\" />\n            </div>\n        </div>\n        <div class=\"col-auto\">\n            <div class=\"form-check mb-2 ps-0\">\n                <div class=\"custom-control custom-checkbox checkbox-primary\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"autoSizingCheck\" />\n                    <label class=\"custom-control-label\" for=\"autoSizingCheck\">Remember me</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-auto\">\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </div>\n    </div>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_87 = {
  id: "flActionButtons",
  "class": "col-lg-12"
};
var _hoisted_88 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Actions Buttons")])])], -1
/* HOISTED */
);

var _hoisted_90 = {
  "class": "panel-body"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form class=\"form-vertical\" action=\"#\"><div class=\"form-group\"><label class=\"control-label\">First Name:</label><input type=\"text\" name=\"first_name\" class=\"form-control\"></div><div class=\"form-group\"><label class=\"control-label\">Email:</label><div class=\"input-group\"><div class=\"input-group-text\">@</div><input type=\"text\" name=\"email\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"control-label\">Website:</label><input type=\"text\" name=\"website\" value=\"https://\" class=\"form-control\"></div><div class=\"form-group\"><label class=\"control-label\">Password:</label><div class=\"input-group\"><input type=\"password\" name=\"pass\" class=\"form-control\"><span class=\"input-group-addon\"><i class=\"icon-user\"></i></span></div></div><div class=\"form-group\"><label class=\"control-label\">Confirm Password:</label><div class=\"input-group\"><input type=\"password\" name=\"cpass\" class=\"form-control\"><span class=\"input-group-addon\"><i class=\"icon-user\"></i></span></div></div><input type=\"submit\" value=\"Submit\" class=\"btn btn-primary mt-3\"></form>", 1);

var _hoisted_92 = {
  "class": "code-section-container show-code"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_94 = [_hoisted_93];
var _hoisted_95 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Actions buttons -->\n<form class=\"form-vertical\" action=\"#\">\n    <div class=\"form-group\">\n        <label class=\"control-label\">First Name:</label>\n        <input type=\"text\" name=\"first_name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Email:</label>\n        <div class=\"input-group\">\n            <div class=\"input-group-text\">@</div>\n            <input type=\"text\" name=\"email\" class=\"form-control\" />\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Website:</label>\n        <input type=\"text\" name=\"website\" value=\"https://\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Password:</label>\n        <div class=\"input-group\">\n            <input type=\"password\" name=\"pass\" class=\"form-control\" />\n            <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\">Confirm Password:</label>\n        <div class=\"input-group\">\n            <input type=\"password\" name=\"cpass\" class=\"form-control\" />\n            <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n        </div>\n    </div>\n    <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary mt-3\" />\n</form>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_14)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_24), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_26];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_34), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_36];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_44), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_46];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_54), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_56];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_64), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_66];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_74), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_76];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_84), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_86];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_94), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_96];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/forms/layouts.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/forms/layouts.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_vue_vue_type_template_id_1ca434e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.vue?vue&type=template&id=1ca434e2 */ "./resources/js/src/views/forms/layouts.vue?vue&type=template&id=1ca434e2");
/* harmony import */ var _layouts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/forms/layouts.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_layouts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_layouts_vue_vue_type_template_id_1ca434e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/forms/layouts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/forms/layouts.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/forms/layouts.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layouts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layouts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layouts.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/layouts.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/forms/layouts.vue?vue&type=template&id=1ca434e2":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/forms/layouts.vue?vue&type=template&id=1ca434e2 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layouts_vue_vue_type_template_id_1ca434e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layouts_vue_vue_type_template_id_1ca434e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layouts.vue?vue&type=template&id=1ca434e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/layouts.vue?vue&type=template&id=1ca434e2");


/***/ })

}]);