"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-tabs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/tabs.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/tabs.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/components/tabs-accordian/custom-tabs.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'tabs',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Tabs'
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/tabs.vue?vue&type=template&id=1dfee586":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/tabs.vue?vue&type=template&id=1dfee586 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Tabs")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  id: "navSection",
  "class": "nav sidenav"
};
var _hoisted_5 = {
  "class": "sidenav-content"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#tabsSimple\" class=\"nav-link\">Simple</a><a href=\"#tabsIcons\" class=\"nav-link\">Icons</a><a href=\"#tabsBordered\" class=\"nav-link\">Bordered</a><a href=\"#tabsLine\" class=\"nav-link\">Line</a><a href=\"#tabsAlignments\" class=\"nav-link\">Alignments</a><a href=\"#tabsWithIcons\" class=\"nav-link\">With Icons</a><a href=\"#tabsVerticalWithIcon\" class=\"nav-link\">Vertical With Icon</a><a href=\"#tabsVertical\" class=\"nav-link\">Vertical</a>", 8);

var _hoisted_14 = [_hoisted_6];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/components/navs-tabs/#tabs\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/components/navs-tabs/#tabs </a></div></div></div>", 1);

var _hoisted_16 = {
  "class": "layout-top-spacing"
};
var _hoisted_17 = {
  "class": "row"
};
var _hoisted_18 = {
  id: "tabsSimple",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_19 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Simple Tabs")])])], -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "panel-body simple-tab tabs"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3 mt-3",
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
}, "Contact")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link disabled",
  href: "#",
  tabindex: "-1",
  "aria-disabled": "true"
}, "Disabled")])], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "simpletabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "home",
  role: "tabpanel",
  "aria-labelledby": "home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "profile",
  role: "tabpanel",
  "aria-labelledby": "profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mt-0 mb-3"
}, "Media heading"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "contact",
  role: "tabpanel",
  "aria-labelledby": "contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "code-section-container show-code"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_26 = [_hoisted_25];
var _hoisted_27 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body simple-tab tabs\">\n    <ul class=\"nav nav-tabs mb-3 mt-3\" id=\"simpletab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n    </ul>\n    <div class=\"tab-content\" id=\"simpletabContent\">\n        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <h4 class=\"mb-4\">We move your world!</h4>\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-3\">Media heading</h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n            <p class=\"\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_30 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Simple Pills")])])], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "panel-body simple-pills tabs"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-3 mt-3",
  id: "pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#pills-home",
  role: "tab",
  "aria-controls": "pills-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  "data-bs-toggle": "pill",
  href: "#pills-profile",
  role: "button",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "pills-contact-tab",
  "data-bs-toggle": "pill",
  href: "#pills-contact",
  role: "tab",
  "aria-controls": "pills-contact",
  "aria-selected": "false"
}, "Contact")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link disabled",
  href: "#",
  tabindex: "-1",
  "aria-disabled": "true"
}, "Disabled")])], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "pills-home",
  role: "tabpanel",
  "aria-labelledby": "pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-profile",
  role: "tabpanel",
  "aria-labelledby": "pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-contact",
  role: "tabpanel",
  "aria-labelledby": "pills-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "code-section-container show-code"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_37 = [_hoisted_36];
var _hoisted_38 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body simple-pills tabs\">\n    <ul class=\"nav nav-pills mb-3 mt-3\" id=\"pills-tab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"pills-home-tab\" data-bs-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-bs-toggle=\"pill\" href=\"#pills-profile\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"pills-contact-tab\" data-bs-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li>\n    </ul>\n    <div class=\"tab-content\" id=\"pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n            <h4 class=\"mb-4\">We move your world!</h4>\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "row"
};
var _hoisted_41 = {
  id: "tabsIcons",
  "class": "col-lg-12 col-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Icon Tabs")])])], -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "panel-body icon-tab tabs"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3 mt-3",
  id: "iconTab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "icon-home-tab",
  "data-bs-toggle": "tab",
  href: "#icon-home",
  role: "tab",
  "aria-controls": "icon-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  "data-bs-toggle": "tab",
  href: "#icon-profile",
  role: "button",
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
  "class": "feather feather-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "7",
  r: "4"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "icon-contact-tab",
  "data-bs-toggle": "tab",
  href: "#icon-contact",
  role: "tab",
  "aria-controls": "icon-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link disabled",
  href: "#",
  tabindex: "-1",
  "aria-disabled": "true"
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
  "class": "feather feather-alert-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "16",
  x2: "12",
  y2: "16"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Disabled")])])], -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "iconTabContent-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "icon-home",
  role: "tabpanel",
  "aria-labelledby": "icon-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "icon-profile",
  role: "tabpanel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "icon-contact",
  role: "tabpanel",
  "aria-labelledby": "icon-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "code-section-container show-code"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_49 = [_hoisted_48];
var _hoisted_50 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body icon-tab tabs\">\n    <ul class=\"nav nav-tabs mb-3 mt-3\" id=\"iconTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"icon-home-tab\" data-bs-toggle=\"tab\" href=\"#icon-home\" role=\"tab\" aria-controls=\"icon-home\" aria-selected=\"true\"\n                ><svg> ... </svg>\n                Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-bs-toggle=\"tab\" href=\"#icon-profile\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <svg> ... </svg>\n                Profile\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"icon-contact-tab\" data-bs-toggle=\"tab\" href=\"#icon-contact\" role=\"tab\" aria-controls=\"icon-contact\" aria-selected=\"false\"\n                ><svg> ... </svg>\n                Contact</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">\n                <svg> ... </svg>\n                Disabled</a\n            >\n        </li>\n    </ul>\n    <div class=\"tab-content\" id=\"iconTabContent-1\">\n        <div class=\"tab-pane fade show active\" id=\"icon-home\" role=\"tabpanel\" aria-labelledby=\"icon-home-tab\">\n            <h4 class=\"mb-4\">We move your world!</h4>\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"icon-profile\" role=\"tabpanel\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"icon-contact\" role=\"tabpanel\" aria-labelledby=\"icon-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_52 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_53 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Icon Pills")])])], -1
/* HOISTED */
);

var _hoisted_55 = {
  "class": "panel-body icon-pill tabs"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-3 mt-3",
  id: "icon-pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "icon-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#icon-pills-home",
  role: "tab",
  "aria-controls": "icon-pills-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  "data-bs-toggle": "pill",
  href: "#icon-pills-profile",
  role: "button",
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
  "class": "feather feather-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "7",
  r: "4"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "icon-pills-contact-tab",
  "data-bs-toggle": "pill",
  href: "#icon-pills-contact",
  role: "tab",
  "aria-controls": "icon-pills-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link disabled",
  href: "#",
  tabindex: "-1",
  "aria-disabled": "true"
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
  "class": "feather feather-alert-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "16",
  x2: "12",
  y2: "16"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Disabled ")])])], -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "icon-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "icon-pills-home",
  role: "tabpanel",
  "aria-labelledby": "icon-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "icon-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "icon-pills-profile-tab1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "icon-pills-profile2",
  role: "tabpanel",
  "aria-labelledby": "icon-pills-profile-tab2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "icon-pills-contact",
  role: "tabpanel",
  "aria-labelledby": "icon-pills-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "code-section-container show-code"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_60 = [_hoisted_59];
var _hoisted_61 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body icon-pill tabs\">\n    <ul class=\"nav nav-pills mb-3 mt-3\" id=\"icon-pills-tab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"icon-pills-home-tab\" data-bs-toggle=\"pill\" href=\"#icon-pills-home\" role=\"tab\" aria-controls=\"icon-pills-home\" aria-selected=\"true\">\n                <svg> ... </svg>\n                Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-bs-toggle=\"pill\" href=\"#icon-pills-profile\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <svg> ... </svg>\n                Profile\n            </a>\n        </li>\n\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"icon-pills-contact-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#icon-pills-contact\"\n                role=\"tab\"\n                aria-controls=\"icon-pills-contact\"\n                aria-selected=\"false\"\n            >\n                <svg> ... </svg>\n                Contact</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">\n                <svg> ... </svg>\n                Disabled\n            </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\" id=\"icon-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"icon-pills-home\" role=\"tabpanel\" aria-labelledby=\"icon-pills-home-tab\">\n            <h4 class=\"mb-4\">We move your world!</h4>\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"icon-pills-profile\" role=\"tabpanel\" aria-labelledby=\"icon-pills-profile-tab1\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"icon-pills-profile2\" role=\"tabpanel\" aria-labelledby=\"icon-pills-profile-tab2\">\n            <p class=\"\">\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n                culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"icon-pills-contact\" role=\"tabpanel\" aria-labelledby=\"icon-pills-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "row"
};
var _hoisted_64 = {
  id: "tabsBordered",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_65 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Vertical Bordered")])])], -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "panel-body vertical-border-pill tabs"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-4 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto",
  id: "v-border-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "v-border-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#v-border-pills-home",
  role: "tab",
  "aria-controls": "v-border-pills-home",
  "aria-selected": "true"
}, "Home"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link text-center",
  id: "v-border-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#v-border-pills-profile",
  role: "tab",
  "aria-controls": "v-border-pills-profile",
  "aria-selected": "false"
}, "Profile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link text-center",
  id: "v-border-pills-messages-tab",
  "data-bs-toggle": "pill",
  href: "#v-border-pills-messages",
  role: "tab",
  "aria-controls": "v-border-pills-messages",
  "aria-selected": "false"
}, "Messages"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link text-center",
  id: "v-border-pills-settings-tab",
  "data-bs-toggle": "pill",
  href: "#v-border-pills-settings",
  role: "tab",
  "aria-controls": "v-border-pills-settings",
  "aria-selected": "false"
}, "Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "v-border-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "v-border-pills-home",
  role: "tabpanel",
  "aria-labelledby": "v-border-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-border-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "v-border-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3 rounded-circle",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mt-0 mb-3"
}, "Media heading"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-border-pills-messages",
  role: "tabpanel",
  "aria-labelledby": "v-border-pills-messages-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-border-pills-settings",
  role: "tabpanel",
  "aria-labelledby": "v-border-pills-settings-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])])])], -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "code-section-container show-code"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_71 = [_hoisted_70];
var _hoisted_72 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body vertical-border-pill tabs\">\n    <div class=\"col-sm-3 col-12\">\n        <div class=\"nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto\" id=\"v-border-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n            <a\n                class=\"nav-link active\"\n                id=\"v-border-pills-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-border-pills-home\"\n                role=\"tab\"\n                aria-controls=\"v-border-pills-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n            <a\n                class=\"nav-link text-center\"\n                id=\"v-border-pills-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-border-pills-profile\"\n                role=\"tab\"\n                aria-controls=\"v-border-pills-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n            <a\n                class=\"nav-link text-center\"\n                id=\"v-border-pills-messages-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-border-pills-messages\"\n                role=\"tab\"\n                aria-controls=\"v-border-pills-messages\"\n                aria-selected=\"false\"\n                >Messages</a\n            >\n            <a\n                class=\"nav-link text-center\"\n                id=\"v-border-pills-settings-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-border-pills-settings\"\n                role=\"tab\"\n                aria-controls=\"v-border-pills-settings\"\n                aria-selected=\"false\"\n                >Settings</a\n            >\n        </div>\n    </div>\n\n    <div class=\"col-sm-9 col-12\">\n        <div class=\"tab-content\" id=\"v-border-pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"v-border-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-border-pills-home-tab\">\n                <h4 class=\"mb-4\">We move your world!</h4>\n                <p class=\"mb-4\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-border-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-border-pills-profile-tab\">\n                <div class=\"media\">\n                    <img class=\"me-3 rounded-circle\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-3\">Media heading</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-border-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-border-pills-messages-tab\">\n                <p class=\"dropcap dc-outline-primary\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p>\n            </div>\n\n            <div class=\"tab-pane fade\" id=\"v-border-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-border-pills-settings-tab\">\n                <blockquote class=\"blockquote\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                </blockquote>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_74 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_75 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Border Tabs")])])], -1
/* HOISTED */
);

var _hoisted_77 = {
  "class": "panel-body border-tab tabs"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mt-3",
  id: "border-tabs",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "border-home-tab",
  "data-bs-toggle": "tab",
  href: "#border-home",
  role: "tab",
  "aria-controls": "border-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "border-profile-tab",
  "data-bs-toggle": "tab",
  href: "#border-profile",
  role: "tab",
  "aria-controls": "border-profile",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "border-contact-tab",
  "data-bs-toggle": "tab",
  href: "#border-contact",
  role: "tab",
  "aria-controls": "border-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])])], -1
/* HOISTED */
);

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content mb-4",
  id: "border-tabsContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "border-home",
  role: "tabpanel",
  "aria-labelledby": "border-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "border-profile",
  role: "tabpanel",
  "aria-labelledby": "border-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "meta-usr-img me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "border-contact",
  role: "tabpanel",
  "aria-labelledby": "border-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_80 = {
  "class": "code-section-container show-code"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_82 = [_hoisted_81];
var _hoisted_83 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "\n<div class=\"panel-body border-tab tabs\">\n    <ul class=\"nav nav-tabs mt-3\" id=\"border-tabs\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"border-home-tab\" data-bs-toggle=\"tab\" href=\"#border-home\" role=\"tab\" aria-controls=\"border-home\" aria-selected=\"true\"\n                ><svg> ... </svg>\n                Home\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"border-profile-tab\" data-bs-toggle=\"tab\" href=\"#border-profile\" role=\"tab\" aria-controls=\"border-profile\" aria-selected=\"false\"\n                ><svg> ... </svg>\n                Profile\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"border-contact-tab\" data-bs-toggle=\"tab\" href=\"#border-contact\" role=\"tab\" aria-controls=\"border-contact\" aria-selected=\"false\"\n                ><svg> ... </svg>\n                Contact\n            </a>\n        </li>\n    </ul>\n    <div class=\"tab-content mb-4\" id=\"border-tabsContent\">\n        <div class=\"tab-pane fade show active\" id=\"border-home\" role=\"tabpanel\" aria-labelledby=\"border-home-tab\">\n            <h4 class=\"mb-4\">We move your world!</h4>\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"border-profile\" role=\"tabpanel\" aria-labelledby=\"border-profile-tab\">\n            <div class=\"media\">\n                <img class=\"meta-usr-img me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"border-contact\" role=\"tabpanel\" aria-labelledby=\"border-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_86 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Border Top")])])], -1
/* HOISTED */
);

var _hoisted_88 = {
  "class": "panel-body border-top-tab tabs"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3 mt-3",
  id: "borderTop",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "border-top-home-tab",
  "data-bs-toggle": "tab",
  href: "#border-top-home",
  role: "tab",
  "aria-controls": "border-top-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "border-top-profile-tab",
  "data-bs-toggle": "tab",
  href: "#border-top-profile",
  role: "tab",
  "aria-controls": "border-top-profile",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "border-top-contact-tab",
  "data-bs-toggle": "tab",
  href: "#border-top-contact",
  role: "tab",
  "aria-controls": "border-top-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "border-top-setting-tab",
  "data-bs-toggle": "tab",
  href: "#border-top-setting",
  role: "tab",
  "aria-controls": "border-top-setting",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Settings")])])], -1
/* HOISTED */
);

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "borderTopContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "border-top-home",
  role: "tabpanel",
  "aria-labelledby": "border-top-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "border-top-profile",
  role: "tabpanel",
  "aria-labelledby": "border-top-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "border-top-contact",
  role: "tabpanel",
  "aria-labelledby": "border-top-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "border-top-setting",
  role: "tabpanel",
  "aria-labelledby": "border-top-setting-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])], -1
/* HOISTED */
);

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

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body border-top-tab tabs\">\n    <ul class=\"nav nav-tabs mb-3 mt-3\" id=\"borderTop\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"border-top-home-tab\" data-bs-toggle=\"tab\" href=\"#border-top-home\" role=\"tab\" aria-controls=\"border-top-home\" aria-selected=\"true\">\n                <svg> ... </svg>\n                Home\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"border-top-profile-tab\" data-bs-toggle=\"tab\" href=\"#border-top-profile\" role=\"tab\" aria-controls=\"border-top-profile\" aria-selected=\"false\">\n                <svg> ... </svg>\n                Profile\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"border-top-contact-tab\" data-bs-toggle=\"tab\" href=\"#border-top-contact\" role=\"tab\" aria-controls=\"border-top-contact\" aria-selected=\"false\">\n                <svg> ... </svg>\n                Contact\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"border-top-setting-tab\" data-bs-toggle=\"tab\" href=\"#border-top-setting\" role=\"tab\" aria-controls=\"border-top-setting\" aria-selected=\"false\">\n                <svg> ... </svg>\n                Settings\n            </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\" id=\"borderTopContent\">\n        <div class=\"tab-pane fade show active\" id=\"border-top-home\" role=\"tabpanel\" aria-labelledby=\"border-top-home-tab\">\n            <h4 class=\"mb-4\">We move your world!</h4>\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"border-top-profile\" role=\"tabpanel\" aria-labelledby=\"border-top-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"border-top-contact\" role=\"tabpanel\" aria-labelledby=\"border-top-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"border-top-setting\" role=\"tabpanel\" aria-labelledby=\"border-top-setting-tab\">\n            <blockquote class=\"blockquote\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            </blockquote>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_96 = {
  "class": "row"
};
var _hoisted_97 = {
  id: "tabsLine",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_98 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Line")])])], -1
/* HOISTED */
);

var _hoisted_100 = {
  "class": "panel-body underline-content tabs"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3",
  id: "lineTab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "underline-home-tab",
  "data-bs-toggle": "tab",
  href: "#underline-home",
  role: "tab",
  "aria-controls": "underline-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "underline-profile-tab",
  "data-bs-toggle": "tab",
  href: "#underline-profile",
  role: "tab",
  "aria-controls": "underline-profile",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "underline-contact-tab",
  "data-bs-toggle": "tab",
  href: "#underline-contact",
  role: "tab",
  "aria-controls": "underline-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])])], -1
/* HOISTED */
);

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "lineTabContent-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "underline-home",
  role: "tabpanel",
  "aria-labelledby": "underline-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "underline-profile",
  role: "tabpanel",
  "aria-labelledby": "underline-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "underline-contact",
  role: "tabpanel",
  "aria-labelledby": "underline-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

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

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body underline-content tabs\">\n    <ul class=\"nav nav-tabs mb-3\" id=\"lineTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"underline-home-tab\" data-bs-toggle=\"tab\" href=\"#underline-home\" role=\"tab\" aria-controls=\"underline-home\" aria-selected=\"true\">\n                <svg> ... </svg>\n                Home\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"underline-profile-tab\" data-bs-toggle=\"tab\" href=\"#underline-profile\" role=\"tab\" aria-controls=\"underline-profile\" aria-selected=\"false\"\n                ><svg> ... </svg>\n                Profile\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"underline-contact-tab\" data-bs-toggle=\"tab\" href=\"#underline-contact\" role=\"tab\" aria-controls=\"underline-contact\" aria-selected=\"false\"\n                ><svg> ... </svg>\n                Contact\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"lineTabContent-3\">\n        <div class=\"tab-pane fade show active\" id=\"underline-home\" role=\"tabpanel\" aria-labelledby=\"underline-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"underline-profile\" role=\"tabpanel\" aria-labelledby=\"underline-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"underline-contact\" role=\"tabpanel\" aria-labelledby=\"underline-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_108 = {
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Animated Line")])])], -1
/* HOISTED */
);

var _hoisted_111 = {
  "class": "panel-body animated-underline-content tabs"
};

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3",
  id: "lineTab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "underline-home-anim-tab",
  "data-bs-toggle": "tab",
  href: "#underline-home-anim",
  role: "tab",
  "aria-controls": "underline-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "underline-profile-anim-tab",
  "data-bs-toggle": "tab",
  href: "#underline-profile-anim",
  role: "tab",
  "aria-controls": "underline-profile",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "underline-contact-anim-tab",
  "data-bs-toggle": "tab",
  href: "#underline-contact-anim",
  role: "tab",
  "aria-controls": "underline-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])])], -1
/* HOISTED */
);

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "lineTabContent-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "underline-home-anim",
  role: "tabpanel",
  "aria-labelledby": "underline-home-anim-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "underline-profile-anim",
  role: "tabpanel",
  "aria-labelledby": "underline-profile-anim-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "underline-contact-anim",
  role: "tabpanel",
  "aria-labelledby": "underline-contact-anim-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_114 = {
  "class": "code-section-container show-code"
};

var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_116 = [_hoisted_115];
var _hoisted_117 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body animated-underline-content tabs\">\n    <ul class=\"nav nav-tabs mb-3\" id=\"lineTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link active\"\n                id=\"underline-home-anim-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#underline-home-anim\"\n                role=\"tab\"\n                aria-controls=\"underline-home\"\n                aria-selected=\"true\"\n                ><svg> ... </svg>\n                Home\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"underline-profile-anim-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#underline-profile-anim\"\n                role=\"tab\"\n                aria-controls=\"underline-profile\"\n                aria-selected=\"false\"\n            >\n                <svg> ... </svg>\n                Profile\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"underline-contact-anim-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#underline-contact-anim\"\n                role=\"tab\"\n                aria-controls=\"underline-contact\"\n                aria-selected=\"false\"\n                ><svg> ... </svg>\n                Contact\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"lineTabContent-3\">\n        <div class=\"tab-pane fade show active\" id=\"underline-home-anim\" role=\"tabpanel\" aria-labelledby=\"underline-home-anim-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"underline-profile-anim\" role=\"tabpanel\" aria-labelledby=\"underline-profile-anim-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"underline-contact-anim\" role=\"tabpanel\" aria-labelledby=\"underline-contact-anim-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_119 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_120 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Vertical Line Tab")])])], -1
/* HOISTED */
);

var _hoisted_122 = {
  "class": "panel-body vertical-line-pill tabs"
};

var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-4 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto",
  id: "v-line-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active mb-3",
  id: "v-line-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#v-line-pills-home",
  role: "tab",
  "aria-controls": "v-line-pills-home",
  "aria-selected": "true"
}, "Home"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-3 text-center",
  id: "v-line-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#v-line-pills-profile",
  role: "tab",
  "aria-controls": "v-line-pills-profile",
  "aria-selected": "false"
}, "Profile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-3 text-center",
  id: "v-line-pills-messages-tab",
  "data-bs-toggle": "pill",
  href: "#v-line-pills-messages",
  role: "tab",
  "aria-controls": "v-line-pills-messages",
  "aria-selected": "false"
}, "Messages"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link text-center",
  id: "v-line-pills-settings-tab",
  "data-bs-toggle": "pill",
  href: "#v-line-pills-settings",
  role: "tab",
  "aria-controls": "v-line-pills-settings",
  "aria-selected": "false"
}, "Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "v-line-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "v-line-pills-home",
  role: "tabpanel",
  "aria-labelledby": "v-line-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-line-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "v-line-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3 rounded-circle",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mt-0"
}, "Media heading"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-line-pills-messages",
  role: "tabpanel",
  "aria-labelledby": "v-line-pills-messages-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-line-pills-settings",
  role: "tabpanel",
  "aria-labelledby": "v-line-pills-settings-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])])])], -1
/* HOISTED */
);

var _hoisted_124 = {
  "class": "code-section-container show-code"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_126 = [_hoisted_125];
var _hoisted_127 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body vertical-line-pill tabs\">\n    <div class=\"col-sm-3 col-12\">\n        <div class=\"nav flex-column nav-pills mb-sm-0 mb-3 text-center mx-auto\" id=\"v-line-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n            <a\n                class=\"nav-link active mb-3\"\n                id=\"v-line-pills-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-line-pills-home\"\n                role=\"tab\"\n                aria-controls=\"v-line-pills-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n            <a\n                class=\"nav-link mb-3 text-center\"\n                id=\"v-line-pills-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-line-pills-profile\"\n                role=\"tab\"\n                aria-controls=\"v-line-pills-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n            <a\n                class=\"nav-link mb-3 text-center\"\n                id=\"v-line-pills-messages-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-line-pills-messages\"\n                role=\"tab\"\n                aria-controls=\"v-line-pills-messages\"\n                aria-selected=\"false\"\n                >Messages</a\n            >\n            <a\n                class=\"nav-link text-center\"\n                id=\"v-line-pills-settings-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#v-line-pills-settings\"\n                role=\"tab\"\n                aria-controls=\"v-line-pills-settings\"\n                aria-selected=\"false\"\n                >Settings</a\n            >\n        </div>\n    </div>\n\n    <div class=\"col-sm-9 col-12\">\n        <div class=\"tab-content\" id=\"v-line-pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"v-line-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-line-pills-home-tab\">\n                <h4 class=\"mb-4\">We move your world!</h4>\n                <p class=\"mb-4\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </p>\n\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                </p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-line-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-line-pills-profile-tab\">\n                <div class=\"media\">\n                    <img class=\"me-3 rounded-circle\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0\">Media heading</h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    </div>\n                </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-line-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-line-pills-messages-tab\">\n                <p class=\"dropcap dc-outline-primary\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                </p>\n            </div>\n            <div class=\"tab-pane fade\" id=\"v-line-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-line-pills-settings-tab\">\n                <blockquote class=\"blockquote\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                </blockquote>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_129 = {
  "class": "row"
};
var _hoisted_130 = {
  id: "tabsAlignments",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_131 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "justify-tab"
}, "Justify Tabs")])])], -1
/* HOISTED */
);

var _hoisted_133 = {
  "class": "panel-body justify-tab tabs"
};

var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3 mt-3 nav-fill",
  id: "justifyTab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "justify-home-tab",
  "data-bs-toggle": "tab",
  href: "#justify-home",
  role: "tab",
  "aria-controls": "justify-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-profile-tab",
  "data-bs-toggle": "tab",
  href: "#justify-profile",
  role: "tab",
  "aria-controls": "justify-profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-contact-tab",
  "data-bs-toggle": "tab",
  href: "#justify-contact",
  role: "tab",
  "aria-controls": "justify-contact",
  "aria-selected": "false"
}, "Contact")])], -1
/* HOISTED */
);

var _hoisted_135 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "justifyTabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "justify-home",
  role: "tabpanel",
  "aria-labelledby": "justify-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-profile",
  role: "tabpanel",
  "aria-labelledby": "justify-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-contact",
  role: "tabpanel",
  "aria-labelledby": "justify-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_136 = {
  "class": "code-section-container show-code"
};

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_138 = [_hoisted_137];
var _hoisted_139 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body justify-tab tabs\">\n    <ul class=\"nav nav-tabs mb-3 mt-3 nav-fill\" id=\"justifyTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"justify-home-tab\" data-bs-toggle=\"tab\" href=\"#justify-home\" role=\"tab\" aria-controls=\"justify-home\" aria-selected=\"true\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"justify-profile-tab\" data-bs-toggle=\"tab\" href=\"#justify-profile\" role=\"tab\" aria-controls=\"justify-profile\" aria-selected=\"false\"\n                >Profile</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"justify-contact-tab\" data-bs-toggle=\"tab\" href=\"#justify-contact\" role=\"tab\" aria-controls=\"justify-contact\" aria-selected=\"false\"\n                >Contact</a\n            >\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"justifyTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"justify-home\" role=\"tabpanel\" aria-labelledby=\"justify-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-profile\" role=\"tabpanel\" aria-labelledby=\"justify-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-contact\" role=\"tabpanel\" aria-labelledby=\"justify-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_141 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_142 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Justify Pills")])])], -1
/* HOISTED */
);

var _hoisted_144 = {
  "class": "panel-body justify-pill tabs"
};

var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-3 mt-3 nav-fill",
  id: "justify-pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "justify-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#justify-pills-home",
  role: "tab",
  "aria-controls": "justify-pills-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#justify-pills-profile",
  role: "tab",
  "aria-controls": "justify-pills-profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-pills-contact-tab",
  "data-bs-toggle": "pill",
  href: "#justify-pills-contact",
  role: "tab",
  "aria-controls": "justify-pills-contact",
  "aria-selected": "false"
}, "Contact")])], -1
/* HOISTED */
);

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "justify-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "justify-pills-home",
  role: "tabpanel",
  "aria-labelledby": "justify-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "justify-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-pills-contact",
  role: "tabpanel",
  "aria-labelledby": "justify-pills-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

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

var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body justify-pill tabs\">\n    <ul class=\"nav nav-pills mb-3 mt-3 nav-fill\" id=\"justify-pills-tab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link active\"\n                id=\"justify-pills-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-pills-home\"\n                role=\"tab\"\n                aria-controls=\"justify-pills-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-pills-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-pills-profile\"\n                role=\"tab\"\n                aria-controls=\"justify-pills-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-pills-contact-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-pills-contact\"\n                role=\"tab\"\n                aria-controls=\"justify-pills-contact\"\n                aria-selected=\"false\"\n                >Contact</a\n            >\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"justify-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"justify-pills-home\" role=\"tabpanel\" aria-labelledby=\"justify-pills-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-pills-profile\" role=\"tabpanel\" aria-labelledby=\"justify-pills-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-pills-contact\" role=\"tabpanel\" aria-labelledby=\"justify-pills-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_152 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_153 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Justify Center Tabs")])])], -1
/* HOISTED */
);

var _hoisted_155 = {
  "class": "panel-body tab-justify-centered tabs"
};

var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3 mt-3 justify-content-center",
  id: "justifyCenterTab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "justify-center-home-tab",
  "data-bs-toggle": "tab",
  href: "#justify-center-home",
  role: "tab",
  "aria-controls": "justify-center-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-center-profile-tab",
  "data-bs-toggle": "tab",
  href: "#justify-center-profile",
  role: "tab",
  "aria-controls": "justify-center-profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-center-contact-tab",
  "data-bs-toggle": "tab",
  href: "#justify-center-contact",
  role: "tab",
  "aria-controls": "justify-center-contact",
  "aria-selected": "false"
}, "Contact")])], -1
/* HOISTED */
);

var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "justifyCenterTabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "justify-center-home",
  role: "tabpanel",
  "aria-labelledby": "justify-center-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-center-profile",
  role: "tabpanel",
  "aria-labelledby": "justify-center-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-center-contact",
  role: "tabpanel",
  "aria-labelledby": "justify-center-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_158 = {
  "class": "code-section-container show-code"
};

var _hoisted_159 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_160 = [_hoisted_159];
var _hoisted_161 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body tab-justify-centered tabs\">\n    <ul class=\"nav nav-tabs mb-3 mt-3 justify-content-center\" id=\"justifyCenterTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link active\"\n                id=\"justify-center-home-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#justify-center-home\"\n                role=\"tab\"\n                aria-controls=\"justify-center-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-center-profile-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#justify-center-profile\"\n                role=\"tab\"\n                aria-controls=\"justify-center-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-center-contact-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#justify-center-contact\"\n                role=\"tab\"\n                aria-controls=\"justify-center-contact\"\n                aria-selected=\"false\"\n                >Contact</a\n            >\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"justifyCenterTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"justify-center-home\" role=\"tabpanel\" aria-labelledby=\"justify-center-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-center-profile\" role=\"tabpanel\" aria-labelledby=\"justify-center-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-center-contact\" role=\"tabpanel\" aria-labelledby=\"justify-center-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_163 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_164 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Justify Center Pills")])])], -1
/* HOISTED */
);

var _hoisted_166 = {
  "class": "panel-body pill-justify-centered tabs"
};

var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-3 mt-3 justify-content-center",
  id: "justify-center-pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "justify-center-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#justify-center-pills-home",
  role: "tab",
  "aria-controls": "justify-center-pills-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-center-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#justify-center-pills-profile",
  role: "tab",
  "aria-controls": "justify-center-pills-profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-center-pills-contact-tab",
  "data-bs-toggle": "pill",
  href: "#justify-center-pills-contact",
  role: "tab",
  "aria-controls": "justify-center-pills-contact",
  "aria-selected": "false"
}, "Contact")])], -1
/* HOISTED */
);

var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "justify-center-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "justify-center-pills-home",
  role: "tabpanel",
  "aria-labelledby": "justify-center-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-center-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "justify-center-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-center-pills-contact",
  role: "tabpanel",
  "aria-labelledby": "justify-center-pills-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_169 = {
  "class": "code-section-container show-code"
};

var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_171 = [_hoisted_170];
var _hoisted_172 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_173 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body pill-justify-centered tabs\">\n    <ul class=\"nav nav-pills mb-3 mt-3 justify-content-center\" id=\"justify-center-pills-tab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link active\"\n                id=\"justify-center-pills-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-center-pills-home\"\n                role=\"tab\"\n                aria-controls=\"justify-center-pills-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-center-pills-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-center-pills-profile\"\n                role=\"tab\"\n                aria-controls=\"justify-center-pills-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-center-pills-contact-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-center-pills-contact\"\n                role=\"tab\"\n                aria-controls=\"justify-center-pills-contact\"\n                aria-selected=\"false\"\n                >Contact</a\n            >\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"justify-center-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"justify-center-pills-home\" role=\"tabpanel\" aria-labelledby=\"justify-center-pills-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-center-pills-profile\" role=\"tabpanel\" aria-labelledby=\"justify-center-pills-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-center-pills-contact\" role=\"tabpanel\" aria-labelledby=\"justify-center-pills-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_174 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_175 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Justify Right Tabs")])])], -1
/* HOISTED */
);

var _hoisted_177 = {
  "class": "panel-body tab-justify-right tabs"
};

var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs mb-3 mt-3 justify-content-end",
  id: "justifyRightTab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "justify-right-home-tab",
  "data-bs-toggle": "tab",
  href: "#justify-right-home",
  role: "tab",
  "aria-controls": "justify-right-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-right-profile-tab",
  "data-bs-toggle": "tab",
  href: "#justify-right-profile",
  role: "tab",
  "aria-controls": "justify-right-profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-right-contact-tab",
  "data-bs-toggle": "tab",
  href: "#justify-right-contact",
  role: "tab",
  "aria-controls": "justify-right-contact",
  "aria-selected": "false"
}, "Contact")])], -1
/* HOISTED */
);

var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "justifyRightTabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "justify-right-home",
  role: "tabpanel",
  "aria-labelledby": "justify-right-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-right-profile",
  role: "tabpanel",
  "aria-labelledby": "justify-right-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-right-contact",
  role: "tabpanel",
  "aria-labelledby": "justify-right-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_180 = {
  "class": "code-section-container show-code"
};

var _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_182 = [_hoisted_181];
var _hoisted_183 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body tab-justify-right tabs\">\n    <ul class=\"nav nav-tabs mb-3 mt-3 justify-content-end\" id=\"justifyRightTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link active\"\n                id=\"justify-right-home-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#justify-right-home\"\n                role=\"tab\"\n                aria-controls=\"justify-right-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-right-profile-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#justify-right-profile\"\n                role=\"tab\"\n                aria-controls=\"justify-right-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-right-contact-tab\"\n                data-bs-toggle=\"tab\"\n                href=\"#justify-right-contact\"\n                role=\"tab\"\n                aria-controls=\"justify-right-contact\"\n                aria-selected=\"false\"\n                >Contact</a\n            >\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"justifyRightTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"justify-right-home\" role=\"tabpanel\" aria-labelledby=\"justify-right-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-right-profile\" role=\"tabpanel\" aria-labelledby=\"justify-right-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-right-contact\" role=\"tabpanel\" aria-labelledby=\"justify-right-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_185 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_186 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Justify Right Pills")])])], -1
/* HOISTED */
);

var _hoisted_188 = {
  "class": "panel-body pill-justify-right tabs"
};

var _hoisted_189 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-3 mt-3 justify-content-end",
  id: "justify-right-pills-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active",
  id: "justify-right-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#justify-right-pills-home",
  role: "tab",
  "aria-controls": "justify-right-pills-home",
  "aria-selected": "true"
}, "Home")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-right-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#justify-right-pills-profile",
  role: "tab",
  "aria-controls": "justify-right-pills-profile",
  "aria-selected": "false"
}, "Profile")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "justify-right-pills-contact-tab",
  "data-bs-toggle": "pill",
  href: "#justify-right-pills-contact",
  role: "tab",
  "aria-controls": "justify-right-pills-contact",
  "aria-selected": "false"
}, "Contact")])], -1
/* HOISTED */
);

var _hoisted_190 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "justify-right-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "justify-right-pills-home",
  role: "tabpanel",
  "aria-labelledby": "justify-right-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-right-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "justify-right-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "justify-right-pills-contact",
  role: "tabpanel",
  "aria-labelledby": "justify-right-pills-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])], -1
/* HOISTED */
);

var _hoisted_191 = {
  "class": "code-section-container show-code"
};

var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_193 = [_hoisted_192];
var _hoisted_194 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body pill-justify-right tabs\">\n    <ul class=\"nav nav-pills mb-3 mt-3 justify-content-end\" id=\"justify-right-pills-tab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link active\"\n                id=\"justify-right-pills-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-right-pills-home\"\n                role=\"tab\"\n                aria-controls=\"justify-right-pills-home\"\n                aria-selected=\"true\"\n                >Home</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-right-pills-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-right-pills-profile\"\n                role=\"tab\"\n                aria-controls=\"justify-right-pills-profile\"\n                aria-selected=\"false\"\n                >Profile</a\n            >\n        </li>\n        <li class=\"nav-item\">\n            <a\n                class=\"nav-link\"\n                id=\"justify-right-pills-contact-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#justify-right-pills-contact\"\n                role=\"tab\"\n                aria-controls=\"justify-right-pills-contact\"\n                aria-selected=\"false\"\n                >Contact</a\n            >\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"justify-right-pills-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"justify-right-pills-home\" role=\"tabpanel\" aria-labelledby=\"justify-right-pills-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-right-pills-profile\" role=\"tabpanel\" aria-labelledby=\"justify-right-pills-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"justify-right-pills-contact\" role=\"tabpanel\" aria-labelledby=\"justify-right-pills-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_196 = {
  "class": "row"
};
var _hoisted_197 = {
  id: "tabsWithIcons",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_198 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Pills with Icon")])])], -1
/* HOISTED */
);

var _hoisted_200 = {
  "class": "panel-body rounded-pills-icon tabs"
};

var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-4 mt-3 justify-content-center",
  id: "rounded-pills-icon-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 active text-center",
  id: "rounded-pills-icon-home-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-pills-icon-home",
  role: "tab",
  "aria-controls": "rounded-pills-icon-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 text-center",
  id: "rounded-pills-icon-profile-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-pills-icon-profile",
  role: "tab",
  "aria-controls": "rounded-pills-icon-profile",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 text-center",
  id: "rounded-pills-icon-contact-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-pills-icon-contact",
  role: "tab",
  "aria-controls": "rounded-pills-icon-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Contact")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 text-center",
  id: "rounded-pills-icon-settings-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-pills-icon-settings",
  role: "tab",
  "aria-controls": "rounded-pills-icon-settings",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Settings")])])], -1
/* HOISTED */
);

var _hoisted_202 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "rounded-pills-icon-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "rounded-pills-icon-home",
  role: "tabpanel",
  "aria-labelledby": "rounded-pills-icon-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-pills-icon-profile",
  role: "tabpanel",
  "aria-labelledby": "rounded-pills-icon-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-pills-icon-contact",
  role: "tabpanel",
  "aria-labelledby": "rounded-pills-icon-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-pills-icon-settings",
  role: "tabpanel",
  "aria-labelledby": "rounded-pills-icon-settings-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])], -1
/* HOISTED */
);

var _hoisted_203 = {
  "class": "code-section-container show-code"
};

var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_205 = [_hoisted_204];
var _hoisted_206 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_207 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body rounded-pills-icon tabs\">\n    <ul class=\"nav nav-pills mb-4 mt-3 justify-content-center\" id=\"rounded-pills-icon-tab\" role=\"tablist\">\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-2 active text-center\"\n                id=\"rounded-pills-icon-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-pills-icon-home\"\n                role=\"tab\"\n                aria-controls=\"rounded-pills-icon-home\"\n                aria-selected=\"true\"\n                >\n                <svg> ... </svg>\n                Home\n            </a>\n        </li>\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-2 text-center\"\n                id=\"rounded-pills-icon-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-pills-icon-profile\"\n                role=\"tab\"\n                aria-controls=\"rounded-pills-icon-profile\"\n                aria-selected=\"false\"\n                >\n                <svg> ... </svg>\n                Profile\n            </a>\n        </li>\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-2 text-center\"\n                id=\"rounded-pills-icon-contact-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-pills-icon-contact\"\n                role=\"tab\"\n                aria-controls=\"rounded-pills-icon-contact\"\n                aria-selected=\"false\"\n                >\n                <svg> ... </svg>\n                Contact\n            </a>\n        </li>\n\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-2 text-center\"\n                id=\"rounded-pills-icon-settings-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-pills-icon-settings\"\n                role=\"tab\"\n                aria-controls=\"rounded-pills-icon-settings\"\n                aria-selected=\"false\"\n                >\n                <svg> ... </svg>\n                Settings\n            </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\" id=\"rounded-pills-icon-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"rounded-pills-icon-home\" role=\"tabpanel\" aria-labelledby=\"rounded-pills-icon-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"rounded-pills-icon-profile\" role=\"tabpanel\" aria-labelledby=\"rounded-pills-icon-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"rounded-pills-icon-contact\" role=\"tabpanel\" aria-labelledby=\"rounded-pills-icon-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"rounded-pills-icon-settings\" role=\"tabpanel\" aria-labelledby=\"rounded-pills-icon-settings-tab\">\n            <blockquote class=\"blockquote\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            </blockquote>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_208 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_209 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_210 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Circle with Icon")])])], -1
/* HOISTED */
);

var _hoisted_211 = {
  "class": "panel-body rounded-circle-pills-icon tabs"
};

var _hoisted_212 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-pills mb-4 mt-3 justify-content-center",
  id: "rounded-circle-pills-icon-tab",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-1 rounded-circle active",
  id: "rounded-circle-pills-icon-home-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-pills-icon-home",
  role: "tab",
  "aria-controls": "rounded-circle-pills-icon-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-1 rounded-circle",
  id: "rounded-circle-pills-icon-profile-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-pills-icon-profile",
  role: "tab",
  "aria-controls": "rounded-circle-pills-icon-profile",
  "aria-selected": "false"
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
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-1 rounded-circle",
  id: "rounded-circle-pills-icon-contact-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-pills-icon-contact",
  role: "tab",
  "aria-controls": "rounded-circle-pills-icon-contact",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item ms-2 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-1 rounded-circle",
  id: "rounded-circle-pills-icon-settings-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-pills-icon-settings",
  role: "tab",
  "aria-controls": "rounded-circle-pills-icon-settings",
  "aria-selected": "false"
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
})])])])], -1
/* HOISTED */
);

var _hoisted_213 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "rounded-circle-pills-icon-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "rounded-circle-pills-icon-home",
  role: "tabpanel",
  "aria-labelledby": "rounded-circle-pills-icon-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-circle-pills-icon-profile",
  role: "tabpanel",
  "aria-labelledby": "rounded-circle-pills-icon-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-circle-pills-icon-contact",
  role: "tabpanel",
  "aria-labelledby": "rounded-circle-pills-icon-contact-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-circle-pills-icon-settings",
  role: "tabpanel",
  "aria-labelledby": "rounded-pills-icon-settings-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])], -1
/* HOISTED */
);

var _hoisted_214 = {
  "class": "code-section-container show-code"
};

var _hoisted_215 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_216 = [_hoisted_215];
var _hoisted_217 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_218 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body rounded-circle-pills-icon tabs\">\n    <ul class=\"nav nav-pills mb-4 mt-3 justify-content-center\" id=\"rounded-circle-pills-icon-tab\" role=\"tablist\">\n        <li class=\"nav-item me-2\">\n            <a\n                class=\"nav-link mb-1 rounded-circle active\"\n                id=\"rounded-circle-pills-icon-home-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-circle-pills-icon-home\"\n                role=\"tab\"\n                aria-controls=\"rounded-circle-pills-icon-home\"\n                aria-selected=\"true\"\n            >\n                <svg> ... </svg>\n            </a>\n        </li>\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-1 rounded-circle\"\n                id=\"rounded-circle-pills-icon-profile-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-circle-pills-icon-profile\"\n                role=\"tab\"\n                aria-controls=\"rounded-circle-pills-icon-profile\"\n                aria-selected=\"false\"\n            >\n                <svg> ... </svg>\n            </a>\n        </li>\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-1 rounded-circle\"\n                id=\"rounded-circle-pills-icon-contact-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-circle-pills-icon-contact\"\n                role=\"tab\"\n                aria-controls=\"rounded-circle-pills-icon-contact\"\n                aria-selected=\"false\"\n            >\n                <svg> ... </svg>\n            </a>\n        </li>\n\n        <li class=\"nav-item ms-2 me-2\">\n            <a\n                class=\"nav-link mb-1 rounded-circle\"\n                id=\"rounded-circle-pills-icon-settings-tab\"\n                data-bs-toggle=\"pill\"\n                href=\"#rounded-circle-pills-icon-settings\"\n                role=\"tab\"\n                aria-controls=\"rounded-circle-pills-icon-settings\"\n                aria-selected=\"false\"\n            >\n                <svg> ... </svg>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"rounded-circle-pills-icon-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"rounded-circle-pills-icon-home\" role=\"tabpanel\" aria-labelledby=\"rounded-circle-pills-icon-home-tab\">\n            <p class=\"mb-4\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"rounded-circle-pills-icon-profile\" role=\"tabpanel\" aria-labelledby=\"rounded-circle-pills-icon-profile-tab\">\n            <div class=\"media\">\n                <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                <div class=\"media-body\">\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra\n                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"rounded-circle-pills-icon-contact\" role=\"tabpanel\" aria-labelledby=\"rounded-circle-pills-icon-contact-tab\">\n            <p class=\"dropcap dc-outline-primary\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            </p>\n        </div>\n        <div class=\"tab-pane fade\" id=\"rounded-circle-pills-icon-settings\" role=\"tabpanel\" aria-labelledby=\"rounded-pills-icon-settings-tab\">\n            <blockquote class=\"blockquote\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            </blockquote>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_219 = {
  "class": "row"
};
var _hoisted_220 = {
  id: "tabsVerticalWithIcon",
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Vertical Rounded With Icon")])])], -1
/* HOISTED */
);

var _hoisted_223 = {
  "class": "panel-body rounded-vertical-pills-icon tabs"
};

var _hoisted_224 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-4 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav flex-column nav-pills mb-sm-0 mb-3",
  id: "rounded-vertical-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 active mx-auto",
  id: "rounded-vertical-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-vertical-pills-home",
  role: "tab",
  "aria-controls": "rounded-vertical-pills-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 mx-auto",
  id: "rounded-vertical-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-vertical-pills-profile",
  role: "tab",
  "aria-controls": "rounded-vertical-pills-profile",
  "aria-selected": "false"
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
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Profile")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2 mx-auto",
  id: "rounded-vertical-pills-messages-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-vertical-pills-messages",
  role: "tab",
  "aria-controls": "rounded-vertical-pills-messages",
  "aria-selected": "false"
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
  "class": "feather feather-mail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "22,6 12,13 2,6"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Messages")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-8 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "rounded-vertical-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "rounded-vertical-pills-home",
  role: "tabpanel",
  "aria-labelledby": "rounded-vertical-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-vertical-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "rounded-vertical-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media mt-4 mb-3 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-vertical-pills-messages",
  role: "tabpanel",
  "aria-labelledby": "rounded-vertical-pills-messages-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])])], -1
/* HOISTED */
);

var _hoisted_225 = {
  "class": "code-section-container show-code"
};

var _hoisted_226 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_227 = [_hoisted_226];
var _hoisted_228 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_229 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body rounded-vertical-pills-icon tabs\">\n    <div class=\"row mb-4 mt-3\">\n        <div class=\"col-sm-4 col-12\">\n            <div class=\"nav flex-column nav-pills mb-sm-0 mb-3\" id=\"rounded-vertical-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                <a\n                    class=\"nav-link mb-2 active mx-auto\"\n                    id=\"rounded-vertical-pills-home-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#rounded-vertical-pills-home\"\n                    role=\"tab\"\n                    aria-controls=\"rounded-vertical-pills-home\"\n                    aria-selected=\"true\"\n                    >\n                    <svg> ... </svg>\n                    Home\n                </a>\n                <a\n                    class=\"nav-link mb-2 mx-auto\"\n                    id=\"rounded-vertical-pills-profile-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#rounded-vertical-pills-profile\"\n                    role=\"tab\"\n                    aria-controls=\"rounded-vertical-pills-profile\"\n                    aria-selected=\"false\"\n                    >\n                    <svg> ... </svg>\n                    Profile\n                </a>\n                <a\n                    class=\"nav-link mb-2 mx-auto\"\n                    id=\"rounded-vertical-pills-messages-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#rounded-vertical-pills-messages\"\n                    role=\"tab\"\n                    aria-controls=\"rounded-vertical-pills-messages\"\n                    aria-selected=\"false\"\n                >\n                    <svg> ... </svg>\n                    Messages\n                </a>\n            </div>\n        </div>\n\n        <div class=\"col-sm-8 col-12\">\n            <div class=\"tab-content\" id=\"rounded-vertical-pills-tabContent\">\n                <div class=\"tab-pane fade show active\" id=\"rounded-vertical-pills-home\" role=\"tabpanel\" aria-labelledby=\"rounded-vertical-pills-home-tab\">\n                    <h4 class=\"mb-4\">We move your world!</h4>\n                    <p class=\"mb-4\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"rounded-vertical-pills-profile\" role=\"tabpanel\" aria-labelledby=\"rounded-vertical-pills-profile-tab\">\n                    <div class=\"media mt-4 mb-3 me-2\">\n                        <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                        <div class=\"media-body\">\n                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"rounded-vertical-pills-messages\" role=\"tabpanel\" aria-labelledby=\"rounded-vertical-pills-messages-tab\">\n                    <p class=\"dropcap dc-outline-primary\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_230 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_231 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_232 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Vertical Circle With Icon")])])], -1
/* HOISTED */
);

var _hoisted_233 = {
  "class": "panel-body rounded-circle-vertical-pills-icon tabs"
};

var _hoisted_234 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-4 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-4 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav flex-column nav-pills",
  id: "rounded-circle-vertical-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link rounded-circle mb-3 mx-auto active",
  id: "rounded-circle-vertical-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-vertical-pills-home",
  role: "tab",
  "aria-controls": "rounded-circle-vertical-pills-home",
  "aria-selected": "true"
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
  "class": "feather feather-home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 22 9 12 15 12 15 22"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link rounded-circle mb-3 mx-auto",
  id: "rounded-circle-vertical-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-vertical-pills-profile",
  role: "tab",
  "aria-controls": "rounded-circle-vertical-pills-profile",
  "aria-selected": "false"
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
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link rounded-circle mb-3 mx-auto",
  id: "rounded-circle-vertical-pills-messages-tab",
  "data-bs-toggle": "pill",
  href: "#rounded-circle-vertical-pills-messages",
  role: "tab",
  "aria-controls": "rounded-circle-vertical-pills-messages",
  "aria-selected": "false"
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
  "class": "feather feather-phone"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-8 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "rounded-circle-vertical-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "rounded-circle-vertical-pills-home",
  role: "tabpanel",
  "aria-labelledby": "rounded-circle-vertical-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-circle-vertical-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "rounded-circle-vertical-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media mt-4 mb-3 me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "rounded-circle-vertical-pills-messages",
  role: "tabpanel",
  "aria-labelledby": "rounded-circle-vertical-pills-messages-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])])], -1
/* HOISTED */
);

var _hoisted_235 = {
  "class": "code-section-container show-code"
};

var _hoisted_236 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_237 = [_hoisted_236];
var _hoisted_238 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_239 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body rounded-circle-vertical-pills-icon tabs\">\n    <div class=\"row mb-4 mt-3\">\n        <div class=\"col-sm-4 col-12\">\n            <div class=\"nav flex-column nav-pills\" id=\"rounded-circle-vertical-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                <a\n                    class=\"nav-link rounded-circle mb-3 mx-auto active\"\n                    id=\"rounded-circle-vertical-pills-home-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#rounded-circle-vertical-pills-home\"\n                    role=\"tab\"\n                    aria-controls=\"rounded-circle-vertical-pills-home\"\n                    aria-selected=\"true\"\n                >\n                    <svg> ... </svg>\n                </a>\n                <a\n                    class=\"nav-link rounded-circle mb-3 mx-auto\"\n                    id=\"rounded-circle-vertical-pills-profile-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#rounded-circle-vertical-pills-profile\"\n                    role=\"tab\"\n                    aria-controls=\"rounded-circle-vertical-pills-profile\"\n                    aria-selected=\"false\"\n                >\n                    <svg> ... </svg>\n                </a>\n                <a\n                    class=\"nav-link rounded-circle mb-3 mx-auto\"\n                    id=\"rounded-circle-vertical-pills-messages-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#rounded-circle-vertical-pills-messages\"\n                    role=\"tab\"\n                    aria-controls=\"rounded-circle-vertical-pills-messages\"\n                    aria-selected=\"false\"\n                >\n                    <svg> ... </svg>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"col-sm-8 col-12\">\n            <div class=\"tab-content\" id=\"rounded-circle-vertical-pills-tabContent\">\n                <div class=\"tab-pane fade show active\" id=\"rounded-circle-vertical-pills-home\" role=\"tabpanel\" aria-labelledby=\"rounded-circle-vertical-pills-home-tab\">\n                    <h4 class=\"mb-4\">We move your world!</h4>\n                    <p class=\"mb-4\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"rounded-circle-vertical-pills-profile\" role=\"tabpanel\" aria-labelledby=\"rounded-circle-vertical-pills-profile-tab\">\n                    <div class=\"media mt-4 mb-3 me-2\">\n                        <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                        <div class=\"media-body\">\n                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"rounded-circle-vertical-pills-messages\" role=\"tabpanel\" aria-labelledby=\"rounded-circle-vertical-pills-messages-tab\">\n                    <p class=\"dropcap dc-outline-primary\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_240 = {
  "class": "row"
};
var _hoisted_241 = {
  id: "tabsVertical",
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Vertical Pills")])])], -1
/* HOISTED */
);

var _hoisted_244 = {
  "class": "panel-body vertical-pill tabs"
};

var _hoisted_245 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-4 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "nav flex-column nav-pills mb-sm-0 mb-3",
  id: "v-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active mb-2",
  id: "v-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#v-pills-home",
  role: "tab",
  "aria-controls": "v-pills-home",
  "aria-selected": "true"
}, "Home"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2",
  id: "v-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#v-pills-profile",
  role: "tab",
  "aria-controls": "v-pills-profile",
  "aria-selected": "false"
}, "Profile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2",
  id: "v-pills-messages-tab",
  "data-bs-toggle": "pill",
  href: "#v-pills-messages",
  role: "tab",
  "aria-controls": "v-pills-messages",
  "aria-selected": "false"
}, "Text"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "v-pills-settings-tab",
  "data-bs-toggle": "pill",
  href: "#v-pills-settings",
  role: "tab",
  "aria-controls": "v-pills-settings",
  "aria-selected": "false"
}, "Settings")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "v-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "v-pills-home",
  role: "tabpanel",
  "aria-labelledby": "v-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "v-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-pills-messages",
  role: "tabpanel",
  "aria-labelledby": "v-pills-messages-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-pills-settings",
  role: "tabpanel",
  "aria-labelledby": "v-pills-settings-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])])])], -1
/* HOISTED */
);

var _hoisted_246 = {
  "class": "code-section-container show-code"
};

var _hoisted_247 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_248 = [_hoisted_247];
var _hoisted_249 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_250 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body vertical-pill tabs\">\n    <div class=\"row mb-4 mt-3\">\n        <div class=\"col-sm-3 col-12\">\n            <div class=\"nav flex-column nav-pills mb-sm-0 mb-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                <a class=\"nav-link active mb-2\" id=\"v-pills-home-tab\" data-bs-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\"\n                    >Home</a\n                >\n                <a class=\"nav-link mb-2\" id=\"v-pills-profile-tab\" data-bs-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\"\n                    >Profile</a\n                >\n                <a\n                    class=\"nav-link mb-2\"\n                    id=\"v-pills-messages-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#v-pills-messages\"\n                    role=\"tab\"\n                    aria-controls=\"v-pills-messages\"\n                    aria-selected=\"false\"\n                    >Text</a\n                >\n                <a class=\"nav-link\" id=\"v-pills-settings-tab\" data-bs-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\"\n                    >Settings</a\n                >\n            </div>\n        </div>\n\n        <div class=\"col-sm-9 col-12\">\n            <div class=\"tab-content\" id=\"v-pills-tabContent\">\n                <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\n                    <h4 class=\"mb-4\">We move your world!</h4>\n                    <p class=\"mb-4\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\n                    <div class=\"media\">\n                        <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                        <div class=\"media-body\">\n                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\n                    <p class=\"dropcap dc-outline-primary\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\n                    <blockquote class=\"blockquote\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_251 = {
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_252 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Justify Vertical Pills Right")])])], -1
/* HOISTED */
);

var _hoisted_254 = {
  "class": "panel-body vertical-pill-right tabs"
};

var _hoisted_255 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mb-4 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-9 col-12 order-sm-0 order-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "v-right-pills-tabContent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "v-right-pills-home",
  role: "tabpanel",
  "aria-labelledby": "v-right-pills-home-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-4"
}, "We move your world!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-4"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-right-pills-profile",
  role: "tabpanel",
  "aria-labelledby": "v-right-pills-profile-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "me-3",
  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alt: "Generic placeholder image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-right-pills-messages",
  role: "tabpanel",
  "aria-labelledby": "v-right-pills-messages-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "dropcap dc-outline-primary"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "v-right-pills-settings",
  role: "tabpanel",
  "aria-labelledby": "v-right-pills-settings-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "blockquote"
}, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-3 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "nav flex-column nav-pills mb-sm-0 mb-3",
  id: "v-right-pills-tab",
  role: "tablist",
  "aria-orientation": "vertical"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link active mb-2",
  id: "v-right-pills-home-tab",
  "data-bs-toggle": "pill",
  href: "#v-right-pills-home",
  role: "tab",
  "aria-controls": "v-right-pills-home",
  "aria-selected": "true"
}, "Home"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2",
  id: "v-right-pills-profile-tab",
  "data-bs-toggle": "pill",
  href: "#v-right-pills-profile",
  role: "tab",
  "aria-controls": "v-right-pills-profile",
  "aria-selected": "false"
}, "Profile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link mb-2",
  id: "v-right-pills-messages-tab",
  "data-bs-toggle": "pill",
  href: "#v-right-pills-messages",
  role: "tab",
  "aria-controls": "v-right-pills-messages",
  "aria-selected": "false"
}, "Text"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link",
  id: "v-right-pills-settings-tab",
  "data-bs-toggle": "pill",
  href: "#v-right-pills-settings",
  role: "tab",
  "aria-controls": "v-right-pills-settings",
  "aria-selected": "false"
}, "Settings")])])], -1
/* HOISTED */
);

var _hoisted_256 = {
  "class": "code-section-container show-code"
};

var _hoisted_257 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_258 = [_hoisted_257];
var _hoisted_259 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_260 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"panel-body vertical-pill-right tabs\">\n    <div class=\"row mb-4 mt-3\">\n        <div class=\"col-sm-9 col-12 order-sm-0 order-1\">\n            <div class=\"tab-content\" id=\"v-right-pills-tabContent\">\n                <div class=\"tab-pane fade show active\" id=\"v-right-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-right-pills-home-tab\">\n                    <h4 class=\"mb-4\">We move your world!</h4>\n                    <p class=\"mb-4\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                    </p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"v-right-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-right-pills-profile-tab\">\n                    <div class=\"media\">\n                        <img class=\"me-3\" src=\"@/assets/images/profile-32.jpeg\" alt=\"Generic placeholder image\" />\n                        <div class=\"media-body\">\n                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n                            viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"v-right-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-right-pills-messages-tab\">\n                    <p class=\"dropcap dc-outline-primary\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                    </p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"v-right-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-right-pills-settings-tab\">\n                    <blockquote class=\"blockquote\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                    </blockquote>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3 col-12\">\n            <div class=\"nav flex-column nav-pills mb-sm-0 mb-3\" id=\"v-right-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                <a\n                    class=\"nav-link active mb-2\"\n                    id=\"v-right-pills-home-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#v-right-pills-home\"\n                    role=\"tab\"\n                    aria-controls=\"v-right-pills-home\"\n                    aria-selected=\"true\"\n                    >Home</a\n                >\n                <a\n                    class=\"nav-link mb-2\"\n                    id=\"v-right-pills-profile-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#v-right-pills-profile\"\n                    role=\"tab\"\n                    aria-controls=\"v-right-pills-profile\"\n                    aria-selected=\"false\"\n                    >Profile</a\n                >\n                <a\n                    class=\"nav-link mb-2\"\n                    id=\"v-right-pills-messages-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#v-right-pills-messages\"\n                    role=\"tab\"\n                    aria-controls=\"v-right-pills-messages\"\n                    aria-selected=\"false\"\n                    >Text</a\n                >\n                <a\n                    class=\"nav-link\"\n                    id=\"v-right-pills-settings-tab\"\n                    data-bs-toggle=\"pill\"\n                    href=\"#v-right-pills-settings\"\n                    role=\"tab\"\n                    aria-controls=\"v-right-pills-settings\"\n                    aria-selected=\"false\"\n                    >Settings</a\n                >\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_14)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_26), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_28];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_37), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_39];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_49), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_51];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_60), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_62];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_71), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_73];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_hoisted_78, _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_82), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_84];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, _hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_93), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_95];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_105), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_107];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [_hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, _hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_116), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_118];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [_hoisted_121, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [_hoisted_123, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_126), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_128];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, _hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $setup.toggleCode('code11');
    })
  }, _hoisted_138), $setup.code_arr.includes('code11') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_140];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [_hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_144, [_hoisted_145, _hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.toggleCode('code12');
    })
  }, _hoisted_149), $setup.code_arr.includes('code12') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_151];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [_hoisted_154, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [_hoisted_156, _hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $setup.toggleCode('code13');
    })
  }, _hoisted_160), $setup.code_arr.includes('code13') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_162];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [_hoisted_167, _hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $setup.toggleCode('code14');
    })
  }, _hoisted_171), $setup.code_arr.includes('code14') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_173];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [_hoisted_176, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [_hoisted_178, _hoisted_179, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $setup.toggleCode('code15');
    })
  }, _hoisted_182), $setup.code_arr.includes('code15') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_184];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_186, [_hoisted_187, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [_hoisted_189, _hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $setup.toggleCode('code16');
    })
  }, _hoisted_193), $setup.code_arr.includes('code16') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_195];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_198, [_hoisted_199, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [_hoisted_201, _hoisted_202, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $setup.toggleCode('code17');
    })
  }, _hoisted_205), $setup.code_arr.includes('code17') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_207];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_208, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [_hoisted_210, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_211, [_hoisted_212, _hoisted_213, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $setup.toggleCode('code18');
    })
  }, _hoisted_216), $setup.code_arr.includes('code18') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_217, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_218];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_219, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_220, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [_hoisted_222, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_223, [_hoisted_224, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $setup.toggleCode('code19');
    })
  }, _hoisted_227), $setup.code_arr.includes('code19') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_228, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_229];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_230, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_231, [_hoisted_232, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_233, [_hoisted_234, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_235, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $setup.toggleCode('code20');
    })
  }, _hoisted_237), $setup.code_arr.includes('code20') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_239];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_240, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_241, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_242, [_hoisted_243, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_244, [_hoisted_245, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_246, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $setup.toggleCode('code21');
    })
  }, _hoisted_248), $setup.code_arr.includes('code21') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_249, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_250];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_251, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [_hoisted_253, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_254, [_hoisted_255, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_256, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn-default toggle-code-snippet",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $setup.toggleCode('code22');
    })
  }, _hoisted_258), $setup.code_arr.includes('code22') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_259, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_260];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/components/tabs.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/tabs.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs_vue_vue_type_template_id_1dfee586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.vue?vue&type=template&id=1dfee586 */ "./resources/js/src/views/components/tabs.vue?vue&type=template&id=1dfee586");
/* harmony import */ var _tabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/components/tabs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_tabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_tabs_vue_vue_type_template_id_1dfee586__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/components/tabs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/components/tabs.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/components/tabs.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./tabs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/tabs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/components/tabs.vue?vue&type=template&id=1dfee586":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/components/tabs.vue?vue&type=template&id=1dfee586 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tabs_vue_vue_type_template_id_1dfee586__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tabs_vue_vue_type_template_id_1dfee586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./tabs.vue?vue&type=template&id=1dfee586 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/tabs.vue?vue&type=template&id=1dfee586");


/***/ })

}]);