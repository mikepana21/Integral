"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-switches"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/switches.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/switches.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/forms/switches.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'switches',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Switches'
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/switches.vue?vue&type=template&id=0978a14c":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/switches.vue?vue&type=template&id=0978a14c ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Switches")])])])])])], -1
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
  href: "#switch_icons",
  "class": "nav-link"
}, "Icons", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#switch_solid",
  "class": "nav-link"
}, "Solid", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#switch_outline",
  "class": "nav-link"
}, "Outline", -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_6, _hoisted_7, _hoisted_8];
var _hoisted_10 = {
  "class": "row layout-top-spacing"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "switch_icons",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Icons")])], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_13 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "panel-body text-center"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-default mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-primary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-success mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-warning mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-danger mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-secondary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-info mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-dark mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div></div>", 1);

var _hoisted_17 = {
  "class": "code-section-container show-code"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Default -->\n<label class=\"switch s-icons s-outline s-outline-default mb-4 me-2\">\n    <input type=\"checkbox\" checked />\n    <span class=\"slider\"></span>\n</label>\n", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_23 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Rounded")])])], -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "panel-body text-center"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-default mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-primary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-success mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-warning mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-danger mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-secondary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-info mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-icons s-outline s-outline-dark mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div></div>", 1);

var _hoisted_27 = {
  "class": "code-section-container show-code"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Rounded -->\n<label class=\"switch s-icons s-outline s-outline-default mb-4 me-2\">\n    <input type=\"checkbox\" checked />\n    <span class=\"slider round\"></span>\n</label>\n", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "row"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "switch_solid",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Solid")])], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_35 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "panel-body text-center"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-default mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-primary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-success mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-warning mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-danger mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-secondary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-info mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-dark mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div></div>", 1);

var _hoisted_39 = {
  "class": "code-section-container show-code"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_41 = [_hoisted_40];
var _hoisted_42 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- solid default -->\n<label class=\"switch s-default mb-4 me-2\">\n    <input type=\"checkbox\" checked />\n    <span class=\"slider\"></span>\n</label>\n", -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_45 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Rounded")])])], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "panel-body text-center"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-default mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-primary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-success mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-warning mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-danger mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-secondary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-info mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-dark mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div></div>", 1);

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

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- solid Rounded -->\n<label class=\"switch s-default mb-4 me-2\">\n    <input type=\"checkbox\" checked />\n    <span class=\"slider round\"></span>\n</label>\n", -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "row"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "switch_outline",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Outline")])], -1
/* HOISTED */
);

var _hoisted_56 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_57 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
/* HOISTED */
);

var _hoisted_59 = {
  "class": "panel-body text-center"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-default mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-primary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-success mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-warning mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-danger mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-secondary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-info mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-dark mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider\"></span></label></div></div>", 1);

var _hoisted_61 = {
  "class": "code-section-container show-code"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_63 = [_hoisted_62];
var _hoisted_64 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Outline defaukt -->\n<label class=\"switch s-outline s-outline-default mb-4 me-2\">\n    <input type=\"checkbox\" checked />\n    <span class=\"slider\"></span>\n</label>\n", -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_67 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Rounded")])])], -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "panel-body text-center"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-default mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-primary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-success mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-warning mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-danger mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-secondary mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-info mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div><div class=\"col-lg-3 col-md-3 col-sm-4 col-6\"><label class=\"switch s-outline s-outline-dark mb-4 me-2\"><input type=\"checkbox\" checked><span class=\"slider round\"></span></label></div></div>", 1);

var _hoisted_71 = {
  "class": "code-section-container show-code"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_73 = [_hoisted_72];
var _hoisted_74 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Outline defaukt -->\n<label class=\"switch s-outline s-outline-default mb-4 me-2\">\n    <input type=\"checkbox\" checked />\n    <span class=\"slider round\"></span>\n</label>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_9)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_19), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_29), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_41), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_43];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_51), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_53];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_63), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_65];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_73), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_75];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/forms/switches.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/forms/switches.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _switches_vue_vue_type_template_id_0978a14c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switches.vue?vue&type=template&id=0978a14c */ "./resources/js/src/views/forms/switches.vue?vue&type=template&id=0978a14c");
/* harmony import */ var _switches_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switches.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/forms/switches.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_switches_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_switches_vue_vue_type_template_id_0978a14c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/forms/switches.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/forms/switches.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/switches.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_switches_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_switches_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./switches.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/switches.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/forms/switches.vue?vue&type=template&id=0978a14c":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/forms/switches.vue?vue&type=template&id=0978a14c ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_switches_vue_vue_type_template_id_0978a14c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_switches_vue_vue_type_template_id_0978a14c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./switches.vue?vue&type=template&id=0978a14c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/switches.vue?vue&type=template&id=0978a14c");


/***/ })

}]);