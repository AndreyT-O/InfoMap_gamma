(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=script&lang=js& ***!
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
      reviews: [],
      deleteImages: [],
      newImages: [],
      textarea: null,
      reviewId: '',
      title: null,
      locationId: null,
      reviewText: null,
      inputFiles: [],
      center: {
        lat: 51.1518032,
        lng: 23.6378023
      }
    };
  },
  methods: {
    /**
     * Method VueperSlider
     */
    showNext: function showNext() {},

    /**
     * Method insert marker position
     */
    InsertPosition: function InsertPosition(e) {
      this.center = {
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
        _this.$refs.vueperslides1.goToSlide(-1);
      }, 1000);
    },

    /**
     * Method update location
     */
    updateLocation: function updateLocation() {
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
                _this2.$store.dispatch('UPDATE_LOCATION', {
                  url: '/InfoMap.com/admin/map/location/',
                  id: _this2.locationId,
                  title: _this2.title,
                  text: _this2.textarea,
                  marker: _this2.center,
                  deleteImages: _this2.deleteImages,
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
     * Method delete location
     */
    deleteLocation: function deleteLocation(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios["delete"]('/InfoMap.com/admin/map/location/' + id).then(function (data) {
                  _this3.$store.dispatch('ADD_LIST_LOCATIONS');

                  _this3.$store.dispatch('ADD_MARKERS');

                  _this3.$router.push({
                    name: 'adminMap'
                  });
                })["catch"](function (error) {
                  alert('error');
                  console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * Method add new image to base
     */
    uploadsFile: function uploadsFile(item) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var vue, form;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                vue = _this4;
                form = new FormData();
                form.append('image', item);
                _context3.next = 5;
                return axios.post('/InfoMap.com/uploads', form).then(function (data) {
                  vue.newImages.push(data.data);
                })["catch"](function (error) {
                  alert('error');
                  console.log(error);
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * Method create comment
     */
    createReview: function createReview() {
      axios.post('/InfoMap.com/admin/map/location/' + this.locationId + '/review', {
        review: this.reviewText,
        location_id: this.locationId
      }).then(function (data) {
        setTimeout(function () {
          $('.createReview').prop('disabled', true);
        }, 1000);
        $('.review-form').after($('<div/>').attr('class', 'post clearfix previeReview').append($('<div/>').attr('class', 'user-block').append($('<img/>').attr({
          'class': 'img-circle img-bordered-sm',
          'src': "http://bootdey.com/img/Content/user_1.jpg",
          'alt': "User Image"
        }), $('<span/>').attr('class', 'username').append($('<a/>').attr('href', '#').text(data.data.surname), $('<a/>').attr({
          'href': '#',
          'class': 'float-right btn-tool'
        }).append($('<i/>').attr({
          'class': 'fas fa-times',
          'data-toggle': 'modal',
          'data-target': '#exampleModal'
        }))), $('<span/>').attr('class', 'description').text(data.data.updated_at)), $('<p/>').text(data.data.review)));
      })["catch"](function (error) {
        console.log(error);
      });
    },

    /**
     * Method remove comment
     */
    deleteReview: function deleteReview(e) {
      axios["delete"]('/InfoMap.com/admin/map/location/review/' + $(e.target).attr('id')).then(function (data) {
        $('#review_' + $(e.target).attr('id')).remove();
      })["catch"](function (error) {
        alert('error');
        console.log(error);
      });
    }
  },
  watch: {
    /**
     * Watch vuex GET_LOCATION
     */
    '$store.getters.GET_LOCATION': {
      handler: function handler(search) {
        var _this5 = this;

        var object = this.$store.getters.GET_LOCATION;

        if (object.length != 0) {
          this.title = object[0].title;
          this.textarea = object[0].text;
          this.locationId = object[0].id;
          this.center = JSON.parse(object[0].marker);
          this.images = object[2];
          this.reviews = object[1];
          $('.nav a').removeClass('active');
          $('.listLocation').addClass('active');
          $('#location_' + object[0].id).addClass('active');
          $('.previeReview').remove();
          setTimeout(function () {
            _this5.$refs.vueperslides1.goToSlide(-1);
          }, 1000);
        }
      },
      deep: true,
      immediate: true
    },
    '$route.params': {
      handler: function handler(search) {
        if (this.$route.name == 'adminUpdateLocation') {
          this.inputFiles = [];
          $("#file").val(null);
        }
      },
      deep: true,
      immediate: true
    },

    /**
     * Watch data - reviewText
     */
    reviewText: function reviewText() {
      /^\s+|\s+$/g.test(this.reviewText) || this.reviewText == '' ? $('.createReview').prop('disabled', true) : $('.createReview').prop('disabled', false);
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    setTimeout(function () {
      $('#location_' + _this6.locationId).addClass('active');
    }, 1000);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8& ***!
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
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h4", { staticClass: "m-0 text-dark" }, [
              _vm._v("Локація - " + _vm._s(_vm.title) + " - (Редагування)")
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
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
                        staticClass: "btn btn-outline-primary updateLocation",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            return _vm.updateLocation()
                          }
                        }
                      },
                      [_vm._v("Змінити")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-danger",
                        attrs: {
                          type: "submit",
                          "data-target": "#modalRemoveLocation",
                          "data-toggle": "modal"
                        }
                      },
                      [_vm._v("Видалити")]
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
                                _c("GmapMarker", {
                                  attrs: {
                                    position: _vm.center,
                                    clickable: true,
                                    draggable: false,
                                    animation: 2
                                  }
                                })
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
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "cardReview card-body col-12 col-sm-7 col-md-7 ml-auto mr-auto"
                },
                [
                  _c("div", { staticClass: "tab-content" }, [
                    _c(
                      "div",
                      {
                        staticClass: "active tab-pane",
                        attrs: { id: "activity" }
                      },
                      [
                        _c("div", { staticClass: "post comment-form" }, [
                          _c(
                            "form",
                            {
                              attrs: { action: "", onsubmit: "return false;" }
                            },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for: "exampleFormControlTextarea1"
                                    }
                                  },
                                  [_vm._v("Коментувати")]
                                ),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.reviewText,
                                      expression: "reviewText"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "exampleFormControlTextarea1",
                                    rows: "3"
                                  },
                                  domProps: { value: _vm.reviewText },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.reviewText = $event.target.value
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-primary createReview",
                              attrs: { type: "submit", disabled: "" },
                              on: {
                                click: function($event) {
                                  return _vm.createReview()
                                }
                              }
                            },
                            [_vm._v("Коментувати")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "review-form" }),
                        _vm._v(" "),
                        _vm._l(_vm.reviews, function(review, id) {
                          return _c(
                            "div",
                            {
                              key: id,
                              staticClass: "post clearfix",
                              attrs: { id: "review_" + review.id }
                            },
                            [
                              _c("div", { staticClass: "user-block" }, [
                                _c("img", {
                                  staticClass: "img-circle img-bordered-sm",
                                  attrs: {
                                    src:
                                      "http://bootdey.com/img/Content/user_1.jpg",
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "username" }, [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v(_vm._s(review.surname))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "float-right btn-tool",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-times",
                                        attrs: {
                                          "data-toggle": "modal",
                                          "data-target": "#modalRemoveReview"
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.reviewId = review.id
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "description" }, [
                                  _c("span", { staticClass: "date" }, [
                                    _vm._v(
                                      _vm._s(review.updated_at.substring(0, 10))
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(review.review) +
                                    "\n                                        "
                                )
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalRemoveReview",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalRemoveReview",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning ml-auto",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Ні")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger mr-auto removeComment",
                    attrs: {
                      type: "button",
                      id: _vm.reviewId,
                      "data-dismiss": "modal"
                    },
                    on: {
                      click: function($event) {
                        return _vm.deleteReview($event)
                      }
                    }
                  },
                  [_vm._v("Так")]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalRemoveLocation",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalRemoveLocation",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-warning ml-auto",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Ні")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-danger mr-auto removeLocation",
                    attrs: { type: "button", id: "", "data-dismiss": "modal" },
                    on: {
                      click: function($event) {
                        return _vm.deleteLocation(_vm.locationId)
                      }
                    }
                  },
                  [_vm._v("Так")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
        _c("li", { staticClass: "breadcrumb-item" })
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Видалення")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body text-center" }, [
      _c("p", [_vm._v("Ви справді хочете видалити відгук?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Видалення")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body text-center" }, [
      _c("p", [_vm._v("Ви справді хочете видалити локацію?")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/LocationUpdateComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/admin/LocationUpdateComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocationUpdateComponent_vue_vue_type_template_id_f8d9bdb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8& */ "./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8&");
/* harmony import */ var _LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationUpdateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocationUpdateComponent_vue_vue_type_template_id_f8d9bdb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocationUpdateComponent_vue_vue_type_template_id_f8d9bdb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/LocationUpdateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationUpdateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_template_id_f8d9bdb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/LocationUpdateComponent.vue?vue&type=template&id=f8d9bdb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_template_id_f8d9bdb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationUpdateComponent_vue_vue_type_template_id_f8d9bdb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);