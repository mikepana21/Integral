"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements-popovers"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/popovers.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/popovers.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/elements/popover.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'popovers',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Popovers'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      initPopover();
    });

    var toggleCode = function toggleCode(name) {
      if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter(function (d) {
          return d != name;
        });
      } else {
        code_arr.value.push(name);
      }
    };

    var initPopover = function initPopover() {
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      popoverTriggerList.map(function (popoverTriggerEl) {
        return new window.bootstrap.Popover(popoverTriggerEl);
      });
    };

    var __returned__ = {
      code_arr: code_arr,
      toggleCode: toggleCode,
      initPopover: initPopover,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028 ***!
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
}, "Elements")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Popovers")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#popoverDefault\" class=\"nav-link\">Default</a><a href=\"#popoverDirections\" class=\"nav-link\">Directions</a><a href=\"#popoverDismissible\" class=\"nav-link\">Dismissible</a><a href=\"#popoverOptions\" class=\"nav-link\">Options</a><a href=\"#popoverColors\" class=\"nav-link\">Colors</a>", 5);

var _hoisted_11 = [_hoisted_6];

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/components/popovers\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/components/popovers </a></div></div></div>", 1);

var _hoisted_13 = {
  "class": "row layout-top-spacing"
};
var _hoisted_14 = {
  id: "popoverDefault",
  "class": "col-xl-12 col-lg-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Popover")])])], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "panel-body text-center"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  target: "_self",
  "data-bs-toggle": "popover",
  "data-bs-placement": "left",
  "data-bs-content": "Tooltip using ANCHOR tag",
  "class": "btn btn-primary mb-3 me-2"
}, "Link", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-bs-toggle": "popover",
  "data-bs-content": "Tooltip using BUTTON tag",
  "class": "btn btn-success mb-3"
}, "Button", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "code-section-container show-code"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_22 = [_hoisted_21];
var _hoisted_23 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<a href=\"#\" target=\"_self\" data-bs-toggle=\"popover\" data-bs-placement=\"left\" data-bs-content=\"Tooltip using ANCHOR tag\" class=\"btn btn-primary mb-3 me-2\">Link</a>\n\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-content=\"Tooltip using BUTTON tag\" class=\"btn btn-success mb-3\">Button</button>\n", -1
/* HOISTED */
);

var _hoisted_25 = {
  id: "popoverDirections",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_26 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Placement")])])], -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "panel-body tooltip-section"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-6\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-content=\"Tooltip on top\" class=\"btn btn-info mb-4 ms-2\">Popover on top</button></div><div class=\"col-lg-6\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"right\" data-bs-content=\"Tooltip on right\" class=\"btn btn-danger mb-4 ms-2\"> Popover on right </button></div><div class=\"col-lg-6\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"bottom\" data-bs-content=\"Tooltip on bottom\" class=\"btn btn-warning mb-4 ms-2\"> Popover on bottom </button></div><div class=\"col-lg-6\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"left\" data-bs-content=\"Tooltip on left\" class=\"btn btn-secondary mb-4 ms-2\"> Popover on left </button></div></div>", 1);

var _hoisted_30 = {
  "class": "code-section-container show-code"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_32 = [_hoisted_31];
var _hoisted_33 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- TOP -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-content=\"Tooltip on top\" class=\"btn btn-info mb-4 ms-2\">Popover on top</button>\n\n<!-- RIGHT -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"right\" data-bs-content=\"Tooltip on right\" class=\"btn btn-danger mb-4 ms-2\">\n    Popover on right\n</button>\n\n<!-- BOTTOM -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"bottom\" data-bs-content=\"Tooltip on bottom\" class=\"btn btn-warning mb-4 ms-2\">\n    Popover on bottom\n</button>\n\n<!-- LEFT -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"left\" data-bs-content=\"Tooltip on left\" class=\"btn btn-secondary mb-4 ms-2\">\n    Popover on left\n</button>\n", -1
/* HOISTED */
);

var _hoisted_35 = {
  id: "popoverDismissible",
  "class": "col-xl-12 col-lg-12 layout-spacing"
};
var _hoisted_36 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Dismissible popover")])])], -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "panel-body text-center"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-bs-toggle": "popover",
  "data-bs-trigger": "focus",
  "data-bs-placement": "left",
  "data-bs-content": "Lorem ipsum dolor sit.",
  "class": "btn btn-dark mb-3"
}, " Popover on left ", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "code-section-container show-code"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_42 = [_hoisted_41];
var _hoisted_43 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-placement=\"left\" data-bs-content=\"Lorem ipsum dolor sit.\" class=\"btn btn-dark mb-3\">\n    Popover on left\n</button>\n", -1
/* HOISTED */
);

var _hoisted_45 = {
  id: "popoverOptions",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_46 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Options")])])], -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "panel-body align-center basic-tooltip"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-6 mb-4\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"hover\" data-bs-content=\"On Hover\" class=\"btn btn-primary\">On Hover</button></div><div class=\"col-lg-6 mb-4\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-content=\"On Focus\" class=\"btn btn-secondary\">On Focus</button></div><div class=\"col-lg-6 mb-4\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-delay=\"1000\" data-bs-content=\"Delay 1s\" class=\"btn btn-info\">Delay</button></div><div class=\"col-lg-6 mb-4\"><button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-animation=\"false\" data-bs-content=\"Disabled Animation\" class=\"btn btn-dark\"> Disabled Animation </button></div></div>", 1);

var _hoisted_50 = {
  "class": "code-section-container show-code"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_52 = [_hoisted_51];
var _hoisted_53 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- On Hover -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"hover\" data-bs-content=\"On Hover\" class=\"btn btn-primary\">On Hover</button>\n\n<!-- On Focus -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-content=\"On Focus\" class=\"btn btn-secondary\">On Focus</button>\n\n<!-- Delay -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-delay=\"1000\" data-bs-content=\"Delay 1s\" class=\"btn btn-info\">Delay</button>\n\n<!-- Disabled Animation -->\n<button type=\"button\" data-bs-toggle=\"popover\" data-bs-trigger=\"focus\" data-bs-animation=\"false\" data-bs-content=\"Disabled Animation\" class=\"btn btn-dark\">\n    Disabled Animation\n</button>\n", -1
/* HOISTED */
);

var _hoisted_55 = {
  id: "popoverColors",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_56 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Colors")])])], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "panel-body align-center"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Primary\" data-bs-content=\"Primary popover\" data-bs-custom-class=\"popover-primary\" class=\"btn btn-primary mb-2 mx-1\"> Primary </button><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Success\" data-bs-content=\"Success popover\" data-bs-custom-class=\"popover-success\" class=\"btn btn-success mb-2 mx-1\"> Success </button><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Info\" data-bs-content=\"Info popover\" data-bs-custom-class=\"popover-info\" class=\"btn btn-info mb-2 mx-1\"> Info </button><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Danger\" data-bs-content=\"Danger popover\" data-bs-custom-class=\"popover-danger\" class=\"btn btn-danger mb-2 mx-1\"> Danger </button><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Warning\" data-bs-content=\"Warning popover\" data-bs-custom-class=\"popover-warning\" class=\"btn btn-warning mb-2 mx-1\"> Warning </button><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Secondary\" data-bs-content=\"Secondary popover\" data-bs-custom-class=\"popover-secondary\" class=\"btn btn-secondary mb-2 mx-1\"> Secondary </button><button type=\"button\" data-bs-toggle=\"popover\" data-bs-placement=\"top\" data-bs-title=\"Dark\" data-bs-content=\"Dark popover\" data-bs-custom-class=\"popover-dark\" class=\"btn btn-dark mb-2 mx-1\"> Dark </button>", 7);

var _hoisted_66 = {
  "class": "code-section-container show-code"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_68 = [_hoisted_67];
var _hoisted_69 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Primary\"\n    data-bs-content=\"Primary popover\"\n    data-bs-custom-class=\"popover-primary\"\n    class=\"btn btn-primary mb-2 mx-1\"\n>\n    Primary\n</button>\n\n<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Success\"\n    data-bs-content=\"Success popover\"\n    data-bs-custom-class=\"popover-success\"\n    class=\"btn btn-success mb-2 mx-1\"\n>\n    Success\n</button>\n<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Info\"\n    data-bs-content=\"Info popover\"\n    data-bs-custom-class=\"popover-info\"\n    class=\"btn btn-info mb-2 mx-1\"\n>\n    Info\n</button>\n<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Danger\"\n    data-bs-content=\"Danger popover\"\n    data-bs-custom-class=\"popover-danger\"\n    class=\"btn btn-danger mb-2 mx-1\"\n>\n    Danger\n</button>\n<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Warning\"\n    data-bs-content=\"Warning popover\"\n    data-bs-custom-class=\"popover-warning\"\n    class=\"btn btn-warning mb-2 mx-1\"\n>\n    Warning\n</button>\n<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Secondary\"\n    data-bs-content=\"Secondary popover\"\n    data-bs-custom-class=\"popover-secondary\"\n    class=\"btn btn-secondary mb-2 mx-1\"\n>\n    Secondary\n</button>\n<button\n    type=\"button\"\n    data-bs-toggle=\"popover\"\n    data-bs-placement=\"top\"\n    data-bs-title=\"Dark\"\n    data-bs-content=\"Dark popover\"\n    data-bs-custom-class=\"popover-dark\"\n    class=\"btn btn-dark mb-2 mx-1\"\n>\n    Dark\n</button>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_11)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_22), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_32), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_34];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_42), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_44];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_52), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_54];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_68), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_70];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/elements/popovers.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/elements/popovers.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popovers_vue_vue_type_template_id_9dfb8028__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popovers.vue?vue&type=template&id=9dfb8028 */ "./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028");
/* harmony import */ var _popovers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popovers.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/elements/popovers.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_popovers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_popovers_vue_vue_type_template_id_9dfb8028__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/elements/popovers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/elements/popovers.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/elements/popovers.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_popovers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_popovers_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./popovers.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/popovers.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_popovers_vue_vue_type_template_id_9dfb8028__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_popovers_vue_vue_type_template_id_9dfb8028__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./popovers.vue?vue&type=template&id=9dfb8028 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028");


/***/ })

}]);