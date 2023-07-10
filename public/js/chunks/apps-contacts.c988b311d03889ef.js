(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-contacts"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_apps_contacts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/apps/contacts.scss */ "./resources/js/src/assets/sass/apps/contacts.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'contacts',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Contact Profile'
    });
    var addContactModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var params = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      id: null,
      name: '',
      email: '',
      role: '',
      phone: '',
      location: ''
    });
    var contacts_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var filterd_contacts_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var search_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var ids = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var grid_type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('list');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      initPopup();
      bind_contacts();
    });
    var check_all_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (contacts_list.value.length && ids.value.length == contacts_list.value.length) {
        return true;
      } else {
        return false;
      }
    });

    var initPopup = function initPopup() {
      addContactModal = new window.bootstrap.Modal(document.getElementById('addContactModal'));
    };

    var bind_contacts = function bind_contacts() {
      contacts_list.value = [{
        id: 1,
        path: 'profile-5.jpeg',
        name: 'Alan Green',
        role: 'Web Developer',
        email: 'alan@mail.com',
        location: 'Boston, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 2,
        path: 'profile-11.jpeg',
        name: 'Linda Nelson',
        role: 'Web Designer',
        email: 'linda@mail.com',
        location: 'Sydney, Australia',
        phone: '+1 (070) 123-4567'
      }, {
        id: 3,
        path: 'profile-12.jpeg',
        name: 'Lila Perry',
        role: 'UX/UI Designer',
        email: 'lila@mail.com',
        location: 'Miami, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 4,
        path: 'profile-3.jpeg',
        name: 'Andy King',
        role: 'Project Lead',
        email: 'andy@mail.com',
        location: 'Tokyo, Japan',
        phone: '+1 (070) 123-4567'
      }, {
        id: 5,
        path: 'profile-15.jpeg',
        name: 'Jesse Cory',
        role: 'Web Developer',
        email: 'jesse@mail.com',
        location: 'Edinburgh, UK',
        phone: '+1 (070) 123-4567'
      }, {
        id: 6,
        path: 'profile-7.jpeg',
        name: 'Xavier',
        role: 'UX/UI Designer',
        email: 'xavier@mail.com',
        location: 'New York, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 7,
        path: 'profile-18.jpeg',
        name: 'Susan',
        role: 'Project Manager',
        email: 'susan@mail.com',
        location: 'Miami, USA',
        phone: '+1 (070) 123-4567'
      }, {
        id: 8,
        path: 'profile-29.jpeg',
        name: 'raci Lopez',
        role: 'Web Developer',
        email: 'traci@mail.com',
        location: 'Edinburgh, UK',
        phone: '+1 (070) 123-4567'
      }];
      search_contacts();
    };

    var search_contacts = function search_contacts() {
      filterd_contacts_list.value = contacts_list.value.filter(function (d) {
        return d.name.toLowerCase().includes(search_user.value);
      });
    };

    var edit_user = function edit_user(user) {
      params.value = {
        id: null,
        name: '',
        email: '',
        role: '',
        phone: '',
        location: ''
      };

      if (user) {
        params.value = JSON.parse(JSON.stringify(user));
      }

      addContactModal.show();
    };

    var save_user = function save_user() {
      if (!params.value.name) {
        showMessage('Name is required.', 'error');
        return true;
      }

      if (!params.value.email) {
        showMessage('Email is required.', 'error');
        return true;
      }

      if (!params.value.phone) {
        showMessage('Phone is required.', 'error');
        return true;
      }

      if (params.value.id) {
        //update user
        var user = contacts_list.value.find(function (d) {
          return d.id == params.value.id;
        });
        user.name = params.value.name;
        user.email = params.value.email;
        user.role = params.value.role;
        user.phone = params.value.phone;
        user.location = params.value.location;
      } else {
        //add user
        var max_user_id = contacts_list.value.reduce(function (max, character) {
          return character.id > max ? character.id : max;
        }, contacts_list.value[0].id);

        if (!max_user_id) {
          max_user_id = 0;
        }

        var _user = {
          id: max_user_id + 1,
          path: 'profile-30.png',
          name: params.value.name,
          email: params.value.email,
          role: params.value.role,
          phone: params.value.phone,
          location: params.value.location
        };
        contacts_list.value.splice(0, 0, _user);
        search_contacts();
      }

      showMessage('User saved successfully.');
      addContactModal.hide();
    };

    var delete_user = function delete_user(user) {
      contacts_list.value = contacts_list.value.filter(function (d) {
        return d.id != user.id;
      });
      ids.value = ids.value.filter(function (d) {
        return d != user.id;
      });
      search_contacts();
      showMessage('User deleted successfully.');
    };

    var delete_selected = function delete_selected() {
      if (!ids.value.length) {
        showMessage('Please select atleast one user.', 'info');
        return false;
      }

      contacts_list.value = contacts_list.value.filter(function (d) {
        return !ids.value.includes(d.id);
      });
      clear_selection();
      search_contacts();
      showMessage('Users deleted successfully.');
    };

    var check_all = function check_all(is_checked) {
      if (is_checked) {
        ids.value = contacts_list.value.map(function (d) {
          return d.id;
        });
      } else {
        clear_selection();
      }
    };

    var clear_selection = function clear_selection() {
      ids.value = [];
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
      addContactModal: addContactModal,
      params: params,
      contacts_list: contacts_list,
      filterd_contacts_list: filterd_contacts_list,
      search_user: search_user,
      ids: ids,
      grid_type: grid_type,
      check_all_checkbox: check_all_checkbox,
      initPopup: initPopup,
      bind_contacts: bind_contacts,
      search_contacts: search_contacts,
      edit_user: edit_user,
      save_user: save_user,
      delete_user: delete_user,
      delete_selected: delete_selected,
      check_all: check_all,
      clear_selection: clear_selection,
      showMessage: showMessage,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-31778694"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "layout-px-spacing app-contacts"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
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
  }, "Apps")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item active",
    "aria-current": "page"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Contacts")])])])])])], -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  "class": "row layout-spacing layout-top-spacing",
  id: "cancel-row"
};
var _hoisted_4 = {
  "class": "col-lg-12"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center"
};
var _hoisted_7 = {
  "class": "form-inline my-2 my-lg-0"
};
var _hoisted_8 = {
  "class": ""
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-search"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-end text-center layout-spacing align-self-center"
};
var _hoisted_11 = {
  "class": "d-flex justify-content-sm-end justify-content-center"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg id=\"btn-add-contact\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-user-plus\" data-v-31778694><path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\" data-v-31778694></path><circle cx=\"8.5\" cy=\"7\" r=\"4\" data-v-31778694></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\" data-v-31778694></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\" data-v-31778694></line></svg>", 1);

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = {
  "class": "switch align-self-center"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\" data-v-31778694></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\" data-v-31778694></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\" data-v-31778694></line><line x1=\"3\" y1=\"6\" x2=\"3\" y2=\"6\" data-v-31778694></line><line x1=\"3\" y1=\"12\" x2=\"3\" y2=\"12\" data-v-31778694></line><line x1=\"3\" y1=\"18\" x2=\"3\" y2=\"18\" data-v-31778694></line>", 6);

var _hoisted_21 = [_hoisted_15];

var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_26 = [_hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25];
var _hoisted_27 = {
  "class": "items items-header-section"
};
var _hoisted_28 = {
  "class": "item-content"
};
var _hoisted_29 = {
  "class": ""
};
var _hoisted_30 = {
  "class": "checkbox-primary custom-control custom-checkbox d-inline-block"
};
var _hoisted_31 = ["checked"];

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "custom-control-label",
    "for": "chkALl"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Name", -1
  /* HOISTED */
  );
});

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"user-email\" data-v-31778694><h4 data-v-31778694>Email</h4></div><div class=\"user-location\" data-v-31778694><h4 style=\"margin-left:0;\" data-v-31778694>Location</h4></div><div class=\"user-phone\" data-v-31778694><h4 style=\"margin-left:3px;\" data-v-31778694>Phone</h4></div>", 3);

var _hoisted_37 = {
  "class": "action-btn"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2 delete-multiple\" data-v-31778694><polyline points=\"3 6 5 6 21 6\" data-v-31778694></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" data-v-31778694></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\" data-v-31778694></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\" data-v-31778694></line></svg>", 1);

var _hoisted_39 = [_hoisted_38];
var _hoisted_40 = {
  "class": "item-content"
};
var _hoisted_41 = {
  "class": "user-profile"
};
var _hoisted_42 = ["id", "value"];
var _hoisted_43 = ["for"];
var _hoisted_44 = ["src"];
var _hoisted_45 = {
  "class": "user-meta-info"
};
var _hoisted_46 = {
  "class": "user-name"
};
var _hoisted_47 = {
  "class": "user-work"
};
var _hoisted_48 = {
  "class": "user-email"
};

var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "info-title"
  }, "Email:", -1
  /* HOISTED */
  );
});

var _hoisted_50 = {
  "class": "usr-email-addr"
};
var _hoisted_51 = {
  "class": "user-location"
};

var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "info-title"
  }, "Location:", -1
  /* HOISTED */
  );
});

var _hoisted_53 = {
  "class": "usr-location"
};
var _hoisted_54 = {
  "class": "user-phone"
};

var _hoisted_55 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "info-title"
  }, "Phone:", -1
  /* HOISTED */
  );
});

var _hoisted_56 = {
  "class": "usr-ph-no"
};
var _hoisted_57 = {
  "class": "action-btn"
};
var _hoisted_58 = ["onClick"];

var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-edit-2 edit"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_60 = [_hoisted_59];
var _hoisted_61 = ["onClick"];

var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-user-minus delete"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_63 = [_hoisted_62];
var _hoisted_64 = {
  id: "addContactModal",
  "class": "modal fade",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_65 = {
  "class": "modal-dialog modal-md modal-dialog-centered"
};
var _hoisted_66 = {
  "class": "modal-content mailbox-popup"
};
var _hoisted_67 = {
  "class": "modal-header"
};
var _hoisted_68 = {
  "class": "modal-title"
};

var _hoisted_69 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "data-dismiss": "modal",
    "data-bs-dismiss": "modal",
    "aria-label": "Close",
    "class": "btn-close"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_70 = {
  "class": "modal-body"
};
var _hoisted_71 = {
  "class": "add-contact-box"
};
var _hoisted_72 = {
  "class": "add-contact-content"
};
var _hoisted_73 = {
  id: "addContactModalTitle"
};
var _hoisted_74 = {
  "class": "row"
};
var _hoisted_75 = {
  "class": "col-md-6"
};
var _hoisted_76 = {
  "class": "form-group mb-4"
};

var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Name", -1
  /* HOISTED */
  );
});

var _hoisted_78 = {
  "class": "col-md-6"
};
var _hoisted_79 = {
  "class": "form-group mb-4"
};

var _hoisted_80 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Email", -1
  /* HOISTED */
  );
});

var _hoisted_81 = {
  "class": "row"
};
var _hoisted_82 = {
  "class": "col-md-6"
};
var _hoisted_83 = {
  "class": "form-group mb-4"
};

var _hoisted_84 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Occupation", -1
  /* HOISTED */
  );
});

var _hoisted_85 = {
  "class": "col-md-6"
};
var _hoisted_86 = {
  "class": "form-group mb-4"
};

var _hoisted_87 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Phone", -1
  /* HOISTED */
  );
});

var _hoisted_88 = {
  "class": "row"
};
var _hoisted_89 = {
  "class": "col-md-12"
};
var _hoisted_90 = {
  "class": "form-group mb-0"
};

var _hoisted_91 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Location", -1
  /* HOISTED */
  );
});

var _hoisted_92 = {
  "class": "modal-footer"
};

var _hoisted_93 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default",
    "data-dismiss": "modal",
    "data-bs-dismiss": "modal"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "flaticon-cancel-12"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Discard")], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["panel-body searchable-container", [$setup.grid_type]])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.search_user = $event;
    }),
    "class": "product-search form-control",
    onKeyup: _cache[1] || (_cache[1] = function ($event) {
      return $setup.search_contacts();
    }),
    placeholder: "Search Contacts..."
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search_user, void 0, {
    trim: true
  }]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: $setup.edit_user
  }, _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.grid_type = 'list';
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'active-view': $setup.grid_type == 'list'
    }, "feather feather-list view-list me-1"]),
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _hoisted_21, 2
  /* CLASS */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.grid_type = 'grid';
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'active-view': $setup.grid_type == 'grid'
    }, "feather feather-grid view-grid"]),
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _hoisted_26, 2
  /* CLASS */
  ))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["searchable-items", [$setup.grid_type]])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "chkALl",
    type: "checkbox",
    checked: $setup.check_all_checkbox,
    "class": "custom-control-input",
    onChange: _cache[4] || (_cache[4] = function ($event) {
      return $setup.check_all($event.target.checked);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_31), _hoisted_32]), _hoisted_33]), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.delete_selected();
    })
  }, _hoisted_39)])])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filterd_contacts_list, function (user, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "items",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "checkbox-primary custom-control custom-checkbox",
      onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $event.stopPropagation();
      }, ["stop"]))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "checkbox",
      id: "chk-".concat(user.id),
      "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
        return $setup.ids = $event;
      }),
      "class": "custom-control-input",
      value: user.id
    }, null, 8
    /* PROPS */
    , _hoisted_42), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.ids]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "custom-control-label",
      "for": "chk-".concat(user.id)
    }, null, 8
    /* PROPS */
    , _hoisted_43)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./".concat(user.path)),
      alt: "avatar"
    }, null, 8
    /* PROPS */
    , _hoisted_44), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.role), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.email), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.location), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.phone), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      "class": "me-1",
      onClick: function onClick($event) {
        return $setup.edit_user(user);
      }
    }, _hoisted_60, 8
    /* PROPS */
    , _hoisted_58), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      onClick: function onClick($event) {
        return $setup.delete_user(user);
      }
    }, _hoisted_63, 8
    /* PROPS */
    , _hoisted_61)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.params.id ? 'Update User' : 'Add User'), 1
  /* TEXT */
  ), _hoisted_69]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.params.name = $event;
    }),
    "class": "form-control",
    placeholder: "Name"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.params.email = $event;
    }),
    "class": "form-control",
    placeholder: "Email"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.email]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.params.role = $event;
    }),
    "class": "form-control",
    placeholder: "Occupation"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.role]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.params.phone = $event;
    }),
    "class": "form-control",
    placeholder: "Phone"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.phone]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.params.location = $event;
    }),
    "class": "form-control",
    placeholder: "Location"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.location]])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $setup.save_user();
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.params.id ? 'Update' : 'Add'), 1
  /* TEXT */
  )])])])])], 2
  /* CLASS */
  )])])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/1.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/1.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/1-a080a7f9eb66a38e9a743a83d73bc4a9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/2.jpg":
/*!**********************************************!*\
  !*** ./resources/js/src/assets/images/2.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/2-6164a93971d43388ae96086025483860.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/3.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/3.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/3-94fefea456f1f8eec6ab44de06e4f2b0.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/ab-1.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/ab-1.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/ab-1-f76d20289d31c7855a30c6beef0f110e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/arrow-down.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/arrow-down.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/arrow-down-6e28c00974a9f0162a4537313d280f2d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/bg.png":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/bg.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/bg-bc33c69023a3b8c24ec178f8f9cf0727.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-1.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-1.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-1-53c544afe5a0a1aaa0daa30a07456756.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-2.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-2.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-2-96e049f9116c570e0d5f7efc6b95adee.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/boy.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/boy-27753654bafbb25eb114093e19fcbfb6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/contact-us-map-pin.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/contact-us-map-pin.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/contact-us-map-pin-5f681666850dcf169e8a3287e7502dee.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/cork-logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/cork-logo.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/cork-logo-21142feea95359d716b06f39abd00112.png";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-11.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-11.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-11-7e3615a862613ff94b8fceb1909991ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-12.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-12.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-12-0e18482b4e9eb73bded410ab963cf344.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-15.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-15.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-15-a7de86fcceaab8853231b08234536c9e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-16.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-16.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-16-b1c443ea0275f7d829d08b5219d64f60.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-17.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-17.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-17-614b919a7b457a2d1e301e006e84de0d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-4.jpeg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-4.jpeg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-4-a7a7099a65307fdaaf37259542bc152d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-1.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-1.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-1-34fbae9ceaed6d5e5c054c90d9b57c6c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-2.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-2.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-2-c651fd792a65c6dba42f0b515e91116d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-4.jpg":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/drag-4.jpg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/drag-4-f5c9dcedeeff8a69d5af37f41eb55708.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-1.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-1.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-1-c87ba41b8a029bac4e55b09f49233850.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-4.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-4.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-4-aecf5b0b8744c049e7efc6f22c940ca6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-6.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-6.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-6-edab66c6391a0cb0989bbc7d00def25d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-7.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-7.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-7-9e6e9718926cb5fddc4f57627fca2d63.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/faq.svg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/faq.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/faq-33762470b9228292d59d83d7c59197ef.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/file-preview.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/file-preview.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/file-preview-2e32eeb4e07ef1e3ea1d2bdca01064da.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-7.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-7.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-7-28878337cafb842760fb3b9fae20b8d5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-8.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-8.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-8-2277c5980263c72654cf6f869f7defa8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-1.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-1.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-1-8ebb38107b9efc2ec8d59973b1fcfd8d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-2.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-2.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-2-b4dc5606d3306ffb8f3da2ea8315dad5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-3.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-3.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-3-becc5f3e0d0c4045e47f14234c5f61e1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-4.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-4.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-4-8032d38ab7a47d3145ce4f3d07383cc4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-1.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-1.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-1-10f902ed6f3d00d3e32ea1709e9efe30.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-2-4ac09a936be48fed1dc0065d344b8a22.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-3.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-3.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-3-c02981be7be80b0bde5d4fdb3445aaa7.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-1-288fd31634eceac740f5b15a41e4c51e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-14.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-14.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-14-e0023d7f5bb8c52f5f7b127c14181547.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-15.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-15.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-15-229153c205256cea21ce4ee7b0957184.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-2.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-2.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-2-f70f0b025fe23e6f6d33bbf85f154c83.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-3.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-3.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-3-36ae681041ecad857f106fc1db4ad72b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-8.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-8.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-8-90d2e47bf1c35fb9893f6466dd03bce1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-2-f61ecd800eb1a8b022f5bef87c687119.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-3.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-3.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-3-1f2aa575cd7c57cd65536bb0047054b1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/logo2.svg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/logo2.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo2-4321aa724612f5c36db258e45cd2234d.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-3.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-3.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-3-4820d7499bffdbab29c142d81d2dcc08.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-4.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-4.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-4-24d1c0a3088ca3d99bad05193b188475.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/mindset.svg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/mindset.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/mindset-fd1f9ed63187ab156c4aa2839c892f8e.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/p6.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p6.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p6-43f1ed0ef83ab9a65e8a7bd067273cef.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p7.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p7.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p7-c6307ff10253921b4389d53d89905220.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p9.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p9.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p9-e8a19bb6eff565d2f470b0b686a3f256.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-1.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-1.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-1-257264577e3ac7a7b25153ebfca17337.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-12.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-12.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-12-a7808c08c8cc0f64bc17e498a0434f91.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-14.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-14.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-14-f5211f56123bc5c5cf8a08c1cc9ba73f.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-17.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-17.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-17-74e6f302b478c2f4dd2eec28ce5b683e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-18.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-18.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-18-33caa941558688a7272acbd11ca60e14.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-19.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-19.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-19-1de6117cbebe6c6e4dc692d3bf17ec32.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-2.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-2.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-2-706e5fed5903a761ae977b6bda77609c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-20.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-20.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-20-68853e6bb47e58a9d1119509ace445d1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-21.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-21.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-21-272bfe80c3a1d475eabcda0bcbfebbcf.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-23.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-23.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-23-d938f6d10c69bbd6da25df74a5dec17c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-24.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-24.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-24-414615b31fb264ca3fc51a20b8e5682a.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-25.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-25.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-25-d0da243804afbe20770754be0361d387.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-26.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-26.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-26-3dd07f6f919c2ec138580dd6dc439b7e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-28.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-28.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-28-793c7ef7226ad2d7ebd057fbfe924579.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-29.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-29.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-29-c225c542244808337734e6a99b8561ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-3.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-3.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-3-ab2d579c360f31c986d98f5bdcffbcdb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-30.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-30.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-30-76391bd594bf370fd6349b438e2355cd.png";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-31.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-31.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-31-97bac4c12c959639ccda0ba9c6335a4b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-33.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-33.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-33-78f25ba375c31f14fd6dfc3fd0ef55c4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-34.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-34.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-34-9de2bdb81a413eaef30270f6d33e8c54.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-6.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-6.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-6-c53ec44e2743a6cb8b5865ebd91e3a70.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-8.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-8.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-8-82d3e90e675362b74a84f1771c017a3c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-9.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-9.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-9-47e0e1da65fe2d8b2e18a0637e3dc5cb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-6.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-6.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-6-2a207158889cde36be932cf0f96559fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-7.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-7.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-7-7a0b6bfcada30e73a6f120c401292314.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-8.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-8.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-8-787e6f2ac4211e9a4aae6946dd82f345.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-1.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-1.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-1-fb5e919a99b10f3d6ec50fc0c89365ab.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-2.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-2.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-2-c8f15060fb0ca38fa24e916693cdf8fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-3.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-3.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-3-2293f2deb0b569bf52f834be08261863.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/sweet-bg.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/sweet-bg.jpg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/sweet-bg-89377d8efef5027f9900385176c99a7e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/taskboard.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/taskboard.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/taskboard-fb3689d13f1caf87151a3387ec937aaa.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/thumbs-up.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/thumbs-up.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/thumbs-up-9ace5b7ae799ba8d143de7cd1cfee527.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-2.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-2.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-2-a9ee53554096ae2dcff3d894f5b92438.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-3.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-3.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-3-53911a7b915144bfc3a38e7c96d1dfc2.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-4.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-4.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-4-b2ccd09abc679c5c4f17ec98d67fb6b4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-5.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-5.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-5-23ad563aaa057ba4a71f1a9b004f120d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-avtar.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/user-avtar.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/user-avtar-32e9d54af3e24aea78b217bf57d8aba1.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/contacts.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/contacts.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n/*----------Theme checkbox---------*/\n.app-contacts {\n  /*\n      Filtered List Search\n      */\n}\n\n.app-contacts .new-control {\n  padding-left: 0;\n  margin-right: 0;\n}\n\n.app-contacts .new-control-input {\n  position: unset;\n}\n\n.app-contacts .new-control.new-checkbox span.new-control-indicator:after {\n  top: 51%;\n}\n\n.app-contacts .filtered-list-search form > div {\n  position: relative;\n  width: 80%;\n}\n\n.app-contacts .filtered-list-search form > div svg {\n  position: absolute;\n  right: 11px;\n  color: #e3e4eb;\n  height: 36px;\n  width: 19px;\n  top: 4px;\n}\n\n.app-contacts .filtered-list-search form input {\n  color: #d3d3d3;\n  border: none;\n  width: 100% !important;\n  background-color: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .filtered-list-search form input:focus {\n  border-color: #d3d3d3;\n  color: #3b3f5c;\n  box-shadow: 0 0 5px 2px rgba(194, 213, 255, 0.62);\n}\n\n.app-contacts .filtered-list-search form input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #888ea8;\n}\n\n.app-contacts .filtered-list-search form input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #888ea8;\n}\n\n.app-contacts .filtered-list-search form input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #888ea8;\n}\n\n.app-contacts .filtered-list-search form input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #888ea8;\n}\n\n.app-contacts .searchable-container .switch {\n  text-align: right;\n}\n\n.app-contacts .searchable-container .switch .view-grid {\n  padding: 10px;\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 43px;\n  height: 41px;\n  fill: rgba(0, 23, 55, 0.08);\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container .switch .view-list {\n  padding: 10px;\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #515365;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n  width: 43px;\n  height: 41px;\n  fill: rgba(0, 23, 55, 0.08);\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container #btn-add-contact {\n  padding: 9px;\n  background: #ffffff;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-right: 35px;\n  width: 43px;\n  height: 41px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container #btn-add-contact:hover {\n  color: #515365;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.app-contacts .searchable-container .modal-content {\n  border: none;\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone .validation-text,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location .validation-text {\n  display: none;\n  color: #e7515a;\n  font-weight: 600;\n  text-align: left;\n  margin-top: 6px;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone svg,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location svg {\n  align-self: center;\n  font-size: 19px;\n  margin-right: 14px;\n  color: #2196f3;\n  font-weight: 600;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name #c-name::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email #c-email::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation #c-occupation::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone #c-phone::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location::-webkit-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name #c-name::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email #c-email::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation #c-occupation::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone #c-phone::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location::-ms-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-name #c-name::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-email #c-email::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation #c-occupation::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone #c-phone::-moz-input-placeholder,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location::-moz-input-placeholder {\n  color: #e3e4eb;\n  font-weight: 600;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-occupation,\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-phone {\n  padding-top: 20px;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location {\n  padding-top: 20px;\n}\n\n.app-contacts .searchable-container .add-contact-box .add-contact-content .contact-location #c-location {\n  resize: none;\n}\n\n.app-contacts .searchable-container .switch .view-grid:hover,\n.app-contacts .searchable-container .switch .view-list:hover,\n.app-contacts .searchable-container .switch .active-view {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items.items-header-section h4 {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-left: 39px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items.items-header-section .n-chk {\n  display: inline-block;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .item-content {\n  flex-direction: row;\n  align-items: center;\n  padding: 0.75rem 0.625rem;\n  position: relative;\n  display: inline-flex;\n  min-width: 0;\n  word-wrap: break-word;\n  justify-content: space-between;\n  background: #fff;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  padding: 13px 18px;\n  width: 100%;\n  min-width: 767px;\n  transition: all 0.35s ease;\n  /* box-shadow: 0px 2px 4px rgba(126,142,177,0.12); */\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items:not(.items-header-section) .item-content:hover {\n  transform: translateY(0) scale(1.01);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-profile {\n  display: flex;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-profile img {\n  width: 43px;\n  height: 43px;\n  border-radius: 5px;\n  margin-right: 11px;\n  margin-left: 18px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-meta-info .user-name {\n  margin-bottom: 0;\n  color: #3b3f5c;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-meta-info .user-work {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 500;\n  font-size: 13px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-email p {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 600;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-email .info-title {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-location p {\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-location .info-title {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-phone p {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .user-phone .info-title {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn {\n  font-weight: 600;\n  color: #e3e4eb;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete-multiple {\n  margin-right: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete-multiple:hover {\n  color: #4361ee;\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .edit,\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete {\n  margin-right: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .edit:hover,\n.app-contacts .searchable-container .searchable-items.list .items .action-btn .delete:hover {\n  color: #4361ee;\n}\n\n.app-contacts .searchable-items.grid {\n  display: flex;\n  flex-wrap: wrap;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items {\n  margin-bottom: 30px;\n  border-radius: 6px;\n  width: 100%;\n  color: #0e1726;\n  transition: all 0.35s ease;\n  width: 33%;\n  flex: 0 0 25%;\n  max-width: 25%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .item-content {\n  background-color: #fff;\n  padding: 13px 18px;\n  border-radius: 6px;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items.items-header-section {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-profile {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-profile .n-chk {\n  display: none;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-profile img {\n  border-radius: 12px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-meta-info {\n  margin-top: 10px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-meta-info .user-name {\n  font-size: 21px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #2196f3;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-meta-info .user-work {\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-email {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-email .info-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-email p {\n  color: #888ea8;\n  font-size: 13px;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-location {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-location .info-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 11px;\n  margin-right: 10px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-location p {\n  color: #888ea8;\n  font-size: 13px;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-phone {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-phone .info-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .user-phone p {\n  color: #888ea8;\n  font-size: 13px;\n  margin-bottom: 11px;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn {\n  font-weight: 600;\n  color: #e3e4eb;\n  text-align: center;\n  margin: 20px 0;\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .edit,\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .delete {\n  margin-right: 5px;\n  cursor: pointer;\n  color: #515365;\n  width: 20px;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .edit:hover,\n.app-contacts .searchable-container .searchable-items.grid .items .action-btn .delete:hover {\n  color: #4361ee;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .app-contacts {\n    /* IE10+ CSS styles go here */\n  }\n  .app-contacts .new-control.new-checkbox .new-control-indicator {\n    top: -13px;\n    left: -8px;\n  }\n}\n@media (max-width: 1199px) {\n  .app-contacts .searchable-container .searchable-items.list {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .app-contacts .searchable-container .searchable-items.grid .items {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n@media (max-width: 767px) {\n  .app-contacts .searchable-container .searchable-items.list {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .app-contacts .searchable-container .searchable-items.list .items {\n    min-width: 767px;\n  }\n  .app-contacts .searchable-container .searchable-items.grid .items {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (max-width: 575px) {\n  .app-contacts .searchable-container .searchable-items.grid .items {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .app-contacts .filtered-list-search form > div {\n    width: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.searchable-container .switch[data-v-31778694] {\n        width: auto;\n        height: auto;\n}\n.searchable-container .searchable-items.grid .items .user-profile .custom-checkbox[data-v-31778694] {\n        display: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/apps/contacts.scss":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/contacts.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_contacts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./contacts.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/contacts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_contacts_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_contacts_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contacts_vue_vue_type_template_id_31778694_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.vue?vue&type=template&id=31778694&scoped=true */ "./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true");
/* harmony import */ var _contacts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/apps/contacts.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css */ "./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_contacts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_contacts_vue_vue_type_template_id_31778694_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-31778694"],['__file',"resources/js/src/views/apps/contacts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./contacts.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_template_id_31778694_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_template_id_31778694_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./contacts.vue?vue&type=template&id=31778694&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=template&id=31778694&scoped=true");


/***/ }),

/***/ "./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_contacts_vue_vue_type_style_index_0_id_31778694_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/contacts.vue?vue&type=style&index=0&id=31778694&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/src/assets/images sync recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/ sync ^\.\/.*$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpeg": "./resources/js/src/assets/images/1.jpeg",
	"./2.jpg": "./resources/js/src/assets/images/2.jpg",
	"./3.jpeg": "./resources/js/src/assets/images/3.jpeg",
	"./ab-1.jpeg": "./resources/js/src/assets/images/ab-1.jpeg",
	"./arrow-down.png": "./resources/js/src/assets/images/arrow-down.png",
	"./bg.png": "./resources/js/src/assets/images/bg.png",
	"./boy-1.png": "./resources/js/src/assets/images/boy-1.png",
	"./boy-2.png": "./resources/js/src/assets/images/boy-2.png",
	"./boy.png": "./resources/js/src/assets/images/boy.png",
	"./contact-us-map-pin.svg": "./resources/js/src/assets/images/contact-us-map-pin.svg",
	"./cork-logo.png": "./resources/js/src/assets/images/cork-logo.png",
	"./delete-user-11.jpeg": "./resources/js/src/assets/images/delete-user-11.jpeg",
	"./delete-user-12.jpeg": "./resources/js/src/assets/images/delete-user-12.jpeg",
	"./delete-user-15.jpeg": "./resources/js/src/assets/images/delete-user-15.jpeg",
	"./delete-user-16.jpeg": "./resources/js/src/assets/images/delete-user-16.jpeg",
	"./delete-user-17.jpeg": "./resources/js/src/assets/images/delete-user-17.jpeg",
	"./delete-user-4.jpeg": "./resources/js/src/assets/images/delete-user-4.jpeg",
	"./drag-1.jpeg": "./resources/js/src/assets/images/drag-1.jpeg",
	"./drag-2.jpeg": "./resources/js/src/assets/images/drag-2.jpeg",
	"./drag-4.jpg": "./resources/js/src/assets/images/drag-4.jpg",
	"./dragp-1.jpeg": "./resources/js/src/assets/images/dragp-1.jpeg",
	"./dragp-4.jpeg": "./resources/js/src/assets/images/dragp-4.jpeg",
	"./dragp-6.jpeg": "./resources/js/src/assets/images/dragp-6.jpeg",
	"./dragp-7.jpeg": "./resources/js/src/assets/images/dragp-7.jpeg",
	"./faq.svg": "./resources/js/src/assets/images/faq.svg",
	"./features_overview.svg": "./resources/js/src/assets/images/features_overview.svg",
	"./file-preview.png": "./resources/js/src/assets/images/file-preview.png",
	"./flags/brl.png": "./resources/js/src/assets/images/flags/brl.png",
	"./flags/da.png": "./resources/js/src/assets/images/flags/da.png",
	"./flags/de.png": "./resources/js/src/assets/images/flags/de.png",
	"./flags/el.png": "./resources/js/src/assets/images/flags/el.png",
	"./flags/en.png": "./resources/js/src/assets/images/flags/en.png",
	"./flags/es.png": "./resources/js/src/assets/images/flags/es.png",
	"./flags/fr.png": "./resources/js/src/assets/images/flags/fr.png",
	"./flags/gbp.png": "./resources/js/src/assets/images/flags/gbp.png",
	"./flags/hu.png": "./resources/js/src/assets/images/flags/hu.png",
	"./flags/idr.png": "./resources/js/src/assets/images/flags/idr.png",
	"./flags/inr.png": "./resources/js/src/assets/images/flags/inr.png",
	"./flags/it.png": "./resources/js/src/assets/images/flags/it.png",
	"./flags/ja.png": "./resources/js/src/assets/images/flags/ja.png",
	"./flags/jp.png": "./resources/js/src/assets/images/flags/jp.png",
	"./flags/pl.png": "./resources/js/src/assets/images/flags/pl.png",
	"./flags/pt.png": "./resources/js/src/assets/images/flags/pt.png",
	"./flags/ru.png": "./resources/js/src/assets/images/flags/ru.png",
	"./flags/sv.png": "./resources/js/src/assets/images/flags/sv.png",
	"./flags/tr.png": "./resources/js/src/assets/images/flags/tr.png",
	"./flags/zh.png": "./resources/js/src/assets/images/flags/zh.png",
	"./g-7.png": "./resources/js/src/assets/images/g-7.png",
	"./g-8.png": "./resources/js/src/assets/images/g-8.png",
	"./girl-1.png": "./resources/js/src/assets/images/girl-1.png",
	"./girl-2.png": "./resources/js/src/assets/images/girl-2.png",
	"./girl-3.png": "./resources/js/src/assets/images/girl-3.png",
	"./girl-4.png": "./resources/js/src/assets/images/girl-4.png",
	"./grid-blog-style-1.jpg": "./resources/js/src/assets/images/grid-blog-style-1.jpg",
	"./grid-blog-style-2.jpeg": "./resources/js/src/assets/images/grid-blog-style-2.jpeg",
	"./grid-blog-style-3.jpg": "./resources/js/src/assets/images/grid-blog-style-3.jpg",
	"./lightbox-1.jpg": "./resources/js/src/assets/images/lightbox-1.jpg",
	"./lightbox-14.jpeg": "./resources/js/src/assets/images/lightbox-14.jpeg",
	"./lightbox-15.jpeg": "./resources/js/src/assets/images/lightbox-15.jpeg",
	"./lightbox-2.jpeg": "./resources/js/src/assets/images/lightbox-2.jpeg",
	"./lightbox-3.jpeg": "./resources/js/src/assets/images/lightbox-3.jpeg",
	"./lightbox-8.jpeg": "./resources/js/src/assets/images/lightbox-8.jpeg",
	"./list-blog-style-2.jpeg": "./resources/js/src/assets/images/list-blog-style-2.jpeg",
	"./list-blog-style-3.jpeg": "./resources/js/src/assets/images/list-blog-style-3.jpeg",
	"./logo.svg": "./resources/js/src/assets/images/logo.svg",
	"./logo2.svg": "./resources/js/src/assets/images/logo2.svg",
	"./masonry-blog-style-3.jpeg": "./resources/js/src/assets/images/masonry-blog-style-3.jpeg",
	"./masonry-blog-style-4.jpeg": "./resources/js/src/assets/images/masonry-blog-style-4.jpeg",
	"./mindset.svg": "./resources/js/src/assets/images/mindset.svg",
	"./p6.jpeg": "./resources/js/src/assets/images/p6.jpeg",
	"./p7.jpeg": "./resources/js/src/assets/images/p7.jpeg",
	"./p9.jpeg": "./resources/js/src/assets/images/p9.jpeg",
	"./product-camera.jpg": "./resources/js/src/assets/images/product-camera.jpg",
	"./product-headphones.jpg": "./resources/js/src/assets/images/product-headphones.jpg",
	"./product-laptop.jpg": "./resources/js/src/assets/images/product-laptop.jpg",
	"./product-shoes.jpg": "./resources/js/src/assets/images/product-shoes.jpg",
	"./product-watch.jpg": "./resources/js/src/assets/images/product-watch.jpg",
	"./profile-1.jpeg": "./resources/js/src/assets/images/profile-1.jpeg",
	"./profile-10.jpeg": "./resources/js/src/assets/images/profile-10.jpeg",
	"./profile-11.jpeg": "./resources/js/src/assets/images/profile-11.jpeg",
	"./profile-12.jpeg": "./resources/js/src/assets/images/profile-12.jpeg",
	"./profile-13.jpeg": "./resources/js/src/assets/images/profile-13.jpeg",
	"./profile-14.jpeg": "./resources/js/src/assets/images/profile-14.jpeg",
	"./profile-15.jpeg": "./resources/js/src/assets/images/profile-15.jpeg",
	"./profile-16.jpeg": "./resources/js/src/assets/images/profile-16.jpeg",
	"./profile-17.jpeg": "./resources/js/src/assets/images/profile-17.jpeg",
	"./profile-18.jpeg": "./resources/js/src/assets/images/profile-18.jpeg",
	"./profile-19.jpeg": "./resources/js/src/assets/images/profile-19.jpeg",
	"./profile-2.jpeg": "./resources/js/src/assets/images/profile-2.jpeg",
	"./profile-20.jpeg": "./resources/js/src/assets/images/profile-20.jpeg",
	"./profile-21.jpeg": "./resources/js/src/assets/images/profile-21.jpeg",
	"./profile-23.jpeg": "./resources/js/src/assets/images/profile-23.jpeg",
	"./profile-24.jpeg": "./resources/js/src/assets/images/profile-24.jpeg",
	"./profile-25.jpeg": "./resources/js/src/assets/images/profile-25.jpeg",
	"./profile-26.jpeg": "./resources/js/src/assets/images/profile-26.jpeg",
	"./profile-28.jpeg": "./resources/js/src/assets/images/profile-28.jpeg",
	"./profile-29.jpeg": "./resources/js/src/assets/images/profile-29.jpeg",
	"./profile-3.jpeg": "./resources/js/src/assets/images/profile-3.jpeg",
	"./profile-30.png": "./resources/js/src/assets/images/profile-30.png",
	"./profile-31.jpeg": "./resources/js/src/assets/images/profile-31.jpeg",
	"./profile-32.jpeg": "./resources/js/src/assets/images/profile-32.jpeg",
	"./profile-33.jpeg": "./resources/js/src/assets/images/profile-33.jpeg",
	"./profile-34.jpeg": "./resources/js/src/assets/images/profile-34.jpeg",
	"./profile-4.jpeg": "./resources/js/src/assets/images/profile-4.jpeg",
	"./profile-5.jpeg": "./resources/js/src/assets/images/profile-5.jpeg",
	"./profile-6.jpeg": "./resources/js/src/assets/images/profile-6.jpeg",
	"./profile-7.jpeg": "./resources/js/src/assets/images/profile-7.jpeg",
	"./profile-8.jpeg": "./resources/js/src/assets/images/profile-8.jpeg",
	"./profile-9.jpeg": "./resources/js/src/assets/images/profile-9.jpeg",
	"./scroll-6.jpeg": "./resources/js/src/assets/images/scroll-6.jpeg",
	"./scroll-7.jpeg": "./resources/js/src/assets/images/scroll-7.jpeg",
	"./scroll-8.jpeg": "./resources/js/src/assets/images/scroll-8.jpeg",
	"./slider-1.jpeg": "./resources/js/src/assets/images/slider-1.jpeg",
	"./slider-2.jpeg": "./resources/js/src/assets/images/slider-2.jpeg",
	"./slider-3.jpeg": "./resources/js/src/assets/images/slider-3.jpeg",
	"./sweet-bg.jpg": "./resources/js/src/assets/images/sweet-bg.jpg",
	"./taskboard.jpg": "./resources/js/src/assets/images/taskboard.jpg",
	"./thumbs-up.jpg": "./resources/js/src/assets/images/thumbs-up.jpg",
	"./tl-2.jpeg": "./resources/js/src/assets/images/tl-2.jpeg",
	"./tl-3.jpeg": "./resources/js/src/assets/images/tl-3.jpeg",
	"./tl-4.jpeg": "./resources/js/src/assets/images/tl-4.jpeg",
	"./tl-5.jpeg": "./resources/js/src/assets/images/tl-5.jpeg",
	"./user-avtar.svg": "./resources/js/src/assets/images/user-avtar.svg",
	"./user-profile.jpeg": "./resources/js/src/assets/images/user-profile.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/assets/images sync recursive ^\\.\\/.*$";

/***/ })

}]);