"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-sweetalert"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/sweetalert.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/sweetalert.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/scrollspyNav.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/sass/components/custom-sweetalert.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/plugins/highlight.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'sweetalert',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/composables/use-meta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      title: 'Sweet Alert'
    });
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    var toggleCode = function toggleCode(name) {
      if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter(function (d) {
          return d != name;
        });
      } else {
        code_arr.value.push(name);
      }
    };

    var showAlert = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
        var ipAPI, steps, swalQueueStep, values, currentStep, result, timerInterval, swalWithBootstrapButtons, toast;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(type === 1)) {
                  _context.next = 4;
                  break;
                }

                new window.Swal({
                  title: 'Saved succesfully',
                  padding: '2em'
                });
                _context.next = 42;
                break;

              case 4:
                if (!(type === 2)) {
                  _context.next = 8;
                  break;
                }

                new window.Swal({
                  icon: 'success',
                  title: 'Good job!',
                  text: 'You clicked the!',
                  padding: '2em'
                });
                _context.next = 42;
                break;

              case 8:
                if (!(type === 3)) {
                  _context.next = 13;
                  break;
                }

                ipAPI = 'https://api.ipify.org?format=json';
                new window.Swal({
                  title: 'Your public IP',
                  confirmButtonText: 'Show my public IP',
                  text: 'Your public IP will be received ' + 'via AJAX request',
                  showLoaderOnConfirm: true,
                  preConfirm: function preConfirm() {
                    return fetch(ipAPI).then(function (response) {
                      return response.json();
                    }).then(function (data) {
                      new window.Swal({
                        title: data.ip
                      });
                    })["catch"](function () {
                      new window.Swal({
                        type: 'error',
                        title: 'Unable to get your public IP'
                      });
                    });
                  }
                });
                _context.next = 42;
                break;

              case 13:
                if (!(type === 4)) {
                  _context.next = 17;
                  break;
                }

                new window.Swal({
                  icon: 'question',
                  title: 'The Internet?',
                  text: 'That thing is still around?',
                  padding: '2em'
                });
                _context.next = 42;
                break;

              case 17:
                if (!(type === 5)) {
                  _context.next = 41;
                  break;
                }

                steps = ['1', '2', '3'];
                swalQueueStep = window.Swal.mixin({
                  confirmButtonText: 'Next →',
                  showCancelButton: true,
                  progressSteps: steps,
                  input: 'text',
                  inputAttributes: {
                    required: true
                  },
                  validationMessage: 'This field is required',
                  padding: '2em'
                });
                values = [];
                currentStep = 0;

              case 22:
                if (!(currentStep < steps.length)) {
                  _context.next = 38;
                  break;
                }

                _context.next = 25;
                return swalQueueStep.fire({
                  title: "Question ".concat(steps[currentStep]),
                  text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',
                  inputValue: values[currentStep],
                  showCancelButton: currentStep > 0,
                  currentProgressStep: currentStep
                });

              case 25:
                result = _context.sent;

                if (!result.value) {
                  _context.next = 31;
                  break;
                }

                values[currentStep] = result.value;
                currentStep++;
                _context.next = 36;
                break;

              case 31:
                if (!(result.dismiss === new window.Swal.DismissReason.cancel())) {
                  _context.next = 35;
                  break;
                }

                currentStep--;
                _context.next = 36;
                break;

              case 35:
                return _context.abrupt("break", 38);

              case 36:
                _context.next = 22;
                break;

              case 38:
                if (currentStep === steps.length) {
                  window.Swal.fire({
                    title: 'All done!',
                    padding: '2em',
                    html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                    confirmButtonText: 'Lovely!'
                  });
                }

                _context.next = 42;
                break;

              case 41:
                if (type === 6) {
                  new window.Swal({
                    title: 'Custom animation with Animate.css',
                    animation: false,
                    customClass: 'animated tada',
                    padding: '2em'
                  });
                } else if (type === 7) {
                  new window.Swal({
                    title: 'Auto close alert!',
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: function didOpen() {
                      window.Swal.showLoading();
                      var b = window.Swal.getHtmlContainer().querySelector('b');
                      timerInterval = setInterval(function () {
                        b.textContent = window.Swal.getTimerLeft();
                      }, 100);
                    },
                    willClose: function willClose() {
                      clearInterval(timerInterval);
                    }
                  }).then(function (result) {
                    if (result.dismiss === window.Swal.DismissReason.timer) {
                      console.log('I was closed by the timer');
                    }
                  });
                } else if (type === 8) {
                  new window.Swal({
                    title: 'Sweet!',
                    text: 'Modal with a custom image.',
                    imageUrl: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/thumbs-up.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    imageWidth: 224,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false,
                    padding: '2em'
                  });
                } else if (type === 9) {
                  new window.Swal({
                    icon: 'info',
                    title: '<i>HTML</i> <u>example</u>',
                    html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
                    cancelButtonAriaLabel: 'Thumbs down',
                    padding: '2em'
                  });
                } else if (type === 10) {
                  new window.Swal({
                    icon: 'warning',
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    padding: '2em'
                  }).then(function (result) {
                    if (result.value) {
                      new window.Swal('Deleted!', 'Your file has been deleted.', 'success');
                    }
                  });
                } else if (type === 11) {
                  swalWithBootstrapButtons = window.Swal.mixin({
                    confirmButtonClass: 'btn btn-secondary',
                    cancelButtonClass: 'btn btn-dark me-3',
                    buttonsStyling: false
                  });
                  swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true,
                    padding: '2em'
                  }).then(function (result) {
                    if (result.value) {
                      swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                    } else if (result.dismiss === window.Swal.DismissReason.cancel) {
                      swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                  });
                } else if (type === 12) {
                  new window.Swal({
                    title: 'Custom width, padding, background.',
                    width: 600,
                    padding: '7em',
                    customClass: 'background-modal',
                    background: '#fff url(' + __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/sweet-bg.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ') no-repeat 100% 100%'
                  });
                } else if (type === 13) {
                  new window.Swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>',
                    padding: '2em'
                  });
                } else if (type === 14) {
                  new window.Swal({
                    title: 'هل تريد الاستمرار؟',
                    confirmButtonText: 'نعم',
                    cancelButtonText: 'لا',
                    showCancelButton: true,
                    showCloseButton: true,
                    padding: '2em',
                    target: document.getElementById('rtl-container')
                  });
                } else if (type === 15) {
                  toast = window.Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    padding: '2em'
                  });
                  toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    padding: '2em'
                  });
                }

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function showAlert(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var __returned__ = {
      code_arr: code_arr,
      toggleCode: toggleCode,
      showAlert: showAlert,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
}, "Components")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Sweet Alerts")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  id: "navSection",
  "class": "nav sidenav"
};
var _hoisted_5 = {
  "class": "sidenav-content"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a href=\"#sweetalertbasic\" class=\"nav-link\">Basic</a><a href=\"#sweetalertmessage\" class=\"nav-link\">Message</a><a href=\"#sweetalertdynamic\" class=\"nav-link\">Dynamic</a><a href=\"#sweetalertatitlewithtext\" class=\"nav-link\">A title with text</a><a href=\"#sweetalertchainingmodals\" class=\"nav-link\">Chaining modals</a><a href=\"#sweetalertanimation\" class=\"nav-link\">Animation</a><a href=\"#sweetalertautoclosetimer\" class=\"nav-link\">Auto close timer</a><a href=\"#sweetalertcustomimage\" class=\"nav-link\">Custom image</a><a href=\"#sweetalertcustomhtml\" class=\"nav-link\">Custom HTML</a><a href=\"#sweetalertwarningmessage\" class=\"nav-link\">Warning message</a><a href=\"#sweetalertcancel\" class=\"nav-link\">Cancel</a><a href=\"#sweetalertcustomstyle\" class=\"nav-link\">Custom Style</a><a href=\"#sweetalertfooter\" class=\"nav-link\">Footer</a><a href=\"#sweetalertrtl\" class=\"nav-link\">RTL</a><a href=\"#sweetalertmixin\" class=\"nav-link\">Mixin</a>", 15);

var _hoisted_21 = [_hoisted_6];

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row layout-top-spacing\"><div class=\"col-12\"><div class=\"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bell\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg> Documentation: <a target=\"_blank\" href=\"https://www.npmjs.com/package/vue-sweetalert2\" class=\"text-info\"> https://www.npmjs.com/package/vue-sweetalert2 </a></div></div></div>", 1);

var _hoisted_23 = {
  "class": "row layout-top-spacing"
};
var _hoisted_24 = {
  id: "sweetalertbasic",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_25 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Basic message")])])], -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "panel-body text-center"
};
var _hoisted_28 = {
  "class": "code-section-container show-code"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_30 = [_hoisted_29];
var _hoisted_31 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(1)\">Basic message</button>\n\n new window.Swal({\n    title: 'Saved succesfully',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_33 = {
  id: "sweetalertmessage",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_34 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Success message")])])], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "panel-body text-center"
};
var _hoisted_37 = {
  "class": "code-section-container show-code"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_39 = [_hoisted_38];
var _hoisted_40 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(2)\">Success message!</button>\n\nnew window.Swal({\n    icon: 'success',\n    title: 'Good job!',\n    text: 'You clicked the!',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_42 = {
  id: "sweetalertdynamic",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_43 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Dynamic queue")])])], -1
/* HOISTED */
);

var _hoisted_45 = {
  "class": "panel-body text-center"
};
var _hoisted_46 = {
  "class": "code-section-container show-code"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_48 = [_hoisted_47];
var _hoisted_49 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(3)\">Dynamic queue</button>\n\nconst ipAPI = 'https://api.ipify.org?format=json';\nnew window.Swal({\n    title: 'Your public IP',\n    confirmButtonText: 'Show my public IP',\n    text: 'Your public IP will be received ' + 'via AJAX request',\n    showLoaderOnConfirm: true,\n    preConfirm: () => {\n        return fetch(ipAPI)\n            .then(response => {\n                return response.json();\n            })\n            .then(data => {\n                new window.Swal({\n                    title: data.ip\n                });\n            })\n            .catch(() => {\n                new window.Swal({\n                    type: 'error',\n                    title: 'Unable to get your public IP'\n                });\n            });\n    }\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_51 = {
  id: "sweetalertatitlewithtext",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_52 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "A title with a text under")])])], -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "panel-body text-center"
};
var _hoisted_55 = {
  "class": "code-section-container show-code"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_57 = [_hoisted_56];
var _hoisted_58 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(4)\">Title & text</button>\n\nnew window.Swal({\n    icon: 'question',\n    title: 'The Internet?',\n    text: 'That thing is still around?',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_60 = {
  id: "sweetalertchainingmodals",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_61 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Chaining modals (queue)")])])], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "panel-body text-center"
};
var _hoisted_64 = {
  "class": "code-section-container show-code"
};

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_66 = [_hoisted_65];
var _hoisted_67 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(5)\">Chaining modals (queue)</button>\n\nconst steps = ['1', '2', '3'];\nconst swalQueueStep =  window.Swal.mixin({\n    confirmButtonText: 'Next →',\n    showCancelButton: true,\n    progressSteps: steps,\n    input: 'text',\n    inputAttributes: {\n        required: true\n    },\n    validationMessage: 'This field is required',\n    padding: '2em'\n});\n\nconst values = [];\nlet currentStep;\n\nfor (currentStep = 0; currentStep < steps.length; ) {\n    const result = await swalQueueStep.fire({\n        title: `Question ${steps[currentStep]}`,\n        text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',\n        inputValue: values[currentStep],\n        showCancelButton: currentStep > 0,\n        currentProgressStep: currentStep\n    });\n\n    if (result.value) {\n        values[currentStep] = result.value;\n        currentStep++;\n    } else if (result.dismiss === new window.Swal.DismissReason.cancel) {\n        currentStep--;\n    } else {\n        break;\n    }\n}\n\nif (currentStep === steps.length) {\n    new window.Swal.fire({\n        title: 'All done!',\n        padding: '2em',\n        html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',\n        confirmButtonText: 'Lovely!'\n    });\n}\n                                        ", -1
/* HOISTED */
);

var _hoisted_69 = {
  id: "sweetalertanimation",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_70 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Custom animation")])])], -1
/* HOISTED */
);

var _hoisted_72 = {
  "class": "panel-body text-center"
};
var _hoisted_73 = {
  "class": "code-section-container show-code"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_75 = [_hoisted_74];
var _hoisted_76 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(6)\">Custom animation</button>\n\nnew window.Swal({\n    title: 'Custom animation with Animate.css',\n    animation: false,\n    customClass: 'animated tada',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_78 = {
  id: "sweetalertautoclosetimer",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_79 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Message with auto close timer")])])], -1
/* HOISTED */
);

var _hoisted_81 = {
  "class": "panel-body text-center"
};
var _hoisted_82 = {
  "class": "code-section-container show-code"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_84 = [_hoisted_83];
var _hoisted_85 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(7)\">Message timer</button>\n\nlet timerInterval;\n\nnew window.Swal({\n    title: 'Auto close alert!',\n    html: 'I will close in <b></b> milliseconds.',\n    timer: 2000,\n    timerProgressBar: true,\n    didOpen: () => {\n        new window.Swal.showLoading();\n        const b = new window.Swal.getHtmlContainer().querySelector('b');\n        timerInterval = setInterval(() => {\n            b.textContent = new window.Swal.getTimerLeft();\n        }, 100);\n    },\n    willClose: () => {\n        clearInterval(timerInterval);\n    }\n}).then((result)=> {\n    if (result.dismiss === new window.Swal.DismissReason.timer) {\n        console.log('I was closed by the timer');\n    }\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_87 = {
  id: "sweetalertcustomimage",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_88 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Message with custom image")])])], -1
/* HOISTED */
);

var _hoisted_90 = {
  "class": "panel-body text-center"
};
var _hoisted_91 = {
  "class": "code-section-container show-code"
};

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_93 = [_hoisted_92];
var _hoisted_94 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(8)\">Message with custom image</button>\n\nnew window.Swal({\n    title: 'Sweet!',\n    text: 'Modal with a custom image.',\n    imageUrl: require('@/assets/images/thumbs-up.jpg'),\n    imageWidth: 224,\n    imageHeight: 200,\n    imageAlt: 'Custom image',\n    animation: false,\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_96 = {
  id: "sweetalertcustomhtml",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_97 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Custom HTML description and buttons")])])], -1
/* HOISTED */
);

var _hoisted_99 = {
  "class": "panel-body text-center"
};
var _hoisted_100 = {
  "class": "code-section-container show-code"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_102 = [_hoisted_101];
var _hoisted_103 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(9)\">Custom Description & buttons</button>\n\nnew window.Swal({\n    icon: 'info',\n    title: '<i>HTML</i> <u>example</u>',\n    html: 'You can use <b>bold text</b>, ' + '<a href=\"//github.com\">links</a> ' + 'and other HTML tags',\n    showCloseButton: true,\n    showCancelButton: true,\n    focusConfirm: false,\n    confirmButtonText: '<i class=\"flaticon-checked-1\"></i> Great!',\n    confirmButtonAriaLabel: 'Thumbs up, great!',\n    cancelButtonText: '<i class=\"flaticon-cancel-circle\"></i> Cancel',\n    cancelButtonAriaLabel: 'Thumbs down',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_105 = {
  id: "sweetalertwarningmessage",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_106 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Warning message, with \"Confirm\" button")])])], -1
/* HOISTED */
);

var _hoisted_108 = {
  "class": "panel-body text-center"
};
var _hoisted_109 = {
  "class": "code-section-container show-code"
};

var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Confirm", -1
/* HOISTED */
);

var _hoisted_111 = [_hoisted_110];
var _hoisted_112 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(10)\">Confirm</button>\n\nnew window.Swal({\n    title: 'Are you sure?',\n    text: \"You won't be able to revert this!\",\n    type: 'warning',\n    showCancelButton: true,\n    confirmButtonText: 'Delete',\n    padding: '2em'\n}).then(result => {\n    if (result.value) {\n        new window.Swal('Deleted!', 'Your file has been deleted.', 'success');\n    }\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_114 = {
  id: "sweetalertcancel",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_115 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Execute something else for \"Cancel\".")])])], -1
/* HOISTED */
);

var _hoisted_117 = {
  "class": "panel-body text-center"
};
var _hoisted_118 = {
  "class": "code-section-container show-code"
};

var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_120 = [_hoisted_119];
var _hoisted_121 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(11)\">Addition else for \"Cancel\".</button>\n\nconst swalWithBootstrapButtons =  window.Swal.mixin({\n    confirmButtonClass: 'btn btn-secondary',\n    cancelButtonClass: 'btn btn-dark me-3',\n    buttonsStyling: false\n});\nswalWithBootstrapButtons\n    .fire({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        cancelButtonText: 'No, cancel!',\n        reverseButtons: true,\n        padding: '2em'\n    })\n    .then(result => {\n        if (result.value) {\n            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');\n        } else if (result.dismiss === new window.Swal.DismissReason.cancel) {\n            swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');\n        }\n    });\n                                        ", -1
/* HOISTED */
);

var _hoisted_123 = {
  id: "sweetalertcustomstyle",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_124 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "A message with custom width, padding and background")])])], -1
/* HOISTED */
);

var _hoisted_126 = {
  "class": "panel-body text-center"
};
var _hoisted_127 = {
  "class": "code-section-container show-code"
};

var _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_129 = [_hoisted_128];
var _hoisted_130 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(12)\">Custom Message</button>\n\nnew window.Swal({\n    title: 'Custom width, padding, background.',\n    width: 600,\n    padding: '7em',\n    customClass: 'background-modal',\n    background: '#fff url(' + require('@/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_132 = {
  id: "sweetalertfooter",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_133 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "With Footer")])])], -1
/* HOISTED */
);

var _hoisted_135 = {
  "class": "panel-body text-center"
};
var _hoisted_136 = {
  "class": "code-section-container show-code"
};

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_138 = [_hoisted_137];
var _hoisted_139 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(13)\">With Footer</button>\n\nnew window.Swal({\n    type: 'error',\n    title: 'Oops...',\n    text: 'Something went wrong!',\n    footer: '<a href>Why do I have this issue?</a>',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_141 = {
  id: "sweetalertrtl",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_142 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_143 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "RTL Support")])])], -1
/* HOISTED */
);

var _hoisted_144 = {
  "class": "panel-body text-center"
};
var _hoisted_145 = {
  "class": "code-section-container show-code"
};

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_147 = [_hoisted_146];
var _hoisted_148 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(14)\">RTL</button>\n\nnew window.Swal({\n    title: 'هل تريد الاستمرار؟',\n    confirmButtonText: 'نعم',\n    cancelButtonText: 'لا',\n    showCancelButton: true,\n    showCloseButton: true,\n    padding: '2em',\n    target: document.getElementById('rtl-container')\n});\n                                        ", -1
/* HOISTED */
);

var _hoisted_150 = {
  id: "sweetalertmixin",
  "class": "col-lg-12 col-12 layout-spacing"
};
var _hoisted_151 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Mixin")])])], -1
/* HOISTED */
);

var _hoisted_153 = {
  "class": "panel-body text-center"
};
var _hoisted_154 = {
  "class": "code-section-container show-code"
};

var _hoisted_155 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Code", -1
/* HOISTED */
);

var _hoisted_156 = [_hoisted_155];
var _hoisted_157 = {
  key: 0,
  "class": "code-section text-start"
};

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, "<button variant=\"primary\" class=\"me-2 btn\" @click=\"showAlert(15)\">Mixin</button>\n\nconst toast =  window.Swal.mixin({\n    toast: true,\n    position: 'top-end',\n    showConfirmButton: false,\n    timer: 3000,\n    padding: '2em'\n});\ntoast.fire({\n    icon: 'success',\n    title: 'Signed in successfully',\n    padding: '2em'\n});\n                                        ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_scroll_spy_active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-active");

  var _directive_scroll_spy_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy-link");

  var _directive_scroll_spy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("scroll-spy");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_21)), [[_directive_scroll_spy_active], [_directive_scroll_spy_link]])]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.showAlert(1);
    })
  }, "Basic message"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleCode('code1');
    })
  }, _hoisted_30), $setup.code_arr.includes('code1') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_32];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.showAlert(2);
    })
  }, "Success message!"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.toggleCode('code2');
    })
  }, _hoisted_39), $setup.code_arr.includes('code2') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_41];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.showAlert(3);
    })
  }, "Dynamic queue"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.toggleCode('code3');
    })
  }, _hoisted_48), $setup.code_arr.includes('code3') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_50];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.showAlert(4);
    })
  }, "Title & text"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $setup.toggleCode('code4');
    })
  }, _hoisted_57), $setup.code_arr.includes('code4') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_59];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.showAlert(5);
    })
  }, "Chaining modals (queue)"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.toggleCode('code5');
    })
  }, _hoisted_66), $setup.code_arr.includes('code5') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_68];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $setup.showAlert(6);
    })
  }, "Custom animation"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return $setup.toggleCode('code6');
    })
  }, _hoisted_75), $setup.code_arr.includes('code6') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_77];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[12] || (_cache[12] = function ($event) {
      return $setup.showAlert(7);
    })
  }, "Message timer"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $setup.toggleCode('code7');
    })
  }, _hoisted_84), $setup.code_arr.includes('code7') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_86];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $setup.showAlert(8);
    })
  }, "Message with custom image"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[15] || (_cache[15] = function ($event) {
      return $setup.toggleCode('code8');
    })
  }, _hoisted_93), $setup.code_arr.includes('code8') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_95];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[16] || (_cache[16] = function ($event) {
      return $setup.showAlert(9);
    })
  }, "Custom Description & buttons"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $setup.toggleCode('code9');
    })
  }, _hoisted_102), $setup.code_arr.includes('code9') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_104];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [_hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $setup.showAlert(10);
    })
  }, "Confirm"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[19] || (_cache[19] = function ($event) {
      return $setup.toggleCode('code10');
    })
  }, _hoisted_111), $setup.code_arr.includes('code10') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_113];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [_hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[20] || (_cache[20] = function ($event) {
      return $setup.showAlert(11);
    })
  }, "Addition else for \"Cancel\"."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[21] || (_cache[21] = function ($event) {
      return $setup.toggleCode('code11');
    })
  }, _hoisted_120), $setup.code_arr.includes('code11') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_122];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[22] || (_cache[22] = function ($event) {
      return $setup.showAlert(12);
    })
  }, "Custom Message"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[23] || (_cache[23] = function ($event) {
      return $setup.toggleCode('code12');
    })
  }, _hoisted_129), $setup.code_arr.includes('code12') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_131];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[24] || (_cache[24] = function ($event) {
      return $setup.showAlert(13);
    })
  }, "With Footer"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return $setup.toggleCode('code13');
    })
  }, _hoisted_138), $setup.code_arr.includes('code13') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_140];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [_hoisted_143, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[26] || (_cache[26] = function ($event) {
      return $setup.showAlert(14);
    })
  }, "RTL"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[27] || (_cache[27] = function ($event) {
      return $setup.toggleCode('code14');
    })
  }, _hoisted_147), $setup.code_arr.includes('code14') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_149];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [_hoisted_152, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary me-2 btn",
    onClick: _cache[28] || (_cache[28] = function ($event) {
      return $setup.showAlert(15);
    })
  }, "Mixin"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-default toggle-code-snippet",
    onClick: _cache[29] || (_cache[29] = function ($event) {
      return $setup.toggleCode('code15');
    })
  }, _hoisted_156), $setup.code_arr.includes('code15') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["highlight"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_158];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])), [[_directive_scroll_spy]])])]);
}

/***/ }),

/***/ "./resources/js/src/views/components/sweetalert.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/components/sweetalert.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sweetalert_vue_vue_type_template_id_21f42c2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sweetalert.vue?vue&type=template&id=21f42c2a */ "./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a");
/* harmony import */ var _sweetalert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sweetalert.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/components/sweetalert.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_MAMP_htdocs_cork_vue3_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_sweetalert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sweetalert_vue_vue_type_template_id_21f42c2a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/components/sweetalert.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/components/sweetalert.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/sweetalert.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sweetalert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sweetalert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sweetalert.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/sweetalert.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sweetalert_vue_vue_type_template_id_21f42c2a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_sweetalert_vue_vue_type_template_id_21f42c2a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./sweetalert.vue?vue&type=template&id=21f42c2a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a");


/***/ })

}]);