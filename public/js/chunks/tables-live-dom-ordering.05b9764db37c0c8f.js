"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["tables-live-dom-ordering"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'live_dom_ordering',
  setup: function setup(__props, _ref) {
    var _ref2;

    var expose = _ref.expose;
    expose();
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_1__.useMeta)({
      title: 'Live Dom Ordering Table'
    });
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(['name', 'age', 'position', 'office']);
    var items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var table_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_ref2 = {
      perPage: 10,
      perPageValues: [5, 10, 20, 50],
      skin: 'table table-hover',
      columnsClasses: {
        actions: 'actions text-center'
      },
      sortable: [],
      pagination: {
        nav: 'scroll',
        chunk: 5
      },
      texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:'
      }
    }, _defineProperty(_ref2, "sortable", ['name', 'age', 'position', 'office']), _defineProperty(_ref2, "sortIcon", {
      base: 'sort-icon-none',
      up: 'sort-icon-asc',
      down: 'sort-icon-desc'
    }), _defineProperty(_ref2, "resizableColumns", false), _ref2));
    var office_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      bind_data();
    });

    var bind_data = function bind_data() {
      items.value = [{
        id: 1,
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: 61
      }, {
        id: 2,
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: 63
      }, {
        id: 3,
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: 66
      }, {
        id: 4,
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: 22
      }, {
        id: 5,
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: 33
      }, {
        id: 6,
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: 61
      }, {
        id: 7,
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: 59
      }, {
        id: 8,
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: 55
      }, {
        id: 9,
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: 39
      }, {
        id: 10,
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: 23
      }, {
        id: 11,
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: 30
      }, {
        id: 12,
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: 22
      }, {
        id: 13,
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: 36
      }, {
        id: 14,
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: 43
      }, {
        id: 15,
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: 19
      }, {
        id: 16,
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: 66
      }, {
        id: 17,
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: 64
      }, {
        id: 18,
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: 59
      }, {
        id: 19,
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: 41
      }, {
        id: 20,
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: 35
      }, {
        id: 21,
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        office: 'New York',
        age: 61
      }, {
        id: 22,
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: 40
      }, {
        id: 23,
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: 21
      }, {
        id: 24,
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: 23
      }, {
        id: 25,
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: 47
      }, {
        id: 26,
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        age: 42
      }, {
        id: 27,
        name: 'Jennifer Chang',
        position: 'Regional Director',
        office: 'Singapore',
        age: 28
      }];
      office_list.value = _toConsumableArray(new Map(items.value.map(function (item) {
        return [item.office, item];
      })).values()).map(function (d) {
        return d.office;
      });
    };

    var __returned__ = {
      columns: columns,
      items: items,
      table_option: table_option,
      office_list: office_list,
      bind_data: bind_data,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      useMeta: _composables_use_meta__WEBPACK_IMPORTED_MODULE_1__.useMeta
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=template&id=4ac1b4f8":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=template&id=4ac1b4f8 ***!
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
}, "DataTables")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Live Dom Ordering")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row layout-top-spacing"
};
var _hoisted_4 = {
  "class": "col-xl-12 col-lg-12 col-sm-12 layout-spacing"
};
var _hoisted_5 = {
  "class": "panel br-6 p-0"
};
var _hoisted_6 = {
  "class": "custom-table"
};
var _hoisted_7 = ["onUpdate:modelValue"];
var _hoisted_8 = ["onUpdate:modelValue"];
var _hoisted_9 = ["onUpdate:modelValue"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_client_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-client-table");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_client_table, {
    data: $setup.items,
    columns: $setup.columns,
    options: $setup.table_option
  }, {
    age: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "class": "form-control form-control-sm",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return props.row.age = $event;
        }
      }, null, 8
      /* PROPS */
      , _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, props.row.age]])];
    }),
    position: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control form-control-sm",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return props.row.position = $event;
        }
      }, null, 8
      /* PROPS */
      , _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, props.row.position]])];
    }),
    office: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "class": "form-select form-select-sm",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return props.row.office = $event;
        }
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.office_list, function (option, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: i
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option), 1
        /* TEXT */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))], 8
      /* PROPS */
      , _hoisted_9), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, props.row.office]])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["data", "columns", "options"])])])])])]);
}

/***/ }),

/***/ "./resources/js/src/views/tables/live_dom_ordering.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/tables/live_dom_ordering.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _live_dom_ordering_vue_vue_type_template_id_4ac1b4f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live_dom_ordering.vue?vue&type=template&id=4ac1b4f8 */ "./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=template&id=4ac1b4f8");
/* harmony import */ var _live_dom_ordering_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live_dom_ordering.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_live_dom_ordering_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_live_dom_ordering_vue_vue_type_template_id_4ac1b4f8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/tables/live_dom_ordering.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_live_dom_ordering_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_live_dom_ordering_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./live_dom_ordering.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=template&id=4ac1b4f8":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=template&id=4ac1b4f8 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_live_dom_ordering_vue_vue_type_template_id_4ac1b4f8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_live_dom_ordering_vue_vue_type_template_id_4ac1b4f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./live_dom_ordering.vue?vue&type=template&id=4ac1b4f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables/live_dom_ordering.vue?vue&type=template&id=4ac1b4f8");


/***/ })

}]);