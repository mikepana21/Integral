"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-chat"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/apps/chat.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'chat',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
          src: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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
    src: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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

/***/ "./resources/js/src/views/apps/chat.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/apps/chat.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chat_vue_vue_type_template_id_8c7c7a8a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_chat_vue_vue_type_template_id_8c7c7a8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./chat.vue?vue&type=template&id=8c7c7a8a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/chat.vue?vue&type=template&id=8c7c7a8a");


/***/ })

}]);