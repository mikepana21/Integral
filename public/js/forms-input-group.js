"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-input-group"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/input_group.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/input_group.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  __name: 'input_group',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Input Group'
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/input_group.vue?vue&type=template&id=7f300560":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/input_group.vue?vue&type=template&id=7f300560 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Input Group")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#basic",
  "class": "nav-link"
}, "Basic", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#sizes",
  "class": "nav-link"
}, "Sizes", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#multiple",
  "class": "nav-link"
}, "Multiple", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#Input_group_action",
  "class": "nav-link"
}, "Input group with action", -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/forms/input-group\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/forms/input-group </a></div></div></div>", 1);

var _hoisted_12 = {
  "class": "row layout-top-spacing"
};
var _hoisted_13 = {
  id: "basic",
  "class": "col-lg-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_14 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "panel-body"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"input-group mb-4\"><span class=\"input-group-text\" id=\"basic-addon1\">@</span><input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\"></div><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Recipient&#39;s username\" aria-label=\"Recipient&#39;s username\" aria-describedby=\"basic-addon2\"><span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span></div><label for=\"basic-url\" class=\"form-label\">Your vanity URL</label><div class=\"input-group mb-5\"><span class=\"input-group-text\" id=\"basic-addon3\">https://</span><input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\" placeholder=\"example.com/users/\"></div><div class=\"input-group mb-4\"><span class=\"input-group-text\">$</span><input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"><span class=\"input-group-text\">.00</span></div><div class=\"input-group\"><span class=\"input-group-text\">With textarea</span><textarea class=\"form-control h-auto\" aria-label=\"With textarea\"></textarea></div>", 6);

var _hoisted_23 = {
  "class": "code-section-container show-code"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_25 = [_hoisted_24];
var _hoisted_26 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Default -->\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" />\n</div>\n\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" />\n    <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\n</div>\n\n<label for=\"basic-url\" class=\"form-label\">Your vanity URL</label>\n<div class=\"input-group mb-5\">\n    <span class=\"input-group-text\" id=\"basic-addon3\">https://</span>\n    <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\" placeholder=\"example.com/users/\" />\n</div>\n\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\">$</span>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" />\n    <span class=\"input-group-text\">.00</span>\n</div>\n\n<div class=\"input-group\">\n    <span class=\"input-group-text\">With textarea</span>\n    <textarea class=\"form-control h-auto\" aria-label=\"With textarea\"></textarea>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_29 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Simple Icon")])])], -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "panel-body"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><span class=\"input-group-text\" id=\"basic-addon1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg></span><input type=\"text\" class=\"form-control\" placeholder=\"Notification\" aria-label=\"notification\" aria-describedby=\"basic-addon1\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Notification\" aria-label=\"notification\" aria-describedby=\"basic-addon2\"><span class=\"input-group-text\" id=\"basic-addon2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg></span></div>", 4);

var _hoisted_36 = {
  "class": "code-section-container show-code"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_38 = [_hoisted_37];
var _hoisted_39 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Simple Icons -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\" id=\"basic-addon1\">\n        <svg> ... </svg>\n    </span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Notification\" aria-label=\"notification\" aria-describedby=\"basic-addon1\" />\n</div>\n\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Notification\" aria-label=\"notification\" aria-describedby=\"basic-addon2\" />\n    <span class=\"input-group-text\" id=\"basic-addon2\">\n        <svg> ... </svg>\n    </span>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_42 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Spinning Icon")])])], -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "panel-body"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><span class=\"input-group-text\" id=\"basic-addon3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-loader spin\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line></svg></span><input type=\"text\" class=\"form-control\" placeholder=\"Spinners\" aria-label=\"spinners\" aria-describedby=\"basic-addon3\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Spinners\" aria-label=\"spinners\" aria-describedby=\"basic-addon4\"><span class=\"input-group-text\" id=\"basic-addon4\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-loader spin\"><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line></svg></span></div>", 4);

var _hoisted_49 = {
  "class": "code-section-container show-code"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_51 = [_hoisted_50];
var _hoisted_52 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Spinning Icons -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\" id=\"basic-addon3\">\n        <svg> ... </svg>\n    </span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Spinners\" aria-label=\"spinners\" aria-describedby=\"basic-addon3\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Spinners\" aria-label=\"spinners\" aria-describedby=\"basic-addon4\" />\n    <span class=\"input-group-text\" id=\"basic-addon4\">\n        <svg> ... </svg>\n    </span>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_55 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Dropdown Icon")])])], -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "panel-body"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Left", -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary dropdown-toggle",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-settings"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Something else here"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "separator",
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Separated link")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Dropdown",
  "aria-label": "dropdown"
})], -1
/* HOISTED */
);

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Right", -1
/* HOISTED */
);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Dropdown",
  "aria-label": "dropdown"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-success dropdown-toggle",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-settings"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Something else here"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "separator",
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Separated link")])], -1
/* HOISTED */
);

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

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Dropdown icon -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <svg> ... </svg>\n    </button>\n    <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Dropdown\" aria-label=\"dropdown\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Dropdown\" aria-label=\"dropdown\" />\n    <button class=\"btn btn-success dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <svg> ... </svg>\n    </button>\n    <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "col-lg-12 col-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Checkboxes")])])], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "panel-body"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><div class=\"input-group-text\"><div class=\"checkbox-danger custom-control custom-checkbox\"><input type=\"checkbox\" id=\"chk_danger\" class=\"custom-control-input\" checked><label class=\"custom-control-label\" for=\"chk_danger\"></label></div></div><input type=\"text\" class=\"form-control\" placeholder=\"Checkbox\" aria-label=\"checkbox\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Checkbox\" aria-label=\"checkbox\"><div class=\"input-group-text\"><div class=\"checkbox-warning custom-control custom-checkbox\"><input type=\"checkbox\" id=\"chk_warning\" class=\"custom-control-input\" checked><label class=\"custom-control-label\" for=\"chk_warning\"></label></div></div></div>", 4);

var _hoisted_75 = {
  "class": "code-section-container show-code"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_77 = [_hoisted_76];
var _hoisted_78 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Checkbox -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <div class=\"input-group-text\">\n        <div class=\"checkbox-danger custom-control custom-checkbox\">\n            <input type=\"checkbox\" id=\"chk_danger\" class=\"custom-control-input\" checked />\n            <label class=\"custom-control-label\" for=\"chk_danger\"> </label>\n        </div>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Checkbox\" aria-label=\"checkbox\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Checkbox\" aria-label=\"checkbox\" />\n    <div class=\"input-group-text\">\n        <div class=\"checkbox-warning custom-control custom-checkbox\">\n            <input type=\"checkbox\" id=\"chk_warning\" class=\"custom-control-input\" checked />\n            <label class=\"custom-control-label\" for=\"chk_warning\"> </label>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_80 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_81 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Radios")])])], -1
/* HOISTED */
);

var _hoisted_83 = {
  "class": "panel-body"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><div class=\"input-group-text\"><div class=\"radio-primary custom-control custom-radio\"><input type=\"radio\" id=\"rdo_primary\" class=\"custom-control-input\" name=\"custom-radio-1\"><label class=\"custom-control-label\" for=\"rdo_primary\"></label></div></div><input type=\"text\" class=\"form-control\" placeholder=\"Radio\" aria-label=\"radio\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Radio\" aria-label=\"radio\"><div class=\"input-group-text\"><div class=\"radio-success custom-control custom-radio\"><input type=\"radio\" id=\"rdo_success\" class=\"custom-control-input\" name=\"custom-radio-1\"><label class=\"custom-control-label\" for=\"rdo_success\"></label></div></div></div>", 4);

var _hoisted_88 = {
  "class": "code-section-container show-code"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_90 = [_hoisted_89];
var _hoisted_91 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Radios -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <div class=\"input-group-text\">\n        <div class=\"radio-primary custom-control custom-radio\">\n            <input type=\"radio\" id=\"rdo_primary\" class=\"custom-control-input\" name=\"custom-radio-1\" />\n            <label class=\"custom-control-label\" for=\"rdo_primary\"> </label>\n        </div>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Radio\" aria-label=\"radio\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Radio\" aria-label=\"radio\" />\n    <div class=\"input-group-text\">\n        <div class=\"radio-success custom-control custom-radio\">\n            <input type=\"radio\" id=\"rdo_success\" class=\"custom-control-input\" name=\"custom-radio-1\" />\n            <label class=\"custom-control-label\" for=\"rdo_success\"> </label>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_93 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_94 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Switch")])])], -1
/* HOISTED */
);

var _hoisted_96 = {
  "class": "panel-body"
};

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><div class=\"input-group-text\"><label class=\"switch s-primary mb-0\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><input type=\"text\" class=\"form-control\" placeholder=\"Switch\" aria-label=\"switch\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Switch\" aria-label=\"switch\"><div class=\"input-group-text\"><label class=\"switch s-danger mb-0\"><input type=\"checkbox\" checked=\"\"><span class=\"slider round\"></span></label></div></div>", 4);

var _hoisted_101 = {
  "class": "code-section-container show-code"
};

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_103 = [_hoisted_102];
var _hoisted_104 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Switch -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <div class=\"input-group-text\">\n        <label class=\"switch s-primary mb-0\">\n            <input type=\"checkbox\" checked />\n            <span class=\"slider round\"></span>\n        </label>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Switch\" aria-label=\"switch\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Switch\" aria-label=\"switch\" />\n    <div class=\"input-group-text\">\n        <label class=\"switch s-danger mb-0\">\n            <input type=\"checkbox\" checked=\"\" />\n            <span class=\"slider round\"></span>\n        </label>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_106 = {
  "class": "row layout-spacing"
};

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "sizes",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Sizing")])], -1
/* HOISTED */
);

var _hoisted_108 = {
  "class": "col-lg-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_109 = {
  "class": "row"
};
var _hoisted_110 = {
  "class": "col-md-12 mb-4"
};
var _hoisted_111 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Sizing")])])], -1
/* HOISTED */
);

var _hoisted_113 = {
  "class": "panel-body"
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"input-group input-group-sm mb-4\"><span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Small</span><input type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\"></div><div class=\"input-group mb-4\"><span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Default</span><input type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\"></div><div class=\"input-group input-group-lg mb-4\"><span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Large</span><input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\"></div>", 3);

var _hoisted_117 = {
  "class": "code-section-container show-code"
};

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_119 = [_hoisted_118];
var _hoisted_120 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Sizing -->\n<div class=\"input-group input-group-sm mb-4\">\n    <span class=\"input-group-text\" id=\"inputGroup-sizing-sm\">Small</span>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Small\" aria-describedby=\"inputGroup-sizing-sm\" />\n</div>\n\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Default</span>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\" />\n</div>\n\n<div class=\"input-group input-group-lg mb-4\">\n    <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Large</span>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\" />\n</div>\n", -1
/* HOISTED */
);

var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "multiple",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Multiple Fields")])], -1
/* HOISTED */
);

var _hoisted_123 = {
  "class": "col-md-12"
};
var _hoisted_124 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Multiple inputs")])])], -1
/* HOISTED */
);

var _hoisted_126 = {
  "class": "panel-body"
};

var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text"
}, "First and last name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control"
})], -1
/* HOISTED */
);

var _hoisted_128 = {
  "class": "code-section-container show-code"
};

var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_130 = [_hoisted_129];
var _hoisted_131 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Multiple inputs -->\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\">First and last name</span>\n    <input type=\"text\" class=\"form-control\" />\n    <input type=\"text\" class=\"form-control\" />\n</div>\n", -1
/* HOISTED */
);

var _hoisted_133 = {
  "class": "row"
};
var _hoisted_134 = {
  "class": "col-lg-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_135 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Multiple addons")])])], -1
/* HOISTED */
);

var _hoisted_137 = {
  "class": "panel-body"
};

var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><span class=\"input-group-text\">$</span><span class=\"input-group-text\">0.00</span><input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"><span class=\"input-group-text\">$</span><span class=\"input-group-text\">0.00</span></div>", 4);

var _hoisted_142 = {
  "class": "code-section-container show-code"
};

var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_144 = [_hoisted_143];
var _hoisted_145 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Multiple addons -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <span class=\"input-group-text\">$</span>\n    <span class=\"input-group-text\">0.00</span>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" />\n    <span class=\"input-group-text\">$</span>\n    <span class=\"input-group-text\">0.00</span>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_147 = {
  "class": "row"
};

var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "Input_group_action",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Input Group with Action")])], -1
/* HOISTED */
);

var _hoisted_149 = {
  "class": "col-lg-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_150 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Buttons with dropdowns")])])], -1
/* HOISTED */
);

var _hoisted_152 = {
  "class": "panel-body"
};

var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Left", -1
/* HOISTED */
);

var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-secondary dropdown-toggle",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, "Dropdown"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Something else here"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "separator",
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Separated link")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  "aria-label": "Text input with dropdown button"
})], -1
/* HOISTED */
);

var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Right", -1
/* HOISTED */
);

var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  "aria-label": "Text input with dropdown button"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-secondary dropdown-toggle",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, "Dropdown"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Something else here"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "separator",
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Separated link")])], -1
/* HOISTED */
);

var _hoisted_157 = {
  "class": "code-section-container show-code"
};

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_159 = [_hoisted_158];
var _hoisted_160 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Buttons with dropdowns -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\n    <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n    </div>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\" />\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\n    <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_162 = {
  "class": "col-lg-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_163 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_164 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Segmented buttons")])])], -1
/* HOISTED */
);

var _hoisted_165 = {
  "class": "panel-body"
};

var _hoisted_166 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Left", -1
/* HOISTED */
);

var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-info"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-outline-info dropdown-toggle",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-chevron-down"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "6 9 12 15 18 9"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Something else here"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "separator",
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Separated link")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  "aria-label": "Text input with segmented dropdown button"
})], -1
/* HOISTED */
);

var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "Right", -1
/* HOISTED */
);

var _hoisted_169 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  "aria-label": "Text input with segmented dropdown button"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-outline-info"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-info dropdown-toggle",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-chevron-down"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "6 9 12 15 18 9"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu dropdown-menu-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Another action"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Something else here"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "separator",
  "class": "dropdown-divider"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item",
  href: "javascript:void(0);"
}, "Separated link")])], -1
/* HOISTED */
);

var _hoisted_170 = {
  "class": "code-section-container show-code"
};

var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_172 = [_hoisted_171];
var _hoisted_173 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Segmented buttons -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <button type=\"button\" class=\"btn btn-info\">Action</button>\n    <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <svg> ... </svg>\n    </button>\n    <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n    </div>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented dropdown button\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented dropdown button\" />\n    <button type=\"button\" class=\"btn btn-info\">Action</button>\n    <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <svg> ... </svg>\n    </button>\n    <div class=\"dropdown-menu dropdown-menu-end\">\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_175 = {
  "class": "col-lg-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_176 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Button addons")])])], -1
/* HOISTED */
);

var _hoisted_178 = {
  "class": "panel-body"
};

var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"\">Left</p><div class=\"input-group mb-4\"><button class=\"btn btn-primary\" type=\"button\">Button</button><input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Recipient&#39;s username\" aria-label=\"Recipient&#39;s username\"><button class=\"btn btn-primary\" type=\"button\">Button</button></div><p class=\"\">Left</p><div class=\"input-group mb-4\"><button class=\"btn btn-outline-primary\" type=\"button\">Button</button><button class=\"btn btn-outline-primary\" type=\"button\">Button</button><input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\"></div><p class=\"\">Right</p><div class=\"input-group mb-4\"><input type=\"text\" class=\"form-control\" placeholder=\"Recipient&#39;s username\" aria-label=\"Recipient&#39;s username\"><button class=\"btn btn-outline-primary\" type=\"button\">Button</button><button class=\"btn btn-outline-primary\" type=\"button\">Button</button></div>", 8);

var _hoisted_187 = {
  "class": "code-section-container show-code"
};

var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_189 = [_hoisted_188];
var _hoisted_190 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Button addons -->\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <button class=\"btn btn-primary\" type=\"button\">Button</button>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" />\n</div>\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" />\n    <button class=\"btn btn-primary\" type=\"button\">Button</button>\n</div>\n\n=========\n  LEFT\n=========\n<div class=\"input-group mb-4\">\n    <button class=\"btn btn-primary\" type=\"button\">Button</button>\n    <button class=\"btn btn-primary\" type=\"button\">Button</button>\n    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" />\n</div>\n\n\n=========\n  RIGHT\n=========\n<div class=\"input-group mb-4\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" />\n    <button class=\"btn btn-primary\" type=\"button\">Button</button>\n    <button class=\"btn btn-primary\" type=\"button\">Button</button>\n</div>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_10)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_25), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_38), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_40];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_51), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_53];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_64), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_66];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_77), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_79];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_90), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_92];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [_hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_103), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_105];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [_hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_119), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_121];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), _hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [_hoisted_127, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_130), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_132];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [_hoisted_136, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [_hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_144), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_146];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [_hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [_hoisted_151, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [_hoisted_153, _hoisted_154, _hoisted_155, _hoisted_156, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $setup.toggleCode('code11');
    })
  }, _hoisted_159), $setup.code_arr.includes('code11') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_161];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [_hoisted_164, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [_hoisted_166, _hoisted_167, _hoisted_168, _hoisted_169, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_170, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.toggleCode('code12');
    })
  }, _hoisted_172), $setup.code_arr.includes('code12') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_174];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [_hoisted_179, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $setup.toggleCode('code13');
    })
  }, _hoisted_189), $setup.code_arr.includes('code13') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_191];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/forms/input_group.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/forms/input_group.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _input_group_vue_vue_type_template_id_7f300560__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input_group.vue?vue&type=template&id=7f300560 */ "./resources/js/src/views/forms/input_group.vue?vue&type=template&id=7f300560");
/* harmony import */ var _input_group_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input_group.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/forms/input_group.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_input_group_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_input_group_vue_vue_type_template_id_7f300560__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/forms/input_group.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/forms/input_group.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/forms/input_group.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_group_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_group_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./input_group.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/input_group.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/forms/input_group.vue?vue&type=template&id=7f300560":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/forms/input_group.vue?vue&type=template&id=7f300560 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_group_vue_vue_type_template_id_7f300560__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_input_group_vue_vue_type_template_id_7f300560__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./input_group.vue?vue&type=template&id=7f300560 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/input_group.vue?vue&type=template&id=7f300560");


/***/ })

}]);