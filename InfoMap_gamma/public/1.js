(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationCreateComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/LocationCreateComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
      images: [],
      newImages: [],
      textarea: null,
      title: null,
      locationId: null,
      inputFiles: [],
      center: {
        lat: 51.1518032,
        lng: 23.6378023
      },
      marker: []
    };
  },
  methods: {
    /**
     * Method Vueper Slides
     */
    showNext: function showNext() {},

    /**
     * Method insert position marker
     */
    InsertPosition: function InsertPosition(e) {
      this.center = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this.marker = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
    },

    /**
     * Method delete images
     */
    deleteImage: function deleteImage(image) {
      this.images = this.images.filter(function (el) {
        return el != image;
      });
      this.inputFiles = this.inputFiles.filter(function (el) {
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
        _this.$refs.vueperslides1.goToSlide(-1);
      }, 1000);
    },

    /**
     * Method create location
     */
    createLocation: function createLocation() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _iterator, _step, item;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.inputFiles != null)) {
                  _context.next = 18;
                  break;
                }

                _iterator = _createForOfIteratorHelper(_this2.inputFiles);
                _context.prev = 2;

                _iterator.s();

              case 4:
                if ((_step = _iterator.n()).done) {
                  _context.next = 10;
                  break;
                }

                item = _step.value;
                _context.next = 8;
                return _this2.uploadsFile(item);

              case 8:
                _context.next = 4;
                break;

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _iterator.e(_context.t0);

              case 15:
                _context.prev = 15;

                _iterator.f();

                return _context.finish(15);

              case 18:
                _this2.$store.dispatch('CREATE_LOCATION', {
                  url: '/InfoMap.com/admin/map/location/',
                  title: _this2.title,
                  text: _this2.textarea,
                  marker: _this2.center,
                  newImages: _this2.newImages
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 15, 18]]);
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
  updated: function updated() {
    if (/^\s+|\s+$/g.test(this.title) || this.title == '' || /^\s+|\s+$/g.test(this.textarea) || this.textarea == '' || this.images.length == 0) {
      $('.createLocation').prop('disabled', true);
    } else {
      $('.createLocation').prop('disabled', false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationCreateComponent.vue?vue&type=template&id=3134385e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/LocationCreateComponent.vue?vue&type=template&id=3134385e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link active",
                      attrs: { to: { name: "adminMap" } }
                    },
                    [
                      _vm._v(
                        "   \n                        Головна\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "info" }, [
              _c(
                "form",
                { attrs: { method: "POST", onsubmit: "return false;" } },
                [
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary createLocation",
                        attrs: { type: "submit", disabled: "" },
                        on: {
                          click: function($event) {
                            return _vm.createLocation()
                          }
                        }
                      },
                      [_vm._v("Створити")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-11 ml-auto mr-auto mb-0" },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c(
                          "div",
                          { staticClass: "form-image" },
                          [
                            _c(
                              "vueper-slides",
                              {
                                ref: "vueperslides1",
                                staticClass: "primary",
                                attrs: {
                                  bullets: false,
                                  "fixed-height": "400px",
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
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-map" },
                          [
                            _c(
                              "GmapMap",
                              {
                                attrs: {
                                  center: _vm.center,
                                  zoom: 7,
                                  "map-type-id": "terrain"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.InsertPosition($event)
                                  }
                                }
                              },
                              [
                                _vm.marker.length != 0
                                  ? _c("GmapMarker", {
                                      attrs: {
                                        position: _vm.marker,
                                        clickable: true,
                                        draggable: false,
                                        animation: 2
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group col-9 ml-auto mr-auto mb-0",
                      staticStyle: { height: "auto" }
                    },
                    [
                      _c(
                        "vueper-slides",
                        {
                          ref: "vueperslides2",
                          staticClass: "thumbnails",
                          attrs: {
                            "dragging-distance": 50,
                            "visible-slides": 5,
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "input-group mb-3 col-9 ml-auto mr-auto" },
                    [
                      _vm._m(1),
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
                          {
                            staticClass: "custom-file-label",
                            attrs: { for: "file" }
                          },
                          [_vm._v("Вибрати картинку")]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "input-group mb-3 col-9 ml-auto mr-auto" },
                    [
                      _vm._m(2),
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
                          name: "title",
                          type: "text",
                          id: "basic-url",
                          "aria-describedby": "basic-addon3"
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
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "input-group mb-3 col-9 ml-auto mr-auto mb-4"
                    },
                    [
                      _vm._m(3),
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
                        attrs: {
                          name: "textarea",
                          "aria-label": "With textarea",
                          rows: "5"
                        },
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
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h4", { staticClass: "m-0 text-dark" }, [_vm._v("Створення локації")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Завантаження")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Назва")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Текст")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/LocationCreateComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/admin/LocationCreateComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocationCreateComponent_vue_vue_type_template_id_3134385e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationCreateComponent.vue?vue&type=template&id=3134385e& */ "./resources/js/components/admin/LocationCreateComponent.vue?vue&type=template&id=3134385e&");
/* harmony import */ var _LocationCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationCreateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/LocationCreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocationCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocationCreateComponent_vue_vue_type_template_id_3134385e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocationCreateComponent_vue_vue_type_template_id_3134385e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/LocationCreateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/LocationCreateComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/LocationCreateComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationCreateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationCreateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationCreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/LocationCreateComponent.vue?vue&type=template&id=3134385e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/LocationCreateComponent.vue?vue&type=template&id=3134385e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationCreateComponent_vue_vue_type_template_id_3134385e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationCreateComponent.vue?vue&type=template&id=3134385e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationCreateComponent.vue?vue&type=template&id=3134385e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationCreateComponent_vue_vue_type_template_id_3134385e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationCreateComponent_vue_vue_type_template_id_3134385e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);