(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/LocationComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlide"]
  },
  props: ['activeUser'],
  data: function data() {
    return {
      userId: '',
      reviewText: '',
      location: [],
      reviews: [],
      images: []
    };
  },
  methods: {
    /**
     * Method Vueper Slides
     */
    showNext: function showNext() {},

    /**
     * MEthod close location
     */
    closeLocation: function closeLocation() {
      $('.sidebar').removeClass('active');
      this.$route.name == 'userLocation' ? this.$router.push({
        name: 'userMap'
      }) : this.$router.push({
        name: 'map'
      }); // this.$store.dispatch('ADD_MARKERS');
    },

    /**
     * Method delete location
     */
    deleteLocation: function deleteLocation() {
      this.$emit('deleteloc', this.location.id);
    },

    /**
     * Method update location
     */
    updateLocation: function updateLocation() {
      this.$router.push({
        name: 'userUpdateLocation',
        params: {
          id: this.location.id
        }
      });
    },

    /**
     * Method create review
     */
    createReview: function createReview() {
      var vue = this;
      axios.post('/InfoMap.com/user/map/location/' + this.location.id + '/review', {
        review: this.reviewText,
        location_id: this.location.id
      }).then(function (data) {
        vue.reviewText = null;
        setTimeout(function () {
          $('#reviewButton').prop('disabled', true);
        }, 1000);
        $('.review-hide').after($('<div/>').attr('class', 'reviews-form col-12 mb-2 previeReview').append($('<div/>').attr('class', 'card card-white post').append($('<div/>').attr('class', 'post-heading').append($('<div/>').attr('class', 'float-left user-image col-2').append($('<img/>').attr({
          'src': 'http://bootdey.com/img/Content/user_3.jpg',
          'class': 'img-circle avatar'
        })), $('<div/>').attr('class', 'float-left user-info col-10 row').append($('<div/>').attr('class', 'title col-12 p-0').append($('<h5/>').attr('class', 'float-left pl-4').text(data.data.surname), $('<p/>').attr('class', 'text-muted float-right small').text(data.data.updated_at.substring(0, 10))))), $('<div/>').attr('class', 'post-description text-fluid').append($('<p/>').text(data.data.review)))));
      })["catch"](function (error) {
        alert('Неправильно введенні дані');
        console.log(error);
      });
    }
  },
  watch: {
    /**
     * Watch vuex, location in base
     */
    '$store.getters.GET_LOCATION': {
      handler: function handler(search) {
        var _this = this;

        this.location = this.$store.getters.GET_LOCATION[0];
        this.reviews = this.$store.getters.GET_LOCATION[1];
        this.userId = this.$store.getters.GET_LOCATION[0]['user_id'];
        this.images = this.$store.getters.GET_LOCATION[2];
        $('.sidebar').addClass('active');
        $('.previeReview').remove();
        setTimeout(function () {
          _this.$refs.vueperslides1.goToSlide(0);
        }, 1000);
      },
      deep: true,
      immediate: true
    },

    /**
     * Watch new review text
     */
    reviewText: function reviewText() {
      /^\s+|\s+$/g.test(this.reviewText) || this.reviewText == '' ? $('#reviewButton').prop('disabled', true) : $('#reviewButton').prop('disabled', false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationComponent.vue?vue&type=template&id=9b13b522&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/LocationComponent.vue?vue&type=template&id=9b13b522& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _vm.location
    ? _c("div", { staticClass: "container-fluid p-0" }, [
        _vm.images.length != 0
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
                _vm.activeUser == _vm.userId
                  ? _c("div", { staticClass: "optionsLocation" }, [
                      _c("i", {
                        staticClass: "fas fa-pen updateLocation",
                        attrs: { title: "Редагування" },
                        on: { click: _vm.updateLocation }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "fas fa-trash deleteLocation",
                        attrs: { title: "Видалення" },
                        on: { click: _vm.deleteLocation }
                      })
                    ])
                  : _vm._e(),
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
                      }
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
        _c("div", { staticClass: "title text-center" }, [
          _c("h2", [
            _vm._v("\n            " + _vm._s(_vm.location.title) + "\n        ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text text-justify" }, [
          _c("p", [
            _vm._v("\n            " + _vm._s(_vm.location.text) + "\n        ")
          ])
        ]),
        _vm._v(" "),
        _vm.reviews
          ? _c(
              "div",
              { staticClass: "reviews" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm.activeUser > 0
                  ? _c(
                      "div",
                      { staticClass: "review-input-form col-12 mt-2 mb-4" },
                      [
                        _c(
                          "form",
                          {
                            attrs: {
                              enctype: "multipart/form-data",
                              onsubmit: "return false;"
                            }
                          },
                          [
                            _c("div", { staticClass: "form-group mb-4" }, [
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
                                  name: "review",
                                  id: "review",
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
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm float-right m-2",
                                  attrs: {
                                    id: "reviewButton",
                                    type: "submit",
                                    disabled: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.createReview()
                                    }
                                  }
                                },
                                [_vm._v("Коментувати")]
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "review-hide" }),
                _vm._v(" "),
                _vm._l(_vm.reviews, function(review) {
                  return _c(
                    "div",
                    { key: review.id, staticClass: "reviews-form col-12 mb-2" },
                    [
                      _c("div", { staticClass: "card card-white post" }, [
                        _c("div", { staticClass: "post-heading" }, [
                          _vm._m(1, true),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "float-left user-info col-10 row" },
                            [
                              _c("div", { staticClass: "title col-12 p-0" }, [
                                _c("h5", { staticClass: "float-left pl-4" }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(review.surname) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "text-muted float-right small"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          review.updated_at.substring(0, 10)
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "post-description text-fluid" },
                          [
                            _c("p", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(review.review) +
                                  "\n                    "
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                })
              ],
              2
            )
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "review-title col-12" }, [
      _c("h4", [_vm._v("\n                Коментарії:\n            ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-left user-image col-2" }, [
      _c("img", {
        staticClass: "img-circle avatar",
        attrs: {
          src: "http://bootdey.com/img/Content/user_3.jpg",
          alt: "",
          width: "60px"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/LocationComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/LocationComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocationComponent_vue_vue_type_template_id_9b13b522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationComponent.vue?vue&type=template&id=9b13b522& */ "./resources/js/components/user/LocationComponent.vue?vue&type=template&id=9b13b522&");
/* harmony import */ var _LocationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/LocationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LocationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocationComponent_vue_vue_type_template_id_9b13b522___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LocationComponent_vue_vue_type_template_id_9b13b522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/LocationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/LocationComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/LocationComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/LocationComponent.vue?vue&type=template&id=9b13b522&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/LocationComponent.vue?vue&type=template&id=9b13b522& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationComponent_vue_vue_type_template_id_9b13b522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LocationComponent.vue?vue&type=template&id=9b13b522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/LocationComponent.vue?vue&type=template&id=9b13b522&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationComponent_vue_vue_type_template_id_9b13b522___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationComponent_vue_vue_type_template_id_9b13b522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);