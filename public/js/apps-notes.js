"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["apps-notes"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/notes.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/notes.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/apps/notes.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'notes',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Notes'
    });
    var notesMailModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var params = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      id: null,
      title: '',
      description: ''
    });
    var is_show_note_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var notes_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var filterd_notes_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selected_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('all');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      initPopup();
      bind_notes();
    });

    var initPopup = function initPopup() {
      notesMailModal = new window.bootstrap.Modal(document.getElementById('notesMailModal'));
    };

    var bind_notes = function bind_notes() {
      notes_list.value = [{
        id: 1,
        title: 'Meeting with Kelly',
        description: 'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.',
        date: '11/01/2020',
        is_fav: false,
        tag: 'personal'
      }, {
        id: 2,
        title: 'Receive Package',
        description: 'Facilisis curabitur facilisis vel elit sed dapibus sodales purus.',
        date: '11/02/2020',
        is_fav: true,
        tag: ''
      }, {
        id: 3,
        title: 'Download Docs',
        description: 'Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.',
        date: '11/04/2020',
        is_fav: false,
        tag: 'work'
      }, {
        id: 4,
        title: 'Meeting at 4:50pm',
        description: 'Excepteur sint occaecat cupidatat non proident, anim id est laborum.',
        date: '11/08/2020',
        is_fav: false,
        tag: ''
      }, {
        id: 5,
        title: 'Backup Files EOD',
        description: 'Maecenas condimentum neque mollis, egestas leo ut, gravida.',
        date: '11/09/2020',
        is_fav: false,
        tag: ''
      }, {
        id: 6,
        title: 'Download Server Logs',
        description: 'Suspendisse efficitur diam quis gravida. Nunc molestie est eros.',
        date: '11/09/2020',
        is_fav: false,
        tag: 'social'
      }, {
        id: 7,
        title: 'Team meet at Starbucks',
        description: 'Etiam a odio eget enim aliquet laoreet lobortis sed ornare nibh.',
        date: '11/10/2020',
        is_fav: false,
        tag: ''
      }, {
        id: 8,
        title: 'Create new users Profile',
        description: 'Duis aute irure in nulla pariatur. Etiam a odio eget enim aliquet.',
        date: '11/11/2020',
        is_fav: false,
        tag: 'important'
      }];
      search_notes();
    };

    var search_notes = function search_notes() {
      if (selected_tab.value != 'fav') {
        if (selected_tab.value != 'all') {
          filterd_notes_list.value = notes_list.value.filter(function (d) {
            return d.tag == selected_tab.value;
          });
        } else {
          filterd_notes_list.value = notes_list.value;
        }
      } else {
        filterd_notes_list.value = notes_list.value.filter(function (d) {
          return d.is_fav;
        });
      }
    };

    var note_class = function note_class(note) {
      var cls = '';

      if (note.tag) {
        cls = 'note-' + note.tag;
      }

      if (note.is_fav) {
        cls += ' note-fav';
      }

      return cls;
    };

    var tab_changed = function tab_changed(type) {
      selected_tab.value = type;
      search_notes();
      is_show_note_menu.value = false;
    };

    var set_fav = function set_fav(note) {
      note.is_fav = !note.is_fav;
    };

    var set_tag = function set_tag(note, name) {
      note.tag = name;
      search_notes();
    };

    var edit_note = function edit_note(note) {
      params.value = {
        id: null,
        title: '',
        description: ''
      };

      if (note) {
        params.value = JSON.parse(JSON.stringify(note));
      }

      notesMailModal.show();
    };

    var save_note = function save_note() {
      if (!params.value.title) {
        showMessage('Title is required.', 'error');
        return false;
      } //add note


      var max_note_id = notes_list.value.reduce(function (max, character) {
        return character.id > max ? character.id : max;
      }, notes_list.value[0].id);

      if (!max_note_id) {
        max_note_id = 0;
      }

      var dt = new Date();
      var note = {
        id: max_note_id + 1,
        title: params.value.title,
        description: params.value.description,
        date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
        is_fav: false,
        tag: ''
      };
      notes_list.value.splice(0, 0, note);
      search_notes();
      showMessage('Note saved successfully.');
      notesMailModal.hide();
    };

    var delete_note = function delete_note(note) {
      notes_list.value = notes_list.value.filter(function (d) {
        return d.id != note.id;
      });
      search_notes();
      showMessage('Note deleted successfully.');
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
      notesMailModal: notesMailModal,
      params: params,
      is_show_note_menu: is_show_note_menu,
      notes_list: notes_list,
      filterd_notes_list: filterd_notes_list,
      selected_tab: selected_tab,
      initPopup: initPopup,
      bind_notes: bind_notes,
      search_notes: search_notes,
      note_class: note_class,
      tab_changed: tab_changed,
      set_fav: set_fav,
      set_tag: set_tag,
      edit_note: edit_note,
      save_note: save_note,
      delete_note: delete_note,
      showMessage: showMessage,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Notes")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "layout-px-spacing"
};
var _hoisted_4 = {
  "class": "row app-notes layout-top-spacing layout-spacing",
  id: "cancel-row"
};
var _hoisted_5 = {
  "class": "col-lg-12"
};
var _hoisted_6 = {
  "class": "app-hamburger-container"
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
  "class": "feather feather-menu chat-menu d-xl-none"
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
  "class": "app-container"
};
var _hoisted_10 = {
  "class": "app-note-container"
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-md-12 col-sm-12 col-12 text-center"
};
var _hoisted_13 = {
  "class": "col-md-12 col-sm-12 col-12 mt-5"
};
var _hoisted_14 = {
  "class": "nav nav-pills d-block",
  id: "pills-tab3",
  role: "tablist"
};
var _hoisted_15 = {
  "class": "nav-item"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-edit"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
})], -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All Notes ");

var _hoisted_18 = [_hoisted_16, _hoisted_17];
var _hoisted_19 = {
  "class": "nav-item"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-star"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
})], -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Favourites ");

var _hoisted_22 = [_hoisted_20, _hoisted_21];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "group-section"
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
  "class": "feather feather-tag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "7",
  y1: "7",
  x2: "7",
  y2: "7"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tags ")], -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "nav nav-pills d-block group-list",
  id: "pills-tab",
  role: "tablist"
};
var _hoisted_26 = {
  "class": "nav-item"
};
var _hoisted_27 = {
  "class": "nav-item"
};
var _hoisted_28 = {
  "class": "nav-item"
};
var _hoisted_29 = {
  "class": "nav-item"
};
var _hoisted_30 = {
  id: "ct",
  "class": "note-container note-grid"
};
var _hoisted_31 = {
  "class": "note-inner-content"
};
var _hoisted_32 = {
  "class": "note-content"
};
var _hoisted_33 = {
  "class": "note-title"
};
var _hoisted_34 = {
  "class": "meta-time"
};
var _hoisted_35 = {
  "class": "note-description-content"
};
var _hoisted_36 = {
  "class": "note-description"
};
var _hoisted_37 = {
  "class": "note-action"
};
var _hoisted_38 = ["onClick"];

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-star fav-note"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
})], -1
/* HOISTED */
);

var _hoisted_40 = [_hoisted_39];
var _hoisted_41 = ["onClick"];

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2 delete-note\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>", 1);

var _hoisted_43 = [_hoisted_42];
var _hoisted_44 = {
  "class": "note-footer"
};
var _hoisted_45 = {
  "class": "dropdown tags-selector btn-group"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"javascript:;\" id=\"ddlMore\" class=\"btn dropdown-toggle btn-icon-only nav-link\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><div class=\"tags\"><div class=\"g-dot-personal\"></div><div class=\"g-dot-work\"></div><div class=\"g-dot-social\"></div><div class=\"g-dot-important\"></div><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-vertical\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle></svg></div></a>", 1);

var _hoisted_47 = {
  "class": "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "ddlMore"
};
var _hoisted_48 = ["onClick"];
var _hoisted_49 = ["onClick"];
var _hoisted_50 = ["onClick"];
var _hoisted_51 = ["onClick"];
var _hoisted_52 = {
  id: "notesMailModal",
  "class": "modal fade",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_53 = {
  "class": "modal-dialog modal-md modal-dialog-centered"
};
var _hoisted_54 = {
  "class": "modal-content mailbox-popup"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title"
}, "Add Note"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  "class": "btn-close"
})], -1
/* HOISTED */
);

var _hoisted_56 = {
  "class": "modal-body"
};
var _hoisted_57 = {
  "class": "notes-box"
};
var _hoisted_58 = {
  "class": "notes-content"
};
var _hoisted_59 = {
  "class": "row"
};
var _hoisted_60 = {
  "class": "col-md-12"
};
var _hoisted_61 = {
  "class": "form-group mb-4"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Title", -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "col-md-12"
};
var _hoisted_64 = {
  "class": "form-group mb-0"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Description", -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "modal-footer"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-default",
  "data-dismiss": "modal",
  "data-bs-dismiss": "modal"
}, "Discard", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "hamburger",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.is_show_note_menu = !$setup.is_show_note_menu;
    })
  }, _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["app-note-overlay", {
      'app-note-overlay-show': $setup.is_show_note_menu
    }]),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.is_show_note_menu = false;
    })
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-title", {
      'note-menu-show': $setup.is_show_note_menu
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "btn btn-primary",
    href: "javascript:void(0);",
    "data-bs-toggle": "modal",
    "data-bs-target": "#notesMailModal",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.edit_note();
    })
  }, "Add")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link list-actions", {
      active: $setup.selected_tab == 'all'
    }]),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.tab_changed('all');
    })
  }, _hoisted_18, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link list-actions", {
      active: $setup.selected_tab == 'fav'
    }]),
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.tab_changed('fav');
    })
  }, _hoisted_22, 2
  /* CLASS */
  )])]), _hoisted_23, _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link list-actions g-dot-primary", {
      active: $setup.selected_tab == 'personal'
    }]),
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.tab_changed('personal');
    })
  }, "Personal", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link list-actions g-dot-warning", {
      active: $setup.selected_tab == 'work'
    }]),
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.tab_changed('work');
    })
  }, "Work", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link list-actions g-dot-success", {
      active: $setup.selected_tab == 'social'
    }]),
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.tab_changed('social');
    })
  }, "Social", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link list-actions g-dot-danger", {
      active: $setup.selected_tab == 'important'
    }]),
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.tab_changed('important');
    })
  }, "Important", 2
  /* CLASS */
  )])])])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filterd_notes_list, function (note, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["note-item all-notes", $setup.note_class(note)]),
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(note.title), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(note.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(note.description), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      onClick: function onClick($event) {
        return $setup.set_fav(note);
      }
    }, _hoisted_40, 8
    /* PROPS */
    , _hoisted_38), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      onClick: function onClick($event) {
        return $setup.delete_note(note);
      }
    }, _hoisted_43, 8
    /* PROPS */
    , _hoisted_41)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      "class": "dropdown-item note-personal label-group-item label-personal position-relative g-dot-personal",
      onClick: function onClick($event) {
        return $setup.set_tag(note, 'personal');
      }
    }, "Personal", 8
    /* PROPS */
    , _hoisted_48)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      "class": "dropdown-item note-work label-group-item label-work position-relative g-dot-work",
      onClick: function onClick($event) {
        return $setup.set_tag(note, 'work');
      }
    }, "Work", 8
    /* PROPS */
    , _hoisted_49)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      "class": "dropdown-item note-social label-group-item label-social position-relative g-dot-social",
      onClick: function onClick($event) {
        return $setup.set_tag(note, 'social');
      }
    }, "Social", 8
    /* PROPS */
    , _hoisted_50)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "javascript:;",
      "class": "dropdown-item note-important label-group-item label-important position-relative g-dot-important",
      onClick: function onClick($event) {
        return $setup.set_tag(note, 'important');
      }
    }, "Important", 8
    /* PROPS */
    , _hoisted_51)])])])])])], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.params.title = $event;
    }),
    "class": "form-control",
    maxlength: "25",
    placeholder: "Title"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.title]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.params.description = $event;
    }),
    rows: "3",
    "class": "form-control",
    maxlength: "60",
    placeholder: "Description"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.params.description]])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.save_note();
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.params.id ? 'Update' : 'Add'), 1
  /* TEXT */
  )])])])])])])])]);
}

/***/ }),

/***/ "./resources/js/src/views/apps/notes.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/apps/notes.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notes_vue_vue_type_template_id_e88e2d24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes.vue?vue&type=template&id=e88e2d24 */ "./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24");
/* harmony import */ var _notes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/apps/notes.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_notes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_notes_vue_vue_type_template_id_e88e2d24__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/apps/notes.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/apps/notes.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/notes.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notes_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notes.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/notes.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notes_vue_vue_type_template_id_e88e2d24__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notes_vue_vue_type_template_id_e88e2d24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notes.vue?vue&type=template&id=e88e2d24 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/apps/notes.vue?vue&type=template&id=e88e2d24");


/***/ })

}]);