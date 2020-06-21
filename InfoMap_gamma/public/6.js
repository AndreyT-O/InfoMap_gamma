(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationUpdateComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/LocationUpdateComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_1__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_1__["VueperSlide"]
  },
  data: function data() {
    return {
      locationId: '',
      title: '',
      textarea: '',
      userId: '',
      images: [],
      newImages: [],
      deleteImages: [],
      previewImages: [],
      inputFiles: []
    };
  },
  methods: {
    /**
     * Method Vueper Slides
     */
    showNext: function showNext() {},

    /**
     * Method close information of lication
     */
    closeLocation: function closeLocation() {
      $('#closeForms').modal('show');
    },

    /**
     * Method delete images
     */
    deleteImage: function deleteImage(image) {
      this.images = this.images.filter(function (el) {
        return el != image;
      });
      image.name == undefined ? this.deleteImages.push(image) : this.inputFiles = this.inputFiles.filter(function (el) {
        return el.name == image.name;
      });
    },

    /**
     * Method see preview images
     */
    previewFiles: function previewFiles(e) {
      var _this = this;

      for (var _i = 0; _i < event.target.files.length; _i++) {
        this.inputFiles.push(event.target.files[_i]);
      }

      var file = e.target.files;

      for (var i = 0, f; f = file[i]; i++) {
        if (!f.type.match('image.*')) {
          alert("Image only please....");
        }

        var reader = new FileReader();
        var vue = this,
            name = f;

        reader.onload = function (theFile) {
          return function (e) {
            vue.images.push({
              name: name.name,
              image_url: e.target.result
            });
          };
        }(f);

        reader.readAsDataURL(f);
      }

      setTimeout(function () {
        _this.$refs.vueperslides1.goToSlide(-1); // console.log(this.inputFiles);
        // this.$refs.primary.sync( this.$refs.secondary.splide );

      }, 1000);
    },

    /**
     * Method update information location
     */
    updateLocation: function updateLocation() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2$$store$getters;

        var _iterator, _step, item;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $('.updateLocation').prop('disabled', true);

                if (!(_this2.inputFiles != null)) {
                  _context.next = 19;
                  break;
                }

                _iterator = _createForOfIteratorHelper(_this2.inputFiles);
                _context.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context.next = 11;
                  break;
                }

                item = _step.value;
                _context.next = 9;
                return _this2.uploadsFile(item);

              case 9:
                _context.next = 5;
                break;

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);

                _iterator.e(_context.t0);

              case 16:
                _context.prev = 16;

                _iterator.f();

                return _context.finish(16);

              case 19:
                _this2.$store.dispatch('UPDATE_LOCATION', {
                  url: '/InfoMap.com/user/map/location/',
                  id: _this2.locationId,
                  title: _this2.title,
                  text: _this2.textarea,
                  marker: (_this2$$store$getters = _this2.$store.getters.GET_NEW_MARKER) !== null && _this2$$store$getters !== void 0 ? _this2$$store$getters : null,
                  deleteImages: _this2.deleteImages,
                  newImages: _this2.newImages
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13, 16, 19]]);
      }))();
    },

    /**
     * Method add new image to base
     */
    uploadsFile: function uploadsFile(item) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var vue, form;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                vue = _this3;
                form = new FormData();
                form.append('image', item);
                _context2.next = 5;
                return axios.post('/InfoMap.com/uploads', form).then(function (data) {
                  vue.newImages.push(data.data);
                })["catch"](function (error) {
                  alert('error');
                  console.log(error);
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    /**
     * Watch vuex, location in base
     */
    '$store.getters.GET_LOCATION': {
      handler: function handler(search) {
        this.locationId = this.$store.getters.GET_LOCATION[0]['id'];
        this.title = this.$store.getters.GET_LOCATION[0]['title'];
        this.textarea = this.$store.getters.GET_LOCATION[0]['text'];
        this.images = this.$store.getters.GET_LOCATION[2];
      },
      deep: true,
      immediate: true
    },
    previewImages: function previewImages() {}
  },
  updated: function updated() {
    if (/^\s+|\s+$/g.test(this.title) || this.title == '' || /^\s+|\s+$/g.test(this.textarea) || this.textarea == '' || this.images.length == 0) {
      $('.updateLocation').prop('disabled', true);
    } else {
      $('.updateLocation').prop('disabled', false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationUpdateComponent.vue?vue&type=template&id=540180b4&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/LocationUpdateComponent.vue?vue&type=template&id=540180b4& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid p-0" }, [
    _c(
      "form",
      {
        attrs: {
          method: "POST",
          id: "createForm",
          enctype: "multipart/form-data",
          onsubmit: "return false;"
        }
      },
      [
        _vm.images
          ? _c(
              "div",
              { staticClass: "slider" },
              [
                _c(
                  "vueper-slides",
                  {
                    ref: "vueperslides1",
                    staticClass: "primary",
                    attrs: {
                      bullets: false,
                      "fixed-height": "300px",
                      progress: true
                    },
                    on: {
                      slide: function($event) {
                        _vm.$refs.vueperslides2 &&
                          _vm.$refs.vueperslides2.goToSlide(
                            $event.currentSlide.index,
                            { emit: false }
                          )
                      }
                    }
                  },
                  _vm._l(_vm.images, function(image, i) {
                    return _c("vueper-slide", {
                      key: i,
                      attrs: { image: image.image_url }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "vueper-slides",
                  {
                    ref: "vueperslides2",
                    staticClass: "thumbnails",
                    attrs: {
                      "dragging-distance": 50,
                      "visible-slides": 3,
                      "fixed-height": "100px",
                      bullets: false,
                      slideImageInside: true,
                      arrows: false
                    },
                    on: {
                      slide: function($event) {
                        _vm.$refs.vueperslides1 &&
                          _vm.$refs.vueperslides1.goToSlide(
                            $event.currentSlide.index,
                            { emit: false }
                          )
                      }
                    }
                  },
                  _vm._l(_vm.images, function(image, i) {
                    return _c("vueper-slide", {
                      key: i,
                      attrs: { image: image.image_url },
                      nativeOn: {
                        click: function($event) {
                          _vm.$refs.vueperslides2 &&
                            _vm.$refs.vueperslides2.goToSlide(i)
                        }
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "content",
                            fn: function() {
                              return [
                                _c("i", {
                                  staticClass: "fas fa-times deleteImg",
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteImage(image)
                                    }
                                  }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    })
                  }),
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "closeLocation col-12 col-md-5 col-lg-4 p-0" },
          [
            _c("i", {
              staticClass: "fas fa-arrow-alt-circle-left",
              on: { click: _vm.closeLocation }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "from-group container" }, [
          _c("div", { staticClass: "input-group mb-3" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "custom-file" }, [
              _c("input", {
                ref: "myFiles",
                staticClass: "custom-file-input",
                attrs: {
                  type: "file",
                  id: "file",
                  name: "image_url[]",
                  multiple: ""
                },
                on: { change: _vm.previewFiles }
              }),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "custom-file-label", attrs: { for: "file" } },
                [_vm._v("Вибрати картинку")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group container" }, [
          _c("label", { attrs: { for: "exampleInputEmail1" } }, [
            _vm._v("Заголовок")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.title,
                expression: "title"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "title",
              name: "title",
              placeholder: "Введіть....."
            },
            domProps: { value: _vm.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.title = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group container" }, [
          _c("label", { attrs: { for: "exampleFormControlTextarea1" } }, [
            _vm._v("Опис")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.textarea,
                expression: "textarea"
              }
            ],
            staticClass: "form-control",
            attrs: { id: "textarea", name: "text", rows: "3" },
            domProps: { value: _vm.textarea },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.textarea = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group text-center" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary mb-2 updateLocation",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  return _vm.updateLocation()
                }
              }
            },
            [_vm._v("Оновити")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Завантаження")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/LocationUpdateComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/user/LocationUpdateComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocationUpdateComponent_vue_vue_type_template_id_540180b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationUpdateComponent.vue?vue&type=template&id=540180b4& */ "./resources/js/components/user/LocationUpdateComponent.vue?vue&type=template&id=540180b4&");
/* harmony import */ var _LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationUpdateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/LocationUpdateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocationUpdateComponent_vue_vue_type_template_id_540180b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocationUpdateComponent_vue_vue_type_template_id_540180b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/LocationUpdateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/LocationUpdateComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/LocationUpdateComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationUpdateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationUpdateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/LocationUpdateComponent.vue?vue&type=template&id=540180b4&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/user/LocationUpdateComponent.vue?vue&type=template&id=540180b4& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_template_id_540180b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationUpdateComponent.vue?vue&type=template&id=540180b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationUpdateComponent.vue?vue&type=template&id=540180b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_template_id_540180b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_template_id_540180b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);