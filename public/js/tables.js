"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["tables"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/tables/table-basic.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'tables',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Tables'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var table_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var table_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      initTooltip();
      init_tables();
    });

    var toggleCode = function toggleCode(name) {
      if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter(function (d) {
          return d != name;
        });
      } else {
        code_arr.value.push(name);
      }
    };

    var initTooltip = function initTooltip() {
      setTimeout(function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      });
    };

    var init_tables = function init_tables() {
      table_1.value = [{
        thumb: 'boy.png',
        name: 'Shaun Park',
        'first name': 'John',
        'last name': 'Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: '320',
        sales: '29.56',
        status: 'Complete',
        status_class: 'success',
        register: '5 min ago',
        position: 'Developer',
        office: 'London'
      }, {
        thumb: 'girl-1.png',
        name: 'Alma Clarke',
        'first name': 'Andy',
        'last name': 'King',
        email: 'andyking@gmail.com',
        date: '11/08/2020',
        sale: '420',
        sales: '19.15',
        status: 'Pending',
        status_class: 'secondary',
        register: '10 min ago',
        position: 'Designer',
        office: 'New York'
      }, {
        thumb: 'girl-2.png',
        name: 'Xavier',
        'first name': 'Lisa',
        'last name': 'Doe',
        email: 'lisadoe@yahoo.com',
        date: '12/08/2020',
        sale: '130',
        sales: '39.00',
        status: 'In progress',
        status_class: 'info',
        register: '1 hour ago',
        position: 'Accountant',
        office: 'Amazon'
      }, {
        thumb: 'boy-2.png',
        name: 'Vincent Carpenter',
        'first name': 'Vincent',
        'last name': 'Carpenter',
        email: 'vinnyc@yahoo.com',
        date: '13/08/2020',
        sale: '260',
        sales: '88.03',
        status: 'Canceled',
        status_class: 'danger',
        register: '1 day ago',
        position: 'Data Scientist',
        office: 'Canada'
      }];
      table_2.value = [{
        thumb: 'boy.png',
        name: 'Amy Diaz',
        'first name': 'Amy',
        'last name': 'Diaz',
        email: 'amydiaz@yahoo.com',
        date: '10/08/2020',
        sale: '320',
        sales: '29.56',
        status: 'Complete',
        status_class: 'success',
        register: '5 min ago'
      }, {
        thumb: 'girl-1.png',
        name: 'Nia Hillyer',
        'first name': 'Nia',
        'last name': 'Hillyer',
        email: 'niahill@gmail.com',
        date: '11/08/2020',
        sale: '420',
        sales: '19.15',
        status: 'Pending',
        status_class: 'secondary',
        register: '10 min ago'
      }, {
        thumb: 'girl-2.png',
        name: 'Marry',
        'first name': 'Marry',
        'last name': 'McDonald',
        email: 'marryMcD@yahoo.com',
        date: '12/08/2020',
        sale: '130',
        sales: '39.00',
        status: 'In progress',
        status_class: 'info',
        register: '1 hour ago'
      }, {
        thumb: 'boy-2.png',
        name: 'Shaun Park',
        'first name': 'Shaun',
        'last name': 'Park',
        email: 'park@yahoo.com',
        date: '13/08/2020',
        sale: '260',
        sales: '88.03',
        status: 'Canceled',
        status_class: 'danger',
        register: '1 day ago'
      }];
      table_2.value = table_1.value.concat(table_2.value);
    };

    var random_class = function random_class(index) {
      if (index == 0) {
        return 'default';
      } else if (index == 1) {
        return 'primary';
      } else if (index == 2) {
        return 'secondary';
      } else if (index == 3) {
        return 'success';
      } else if (index == 4) {
        return 'dark';
      } else if (index == 5) {
        return 'danger';
      } else if (index == 6) {
        return 'info';
      } else if (index == 7) {
        return 'warning';
      }

      return 'dark';
    };

    var __returned__ = {
      code_arr: code_arr,
      table_1: table_1,
      table_2: table_2,
      toggleCode: toggleCode,
      initTooltip: initTooltip,
      init_tables: init_tables,
      random_class: random_class,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables.vue?vue&type=template&id=1aee876f":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables.vue?vue&type=template&id=1aee876f ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
}, "Tables")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Basic")])])])])])], -1
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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#tableSimple\" class=\"nav-link\">Simple</a><a href=\"#tableHover\" class=\"nav-link\">Hover</a><a href=\"#tableStriped\" class=\"nav-link\">Striped</a><a href=\"#tableLight\" class=\"nav-link\">Light</a><a href=\"#tableCaption\" class=\"nav-link\">Caption</a><a href=\"#tableProgress\" class=\"nav-link\">Progress</a><a href=\"#tableContextual\" class=\"nav-link\">Contextual</a><a href=\"#tableDropdown\" class=\"nav-link\">Dropdown</a><a href=\"#tableFooter\" class=\"nav-link\">Footer</a><a href=\"#tableCheckbox\" class=\"nav-link\">Checkbox</a>", 10);

var _hoisted_16 = [_hoisted_6];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://getbootstrap.com/docs/5.0/content/tables\" class=\"text-info\"> https://getbootstrap.com/docs/5.0/content/tables </a></div></div></div>", 1);

var _hoisted_18 = {
  "class": "row layout-top-spacing"
};
var _hoisted_19 = {
  id: "tableSimple",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_20 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Simple Table")])])], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "panel-body"
};
var _hoisted_23 = {
  "class": "table-responsive"
};
var _hoisted_24 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table table-bordered",
  id: "__BVID__415"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Date")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Sale")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "status")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "aria-label": "Action",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")])])], -1
/* HOISTED */
);

var _hoisted_26 = {
  role: "rowgroup"
};
var _hoisted_27 = {
  "aria-colindex": "1",
  role: "cell"
};
var _hoisted_28 = {
  "aria-colindex": "2",
  role: "cell"
};
var _hoisted_29 = {
  "aria-colindex": "3",
  role: "cell"
};
var _hoisted_30 = {
  "aria-colindex": "4",
  role: "cell",
  "class": "text-center"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "5",
  role: "cell",
  "class": "text-center"
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
  "class": "feather feather-trash-2 icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
})])], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "code-section-container show-code"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_34 = [_hoisted_33];
var _hoisted_35 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table table-bordered\" id=\"__BVID__415\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>status</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div></div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\">\n                <td aria-colindex=\"1\" role=\"cell\">{{ item.name }}</td>\n                <td aria-colindex=\"2\" role=\"cell\">{{ item.date }}</td>\n                <td aria-colindex=\"3\" role=\"cell\">{{ item.sale }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"text-center\">\n                    <span :class=\"`text-${item.status_class}`\"> {{ item.status }} </span>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-trash-2 icon\"\n                    >\n                        <polyline points=\"3 6 5 6 21 6\"></polyline>\n                        <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>\n                        <line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line>\n                        <line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_37 = {
  id: "tableHover",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_38 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Hover Table")])])], -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "panel-body"
};
var _hoisted_41 = {
  "class": "table-responsive"
};
var _hoisted_42 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table table-hover table-bordered",
  id: "__BVID__415"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Date")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Sale")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "status")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "aria-label": "Action",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")])])], -1
/* HOISTED */
);

var _hoisted_44 = {
  role: "rowgroup"
};
var _hoisted_45 = {
  "aria-colindex": "1",
  role: "cell"
};
var _hoisted_46 = {
  "aria-colindex": "2",
  role: "cell"
};
var _hoisted_47 = {
  "aria-colindex": "3",
  role: "cell"
};
var _hoisted_48 = {
  "aria-colindex": "4",
  role: "cell",
  "class": "text-center"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "5",
  role: "cell",
  "class": "text-center"
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
  "class": "feather feather-trash-2 icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
})])], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "code-section-container show-code"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_52 = [_hoisted_51];
var _hoisted_53 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table table-hover table-bordered\" id=\"__BVID__415\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>status</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div></div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\">\n                <td aria-colindex=\"1\" role=\"cell\">{{ item.name }}</td>\n                <td aria-colindex=\"2\" role=\"cell\">{{ item.date }}</td>\n                <td aria-colindex=\"3\" role=\"cell\">{{ item.sale }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"text-center\">\n                    <span :class=\"`text-${item.status_class}`\"> {{ item.status }} </span>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-trash-2 icon\"\n                    >\n                        <polyline points=\"3 6 5 6 21 6\"></polyline>\n                        <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>\n                        <line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line>\n                        <line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_55 = {
  id: "tableStriped",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_56 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Striped Table")])])], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "panel-body"
};
var _hoisted_59 = {
  "class": "table-responsive"
};
var _hoisted_60 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table table-striped table-bordered",
  id: "__BVID__415"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Date")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Sale")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "aria-label": "Action",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "action")])])], -1
/* HOISTED */
);

var _hoisted_62 = {
  role: "rowgroup"
};
var _hoisted_63 = {
  "aria-colindex": "1",
  role: "cell"
};
var _hoisted_64 = {
  "class": "d-flex"
};
var _hoisted_65 = {
  "class": "usr-img-frame me-2 rounded-circle"
};
var _hoisted_66 = ["src"];
var _hoisted_67 = {
  "class": "align-self-center mb-0"
};
var _hoisted_68 = {
  "aria-colindex": "2",
  role: "cell"
};
var _hoisted_69 = {
  "aria-colindex": "3",
  role: "cell"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "5",
  role: "cell",
  "class": "text-center"
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
  "class": "feather feather-x t-icon t-hover-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})])], -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "code-section-container show-code"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_73 = [_hoisted_72];
var _hoisted_74 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table table-striped table-bordered\" id=\"__BVID__415\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div>action</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\">\n                <td aria-colindex=\"1\" role=\"cell\">\n                    <div class=\"d-flex\">\n                        <div class=\"usr-img-frame me-2 rounded-circle\">\n                            <img alt=\"avatar\" class=\"img-fluid rounded-circle\" :src=\"require('@/assets/images/' + item.thumb)\" />\n                        </div>\n                        <p class=\"align-self-center mb-0\">{{ item.name }}</p>\n                    </div>\n                </td>\n                <td aria-colindex=\"2\" role=\"cell\">{{ item.date }}</td>\n                <td aria-colindex=\"3\" role=\"cell\">{{ item.sale }}</td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-x t-icon t-hover-icon\"\n                    >\n                        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n                        <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_76 = {
  id: "tableLight",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_77 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Table Light")])])], -1
/* HOISTED */
);

var _hoisted_79 = {
  "class": "panel-body"
};
var _hoisted_80 = {
  "class": "table-light table-responsive"
};
var _hoisted_81 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table b-table table-hover",
  id: "__BVID__310"
};

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "#")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "First Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Last Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Email")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "aria-label": "Action",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")])])], -1
/* HOISTED */
);

var _hoisted_83 = {
  role: "row",
  "class": ""
};
var _hoisted_84 = {
  "aria-colindex": "1",
  role: "cell",
  "class": ""
};
var _hoisted_85 = {
  "aria-colindex": "2",
  role: "cell",
  "class": ""
};
var _hoisted_86 = {
  "aria-colindex": "3",
  role: "cell",
  "class": ""
};
var _hoisted_87 = {
  "aria-colindex": "4",
  role: "cell",
  "class": ""
};

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "5",
  role: "cell",
  "class": "text-center"
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
  "class": "feather feather-x t-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})])], -1
/* HOISTED */
);

var _hoisted_89 = {
  "class": "code-section-container show-code"
};

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_91 = [_hoisted_90];
var _hoisted_92 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-light table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table table-hover\" id=\"__BVID__310\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>#</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>First Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Last Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Email</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" aria-label=\"Action\" class=\"text-center\"><div></div></th>\n            </tr>\n        </thead>\n        <tbody v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"rowgroup\">\n            <tr role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item['first name'] }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item['last name'] }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">{{ item.email }}</td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <svg\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        width=\"24\"\n                        height=\"24\"\n                        viewBox=\"0 0 24 24\"\n                        fill=\"none\"\n                        stroke=\"currentColor\"\n                        stroke-width=\"2\"\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        class=\"feather feather-x t-icon\"\n                    >\n                        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n                        <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n                    </svg>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_94 = {
  id: "tableCaption",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_95 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Captions")])])], -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "panel-body"
};
var _hoisted_98 = {
  "class": "table-responsive"
};
var _hoisted_99 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table b-table",
  id: "__BVID__319"
};

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "#")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Email")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Status")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Register")])])], -1
/* HOISTED */
);

var _hoisted_101 = {
  role: "rowgroup"
};
var _hoisted_102 = {
  "aria-colindex": "1",
  role: "cell",
  "class": ""
};
var _hoisted_103 = {
  "aria-colindex": "2",
  role: "cell",
  "class": "text-success"
};
var _hoisted_104 = {
  "aria-colindex": "3",
  role: "cell",
  "class": ""
};
var _hoisted_105 = {
  "aria-colindex": "4",
  role: "cell",
  "class": ""
};
var _hoisted_106 = {
  "aria-colindex": "5",
  role: "cell",
  "class": ""
};
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

var _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table\" id=\"__BVID__319\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>#</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Email</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Status</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" class=\"\"><div>Register</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"text-success\">{{ item.name }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item.email }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">\n                    <span\n                        class=\"badge\"\n                        :class=\"{\n                            'outline-badge-primary': item.status == 'Complete',\n                            'outline-badge-secondary': item.status == 'Pending',\n                            'outline-badge-info': item.status == 'In progress',\n                            'outline-badge-danger': item.status == 'Canceled',\n                        }\"\n                    >\n                        {{ item.status }}\n                    </span>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"\">{{ item.register }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n    ")], -1
/* HOISTED */
);

var _hoisted_112 = {
  id: "tableProgress",
  "class": "col-lg-12 col-12 layout-spacing"
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
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Progress Table")])])], -1
/* HOISTED */
);

var _hoisted_115 = {
  "class": "panel-body"
};
var _hoisted_116 = {
  "class": "table-responsive"
};
var _hoisted_117 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table b-table table-bordered",
  id: "__BVID__328"
};

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "#")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Progress")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Sales")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Action")])])], -1
/* HOISTED */
);

var _hoisted_119 = {
  role: "rowgroup"
};
var _hoisted_120 = {
  "aria-colindex": "1",
  role: "cell",
  "class": ""
};
var _hoisted_121 = {
  "aria-colindex": "2",
  role: "cell",
  "class": ""
};
var _hoisted_122 = {
  "aria-colindex": "3",
  role: "cell",
  "class": ""
};
var _hoisted_123 = {
  "class": "progress br-30",
  min: "0"
};
var _hoisted_124 = {
  "aria-colindex": "4",
  role: "cell",
  "class": ""
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "5",
  role: "cell",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "table-controls"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Edit"
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
  "class": "feather feather-edit-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Delete"
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
  "class": "feather feather-trash-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
})])])])])], -1
/* HOISTED */
);

var _hoisted_126 = {
  "class": "code-section-container show-code"
};

var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_128 = [_hoisted_127];
var _hoisted_129 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table table-bordered\" id=\"__BVID__328\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>#</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Progress</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Sales</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" class=\"text-center\"><div>Action</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item['first name'] + ' ' + item['last name'] }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">\n                    <div class=\"progress br-30\" min=\"0\">\n                        <div\n                            role=\"progressbar\"\n                            aria-valuemin=\"0\"\n                            aria-valuemax=\"100\"\n                            aria-valuenow=\"30\"\n                            class=\"progress-bar\"\n                            :class=\"`bg-${item.status_class}`\"\n                            :style=\"`width: ${item.sales}%`\"\n                        ></div>\n                    </div>\n                </td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">\n                    <p :class=\"i == 3 ? 'text-success' : 'text-danger'\">{{ item.sales + '%' }}</p>\n                </td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <ul class=\"table-controls\">\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Edit\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Delete\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                    </ul>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_131 = {
  id: "tableContextual",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_132 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_133 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Contextual")])])], -1
/* HOISTED */
);

var _hoisted_134 = {
  "class": "panel-body"
};
var _hoisted_135 = {
  "class": "contextual-table table-responsive"
};
var _hoisted_136 = {
  role: "table",
  "class": "table b-table",
  id: "__BVID__337"
};

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "first name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "last name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "email")])], -1
/* HOISTED */
);

var _hoisted_138 = {
  role: "rowgroup"
};
var _hoisted_139 = {
  role: "cell",
  "class": ""
};
var _hoisted_140 = {
  role: "cell",
  "class": ""
};
var _hoisted_141 = {
  role: "cell",
  "class": ""
};
var _hoisted_142 = {
  role: "cell",
  "class": ""
};
var _hoisted_143 = {
  "class": "code-section-container show-code"
};

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_145 = [_hoisted_144];
var _hoisted_146 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"contextual-table table-responsive\">\n    <table role=\"table\" class=\"table b-table\" id=\"__BVID__337\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" class=\"\">#</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">first name</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">last name</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">email</th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_2\" :key=\"item.name\" role=\"row\" :class=\"'table-' + random_class(i)\">\n                <td role=\"cell\" class=\"\">{{ i + 1 }}</td>\n                <td role=\"cell\" class=\"\">{{ item['first name'] }}</td>\n                <td role=\"cell\" class=\"\">{{ item['first name'] }}</td>\n                <td role=\"cell\" class=\"\">{{ item.email }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_148 = {
  id: "tableDropdown",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_149 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Dropdown")])])], -1
/* HOISTED */
);

var _hoisted_151 = {
  "class": "panel-body"
};
var _hoisted_152 = {
  "class": "table-responsive"
};
var _hoisted_153 = {
  role: "table",
  "class": "table b-table table-bordered",
  id: "__BVID__345"
};

var _hoisted_154 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": ""
}, "Sale"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": "text-center"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "class": "text-center"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_155 = {
  role: "rowgroup"
};
var _hoisted_156 = {
  role: "cell",
  "class": ""
};
var _hoisted_157 = {
  role: "cell",
  "class": ""
};
var _hoisted_158 = {
  role: "cell",
  "class": ""
};
var _hoisted_159 = {
  role: "cell",
  "class": ""
};

var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  role: "cell",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown b-dropdown custom-dropdown btn-group",
  id: "__BVID__464"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "aria-haspopup": "true",
  "aria-expanded": "false",
  href: "javascript:;",
  target: "_self",
  "class": "btn dropdown-toggle btn-icon-only",
  "data-bs-toggle": "dropdown",
  boundary: "body",
  id: "ddlcustom"
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
  "class": "feather feather-more-horizontal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "19",
  cy: "12",
  r: "1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "5",
  cy: "12",
  r: "1"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "menu",
  tabindex: "-1",
  "class": "dropdown-menu dropdown-menu-right",
  "aria-labelledby": "ddlcustom",
  style: {}
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  role: "menuitem",
  href: "javascript:",
  target: "_self",
  "class": "dropdown-item"
}, "Download")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  role: "menuitem",
  href: "javascript:",
  target: "_self",
  "class": "dropdown-item"
}, "Share")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  role: "menuitem",
  href: "javascript:",
  target: "_self",
  "class": "dropdown-item"
}, "Edit")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  role: "menuitem",
  href: "javascript:",
  target: "_self",
  "class": "dropdown-item"
}, "Delete")])])])], -1
/* HOISTED */
);

var _hoisted_161 = {
  "class": "code-section-container show-code"
};

var _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_163 = [_hoisted_162];
var _hoisted_164 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_165 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-responsive\">\n    <table role=\"table\" class=\"table b-table table-bordered\" >\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" class=\"\">Name</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">Date</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"\">Sale</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"text-center\">Status</th>\n                <th role=\"columnheader\" scope=\"col\" class=\"text-center\">Action</th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_2\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td role=\"cell\" class=\"\">{{ item.name }}</td>\n                <td role=\"cell\" class=\"\">{{ item.date }}</td>\n                <td role=\"cell\" class=\"\">{{ item.sale }}</td>\n                <td role=\"cell\" class=\"\">\n                    <span class=\"badge\" :class=\"`badge-${item.status_class}`\">{{ item.status }}</span>\n                </td>\n                <td role=\"cell\" class=\"text-center\">\n                    <div class=\"dropdown b-dropdown custom-dropdown btn-group\" id=\"__BVID__464\">\n                        <a\n                            aria-haspopup=\"true\"\n                            aria-expanded=\"false\"\n                            href=\"javascript:;\"\n                            target=\"_self\"\n                            class=\"btn dropdown-toggle btn-icon-only\"\n                            data-bs-toggle=\"dropdown\"\n                            boundary=\"body\"\n                            id=\"ddlcustom\"\n                        >\n                            <svg> ... </svg>\n                        </a>\n                        <ul role=\"menu\" tabindex=\"-1\" class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"ddlcustom\" style=\"\">\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Download</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Share</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Edit</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" href=\"javascript:\" target=\"_self\" class=\"dropdown-item\">Delete</a></li>\n                        </ul>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_166 = {
  id: "tableFooter",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_167 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_168 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Table with Footer")])])], -1
/* HOISTED */
);

var _hoisted_169 = {
  "class": "panel-body"
};
var _hoisted_170 = {
  "class": "table-condensed table-responsive"
};
var _hoisted_171 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "4",
  "class": "table b-table table-hover table-bordered",
  id: "__BVID__354"
};

var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Position")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Office")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Action")])])], -1
/* HOISTED */
);

var _hoisted_173 = {
  role: "rowgroup"
};
var _hoisted_174 = {
  "aria-colindex": "1",
  role: "cell",
  "class": ""
};
var _hoisted_175 = {
  "aria-colindex": "2",
  role: "cell",
  "class": ""
};
var _hoisted_176 = {
  "aria-colindex": "3",
  role: "cell",
  "class": ""
};

var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "4",
  role: "cell",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "table-controls"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Edit"
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
  "class": "feather feather-check-circle text-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "22 4 12 14.01 9 11.01"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Delete"
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
  "class": "feather feather-x-circle text-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "15",
  y1: "9",
  x2: "9",
  y2: "15"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "9",
  y1: "9",
  x2: "15",
  y2: "15"
})])])])])], -1
/* HOISTED */
);

var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Position")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Office")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Action")])])], -1
/* HOISTED */
);

var _hoisted_179 = {
  "class": "code-section-container show-code"
};

var _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_181 = [_hoisted_180];
var _hoisted_182 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_183 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-condensed table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"4\" class=\"table b-table table-hover table-bordered\" id=\"__BVID__354\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Position</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Office</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>Action</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"item in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"\">{{ item.name }}</td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item.position }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item.office }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"text-center\">\n                    <ul class=\"table-controls\">\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Edit\">\n                                <svg> ... </svg>line points=\"22 4 12 14.01 9 11.01\"></polyline>\n                                </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Delete\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                    </ul>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Position</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Office</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"text-center\"><div>Action</div></th>\n            </tr>\n        </tfoot>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

var _hoisted_184 = {
  id: "tableCheckbox",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_185 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Checkboxes")])])], -1
/* HOISTED */
);

var _hoisted_187 = {
  "class": "panel-body"
};
var _hoisted_188 = {
  "class": "table-checkable table-highlight-head table-responsive"
};
var _hoisted_189 = {
  role: "table",
  "aria-busy": "false",
  "aria-colcount": "5",
  "class": "table b-table table-striped table-hover table-bordered",
  id: "__BVID__368"
};

var _hoisted_190 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  role: "rowgroup",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  role: "row",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "1",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "checkbox-primary custom-control custom-checkbox"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  variant: "primary",
  type: "checkbox",
  "class": "custom-control-input",
  value: "true",
  id: "__BVID__372"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "__BVID__372"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "2",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Name")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "3",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Date")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "4",
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Sale")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  role: "columnheader",
  scope: "col",
  "aria-colindex": "5",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "icons")])])], -1
/* HOISTED */
);

var _hoisted_191 = {
  role: "rowgroup"
};
var _hoisted_192 = {
  "aria-colindex": "1",
  role: "cell",
  "class": "text-center"
};
var _hoisted_193 = {
  "class": "checkbox-primary custom-control custom-checkbox"
};
var _hoisted_194 = ["id"];
var _hoisted_195 = ["for"];
var _hoisted_196 = {
  "aria-colindex": "2",
  role: "cell",
  "class": ""
};
var _hoisted_197 = {
  "aria-colindex": "3",
  role: "cell",
  "class": ""
};
var _hoisted_198 = {
  "aria-colindex": "4",
  role: "cell",
  "class": ""
};

var _hoisted_199 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "aria-colindex": "5",
  role: "cell",
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "table-controls"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Settings"
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
  "class": "feather feather-settings text-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Edit"
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
  "class": "feather feather-edit-2 text-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  "data-bs-toggle": "tooltip",
  title: "Delete"
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
  "class": "feather feather-trash-2 text-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
})])])])])], -1
/* HOISTED */
);

var _hoisted_200 = {
  "class": "code-section-container show-code"
};

var _hoisted_201 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_202 = [_hoisted_201];
var _hoisted_203 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_204 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<div class=\"table-checkable table-highlight-head table-responsive\">\n    <table role=\"table\" aria-busy=\"false\" aria-colcount=\"5\" class=\"table b-table table-striped table-hover table-bordered\" id=\"__BVID__368\">\n        <thead role=\"rowgroup\" class=\"\">\n            <tr role=\"row\" class=\"\">\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"1\" class=\"text-center\">\n                    <div class=\"checkbox-primary custom-control custom-checkbox\">\n                        <input variant=\"primary\" type=\"checkbox\" class=\"custom-control-input\" value=\"true\" /><label\n                            class=\"custom-control-label\"\n                        ></label>\n                    </div>\n                </th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"2\" class=\"\"><div>Name</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"3\" class=\"\"><div>Date</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"4\" class=\"\"><div>Sale</div></th>\n                <th role=\"columnheader\" scope=\"col\" aria-colindex=\"5\" class=\"text-center\"><div>icons</div></th>\n            </tr>\n        </thead>\n        <tbody role=\"rowgroup\">\n            <tr v-for=\"(item, i) in table_1\" :key=\"item.name\" role=\"row\" class=\"\">\n                <td aria-colindex=\"1\" role=\"cell\" class=\"text-center\">\n                    <div class=\"checkbox-primary custom-control custom-checkbox\">\n                        <input variant=\"primary\" type=\"checkbox\" class=\"custom-control-input\" value=\"true\" :id=\"'chk' + i\" /><label\n                            class=\"custom-control-label\"\n                            :for=\"'chk' + i\"\n                        ></label>\n                    </div>\n                </td>\n                <td aria-colindex=\"2\" role=\"cell\" class=\"\">{{ item.name }}</td>\n                <td aria-colindex=\"3\" role=\"cell\" class=\"\">{{ item.date }}</td>\n                <td aria-colindex=\"4\" role=\"cell\" class=\"\">{{ item.sale }}</td>\n                <td aria-colindex=\"5\" role=\"cell\" class=\"text-center\">\n                    <ul class=\"table-controls\">\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Settings\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Edit\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-bs-toggle=\"tooltip\" title=\"Delete\">\n                                <svg> ... </svg>\n                            </a>\n                        </li>\n                    </ul>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_16)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sale), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("text-".concat(item.status_class))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 3
    /* TEXT, CLASS */
    )]), _hoisted_31]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_34), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_36];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_44, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sale), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("text-".concat(item.status_class))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 3
    /* TEXT, CLASS */
    )]), _hoisted_49]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_52), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_54];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_62, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      alt: "avatar",
      "class": "img-fluid rounded-circle",
      src: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }, null, 8
    /* PROPS */
    , _hoisted_66)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sale), 1
    /* TEXT */
    ), _hoisted_70]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_73), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_75];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_81, [_hoisted_82, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", {
      key: item.name,
      role: "rowgroup"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item['first name']), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item['last name']), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1
    /* TEXT */
    ), _hoisted_88])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_91), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_93];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_99, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_101, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row",
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge", {
        'outline-badge-primary': item.status == 'Complete',
        'outline-badge-secondary': item.status == 'Pending',
        'outline-badge-info': item.status == 'In progress',
        'outline-badge-danger': item.status == 'Canceled'
      }])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 3
    /* TEXT, CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.register), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_109), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_111];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [_hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_119, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row",
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_121, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item['first name'] + ' ' + item['last name']), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": "30",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["progress-bar", "bg-".concat(item.status_class)]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width: ".concat(item.sales, "%"))
    }, null, 6
    /* CLASS, STYLE */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(i == 3 ? 'text-success' : 'text-danger')
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sales + '%'), 3
    /* TEXT, CLASS */
    )]), _hoisted_125]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_128), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_130];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [_hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_136, [_hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_138, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_2, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('table-' + $setup.random_class(i))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_139, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item['first name']), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_141, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item['first name']), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_142, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1
    /* TEXT */
    )], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_145), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_146, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_147];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_153, [_hoisted_154, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_155, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_2, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row",
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_156, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_158, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sale), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge", "badge-".concat(item.status_class)])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 3
    /* TEXT, CLASS */
    )]), _hoisted_160]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_163), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_164, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_165];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_170, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_171, [_hoisted_172, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_173, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row",
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_175, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.position), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_176, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.office), 1
    /* TEXT */
    ), _hoisted_177]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_178])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_181), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_183];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_184, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_189, [_hoisted_190, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_191, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table_1, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item.name,
      role: "row",
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_192, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      variant: "primary",
      type: "checkbox",
      "class": "custom-control-input",
      value: "true",
      id: 'chk' + i
    }, null, 8
    /* PROPS */
    , _hoisted_194), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": "custom-control-label",
      "for": 'chk' + i
    }, null, 8
    /* PROPS */
    , _hoisted_195)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_196, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_197, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_198, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.sale), 1
    /* TEXT */
    ), _hoisted_199]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_200, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_202), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_204];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/tables.vue":
/*!*******************************************!*\
  !*** ./resources/js/src/views/tables.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tables_vue_vue_type_template_id_1aee876f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.vue?vue&type=template&id=1aee876f */ "./resources/js/src/views/tables.vue?vue&type=template&id=1aee876f");
/* harmony import */ var _tables_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/tables.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_tables_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_tables_vue_vue_type_template_id_1aee876f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/tables.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/tables.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/tables.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tables_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tables_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./tables.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/tables.vue?vue&type=template&id=1aee876f":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/tables.vue?vue&type=template&id=1aee876f ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tables_vue_vue_type_template_id_1aee876f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tables_vue_vue_type_template_id_1aee876f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./tables.vue?vue&type=template&id=1aee876f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/tables.vue?vue&type=template&id=1aee876f");


/***/ })

}]);