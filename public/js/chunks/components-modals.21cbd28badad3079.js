"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-modals"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/modals.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/modals.vue?vue&type=script&setup=true&lang=js ***!
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
  __name: 'modals',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Modals'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var sliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

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
      slide: slide,
      sliding: sliding,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/modals.vue?vue&type=template&id=bc3ad936":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/modals.vue?vue&type=template&id=bc3ad936 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-2.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/slider-1.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/slider-2.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/slider-3.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





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
}, "Components ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Modals")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#modalBasic\" class=\"nav-link\">Basic</a><a href=\"#modalVerticallyCentered\" class=\"nav-link\">Vertically Centered</a><a href=\"#modalRemoveAnimation\" class=\"nav-link\">Remove animation</a><a href=\"#modalOptionalSizes\" class=\"nav-link\">Optional sizes</a><a href=\"#modalVideo\" class=\"nav-link\">Video</a><a href=\"#modalAnimationStyleModal\" class=\"nav-link\">Animation Style Modal</a><a href=\"#modalCustom\" class=\"nav-link\">Custom</a>", 7);

var _hoisted_13 = [_hoisted_6];

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/components/modal\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/components/modal </a></div></div></div>", 1);

var _hoisted_15 = {
  "class": "row layout-top-spacing"
};
var _hoisted_16 = {
  id: "modalBasic",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_17 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Basic")])])], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "panel-body"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#exampleModal"
}, "Launch modal")], -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "exampleModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

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

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Button trigger modal -->\n<div class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">Launch modal</button>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis\n                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_27 = {
  id: "modalVerticallyCentered",
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Vertically centered")])])], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "panel-body"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#exampleModalCenter"
}, "Launch modal")], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "exampleModalCenter",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-dialog-centered",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "Vertically Aligned"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "modal-heading mb-4 mt-2"
}, "Aligned Center"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " In hac habitasse platea dictumst. Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at dolor scelerisque porttitor. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "code-section-container show-code"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_35 = [_hoisted_34];
var _hoisted_36 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"text-center\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModalCenter\">Launch modal</button>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Vertically Aligned</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <h4 class=\"modal-heading mb-4 mt-2\">Aligned Center</h4>\n                <p class=\"modal-text\">\n                    In hac habitasse platea dictumst. Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean\n                    nec nunc ex. Integer varius neque at dolor scelerisque porttitor.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_38 = {
  id: "modalRemoveAnimation",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_39 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Remove animation")])])], -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "panel-body"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#exampleModalRemoveAnimation"
}, "Launch modal")], -1
/* HOISTED */
);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal",
  id: "exampleModalRemoveAnimation",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "No Animations"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at dolor scelerisque porttitor. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "code-section-container show-code"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_46 = [_hoisted_45];
var _hoisted_47 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModalRemoveAnimation\">Launch modal</button>\n</div>\n<div class=\"modal\" id=\"exampleModalRemoveAnimation\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">No Animations</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque\n                    at dolor scelerisque porttitor.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_49 = {
  id: "modalOptionalSizes",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_50 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Optional sizes")])])], -1
/* HOISTED */
);

var _hoisted_52 = {
  "class": "panel-body"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" xtra Large modal "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalxl"
}, "Extra large"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Lage modal "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modallg"
}, "Large"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Small modal "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalsm"
}, "Small")], -1
/* HOISTED */
);

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "modalxl",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-xl",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "Extra Large"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "modallg",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-lg",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "Large"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "modalsm",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-sm",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "Small"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "code-section-container show-code"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_59 = [_hoisted_58];
var _hoisted_60 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"text-center\">\n    <!-- xtra Large modal -->\n    <button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#modalxl\">Extra large</button>\n    <!-- Lage modal -->\n    <button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#modallg\">Large</button>\n    <!-- Small modal -->\n    <button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#modalsm\">Small</button>\n</div>\n\n<!-- xtra Large modal -->\n<div class=\"modal fade\" id=\"modalxl\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Extra Large</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis\n                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Lage modal -->\n<div class=\"modal fade\" id=\"modallg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Large</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis\n                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Small modal -->\n<div class=\"modal fade\" id=\"modalsm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Small</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis\n                    dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_62 = {
  id: "modalVideo",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_63 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Video")])])], -1
/* HOISTED */
);

var _hoisted_65 = {
  "class": "panel-body text-center modal-video"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalYoutube"
}, "Play Youtube", -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "modalYoutube",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "modalYoutubeLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-lg",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header p-0 border-0",
  id: "modalYoutubeLabel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close ms-auto mb-1",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body p-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "video-container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
  src: "https://www.youtube.com/embed/YE7VzlLtp-4",
  width: "560",
  height: "315",
  allow: "encrypted-media",
  style: {
    "border": "0px"
  }
})])])])])], -1
/* HOISTED */
);

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modalVimeo"
}, "Play Vimeo", -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "modalVimeo",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "modalVimeoLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-lg",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header p-0 border-0",
  id: "modalVimeoLabel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close ms-auto mb-1",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body p-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "video-container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
  src: "https://player.vimeo.com/video/1084537",
  width: "560",
  height: "315",
  allow: "encrypted-media",
  style: {
    "border": "0px"
  }
})])])])])], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "code-section-container show-code"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_72 = [_hoisted_71];
var _hoisted_73 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "===========\n  Youtube\n===========\n\n<button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#modalYoutube\">Play Youtube</button>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalYoutube\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalYoutubeLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header p-0 border-0\" id=\"modalYoutubeLabel\">\n                <button type=\"button\" class=\"btn-close ms-auto mb-1\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body p-0\">\n                <div class=\"video-container\">\n                    <iframe src=\"https://www.youtube.com/embed/YE7VzlLtp-4\" width=\"560\" height=\"315\" allow=\"encrypted-media\" style=\"border: 0px\"></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n===========\n  Vimeo\n===========\n\n<button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#modalVimeo\">Play Vimeo</button>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modalVimeo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalVimeoLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header p-0 border-0\" id=\"modalVimeoLabel\">\n                <button type=\"button\" class=\"btn-close ms-auto mb-1\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body p-0\">\n                <div class=\"video-container\">\n                    <iframe src=\"https://player.vimeo.com/video/1084537\" width=\"560\" height=\"315\" allow=\"encrypted-media\" style=\"border: 0px\"></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_75 = {
  id: "modalAnimationStyleModal",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_76 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Animation Style Modal")])])], -1
/* HOISTED */
);

var _hoisted_78 = {
  "class": "panel-body text-center"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.fadeInDown</code></p><!-- Fade in down modal --><button type=\"button\" class=\"btn btn-primary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#fadeinModal\">FadeIn</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.slideInDown</code></p><!-- Slide in down modal --><button type=\"button\" class=\"btn btn-info mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#slidedownModal\">SlideIn Down</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.fadeInUp</code></p><!-- Fade in up modal --><button type=\"button\" class=\"btn btn-success mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#fadeupModal\">FadeIn Up</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.slideInUp</code></p><!-- Slide in up modal --><button type=\"button\" class=\"btn btn-warning mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#slideupModal\">SlideIn Up</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.fadeInLeft</code></p><!-- Fade in left modal --><button type=\"button\" class=\"btn btn-secondary mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#fadeleftModal\">FadeIn Left</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.rotateInDownLeft</code></p><!-- Rotate in right modal --><button type=\"button\" class=\"btn btn-info mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#rotateleftModal\">RotateIn Left</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.fadeInRight</code></p><!-- Fade in right modal --><button type=\"button\" class=\"btn btn-dark mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#faderightModal\">FadeIn Right</button></div><div class=\"col-lg-6\"><p class=\"mb-2 mt-3\"><code>.zoomInUp</code></p><!-- Zoom in up modal --><button type=\"button\" class=\"btn btn-danger mb-2 me-2\" data-bs-toggle=\"modal\" data-bs-target=\"#zoomupModal\">ZoomIn Up</button></div></div>", 1);

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated fadeInDown",
  id: "fadeinModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "fadeinModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "fadeinModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated slideInDown",
  id: "slidedownModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "slidedownModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "slidedownModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated slideInUp",
  id: "slideupModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "slideupModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "slideupModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated fadeInUp",
  id: "fadeupModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "fadeupModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "fadeupModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated rotateInDownLeft",
  id: "rotateleftModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "rotateleftModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "rotateleftModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated fadeInLeft",
  id: "fadeleftModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "fadeleftModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "fadeleftModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated zoomInUp",
  id: "zoomupModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "zoomupModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "zoomupModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal animated fadeInRight",
  id: "faderightModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "faderightModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "faderightModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

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

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Fade in down modal -->\n<div class=\"modal animated fadeInDown\" id=\"fadeinModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fadeinModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"fadeinModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Slide in down modal -->\n<div class=\"modal animated slideInDown\" id=\"slidedownModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"slidedownModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"slidedownModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Slide in up modal -->\n<div class=\"modal animated slideInUp\" id=\"slideupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"slideupModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"slideupModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fade in up modal -->\n<div class=\"modal animated fadeInUp\" id=\"fadeupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fadeupModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"fadeupModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Rotate in right modal -->\n<div class=\"modal animated rotateInDownLeft\" id=\"rotateleftModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"rotateleftModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"rotateleftModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fade in left modal -->\n<div class=\"modal animated fadeInLeft\" id=\"fadeleftModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fadeleftModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"fadeleftModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Zoom in up modal -->\n<div class=\"modal animated zoomInUp\" id=\"zoomupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"zoomupModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"zoomupModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Fade in right modal -->\n<div class=\"modal animated fadeInRight\" id=\"faderightModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"faderightModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"faderightModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-text\">\n                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin\n                    luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_93 = {
  id: "modalCustom",
  "class": "col-lg-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Custom")])])], -1
/* HOISTED */
);

var _hoisted_96 = {
  "class": "panel-body text-center advance-content signinModal-content"
};

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, "More Custom Modals.", -1
/* HOISTED */
);

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-warning mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#standardModal"
}, "Standard", -1
/* HOISTED */
);

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade modal-notification",
  id: "standardModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "standardModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "icon-content"
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
  "class": "feather feather-bell"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M13.73 21a2 2 0 0 1-3.46 0"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-info mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#tabsModal"
}, "Tabs", -1
/* HOISTED */
);

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "tabsModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "tabsModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLabel"
}, "Modal title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3",
  id: "simpletab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "home-tab",
  "data-bs-toggle": "tab",
  href: "#home",
  role: "tab",
  "aria-controls": "home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "profile-tab",
  "data-bs-toggle": "tab",
  href: "#profile",
  role: "tab",
  "aria-controls": "profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "contact-tab",
  "data-bs-toggle": "tab",
  href: "#contact",
  role: "tab",
  "aria-controls": "contact",
  "aria-selected": "false"
}, "Contact")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "simpletabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "home",
  role: "tabpanel",
  "aria-labelledby": "home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "profile",
  role: "tabpanel",
  "aria-labelledby": "profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Fusce ac fringilla ex. Sed ligula ipsum, fringilla ut orci nec, suscipit commodo felis. Sed imperdiet eros dignissim, vehicula erat vel, rutrum lorem. In porttitor id ante nec laoreet. Etiam quis sapien ac nunc ullamcorper elementum. Fusce ullamcorper ante convallis nisl eleifend, sit amet dapibus urna eleifend. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "contact",
  role: "tabpanel",
  "aria-labelledby": "contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "modal-text"
}, " Pellentesque semper tortor id ligula ultrices suscipit. Donec viverra vulputate lectus non consectetur. Donec ac interdum lacus. Donec euismod nisi at justo molestie elementum. Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-cancel-12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Save")])])])], -1
/* HOISTED */
);

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-danger mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#profileModal"
}, "Profile", -1
/* HOISTED */
);

var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade profile-modal",
  id: "profileModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "profileModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-sm",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-profile mt-4 mb-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "avatar",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-2.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  "class": "rounded-circle"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2"
}, "Click on view to access your profile.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer justify-content-center mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-default"
}, "View")])])])], -1
/* HOISTED */
);

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-dark mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#loginModal"
}, "Login", -1
/* HOISTED */
);

var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade login-modal",
  id: "loginModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "loginModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-sm",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header",
  id: "loginModalLabel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "modal-title"
}, "Login"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "mt-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
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
  "class": "feather feather-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "7",
  r: "4"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "email",
  "class": "form-control mb-2",
  placeholder: "Email"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  "class": "form-control mb-4",
  placeholder: "Password"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  block: "",
  "class": "btn btn-primary w-100",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, "Login")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "division"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "OR")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "social"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "class": "btn social-fb mx-1"
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
  "class": "feather feather-facebook"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "brand-name"
}, "Facebook")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "class": "btn social-github"
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
  "class": "feather feather-github"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "brand-name"
}, "Github")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forgot login-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Looking to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "create an account"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("?")])])])])])], -1
/* HOISTED */
);

var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-secondary mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#registerModal"
}, "Register", -1
/* HOISTED */
);

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade register-modal",
  id: "registerModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "registerModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-sm",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header",
  id: "registerModalLabel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "modal-title"
}, "Register"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "mt-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
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
  "class": "feather feather-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "7",
  r: "4"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control mb-2",
  placeholder: "Username"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
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
  "class": "feather feather-at-sign"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "email",
  "class": "form-control mb-2",
  placeholder: "Email"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  "class": "form-control mb-4",
  placeholder: "Password"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary w-100",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, "Register")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "division"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "OR")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "social"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "class": "btn social-fb mx-1"
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
  "class": "feather feather-facebook"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "brand-name"
}, "Facebook")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "class": "btn social-github"
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
  "class": "feather feather-github"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "brand-name"
}, "Github")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-footer justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forgot login-footer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Already have "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Login"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("?")])])])])])], -1
/* HOISTED */
);

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-success mb-2 me-2",
  "data-bs-toggle": "modal",
  "data-bs-target": "#sliderModal"
}, "Slider", -1
/* HOISTED */
);

var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal fade",
  id: "sliderModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "sliderModalLabel",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog modal-dialog-centered",
  role: "document"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body p-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "carouselExampleIndicators",
  "class": "carousel slide",
  "data-bs-ride": "carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  "class": "carousel-indicators"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide-to": "0",
  "class": "active",
  "aria-current": "true",
  "aria-label": "Slide 1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide-to": "1",
  "aria-label": "Slide 2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide-to": "2",
  "aria-label": "Slide 3"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "d-block w-100",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/slider-1.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "First slide"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "d-block w-100",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/slider-2.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "First slide"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "d-block w-100",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/slider-3.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "First slide"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "carousel-control-prev",
  role: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide": "prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "flaticon-left-arrow-1 carousel-control-prev-icon",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "carousel-control-prev-text"
}, " Previous")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "carousel-control-next",
  role: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide": "next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "carousel-control-next-text"
}, " Next"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "flaticon-right-arrow-1 carousel-control-next-icon",
  "aria-hidden": "true"
})])])])])])], -1
/* HOISTED */
);

var _hoisted_110 = {
  "class": "code-section-container show-code"
};

var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_112 = [_hoisted_111];
var _hoisted_113 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Standard Modal -->\n<div class=\"modal fade modal-notification\" id=\"standardModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"standardModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <div class=\"icon-content\">\n                    <svg> ... </svg>\n                </div>\n                <p class=\"modal-text\">\n                    Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis,\n                    vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.\n                </p>\n            </div>\n            <div class=\"modal-footer justify-content-between\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Tabs Modal -->\n<div class=\"modal fade\" id=\"tabsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"tabsModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <ul class=\"nav nav-tabs mb-3\" id=\"simpletab\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n                    </li>\n                </ul>\n                <div class=\"tab-content\" id=\"simpletabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                        <p class=\"modal-text\">\n                            Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor\n                            turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.\n                        </p>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                        <p class=\"modal-text\">\n                            Fusce ac fringilla ex. Sed ligula ipsum, fringilla ut orci nec, suscipit commodo felis. Sed imperdiet eros dignissim, vehicula erat vel, rutrum\n                            lorem. In porttitor id ante nec laoreet. Etiam quis sapien ac nunc ullamcorper elementum. Fusce ullamcorper ante convallis nisl eleifend, sit\n                            amet dapibus urna eleifend.\n                        </p>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n                        <p class=\"modal-text\">\n                            Pellentesque semper tortor id ligula ultrices suscipit. Donec viverra vulputate lectus non consectetur. Donec ac interdum lacus. Donec euismod\n                            nisi at justo molestie elementum. Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur\n                            ridiculus mus.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\"><i class=\"flaticon-cancel-12\"></i> Discard</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Profile Modal -->\n<div class=\"modal fade profile-modal\" id=\"profileModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"profileModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n\n            <div class=\"modal-body\">\n                <div class=\"modal-profile mt-4 mb-5\">\n                    <img alt=\"avatar\" src=\"@/assets/images/profile-2.jpeg\" class=\"rounded-circle\" />\n                </div>\n                <p class=\"mt-2\">Click on view to access your profile.</p>\n            </div>\n            <div class=\"modal-footer justify-content-center mb-4\">\n                <button type=\"button\" class=\"btn btn-default\">View</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Login Modal -->\n<div class=\"modal fade login-modal\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" id=\"loginModalLabel\">\n                <h4 class=\"modal-title\">Login</h4>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <form class=\"mt-0\">\n                    <div class=\"form-group\">\n                        <svg> ... </svg>\n                        <input type=\"email\" class=\"form-control mb-2\" placeholder=\"Email\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <svg> ... </svg>\n                        <input type=\"password\" class=\"form-control mb-4\" placeholder=\"Password\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"button\" block class=\"btn btn-primary w-100\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\">Login</button>\n                    </div>\n                </form>\n\n                <div class=\"division\">\n                    <span>OR</span>\n                </div>\n\n                <div class=\"social\">\n                    <a href=\"javascript:void(0);\" class=\"btn social-fb mx-1\">\n                        <svg> ... </svg>\n                        <span class=\"brand-name\">Facebook</span></a\n                    >\n                    <a href=\"javascript:void(0);\" class=\"btn social-github\">\n                        <svg> ... </svg>\n                        <span class=\"brand-name\">Github</span></a\n                    >\n                </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <div class=\"forgot login-footer\">\n                    <span>Looking to <a href=\"javascript:void(0);\">create an account</a>?</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Register Modal -->\n<div class=\"modal fade register-modal\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registerModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\" id=\"registerModalLabel\">\n                <h4 class=\"modal-title\">Register</h4>\n                <button type=\"button\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button>\n            </div>\n            <div class=\"modal-body\">\n                <form class=\"mt-0\">\n                    <div class=\"form-group\">\n                        <svg> ... </svg>\n                        <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Username\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <svg> ... </svg>\n                        <input type=\"email\" class=\"form-control mb-2\" placeholder=\"Email\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <svg> ... </svg>\n                        <input type=\"password\" class=\"form-control mb-4\" placeholder=\"Password\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-primary w-100\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\">Register</button>\n                    </div>\n                </form>\n\n                <div class=\"division\">\n                    <span>OR</span>\n                </div>\n\n                <div class=\"social\">\n                    <a href=\"javascript:void(0);\" class=\"btn social-fb mx-1\">\n                        <svg> ... </svg>\n                        <span class=\"brand-name\">Facebook</span></a\n                    >\n                    <a href=\"javascript:void(0);\" class=\"btn social-github\">\n                        <svg> ... </svg>\n                        <span class=\"brand-name\">Github</span></a\n                    >\n                </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <div class=\"forgot login-footer\">\n                    <span>Already have <a href=\"javascript:void(0);\">Login</a>?</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Slider Modal -->\n<div class=\"modal fade\" id=\"sliderModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sliderModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <button type=\"button\" class=\"btn-close\" data-dismiss=\"modal\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            <div class=\"modal-body p-0\">\n                <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                        <li role=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></li>\n                        <li role=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></li>\n                        <li role=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <img class=\"d-block w-100\" src=\"@/assets/images/slider-1.jpeg\" alt=\"First slide\" />\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"@/assets/images/slider-2.jpeg\" alt=\"First slide\" />\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img class=\"d-block w-100\" src=\"@/assets/images/slider-3.jpeg\" alt=\"First slide\" />\n                        </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" role=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"prev\">\n                        <span class=\"flaticon-left-arrow-1 carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"carousel-control-prev-text\"> Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" role=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"next\">\n                        <span class=\"carousel-control-next-text\"> Next</span>\n                        <span class=\"flaticon-right-arrow-1 carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_13)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
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

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_35), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_37];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_46), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_48];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" xtra Large modal "), _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Lage modal "), _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Small modal "), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_59), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_61];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), _hoisted_67, _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_72), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_74];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fade in down modal "), _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slide in down modal "), _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slide in up modal "), _hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fade in up modal "), _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Rotate in right modal "), _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fade in left modal "), _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Zoom in up modal "), _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fade in right modal "), _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_90), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_92];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [_hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Standard Modal "), _hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tabs Modal "), _hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Profile Modal "), _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Login Modal "), _hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Register Modal "), _hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Slider Modal "), _hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_112), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_114];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/components/modals.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/components/modals.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modals_vue_vue_type_template_id_bc3ad936__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.vue?vue&type=template&id=bc3ad936 */ "./resources/js/src/views/components/modals.vue?vue&type=template&id=bc3ad936");
/* harmony import */ var _modals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/components/modals.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_modals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_modals_vue_vue_type_template_id_bc3ad936__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/components/modals.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/components/modals.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/modals.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modals_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modals.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/modals.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/components/modals.vue?vue&type=template&id=bc3ad936":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/components/modals.vue?vue&type=template&id=bc3ad936 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modals_vue_vue_type_template_id_bc3ad936__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modals_vue_vue_type_template_id_bc3ad936__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modals.vue?vue&type=template&id=bc3ad936 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/modals.vue?vue&type=template&id=bc3ad936");


/***/ })

}]);