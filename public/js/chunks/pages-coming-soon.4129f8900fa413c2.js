(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages-coming-soon"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/pages/coming_soon.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/pages/coming_soon.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_pages_coming_soon_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/pages/coming-soon/style.scss */ "./resources/js/src/assets/sass/pages/coming-soon/style.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'coming_soon',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Comming Soon'
    });
    var days = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var hours = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var minutes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var seconds = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      set_timer();
    });

    var set_timer = function set_timer() {
      // Set the date we're counting down to
      var getYear = new Date().getFullYear() + 1;
      var countDownDate = new Date('Dec 5, ' + getYear + ' 15:37:25').getTime(); // Update the count down every 1 second

      var countdownfunction = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime(); // Find the distance between now an the count down date

        var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.value = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        minutes.value = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        seconds.value = Math.floor(distance % (1000 * 60) / 1000); // If the count down is over, write some text

        if (distance < 0) {
          clearInterval(countdownfunction);
          document.getElementById('timer').innerHTML = 'EXPIRED';
        }
      }, 1000);
    };

    var __returned__ = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      set_timer: set_timer,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_images_mindset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/mindset.svg */ "./resources/js/src/assets/images/mindset.svg");
/* harmony import */ var _assets_images_mindset_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mindset_svg__WEBPACK_IMPORTED_MODULE_1__);


var _hoisted_1 = {
  "class": "layout-px-spacing"
};
var _hoisted_2 = {
  "class": "coming-soon"
};
var _hoisted_3 = {
  "class": "coming-soon-container"
};
var _hoisted_4 = {
  "class": "coming-soon-cont"
};
var _hoisted_5 = {
  "class": "coming-soon-wrap"
};
var _hoisted_6 = {
  "class": "coming-soon-container"
};
var _hoisted_7 = {
  "class": "coming-soon-content"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": ""
}, "Coming Soon", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": ""
}, "We will be here in a shortwhile.....", -1
/* HOISTED */
);

var _hoisted_10 = {
  id: "timer"
};
var _hoisted_11 = {
  "class": "days"
};
var _hoisted_12 = {
  "class": "count"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text"
}, "Days", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "hours"
};
var _hoisted_16 = {
  "class": "count"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text"
}, "Hours", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "min"
};
var _hoisted_20 = {
  "class": "count"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text"
}, "Mins", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "sec"
};
var _hoisted_24 = {
  "class": "count"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text"
}, "Secs", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3>Subscribe to get notified!</h3><form class=\"text-start\"><div class=\"coming-soon\"><div class=\"\"><div id=\"email-field\" class=\"field-wrapper input\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-at-sign\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path></svg><input type=\"email\" placeholder=\"Email\" class=\"form-control\"><button type=\"submit\" class=\"btn btn-primary\">Subscribe</button></div></div></div></form><ul class=\"social list-inline\"><li class=\"list-inline-item\"><a class=\"\" href=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-linkedin\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></a></li><li class=\"list-inline-item\"><a class=\"\" href=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-facebook\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg></a></li><li class=\"list-inline-item\"><a class=\"\" href=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-twitter\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path></svg></a></li><li class=\"list-inline-item\"><a class=\"\" href=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-github\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg></a></li></ul>", 3);

var _hoisted_30 = {
  "class": "terms-conditions"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" © 2021 All Rights Reserved. ");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("CORK");

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" is a product of Arrangic Solutions LLP. ");

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Cookie Preferences", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", ");

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Privacy", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", and ");

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Terms", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "coming-soon-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "l-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "img-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: (_assets_images_mindset_svg__WEBPACK_IMPORTED_MODULE_1___default()),
  alt: "coming_soon"
})])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.days ? $setup.days : '--'), 1
  /* TEXT */
  ), _hoisted_13, _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.hours ? $setup.hours : '--'), 1
  /* TEXT */
  ), _hoisted_17, _hoisted_18]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.minutes ? $setup.minutes : '--'), 1
  /* TEXT */
  ), _hoisted_21, _hoisted_22]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.seconds ? $setup.seconds : '--'), 1
  /* TEXT */
  ), _hoisted_25, _hoisted_26])]), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_32];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39])])])])]), _hoisted_40])])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/mindset.svg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/mindset.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/mindset-fd1f9ed63187ab156c4aa2839c892f8e.svg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/pages/coming-soon/style.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/pages/coming-soon/style.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: auto;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n\n.coming-soon-container {\n  display: flex;\n}\n\n.coming-soon-cont {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100vh;\n}\n\n.coming-soon-cont .coming-soon-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  min-width: 311px;\n  min-height: 100%;\n}\n\n.coming-soon-cont .coming-soon-container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  padding: 30px 30px;\n  width: 100%;\n  min-height: 100%;\n}\n\n.coming-soon-cont .coming-soon-container .coming-soon-content {\n  display: block;\n  width: 100%;\n}\n\n.coming-soon-cont .coming-soon-content > h4 {\n  font-size: 40px;\n  margin-top: 30px;\n  font-weight: 700;\n  color: #4361ee;\n  margin-bottom: 0;\n  text-shadow: 0px 5px 4px rgba(31, 45, 61, 0.1019607843);\n}\n\n.coming-soon-cont .coming-soon-content > p:not(.terms-conditions) {\n  font-size: 16px;\n  color: #888ea8;\n  font-weight: 700;\n  margin-bottom: 50px;\n}\n\n.coming-soon-cont #timer {\n  display: flex;\n}\n\n.coming-soon-cont #timer .days, .coming-soon-cont #timer .hours, .coming-soon-cont #timer .min {\n  padding: 28px 0;\n  background: #4361ee;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: 2px;\n  text-align: center;\n  height: 95px;\n  width: 95px;\n  margin-right: 15px;\n}\n\n.coming-soon-cont #timer .sec {\n  padding: 28px 0;\n  background: #4361ee;\n  color: #fff;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: 2px;\n  text-align: center;\n  height: 95px;\n  width: 95px;\n  margin-right: 15px;\n  margin-right: 0;\n}\n\n.coming-soon-cont #timer .days .count, .coming-soon-cont #timer .days .text {\n  display: block;\n}\n\n.coming-soon-cont #timer .hours .count, .coming-soon-cont #timer .hours .text {\n  display: block;\n}\n\n.coming-soon-cont #timer .min .count, .coming-soon-cont #timer .min .text {\n  display: block;\n}\n\n.coming-soon-cont #timer .sec .count, .coming-soon-cont #timer .sec .text {\n  display: block;\n}\n\n.coming-soon-cont .coming-soon-content > h3 {\n  text-align: center;\n  font-size: 21px;\n  font-weight: 700;\n  margin-top: 75px;\n  margin-bottom: 40px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper {\n  position: relative;\n  display: flex;\n  width: 100%;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper svg {\n  position: absolute;\n  top: 11px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n  left: 8px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper input {\n  padding: 10px 97px 10px 45px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper input::-webkit-input-placeholder, .coming-soon-cont .coming-soon-wrap form .field-wrapper input::-ms-input-placeholder, .coming-soon-cont .coming-soon-wrap form .field-wrapper input::-moz-placeholder {\n  color: #d3d3d3;\n  font-size: 14px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper input:focus {\n  border-bottom: 1px solid #4361ee;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper button.btn {\n  align-self: center;\n  position: absolute;\n  right: 0;\n  padding: 10px 17px;\n  border-bottom-left-radius: 20px;\n}\n\n.coming-soon-cont .coming-soon-wrap form .field-wrapper button.btn:hover {\n  transform: none;\n}\n\n.coming-soon-cont .social {\n  text-align: center;\n  color: #4361ee;\n  margin: 45px 0 0 0;\n}\n\n.coming-soon-cont .social li {\n  margin: 0;\n}\n\n.coming-soon-cont .social li:not(:last-child) {\n  margin-right: 10px;\n  padding-right: 10px;\n  border-right: 2px solid #d3d3d3;\n}\n\n.coming-soon-cont .social svg {\n  color: #4361ee;\n  width: 20px;\n  height: 20px;\n}\n\n.coming-soon-cont .terms-conditions {\n  max-width: 480px;\n  margin: 0 auto;\n  color: #3b3f5c;\n  font-weight: 600;\n  margin-top: 70px;\n}\n\n.coming-soon-cont .terms-conditions a {\n  color: #4361ee;\n  font-weight: 700;\n}\n\n.coming-soon-image {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  right: 0;\n  min-height: auto;\n  height: 100vh;\n  width: 50%;\n}\n\n.coming-soon-image .img-overlay-content {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.55);\n}\n\n.coming-soon-image .img-overlay-content p {\n  color: #fff;\n  position: absolute;\n}\n\n.coming-soon-image .l-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #060818;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: center;\n  background-position-y: center;\n}\n\n.coming-soon-image .l-image .img-content {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.coming-soon-image .l-image img {\n  width: 577px;\n  align-self: center;\n}\n\n@media (max-width: 991px) {\n  .coming-soon-cont {\n    width: 100%;\n  }\n  .coming-soon-cont .coming-soon-wrap {\n    min-width: auto;\n  }\n  .coming-soon-image {\n    display: none;\n  }\n}\n@media (max-width: 575px) {\n  .coming-soon-cont #timer {\n    display: flex;\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    justify-content: center;\n  }\n  .coming-soon-cont #timer .hours:not(:last-child) {\n    margin-right: 0;\n  }\n  .coming-soon-cont #timer .days, .coming-soon-cont #timer .hours, .coming-soon-cont #timer .min, .coming-soon-cont #timer .sec {\n    flex: 0 0 40%;\n    max-width: 40%;\n    margin-bottom: 15px;\n    margin-bottom: 15px;\n    padding: 14px 0;\n    height: 71px;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .coming-soon-cont .coming-soon-wrap {\n    width: 100%;\n  }\n  .coming-soon-cont .coming-soon-container {\n    height: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/pages/coming-soon/style.scss":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/sass/pages/coming-soon/style.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./style.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/pages/coming-soon/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/pages/coming_soon.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/coming_soon.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coming_soon_vue_vue_type_template_id_17d6d994__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming_soon.vue?vue&type=template&id=17d6d994 */ "./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994");
/* harmony import */ var _coming_soon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming_soon.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/pages/coming_soon.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_coming_soon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_coming_soon_vue_vue_type_template_id_17d6d994__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/pages/coming_soon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/pages/coming_soon.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/coming_soon.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coming_soon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coming_soon_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./coming_soon.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/pages/coming_soon.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coming_soon_vue_vue_type_template_id_17d6d994__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_coming_soon_vue_vue_type_template_id_17d6d994__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./coming_soon.vue?vue&type=template&id=17d6d994 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/pages/coming_soon.vue?vue&type=template&id=17d6d994");


/***/ })

}]);