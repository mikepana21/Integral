"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-pricing-table"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/pricing_table.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/pricing_table.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/pricing-table.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'pricing_table',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Pricing Tables'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var chk_demo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

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
      chk_demo: chk_demo,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/pricing_table.vue?vue&type=template&id=4cccd7e6":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/pricing_table.vue?vue&type=template&id=4cccd7e6 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout-px-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Pricing Tables")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-lg-12 layout-spacing layout-top-spacing"
};
var _hoisted_5 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Toggle")])])], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "panel-body"
};
var _hoisted_8 = {
  "class": "container pricing-table"
};
var _hoisted_9 = {
  "class": "billing-cycle-radios mt-5"
};
var _hoisted_10 = {
  "class": "d-flex justify-content-center"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "txt-monthly"
}, "Monthly", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "switch s-icons s-outline s-outline-primary"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "slider round"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "txt-yearly"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Yearly "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge rounded-pill badge-success"
}, "20% Off")], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pricing-plans-container mt-5 d-md-flex d-block\"><div class=\"pricing-plan mb-5\"><h3>Cloud Hosting</h3><p class=\"margin-top-10\">cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p><div class=\"pricing-plan-label billed-monthly-label\"><strong>$25</strong>/ monthly</div><div class=\"pricing-plan-label billed-yearly-label\"><strong>$290</strong>/ yearly</div><div class=\"pricing-plan-features mb-4\"><strong>Cloud Hosting Features</strong><ul><li>Single Domain</li><li>50 GB SSD</li><li>1 TB Premium Bandwidth</li></ul></div><button type=\"button\" class=\"btn btn-dark w-100 button margin-top-20\">Buy Now</button></div><div class=\"pricing-plan mb-5 mt-md-0 recommended\"><div class=\"recommended-badge\">Most Popular</div><h3>VPS Hosting</h3><p class=\"margin-top-10\">cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p><div class=\"pricing-plan-label billed-monthly-label\"><strong>$70</strong>/ monthly</div><div class=\"pricing-plan-label billed-yearly-label\"><strong>$670</strong>/ yearly</div><div class=\"pricing-plan-features mb-4\"><strong>VPS Hosting Features</strong><ul><li>5 Domains</li><li>100 GB SSD</li><li>2 TB Premium Bandwidth</li></ul></div><button type=\"button\" class=\"btn btn-dark w-100 button margin-top-20\">Buy Now</button></div><div class=\"pricing-plan mb-5\"><h3>Business Hosting</h3><p class=\"margin-top-10\">cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p><div class=\"pricing-plan-label billed-monthly-label\"><strong>$115</strong>/ monthly</div><div class=\"pricing-plan-label billed-yearly-label\"><strong>$1100</strong>/ yearly</div><div class=\"pricing-plan-features mb-4\"><strong>Business Hosting Features</strong><ul><li>Unlimited Domains</li><li>1 TB SSD</li><li>5 TB Premium Bandwidth</li></ul></div><button type=\"button\" class=\"btn btn-dark w-100 button margin-top-20\">Buy Now</button></div></div>", 1);

var _hoisted_16 = {
  "class": "code-section-container show-code"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_18 = [_hoisted_17];
var _hoisted_19 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"container pricing-table\">\n    <!-- Billing Cycle  -->\n    <div class=\"billing-cycle-radios mt-5\">\n        <div class=\"radio billed-yearly-radio\" :class=\"{ 'billed-yearly-switch': chk_demo }\">\n            <div class=\"d-flex justify-content-center\">\n                <span class=\"txt-monthly\">Monthly</span>\n                <label class=\"switch s-icons s-outline s-outline-primary\">\n                    <input type=\"checkbox\" v-model=\"chk_demo\" />\n                    <span class=\"slider round\"></span>\n                </label>\n\n                <span class=\"txt-yearly\">Yearly <span class=\"badge rounded-pill badge-success\">20% Off</span></span>\n            </div>\n        </div>\n    </div>\n\n    <!-- Pricing Plans Container -->\n    <div class=\"pricing-plans-container mt-5 d-md-flex d-block\">\n        <div class=\"pricing-plan mb-5\">\n            <h3>Cloud Hosting</h3>\n            <p class=\"margin-top-10\">cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p>\n            <div class=\"pricing-plan-label billed-monthly-label\"><strong>$25</strong>/ monthly</div>\n            <div class=\"pricing-plan-label billed-yearly-label\"><strong>$290</strong>/ yearly</div>\n            <div class=\"pricing-plan-features mb-4\">\n                <strong>Cloud Hosting Features</strong>\n                <ul>\n                    <li>Single Domain</li>\n                    <li>50 GB SSD</li>\n                    <li>1 TB Premium Bandwidth</li>\n                </ul>\n            </div>\n            <button type=\"button\" class=\"btn btn-dark w-100 button margin-top-20\">Buy Now</button>\n        </div>\n        <div class=\"pricing-plan mb-5 mt-md-0 recommended\">\n            <div class=\"recommended-badge\">Most Popular</div>\n            <h3>VPS Hosting</h3>\n            <p class=\"margin-top-10\">cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>\n            <div class=\"pricing-plan-label billed-monthly-label\"><strong>$70</strong>/ monthly</div>\n            <div class=\"pricing-plan-label billed-yearly-label\"><strong>$670</strong>/ yearly</div>\n            <div class=\"pricing-plan-features mb-4\">\n                <strong>VPS Hosting Features</strong>\n                <ul>\n                    <li>5 Domains</li>\n                    <li>100 GB SSD</li>\n                    <li>2 TB Premium Bandwidth</li>\n                </ul>\n            </div>\n            <button type=\"button\" class=\"btn btn-dark w-100 button margin-top-20\">Buy Now</button>\n        </div>\n        <div class=\"pricing-plan mb-5\">\n            <h3>Business Hosting</h3>\n            <p class=\"margin-top-10\">cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>\n            <div class=\"pricing-plan-label billed-monthly-label\"><strong>$115</strong>/ monthly</div>\n            <div class=\"pricing-plan-label billed-yearly-label\"><strong>$1100</strong>/ yearly</div>\n            <div class=\"pricing-plan-features mb-4\">\n                <strong>Business Hosting Features</strong>\n                <ul>\n                    <li>Unlimited Domains</li>\n                    <li>1 TB SSD</li>\n                    <li>5 TB Premium Bandwidth</li>\n                </ul>\n            </div>\n            <button type=\"button\" class=\"btn btn-dark w-100 button margin-top-20\">Buy Now</button>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_22 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Animated")])])], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "panel-body"
};
var _hoisted_25 = {
  "class": "container pricing-table"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"pricingWrapper\" class=\"row\"><div class=\"col-md-6 col-lg-4\"><div class=\"card stacked mt-5\"><div class=\"card-header pt-0\"><span class=\"card-price\">$49</span><h3 class=\"card-title mt-3 mb-1\">Freelancer</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class=\"card-body\"><ul class=\"list-group list-group-minimal mb-3\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">Support forum</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Free hosting</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">2 hours of support</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">5GB of storage space</li></ul><a href=\"\" class=\"btn btn-block w-100 btn-primary\">Buy Now</a></div></div></div><div class=\"col-md-6 col-lg-4\"><div class=\"card stacked mt-5\"><div class=\"card-header pt-0\"><span class=\"card-price\">$89</span><h3 class=\"card-title mt-3 mb-1\">Small business</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class=\"card-body\"><ul class=\"list-group list-group-minimal mb-3\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">Unlimited calls</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Free hosting</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">10 hours of support</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">100GB of storage space</li></ul><a href=\"\" class=\"btn btn-block w-100 btn-primary\">Buy Now</a></div></div></div><div class=\"col-md-6 col-lg-4\"><div class=\"card stacked mt-5\"><div class=\"card-header pt-0\"><span class=\"card-price\">$129</span><h3 class=\"card-title mt-3 mb-1\">Larger business</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div><div class=\"card-body\"><ul class=\"list-group list-group-minimal mb-3\"><li class=\"list-group-item d-flex justify-content-between align-items-center\">Unlimited calls</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Free hosting</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">Unlimited hours of support</li><li class=\"list-group-item d-flex justify-content-between align-items-center\">1TB of storage space</li></ul><a href=\"\" class=\"btn btn-block w-100 btn-primary\">Buy Now</a></div></div></div></div>", 1);

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

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"container pricing-table\">\n    <div id=\"pricingWrapper\" class=\"row\">\n        <div class=\"col-md-6 col-lg-4\">\n            <div class=\"card stacked mt-5\">\n                <div class=\"card-header pt-0\">\n                    <span class=\"card-price\">$49</span>\n                    <h3 class=\"card-title mt-3 mb-1\">Freelancer</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                </div>\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-minimal mb-3\">\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Support forum</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Free hosting</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">2 hours of support</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">5GB of storage space</li>\n                    </ul>\n                    <a href=\"\" class=\"btn btn-block w-100 btn-primary\">Buy Now</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 col-lg-4\">\n            <div class=\"card stacked mt-5\">\n                <div class=\"card-header pt-0\">\n                    <span class=\"card-price\">$89</span>\n                    <h3 class=\"card-title mt-3 mb-1\">Small business</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                </div>\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-minimal mb-3\">\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Unlimited calls</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Free hosting</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">10 hours of support</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">100GB of storage space</li>\n                    </ul>\n                    <a href=\"\" class=\"btn btn-block w-100 btn-primary\">Buy Now</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4\">\n            <div class=\"card stacked mt-5\">\n                <div class=\"card-header pt-0\">\n                    <span class=\"card-price\">$129</span>\n                    <h3 class=\"card-title mt-3 mb-1\">Larger business</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                </div>\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-minimal mb-3\">\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Unlimited calls</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Free hosting</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">Unlimited hours of support</li>\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">1TB of storage space</li>\n                    </ul>\n                    <a href=\"\" class=\"btn btn-block w-100 btn-primary\">Buy Now</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_33 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Basic")])])], -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "panel-body"
};
var _hoisted_36 = {
  "class": "container pricing-table"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "pricing-section bg-7 mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing pricing--norbu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing__item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "pricing__title"
}, "Beginner Savers"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pricing__sentence"
}, "For people who are starting out in the water saving business"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing__price"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pricing__currency"
}, "$"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("19"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pricing__period"
}, "/ month")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "pricing__feature-list text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Free water saving e-book ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Free access to forums ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Beginners tips ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  variant: "default",
  "class": "pricing__action mx-auto mb-4"
}, "Buy")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing__item pricing__item--featured"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "pricing__title"
}, "Advanced Savers"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pricing__sentence"
}, "For experienced water savers who'd like to push their limits"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing__price"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pricing__currency"
}, "$"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("29"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pricing__period"
}, "/ month")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "pricing__feature-list text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Free water saving e-book ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Free access to forums ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Advanced saving tips ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  variant: "default",
  "class": "pricing__action mx-auto mb-4"
}, "Buy")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing__item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "pricing__title"
}, "Pro Savers"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pricing__sentence"
}, "For all the professionals who'd like to educate others, too"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pricing__price"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pricing__currency"
}, "$"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("79"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pricing__period"
}, "/ month")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "pricing__feature-list text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Access to all books ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Unlimited board topics ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pricing__feature"
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
  "class": "feather feather-arrow-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Beginners tips ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  variant: "default",
  "class": "pricing__action mx-auto mb-4"
}, "Buy")])])], -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "code-section-container show-code"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_40 = [_hoisted_39];
var _hoisted_41 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"container pricing-table\">\n    <section class=\"pricing-section bg-7 mt-5\">\n        <div class=\"pricing pricing--norbu\">\n            <div class=\"pricing__item\">\n                <h3 class=\"pricing__title\">Beginner Savers</h3>\n                <p class=\"pricing__sentence\">For people who are starting out in the water saving business</p>\n                <div class=\"pricing__price\"><span class=\"pricing__currency\">$</span>19<span class=\"pricing__period\">/ month</span></div>\n                <ul class=\"pricing__feature-list text-center\">\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Free water saving e-book\n                    </li>\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Free access to forums\n                    </li>\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Beginners tips\n                    </li>\n                </ul>\n                <button type=\"button\" variant=\"default\" class=\"pricing__action mx-auto mb-4\">Buy</button>\n            </div>\n            <div class=\"pricing__item pricing__item--featured\">\n                <h3 class=\"pricing__title\">Advanced Savers</h3>\n                <p class=\"pricing__sentence\">For experienced water savers who'd like to push their limits</p>\n                <div class=\"pricing__price\"><span class=\"pricing__currency\">$</span>29<span class=\"pricing__period\">/ month</span></div>\n                <ul class=\"pricing__feature-list text-center\">\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Free water saving e-book\n                    </li>\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Free access to forums\n                    </li>\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Advanced saving tips\n                    </li>\n                </ul>\n                <button type=\"button\" variant=\"default\" class=\"pricing__action mx-auto mb-4\">Buy</button>\n            </div>\n            <div class=\"pricing__item\">\n                <h3 class=\"pricing__title\">Pro Savers</h3>\n                <p class=\"pricing__sentence\">For all the professionals who'd like to educate others, too</p>\n                <div class=\"pricing__price\"><span class=\"pricing__currency\">$</span>79<span class=\"pricing__period\">/ month</span></div>\n                <ul class=\"pricing__feature-list text-center\">\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Access to all books\n                    </li>\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Unlimited board topics\n                    </li>\n                    <li class=\"pricing__feature\">\n                        <svg> ... </svg>\n                        Beginners tips\n                    </li>\n                </ul>\n                <button type=\"button\" variant=\"default\" class=\"pricing__action mx-auto mb-4\">Buy</button>\n            </div>\n        </div>\n    </section>\n</div>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Billing Cycle  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["radio billed-yearly-radio", {
      'billed-yearly-switch': $setup.chk_demo
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.chk_demo = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.chk_demo]]), _hoisted_13]), _hoisted_14])], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pricing Plans Container "), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_18), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_20];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_29), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_31];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    variant: "default",
    "class": "toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_40), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_42];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])]);
}

/***/ }),

/***/ "./resources/js/src/views/components/pricing_table.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/components/pricing_table.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pricing_table_vue_vue_type_template_id_4cccd7e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing_table.vue?vue&type=template&id=4cccd7e6 */ "./resources/js/src/views/components/pricing_table.vue?vue&type=template&id=4cccd7e6");
/* harmony import */ var _pricing_table_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing_table.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/components/pricing_table.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_pricing_table_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_pricing_table_vue_vue_type_template_id_4cccd7e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/components/pricing_table.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/components/pricing_table.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pricing_table.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pricing_table_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pricing_table_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pricing_table.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/pricing_table.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/components/pricing_table.vue?vue&type=template&id=4cccd7e6":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/pricing_table.vue?vue&type=template&id=4cccd7e6 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pricing_table_vue_vue_type_template_id_4cccd7e6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pricing_table_vue_vue_type_template_id_4cccd7e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pricing_table.vue?vue&type=template&id=4cccd7e6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/pricing_table.vue?vue&type=template&id=4cccd7e6");


/***/ })

}]);