(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-chat"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_sass_apps_chat_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/apps/chat.scss */ "./resources/js/src/assets/sass/apps/chat.scss");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'chat',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_2__.useMeta)({
      title: 'Chat'
    });
    var is_show_user_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var contact_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var filterd_contact_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var selected_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var login_user_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0); //system login user id

    var search_user = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var text_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      bind_contact_list();
    });

    var bind_contact_list = function bind_contact_list() {
      contact_list.value = [{
        user_id: 1,
        name: 'Nia Hillyer',
        path: 'profile-4.jpeg',
        time: '2:09 PM',
        preview: 'How do you do?',
        messages: [{
          from_user_id: login_user_id.value,
          to_usr_id: 1,
          text: 'Hi, I am back from vacation'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 1,
          text: 'How are you?'
        }, {
          from_user_id: 1,
          to_usr_id: login_user_id.value,
          text: 'Welcom Back'
        }, {
          from_user_id: 1,
          to_usr_id: login_user_id.value,
          text: 'I am all well'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 1,
          text: 'Coffee?'
        }]
      }, {
        user_id: 2,
        name: 'Sean Freeman',
        path: 'profile-3.jpeg',
        time: '2:09 PM',
        preview: 'I was wondering...',
        messages: [{
          from_user_id: login_user_id.value,
          to_usr_id: 2,
          text: 'Hello'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 2,
          text: "It's me"
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 2,
          text: 'I have a question regarding project.'
        }]
      }, {
        user_id: 3,
        name: 'Alma Clarke',
        path: 'profile-11.jpeg',
        time: '1:44 PM',
        preview: 'I’ve forgotten how it felt before',
        messages: [{
          from_user_id: login_user_id.value,
          to_usr_id: 3,
          text: 'Hey Buddy.'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 3,
          text: "What's up"
        }, {
          from_user_id: 3,
          to_usr_id: login_user_id.value,
          text: 'I am sick'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 3,
          text: 'Not comming to office today.'
        }]
      }, {
        user_id: 4,
        name: 'Alan Green',
        path: 'profile-23.jpeg',
        time: '2:09 PM',
        preview: 'But we’re probably gonna need a new carpet.',
        messages: [{
          from_user_id: login_user_id.value,
          to_usr_id: 4,
          text: 'Hi, collect your check'
        }, {
          from_user_id: 4,
          to_usr_id: login_user_id.value,
          text: 'Ok, I will be there in 10 mins'
        }]
      }, {
        user_id: 5,
        name: 'Shaun Park',
        path: 'profile-7.jpeg',
        time: '2:09 PM',
        preview: 'It’s not that bad...',
        messages: [{
          from_user_id: login_user_id.value,
          to_usr_id: 3,
          text: 'Hi, I am back from vacation'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 3,
          text: 'How are you?'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 5,
          text: 'Welcom Back'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 5,
          text: 'I am all well'
        }, {
          from_user_id: 5,
          to_usr_id: login_user_id.value,
          text: 'Coffee?'
        }]
      }, {
        user_id: 6,
        name: 'Roxanne',
        path: 'profile-15.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [{
          from_user_id: login_user_id.value,
          to_usr_id: 6,
          text: 'Hi'
        }, {
          from_user_id: login_user_id.value,
          to_usr_id: 6,
          text: 'Uploaded files to server.'
        }]
      }, {
        user_id: 7,
        name: 'Ernest Reeves',
        path: 'profile-32.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: []
      }, {
        user_id: 8,
        name: 'Laurie Fox',
        path: 'profile-33.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: []
      }, {
        user_id: 9,
        name: 'Xavier',
        path: 'profile-21.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: []
      }, {
        user_id: 10,
        name: 'Susan Phillips',
        path: 'profile-12.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: []
      }, {
        user_id: 11,
        name: 'Dale Butler',
        path: 'profile-26.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: []
      }, {
        user_id: 12,
        name: 'Grace Roberts',
        path: 'profile-20.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: []
      }];
      search_users();
    };

    var select_user = function select_user(user) {
      selected_user.value = user;
      scroll_to_bottom();
      is_show_user_menu.value = false;
    };

    var search_users = function search_users() {
      filterd_contact_list.value = contact_list.value.filter(function (d) {
        return d.name.toLowerCase().includes(search_user.value);
      });
    };

    var send_message = function send_message() {
      if (text_message.value.trim()) {
        var user = contact_list.value.find(function (d) {
          return d.user_id == selected_user.value.user_id;
        });
        user.messages.push({
          from_user_id: selected_user.value.user_id,
          to_usr_id: login_user_id.value,
          text: text_message.value
        });
        text_message.value = '';
        scroll_to_bottom();
      }
    };

    var scroll_to_bottom = function scroll_to_bottom() {
      setTimeout(function () {
        var element = document.querySelector('.chat-conversation-box');
        element.scrollTop = element.scrollHeight;
        element.behavior = 'smooth';
      });
    };

    var __returned__ = {
      is_show_user_menu: is_show_user_menu,
      contact_list: contact_list,
      filterd_contact_list: filterd_contact_list,
      selected_user: selected_user,
      login_user_id: login_user_id,
      search_user: search_user,
      text_message: text_message,
      bind_contact_list: bind_contact_list,
      select_user: select_user,
      search_users: search_users,
      send_message: send_message,
      scroll_to_bottom: scroll_to_bottom,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
}, "Apps")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Chat")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "chat-section layout-top-spacing"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-xl-12 col-lg-12 col-md-12"
};
var _hoisted_6 = {
  "class": "chat-system"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-menu mail-menu d-lg-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
})], -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "search"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_11 = ["onClick"];
var _hoisted_12 = {
  "class": "user-info"
};
var _hoisted_13 = {
  "class": "f-head"
};
var _hoisted_14 = ["src"];
var _hoisted_15 = {
  "class": "f-body"
};
var _hoisted_16 = {
  "class": "meta-info"
};
var _hoisted_17 = {
  "class": "preview"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-message-square"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click User To Chat ")], -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = {
  key: 0,
  "class": "chat-box-inner h-100"
};
var _hoisted_21 = {
  "class": "chat-meta-user chat-active"
};
var _hoisted_22 = {
  "class": "current-chat-user-name"
};
var _hoisted_23 = ["src"];
var _hoisted_24 = {
  "class": "name"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"chat-action-btn align-self-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-phone phone-call-screen\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path></svg><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-video video-call-screen\"><polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect></svg><div class=\"dropdown d-inline-block\"><a href=\"javascript:;\" id=\"ddlSettings\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlSettings\"><li><a href=\"javascript:;\" class=\"dropdown-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-settings\"><circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path></svg> Settings</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-mail\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline></svg> Mail</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-copy\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg> Copy</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg> Delete</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-share-2\"><circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line></svg> Share</a></li></ul></div></div>", 1);

var _hoisted_26 = {
  id: "chat-conversation-box-scroll",
  "class": "chat-conversation-box-scroll"
};
var _hoisted_27 = {
  "class": "chat active-chat"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "conversation-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Today, 6:48 AM")], -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "chat-footer chat-active"
};
var _hoisted_30 = {
  "class": "chat-input"
};
var _hoisted_31 = {
  "class": "chat-form"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-message-square"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
})], -1
/* HOISTED */
);

var _hoisted_33 = ["onKeyup"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_perfect_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("perfect-scrollbar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "hamburger",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.is_show_user_menu = !$setup.is_show_user_menu;
    })
  }, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["user-list-box", {
      'user-list-box-show': $setup.is_show_user_menu
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.search_user = $event;
    }),
    "class": "form-control",
    onKeyup: _cache[2] || (_cache[2] = function ($event) {
      return $setup.search_users();
    }),
    placeholder: "Search"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search_user, void 0, {
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "people",
    options: {
      wheelSpeed: 0.5,
      swipeEasing: !0,
      minScrollbarLength: 40,
      maxScrollbarLength: 300,
      suppressScrollX: true
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filterd_contact_list, function (person, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["person", {
            active: $setup.selected_user && $setup.selected_user.user_id == person.user_id
          }]),
          key: index,
          onClick: function onClick($event) {
            return $setup.select_user(person);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./".concat(person.path)),
          alt: "avatar"
        }, null, 8
        /* PROPS */
        , _hoisted_14)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["user-name", {
            'text-primary': $setup.selected_user && $setup.selected_user.user_id == person.user_id
          }])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(person.name), 3
        /* TEXT, CLASS */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["user-meta-time", {
            'text-primary': $setup.selected_user && $setup.selected_user.user_id == person.user_id
          }])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(person.time), 3
        /* TEXT, CLASS */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(person.preview), 1
        /* TEXT */
        )])])], 10
        /* CLASS, PROPS */
        , _hoisted_11);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["options"])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["chat-box", {
      active: $setup.selected_user
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["chat-not-selected", {
      'd-none': $setup.selected_user
    }])
  }, _hoisted_19, 2
  /* CLASS */
  ), $setup.selected_user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./".concat($setup.selected_user.path)),
    alt: "dynamic-image"
  }, null, 8
  /* PROPS */
  , _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.selected_user.name), 1
  /* TEXT */
  )])]), _hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "chat-conversation-box",
    options: {
      wheelSpeed: 0.5,
      swipeEasing: !0,
      minScrollbarLength: 40,
      maxScrollbarLength: 300,
      suppressScrollX: true
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, $setup.selected_user.messages && $setup.selected_user.messages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.selected_user.messages, function (message, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bubble", [$setup.selected_user.user_id == message.from_user_id ? 'me' : 'you']]),
          key: 'msg' + index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message.text), 3
        /* TEXT, CLASS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.text_message = $event;
    }),
    "class": "mail-write-box form-control",
    placeholder: "Message",
    onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.send_message, ["exact"]), ["enter"])
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.text_message]])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )])])])])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/chat.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/chat.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/bg.png */ "./resources/js/src/assets/images/bg.png");
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_bg_png__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()((_images_bg_png__WEBPACK_IMPORTED_MODULE_2___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.wrapper {\n  position: relative;\n  left: 50%;\n  width: 1000px;\n  height: 600px;\n  transform: translate(-50%, 0);\n}\n\n.chat-system {\n  display: flex;\n  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.08), 0 1px 20px 0 rgba(0, 0, 0, 0.07), 0px 1px 11px 0px rgba(0, 0, 0, 0.07);\n  height: calc(100vh - 179px);\n  border-radius: 6px;\n}\n\n.chat-system .hamburger {\n  display: none;\n}\n\n.chat-system .user-list-box {\n  width: 30%;\n  max-width: 400px;\n  border-right: 1px solid #ebedf2;\n  border-bottom-left-radius: 6px;\n  background: #fff;\n  border-top-left-radius: 6px;\n}\n\n.chat-system .user-list-box .search {\n  position: relative;\n  padding: 13px 0 13px 0;\n  display: flex;\n}\n\n.chat-system .user-list-box .search svg {\n  content: \"\\f169\";\n  position: absolute;\n  left: 11px;\n  color: #bfc9d4;\n  top: 25px;\n  left: 30px;\n}\n\n.chat-system .user-list-box input {\n  border-radius: 4px;\n  padding-left: 38px;\n  font-size: 16px;\n  width: 100%;\n  color: #3b3f5c;\n  border: 0;\n  outline: none;\n  padding: 12px 16px 12px 43px;\n  background: #f1f2f3;\n  margin: 0 20px 0 20px;\n  border: 1px dashed #888ea8;\n}\n\n.chat-system .user-list-box .people {\n  padding: 0;\n  overflow: auto;\n  position: relative;\n  margin: auto;\n  width: 100%;\n  overflow: auto;\n  height: calc(100vh - 252px);\n}\n\n.chat-system .user-list-box .people .person {\n  position: relative;\n  width: 100%;\n  padding: 20px 20px;\n  cursor: pointer;\n  border-bottom: 1px solid #e0e6ed;\n}\n\n.chat-system .user-list-box .people .person.border-none {\n  border-bottom: none;\n}\n\n.person {\n  display: inline-block;\n}\n\n.chat-system .user-list-box .people .person .user-info {\n  display: flex;\n}\n\n.chat-system .user-list-box .people .person .user-info .f-head img {\n  width: 45px;\n  height: 45px;\n  margin-right: 12px;\n  border-radius: 50%;\n  border: 2px solid #d3d3d3;\n  box-shadow: 0px 0px 14px 3px rgba(126, 142, 177, 0.24);\n}\n\n.chat-system .user-list-box .people .person .user-info .f-body {\n  width: 100%;\n}\n\n.chat-system .user-list-box .people .person .user-info .f-body .meta-info .user-name {\n  font-size: 14px;\n  color: #3b3f5c;\n  font-weight: 700;\n}\n\n.chat-system .user-list-box .people .person .user-info .f-body .meta-info .user-meta-time {\n  font-size: 12px;\n  position: absolute;\n  top: 16px;\n  right: 11px;\n  color: #888ea8;\n  font-weight: 700;\n  float: right;\n}\n\n.chat-system .user-list-box .people .person .user-info .f-body .preview {\n  font-size: 13px;\n  display: inline-block;\n  overflow: hidden !important;\n  width: 70%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #888ea8;\n  font-weight: 600;\n}\n\n.chat-system .user-list-box .people .person:hover .user-info .f-head img {\n  box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);\n}\n\n.chat-system .user-list-box .people .person:hover .user-info .f-body .meta-info .user-name,\n.chat-system .user-list-box .people .person:hover .user-info .f-body .meta-info .user-meta-time {\n  color: #4361ee;\n}\n\n.chat-system .user-list-box .people .person.active:after, .chat-system .user-list-box .people .person:hover:after {\n  display: none;\n}\n\n.chat-system .chat-box {\n  position: relative;\n  width: 100%;\n  height: 616px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n  height: calc(100vh - 179px);\n}\n\n.chat-system .chat-box .chat-not-selected {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n}\n\n.chat-system .chat-box .chat-not-selected p {\n  align-self: center;\n  font-size: 18px;\n  color: #3b3f5c;\n  margin-bottom: 0;\n  font-weight: 600;\n  background: #bfc9d4;\n  padding: 7px 20px;\n  border-radius: 6px;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n}\n\n.chat-system .chat-box .chat-not-selected p svg {\n  vertical-align: middle;\n  color: #888ea8;\n}\n\n.chat-system .chat-box .overlay-phone-call {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 179px);\n  z-index: -1;\n  opacity: 0;\n  transition: all 0.4s ease-in-out;\n  background-color: rgba(3, 3, 5, 0.66);\n  background-attachment: fixed;\n  background-size: contain;\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n\n.chat-system .chat-box .overlay-phone-call.phone-call-show {\n  opacity: 1;\n  z-index: 4;\n}\n\n.chat-system .chat-box .overlay-phone-call > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-info {\n  padding: 20px 16px;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-info svg {\n  font-size: 28px;\n  margin-right: 12px;\n  color: #fff;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-info .user-name {\n  font-size: 20px;\n  color: #fff;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-info .call-status {\n  vertical-align: sub;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-img {\n  text-align: center;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-img img {\n  border-radius: 50%;\n  border: 4px solid #ebedf2;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-img .timer {\n  visibility: hidden;\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 7px;\n  color: #fff;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-user-img .timer .minutes,\n.chat-system .chat-box .overlay-phone-call > div .calling-user-img .timer .seconds {\n  color: #ffffff;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options {\n  text-align: center;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options svg {\n  font-size: 25px;\n  border-radius: 50%;\n  padding: 11px;\n  background: rgba(21, 21, 22, 0.28);\n  margin-bottom: 23px;\n  color: #fff;\n  cursor: pointer;\n  width: 48px;\n  height: 46px;\n  transition: all 0.35s ease;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.67);\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options svg:hover {\n  transform: translateY(-5px) scale(1.02);\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options svg:not(:last-child) {\n  margin-right: 7px;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options svg.switch-to-microphone {\n  position: relative;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options svg.switch-to-microphone.micro-off:after {\n  content: \"\";\n  height: 35px;\n  width: 2px;\n  background: #fff;\n  position: absolute;\n  left: 20px;\n  top: 6px;\n}\n\n.chat-system .chat-box .overlay-phone-call > div .calling-options svg.cancel-call {\n  background-color: #e7515a;\n}\n\n.chat-system .chat-box .chat-box-inner {\n  height: auto;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user {\n  display: none;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  background-color: #fafafa;\n  border-top-right-radius: 6px;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user .current-chat-user-name {\n  padding: 14px 15px 15px 15px;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user .current-chat-user-name span {\n  font-size: 15px;\n  color: #888ea8;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user .current-chat-user-name span img {\n  width: 45px;\n  height: 45px;\n  border-radius: 7px;\n  border-radius: 10px;\n  margin-top: 0px;\n  transition: all 0.35s ease;\n  margin-right: 10px;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user .current-chat-user-name span .name {\n  color: #0e1726;\n  font-weight: 600;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn svg {\n  cursor: pointer;\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  fill: rgba(0, 23, 55, 0.08);\n  stroke-width: 1.6;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn svg:hover {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn svg:not(:last-child) {\n  margin-right: 9px;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu {\n  box-shadow: rgba(113, 106, 202, 0.2) 0px 0px 15px 1px;\n  top: 15px !important;\n  padding: 10px 0;\n  border-width: initial;\n  border-style: none;\n  border-color: initial;\n  -o-border-image: initial;\n     border-image: initial;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu.show {\n  top: 35px !important;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu a {\n  font-size: 12px;\n  font-weight: 700;\n  color: #888ea8;\n  padding: 8px 16px;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu a svg {\n  color: #888ea8;\n  margin-right: 6px;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  fill: rgba(0, 23, 55, 0.08);\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu a.dropdown-item.active, .chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu a.dropdown-item:active {\n  background-color: transparent;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-meta-user.chat-active .chat-action-btn .dropdown-menu a:hover svg {\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100% - 80px);\n  overflow: auto;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat {\n  position: relative;\n  display: none;\n  overflow: hidden;\n  padding: 30px 40px 0;\n  justify-content: flex-end;\n  flex-direction: column;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat {\n  display: block;\n  display: flex;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble {\n  transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(1) {\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(2) {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(3) {\n  -webkit-animation-duration: 0.45s;\n  animation-duration: 0.45s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(4) {\n  -webkit-animation-duration: 0.6s;\n  animation-duration: 0.6s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(5) {\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(6) {\n  -webkit-animation-duration: 0.9s;\n  animation-duration: 0.9s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(7) {\n  -webkit-animation-duration: 1.05s;\n  animation-duration: 1.05s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(8) {\n  -webkit-animation-duration: 1.2s;\n  animation-duration: 1.2s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(9) {\n  -webkit-animation-duration: 1.35s;\n  animation-duration: 1.35s;\n}\n\n.chat-system .chat-box .chat-box-inner .chat-conversation-box .chat.active-chat .bubble:nth-of-type(10) {\n  -webkit-animation-duration: 1.5s;\n  animation-duration: 1.5s;\n}\n\n.chat-system .chat-box .chat-footer {\n  display: none;\n}\n\n.chat-system .chat-box .chat-footer.chat-active {\n  display: block;\n  padding: 6px 10px;\n  background: #fafafa;\n  border-bottom-right-radius: 6px;\n}\n\n.chat-system .chat-box .chat-form {\n  position: relative;\n}\n\n.chat-system .chat-box .chat-input svg {\n  position: absolute;\n  color: #888ea8;\n  left: 11px;\n  top: 12px;\n  fill: rgba(0, 23, 55, 0.08);\n  stroke-width: 1.6;\n}\n\n.chat-system .chat-box .chat-input input {\n  font-size: 16px;\n  width: 100%;\n  color: #3b3f5c;\n  border: 0;\n  outline: none;\n  padding: 12px 16px 12px 43px;\n  border: 1px dashed #888ea8;\n  background: #fafafa;\n}\n\n.chat-system .chat-box .chat-input input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #888ea8;\n}\n\n.chat-system .chat-box .chat-input input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #888ea8;\n}\n\n.chat-system .chat-box .chat-input input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #888ea8;\n}\n\n.chat-system .chat-box .chat-input input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #888ea8;\n}\n\n.chat-system .chat-box .bubble {\n  font-size: 16px;\n  position: relative;\n  display: inline-block;\n  clear: both;\n  margin-bottom: 8px;\n  padding: 9px 18px;\n  vertical-align: top;\n  border-radius: 5px;\n  word-break: break-word;\n  max-width: 370px;\n}\n\n.chat-system .chat-box .bubble:before {\n  position: absolute;\n  top: 18px;\n  display: block;\n  width: 8px;\n  height: 6px;\n  content: \" \";\n  transform: rotate(29deg) skew(-35deg);\n}\n\n.chat-system .chat-box .bubble.you {\n  float: left;\n  color: #4361ee;\n  background-color: #f6f6f6;\n  align-self: flex-start;\n  -webkit-animation-name: slideFromLeft;\n  animation-name: slideFromLeft;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n}\n\n.chat-system .chat-box .bubble.you:before {\n  left: -3px;\n  background-color: #fff;\n}\n\n.chat-system .chat-box .bubble.me {\n  float: right;\n  color: #fff;\n  background-color: #4361ee;\n  align-self: flex-end;\n  -webkit-animation-name: slideFromRight;\n  animation-name: slideFromRight;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n}\n\n.chat-system .chat-box .bubble.me:before {\n  right: -3px;\n  background-color: #4361ee;\n}\n\n.chat-system .chat-box .conversation-start {\n  position: relative;\n  width: 100%;\n  margin-bottom: 27px;\n  text-align: center;\n}\n\n.chat-system .chat-box .conversation-start span {\n  font-size: 12px;\n  color: #3b3f5c;\n  margin-bottom: 0;\n  font-weight: 700;\n  background: #fff;\n  padding: 7px 20px;\n  border-radius: 6px;\n  box-shadow: 0px 2px 4px rgba(126, 142, 177, 0.12);\n}\n\n@keyframes slideFromLeft {\n  0% {\n    margin-left: -200px;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n  }\n  100% {\n    margin-left: 0;\n    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideFromLeft {\n  0% {\n    margin-left: -200px;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n  }\n  100% {\n    margin-left: 0;\n    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n    opacity: 1;\n  }\n}\n@keyframes slideFromRight {\n  0% {\n    margin-right: -200px;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n  }\n  100% {\n    margin-right: 0;\n    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slideFromRight {\n  0% {\n    margin-right: -200px;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n  }\n  100% {\n    margin-right: 0;\n    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n    opacity: 1;\n  }\n}\n.credits {\n  color: white;\n  font-size: 11px;\n  position: absolute;\n  bottom: 10px;\n  right: 15px;\n}\n\n.credits a {\n  color: white;\n  text-decoration: none;\n}\n\n@media (max-width: 1199px) {\n  .chat-system .user-list-box {\n    width: 40%;\n  }\n  .chat-system .chat-box {\n    width: 60%;\n  }\n  .chat-system .chat-box .overlay-video-call .video-caller {\n    height: 68px;\n    width: 68px;\n  }\n}\n@media (max-width: 991px) {\n  .chat-system .chat-box {\n    border-radius: 6px;\n  }\n  .chat-system .chat-box .overlay-video-call .video-caller {\n    height: 67px;\n    width: 83px;\n  }\n}\n@media (max-width: 767px) {\n  .chat-system .hamburger {\n    padding: 7px 10px 7px 10px;\n    font-size: 20px;\n    border-radius: 0;\n    color: #fff;\n    align-self: center;\n    position: fixed;\n    top: 218px;\n    right: 9px;\n    display: block;\n    z-index: 78;\n    background-color: #515365;\n    border-radius: 50%;\n  }\n  .chat-system .user-list-box {\n    position: absolute;\n    z-index: 40;\n    left: -341px;\n    width: 255px;\n  }\n  .chat-system .user-list-box.user-list-box-show {\n    position: absolute;\n    z-index: 34;\n    left: 15px;\n    border-radius: 0;\n  }\n  .chat-system .chat-box {\n    width: 100%;\n  }\n  .chat-system .chat-box .overlay-video-call .video-caller {\n    height: 75px;\n    width: 110px;\n  }\n}\n@media (max-width: 575px) {\n  .chat-system .chat-box .overlay-video-call .video-caller {\n    bottom: 83px;\n  }\n  .chat-system .chat-box .conversation-start span:before, .chat-system .chat-box .conversation-start span:after {\n    background-color: transparent;\n  }\n}\n@-moz-document url-prefix() {\n  .chat-system .chat-box .overlay-phone-call,\n.chat-system .chat-box .overlay-video-call {\n    background-color: rgb(3, 3, 5);\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .chat-system .chat-box .overlay-phone-call {\n    background-image: none;\n  }\n  .chat-system .chat-box .overlay-video-call {\n    background-image: none;\n  }\n  .chat-system .chat-box .overlay-video-call.onConnect {\n    background-attachment: local;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./resources/js/src/assets/sass/apps/chat.scss":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/sass/apps/chat.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_chat_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./chat.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/apps/chat.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_chat_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_chat_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/apps/chat.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/apps/chat.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chat_vue_vue_type_template_id_8c7c7a8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=8c7c7a8a */ "./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a");
/* harmony import */ var _chat_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_chat_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chat_vue_vue_type_template_id_8c7c7a8a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/apps/chat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chat_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chat_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chat.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chat_vue_vue_type_template_id_8c7c7a8a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chat_vue_vue_type_template_id_8c7c7a8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chat.vue?vue&type=template&id=8c7c7a8a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a");


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