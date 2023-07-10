"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-basic"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/basic.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/basic.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
  __name: 'basic',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Forms'
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/basic.vue?vue&type=template&id=fd0d4f98":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/basic.vue?vue&type=template&id=fd0d4f98 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Basic")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#basic\" class=\"nav-link\">Basic</a><a href=\"#form_grid_layouts\" class=\"nav-link\">Form Grid Layouts</a><a href=\"#helper_text\" class=\"nav-link\">Helper Text</a><a href=\"#form_sizing\" class=\"nav-link\">Sizing</a><a href=\"#readonly_input\" class=\"nav-link\">Readonly Input</a><a href=\"#html_custom_file_upload\" class=\"nav-link\">HTML Custom File Upload</a><a href=\"#disabled_form\" class=\"nav-link\">Disabled Fields</a><a href=\"#custom_bs_forms\" class=\"nav-link\">Custom Bootstrap Forms</a>", 8);

var _hoisted_14 = [_hoisted_6];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/forms\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/forms </a></div></div></div>", 1);

var _hoisted_16 = {
  "class": "row layout-top-spacing"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"basic\" class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Text</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div class=\"form-group\"><p>Use input <code>type=&quot;text&quot;</code>.</p><input type=\"text\" class=\"form-control\" placeholder=\"Some Text...\" required><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></div></form></div></div></div></div></div><div class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Password</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div class=\"form-group\"><p>Use input <code>type=&quot;password&quot;</code>.</p><input type=\"password\" class=\"form-control\" placeholder=\"Password\" required><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></div></form></div></div></div></div></div><div class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Email</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div><p>Use input <code>type=&quot;email&quot;</code>.</p><input type=\"email\" class=\"form-control\" placeholder=\"email@mail.com\" required><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></div></form></div></div></div></div></div><div class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Url</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div><p>Use input <code>type=&quot;url&quot;</code>.</p><input type=\"url\" class=\"form-control\" placeholder=\"https://dummyurl.com\" required><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></div></form></div></div></div></div></div><div class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Telephone</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div><p>Use input <code>type=&quot;tel&quot;</code>.</p><input type=\"tel\" class=\"form-control\" placeholder=\"6-(666)-111-7777\" required><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></div></form></div></div></div></div></div><div class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Search</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div><p>Use input <code>type=&quot;search&quot;</code>.</p><input type=\"search\" class=\"form-control\" placeholder=\"Search...\" required><button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button></div></form></div></div></div></div></div><div class=\"col-lg-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Input Range</h4></div></div></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><form><div><p>Use input <code>type=&quot;range&quot;</code>.</p><input type=\"range\" class=\"form-range\" required></div></form></div></div></div></div></div>", 7);

var _hoisted_24 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_25 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Input With Label")])])], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "panel-body"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-6 col-12 mx-auto\"><div class=\"form-group\"><label for=\"fullname\" class=\"col-form-label\">Full Name</label><div><input id=\"fullname\" type=\"text\" value=\"Alan Green\" class=\"form-control\"></div></div></div></div>", 1);

var _hoisted_29 = {
  "class": "code-section-container show-code"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_31 = [_hoisted_30];
var _hoisted_32 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Input with label -->\n<div class=\"form-group\">\n    <label for=\"fullname\" class=\"col-form-label\">Full Name</label>\n    <div>\n        <input id=\"fullname\" type=\"text\" value=\"Alan Green\" class=\"form-control\" />\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-12 col-12 layout-spacing\"><div class=\"statbox panel box box-shadow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12\"><h4>Form controls</h4></div></div></div><div class=\"panel-body\"><form><div class=\"mb-3\"><label for=\"email\" class=\"col-form-label\">Email address</label><div><input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"name@example.com\"></div></div><div class=\"mb-3\"><label for=\"select\" class=\"col-form-label\">Example select</label><div><select id=\"select\" class=\"form-select\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select></div></div><div class=\"mb-3\"><label for=\"multiselect\" class=\"col-form-label\">Example multiple select</label><div><select id=\"multiselect\" multiple class=\"form-select\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select></div></div><div class=\"mb-3\"><label for=\"textarea\" class=\"col-form-label\">Email textarea</label><div><textarea id=\"textarea\" class=\"form-control\" style=\"height:95px;\"></textarea></div></div><div class=\"mb-3\"><label for=\"file\" class=\"col-form-label\">Email file input</label><div><input id=\"file\" type=\"file\" class=\"form-control-file\"></div></div><button type=\"submit\" class=\"btn btn-primary my-4\">Submit</button></form></div></div></div>", 1);

var _hoisted_35 = {
  "class": "row"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "form_grid_layouts",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Form Grid Layouts")])], -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "col-lg-12 col-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Form grid")])])], -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "panel-body"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"row mb-4\"><div class=\"col\"><input class=\"form-control\" placeholder=\"First name\"></div><div class=\"col\"><input class=\"form-control\" placeholder=\"Last name\"></div></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form>", 1);

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

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Form Grid -->\n<form>\n    <div class=\"row mb-4\">\n        <div class=\"col\">\n            <input class=\"form-control\" placeholder=\"First name\" />\n        </div>\n        <div class=\"col\">\n            <input class=\"form-control\" placeholder=\"Last name\" />\n        </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "col-lg-12 col-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Form row")])])], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "panel-body"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"row mb-4\"><div class=\"col-sm-6\"><input class=\"form-control\" placeholder=\"First name\"></div><div class=\"col-sm-6\"><input class=\"form-control\" placeholder=\"Last name\"></div></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form>", 1);

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

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Form row -->\n<form>\n    <div class=\"row mb-4\">\n        <div class=\"col-sm-6\">\n            <input class=\"form-control\" placeholder=\"First name\" />\n        </div>\n        <div class=\"col-sm-6\">\n            <input class=\"form-control\" placeholder=\"Last name\" />\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "col-lg-12 col-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Form groups")])])], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "panel-body"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"mb-4\"><label class=\"col-form-label\" for=\"example_lable\">Example label</label><div><input type=\"text\" id=\"example_lable\" class=\"form-control\" placeholder=\"Example input\"></div></div><div class=\"mb-4\"><label class=\"col-form-label\" for=\"another_lable\">Another label</label><div><input type=\"text\" id=\"another_lable\" class=\"form-control\" placeholder=\"Another input\"></div></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form>", 1);

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

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Form groups -->\n<form>\n    <div class=\"mb-4\">\n        <label class=\"col-form-label\" for=\"example_lable\">Example label</label>\n        <div>\n            <input type=\"text\" id=\"example_lable\" class=\"form-control\" placeholder=\"Example input\" />\n        </div>\n    </div>\n    <div class=\"mb-4\">\n        <label class=\"col-form-label\" for=\"another_lable\">Another label</label>\n        <div>\n            <input type=\"text\" id=\"another_lable\" class=\"form-control\" placeholder=\"Another input\" />\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n", -1
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Column sizing")])])], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "panel-body"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"row mb-4\"><div class=\"col-sm-7\"><input class=\"form-control\" placeholder=\"City\"></div><div class=\"col-sm\"><input class=\"form-control\" placeholder=\"State\"></div><div class=\"col-sm\"><input class=\"form-control\" placeholder=\"Zip\"></div></div><button type=\"submit\" class=\"btn btn-primary\">Submit</button></form>", 1);

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

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Column sizing -->\n<form>\n    <div class=\"row mb-4\">\n        <div class=\"col-sm-7\">\n            <input class=\"form-control\" placeholder=\"City\" />\n        </div>\n        <div class=\"col-sm\">\n            <input class=\"form-control\" placeholder=\"State\" />\n        </div>\n        <div class=\"col-sm\">\n            <input class=\"form-control\" placeholder=\"Zip\" />\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_77 = {
  "class": "row"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "helper_text",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Helper Text")])], -1
/* HOISTED */
);

var _hoisted_79 = {
  "class": "col-xl-12 col-lg-12 col-12 layout-spacing"
};
var _hoisted_80 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Input with help text ( Default Left)")])])], -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "panel-body"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-7 mx-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Use "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "small"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" tag and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".text-muted"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" for helper text.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "I am the helper text.")])])], -1
/* HOISTED */
);

var _hoisted_84 = {
  "class": "code-section-container show-code"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_86 = [_hoisted_85];
var _hoisted_87 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Input with help text -->\n<div>\n    <p>Use <code>small</code> tag and <code>.text-muted</code> for helper text.</p>\n    <input type=\"text\" class=\"form-control\" />\n    <small id=\"sh-text1\" class=\"block text-muted\">I am the helper text.</small>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_89 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_90 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Input with badge help text (Default Left)")])])], -1
/* HOISTED */
);

var _hoisted_92 = {
  "class": "panel-body"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-xl-7 mx-auto\"><div><p>Wrap the <code>small</code> tag inside the <code>span</code> tag with <code>.badge</code></p><input type=\"text\" class=\"form-control\"><div class=\"mt-1\"><span class=\"badge badge-primary\"><small id=\"sh-text4\" class=\"d-block mt-0\">I am the helper text.</small></span></div></div></div></div>", 1);

var _hoisted_94 = {
  "class": "code-section-container show-code"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_96 = [_hoisted_95];
var _hoisted_97 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Input with badge help text -->\n<div>\n    <p>Wrap the <code>small</code> tag inside the <code>span</code> tag with <code>.badge</code></p>\n    <input type=\"text\" class=\"form-control\" />\n    <div class=\"mt-1\">\n        <span class=\"badge badge-primary\">\n            <small id=\"sh-text4\" class=\"d-block mt-0\">I am the helper text.</small>\n        </span>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_99 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_100 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Input with block badge help text (Default Left)")])])], -1
/* HOISTED */
);

var _hoisted_102 = {
  "class": "panel-body"
};

var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-xl-7 mx-auto\"><div><p>Use <code>.w-100</code> class to the <code>span</code> tag to make block.</p><input class=\"form-control\"><div class=\"mt-1\"><span class=\"badge badge-primary w-100\"><small id=\"sh-text7\" class=\"d-block mt-0 text-start\">I am the helper text.</small></span></div></div></div></div>", 1);

var _hoisted_104 = {
  "class": "code-section-container show-code"
};

var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_106 = [_hoisted_105];
var _hoisted_107 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Input with block badge help text -->\n<div>\n    <p>Use <code>.w-100</code> class to the <code>span</code> tag to make block.</p>\n    <input class=\"form-control\" />\n    <div class=\"mt-1\">\n        <span class=\"badge badge-primary w-100\">\n            <small id=\"sh-text7\" class=\"d-block mt-0 text-start\">I am the helper text.</small>\n        </span>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_109 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_110 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Inline Help text")])])], -1
/* HOISTED */
);

var _hoisted_112 = {
  "class": "panel-body"
};

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form class=\"d-flex align-items-center mb-4\"><div class=\"d-block text-start\"><label class=\"col-form-label\">Password</label><div><input type=\"password\" class=\"form-control d-inline-block w-auto mt-2\"><small id=\"passwordHelpInline\" class=\"text-muted\"> Min 8-20 char </small></div></div></form><button type=\"submit\" class=\"btn btn-primary\">Submit</button>", 2);

var _hoisted_115 = {
  "class": "code-section-container show-code"
};

var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_117 = [_hoisted_116];
var _hoisted_118 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Inline help text -->\n<form class=\"d-flex align-items-center mb-4\">\n    <div class=\"d-block text-start\">\n        <label class=\"col-form-label\">Password</label>\n        <div>\n            <input type=\"password\" class=\"form-control d-inline-block w-auto mt-2\" />\n            <small id=\"passwordHelpInline\" class=\"text-muted\"> Min 8-20 char </small>\n        </div>\n    </div>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_120 = {
  "class": "row"
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "form_sizing",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Sizing")])], -1
/* HOISTED */
);

var _hoisted_122 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_123 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Input Fields")])])], -1
/* HOISTED */
);

var _hoisted_125 = {
  "class": "panel-body"
};

var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-xl-4\"><div><label class=\"col-form-label\">Large Input</label><div><input type=\"text\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\"></div></div></div><div class=\"col-xl-4\"><div><label class=\"col-form-label\">Default Input</label><div><input type=\"text\" class=\"form-control\" placeholder=\"Default input\"></div></div></div><div class=\"col-xl-4\"><div><label class=\"col-form-label\">Small Input</label><div><input type=\"text\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\"></div></div></div></div>", 1);

var _hoisted_127 = {
  "class": "code-section-container show-code"
};

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_129 = [_hoisted_128];
var _hoisted_130 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Large Input -->\n    <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\" />\n\n<!-- Default Input -->\n    <input type=\"text\" class=\"form-control\" placeholder=\"Default input\" />\n\n<!-- Small Input -->\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\" />\n", -1
/* HOISTED */
);

var _hoisted_132 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_133 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select Field")])])], -1
/* HOISTED */
);

var _hoisted_135 = {
  "class": "panel-body"
};

var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-xl-4 mb-xl-0 mb-2\"><select class=\"form-select form-select-lg\"><option value=\"Large select\">Large select</option><option value=\"One\">One</option><option value=\"Two\">Two</option><option value=\"Three\">Three</option></select></div><div class=\"col-xl-4 mb-xl-0 mb-2\"><select class=\"form-select\"><option value=\"Default select\">Default select</option><option value=\"One\">One</option><option value=\"Two\">Two</option><option value=\"Three\">Three</option></select></div><div class=\"col-xl-4 mb-xl-0 mb-2\"><select class=\"form-select form-select-sm\"><option value=\"Small select\">Small select</option><option value=\"One\">One</option><option value=\"Two\">Two</option><option value=\"Three\">Three</option></select></div></div>", 1);

var _hoisted_137 = {
  "class": "code-section-container show-code"
};

var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_139 = [_hoisted_138];
var _hoisted_140 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_141 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Large select -->\n<select class=\"form-select form-select-lg\">\n    <option value=\"Large select\">Large select</option>\n    <option value=\"One\">One</option>\n    <option value=\"Two\">Two</option>\n    <option value=\"Three\">Three</option>\n</select>\n\n<!-- Default select -->\n<select class=\"form-select\">\n    <option value=\"Default select\">Default select</option>\n    <option value=\"One\">One</option>\n    <option value=\"Two\">Two</option>\n    <option value=\"Three\">Three</option>\n</select>\n\n<!-- Small select -->\n<select class=\"form-select form-select-sm\">\n    <option value=\"Small select\">Small select</option>\n    <option value=\"One\">One</option>\n    <option value=\"Two\">Two</option>\n    <option value=\"Three\">Three</option>\n</select>\n", -1
/* HOISTED */
);

var _hoisted_142 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_143 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Horizontal form label sizing")])])], -1
/* HOISTED */
);

var _hoisted_145 = {
  "class": "panel-body"
};

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"row mb-4\"><label class=\"col-sm-2 col-form-label col-form-label-sm\" for=\"colFormLabelSm\">Email</label><div class=\"col-sm-10\"><input type=\"email\" id=\"colFormLabelSm\" class=\"form-control form-control-sm\" placeholder=\"col-form-label-sm\"></div></div><div class=\"row mb-4\"><label class=\"col-sm-2 col-form-label col-form-label-sm\" for=\"colFormLabelMd\">Email</label><div class=\"col-sm-10\"><input type=\"email\" id=\"colFormLabelMd\" class=\"form-control\" placeholder=\"col-form-label\"></div></div><div class=\"row mb-4\"><label class=\"col-sm-2 col-form-label col-form-label-sm\" for=\"colFormLabelLg\">Email</label><div class=\"col-sm-10\"><input type=\"email\" id=\"colFormLabelLg\" class=\"form-control form-control-lg\" placeholder=\"col-form-label-lg\"></div></div><button type=\"submit\" class=\"btn btn-primary mb-4\">Submit</button></form>", 1);

var _hoisted_147 = {
  "class": "code-section-container show-code"
};

var _hoisted_148 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_149 = [_hoisted_148];
var _hoisted_150 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Horizontal form label sizing -->\n<form>\n    <div class=\"row mb-4\">\n        <label class=\"col-sm-2 col-form-label col-form-label-sm\" for=\"colFormLabelSm\">Email</label>\n        <div class=\"col-sm-10\">\n            <input type=\"email\" id=\"colFormLabelSm\" class=\"form-control form-control-sm\" placeholder=\"col-form-label-sm\" />\n        </div>\n    </div>\n    <div class=\"row mb-4\">\n        <label class=\"col-sm-2 col-form-label col-form-label-sm\" for=\"colFormLabelMd\">Email</label>\n        <div class=\"col-sm-10\">\n            <input type=\"email\" id=\"colFormLabelMd\" class=\"form-control\" placeholder=\"col-form-label\" />\n        </div>\n    </div>\n    <div class=\"row mb-4\">\n        <label class=\"col-sm-2 col-form-label col-form-label-sm\" for=\"colFormLabelLg\">Email</label>\n        <div class=\"col-sm-10\">\n            <input type=\"email\" id=\"colFormLabelLg\" class=\"form-control form-control-lg\" placeholder=\"col-form-label-lg\" />\n        </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary mb-4\">Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_152 = {
  "class": "row"
};

var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "readonly_input",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Readonly")])], -1
/* HOISTED */
);

var _hoisted_154 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_155 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Input Readonly")])])], -1
/* HOISTED */
);

var _hoisted_157 = {
  "class": "panel-body"
};

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Readonly input here…",
  readonly: ""
}, null, -1
/* HOISTED */
);

var _hoisted_159 = {
  "class": "code-section-container show-code"
};

var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_161 = [_hoisted_160];
var _hoisted_162 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_163 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Readonly -->\n<input placeholder=\"Readonly input here…\" readonly></input>\n", -1
/* HOISTED */
);

var _hoisted_164 = {
  "class": "row"
};

var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "html_custom_file_upload",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "HTML Custom File Upload")])], -1
/* HOISTED */
);

var _hoisted_166 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_167 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "File Upload")])])], -1
/* HOISTED */
);

var _hoisted_169 = {
  "class": "panel-body"
};

var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "custom-file mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "ufile",
  type: "file",
  "class": "custom-file-input"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "ufile",
  "data-browse": "Browse",
  "class": "custom-file-label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "d-block form-file-text"
}, "No file chosen ")])], -1
/* HOISTED */
);

var _hoisted_171 = {
  "class": "code-section-container show-code"
};

var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_173 = [_hoisted_172];
var _hoisted_174 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_175 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- File Upload -->\n<div class=\"custom-file mb-3\">\n    <input id=\"ufile\" type=\"file\" class=\"custom-file-input\" />\n    <label for=\"ufile\" data-browse=\"Browse\" class=\"custom-file-label\">\n        <span class=\"d-block form-file-text\">No file chosen </span>\n    </label>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_176 = {
  "class": "row"
};

var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "disabled_form",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Disabled")])], -1
/* HOISTED */
);

var _hoisted_178 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_179 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Disabled Fields")])])], -1
/* HOISTED */
);

var _hoisted_181 = {
  "class": "panel-body"
};

var _hoisted_182 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form><div class=\"mb-3\"><label class=\"col-form-label\">Disabled input</label><div><input type=\"text\" class=\"form-control\" placeholder=\"Disabled input\" value=\"Disabled input\" disabled></div></div><div class=\"mb-3\"><label class=\"col-form-label\">Disabled select menu </label><div><select class=\"form-select w-100\" disabled><option value=\"\">Disabled select</option></select></div></div><div class=\"mb-3\"><div class=\"checkbox-primary custom-control custom-checkbox\"><input type=\"checkbox\" disabled=\"disabled\" class=\"custom-control-input\" value=\"true\" id=\"chkdisabled\"><label class=\"custom-control-label\" for=\"chkdisabled\">Can&#39;t check this</label></div></div><button type=\"submit\" class=\"btn btn-primary\" disabled>Submit</button></form>", 1);

var _hoisted_183 = {
  "class": "code-section-container show-code"
};

var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_185 = [_hoisted_184];
var _hoisted_186 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Disabled Fields -->\n<form>\n    <div class=\"mb-3\">\n        <label class=\"col-form-label\">Disabled input</label>\n        <div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Disabled input\" value=\"Disabled input\" disabled />\n        </div>\n    </div>\n    <div class=\"mb-3\">\n        <label class=\"col-form-label\">Disabled select menu </label>\n        <div>\n            <select class=\"form-select w-100\" disabled>\n                <option value=\"\">Disabled select</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"mb-3\">\n        <div class=\"checkbox-primary custom-control custom-checkbox\">\n            <input type=\"checkbox\" disabled=\"disabled\" class=\"custom-control-input\" value=\"true\" id=\"chkdisabled\" />\n            <label class=\"custom-control-label\" for=\"chkdisabled\">Can't check this</label>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" disabled>Submit</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_188 = {
  "class": "row layout-spacing"
};

var _hoisted_189 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "custom_bs_forms",
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "seperator-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Custom")])], -1
/* HOISTED */
);

var _hoisted_190 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_191 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Checkboxes")])])], -1
/* HOISTED */
);

var _hoisted_193 = {
  "class": "panel-body"
};

var _hoisted_194 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "checkbox-primary custom-control custom-checkbox"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "checkbox",
  "class": "custom-control-input",
  value: "true",
  id: "chk1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "chk1"
}, "Check this custom checkbox")], -1
/* HOISTED */
);

var _hoisted_195 = {
  "class": "code-section-container show-code"
};

var _hoisted_196 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_197 = [_hoisted_196];
var _hoisted_198 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Custom Checkboxes-->\n<div class=\"checkbox-primary custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" value=\"true\" id=\"chk1\" />\n    <label class=\"custom-control-label\" for=\"chk1\">Check this custom checkbox</label>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_200 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_201 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_202 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Inline radio")])])], -1
/* HOISTED */
);

var _hoisted_203 = {
  "class": "panel-body"
};

var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "radiogroup",
  tabindex: "-1",
  "class": "bv-no-focus-ring"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "radio-classic radio-primary custom-control d-inline-flex custom-radio me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "radio",
  "class": "custom-control-input",
  value: "1",
  id: "rdo1",
  name: "rdoinline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "rdo1"
}, "Toggle this custom radio")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "radio-classic radio-primary custom-control d-inline-flex custom-radio me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "radio",
  "class": "custom-control-input",
  value: "2",
  id: "rdo2",
  name: "rdoinline"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "rdo2"
}, "Toggle this custom radio")])], -1
/* HOISTED */
);

var _hoisted_205 = {
  "class": "code-section-container show-code"
};

var _hoisted_206 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_207 = [_hoisted_206];
var _hoisted_208 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_209 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Inline radio -->\n<div role=\"radiogroup\" tabindex=\"-1\" class=\"bv-no-focus-ring\">\n    <div class=\"radio-classic radio-primary custom-control d-inline-flex custom-radio me-3\">\n        <input type=\"radio\" class=\"custom-control-input\" value=\"1\" id=\"rdo1\" name=\"rdoinline\" />\n        <label class=\"custom-control-label\" for=\"rdo1\">Toggle this custom radio</label>\n    </div>\n    <div class=\"radio-classic radio-primary custom-control d-inline-flex custom-radio me-3\">\n        <input type=\"radio\" class=\"custom-control-input\" value=\"2\" id=\"rdo2\" name=\"rdoinline\" />\n        <label class=\"custom-control-label\" for=\"rdo2\">Toggle this custom radio</label>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_210 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_211 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Radio")])])], -1
/* HOISTED */
);

var _hoisted_213 = {
  "class": "panel-body"
};

var _hoisted_214 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div><div class=\"radio-classic radio-primary mb-3 custom-control custom-radio\"><input type=\"radio\" name=\"rdo_1\" class=\"custom-control-input\" value=\"1\" id=\"rdo_1\"><label class=\"custom-control-label\" for=\"rdo_1\">Toggle this custom radio</label></div><div class=\"radio-classic radio-primary custom-control custom-radio\"><input type=\"radio\" name=\"rdo_1\" class=\"custom-control-input\" value=\"2\" id=\"rdo_2\"><label class=\"custom-control-label\" for=\"rdo_2\">Or toggle this other custom radio</label></div></div>", 1);

var _hoisted_215 = {
  "class": "code-section-container show-code"
};

var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_217 = [_hoisted_216];
var _hoisted_218 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_219 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- radio -->\n<div>\n    <div class=\"radio-classic radio-primary mb-3 custom-control custom-radio\">\n        <input type=\"radio\" name=\"rdo_1\" class=\"custom-control-input\" value=\"1\" id=\"rdo_1\" />\n        <label class=\"custom-control-label\" for=\"rdo_1\">Toggle this custom radio</label>\n    </div>\n    <div class=\"radio-classic radio-primary custom-control custom-radio\">\n        <input type=\"radio\" name=\"rdo_1\" class=\"custom-control-input\" value=\"2\" id=\"rdo_2\" />\n        <label class=\"custom-control-label\" for=\"rdo_2\">Or toggle this other custom radio</label>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_220 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_221 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_222 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Disabled")])])], -1
/* HOISTED */
);

var _hoisted_223 = {
  "class": "panel-body"
};

var _hoisted_224 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"checkbox-primary mb-3 custom-control custom-checkbox\"><input type=\"checkbox\" disabled=\"disabled\" class=\"custom-control-input\" id=\"chk_dis_1\"><label class=\"custom-control-label\" for=\"chk_dis_1\">Check this custom checkbox</label></div><div class=\"radio-classic radio-primary mb-4 custom-control custom-radio\"><input type=\"radio\" disabled=\"disabled\" class=\"custom-control-input\" id=\"rdo_dis_1\"><label class=\"custom-control-label\" for=\"rdo_dis_1\">Toggle this custom radio</label></div>", 2);

var _hoisted_226 = {
  "class": "code-section-container show-code"
};

var _hoisted_227 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_228 = [_hoisted_227];
var _hoisted_229 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_230 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Disabled -->\n<div class=\"checkbox-primary mb-3 custom-control custom-checkbox\">\n    <input type=\"checkbox\" disabled=\"disabled\" class=\"custom-control-input\" id=\"chk_dis_1\" />\n    <label class=\"custom-control-label\" for=\"chk_dis_1\">Check this custom checkbox</label>\n</div>\n\n<div class=\"radio-classic radio-primary mb-4 custom-control custom-radio\">\n    <input type=\"radio\" disabled=\"disabled\" class=\"custom-control-input\" id=\"rdo_dis_1\" />\n    <label class=\"custom-control-label\" for=\"rdo_dis_1\">Toggle this custom radio</label>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_231 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_232 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_233 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select menu")])])], -1
/* HOISTED */
);

var _hoisted_234 = {
  "class": "panel-body"
};

var _hoisted_235 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<select class=\"mb-4 form-select w-100\"><option selected>Open this select menu</option><option value=\"1\">One</option><option value=\"2\">Two</option><option value=\"3\">Three</option></select>", 1);

var _hoisted_236 = {
  "class": "code-section-container show-code"
};

var _hoisted_237 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_238 = [_hoisted_237];
var _hoisted_239 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_240 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Select menu -->\n<select class=\"mb-4 form-select w-100\">\n    <option selected>Open this select menu</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n</select>\n", -1
/* HOISTED */
);

var _hoisted_241 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_242 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_243 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select menu sizing")])])], -1
/* HOISTED */
);

var _hoisted_244 = {
  "class": "panel-body"
};

var _hoisted_245 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<select class=\"mb-4 form-select form-select-lg w-100\"><option selected>Open this select menu</option><option value=\"1\">One</option><option value=\"2\">Two</option><option value=\"3\">Three</option></select><select class=\"mb-4 form-select form-select-sm w-100\"><option selected>Open this select menu</option><option value=\"1\">One</option><option value=\"2\">Two</option><option value=\"3\">Three</option></select>", 2);

var _hoisted_247 = {
  "class": "code-section-container show-code"
};

var _hoisted_248 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_249 = [_hoisted_248];
var _hoisted_250 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_251 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!--Large select menu -->\n<select class=\"mb-4 form-select form-select-lg w-100\">\n    <option selected>Open this select menu</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n</select>\n\n<!--Small select menu -->\n<select class=\"mb-4 form-select form-select-sm w-100\">\n    <option selected>Open this select menu</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n</select>\n", -1
/* HOISTED */
);

var _hoisted_252 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_253 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_254 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Multi select")])])], -1
/* HOISTED */
);

var _hoisted_255 = {
  "class": "panel-body"
};

var _hoisted_256 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<select multiple class=\"form-select w-100 h-auto\"><option selected>Open this select menu</option><option value=\"1\">One</option><option value=\"2\">Two</option><option value=\"3\">Three</option></select>", 1);

var _hoisted_257 = {
  "class": "code-section-container show-code"
};

var _hoisted_258 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_259 = [_hoisted_258];
var _hoisted_260 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_261 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Multi select -->\n<select multiple class=\"form-select w-100 h-auto\">\n    <option selected>Open this select menu</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n</select>\n", -1
/* HOISTED */
);

var _hoisted_262 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_263 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_264 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select size")])])], -1
/* HOISTED */
);

var _hoisted_265 = {
  "class": "panel-body"
};

var _hoisted_266 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<select class=\"form-select mb-4 w-100 h-auto\" size=\"4\"><option selected>Open this select menu</option><option value=\"1\">One</option><option value=\"2\">Two</option><option value=\"3\">Three</option><option value=\"4\">Four</option><option value=\"5\">Five</option></select>", 1);

var _hoisted_267 = {
  "class": "code-section-container show-code"
};

var _hoisted_268 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_269 = [_hoisted_268];
var _hoisted_270 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_271 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Select size -->\n<select class=\"form-select mb-4 w-100 h-auto\" size=\"4\">\n    <option selected>Open this select menu</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n    <option value=\"4\">Four</option>\n    <option value=\"5\">Five</option>\n</select>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_14)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_31), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_33];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), _hoisted_34]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_44), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_46];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_54), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_56];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_64), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_66];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_74), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_76];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_86), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_88];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_96), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_98];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [_hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_106), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_108];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [_hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [_hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_117), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_119];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [_hoisted_121, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [_hoisted_124, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [_hoisted_126, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_129), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_131];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [_hoisted_136, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $setup.toggleCode('code11');
    })
  }, _hoisted_139), $setup.code_arr.includes('code11') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_141];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [_hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.toggleCode('code12');
    })
  }, _hoisted_149), $setup.code_arr.includes('code12') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_151];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [_hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [_hoisted_156, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [_hoisted_158, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $setup.toggleCode('code13');
    })
  }, _hoisted_161), $setup.code_arr.includes('code13') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_163];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [_hoisted_170, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $setup.toggleCode('code14');
    })
  }, _hoisted_173), $setup.code_arr.includes('code14') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_175];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [_hoisted_180, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, [_hoisted_182, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $setup.toggleCode('code15');
    })
  }, _hoisted_185), $setup.code_arr.includes('code15') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_186, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_187];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [_hoisted_189, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [_hoisted_192, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [_hoisted_194, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_195, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $setup.toggleCode('code16');
    })
  }, _hoisted_197), $setup.code_arr.includes('code16') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_198, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_199];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [_hoisted_202, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [_hoisted_204, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_205, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $setup.toggleCode('code17');
    })
  }, _hoisted_207), $setup.code_arr.includes('code17') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_208, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_209];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [_hoisted_212, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [_hoisted_214, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $setup.toggleCode('code18');
    })
  }, _hoisted_217), $setup.code_arr.includes('code18') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_218, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_219];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_220, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [_hoisted_222, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_223, [_hoisted_224, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_226, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $setup.toggleCode('code20');
    })
  }, _hoisted_228), $setup.code_arr.includes('code20') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_230];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_231, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_232, [_hoisted_233, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [_hoisted_235, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_236, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $setup.toggleCode('code21');
    })
  }, _hoisted_238), $setup.code_arr.includes('code21') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_239, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_240];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_241, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_242, [_hoisted_243, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_244, [_hoisted_245, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_247, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $setup.toggleCode('code22');
    })
  }, _hoisted_249), $setup.code_arr.includes('code22') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_250, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_251];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_253, [_hoisted_254, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [_hoisted_256, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_257, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $setup.toggleCode('code23');
    })
  }, _hoisted_259), $setup.code_arr.includes('code23') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_260, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_261];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_262, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_263, [_hoisted_264, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_265, [_hoisted_266, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_267, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $setup.toggleCode('code24');
    })
  }, _hoisted_269), $setup.code_arr.includes('code24') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_270, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_271];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/forms/basic.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/forms/basic.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_vue_vue_type_template_id_fd0d4f98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.vue?vue&type=template&id=fd0d4f98 */ "./resources/js/src/views/forms/basic.vue?vue&type=template&id=fd0d4f98");
/* harmony import */ var _basic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/forms/basic.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_basic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_basic_vue_vue_type_template_id_fd0d4f98__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/forms/basic.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/forms/basic.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/forms/basic.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_basic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_basic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./basic.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/basic.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/forms/basic.vue?vue&type=template&id=fd0d4f98":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/forms/basic.vue?vue&type=template&id=fd0d4f98 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_basic_vue_vue_type_template_id_fd0d4f98__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_basic_vue_vue_type_template_id_fd0d4f98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./basic.vue?vue&type=template&id=fd0d4f98 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/basic.vue?vue&type=template&id=fd0d4f98");


/***/ })

}]);