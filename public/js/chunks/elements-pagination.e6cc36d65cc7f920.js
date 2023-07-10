"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements-pagination"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/pagination.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/pagination.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  __name: 'pagination',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Pagination'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var rows = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(9);
    var perPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(3);
    var currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(2);

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
      rows: rows,
      perPage: perPage,
      currentPage: currentPage,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
}, "Elements")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Pagination")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#paginationDefault\" class=\"nav-link\">Default</a><a href=\"#paginationSolid\" class=\"nav-link\">Solid</a><a href=\"#paginationIcons\" class=\"nav-link\">Icons</a><a href=\"#paginationIconsRounded\" class=\"nav-link\">Icons and Rounded</a><a href=\"#paginationNo-spacing\" class=\"nav-link\">No Spacing</a>", 5);

var _hoisted_11 = [_hoisted_6];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/components/pagination\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/components/pagination </a></div></div></div>", 1);

var _hoisted_13 = {
  "class": "row layout-top-spacing"
};
var _hoisted_14 = {
  id: "paginationDefault",
  "class": "col-xl-12 col-sm-12 layout-spacing"
};
var _hoisted_15 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Default")])])], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "panel-body text-center"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "paginating-container pagination-default flex-column align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination mb-4 b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to first page",
  "class": "page-link"
}, "First")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, "Prev")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, "Next")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to last page",
  "class": "page-link"
}, "Last")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, "Prev")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, "Next")])])], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "code-section-container show-code"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_21 = [_hoisted_20];
var _hoisted_22 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"paginating-container pagination-default flex-column align-items-center\">\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination mb-4 b-pagination\">\n        <li role=\"presentation\" class=\"page-item\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to first page\" class=\"page-link\">First</button></li>\n        <li role=\"presentation\" class=\"page-item\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">Prev</button></li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">Next</button></li>\n        <li role=\"presentation\" class=\"page-item\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to last page\" class=\"page-link\">Last</button></li>\n    </ul>\n\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination b-pagination\">\n        <li role=\"presentation\" class=\"page-item\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">Prev</button></li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">Next</button></li>\n    </ul>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_24 = {
  id: "paginationSolid",
  "class": "col-xl-12 col-sm-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Solid")])])], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "panel-body text-center"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "paginating-container pagination-solid flex-column align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination mb-4 b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item first"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to first page",
  "class": "page-link"
}, "First")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, "Prev")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, "Next")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to last page",
  "class": "page-link"
}, "Last")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, "Prev")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, "Next")])])], -1
/* HOISTED */
);

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

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"paginating-container pagination-solid flex-column align-items-center\">\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination mb-4 b-pagination\">\n        <li role=\"presentation\" class=\"page-item first\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to first page\" class=\"page-link\">First</button>\n        </li>\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">Prev</button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">Next</button></li>\n        <li role=\"presentation\" class=\"page-item last\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to last page\" class=\"page-link\">Last</button></li>\n    </ul>\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination b-pagination\">\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">Prev</button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\"><button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">Next</button></li>\n    </ul>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_34 = {
  id: "paginationIcons",
  "class": "col-xl-12 col-sm-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "With Icons")])])], -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "panel-body text-center"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "paginating-container pagination-solid flex-column align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination mb-4 b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item first"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to first page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 19l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 5l7 7-7 7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to last page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 19l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 5l7 7-7 7"
})])])])])], -1
/* HOISTED */
);

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

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"paginating-container pagination-solid flex-column align-items-center\">\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination mb-4 b-pagination\">\n        <li role=\"presentation\" class=\"page-item first\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to first page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19l-7-7 7-7m8 14l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item last\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to last page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 5l7 7-7 7M5 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n    </ul>\n\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination b-pagination\">\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n    </ul>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_44 = {
  id: "paginationIconsRounded",
  "class": "col-xl-12 col-sm-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "With Icons and Rounded")])])], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "panel-body text-center"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "paginating-container pagination-solid flex-column align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination mb-4 rounded b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item first"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to first page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 19l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 5l7 7-7 7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to last page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination rounded b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 19l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 5l7 7-7 7"
})])])])])], -1
/* HOISTED */
);

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

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"paginating-container pagination-solid flex-column align-items-center\">\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination mb-4 rounded b-pagination\">\n        <li role=\"presentation\" class=\"page-item first\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to first page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19l-7-7 7-7m8 14l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item last\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to last page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 5l7 7-7 7M5 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n    </ul>\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination rounded b-pagination\">\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n    </ul>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_54 = {
  id: "paginationNo-spacing",
  "class": "col-xl-12 col-sm-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "No Spacing")])])], -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "panel-body text-center"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "paginating-container pagination-no_spacing flex-column align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination mb-4 b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item first"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to first page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 19l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 5l7 7-7 7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to last page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menubar",
  "aria-disabled": "false",
  "aria-label": "Pagination",
  "class": "pagination b-pagination"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to previous page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 19l-7-7 7-7"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 1",
  "aria-checked": "false",
  "aria-posinset": "1",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 1 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 2",
  "aria-checked": "true",
  "aria-posinset": "2",
  "aria-setsize": "3",
  tabindex: "0",
  "class": "page-link"
}, " 2 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitemradio",
  type: "button",
  "aria-label": "Go to page 3",
  "aria-checked": "false",
  "aria-posinset": "3",
  "aria-setsize": "3",
  tabindex: "-1",
  "class": "page-link"
}, " 3 ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "page-item next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  role: "menuitem",
  type: "button",
  tabindex: "-1",
  "aria-label": "Go to next page",
  "class": "page-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 5l7 7-7 7"
})])])])])], -1
/* HOISTED */
);

var _hoisted_59 = {
  "class": "code-section-container show-code"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_61 = [_hoisted_60];
var _hoisted_62 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"paginating-container pagination-no_spacing flex-column align-items-center\">\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination mb-4 b-pagination\">\n        <li role=\"presentation\" class=\"page-item first\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to first page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M11 19l-7-7 7-7m8 14l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item last\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to last page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 5l7 7-7 7M5 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n    </ul>\n\n    <ul role=\"menubar\" aria-disabled=\"false\" aria-label=\"Pagination\" class=\"pagination b-pagination\">\n        <li role=\"presentation\" class=\"page-item prev\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to previous page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"></path>\n                </svg>\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 1\" aria-checked=\"false\" aria-posinset=\"1\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                1\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item active\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 2\" aria-checked=\"true\" aria-posinset=\"2\" aria-setsize=\"3\" tabindex=\"0\" class=\"page-link\">\n                2\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item\">\n            <button role=\"menuitemradio\" type=\"button\" aria-label=\"Go to page 3\" aria-checked=\"false\" aria-posinset=\"3\" aria-setsize=\"3\" tabindex=\"-1\" class=\"page-link\">\n                3\n            </button>\n        </li>\n        <li role=\"presentation\" class=\"page-item next\">\n            <button role=\"menuitem\" type=\"button\" tabindex=\"-1\" aria-label=\"Go to next page\" class=\"page-link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"></path>\n                </svg>\n            </button>\n        </li>\n    </ul>\n</div>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_11)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_21), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_23];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_31), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_33];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_51), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_53];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_61), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_63];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/elements/pagination.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/elements/pagination.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pagination_vue_vue_type_template_id_3524acd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=3524acd0 */ "./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0");
/* harmony import */ var _pagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/elements/pagination.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_pagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_pagination_vue_vue_type_template_id_3524acd0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/elements/pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/elements/pagination.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/elements/pagination.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pagination_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pagination.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/pagination.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pagination_vue_vue_type_template_id_3524acd0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pagination_vue_vue_type_template_id_3524acd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pagination.vue?vue&type=template&id=3524acd0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0");


/***/ })

}]);