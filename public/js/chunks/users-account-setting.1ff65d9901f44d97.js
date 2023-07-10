(self["webpackChunk"] = self["webpackChunk"] || []).push([["users-account-setting"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/users/account_setting.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/users/account_setting.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_users_account_setting_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/users/account-setting.scss */ "./resources/js/src/assets/sass/users/account-setting.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'account_setting',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta)({
      title: 'Account Setting'
    });
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var selected_file = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var ddl_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('20');
    var ddl_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Jan');
    var ddl_3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('1989');
    var ddl_4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('May');
    var ddl_5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('2009');
    var ddl_6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('United States');
    var months = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    var range_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(25);
    var range_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(50);
    var range_3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(70);
    var range_4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(60);

    var change_file = function change_file(event) {
      selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    var save = function save() {
      showMessage('Settings saved successfully.');
    };

    var showMessage = function showMessage() {
      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      var toast = window.Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });
      toast.fire({
        icon: type,
        title: msg,
        padding: '10px 20px'
      });
    };

    var __returned__ = {
      selected: selected,
      selected_file: selected_file,
      ddl_1: ddl_1,
      ddl_2: ddl_2,
      ddl_3: ddl_3,
      ddl_4: ddl_4,
      ddl_5: ddl_5,
      ddl_6: ddl_6,
      months: months,
      range_1: range_1,
      range_2: range_2,
      range_3: range_3,
      range_4: range_4,
      change_file: change_file,
      save: save,
      showMessage: showMessage,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/users/account_setting.vue?vue&type=template&id=c74bafc6":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/users/account_setting.vue?vue&type=template&id=c74bafc6 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
}, "Users")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Account Settings")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "account-settings-container layout-top-spacing"
};
var _hoisted_4 = {
  "class": "account-content"
};
var _hoisted_5 = {
  "class": "scrollspy-example",
  "data-spy": "scroll",
  "data-target": "#account-settings-scroll",
  "data-offset": "-100"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_8 = {
  id: "general-info",
  "class": "section general-info"
};
var _hoisted_9 = {
  "class": "info"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": ""
}, "General Information", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-lg-11 mx-auto"
};
var _hoisted_13 = {
  "class": "row"
};
var _hoisted_14 = {
  "class": "col-xl-2 col-lg-12 col-md-4"
};
var _hoisted_15 = {
  "class": "upload mt-4 pe-md-4"
};
var _hoisted_16 = ["src"];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2"
}, "Upload Picture", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4"
};
var _hoisted_19 = {
  "class": "form"
};
var _hoisted_20 = {
  "class": "row"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-sm-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "fullName"
}, "Full Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control mb-4",
  id: "fullName",
  placeholder: "Full Name",
  value: "Jimmy Turner"
})])], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "col-sm-6"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "dob-input"
}, "Date of Birth", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "d-sm-flex d-block"
};
var _hoisted_25 = {
  "class": "form-group me-1"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Day"
}, "Day", -1
/* HOISTED */
);

var _hoisted_27 = ["value"];
var _hoisted_28 = {
  "class": "form-group me-1"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Month"
}, "Month", -1
/* HOISTED */
);

var _hoisted_30 = ["value"];
var _hoisted_31 = {
  "class": "form-group me-1"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Year"
}, "Year", -1
/* HOISTED */
);

var _hoisted_33 = ["value"];

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "profession"
}, "Profession"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control mb-4",
  id: "profession",
  placeholder: "Designer",
  value: "Web Developer"
})], -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-12 col-lg-12 col-md-12 layout-spacing\"><form id=\"about\" class=\"section about\"><div class=\"info\"><h5 class=\"\">About</h5><div class=\"row\"><div class=\"col-md-11 mx-auto\"><div class=\"form-group\"><label for=\"aboutBio\">Bio</label><textarea id=\"aboutBio\" placeholder=\"Tell something interesting about yourself\" rows=\"10\" class=\"form-control\" style=\"height:243px;\">\nI&#39;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.\n\nMy job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.\n                                                </textarea></div></div></div></div></form></div><div class=\"col-xl-12 col-lg-12 col-md-12 layout-spacing\"><form id=\"work-platforms\" class=\"section work-platforms\"><div class=\"info\"><h5 class=\"\">Work Platforms</h5><div class=\"row\"><div class=\"col-md-12 text-end mb-5\"><button type=\"button\" id=\"add-work-platforms\" class=\"btn btn-primary\">Add</button></div><div class=\"col-md-11 mx-auto\"><div class=\"platform-div\"><div class=\"form-group\"><label for=\"platform-title\">Platforms Title</label><input class=\"form-control mb-4\" id=\"platform-title\" placeholder=\"Platforms Title\" value=\"Web Design\"></div><div class=\"form-group\"><label for=\"platform-description\">Description</label><textarea class=\"form-control mb-4\" id=\"platform-description\" placeholder=\"Platforms Description\" rows=\"10\" style=\"height:243px;\">\nDuis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur.</textarea></div></div></div></div></div></form></div>", 2);

var _hoisted_37 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_38 = {
  id: "contact",
  "class": "section contact"
};
var _hoisted_39 = {
  "class": "info"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": ""
}, "Contact", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_43 = {
  "class": "row"
};
var _hoisted_44 = {
  "class": "col-md-6"
};
var _hoisted_45 = {
  "class": "form-group"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "country"
}, "Country", -1
/* HOISTED */
);

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"all\">All Countries</option><option value=\"United States\">United States</option><option value=\"India\">India</option><option value=\"Japan\">Japan</option><option value=\"China\">China</option><option value=\"Brazil\">Brazil</option><option value=\"Norway\">Norway</option><option value=\"Canada\">Canada</option>", 8);

var _hoisted_55 = [_hoisted_47];

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6\"><div class=\"form-group\"><label for=\"address\">Address</label><input class=\"form-control mb-4\" id=\"address\" placeholder=\"Address\" value=\"New York\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"location\">Location</label><input class=\"form-control mb-4\" id=\"location\" placeholder=\"Location\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"phone\">Phone</label><input class=\"form-control mb-4\" id=\"phone\" placeholder=\"Write your phone number here\" value=\"+1 (530) 555-12121\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"email\">Email</label><input class=\"form-control mb-4\" id=\"email\" placeholder=\"Write your email here\" value=\"Jimmy@gmail.com\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"website1\">Website</label><input class=\"form-control mb-4\" id=\"website1\" placeholder=\"Write your website here\"></div></div>", 5);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-12 col-lg-12 col-md-12 layout-spacing\"><form id=\"social\" class=\"section social\"><div class=\"info\"><h5 class=\"\">Social</h5><div class=\"row\"><div class=\"col-md-11 mx-auto\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"input-group social-linkedin mb-3\"><span class=\"input-group-text me-3\" id=\"linkedin\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-linkedin\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></span><input placeholder=\"linkedin Username\" value=\"jimmy_turner\" class=\"form-control\"></div></div><div class=\"col-md-6\"><div class=\"input-group social-tweet mb-3\"><span class=\"input-group-text me-3\" id=\"tweet\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-twitter\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path></svg></span><input placeholder=\"Twitter Username\" value=\"@jTurner\" class=\"form-control\"></div></div></div></div><div class=\"col-md-11 mx-auto\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"input-group social-fb mb-3\"><span class=\"input-group-text me-3\" id=\"fb\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-facebook\"><path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path></svg></span><input placeholder=\"Facebook Username\" value=\"Jimmy Turner\" class=\"form-control\"></div></div><div class=\"col-md-6\"><div class=\"input-group social-github mb-3\"><span class=\"input-group-text me-3\" id=\"github\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-github\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg></span><input placeholder=\"Github Username\" value=\"@TurnerJimmy\" class=\"form-control\"></div></div></div></div></div></div></form></div>", 1);

var _hoisted_62 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_63 = {
  id: "skill",
  "class": "section skill"
};
var _hoisted_64 = {
  "class": "info"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": ""
}, "Skills", -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "row progress-bar-section"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-12 mx-auto\"><div class=\"form-group\"><div class=\"row\"><div class=\"col-md-11 mx-auto\"><div class=\"input-form\"><input type=\"text\" id=\"skills\" placeholder=\"Add Your Skills Here\" class=\"form-control\"><button type=\"button\" id=\"add-skills\" class=\"btn btn-primary\">Add</button></div></div></div></div></div>", 1);

var _hoisted_68 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_69 = {
  "class": "custom-progress top-right progress-up"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "skill-name"
}, "PHP", -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "range-count"
};
var _hoisted_72 = {
  "class": "range-count-number"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "range-count-unit"
}, "%", -1
/* HOISTED */
);

var _hoisted_75 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_76 = {
  "class": "custom-progress top-right progress-up"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "skill-name"
}, "Wordpress", -1
/* HOISTED */
);

var _hoisted_78 = {
  "class": "range-count"
};
var _hoisted_79 = {
  "class": "range-count-number"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "range-count-unit"
}, "%", -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_83 = {
  "class": "custom-progress top-right progress-up"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "skill-name"
}, "Javascript", -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "range-count"
};
var _hoisted_86 = {
  "class": "range-count-number"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "range-count-unit"
}, "%", -1
/* HOISTED */
);

var _hoisted_89 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_90 = {
  "class": "custom-progress top-right progress-up"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "skill-name"
}, "jQuery", -1
/* HOISTED */
);

var _hoisted_92 = {
  "class": "range-count"
};
var _hoisted_93 = {
  "class": "range-count-number"
};

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "range-count-unit"
}, "%", -1
/* HOISTED */
);

var _hoisted_96 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_97 = {
  id: "edu-experience",
  "class": "section edu-experience"
};
var _hoisted_98 = {
  "class": "info"
};

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": ""
}, "Education", -1
/* HOISTED */
);

var _hoisted_100 = {
  "class": "row"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12 text-end mb-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  id: "add-education",
  "class": "btn btn-primary"
}, "Add")], -1
/* HOISTED */
);

var _hoisted_102 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_103 = {
  "class": "edu-section"
};
var _hoisted_104 = {
  "class": "row"
};

var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "degree1"
}, "Enter Your Collage Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control mb-4",
  id: "degree1",
  placeholder: "Add your education here",
  value: "Royal Collage of Art Designer Illustrator"
})])], -1
/* HOISTED */
);

var _hoisted_106 = {
  "class": "col-md-12"
};
var _hoisted_107 = {
  "class": "row"
};
var _hoisted_108 = {
  "class": "col-md-6"
};
var _hoisted_109 = {
  "class": "form-group"
};

var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Starting From", -1
/* HOISTED */
);

var _hoisted_111 = {
  "class": "row"
};
var _hoisted_112 = {
  "class": "col-md-6 mb-4"
};

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Month"
}, "Month", -1
/* HOISTED */
);

var _hoisted_114 = ["value"];
var _hoisted_115 = {
  "class": "col-md-6"
};

var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Year"
}, "Year", -1
/* HOISTED */
);

var _hoisted_117 = ["value"];
var _hoisted_118 = {
  "class": "col-md-6"
};
var _hoisted_119 = {
  "class": "form-group"
};

var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Ending In", -1
/* HOISTED */
);

var _hoisted_121 = {
  "class": "row"
};
var _hoisted_122 = {
  "class": "col-md-6 mb-4"
};

var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: null
}, "Month", -1
/* HOISTED */
);

var _hoisted_124 = ["value"];
var _hoisted_125 = {
  "class": "col-md-6"
};

var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: null
}, "Year", -1
/* HOISTED */
);

var _hoisted_127 = ["value"];

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  placeholder: "Description",
  rows: "10",
  "class": "form-control",
  style: {
    "height": "243px"
  }
})], -1
/* HOISTED */
);

var _hoisted_129 = {
  "class": "col-xl-12 col-lg-12 col-md-12 layout-spacing"
};
var _hoisted_130 = {
  id: "work-experience",
  "class": "section work-experience"
};
var _hoisted_131 = {
  "class": "info"
};

var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": ""
}, "Work Experience", -1
/* HOISTED */
);

var _hoisted_133 = {
  "class": "row"
};

var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12 text-end mb-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  id: "add-work-exp",
  "class": "btn btn-primary"
}, "Add")], -1
/* HOISTED */
);

var _hoisted_135 = {
  "class": "col-md-11 mx-auto"
};
var _hoisted_136 = {
  "class": "work-section"
};
var _hoisted_137 = {
  "class": "row"
};

var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-12\"><div class=\"form-group\"><label for=\"degree2\">Company Name</label><input class=\"form-control mb-4\" id=\"degree2\" placeholder=\"Add your work here\" value=\"Netfilx Inc.\"></div></div><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"degree3\">Job Tilte</label><input class=\"form-control mb-4\" id=\"degree3\" placeholder=\"Add your work here\"></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"degree4\">Location</label><input class=\"form-control mb-4\" id=\"degree4\" placeholder=\"Add your work here\"></div></div></div></div>", 2);

var _hoisted_140 = {
  "class": "col-md-12"
};
var _hoisted_141 = {
  "class": "row"
};
var _hoisted_142 = {
  "class": "col-md-6"
};
var _hoisted_143 = {
  "class": "form-group"
};

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Starting From", -1
/* HOISTED */
);

var _hoisted_145 = {
  "class": "row"
};
var _hoisted_146 = {
  "class": "col-md-6 mb-4"
};

var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: null
}, "Month", -1
/* HOISTED */
);

var _hoisted_148 = ["value"];
var _hoisted_149 = {
  "class": "col-md-6 mb-4"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: null
}, "Year", -1
/* HOISTED */
);

var _hoisted_151 = ["value"];
var _hoisted_152 = {
  "class": "col-md-6"
};
var _hoisted_153 = {
  "class": "form-group"
};

var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Ending In", -1
/* HOISTED */
);

var _hoisted_155 = {
  "class": "row"
};
var _hoisted_156 = {
  "class": "col-md-6 mb-4"
};

var _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: null
}, "Month", -1
/* HOISTED */
);

var _hoisted_158 = ["value"];
var _hoisted_159 = {
  "class": "col-md-6 mb-4"
};

var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: null
}, "Year", -1
/* HOISTED */
);

var _hoisted_161 = ["value"];

var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  placeholder: "Description",
  rows: "10",
  "class": "form-control",
  style: {
    "height": "243px"
  }
})], -1
/* HOISTED */
);

var _hoisted_163 = {
  "class": "account-settings-footer"
};
var _hoisted_164 = {
  "class": "as-footer-container"
};

var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-primary"
}, "Reset All", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "fl_profile",
    type: "file",
    "class": "d-none",
    accept: "image/*",
    onChange: $setup.change_file
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.selected_file ? $setup.selected_file : __webpack_require__(/*! @/assets/images/user-profile.jpeg */ "./resources/js/src/assets/images/user-profile.jpeg"),
    alt: "profile",
    "class": "profile-preview",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$refs.fl_profile.click();
    })
  }, null, 8
  /* PROPS */
  , _hoisted_16), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.ddl_1 = $event;
    }),
    "class": "form-select"
  }, [_hoisted_26, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(30, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_27);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.ddl_2 = $event;
    }),
    "class": "form-select"
  }, [_hoisted_29, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.months, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_30);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.ddl_3 = $event;
    }),
    "class": "form-select"
  }, [_hoisted_32, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(42, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: 2022 - item,
      key: 2022 - item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(2022 - item), 9
    /* TEXT, PROPS */
    , _hoisted_33);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_3]])])])])]), _hoisted_34])])])])])])])]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.ddl_6 = $event;
    }),
    id: "country",
    "class": "form-select w-100"
  }, _hoisted_55, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_6]])])]), _hoisted_56])])])])])]), _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    min: "0",
    max: "100",
    "class": "form-range progress-range-counter",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.range_1 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.range_1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.range_1), 1
  /* TEXT */
  ), _hoisted_73, _hoisted_74])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    min: "0",
    max: "100",
    "class": "form-range progress-range-counter",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.range_2 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.range_2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.range_2), 1
  /* TEXT */
  ), _hoisted_80, _hoisted_81])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    min: "0",
    max: "100",
    "class": "form-range progress-range-counter",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.range_3 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.range_3]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.range_3), 1
  /* TEXT */
  ), _hoisted_87, _hoisted_88])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    min: "0",
    max: "100",
    "class": "form-range progress-range-counter",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.range_4 = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.range_4]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.range_4), 1
  /* TEXT */
  ), _hoisted_94, _hoisted_95])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [_hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [_hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.ddl_4 = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_113, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.months, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_114);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_4]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.ddl_5 = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_116, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(42, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: 2022 - item,
      key: 2022 - item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(2022 - item), 9
    /* TEXT, PROPS */
    , _hoisted_117);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.ddl_5]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [_hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.selected = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_123, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.months, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_124);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selected]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.selected = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_126, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(42, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: 2022 - item,
      key: 2022 - item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(2022 - item), 9
    /* TEXT, PROPS */
    , _hoisted_127);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selected]])])])])])])]), _hoisted_128])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [_hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.selected = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_147, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.months, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_148);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selected]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.selected = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_150, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(42, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: 2022 - item,
      key: 2022 - item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(2022 - item), 9
    /* TEXT, PROPS */
    , _hoisted_151);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selected]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [_hoisted_154, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.selected = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_157, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.months, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item,
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 9
    /* TEXT, PROPS */
    , _hoisted_158);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selected]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.selected = $event;
    }),
    "class": "form-select w-100"
  }, [_hoisted_160, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(42, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
      value: 2022 - item,
      key: 2022 - item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(2022 - item), 9
    /* TEXT, PROPS */
    , _hoisted_161);
  }), 64
  /* STABLE_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selected]])])])])])])]), _hoisted_162])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $setup.save();
    })
  }, "Save Changes")])])])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.sidenav {\n  position: fixed;\n  right: -30px;\n  top: 125px;\n  width: 236px;\n  border-left: 1px solid #e0e6ed;\n}\n\n.sidenav .sidenav-header:after {\n  display: none;\n}\n\n.sidenav .sidenav-header p {\n  font-weight: 600;\n  font-size: 18px;\n  color: #fff;\n  margin-bottom: 20px;\n  background: #4361ee;\n  text-align: center;\n  border-radius: 5px;\n  padding: 4px;\n  letter-spacing: 1px;\n  background-image: linear-gradient(to right, #4361ee 0%, #805dca 100%);\n}\n\n.sidenav .sidenav-content {\n  background-color: transparent;\n  display: block;\n  border: none;\n}\n\n.sidenav .sidenav-content a {\n  display: block;\n  padding: 3px 0px;\n  color: #3b3f5c;\n  font-size: 12px;\n  padding: 3px 25px;\n}\n\n.sidenav .sidenav-content a.active {\n  color: #805dca;\n  font-weight: 700;\n  border-left: 1px solid #805dca;\n}\n\n.sidenav .sidenav-content a:hover {\n  color: #4361ee;\n  font-weight: 700;\n  border-left: 1px solid #805dca;\n}\n\n#content > .container {\n  display: flex;\n  max-width: 58.333333% !important;\n  margin-left: 2px;\n  padding: 0 16px !important;\n}\n\n#content > .container > .container {\n  padding: 0;\n  margin: 0;\n}\n\n@media (max-width: 575px) {\n  .sidenav .sidenav-content a {\n    padding: 4px 7px;\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 1199px) {\n  .sidenav {\n    display: none;\n  }\n  #content > .container {\n    max-width: 100% !important;\n    margin-left: auto;\n  }\n  #content > .container > .container {\n    max-width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/users/account-setting.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/users/account-setting.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.section {\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.layout-spacing {\n  padding-bottom: 25px;\n}\n\n.blockui-growl-message {\n  display: none;\n  text-align: left;\n  padding: 15px;\n  background-color: #1abc9c;\n  color: #fff;\n  border-radius: 3px;\n}\n\n.blockui-growl-message i {\n  font-size: 20px;\n}\n\n.general-info .info h6,\n.about .info h5,\n.work-platforms .info h5,\n.contact .info h5,\n.social .info h5,\n.skill .info h5,\n.edu-experience .info h5,\n.work-experience .info h5 {\n  color: #3b3f5c;\n  margin: 4px 8px 40px 8px;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n/*\n    General Infomation\n*/\n.general-info {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.general-info .info,\n.general-info .save-info {\n  padding: 20px;\n}\n\n.general-info .info .form {\n  width: 92%;\n}\n\n.general-info .info .upload {\n  border-right: 1px solid #ebedf2;\n}\n\n.general-info .info .upload p {\n  font-size: 14px;\n  font-weight: 600;\n  color: #4361ee;\n}\n\n.general-info .info .upload p i {\n  font-size: 22px;\n  color: #4361ee;\n  vertical-align: middle;\n}\n\n.general-info .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n.general-info .info .dropify-wrapper {\n  width: 120px;\n  height: 120px;\n  border: none;\n  border-radius: 6px;\n}\n\n.general-info .info .dropify-wrapper .dropify-preview {\n  background-color: #fff;\n  padding: 0;\n}\n\n.general-info .info .dropify-wrapper .dropify-clear {\n  font-size: 16px;\n  padding: 4px 8px;\n  color: #fff;\n  border: none;\n}\n\n.general-info .info .dropify-wrapper .dropify-clear:hover {\n  background-color: transparent;\n}\n\n.general-info .info .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message {\n  padding-top: 27px;\n}\n\n.general-info .info .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before {\n  height: 20px;\n  position: absolute;\n  top: -1px;\n  left: 45%;\n  color: #fff;\n  transform: translate(-50%, 0);\n  background: transparent;\n  width: 0;\n  height: 0;\n  font-size: 28px;\n  width: 24px;\n  content: \" \";\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-upload-cloud'%3e%3cpolyline points='16 16 12 12 8 16'%3e%3c/polyline%3e%3cline x1='12' y1='12' x2='12' y2='21'%3e%3c/line%3e%3cpath d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'%3e%3c/path%3e%3cpolyline points='16 16 12 12 8 16'%3e%3c/polyline%3e%3c/svg%3e\");\n  height: 20px;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback {\n  border: 1px solid #ebedf2;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner {\n  padding: 0;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback .dropify-clear {\n  color: #515365;\n}\n\n.general-info .info .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename {\n  margin-top: 10px;\n}\n\n/*\n    Image upload\n*/\n/*\n    About\n*/\n.about {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.about .info,\n.about .save-info {\n  padding: 20px;\n}\n\n.about .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Education and Experience\n*/\n.work-platforms {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.work-platforms .info {\n  padding: 20px;\n}\n\n.work-platforms .platform-div:not(:last-child) {\n  margin-bottom: 55px;\n  padding-bottom: 55px;\n  border-bottom: 2px solid #e0e6ed;\n}\n\n.work-platforms .platform-div:last-child {\n  margin-bottom: 40px;\n}\n\n/*\n    Contact\n*/\n.contact {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.contact .info,\n.contact .save-info {\n  padding: 20px;\n}\n\n.contact .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Social\n*/\n.social {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.social .info,\n.social .save-info {\n  padding: 20px;\n}\n\n.social .input-group-text {\n  border-radius: 6px;\n  color: #fff;\n  border: none;\n}\n\n.input-group .input-group-text svg {\n  color: #4361ee;\n}\n\n.social .info input {\n  border-radius: 0.25rem !important;\n}\n\n/*\n    Skills\n*/\n.skill {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.skill .input-form {\n  margin-bottom: 24px;\n  display: flex;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.skill input[type=text] {\n  margin-right: 10px;\n}\n\n.skill .info {\n  padding: 20px;\n}\n\n.skill .skill-name {\n  font-size: 13px;\n  font-weight: 700;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.skill .save-info {\n  padding: 20px;\n}\n\n.skill .info label {\n  text-transform: uppercase;\n  color: #eaf1ff;\n}\n\n.skill .custom-progress.progress-up .range-count {\n  margin-top: 11px;\n}\n\n.skill .custom-progress.progress-down .range-count {\n  margin-top: 15px;\n}\n\n.skill .range-count {\n  font-weight: 700;\n  color: #3b3f5c;\n}\n\n.skill .range-count .range-count-number {\n  display: inline-block;\n  background: #ffffff;\n  padding: 3px 8px;\n  border-radius: 5px;\n  color: #4361ee;\n  border: 1px solid #e0e6ed;\n}\n\n.skill .custom-progress.top-right .range-count, .skill .custom-progress.bottom-right .range-count {\n  text-align: right;\n}\n\n.skill .progress-range-counter::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  background: #4361ee;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin-top: -4px;\n  -webkit-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n\n.skill .progress-range-counter:active::-webkit-slider-thumb {\n  transform: scale(1.2);\n}\n\n.skill .progress-range-counter:focus::-webkit-slider-thumb {\n  background: #4361ee;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin-top: -4px;\n  box-shadow: none;\n}\n\n.skill .progress-range-counter::-moz-range-thumb {\n  background: #4361ee;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin-top: -4px;\n}\n\n/*\n    Education and Experience\n*/\n.edu-experience {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.edu-experience .edu-section:not(:last-child) {\n  margin-bottom: 55px;\n  padding-bottom: 55px;\n  border-bottom: 2px solid #e0e6ed;\n}\n\n.edu-experience .edu-section:last-child {\n  margin-bottom: 40px;\n}\n\n.edu-experience .info,\n.edu-experience .save-info {\n  padding: 20px;\n}\n\n.edu-experience .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Work Experience\n*/\n.work-experience {\n  background-color: #fff;\n  border-radius: 6px;\n}\n\n.work-experience .work-section:not(:last-child) {\n  margin-bottom: 55px;\n  padding-bottom: 55px;\n  border-bottom: 2px solid #e0e6ed;\n}\n\n.work-experience .work-section:last-child {\n  margin-bottom: 40px;\n}\n\n.work-experience .info,\n.work-experience .save-info {\n  padding: 20px;\n}\n\n.work-experience .info label {\n  color: #888ea8;\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n/*\n    Footer\n*/\n.account-settings-footer {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  width: 100%;\n  background: #3b3f5c;\n  padding: 12px 20px;\n  box-shadow: -2px -9px 20px rgba(126, 142, 177, 0.12);\n  border-top: 1px solid #f1f2f3;\n  border-radius: 6px 6px 0 0;\n  z-index: 5;\n}\n\n.account-settings-footer .as-footer-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n@media (max-width: 991px) {\n  .account-settings-container .account-content {\n    width: 100%;\n    padding: 0;\n  }\n}\n@media (max-width: 767px) {\n  .general-info .info .upload {\n    border-right: none;\n  }\n  .skill .input-form {\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/scrollspyNav.scss":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/sass/scrollspyNav.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./scrollspyNav.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/scrollspyNav.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/assets/sass/users/account-setting.scss":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/sass/users/account-setting.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_account_setting_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./account-setting.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/users/account-setting.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_account_setting_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_account_setting_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/users/account_setting.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/users/account_setting.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _account_setting_vue_vue_type_template_id_c74bafc6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account_setting.vue?vue&type=template&id=c74bafc6 */ "./resources/js/src/views/users/account_setting.vue?vue&type=template&id=c74bafc6");
/* harmony import */ var _account_setting_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account_setting.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/users/account_setting.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_account_setting_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_account_setting_vue_vue_type_template_id_c74bafc6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/users/account_setting.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/users/account_setting.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/users/account_setting.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_account_setting_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_account_setting_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./account_setting.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/users/account_setting.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/users/account_setting.vue?vue&type=template&id=c74bafc6":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/users/account_setting.vue?vue&type=template&id=c74bafc6 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_account_setting_vue_vue_type_template_id_c74bafc6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_account_setting_vue_vue_type_template_id_c74bafc6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./account_setting.vue?vue&type=template&id=c74bafc6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/users/account_setting.vue?vue&type=template&id=c74bafc6");


/***/ })

}]);