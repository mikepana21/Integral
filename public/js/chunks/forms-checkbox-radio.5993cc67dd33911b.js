"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-checkbox-radio"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
  __name: 'checkbox_radio',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Checkbox and Radio'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var radio_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('radio-2');
    var radio_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('radio-2');
    var radio_3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('radio-2');
    var radio_4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('radio-2');
    var radio_5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('radio-2');
    var radio_6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('radio-2');

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
      radio_1: radio_1,
      radio_2: radio_2,
      radio_3: radio_3,
      radio_4: radio_4,
      radio_5: radio_5,
      radio_6: radio_6,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d9665a2e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
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
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Checkbox and Radio")])])])])])], -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "nav sidenav"
};
var _hoisted_5 = {
  "class": "sidenav-content"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#checkbox",
    "class": "nav-link"
  }, "Checkbox", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#radio",
    "class": "nav-link"
  }, "Radio", -1
  /* HOISTED */
  );
});

var _hoisted_8 = [_hoisted_6, _hoisted_7];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\" data-v-d9665a2e><div class=\"col-12\" data-v-d9665a2e><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\" data-v-d9665a2e><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\" data-v-d9665a2e><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\" data-v-d9665a2e></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\" data-v-d9665a2e></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/forms/checks-radios\" class=\"text-info\" data-v-d9665a2e> https://getbootstrap.com/docs/5.0/forms/checks-radios </a></div></div></div>", 1);

var _hoisted_10 = {
  "class": "row layout-top-spacing"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "checkbox",
    "class": "col-lg-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "seperator-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": ""
  }, "Checkbox")])], -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_15 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
  /* HOISTED */
  );
});

var _hoisted_17 = {
  "class": "panel-body"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.checkbox-*</code> class to change different colors.</p><div class=\"checkbox-default custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-primary custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-success custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-info custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_info\" data-v-d9665a2e> Info </label></div><div class=\"checkbox-warning custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-danger custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-secondary custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-dark custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chk_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_27 = {
  "class": "code-section-container show-code"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_31 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- checkbox -->\n<div class=\"checkbox-default custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_default\" />\n    <label class=\"custom-control-label\" for=\"chk_default\"> Default </label>\n</div>\n\n<div class=\"checkbox-primary custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_primary\" />\n    <label class=\"custom-control-label\" for=\"chk_primary\"> Primary </label>\n</div>\n\n<div class=\"checkbox-success custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_success\" />\n    <label class=\"custom-control-label\" for=\"chk_success\"> Success </label>\n</div>\n\n<div class=\"checkbox-info custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_info\" />\n    <label class=\"custom-control-label\" for=\"chk_info\"> Info </label>\n</div>\n\n<div class=\"checkbox-warning custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_warning\" />\n    <label class=\"custom-control-label\" for=\"chk_warning\"> Warning </label>\n</div>\n\n<div class=\"checkbox-danger custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_danger\" />\n    <label class=\"custom-control-label\" for=\"chk_danger\"> Danger </label>\n</div>\n\n<div class=\"checkbox-secondary custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_secondary\" />\n    <label class=\"custom-control-label\" for=\"chk_secondary\"> Secondary </label>\n</div>\n\n<div class=\"checkbox-dark custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chk_dark\" />\n    <label class=\"custom-control-label\" for=\"chk_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_32 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_33 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default Rounded")])])], -1
  /* HOISTED */
  );
});

var _hoisted_35 = {
  "class": "panel-body"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.rounded</code> class to create checkboxes rounded.</p><div class=\"checkbox-default custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-primary custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-success custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-info custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_info\" data-v-d9665a2e> Info </label></div><div class=\"checkbox-warning custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-danger custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-secondary custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-dark custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkrd_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_45 = {
  "class": "code-section-container show-code"
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_47 = [_hoisted_46];
var _hoisted_48 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- checkbox rounded -->\n<div class=\"checkbox-default custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_default\" />\n    <label class=\"custom-control-label\" for=\"chkrd_default\"> Default </label>\n</div>\n\n<div class=\"checkbox-primary custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_primary\" />\n    <label class=\"custom-control-label\" for=\"chkrd_primary\"> Primary </label>\n</div>\n\n<div class=\"checkbox-success custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_success\" />\n    <label class=\"custom-control-label\" for=\"chkrd_success\"> Success </label>\n</div>\n\n<div class=\"checkbox-info custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_info\" />\n    <label class=\"custom-control-label\" for=\"chkrd_info\"> Info </label>\n</div>\n\n<div class=\"checkbox-warning custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_warning\" />\n    <label class=\"custom-control-label\" for=\"chkrd_warning\"> Warning </label>\n</div>\n\n<div class=\"checkbox-danger custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_danger\" />\n    <label class=\"custom-control-label\" for=\"chkrd_danger\"> Danger </label>\n</div>\n\n<div class=\"checkbox-secondary custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_secondary\" />\n    <label class=\"custom-control-label\" for=\"chkrd_secondary\"> Secondary </label>\n</div>\n\n<div class=\"checkbox-dark custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkrd_dark\" />\n    <label class=\"custom-control-label\" for=\"chkrd_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_50 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_51 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Outline")])])], -1
  /* HOISTED */
  );
});

var _hoisted_53 = {
  "class": "panel-body"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.checkbox-outline-*</code> class to create checkboxes outlined and change different colors.</p><div class=\"checkbox-outline-default custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-outline-primary custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-outline-success custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-outline-info custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_info\" data-v-d9665a2e> Info </label></div><div class=\"checkbox-outline-warning custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-outline-danger custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-outline-secondary custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-outline-dark custom-control custom-checkbox\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkout_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_63 = {
  "class": "code-section-container show-code"
};

var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_65 = [_hoisted_64];
var _hoisted_66 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- checkbox outline -->\n<div class=\"checkbox-outline-default custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_default\" />\n    <label class=\"custom-control-label\" for=\"chkout_default\"> Default </label>\n</div>\n<div class=\"checkbox-outline-primary custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_primary\" />\n    <label class=\"custom-control-label\" for=\"chkout_primary\"> Primary </label>\n</div>\n<div class=\"checkbox-outline-success custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_success\" />\n    <label class=\"custom-control-label\" for=\"chkout_success\"> Success </label>\n</div>\n<div class=\"checkbox-outline-info custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_info\" />\n    <label class=\"custom-control-label\" for=\"chkout_info\"> Info </label>\n</div>\n<div class=\"checkbox-outline-warning custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_warning\" />\n    <label class=\"custom-control-label\" for=\"chkout_warning\"> Warning </label>\n</div>\n<div class=\"checkbox-outline-danger custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_danger\" />\n    <label class=\"custom-control-label\" for=\"chkout_danger\"> Danger </label>\n</div>\n<div class=\"checkbox-outline-secondary custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_secondary\" />\n    <label class=\"custom-control-label\" for=\"chkout_secondary\"> Secondary </label>\n</div>\n<div class=\"checkbox-outline-dark custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkout_dark\" />\n    <label class=\"custom-control-label\" for=\"chkout_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_68 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_69 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Outline Rounded")])])], -1
  /* HOISTED */
  );
});

var _hoisted_71 = {
  "class": "panel-body"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.rounded</code> class to create checkboxes rounded.</p><div class=\"checkbox-outline-default custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-outline-primary custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-outline-success custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-outline-info custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_info\" data-v-d9665a2e> Info </label></div><div class=\"checkbox-outline-warning custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-outline-danger custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-outline-secondary custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-outline-dark custom-control custom-checkbox rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkoutrd_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_81 = {
  "class": "code-section-container show-code"
};

var _hoisted_82 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_83 = [_hoisted_82];
var _hoisted_84 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_85 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- checkbox outline rounded -->\n<div class=\"checkbox-outline-default custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_default\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_default\"> Default </label>\n</div>\n<div class=\"checkbox-outline-primary custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_primary\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_primary\"> Primary </label>\n</div>\n<div class=\"checkbox-outline-success custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_success\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_success\"> Success </label>\n</div>\n<div class=\"checkbox-outline-info custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_info\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_info\"> Info </label>\n</div>\n<div class=\"checkbox-outline-warning custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_warning\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_warning\"> Warning </label>\n</div>\n<div class=\"checkbox-outline-danger custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_danger\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_danger\"> Danger </label>\n</div>\n<div class=\"checkbox-outline-secondary custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_secondary\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_secondary\"> Secondary </label>\n</div>\n<div class=\"checkbox-outline-dark custom-control custom-checkbox rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkoutrd_dark\" />\n    <label class=\"custom-control-label\" for=\"chkoutrd_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_86 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_87 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_88 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default Text Color")])])], -1
  /* HOISTED */
  );
});

var _hoisted_89 = {
  "class": "panel-body"
};

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.text-color</code> class to make text colored as checkbox.</p><div class=\"row\" data-v-d9665a2e><div class=\"col-md-6 col-6\" data-v-d9665a2e><div class=\"checkbox-default custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-primary custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-success custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-info custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_info\" data-v-d9665a2e> info </label></div><div class=\"checkbox-warning custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-danger custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-secondary custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-dark custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktc_dark\" data-v-d9665a2e> Dark </label></div></div><div class=\"col-md-6 col-6\" data-v-d9665a2e><div class=\"checkbox-outline-default custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-outline-primary custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-outline-success custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-outline-info custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_info\" data-v-d9665a2e> Info </label></div><div class=\"checkbox-outline-warning custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-outline-danger custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-outline-secondary custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-outline-dark custom-control custom-checkbox text-color\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttc_dark\" data-v-d9665a2e> Dark </label></div></div></div>", 2);

var _hoisted_92 = {
  "class": "code-section-container show-code"
};

var _hoisted_93 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_94 = [_hoisted_93];
var _hoisted_95 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_96 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Default Text Color -->\n<div class=\"checkbox-default custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_default\" />\n    <label class=\"custom-control-label\" for=\"chktc_default\"> Default </label>\n</div>\n<div class=\"checkbox-primary custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_primary\" />\n    <label class=\"custom-control-label\" for=\"chktc_primary\"> Primary </label>\n</div>\n<div class=\"checkbox-success custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_success\" />\n    <label class=\"custom-control-label\" for=\"chktc_success\"> Success </label>\n</div>\n<div class=\"checkbox-info custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_info\" />\n    <label class=\"custom-control-label\" for=\"chktc_info\"> info </label>\n</div>\n<div class=\"checkbox-warning custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_warning\" />\n    <label class=\"custom-control-label\" for=\"chktc_warning\"> Warning </label>\n</div>\n<div class=\"checkbox-danger custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_danger\" />\n    <label class=\"custom-control-label\" for=\"chktc_danger\"> Danger </label>\n</div>\n<div class=\"checkbox-secondary custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_secondary\" />\n    <label class=\"custom-control-label\" for=\"chktc_secondary\"> Secondary </label>\n</div>\n<div class=\"checkbox-dark custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktc_dark\" />\n    <label class=\"custom-control-label\" for=\"chktc_dark\"> Dark </label>\n</div>\n\n<div class=\"checkbox-outline-default custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_default\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_default\"> Default </label>\n</div>\n<div class=\"checkbox-outline-Primary custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_primary\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_primary\"> Primary </label>\n</div>\n<div class=\"checkbox-outline-success custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_success\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_success\"> Success </label>\n</div>\n<div class=\"checkbox-outline-info custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_info\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_info\"> Info </label>\n</div>\n<div class=\"checkbox-outline-warning custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_warning\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_warning\"> Warning </label>\n</div>\n<div class=\"checkbox-outline-danger custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_danger\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_danger\"> Danger </label>\n</div>\n<div class=\"checkbox-outline-secondary custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_secondary\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_secondary\"> Secondary </label>\n</div>\n<div class=\"checkbox-outline-dark custom-control custom-checkbox text-color\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttc_dark\" />\n    <label class=\"custom-control-label\" for=\"chkouttc_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_97 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_98 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_99 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Rounded Text Color")])])], -1
  /* HOISTED */
  );
});

var _hoisted_100 = {
  "class": "panel-body"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.text-color</code> class to make text colored as checkbox.</p><div class=\"row\" data-v-d9665a2e><div class=\"col-md-6 col-6\" data-v-d9665a2e><div class=\"checkbox-default custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-primary custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-success custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-info custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_info\" data-v-d9665a2e> info </label></div><div class=\"checkbox-warning custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-danger custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-secondary custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-dark custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chktcrd_dark\" data-v-d9665a2e> Dark </label></div></div><div class=\"col-md-6 col-6\" data-v-d9665a2e><div class=\"checkbox-outline-default custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_default\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_default\" data-v-d9665a2e> Default </label></div><div class=\"checkbox-outline-primary custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_primary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_primary\" data-v-d9665a2e> Primary </label></div><div class=\"checkbox-outline-success custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_success\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_success\" data-v-d9665a2e> Success </label></div><div class=\"checkbox-outline-info custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_info\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_info\" data-v-d9665a2e> Info </label></div><div class=\"checkbox-outline-warning custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_warning\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_warning\" data-v-d9665a2e> Warning </label></div><div class=\"checkbox-outline-danger custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_danger\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_danger\" data-v-d9665a2e> Danger </label></div><div class=\"checkbox-outline-secondary custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_secondary\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"checkbox-outline-dark custom-control custom-checkbox text-color rounded\" data-v-d9665a2e><input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_dark\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"chkouttcrd_dark\" data-v-d9665a2e> Dark </label></div></div></div>", 2);

var _hoisted_103 = {
  "class": "code-section-container show-code"
};

var _hoisted_104 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_105 = [_hoisted_104];
var _hoisted_106 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_107 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Rounded Text Color -->\n<div class=\"checkbox-default custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_default\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_default\"> Default </label>\n</div>\n<div class=\"checkbox-primary custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_primary\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_primary\"> Primary </label>\n</div>\n<div class=\"checkbox-success custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_success\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_success\"> Success </label>\n</div>\n<div class=\"checkbox-info custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_info\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_info\"> info </label>\n</div>\n<div class=\"checkbox-warning custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_warning\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_warning\"> Warning </label>\n</div>\n<div class=\"checkbox-danger custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_danger\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_danger\"> Danger </label>\n</div>\n<div class=\"checkbox-secondary custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_secondary\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_secondary\"> Secondary </label>\n</div>\n<div class=\"checkbox-dark custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chktcrd_dark\" />\n    <label class=\"custom-control-label\" for=\"chktcrd_dark\"> Dark </label>\n</div>\n\n<div class=\"checkbox-outline-default custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_default\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_default\"> Default </label>\n</div>\n<div class=\"checkbox-outline-primary custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_primary\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_primary\"> Primary </label>\n</div>\n<div class=\"checkbox-outline-success custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_success\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_success\"> Success </label>\n</div>\n<div class=\"checkbox-outline-info custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_info\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_info\"> Info </label>\n</div>\n<div class=\"checkbox-outline-warning custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_warning\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_warning\"> Warning </label>\n</div>\n<div class=\"checkbox-outline-danger custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_danger\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_danger\"> Danger </label>\n</div>\n<div class=\"checkbox-outline-secondary custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_secondary\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_secondary\"> Secondary </label>\n</div>\n<div class=\"checkbox-outline-dark custom-control custom-checkbox text-color rounded\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"chkouttcrd_dark\" />\n    <label class=\"custom-control-label\" for=\"chkouttcrd_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_108 = {
  "class": "row layout-top-spacing"
};

var _hoisted_109 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "radio",
    "class": "col-lg-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "seperator-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": ""
  }, "Radio")])], -1
  /* HOISTED */
  );
});

var _hoisted_110 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_111 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_112 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
  /* HOISTED */
  );
});

var _hoisted_113 = {
  "class": "panel-body"
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.radio-*</code> class to change different colors.</p><div class=\"radio-default custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_default\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_default\" data-v-d9665a2e> Default </label></div><div class=\"radio-primary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_primary\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_primary\" data-v-d9665a2e> Primary </label></div><div class=\"radio-success custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_success\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_success\" data-v-d9665a2e> Success </label></div><div class=\"radio-info custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_info\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_info\" data-v-d9665a2e> Info </label></div><div class=\"radio-warning custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_warning\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_warning\" data-v-d9665a2e> Warning </label></div><div class=\"radio-danger custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_danger\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_danger\" data-v-d9665a2e> Danger </label></div><div class=\"radio-secondary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_secondary\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"radio-dark custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdo_dark\" name=\"custom-radio-1\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdo_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_123 = {
  "class": "code-section-container show-code"
};

var _hoisted_124 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_125 = [_hoisted_124];
var _hoisted_126 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_127 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Default -->\n<div class=\"radio-default custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_default\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_default\"> Default </label>\n</div>\n<div class=\"radio-primary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_primary\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_primary\"> Primary </label>\n</div>\n<div class=\"radio-success custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_success\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_success\"> Success </label>\n</div>\n<div class=\"radio-info custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_info\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_info\"> Info </label>\n</div>\n<div class=\"radio-warning custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_warning\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_warning\"> Warning </label>\n</div>\n<div class=\"radio-danger custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_danger\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_danger\"> Danger </label>\n</div>\n<div class=\"radio-secondary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_secondary\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_secondary\"> Secondary </label>\n</div>\n<div class=\"radio-dark custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdo_dark\" name=\"custom-radio-1\" />\n    <label class=\"custom-control-label\" for=\"rdo_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_128 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_129 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_130 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Classic")])])], -1
  /* HOISTED */
  );
});

var _hoisted_131 = {
  "class": "panel-body"
};

var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.radio-classic</code> class to make classic.</p><div class=\"radio-classic radio-default custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_default\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_default\" data-v-d9665a2e> Default </label></div><div class=\"radio-classic radio-primary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_primary\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_primary\" data-v-d9665a2e> Primary </label></div><div class=\"radio-classic radio-success custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_success\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_success\" data-v-d9665a2e> Success </label></div><div class=\"radio-classic radio-info custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_info\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_info\" data-v-d9665a2e> Info </label></div><div class=\"radio-classic radio-warning custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_warning\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_warning\" data-v-d9665a2e> Warning </label></div><div class=\"radio-classic radio-danger custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_danger\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_danger\" data-v-d9665a2e> Danger </label></div><div class=\"radio-classic radio-secondary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_secondary\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"radio-classic radio-dark custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_dark\" name=\"custom-radio-2\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdocls_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_141 = {
  "class": "code-section-container show-code"
};

var _hoisted_142 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_143 = [_hoisted_142];
var _hoisted_144 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_145 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Classic -->\n<div class=\"radio-classic radio-default custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_default\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_default\"> Default </label>\n</div>\n<div class=\"radio-classic radio-primary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_primary\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_primary\"> Primary </label>\n</div>\n<div class=\"radio-classic radio-success custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_success\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_success\"> Success </label>\n</div>\n<div class=\"radio-classic radio-info custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_info\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_info\"> Info </label>\n</div>\n<div class=\"radio-classic radio-warning custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_warning\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_warning\"> Warning </label>\n</div>\n<div class=\"radio-classic radio-danger custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_danger\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_danger\"> Danger </label>\n</div>\n<div class=\"radio-classic radio-secondary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_secondary\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_secondary\"> Secondary </label>\n</div>\n<div class=\"radio-classic radio-dark custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdocls_dark\" name=\"custom-radio-2\" />\n    <label class=\"custom-control-label\" for=\"rdocls_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_146 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_147 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_148 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Square")])])], -1
  /* HOISTED */
  );
});

var _hoisted_149 = {
  "class": "panel-body"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.square-radio</code> class to make squares.</p><div class=\"square-radio radio-default custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_default\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_default\" data-v-d9665a2e> Default </label></div><div class=\"square-radio radio-primary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_primary\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_primary\" data-v-d9665a2e> Primary </label></div><div class=\"square-radio radio-success custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_success\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_success\" data-v-d9665a2e> Success </label></div><div class=\"square-radio radio-info custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_info\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_info\" data-v-d9665a2e> Info </label></div><div class=\"square-radio radio-warning custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_warning\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_warning\" data-v-d9665a2e> Warning </label></div><div class=\"square-radio radio-danger custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_danger\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_danger\" data-v-d9665a2e> Danger </label></div><div class=\"square-radio radio-secondary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_secondary\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"square-radio radio-dark custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_dark\" name=\"custom-radio-3\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosq_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_159 = {
  "class": "code-section-container show-code"
};

var _hoisted_160 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_161 = [_hoisted_160];
var _hoisted_162 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_163 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- square -->\n<div class=\"square-radio radio-default custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_default\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_default\"> Default </label>\n</div>\n<div class=\"square-radio radio-primary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_primary\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_primary\"> Primary </label>\n</div>\n<div class=\"square-radio radio-success custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_success\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_success\"> Success </label>\n</div>\n<div class=\"square-radio radio-info custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_info\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_info\"> Info </label>\n</div>\n<div class=\"square-radio radio-warning custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_warning\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_warning\"> Warning </label>\n</div>\n<div class=\"square-radio radio-danger custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_danger\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_danger\"> Danger </label>\n</div>\n<div class=\"square-radio radio-secondary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_secondary\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_secondary\"> Secondary </label>\n</div>\n<div class=\"square-radio radio-dark custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosq_dark\" name=\"custom-radio-3\" />\n    <label class=\"custom-control-label\" for=\"rdosq_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_164 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_165 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_166 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default Text Color")])])], -1
  /* HOISTED */
  );
});

var _hoisted_167 = {
  "class": "panel-body"
};

var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.text-color</code> class to make text colored as checkbox.</p><div class=\"text-color radio-default custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_default\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_default\" data-v-d9665a2e> Default </label></div><div class=\"text-color radio-primary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_primary\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_primary\" data-v-d9665a2e> Primary </label></div><div class=\"text-color radio-success custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_success\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_success\" data-v-d9665a2e> Success </label></div><div class=\"text-color radio-info custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_info\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_info\" data-v-d9665a2e> Info </label></div><div class=\"text-color radio-warning custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_warning\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_warning\" data-v-d9665a2e> Warning </label></div><div class=\"text-color radio-danger custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_danger\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_danger\" data-v-d9665a2e> Danger </label></div><div class=\"text-color radio-secondary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_secondary\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"text-color radio-dark custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_dark\" name=\"custom-radio-4\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdotc_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_177 = {
  "class": "code-section-container show-code"
};

var _hoisted_178 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_179 = [_hoisted_178];
var _hoisted_180 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_181 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Default text color -->\n<div class=\"text-color radio-default custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_default\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_default\"> Default </label>\n</div>\n<div class=\"text-color radio-primary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_primary\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_primary\"> Primary </label>\n</div>\n<div class=\"text-color radio-success custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_success\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_success\"> Success </label>\n</div>\n<div class=\"text-color radio-info custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_info\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_info\"> Info </label>\n</div>\n<div class=\"text-color radio-warning custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_warning\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_warning\"> Warning </label>\n</div>\n<div class=\"text-color radio-danger custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_danger\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_danger\"> Danger </label>\n</div>\n<div class=\"text-color radio-secondary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_secondary\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_secondary\"> Secondary </label>\n</div>\n<div class=\"text-color radio-dark custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdotc_dark\" name=\"custom-radio-4\" />\n    <label class=\"custom-control-label\" for=\"rdotc_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_182 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_183 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_184 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Classic Text Color")])])], -1
  /* HOISTED */
  );
});

var _hoisted_185 = {
  "class": "panel-body"
};

var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.radio-classic.text-color</code> class to make text colored as checkbox..</p><div class=\"radio-classic text-color radio-default custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_default\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_default\" data-v-d9665a2e> Default </label></div><div class=\"radio-classic text-color radio-primary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_primary\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_primary\" data-v-d9665a2e> Primary </label></div><div class=\"radio-classic text-color radio-success custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_success\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_success\" data-v-d9665a2e> Success </label></div><div class=\"radio-classic text-color radio-info custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_info\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_info\" data-v-d9665a2e> Info </label></div><div class=\"radio-classic text-color radio-warning custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_warning\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_warning\" data-v-d9665a2e> Warning </label></div><div class=\"radio-classic text-color radio-danger custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_danger\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_danger\" data-v-d9665a2e> Danger </label></div><div class=\"radio-classic text-color radio-secondary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_secondary\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"radio-classic text-color radio-dark custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_dark\" name=\"custom-radio-5\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdoclstc_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_195 = {
  "class": "code-section-container show-code"
};

var _hoisted_196 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_197 = [_hoisted_196];
var _hoisted_198 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_199 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Classic text color -->\n<div class=\"radio-classic text-color radio-default custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_default\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_default\"> Default </label>\n</div>\n<div class=\"radio-classic text-color radio-primary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_primary\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_primary\"> Primary </label>\n</div>\n<div class=\"radio-classic text-color radio-success custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_success\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_success\"> Success </label>\n</div>\n<div class=\"radio-classic text-color radio-info custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_info\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_info\"> Info </label>\n</div>\n<div class=\"radio-classic text-color radio-warning custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_warning\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_warning\"> Warning </label>\n</div>\n<div class=\"radio-classic text-color radio-danger custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_danger\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_danger\"> Danger </label>\n</div>\n<div class=\"radio-classic text-color radio-secondary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_secondary\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_secondary\"> Secondary </label>\n</div>\n<div class=\"radio-classic text-color radio-dark custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdoclstc_dark\" name=\"custom-radio-5\" />\n    <label class=\"custom-control-label\" for=\"rdoclstc_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

var _hoisted_200 = {
  "class": "col-xl-12 col-12 layout-spacing"
};
var _hoisted_201 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_202 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Square Text Color")])])], -1
  /* HOISTED */
  );
});

var _hoisted_203 = {
  "class": "panel-body"
};

var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"mb-4\" data-v-d9665a2e>Use <code data-v-d9665a2e>.square-radio.text-color</code> class to make text colored as checkbox.</p><div class=\"square-radio text-color radio-default custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_default\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_default\" data-v-d9665a2e> Default </label></div><div class=\"square-radio text-color radio-primary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_primary\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_primary\" data-v-d9665a2e> Primary </label></div><div class=\"square-radio text-color radio-success custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_success\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_success\" data-v-d9665a2e> Success </label></div><div class=\"square-radio text-color radio-info custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_info\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_info\" data-v-d9665a2e> Info </label></div><div class=\"square-radio text-color radio-warning custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_warning\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_warning\" data-v-d9665a2e> Warning </label></div><div class=\"square-radio text-color radio-danger custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_danger\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_danger\" data-v-d9665a2e> Danger </label></div><div class=\"square-radio text-color radio-secondary custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_secondary\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_secondary\" data-v-d9665a2e> Secondary </label></div><div class=\"square-radio text-color radio-dark custom-control custom-radio\" data-v-d9665a2e><input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_dark\" name=\"custom-radio-6\" data-v-d9665a2e><label class=\"custom-control-label\" for=\"rdosqtc_dark\" data-v-d9665a2e> Dark </label></div>", 9);

var _hoisted_213 = {
  "class": "code-section-container show-code"
};

var _hoisted_214 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
  /* HOISTED */
  );
});

var _hoisted_215 = [_hoisted_214];
var _hoisted_216 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_217 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Square text color -->\n<div class=\"square-radio text-color radio-default custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_default\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_default\"> Default </label>\n</div>\n<div class=\"square-radio text-color radio-primary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_primary\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_primary\"> Primary </label>\n</div>\n<div class=\"square-radio text-color radio-success custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_success\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_success\"> Success </label>\n</div>\n<div class=\"square-radio text-color radio-info custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_info\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_info\"> Info </label>\n</div>\n<div class=\"square-radio text-color radio-warning custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_warning\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_warning\"> Warning </label>\n</div>\n<div class=\"square-radio text-color radio-danger custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_danger\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_danger\"> Danger </label>\n</div>\n<div class=\"square-radio text-color radio-secondary custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_secondary\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_secondary\"> Secondary </label>\n</div>\n<div class=\"square-radio text-color radio-dark custom-control custom-radio\">\n    <input type=\"radio\" class=\"custom-control-input\" id=\"rdosqtc_dark\" name=\"custom-radio-6\" />\n    <label class=\"custom-control-label\" for=\"rdosqtc_dark\"> Dark </label>\n</div>\n", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_8)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Background "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_29), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_47), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_49];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_65), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_67];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_83), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_85];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [_hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [_hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_94), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_96];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_105), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_107];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [_hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Background "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_125), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_127];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [_hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_143), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_145];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [_hoisted_148, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_161), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_163];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [_hoisted_166, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_179), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_180, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_181];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [_hoisted_184, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_195, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $setup.toggleCode('code11');
    })
  }, _hoisted_197), $setup.code_arr.includes('code11') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_198, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_199];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [_hoisted_202, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [_hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.toggleCode('code12');
    })
  }, _hoisted_215), $setup.code_arr.includes('code12') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_216, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_217];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-checkbox[data-v-d9665a2e],\n    .custom-radio[data-v-d9665a2e] {\n        margin-bottom: 0.5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true */ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true");
/* harmony import */ var _checkbox_radio_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox_radio.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css */ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_checkbox_radio_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-d9665a2e"],['__file',"resources/js/src/views/forms/checkbox_radio.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./checkbox_radio.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true");


/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css");


/***/ })

}]);