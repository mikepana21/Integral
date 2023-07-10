"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["widgets"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-apexcharts */ "./node_modules/vue3-apexcharts/dist/vue3-apexcharts.common.js");
/* harmony import */ var vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/widgets/widgets.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'widgets',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Widgets'
    });
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //Daily Sales

    var daily_sales_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [44, 55, 41, 67, 22, 43, 21]
    }, {
      name: 'Last Week',
      data: [13, 23, 20, 8, 13, 27, 33]
    }]); //Total Orders

    var total_orders_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
    }]); //Revenue

    var revenue_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Income',
      data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000]
    }, {
      name: 'Expenses',
      data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000]
    }]); //Sales by Category

    var sales_donut_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([985, 737, 270]); //Statistics

    var total_visit_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
    }]);
    var paid_visit_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
    }]); //unique visitors

    var unique_visitor_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Direct',
      data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
    }, {
      name: 'Organic',
      data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
    }]); //Followers

    var followers_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [38, 60, 38, 52, 36, 40, 28]
    }]); //Referral

    var referral_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [60, 28, 52, 38, 40, 36, 38]
    }]); //Engagement

    var engagement_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [28, 50, 36, 60, 38, 52, 38]
    }]); //Revenue

    var revenue_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          fontFamily: 'Nunito, sans-serif',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: 'smooth',
          width: 2,
          lineCap: 'square'
        },
        dropShadow: {
          enabled: true,
          opacity: 0.2,
          blur: 10,
          left: -7,
          top: 22
        },
        colors: is_dark ? ['#2196f3', '#e7515a'] : ['#1b55e2', '#e7515a'],
        markers: {
          discrete: [{
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: '#1b55e2',
            strokeColor: '#fff',
            size: 7
          }, {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: '#e7515a',
            strokeColor: '#fff',
            size: 7
          }]
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: true
          },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: '12px',
              fontFamily: 'Nunito, sans-serif',
              cssClass: 'apexcharts-xaxis-title'
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function formatter(value) {
              return value / 1000 + 'K';
            },
            offsetX: -10,
            offsetY: 0,
            style: {
              fontSize: '12px',
              fontFamily: 'Nunito, sans-serif',
              cssClass: 'apexcharts-yaxis-title'
            }
          }
        },
        grid: {
          borderColor: is_dark ? '#191e3a' : '#e0e6ed',
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetY: 0,
          fontSize: '16px',
          fontFamily: 'Nunito, sans-serif',
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 20,
            vertical: 5
          }
        },
        tooltip: {
          theme: 'dark',
          marker: {
            show: true
          },
          x: {
            show: false
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: is_dark ? 0.19 : 0.28,
            opacityTo: 0.05,
            stops: is_dark ? [100, 100] : [45, 100]
          }
        }
      };
    }); //Daily Sales

    var daily_sales_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        chart: {
          toolbar: {
            show: false
          },
          stacked: true,
          stackType: '100%'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1
        },
        colors: ['#e2a03f', '#e0e6ed'],
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          labels: {
            show: false
          },
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        },
        yaxis: {
          show: false
        },
        fill: {
          opacity: 1
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%'
          }
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 10,
            right: -20,
            bottom: -20,
            left: -20
          }
        }
      };
    }); //Total Orders

    var total_orders_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: is_dark ? ['#1abc9c'] : ['#fff'],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        yaxis: {
          min: 0,
          show: false
        },
        grid: {
          padding: {
            top: 125,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        fill: {
          opacity: 1,
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: is_dark ? 0.3 : 0.4,
            opacityTo: 0.05,
            stops: is_dark ? [100, 100] : [45, 100]
          }
        },
        tooltip: {
          x: {
            show: false
          },
          theme: 'dark'
        }
      };
    }); //Sales by Category

    var sales_donut_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {},
        dataLabels: {
          enabled: false
        },
        expandOnClick: is_dark ? false : true,
        stroke: {
          show: true,
          width: 25,
          colors: is_dark ? '#0e1726' : '#fff'
        },
        colors: is_dark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 10,
            height: 10
          },
          height: 50,
          offsetY: 20,
          itemMargin: {
            horizontal: 8,
            vertical: 0
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '29px',
                  fontFamily: 'Nunito, sans-serif',
                  offsetY: -10
                },
                value: {
                  show: true,
                  fontSize: '26px',
                  fontFamily: 'Nunito, sans-serif',
                  color: is_dark ? '#bfc9d4' : undefined,
                  offsetY: 16,
                  formatter: function formatter(val) {
                    return val;
                  }
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: '#888ea8',
                  fontSize: '29px',
                  formatter: function formatter(w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  }
                }
              }
            }
          }
        },
        labels: ['Apparel', 'Sports', 'Others']
      };

      if (is_dark) {
        option['states'] = {
          hover: {
            filter: {
              type: 'none'
            }
          },
          active: {
            filter: {
              type: 'none'
            }
          }
        };
      }

      return option;
    }); //Statistics

    var total_visit_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 1,
            blur: 3,
            color: '#009688',
            opacity: 0.7
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        colors: ['#009688'],
        grid: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0
          }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter() {
                return '';
              }
            }
          }
        },
        responsive: [{
          breakPoint: 576,
          options: {
            chart: {
              height: 95
            },
            grid: {
              padding: {
                top: 45,
                bottom: 0,
                left: 0
              }
            }
          }
        }]
      };
    });
    var paid_visit_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            color: '#e2a03f',
            opacity: 0.7
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        colors: ['#e2a03f'],
        grid: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0
          }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter() {
                return '';
              }
            }
          }
        },
        responsive: [{
          breakPoint: 576,
          options: {
            chart: {
              height: 95
            },
            grid: {
              padding: {
                top: 35,
                bottom: 0,
                left: 0
              }
            }
          }
        }]
      };
    }); //unique visitors

    var unique_visitor_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        colors: ['#5c1ac3', '#ffbb44'],
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 1,
          left: 1,
          top: 1,
          color: '#515365'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 10
          }
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 12,
            height: 12
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8
          }
        },
        grid: {
          borderColor: is_dark ? '#191e3a' : '#e0e6ed'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: true,
            color: is_dark ? '#3b3f5c' : '#e0e6ed'
          }
        },
        yaxis: {
          tickAmount: 6
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: is_dark ? 'dark' : 'light',
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }
      };
    }); //Followers

    var followers_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#4361ee'],
        yaxis: {
          min: 0,
          show: false
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          }
        }
      };

      if (is_dark) {
        option['fill'] = {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100]
          }
        };
      }

      return option;
    }); //Referral

    var referral_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#e7515a'],
        yaxis: {
          min: 0,
          show: false
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          }
        }
      };

      if (is_dark) {
        option['fill'] = {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100]
          }
        };
      }

      return option;
    }); //Engagement

    var engagement_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#1abc9c'],
        yaxis: {
          min: 0,
          show: false
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          }
        }
      };

      if (is_dark) {
        option['fill'] = {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100]
          }
        };
      }

      return option;
    });
    var __returned__ = {
      store: store,
      code_arr: code_arr,
      daily_sales_series: daily_sales_series,
      total_orders_series: total_orders_series,
      revenue_series: revenue_series,
      sales_donut_series: sales_donut_series,
      total_visit_series: total_visit_series,
      paid_visit_series: paid_visit_series,
      unique_visitor_series: unique_visitor_series,
      followers_series: followers_series,
      referral_series: referral_series,
      engagement_series: engagement_series,
      revenue_options: revenue_options,
      daily_sales_options: daily_sales_options,
      total_orders_options: total_orders_options,
      sales_donut_options: sales_donut_options,
      total_visit_options: total_visit_options,
      paid_visit_options: paid_visit_options,
      unique_visitor_options: unique_visitor_options,
      followers_options: followers_options,
      referral_options: referral_options,
      engagement_options: engagement_options,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      apexchart: (vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1___default()),
      useStore: vuex__WEBPACK_IMPORTED_MODULE_3__.useStore,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-13.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-7.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-10.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-5.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-4.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-11.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-headphones.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-shoes.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-watch.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-laptop.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-camera.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-19.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/g-8.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-6.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-8.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-3.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


















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
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Widgets")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row layout-top-spacing"
};
var _hoisted_4 = {
  "class": "col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_5 = {
  "class": "widget widget-revenue"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Revenue</h5><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlRevenue\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlRevenue\"><li><a href=\"javascript:;\" class=\"dropdown-item\">Weekly</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Monthly</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Yearly</a></li></ul></div></div>", 1);

var _hoisted_7 = {
  "class": "widget-content"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "chart-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Profit "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-primary ms-1"
}, "$10,840")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_10 = {
  "class": "widget widget-sales-category"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Sales by Category")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "widget-content"
};
var _hoisted_13 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing"
};
var _hoisted_14 = {
  "class": "widget widget-dailysales"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div><h5>Daily sales</h5><span class=\"sub-title\">Go to columns for details.</span></div><div class=\"w-icon text-warning\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-dollar-sign\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path></svg></div></div>", 1);

var _hoisted_16 = {
  "class": "widget-content"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget widget-summary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Summary"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown btn-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  id: "ddlSummary",
  "class": "btn dropdown-toggle btn-icon-only",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
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
  "class": "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "ddlSummary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "View Report")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Edit Report")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Mark as Done")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "summary-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-shopping-bag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M16 10a4 4 0 0 1-8 0"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Income"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "summary-count"
}, "$92,600")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "90",
  "class": "progress-bar bg-gradient-secondary",
  style: {
    "width": "90%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "summary-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "17",
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
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Profit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "summary-count"
}, "$37,515")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "65",
  "class": "progress-bar bg-gradient-success",
  style: {
    "width": "65%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "summary-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-credit-card"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1",
  y: "4",
  width: "22",
  height: "16",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "1",
  y1: "10",
  x2: "23",
  y2: "10"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "summary-count"
}, "$55,085")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "80",
  "class": "progress-bar bg-gradient-warning",
  style: {
    "width": "80%"
  }
})])])])])])])], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_19 = {
  "class": "widget widget-total-order"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg></div><div><div class=\"w-value\">3,192</div><div class=\"w-numeric-title\">Total Orders</div></div></div>", 1);

var _hoisted_21 = {
  "class": "widget-content p-0"
};
var _hoisted_22 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_23 = {
  "class": "widget widget-recent-activity"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Recent Activities")], -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "widget-content"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Updated"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Server Logs")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-primary outline-badge-primary icon-fill-primary"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "Just Now")])], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Send Mail to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "HR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Admin")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-success outline-badge-success icon-fill-success"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "2 min ago")])], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Backup "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Files EOD")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-danger outline-badge-danger icon-fill-danger"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "14:00")])], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Collect documents from "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Sara")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-dark outline-badge-dark icon-fill-dark"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "16:00")])], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Conference call with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Marketing Manager"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "In progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "17:00")])], -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-secondary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Rebooted Server"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-secondary outline-badge-secondary icon-fill-secondary"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "17:00")])], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Send contract details to Freelancer"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "18:00")])], -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Kelly want to increase the time of the project."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-dark outline-badge-dark icon-fill-dark"
}, "In Progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "19:00")])], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Server down for maintanence"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-success outline-badge-success icon-fill-success"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "19:00")])], -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-secondary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Malicious link detected"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-secondary outline-badge-secondary icon-fill-secondary"
}, "Block"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "20:00")])], -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Rebooted Server"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "23:00")])], -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Updated"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Server Logs")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-primary outline-badge-primary icon-fill-primary"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "Just Now")])], -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Send Mail to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "HR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Admin")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-success outline-badge-success icon-fill-success"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "2 min ago")])], -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Backup "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Files EOD")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-danger outline-badge-danger icon-fill-danger"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "14:00")])], -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Collect documents from "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Sara")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-dark outline-badge-dark icon-fill-dark"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "16:00")])], -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Conference call with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Marketing Manager"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "In progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "17:00")])], -1
/* HOISTED */
);

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"tm-action-btn\"><button type=\"button\" class=\"btn btn-default\"><span>View All</span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-right\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg></button></div>", 1);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-transaction\"><div class=\"widget-heading\"><h5>Transactions</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlTransactions\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlTransactions\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Edit Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Done</a></li></ul></div></div></div><div class=\"widget-content\"><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-info me-2 badge-info rounded-circle\"><span class=\"b-avatar-text\"><span>SP</span></span></span><div class=\"t-name\"><h4>Shaun Park</h4><p>10 Jan 1:00PM</p></div></div><div class=\"text-success\">+$36.11</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-warning me-2 badge-warning rounded-circle\"><span class=\"b-avatar-custom\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg></span></span><div class=\"t-name\"><h4>Electricity Bill</h4><p>04 Jan 1:00PM</p></div></div><div class=\"text-danger\">-$16.44</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-danger me-2 badge-danger rounded-circle\"><span class=\"b-avatar-text\"><span>AD</span></span></span><div class=\"t-name\"><h4>Amy Diaz</h4><p>31 Jan 1:00PM</p></div></div><div class=\"text-success\">+$66.44</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-secondary me-2 badge-secondary rounded-circle\"><span class=\"b-avatar-custom\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg></span></span><div class=\"t-name\"><h4>Netflix</h4><p>02 Feb 1:00PM</p></div></div><div class=\"text-danger\">-$32.00</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-info me-2 badge-info rounded-circle\"><span class=\"b-avatar-text\"><span>DA</span></span></span><div class=\"t-name\"><h4>Daisy Anderson</h4><p>15 Feb 1:00PM</p></div></div><div class=\"text-success\">+$10.08</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-danger me-2 badge-danger rounded-circle\"><span class=\"b-avatar-text\"><span>OG</span></span></span><div class=\"t-name\"><h4>Oscar Garner</h4><p>20 Feb 1:00PM</p></div></div><div class=\"text-danger\">-$22.00</div></div></div></div></div><div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-wallet-balance\"><div class=\"widget-heading d-block\"><div class=\"wallet-usr-info\"><div class=\"usr-name\"><span><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-32.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"admin-profile\" class=\"img-fluid\"> Alan Green</span></div><div class=\"add\"><span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span></div></div><div class=\"wallet-balance\"><p>Wallet Balance</p><h5><span class=\"w-currency\">$</span>2953</h5></div></div><div class=\"widget-amount\"><div class=\"w-a-info funds-received me-3\"><span>Received <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-up text-success float-end\"><polyline points=\"18 15 12 9 6 15\"></polyline></svg></span><p>$97.99</p></div><div class=\"w-a-info funds-spent\"><span>Spent <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-down text-danger float-end\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg></span><p>$53.00</p></div></div><div class=\"widget-content\"><div class=\"bills-stats mb-4\"><span>Pending</span></div><div class=\"invoice-list\"><div class=\"inv-detail mb-4\"><div class=\"info-detail-1\"><p>Netflix</p><p><span class=\"w-currency\">$</span> <span class=\"bill-amount\">13.85</span></p></div><div class=\"info-detail-2\"><p>BlueHost VPN</p><p><span class=\"w-currency\">$</span> <span class=\"bill-amount\">15.66</span></p></div></div><div class=\"inv-action\"><a href=\"javascript:;\" class=\"btn view-details btn-outline-secondary\">View Details</a><a href=\"javascript:;\" class=\"btn pay-now btn-outline-success\">Pay Now $29.51</a></div></div></div></div></div><div class=\"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-recent-orders\"><div class=\"widget-heading\"><h5>Recent Orders</h5></div><div class=\"widget-content table-responsive\"><table class=\"table\"><thead><tr><th><div class=\"th-content\">Customer</div></th><th><div class=\"th-content\">Product</div></th><th><div class=\"th-content\">Invoice</div></th><th><div class=\"th-content th-heading\">Price</div></th><th><div class=\"th-content\">Status</div></th></tr></thead><tbody><tr><td><div class=\"td-content\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-13.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><span>Luke Ivory</span></div></td><td><div class=\"td-content text-primary\">Headphone</div></td><td><div class=\"td-content\">#46894</div></td><td><div class=\"td-content\"><span>$56.07</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-success\">Paid</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-7.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><span>Andy King</span></div></td><td><div class=\"td-content text-warning\">Nike Sport</div></td><td><div class=\"td-content\">#76894</div></td><td><div class=\"td-content\"><span>$88.00</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-primary\">Shipped</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-10.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><span>Laurie Fox</span></div></td><td><div class=\"td-content text-danger\">Sunglasses</div></td><td><div class=\"td-content\">#66894</div></td><td><div class=\"td-content\"><span>$126.04</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-success\">Paid</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-5.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><span>Ryan Collins</span></div></td><td><div class=\"td-content text-warning\">Sport</div></td><td><div class=\"td-content\">#89891</div></td><td><div class=\"td-content\"><span>$108.09</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-primary\">Shipped</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-4.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><span>Irene Collins</span></div></td><td><div class=\"td-content text-primary\">Speakers</div></td><td><div class=\"td-content\">#75844</div></td><td><div class=\"td-content\"><span>$84.00</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-danger\">Pending</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-11.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><span>Sonia Shaw</span></div></td><td><div class=\"td-content text-danger\">Watch</div></td><td><div class=\"td-content\">#76844</div></td><td><div class=\"td-content\"><span>$110.00</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-success\">Paid</span></div></td></tr></tbody></table></div></div></div><div class=\"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-top-selling-products\"><div class=\"widget-heading\"><h5>Top Selling Product</h5></div><div class=\"widget-content table-responsive\"><table class=\"table\"><thead><tr><th><div class=\"th-content\">Product</div></th><th><div class=\"th-content th-heading\">Price</div></th><th><div class=\"th-content th-heading\">Discount</div></th><th><div class=\"th-content\">Sold</div></th><th><div class=\"th-content\">Source</div></th></tr></thead><tbody><tr><td><div class=\"td-content d-flex\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-headphones.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Headphone</p><p class=\"prd-category text-primary\">Digital</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$168.09</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$60.09</span></div></td><td><div class=\"td-content\">170</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-danger\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Direct</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-shoes.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Shoes</p><p class=\"prd-category text-warning\">Faishon</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$108.09</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$47.09</span></div></td><td><div class=\"td-content\">130</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Google</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-watch.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Watch</p><p class=\"prd-category text-danger\">Accessories</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$88.00</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$20.00</span></div></td><td><div class=\"td-content\">66</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-warning\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Ads</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-laptop.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Laptop</p><p class=\"prd-category text-primary\">Digital</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$110.00</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$33.00</span></div></td><td><div class=\"td-content\">35</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-info\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Email</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product-camera.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Camera</p><p class=\"prd-category text-primary\">Digital</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$126.04</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$26.04</span></div></td><td><div class=\"td-content\">30</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-secondary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Referral</a></div></td></tr></tbody></table></div></div></div>", 4);

var _hoisted_47 = {
  "class": "col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_48 = {
  "class": "widget widget-statistics"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Statistics</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlStatistics\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlStatistics\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Download</a></li></ul></div></div></div>", 1);

var _hoisted_50 = {
  "class": "widget-content"
};
var _hoisted_51 = {
  "class": "row"
};
var _hoisted_52 = {
  "class": "col-6"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-detail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-title"
}, "Total Visits"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-stats"
}, "423,964")], -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "col-6"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-detail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-title"
}, "Paid Visits"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-stats"
}, "7,929")], -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget widget-expenses"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "task-action"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown btn-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  id: "ddlExpenses",
  "class": "btn dropdown-toggle btn-icon-only",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
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
  "class": "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "ddlExpenses"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "This Week")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Last Week")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Last Month")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "value"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $ 45,141 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "this week "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-trending-up"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "23 6 13.5 15.5 8.5 10.5 1 18"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "17 6 23 6 23 12"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-progress-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "57",
  "class": "progress-bar bg-gradient-secondary",
  style: {
    "width": "57%"
  }
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, "57%")])])])], -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-total-balance\"><div class=\"widget-content\"><div class=\"account-box\"><div class=\"info\"><div class=\"inv-title\"><h5>Total Balance</h5></div><div class=\"inv-balance-info\"><p class=\"inv-balance\">$ 41,741.42</p><span class=\"inv-stats balance-credited\">+ 2453</span></div></div><div class=\"acc-action\"><div><a href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></a><a href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-credit-card\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line></svg></a></div><a href=\"javascript:void(0);\">Upgrade</a></div></div></div></div></div>", 1);

var _hoisted_58 = {
  "class": "col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_59 = {
  "class": "widget widget-unique-visitors"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Unique Visitors</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlVisitors\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlVisitors\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Update</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Download</a></li></ul></div></div></div>", 1);

var _hoisted_61 = {
  "class": "widget-content"
};
var _hoisted_62 = {
  "class": "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_63 = {
  "class": "widget widget-active-log"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Activity Log</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlActivity\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlActivity\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View All</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Read</a></li></ul></div></div></div>", 1);

var _hoisted_65 = {
  "class": "widget-content"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-shadow-top"
}, null, -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "timeline-line"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-secondary"
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
  "class": "feather feather-plus"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New project created : "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javscript:void(0);"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "[Cork Admin Template]")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "27 Feb, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-success"
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
  "class": "feather feather-mail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "22,6 12,13 2,6"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Mail sent to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "HR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Admin")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "28 Feb, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-primary"
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
  "class": "feather feather-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "20 6 9 17 4 12"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Server Logs Updated")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "27 Feb, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-danger"
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
  "class": "feather feather-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "20 6 9 17 4 12"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Task Completed : "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javscript:void(0);"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "[Backup Files EOD]")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "01 Mar, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-warning"
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
  "class": "feather feather-file"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "13 2 13 9 20 9"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Documents Submitted from "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Sara")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "10 Mar, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dark"
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
  "class": "feather feather-server"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "2",
  y: "14",
  width: "20",
  height: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "6",
  x2: "6",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "18",
  x2: "6",
  y2: "18"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Server rebooted successfully"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "06 Apr, 2020")])])], -1
/* HOISTED */
);

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-shadow-bottom"
}, null, -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget widget-visitor-by-browser"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Visitors by Browser")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "browser-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon icon-fill-primary"
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
  "class": "feather feather-chrome"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "21.17",
  y1: "8",
  x2: "12",
  y2: "8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3.95",
  y1: "6.06",
  x2: "8.54",
  y2: "14"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10.88",
  y1: "21.94",
  x2: "15.46",
  y2: "14"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Chrome"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "browser-count"
}, "65%")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "65",
  "class": "progress-bar bg-gradient-primary",
  style: {
    "width": "65%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "browser-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon icon-fill-danger"
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
  "class": "feather feather-compass"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Safari"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "browser-count"
}, "25%")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "35",
  "class": "progress-bar bg-gradient-danger",
  style: {
    "width": "35%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "browser-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon icon-fill-warning"
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
  "class": "feather feather-globe"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Others"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "browser-count"
}, "15%")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "15",
  "class": "progress-bar bg-gradient-warning",
  style: {
    "width": "15%"
  }
})])])])])])])], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12"
};
var _hoisted_71 = {
  "class": "row widget-statistic"
};
var _hoisted_72 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
};
var _hoisted_73 = {
  "class": "widget"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-title\"><div class=\"w-icon icon-fill-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg></div><div><p class=\"w-value\">31.6K</p><h5>Followers</h5></div></div></div>", 1);

var _hoisted_75 = {
  "class": "widget-content"
};
var _hoisted_76 = {
  "class": "w-chart"
};
var _hoisted_77 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
};
var _hoisted_78 = {
  "class": "widget"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-title\"><div class=\"w-icon icon-fill-danger\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-link\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path></svg></div><div><p class=\"w-value\">1,900</p><h5>Referral</h5></div></div></div>", 1);

var _hoisted_80 = {
  "class": "widget-content"
};
var _hoisted_81 = {
  "class": "w-chart"
};
var _hoisted_82 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
};
var _hoisted_83 = {
  "class": "widget"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-title\"><div class=\"w-icon icon-fill-success\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-circle\"><path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path></svg></div><div><p class=\"w-value\">18.2%</p><h5>Engagement</h5></div></div></div>", 1);

var _hoisted_85 = {
  "class": "widget-content"
};
var _hoisted_86 = {
  "class": "w-chart"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-card-one\"><div class=\"widget-heading\"><div class=\"media\"><div class=\"media-aside align-self-start\"><div class=\"w-img\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-19.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"></div></div><div class=\"media-body\"><h6>Jimmy Turner</h6><p class=\"meta-date-time\">Monday, Nov 18</p></div></div></div><div class=\"widget-content\"><p>&quot;Duis aute irure dolor&quot; in reprehenderit in voluptate velit esse cillum &quot;dolore eu fugiat&quot; nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p><div class=\"w-action\"><div class=\"card-like\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-thumbs-up\"><path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path></svg><span>551 Likes</span></div><div class=\"read-more\"><a href=\"javascript:void(0);\">Read More <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg></a></div></div></div></div></div><div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-card-two\"><div class=\"widget-heading\"><div class=\"media\"><div class=\"media-aside align-self-start\"><div class=\"w-img\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/g-8.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"></div></div><div class=\"media-body\"><h6>Dev Summit - New York</h6><p class=\"meta-date-time\">Bronx, NY</p></div></div></div><div class=\"widget-content\"><h5>4 Members Going</h5><div class=\"img-group\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-19.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-6.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-8.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"><img src=\"" + Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-3.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) + "\" alt=\"avatar\"></div><a href=\"javascript:;\" class=\"btn btn-secondary\">View Details</a></div></div></div>", 2);

var _hoisted_89 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_90 = {
  "class": "widget widget-card-three"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><a href=\"javascript:void(0)\" class=\"task-info\"><div class=\"usr-avatar\"><span>FD</span></div><div class=\"w-title\"><h5>Figma Design</h5><span>Design Reset</span></div></a><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlDesign\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlDesign\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View Project</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Edit Project</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Done</a></li></ul></div></div></div>", 1);

var _hoisted_92 = {
  "class": "widget-content"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!", -1
/* HOISTED */
);

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-data"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "task-count"
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
  "class": "feather feather-check-square"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 11 12 14 22 4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "5 Tasks")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "86.2%")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "65",
  "class": "progress-bar bg-primary",
  style: {
    "width": "65%"
  }
})])], -1
/* HOISTED */
);

var _hoisted_95 = {
  "class": "meta-info"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "due-time"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-clock"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 6 12 12 16 14"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 3 Days Left ")])], -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "avatar--group"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "b-avatar avatar more-group badge-default rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "b-avatar-custom"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "avatar-title"
}, "+6")])], -1
/* HOISTED */
);

var _hoisted_99 = {
  "class": "b-avatar avatar badge-default rounded"
};
var _hoisted_100 = {
  "class": "b-avatar-img"
};
var _hoisted_101 = ["src"];
var _hoisted_102 = {
  "class": "b-avatar avatar badge-default rounded"
};
var _hoisted_103 = {
  "class": "b-avatar-img"
};
var _hoisted_104 = ["src"];
var _hoisted_105 = {
  "class": "b-avatar avatar badge-default rounded"
};
var _hoisted_106 = {
  "class": "b-avatar-img"
};
var _hoisted_107 = ["src"];

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing\"><div class=\"widget widget-summary-1\"><div class=\"widget-heading\"><h5>Summary</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlSummary\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlSummary\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Edit Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Done</a></li></ul></div></div></div><div class=\"widget-content\"><div class=\"order-summary\"><div class=\"summary-list summary-income\"><div class=\"summery-info\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-bag\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg></div><div class=\"w-summary-details\"><div class=\"w-summary-info\"><h6>Income <span class=\"summary-count\">$92,600 </span></h6><p class=\"summary-average\">90%</p></div></div></div></div><div class=\"summary-list summary-profit\"><div class=\"summery-info\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-tag\"><path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7\" y2=\"7\"></line></svg></div><div class=\"w-summary-details\"><div class=\"w-summary-info\"><h6>Profit <span class=\"summary-count\">$37,515</span></h6><p class=\"summary-average\">65%</p></div></div></div></div><div class=\"summary-list summary-expenses\"><div class=\"summery-info\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-credit-card\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line></svg></div><div class=\"w-summary-details\"><div class=\"w-summary-info\"><h6>Expenses <span class=\"summary-count\">$55,085</span></h6><p class=\"summary-average\">80%</p></div></div></div></div></div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_perfect_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("perfect-scrollbar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, $setup.revenue_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "325",
    type: "area",
    options: $setup.revenue_options,
    series: $setup.revenue_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$setup.sales_donut_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "460",
    type: "donut",
    options: $setup.sales_donut_options,
    series: $setup.sales_donut_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$setup.daily_sales_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "bar",
    options: $setup.daily_sales_options,
    series: $setup.daily_sales_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [$setup.total_orders_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "290",
    type: "area",
    options: $setup.total_orders_options,
    series: $setup.total_orders_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "timeline-line"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_42])])]), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, $setup.total_visit_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "58",
    type: "line",
    options: $setup.total_visit_options,
    series: $setup.total_visit_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, $setup.paid_visit_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "58",
    type: "line",
    options: $setup.paid_visit_options,
    series: $setup.paid_visit_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [$setup.unique_visitor_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "350",
    type: "bar",
    options: $setup.unique_visitor_options,
    series: $setup.unique_visitor_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "mt-container mx-auto"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_67];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_68])])]), _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [$setup.followers_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "area",
    options: $setup.followers_options,
    series: $setup.followers_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [$setup.referral_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "area",
    options: $setup.referral_options,
    series: $setup.referral_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [$setup.engagement_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "area",
    options: $setup.engagement_options,
    series: $setup.engagement_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-8.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    alt: "avatar"
  }, null, 8
  /* PROPS */
  , _hoisted_101)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-12.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    alt: "avatar"
  }, null, 8
  /* PROPS */
  , _hoisted_104)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile-19.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    alt: "avatar"
  }, null, 8
  /* PROPS */
  , _hoisted_107)])])])])])])]), _hoisted_108])]);
}

/***/ }),

/***/ "./resources/js/src/views/widgets.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/widgets.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.vue?vue&type=template&id=6b4101d6 */ "./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6");
/* harmony import */ var _widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/widgets.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widgets.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widgets.vue?vue&type=template&id=6b4101d6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6");


/***/ })

}]);