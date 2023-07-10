"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-validation"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/validation.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/validation.vue?vue&type=script&setup=true&lang=js ***!
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
  __name: 'validation',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Form Validation'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var form1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      name: ''
    });
    var is_submit_form1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      email: ''
    });
    var is_submit_form2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      select: ''
    });
    var is_submit_form3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      first_name: 'Shaun',
      last_name: 'Park',
      username: '',
      city: '',
      state: '',
      zip: '',
      is_terms: false
    });
    var is_submit_form4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      first_name: 'Shaun',
      last_name: 'Park',
      username: '',
      city: '',
      state: '',
      zip: '',
      is_terms: false
    });
    var is_submit_form5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      first_name: 'Shaun',
      last_name: 'Park',
      username: '',
      city: '',
      state: '',
      zip: '',
      is_terms: false
    });
    var is_submit_form6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var toggleCode = function toggleCode(name) {
      if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter(function (d) {
          return d != name;
        });
      } else {
        code_arr.value.push(name);
      }
    };

    var email_validate = function email_validate(email) {
      var regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
      return regexp.test(email);
    };

    var submit_form1 = function submit_form1() {
      is_submit_form1.value = true;

      if (form1.value.name) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
    };

    var submit_form2 = function submit_form2() {
      is_submit_form2.value = true;

      if (email_validate(form2.value.email)) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
    };

    var submit_form3 = function submit_form3() {
      is_submit_form3.value = true;

      if (form3.value.select) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
    };

    var submit_form4 = function submit_form4() {
      is_submit_form4.value = true;

      if (form4.value.first_name && form4.value.last_name && form4.value.username && form4.value.city && form4.value.state && form4.value.zip && form4.value.is_terms) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
    };

    var submit_form5 = function submit_form5() {
      is_submit_form5.value = true;

      if (form5.value.first_name && form5.value.last_name && form5.value.username && form5.value.city && form5.value.state && form5.value.zip && form5.value.is_terms) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
    };

    var submit_form6 = function submit_form6() {
      is_submit_form6.value = true;

      if (form6.value.first_name && form6.value.last_name && form6.value.username && form6.value.city && form6.value.state && form6.value.zip && form6.value.is_terms) {
        //form validated success
        showMessage('Form submitted successfully.');
      }
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
      code_arr: code_arr,
      form1: form1,
      is_submit_form1: is_submit_form1,
      form2: form2,
      is_submit_form2: is_submit_form2,
      form3: form3,
      is_submit_form3: is_submit_form3,
      form4: form4,
      is_submit_form4: is_submit_form4,
      form5: form5,
      is_submit_form5: is_submit_form5,
      form6: form6,
      is_submit_form6: is_submit_form6,
      toggleCode: toggleCode,
      email_validate: email_validate,
      submit_form1: submit_form1,
      submit_form2: submit_form2,
      submit_form3: submit_form3,
      submit_form4: submit_form4,
      submit_form5: submit_form5,
      submit_form6: submit_form6,
      showMessage: showMessage,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/validation.vue?vue&type=template&id=8134da3a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/validation.vue?vue&type=template&id=8134da3a ***!
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
}, "Forms")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Validation")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#basic\" class=\"nav-link\">Basic</a><a href=\"#email\" class=\"nav-link\">Email</a><a href=\"#select\" class=\"nav-link\">Select</a><a href=\"#custom_styles\" class=\"nav-link\">Custom Styles</a><a href=\"#browser_default\" class=\"nav-link\">Browser Default</a><a href=\"#tooltips\" class=\"nav-link\">Tooltips</a>", 6);

var _hoisted_12 = [_hoisted_6];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/forms/validation\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/forms/validation </a></div></div></div>", 1);

var _hoisted_14 = {
  "class": "row layout-top-spacing"
};
var _hoisted_15 = {
  id: "basic",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_16 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Basic")])])], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "panel-body"
};
var _hoisted_19 = ["onSubmit"];
var _hoisted_20 = {
  "class": "row"
};
var _hoisted_21 = {
  "class": "col-md-12 form-group"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "fullName"
}, "Full Name", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please fill the name", -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn mt-2 btn-primary"
}, "Submit form", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "code-section-container show-code"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_28 = [_hoisted_27];
var _hoisted_29 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Basic -->\n<form novalidate class=\"simple-example\" @submit.stop.prevent=\"submit_form1\">\n    <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n            <label for=\"fullName\">Full Name</label>\n            <input v-model=\"form1.name\" id=\"fullName\" type=\"text\" class=\"form-control\" :class=\"[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']\" />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please fill the name</div>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn mt-2 btn-primary\">Submit form</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_31 = {
  id: "email",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_32 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Email")])])], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "panel-body"
};
var _hoisted_35 = ["onSubmit"];
var _hoisted_36 = {
  "class": "row"
};
var _hoisted_37 = {
  "class": "col-md-12 form-group"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "e_mail"
}, "Email", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please fill the Email", -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary form-group mt-2",
  type: "submit"
}, "Submit form", -1
/* HOISTED */
);

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

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Email -->\n<form class=\"email\" novalidate @submit.stop.prevent=\"submit_form2\">\n    <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n            <label for=\"e_mail\">Email</label>\n            <input\n                v-model=\"form2.email\"\n                type=\"email\"\n                class=\"form-control\"\n                id=\"e_mail\"\n                :class=\"[is_submit_form2 ? (form2.email && email_validate(form2.email) ? 'is-valid' : 'is-invalid') : '']\"\n            />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please fill the Email</div>\n        </div>\n    </div>\n    <button class=\"btn btn-primary form-group mt-2\" type=\"submit\">Submit form</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_47 = {
  id: "select",
  "class": "col-lg-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Select")])])], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "panel-body"
};
var _hoisted_51 = ["onSubmit"];
var _hoisted_52 = {
  "class": "row"
};
var _hoisted_53 = {
  "class": "col-md-12"
};
var _hoisted_54 = {
  id: "select_menu",
  "class": "form-group form-group"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Open this select menu", -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "One", -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "2"
}, "Two", -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "3"
}, "Three", -1
/* HOISTED */
);

var _hoisted_59 = [_hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58];

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Example valid custom select feedback", -1
/* HOISTED */
);

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please Select the field", -1
/* HOISTED */
);

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary mt-2",
  type: "submit"
}, "Submit form", -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "code-section-container show-code"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_65 = [_hoisted_64];
var _hoisted_66 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Select -->\n<form class=\"select\" novalidate @submit.stop.prevent=\"submit_form3\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div id=\"select_menu\" class=\"form-group form-group\">\n                <select v-model=\"form3.select\" class=\"form-select\" :class=\"[is_submit_form3 ? (form3.select ? 'is-valid' : 'is-invalid') : '']\">\n                    <option value=\"\">Open this select menu</option>\n                    <option value=\"1\">One</option>\n                    <option value=\"2\">Two</option>\n                    <option value=\"3\">Three</option>\n                </select>\n                <div class=\"valid-feedback\">Example valid custom select feedback</div>\n                <div class=\"invalid-feedback\">Please Select the field</div>\n            </div>\n        </div>\n    </div>\n    <button class=\"btn btn-primary mt-2\" type=\"submit\">Submit form</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_68 = {
  id: "custom_styles",
  "class": "col-lg-12 layout-spacing col-md-12"
};
var _hoisted_69 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Custom styles")])])], -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "panel-body"
};
var _hoisted_72 = ["onSubmit"];
var _hoisted_73 = {
  "class": "row"
};
var _hoisted_74 = {
  "class": "col-md-4 form-group"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationCustom01"
}, "First name", -1
/* HOISTED */
);

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please fill the first name", -1
/* HOISTED */
);

var _hoisted_78 = {
  "class": "col-md-4 form-group"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationCustom02"
}, "Last name", -1
/* HOISTED */
);

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please fill the last name", -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "col-md-4 form-group"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationCustomUsername"
}, "Username", -1
/* HOISTED */
);

var _hoisted_84 = {
  "class": "input-group"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "inputGroupPrepend"
}, "@", -1
/* HOISTED */
);

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please choose a username.", -1
/* HOISTED */
);

var _hoisted_88 = {
  "class": "row"
};
var _hoisted_89 = {
  "class": "col-md-6 form-group"
};

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationCustom03"
}, "City", -1
/* HOISTED */
);

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please provide a valid city.", -1
/* HOISTED */
);

var _hoisted_93 = {
  "class": "col-md-3 form-group"
};

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationCustom04"
}, "State", -1
/* HOISTED */
);

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please provide a valid state.", -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "col-md-3 form-group"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationCustom05"
}, "Zip", -1
/* HOISTED */
);

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-feedback"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Please provide a valid zip.", -1
/* HOISTED */
);

var _hoisted_101 = {
  "class": "form-group form-group"
};
var _hoisted_102 = {
  "class": "form-check ps-0"
};
var _hoisted_103 = {
  "class": "custom-control custom-checkbox checkbox-success"
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "invalidCheck"
}, "Agree to terms and conditions", -1
/* HOISTED */
);

var _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "You must agree before submitting.", -1
/* HOISTED */
);

var _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary mt-3",
  type: "submit"
}, "Submit form", -1
/* HOISTED */
);

var _hoisted_107 = {
  "class": "code-section-container show-code"
};

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_109 = [_hoisted_108];
var _hoisted_110 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Custom -->\n<form class=\"needs-validation\" novalidate @submit.stop.prevent=\"submit_form4\">\n    <div class=\"row\">\n        <div class=\"col-md-4 form-group\">\n            <label for=\"validationCustom01\">First name</label>\n            <input\n                type=\"text\"\n                v-model=\"form4.first_name\"\n                class=\"form-control\"\n                :class=\"[is_submit_form4 ? (form4.first_name ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationCustom01\"\n                placeholder=\"First name\"\n            />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please fill the first name</div>\n        </div>\n        <div class=\"col-md-4 form-group\">\n            <label for=\"validationCustom02\">Last name</label>\n            <input\n                type=\"text\"\n                v-model=\"form4.last_name\"\n                class=\"form-control\"\n                :class=\"[is_submit_form4 ? (form4.last_name ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationCustom02\"\n                placeholder=\"Last name\"\n            />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please fill the last name</div>\n        </div>\n        <div class=\"col-md-4 form-group\">\n            <label for=\"validationCustomUsername\">Username</label>\n            <div class=\"input-group\">\n                <span class=\"input-group-text\" id=\"inputGroupPrepend\">@</span>\n                <input\n                    type=\"text\"\n                    v-model=\"form4.username\"\n                    class=\"form-control\"\n                    :class=\"[is_submit_form4 ? (form4.username ? 'is-valid' : 'is-invalid') : '']\"\n                    id=\"validationCustomUsername\"\n                    placeholder=\"Username\"\n                    aria-describedby=\"inputGroupPrepend\"\n                />\n                <div class=\"valid-feedback\">Looks good!</div>\n                <div class=\"invalid-feedback\">Please choose a username.</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 form-group\">\n            <label for=\"validationCustom03\">City</label>\n            <input\n                type=\"text\"\n                v-model=\"form4.city\"\n                class=\"form-control\"\n                :class=\"[is_submit_form4 ? (form4.city ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationCustom03\"\n                placeholder=\"City\"\n            />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please provide a valid city.</div>\n        </div>\n        <div class=\"col-md-3 form-group\">\n            <label for=\"validationCustom04\">State</label>\n            <input\n                type=\"text\"\n                v-model=\"form4.state\"\n                class=\"form-control\"\n                :class=\"[is_submit_form4 ? (form4.state ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationCustom04\"\n                placeholder=\"State\"\n            />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please provide a valid state.</div>\n        </div>\n        <div class=\"col-md-3 form-group\">\n            <label for=\"validationCustom05\">Zip</label>\n            <input\n                type=\"text\"\n                v-model=\"form4.zip\"\n                class=\"form-control\"\n                :class=\"[is_submit_form4 ? (form4.zip ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationCustom05\"\n                placeholder=\"Zip\"\n            />\n            <div class=\"valid-feedback\">Looks good!</div>\n            <div class=\"invalid-feedback\">Please provide a valid zip.</div>\n        </div>\n    </div>\n    <div class=\"form-group form-group\">\n        <div class=\"form-check ps-0\">\n            <div class=\"custom-control custom-checkbox checkbox-success\">\n                <input\n                    type=\"checkbox\"\n                    v-model=\"form4.is_terms\"\n                    class=\"custom-control-input\"\n                    :class=\"[is_submit_form4 ? (form4.is_terms ? 'is-valid' : 'is-invalid') : '']\"\n                    id=\"invalidCheck\"\n                />\n                <label class=\"custom-control-label\" for=\"invalidCheck\">Agree to terms and conditions</label>\n                <div class=\"invalid-feedback\">You must agree before submitting.</div>\n            </div>\n        </div>\n    </div>\n    <button class=\"btn btn-primary mt-3\" type=\"submit\">Submit form</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_112 = {
  id: "browser_default",
  "class": "col-lg-12 layout-spacing col-md-12"
};
var _hoisted_113 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Browser defaults")])])], -1
/* HOISTED */
);

var _hoisted_115 = {
  "class": "panel-body"
};
var _hoisted_116 = ["onSubmit"];
var _hoisted_117 = {
  "class": "row"
};
var _hoisted_118 = {
  "class": "col-md-4 form-group"
};

var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationDefault01"
}, "First name", -1
/* HOISTED */
);

var _hoisted_120 = {
  "class": "col-md-4 form-group"
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationDefault02"
}, "Last name", -1
/* HOISTED */
);

var _hoisted_122 = {
  "class": "col-md-4 form-group"
};

var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationDefaultUsername"
}, "Username", -1
/* HOISTED */
);

var _hoisted_124 = {
  "class": "input-group"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "inputGroupPrepend2"
}, "@", -1
/* HOISTED */
);

var _hoisted_126 = {
  "class": "row"
};
var _hoisted_127 = {
  "class": "col-md-6 form-group"
};

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationDefault03"
}, "City", -1
/* HOISTED */
);

var _hoisted_129 = {
  "class": "col-md-3 form-group"
};

var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationDefault04"
}, "State", -1
/* HOISTED */
);

var _hoisted_131 = {
  "class": "col-md-3 form-group"
};

var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationDefault05"
}, "Zip", -1
/* HOISTED */
);

var _hoisted_133 = {
  "class": "form-group form-group"
};
var _hoisted_134 = {
  "class": "custom-control custom-checkbox checkbox-primary"
};

var _hoisted_135 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "invalidCheck2"
}, "Agree to terms and conditions", -1
/* HOISTED */
);

var _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, "Agree to terms and conditions", -1
/* HOISTED */
);

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary mt-3",
  type: "submit"
}, "Submit form", -1
/* HOISTED */
);

var _hoisted_138 = {
  "class": "code-section-container show-code"
};

var _hoisted_139 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_140 = [_hoisted_139];
var _hoisted_141 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- Browser defaults -->\n<form @submit.stop.prevent=\"submit_form5\">\n    <div class=\"row\">\n        <div class=\"col-md-4 form-group\">\n            <label for=\"validationDefault01\">First name</label>\n            <input type=\"text\" v-model=\"form5.first_name\" class=\"form-control\" id=\"validationDefault01\" placeholder=\"First name\" required />\n        </div>\n        <div class=\"col-md-4 form-group\">\n            <label for=\"validationDefault02\">Last name</label>\n            <input type=\"text\" v-model=\"form5.last_name\" class=\"form-control\" id=\"validationDefault02\" placeholder=\"Last name\" required />\n        </div>\n        <div class=\"col-md-4 form-group\">\n            <label for=\"validationDefaultUsername\">Username</label>\n            <div class=\"input-group\">\n                <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\n                <input\n                    type=\"text\"\n                    v-model=\"form5.username\"\n                    class=\"form-control\"\n                    id=\"validationDefaultUsername\"\n                    placeholder=\"Username\"\n                    aria-describedby=\"inputGroupPrepend2\"\n                    required\n                />\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 form-group\">\n            <label for=\"validationDefault03\">City</label>\n            <input type=\"text\" v-model=\"form5.city\" class=\"form-control\" id=\"validationDefault03\" placeholder=\"City\" required />\n        </div>\n        <div class=\"col-md-3 form-group\">\n            <label for=\"validationDefault04\">State</label>\n            <input type=\"text\" v-model=\"form5.state\" class=\"form-control\" id=\"validationDefault04\" placeholder=\"State\" required />\n        </div>\n        <div class=\"col-md-3 form-group\">\n            <label for=\"validationDefault05\">Zip</label>\n            <input type=\"text\" v-model=\"form5.zip\" class=\"form-control\" id=\"validationDefault05\" placeholder=\"Zip\" required />\n        </div>\n    </div>\n    <div class=\"form-group form-group\">\n        <div class=\"custom-control custom-checkbox checkbox-primary\">\n            <input type=\"checkbox\" v-model=\"form5.is_terms\" class=\"custom-control-input\" id=\"invalidCheck2\" required />\n            <label class=\"custom-control-label\" for=\"invalidCheck2\">Agree to terms and conditions</label>\n            <div class=\"invalid-feedback\">Agree to terms and conditions</div>\n        </div>\n    </div>\n    <button class=\"btn btn-primary mt-3\" type=\"submit\">Submit form</button>\n</form>\n", -1
/* HOISTED */
);

var _hoisted_143 = {
  id: "tooltips",
  "class": "col-lg-12 layout-spacing col-md-12"
};
var _hoisted_144 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_145 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Tooltips")])])], -1
/* HOISTED */
);

var _hoisted_146 = {
  "class": "panel-body"
};
var _hoisted_147 = ["onSubmit"];
var _hoisted_148 = {
  "class": "row"
};
var _hoisted_149 = {
  "class": "col-md-4 mb-5 position-relative"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationTooltip01"
}, "First name", -1
/* HOISTED */
);

var _hoisted_151 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-tooltip"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Please fill the first name", -1
/* HOISTED */
);

var _hoisted_153 = {
  "class": "col-md-4 mb-5 position-relative"
};

var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationTooltip02"
}, "Last name", -1
/* HOISTED */
);

var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-tooltip"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Please fill the last name", -1
/* HOISTED */
);

var _hoisted_157 = {
  "class": "col-md-4 mb-5 position-relative"
};

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationTooltipUsername"
}, "Username", -1
/* HOISTED */
);

var _hoisted_159 = {
  "class": "input-group"
};

var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text",
  id: "validationTooltipUsernamePrepend"
}, "@", -1
/* HOISTED */
);

var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-tooltip"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Please choose a unique and valid username.", -1
/* HOISTED */
);

var _hoisted_163 = {
  "class": "row"
};
var _hoisted_164 = {
  "class": "col-md-6 mb-5 position-relative"
};

var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationTooltip03"
}, "City", -1
/* HOISTED */
);

var _hoisted_166 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-tooltip"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Please provide a valid city.", -1
/* HOISTED */
);

var _hoisted_168 = {
  "class": "col-md-3 mb-5 position-relative"
};

var _hoisted_169 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationTooltip04"
}, "State", -1
/* HOISTED */
);

var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-tooltip"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_171 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Please provide a valid state.", -1
/* HOISTED */
);

var _hoisted_172 = {
  "class": "col-md-3 mb-5 position-relative"
};

var _hoisted_173 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationTooltip05"
}, "Zip", -1
/* HOISTED */
);

var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "valid-tooltip"
}, "Looks good!", -1
/* HOISTED */
);

var _hoisted_175 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Please provide a valid zip.", -1
/* HOISTED */
);

var _hoisted_176 = {
  "class": "form-group form-group position-relative"
};
var _hoisted_177 = {
  "class": "custom-control custom-checkbox checkbox-success"
};

var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "invalidCheck3"
}, "Agree to terms and conditions", -1
/* HOISTED */
);

var _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-tooltip"
}, "Agree to terms and conditions", -1
/* HOISTED */
);

var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary mt-2",
  type: "submit"
}, "Submit form", -1
/* HOISTED */
);

var _hoisted_181 = {
  "class": "code-section-container show-code"
};

var _hoisted_182 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_183 = [_hoisted_182];
var _hoisted_184 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_185 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<!-- tooltips -->\n<form class=\"needs-validation\" novalidate @submit.stop.prevent=\"submit_form6\">\n    <div class=\"row\">\n        <div class=\"col-md-4 mb-5 position-relative\">\n            <label for=\"validationTooltip01\">First name</label>\n            <input\n                type=\"text\"\n                v-model=\"form6.first_name\"\n                class=\"form-control\"\n                :class=\"[is_submit_form6 ? (form6.first_name ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationTooltip01\"\n                placeholder=\"First name\"\n            />\n            <div class=\"valid-tooltip\">Looks good!</div>\n            <div class=\"invalid-tooltip\">Please fill the first name</div>\n        </div>\n        <div class=\"col-md-4 mb-5 position-relative\">\n            <label for=\"validationTooltip02\">Last name</label>\n            <input\n                type=\"text\"\n                v-model=\"form6.last_name\"\n                class=\"form-control\"\n                :class=\"[is_submit_form6 ? (form6.last_name ? 'is-valid' : 'is-invalid') : '']\"\n                id=\"validationTooltip02\"\n                placeholder=\"Last name\"\n            />\n            <div class=\"valid-tooltip\">Looks good!</div>\n            <div class=\"invalid-tooltip\">Please fill the last name</div>\n        </div>\n        <div class=\"col-md-4 mb-5 position-relative\">\n            <label for=\"validationTooltipUsername\">Username</label>\n            <div class=\"input-group\">\n                <span class=\"input-group-text\" id=\"validationTooltipUsernamePrepend\">@</span>\n                <input\n                    type=\"text\"\n                    v-model=\"form6.username\"\n                    class=\"form-control\"\n                    :class=\"[is_submit_form6 ? (form6.username ? 'is-valid' : 'is-invalid') : '']\"\n                    id=\"validationTooltipUsername\"\n                    placeholder=\"Username\"\n                    aria-describedby=\"validationTooltipUsernamePrepend\"\n                />\n                <div class=\"valid-tooltip\">Looks good!</div>\n                <div class=\"invalid-tooltip\">Please choose a unique and valid username.</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 mb-5 position-relative\">\n            <label for=\"validationTooltip03\">City</label>\n            <input\n                type=\"text\"\n                v-model=\"form6.city\"\n                :class=\"[is_submit_form6 ? (form6.city ? 'is-valid' : 'is-invalid') : '']\"\n                class=\"form-control\"\n                id=\"validationTooltip03\"\n                placeholder=\"City\"\n            />\n            <div class=\"valid-tooltip\">Looks good!</div>\n            <div class=\"invalid-tooltip\">Please provide a valid city.</div>\n        </div>\n        <div class=\"col-md-3 mb-5 position-relative\">\n            <label for=\"validationTooltip04\">State</label>\n            <input\n                type=\"text\"\n                v-model=\"form6.state\"\n                :class=\"[is_submit_form6 ? (form6.state ? 'is-valid' : 'is-invalid') : '']\"\n                class=\"form-control\"\n                id=\"validationTooltip04\"\n                placeholder=\"State\"\n            />\n            <div class=\"valid-tooltip\">Looks good!</div>\n            <div class=\"invalid-tooltip\">Please provide a valid state.</div>\n        </div>\n        <div class=\"col-md-3 mb-5 position-relative\">\n            <label for=\"validationTooltip05\">Zip</label>\n            <input\n                type=\"text\"\n                v-model=\"form6.zip\"\n                :class=\"[is_submit_form6 ? (form6.zip ? 'is-valid' : 'is-invalid') : '']\"\n                class=\"form-control\"\n                id=\"validationTooltip05\"\n                placeholder=\"Zip\"\n            />\n            <div class=\"valid-tooltip\">Looks good!</div>\n            <div class=\"invalid-tooltip\">Please provide a valid zip.</div>\n        </div>\n    </div>\n    <div class=\"form-group form-group position-relative\">\n        <div class=\"custom-control custom-checkbox checkbox-primary\">\n            <input\n                type=\"checkbox\"\n                v-model=\"form6.is_terms\"\n                class=\"custom-control-input\"\n                id=\"invalidCheck3\"\n                :class=\"[is_submit_form6 ? (form6.is_terms ? 'is-valid' : 'is-invalid') : '']\"\n            />\n            <label class=\"custom-control-label\" for=\"invalidCheck3\">Agree to terms and conditions</label>\n            <div class=\"invalid-tooltip\">Agree to terms and conditions</div>\n        </div>\n    </div>\n    <button class=\"btn btn-primary mt-2\" type=\"submit\">Submit form</button>\n</form>\n", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_12)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    novalidate: "",
    "class": "simple-example",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form1, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form1.name = $event;
    }),
    id: "fullName",
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form1 ? $setup.form1.name ? 'is-valid' : 'is-invalid' : '']])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form1.name]]), _hoisted_23, _hoisted_24])]), _hoisted_25], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_28), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_30];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "email",
    novalidate: "",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form2, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form2.email = $event;
    }),
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form2 ? $setup.form2.email && $setup.email_validate($setup.form2.email) ? 'is-valid' : 'is-invalid' : '']]),
    id: "e_mail"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form2.email]]), _hoisted_39, _hoisted_40])]), _hoisted_41], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_35), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_44), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_46];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "select",
    novalidate: "",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form3, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form3.select = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-select", [$setup.is_submit_form3 ? $setup.form3.select ? 'is-valid' : 'is-invalid' : '']])
  }, _hoisted_59, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form3.select]]), _hoisted_60, _hoisted_61])])]), _hoisted_62], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_51), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_65), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_67];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "needs-validation",
    novalidate: "",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form4, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form4.first_name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form4 ? $setup.form4.first_name ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationCustom01",
    placeholder: "First name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form4.first_name]]), _hoisted_76, _hoisted_77]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form4.last_name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form4 ? $setup.form4.last_name ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationCustom02",
    placeholder: "Last name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form4.last_name]]), _hoisted_80, _hoisted_81]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form4.username = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form4 ? $setup.form4.username ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationCustomUsername",
    placeholder: "Username",
    "aria-describedby": "inputGroupPrepend"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form4.username]]), _hoisted_86, _hoisted_87])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [_hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.form4.city = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form4 ? $setup.form4.city ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationCustom03",
    placeholder: "City"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form4.city]]), _hoisted_91, _hoisted_92]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [_hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.form4.state = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form4 ? $setup.form4.state ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationCustom04",
    placeholder: "State"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form4.state]]), _hoisted_95, _hoisted_96]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.form4.zip = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form4 ? $setup.form4.zip ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationCustom05",
    placeholder: "Zip"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form4.zip]]), _hoisted_99, _hoisted_100])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.form4.is_terms = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["custom-control-input", [$setup.is_submit_form4 ? $setup.form4.is_terms ? 'is-valid' : 'is-invalid' : '']]),
    id: "invalidCheck"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form4.is_terms]]), _hoisted_104, _hoisted_105])])]), _hoisted_106], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_72), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_109), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_111];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form5, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [_hoisted_119, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.form5.first_name = $event;
    }),
    "class": "form-control",
    id: "validationDefault01",
    placeholder: "First name",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form5.first_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [_hoisted_121, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.form5.last_name = $event;
    }),
    "class": "form-control",
    id: "validationDefault02",
    placeholder: "Last name",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form5.last_name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [_hoisted_123, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.form5.username = $event;
    }),
    "class": "form-control",
    id: "validationDefaultUsername",
    placeholder: "Username",
    "aria-describedby": "inputGroupPrepend2",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form5.username]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [_hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.form5.city = $event;
    }),
    "class": "form-control",
    id: "validationDefault03",
    placeholder: "City",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form5.city]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [_hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.form5.state = $event;
    }),
    "class": "form-control",
    id: "validationDefault04",
    placeholder: "State",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form5.state]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.form5.zip = $event;
    }),
    "class": "form-control",
    id: "validationDefault05",
    placeholder: "Zip",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form5.zip]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.form5.is_terms = $event;
    }),
    "class": "custom-control-input",
    id: "invalidCheck2",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form5.is_terms]]), _hoisted_135, _hoisted_136])]), _hoisted_137], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_116), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_140), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_142];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_144, [_hoisted_145, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "needs-validation",
    novalidate: "",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit_form6, ["stop", "prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $setup.form6.first_name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form6 ? $setup.form6.first_name ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationTooltip01",
    placeholder: "First name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form6.first_name]]), _hoisted_151, _hoisted_152]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [_hoisted_154, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $setup.form6.last_name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form6 ? $setup.form6.last_name ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationTooltip02",
    placeholder: "Last name"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form6.last_name]]), _hoisted_155, _hoisted_156]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [_hoisted_158, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [_hoisted_160, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.form6.username = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", [$setup.is_submit_form6 ? $setup.form6.username ? 'is-valid' : 'is-invalid' : '']]),
    id: "validationTooltipUsername",
    placeholder: "Username",
    "aria-describedby": "validationTooltipUsernamePrepend"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form6.username]]), _hoisted_161, _hoisted_162])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [_hoisted_165, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.form6.city = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[$setup.is_submit_form6 ? $setup.form6.city ? 'is-valid' : 'is-invalid' : ''], "form-control"]),
    id: "validationTooltip03",
    placeholder: "City"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form6.city]]), _hoisted_166, _hoisted_167]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_168, [_hoisted_169, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $setup.form6.state = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[$setup.is_submit_form6 ? $setup.form6.state ? 'is-valid' : 'is-invalid' : ''], "form-control"]),
    id: "validationTooltip04",
    placeholder: "State"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form6.state]]), _hoisted_170, _hoisted_171]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [_hoisted_173, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $setup.form6.zip = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([[$setup.is_submit_form6 ? $setup.form6.zip ? 'is-valid' : 'is-invalid' : ''], "form-control"]),
    id: "validationTooltip05",
    placeholder: "Zip"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form6.zip]]), _hoisted_174, _hoisted_175])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $setup.form6.is_terms = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["custom-control-input", [$setup.is_submit_form6 ? $setup.form6.is_terms ? 'is-valid' : 'is-invalid' : '']]),
    id: "invalidCheck3"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form6.is_terms]]), _hoisted_178, _hoisted_179])]), _hoisted_180], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_147), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_181, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_183), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_185];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/forms/validation.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/forms/validation.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validation_vue_vue_type_template_id_8134da3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation.vue?vue&type=template&id=8134da3a */ "./resources/js/src/views/forms/validation.vue?vue&type=template&id=8134da3a");
/* harmony import */ var _validation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/forms/validation.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_validation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_validation_vue_vue_type_template_id_8134da3a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/forms/validation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/forms/validation.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/forms/validation.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_validation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_validation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./validation.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/validation.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/forms/validation.vue?vue&type=template&id=8134da3a":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/forms/validation.vue?vue&type=template&id=8134da3a ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_validation_vue_vue_type_template_id_8134da3a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_validation_vue_vue_type_template_id_8134da3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./validation.vue?vue&type=template&id=8134da3a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/forms/validation.vue?vue&type=template&id=8134da3a");


/***/ })

}]);