"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-notifications"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/toast.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/toast.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
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
  __name: 'toast',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Notifications'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var toastBasic = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastTopLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastTopCenter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastTopRight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastBottomLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastBottomCenter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastBottomRight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastNoAction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastActionText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastTextColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastClickCallback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastClickCallback1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastDuration = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastPrimary = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastSuccess = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastWarning = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastDanger = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toastDark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      initToast();
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

    var initToast = function initToast() {
      toastBasic.value = new window.bootstrap.Toast(toastBasic.value);
      toastTopLeft.value = new window.bootstrap.Toast(toastTopLeft.value);
      toastTopCenter.value = new window.bootstrap.Toast(toastTopCenter.value);
      toastTopRight.value = new window.bootstrap.Toast(toastTopRight.value);
      toastBottomLeft.value = new window.bootstrap.Toast(toastBottomLeft.value);
      toastBottomCenter.value = new window.bootstrap.Toast(toastBottomCenter.value);
      toastBottomRight.value = new window.bootstrap.Toast(toastBottomRight.value);
      toastNoAction.value = new window.bootstrap.Toast(toastNoAction.value);
      toastActionText.value = new window.bootstrap.Toast(toastActionText.value);
      toastTextColor.value = new window.bootstrap.Toast(toastTextColor.value);
      toastClickCallback.value = new window.bootstrap.Toast(toastClickCallback.value);
      toastClickCallback1.value = new window.bootstrap.Toast(toastClickCallback1.value);
      toastDuration.value = new window.bootstrap.Toast(toastDuration.value);
      toastPrimary.value = new window.bootstrap.Toast(toastPrimary.value);
      toastInfo.value = new window.bootstrap.Toast(toastInfo.value);
      toastSuccess.value = new window.bootstrap.Toast(toastSuccess.value);
      toastWarning.value = new window.bootstrap.Toast(toastWarning.value);
      toastDanger.value = new window.bootstrap.Toast(toastDanger.value);
      toastDark.value = new window.bootstrap.Toast(toastDark.value);
    };

    var __returned__ = {
      code_arr: code_arr,
      toastBasic: toastBasic,
      toastTopLeft: toastTopLeft,
      toastTopCenter: toastTopCenter,
      toastTopRight: toastTopRight,
      toastBottomLeft: toastBottomLeft,
      toastBottomCenter: toastBottomCenter,
      toastBottomRight: toastBottomRight,
      toastNoAction: toastNoAction,
      toastActionText: toastActionText,
      toastTextColor: toastTextColor,
      toastClickCallback: toastClickCallback,
      toastClickCallback1: toastClickCallback1,
      toastDuration: toastDuration,
      toastPrimary: toastPrimary,
      toastInfo: toastInfo,
      toastSuccess: toastSuccess,
      toastWarning: toastWarning,
      toastDanger: toastDanger,
      toastDark: toastDark,
      toggleCode: toggleCode,
      initToast: initToast,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
}, "Components")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Notifications")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#toastBasic\" class=\"nav-link\">Basic</a><a href=\"#toastTopLeft\" class=\"nav-link\">Top Left</a><a href=\"#toastTopCenter\" class=\"nav-link\">Top Center</a><a href=\"#toastTopRight\" class=\"nav-link\">Top Right</a><a href=\"#toastBottomLeft\" class=\"nav-link\">Bottom Left</a><a href=\"#toastBottomCenter\" class=\"nav-link\">Bottom Center</a><a href=\"#toastBottomRight\" class=\"nav-link\">Bottom Right</a><a href=\"#toastNoAction\" class=\"nav-link\">No Action</a><a href=\"#toastActionText\" class=\"nav-link\">Action Text</a><a href=\"#toastTextColor\" class=\"nav-link\">Text Color</a><a href=\"#toastClickCallback\" class=\"nav-link\">Click Callback</a><a href=\"#toastDuration\" class=\"nav-link\">Duration</a><a href=\"#toastBackgroundColor\" class=\"nav-link\">Background Color</a>", 13);

var _hoisted_19 = [_hoisted_6];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/components/toasts\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/components/toasts </a></div></div></div>", 1);

var _hoisted_21 = {
  "class": "row layout-spacing layout-top-spacing"
};
var _hoisted_22 = {
  id: "toastBasic",
  "class": "col-lg-12 col-12 position-relative layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Basic")])])], -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "panel-body"
};
var _hoisted_26 = {
  style: {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "z-index": "9999",
    "margin-left": "20px",
    "margin-right": "20px"
  }
};
var _hoisted_27 = {
  ref: "toastBasic",
  "class": "toast toast-primary",
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"toast-header\"><strong class=\"me-auto\">Bootstrap</strong><small class=\"me-2\">just now</small><a href=\"javascript:;\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"close\">×</a></div><div class=\"toast-body toast-primary\">Hello, world! This is a toast message.</div>", 2);

var _hoisted_30 = [_hoisted_28];
var _hoisted_31 = {
  "class": "code-section-container show-code"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_33 = [_hoisted_32];
var _hoisted_34 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-primary\" @click=\"toastBasic.show()\">Open Toast</button>\n\n<div style=\"position: absolute; top: 0; right: 0; z-index: 9999; margin-left: 20px; margin-right: 20px\">\n    <div ref=\"toastBasic\" class=\"toast toast-primary\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n        <div class=\"toast-header\">\n            <strong class=\"me-auto\">Bootstrap</strong>\n            <small class=\"me-2\">just now</small>\n            <a href=\"javascript:;\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"close\">×</a>\n        </div>\n        <div class=\"toast-body toast-primary\">Hello, world! This is a toast message.</div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_36 = {
  id: "toastTopLeft",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_37 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Top Left")])])], -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "panel-body text-center"
};
var _hoisted_40 = {
  ref: "toastTopLeft",
  "class": "toast position-fixed top-0 start-0 m-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_42 = [_hoisted_41];
var _hoisted_43 = {
  "class": "code-section-container show-code"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_45 = [_hoisted_44];
var _hoisted_46 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-success\" @click=\"toastTopLeft.show()\">Top Left</button>\n\n<div ref=\"toastTopLeft\" class=\"toast position-fixed top-0 start-0 m-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_48 = {
  id: "toastTopCenter",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_49 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Top Center")])])], -1
/* HOISTED */
);

var _hoisted_51 = {
  "class": "panel-body text-center"
};
var _hoisted_52 = {
  ref: "toastTopCenter",
  "class": "toast position-fixed top-0 mx-auto my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_54 = [_hoisted_53];
var _hoisted_55 = {
  "class": "code-section-container show-code"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_57 = [_hoisted_56];
var _hoisted_58 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-info\" @click=\"toastTopCenter.show()\">Top Center</button>\n\n<div ref=\"toastTopCenter\" class=\"toast position-fixed top-0 mx-auto my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_60 = {
  id: "toastTopRight",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_61 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Top Right")])])], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "panel-body text-center"
};
var _hoisted_64 = {
  ref: "toastTopRight",
  "class": "toast position-fixed top-0 end-0 m-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_66 = [_hoisted_65];
var _hoisted_67 = {
  "class": "code-section-container show-code"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_69 = [_hoisted_68];
var _hoisted_70 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-danger\" @click=\"toastTopRight.show()\">Top Right</button>\n\n<div ref=\"toastTopRight\" class=\"toast position-fixed top-0 end-0 m-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_72 = {
  id: "toastBottomLeft",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_73 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Bottom Left")])])], -1
/* HOISTED */
);

var _hoisted_75 = {
  "class": "panel-body text-center"
};
var _hoisted_76 = {
  ref: "toastBottomLeft",
  "class": "toast position-fixed bottom-0 start-0 m-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_78 = [_hoisted_77];
var _hoisted_79 = {
  "class": "code-section-container show-code"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_81 = [_hoisted_80];
var _hoisted_82 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-warning\" @click=\"toastBottomLeft.show()\">Bottom Left</button>\n\n<div ref=\"toastBottomLeft\" class=\"toast position-fixed bottom-0 start-0 m-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_84 = {
  id: "toastBottomCenter",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_85 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Bottom Center")])])], -1
/* HOISTED */
);

var _hoisted_87 = {
  "class": "panel-body text-center"
};
var _hoisted_88 = {
  ref: "toastBottomCenter",
  "class": "toast position-fixed bottom-0 mx-auto my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_90 = [_hoisted_89];
var _hoisted_91 = {
  "class": "code-section-container show-code"
};

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_93 = [_hoisted_92];
var _hoisted_94 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-secondary\" @click=\"toastBottomCenter.show()\">Bottom Center</button>\n\n<div ref=\"toastBottomCenter\" class=\"toast position-fixed bottom-0 mx-auto my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_96 = {
  id: "toastBottomRight",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_97 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Bottom Right")])])], -1
/* HOISTED */
);

var _hoisted_99 = {
  "class": "panel-body text-center"
};
var _hoisted_100 = {
  ref: "toastBottomRight",
  "class": "toast position-fixed bottom-0 end-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_102 = [_hoisted_101];
var _hoisted_103 = {
  "class": "code-section-container show-code"
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_105 = [_hoisted_104];
var _hoisted_106 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-dark\" @click=\"toastBottomRight.show()\">Bottom Right</button>\n\n<div ref=\"toastBottomRight\" class=\"toast position-fixed bottom-0 end-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_108 = {
  id: "toastNoAction",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_109 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "No Action")])])], -1
/* HOISTED */
);

var _hoisted_111 = {
  "class": "panel-body text-center"
};
var _hoisted_112 = {
  ref: "toastNoAction",
  "class": "toast position-fixed bottom-0 start-0 m-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, "Example notification text.", -1
/* HOISTED */
);

var _hoisted_114 = [_hoisted_113];
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

var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-warning\" @click=\"toastNoAction.show()\">No Action</button>\n\n<div ref=\"toastNoAction\" class=\"toast position-fixed bottom-0 start-0 m-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">Example notification text.</div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_120 = {
  id: "toastActionText",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_121 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Action Text")])])], -1
/* HOISTED */
);

var _hoisted_123 = {
  "class": "panel-body text-center"
};
var _hoisted_124 = {
  ref: "toastActionText",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "THANKS!")], -1
/* HOISTED */
);

var _hoisted_126 = [_hoisted_125];
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

var _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-primary\" @click=\"toastActionText.show()\">Action Text</button>\n\n<div ref=\"toastActionText\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">THANKS!</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_132 = {
  id: "toastTextColor",
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Text Color")])])], -1
/* HOISTED */
);

var _hoisted_135 = {
  "class": "panel-body text-center"
};
var _hoisted_136 = {
  ref: "toastTextColor",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-warning ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_138 = [_hoisted_137];
var _hoisted_139 = {
  "class": "code-section-container show-code"
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_141 = [_hoisted_140];
var _hoisted_142 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-danger\" @click=\"toastTextColor.show()\">Text Color</button>\n\n<div ref=\"toastTextColor\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-warning ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_144 = {
  id: "toastClickCallback",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_145 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Click Callback")])])], -1
/* HOISTED */
);

var _hoisted_147 = {
  "class": "panel-body text-center"
};
var _hoisted_148 = {
  ref: "toastClickCallback",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};
var _hoisted_149 = {
  "class": "toast-body toast-dark d-flex justify-content-between"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Custom callback when action button is clicked. ");

var _hoisted_151 = {
  ref: "toastClickCallback1",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};

var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Thanks for clicking the Dismiss button! "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_153 = [_hoisted_152];
var _hoisted_154 = {
  "class": "code-section-container show-code"
};

var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_156 = [_hoisted_155];
var _hoisted_157 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-info\" @click=\"toastClickCallback.show()\">Click Callback</button>\n\n<div ref=\"toastClickCallback\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Custom callback when action button is clicked.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\" @click=\"toastClickCallback1.show()\">DISMISS</a>\n    </div>\n</div>\n<!-- callback  toast-->\n<div ref=\"toastClickCallback1\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Thanks for clicking the Dismiss button!\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_159 = {
  id: "toastDuration",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_160 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Duration")])])], -1
/* HOISTED */
);

var _hoisted_162 = {
  "class": "panel-body text-center"
};
var _hoisted_163 = {
  ref: "toastDuration",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_164 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Example notification text. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-success ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_165 = [_hoisted_164];
var _hoisted_166 = {
  "class": "code-section-container show-code"
};

var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_168 = [_hoisted_167];
var _hoisted_169 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button type=\"button\" class=\"btn btn-dark\" @click=\"toastDuration.show()\">Duration</button>\n\n<div\n    ref=\"toastDuration\"\n    class=\"toast position-fixed bottom-0 start-0 my-2\"\n    style=\"z-index: 1080\"\n    role=\"alert\"\n    aria-live=\"assertive\"\n    aria-atomic=\"true\"\n    data-bs-delay=\"5000\"\n>\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Example notification text.\n        <a href=\"javascript:;\" class=\"text-success ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_171 = {
  id: "toastBackgroundColor",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_172 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_173 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Background Color")])])], -1
/* HOISTED */
);

var _hoisted_174 = {
  "class": "panel-body text-center"
};
var _hoisted_175 = {
  ref: "toastPrimary",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-primary d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Primary "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-white ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_177 = [_hoisted_176];
var _hoisted_178 = {
  ref: "toastInfo",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-info d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Info "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-white ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_180 = [_hoisted_179];
var _hoisted_181 = {
  ref: "toastSuccess",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_182 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-success d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Success "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-white ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_183 = [_hoisted_182];
var _hoisted_184 = {
  ref: "toastWarning",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_185 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-warning d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Warning "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-white ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_186 = [_hoisted_185];
var _hoisted_187 = {
  ref: "toastDanger",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-danger d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Danger "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-white ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_189 = [_hoisted_188];
var _hoisted_190 = {
  ref: "toastDark",
  "class": "toast position-fixed bottom-0 start-0 my-2",
  style: {
    "z-index": "1080"
  },
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true",
  "data-bs-delay": "5000"
};

var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "toast-body toast-dark d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Dark "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "text-white ms-2",
  "data-bs-dismiss": "toast"
}, "DISMISS")], -1
/* HOISTED */
);

var _hoisted_192 = [_hoisted_191];
var _hoisted_193 = {
  "class": "code-section-container show-code"
};

var _hoisted_194 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_195 = [_hoisted_194];
var _hoisted_196 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_197 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Primary -->\n<button type=\"button\" class=\"btn btn-primary mb-2 mx-1\" @click=\"toastPrimary.show()\">Primary</button>\n<div ref=\"toastPrimary\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n    <div class=\"toast-body toast-primary d-flex justify-content-between\">\n        Primary\n        <a href=\"javascript:;\" class=\"text-white ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n\n<!-- Info -->\n<button type=\"button\" class=\"btn btn-info mb-2 mx-1\" @click=\"toastInfo.show()\">Info</button>\n<div ref=\"toastInfo\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n    <div class=\"toast-body toast-info d-flex justify-content-between\">\n        Info\n        <a href=\"javascript:;\" class=\"text-white ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n\n<!-- Success -->\n<button type=\"button\" class=\"btn btn-success mb-2 mx-1\" @click=\"toastSuccess.show()\">Success</button>\n<div ref=\"toastSuccess\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n    <div class=\"toast-body toast-success d-flex justify-content-between\">\n        Success\n        <a href=\"javascript:;\" class=\"text-white ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n\n<!-- Warning -->\n<button type=\"button\" class=\"btn btn-warning mb-2 mx-1\" @click=\"toastWarning.show()\">Warning</button>\n<div ref=\"toastWarning\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n    <div class=\"toast-body toast-warning d-flex justify-content-between\">\n        Warning\n        <a href=\"javascript:;\" class=\"text-white ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n\n<!-- Danger -->\n<button type=\"button\" class=\"btn btn-danger mb-2 mx-1\" @click=\"toastDanger.show()\">Danger</button>\n<div ref=\"toastDanger\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n    <div class=\"toast-body toast-danger d-flex justify-content-between\">\n        Danger\n        <a href=\"javascript:;\" class=\"text-white ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n\n<!-- Dark -->\n<button type=\"button\" class=\"btn btn-dark mb-2 mx-1\" @click=\"toastDark.show()\">Dark</button>\n<div ref=\"toastDark\" class=\"toast position-fixed bottom-0 start-0 my-2\" style=\"z-index: 1080\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n    <div class=\"toast-body toast-dark d-flex justify-content-between\">\n        Dark\n        <a href=\"javascript:;\" class=\"text-white ms-2\" data-bs-dismiss=\"toast\">DISMISS</a>\n    </div>\n</div>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_19)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toastBasic.show();
    })
  }, "Open Toast"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, _hoisted_30, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_33), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_35];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toastTopLeft.show();
    })
  }, "Top Left"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, _hoisted_42, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_45), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_47];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-info",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toastTopCenter.show();
    })
  }, "Top Center"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, _hoisted_54, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_57), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_59];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toastTopRight.show();
    })
  }, "Top Right"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, _hoisted_66, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_69), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_71];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-warning",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.toastBottomLeft.show();
    })
  }, "Bottom Left"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, _hoisted_78, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_81), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_83];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-secondary",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $setup.toastBottomCenter.show();
    })
  }, "Bottom Center"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, _hoisted_90, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_93), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_95];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-dark",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $setup.toastBottomRight.show();
    })
  }, "Bottom Right"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, _hoisted_102, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_105), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_107];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [_hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-warning",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $setup.toastNoAction.show();
    })
  }, "No Action"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, _hoisted_114, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_117), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_119];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [_hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $setup.toastActionText.show();
    })
  }, "Action Text"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, _hoisted_126, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_129), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_131];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $setup.toastTextColor.show();
    })
  }, "Text Color"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, _hoisted_138, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_141), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_143];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [_hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-info",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $setup.toastClickCallback.show();
    })
  }, "Click Callback"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    "class": "text-success ms-2",
    "data-bs-dismiss": "toast",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $setup.toastClickCallback1.show();
    })
  }, "DISMISS")])], 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" callback  toast"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, _hoisted_153, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $setup.toggleCode('code11');
    })
  }, _hoisted_156), $setup.code_arr.includes('code11') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_158];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [_hoisted_161, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-dark",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $setup.toastDuration.show();
    })
  }, "Duration"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, _hoisted_165, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $setup.toggleCode('code12');
    })
  }, _hoisted_168), $setup.code_arr.includes('code12') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_170];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [_hoisted_173, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Primary "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary mb-2 mx-1",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $setup.toastPrimary.show();
    })
  }, "Primary"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, _hoisted_177, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Info "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-info mb-2 mx-1",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $setup.toastInfo.show();
    })
  }, "Info"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, _hoisted_180, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Success "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success mb-2 mx-1",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $setup.toastSuccess.show();
    })
  }, "Success"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, _hoisted_183, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Warning "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-warning mb-2 mx-1",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $setup.toastWarning.show();
    })
  }, "Warning"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, _hoisted_186, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Danger "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger mb-2 mx-1",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $setup.toastDanger.show();
    })
  }, "Danger"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, _hoisted_189, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dark "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-dark mb-2 mx-1",
    onClick: _cache[30] || (_cache[30] = function ($event) {
      return $setup.toastDark.show();
    })
  }, "Dark"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, _hoisted_192, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[31] || (_cache[31] = function ($event) {
      return $setup.toggleCode('code13');
    })
  }, _hoisted_195), $setup.code_arr.includes('code13') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_197];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/components/toast.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/components/toast.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toast_vue_vue_type_template_id_a795e810__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.vue?vue&type=template&id=a795e810 */ "./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810");
/* harmony import */ var _toast_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/components/toast.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_toast_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_toast_vue_vue_type_template_id_a795e810__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/components/toast.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/components/toast.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/components/toast.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_toast_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_toast_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./toast.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/toast.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_toast_vue_vue_type_template_id_a795e810__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_toast_vue_vue_type_template_id_a795e810__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./toast.vue?vue&type=template&id=a795e810 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810");


/***/ })

}]);