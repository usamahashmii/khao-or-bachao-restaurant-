(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36], {
    /***/
    "./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js ***!
      \********************************************************************/

    /*! exports provided: ion_loading */

    /***/
    function node_modulesIonicCoreDistEsmIonLoadingIosEntryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_loading", function () {
        return Loading;
      });
      /* harmony import */


      var _chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chunk-84f6bf13.js */
      "./node_modules/@ionic/core/dist/esm/chunk-84f6bf13.js");
      /* harmony import */


      var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chunk-1074393c.js */
      "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
      /* harmony import */


      var _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chunk-d83bfeae.js */
      "./node_modules/@ionic/core/dist/esm/chunk-d83bfeae.js");
      /* harmony import */


      var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chunk-ba834eff.js */
      "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js");
      /* harmony import */


      var _chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chunk-cae2ca23.js */
      "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js");
      /**
       * iOS Loading Enter Animation
       */


      var iosEnterAnimation = function iosEnterAnimation(AnimationC, baseEl) {
        var baseAnimation = new AnimationC();
        var backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        var wrapperAnimation = new AnimationC();
        wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
        backdropAnimation.fromTo('opacity', 0.01, 0.3);
        wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).add(backdropAnimation).add(wrapperAnimation));
      };
      /**
       * iOS Loading Leave Animation
       */


      var iosLeaveAnimation = function iosLeaveAnimation(AnimationC, baseEl) {
        var baseAnimation = new AnimationC();
        var backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        var wrapperAnimation = new AnimationC();
        wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
        backdropAnimation.fromTo('opacity', 0.3, 0);
        wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).add(backdropAnimation).add(wrapperAnimation));
      };
      /**
       * Md Loading Enter Animation
       */


      var mdEnterAnimation = function mdEnterAnimation(AnimationC, baseEl) {
        var baseAnimation = new AnimationC();
        var backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        var wrapperAnimation = new AnimationC();
        wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
        backdropAnimation.fromTo('opacity', 0.01, 0.32);
        wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
        return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).add(backdropAnimation).add(wrapperAnimation));
      };
      /**
       * Md Loading Leave Animation
       */


      var mdLeaveAnimation = function mdLeaveAnimation(AnimationC, baseEl) {
        var baseAnimation = new AnimationC();
        var backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        var wrapperAnimation = new AnimationC();
        wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper'));
        backdropAnimation.fromTo('opacity', 0.32, 0);
        wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
        return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).add(backdropAnimation).add(wrapperAnimation));
      };
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Loading = /*#__PURE__*/function () {
        function Loading(hostRef) {
          var _this = this;

          _classCallCheck(this, Loading);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.presented = false;
          this.mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          /**
           * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
           */

          this.keyboardClose = true;
          /**
           * Number of milliseconds to wait before dismissing the loading indicator.
           */

          this.duration = 0;
          /**
           * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
           */

          this.backdropDismiss = false;
          /**
           * If `true`, a backdrop will be displayed behind the loading indicator.
           */

          this.showBackdrop = true;
          /**
           * If `true`, the loading indicator will be translucent.
           * Only applies when the mode is `"ios"` and the device supports
           * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
           */

          this.translucent = false;
          /**
           * If `true`, the loading indicator will animate.
           */

          this.animated = true;

          this.onBackdropTap = function () {
            _this.dismiss(undefined, _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["B"]);
          };

          this.didPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingDidPresent", 7);
          this.willPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingWillPresent", 7);
          this.willDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingWillDismiss", 7);
          this.didDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionLoadingDidDismiss", 7);
        }

        _createClass(Loading, [{
          key: "componentWillLoad",
          value: function componentWillLoad() {
            if (this.spinner === undefined) {
              var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
              this.spinner = _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('loadingSpinner', _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
            }
          }
          /**
           * Present the loading overlay after it has been created.
           */

        }, {
          key: "present",
          value: function () {
            var _present = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);

                    case 2:
                      if (this.duration > 0) {
                        this.durationTimeout = setTimeout(function () {
                          return _this2.dismiss();
                        }, this.duration + 10);
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function present() {
              return _present.apply(this, arguments);
            }

            return present;
          }()
          /**
           * Dismiss the loading overlay after it has been presented.
           *
           * @param data Any data to emit in the dismiss events.
           * @param role The role of the element that is dismissing the loading.
           * This can be useful in a button handler for determining which button was
           * clicked to dismiss the loading.
           * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
           */

        }, {
          key: "dismiss",
          value: function dismiss(data, role) {
            if (this.durationTimeout) {
              clearTimeout(this.durationTimeout);
            }

            return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
          }
          /**
           * Returns a promise that resolves when the loading did dismiss.
           */

        }, {
          key: "onDidDismiss",
          value: function onDidDismiss() {
            return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el, 'ionLoadingDidDismiss');
          }
          /**
           * Returns a promise that resolves when the loading will dismiss.
           */

        }, {
          key: "onWillDismiss",
          value: function onWillDismiss() {
            return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el, 'ionLoadingWillDismiss');
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign;

            var message = this.message,
                spinner = this.spinner;
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onIonBackdropTap: this.onBackdropTap,
              style: {
                zIndex: "".concat(40000 + this.overlayIndex)
              },
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'loading-translucent', this.translucent), _Object$assign))
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
              visible: this.showBackdrop,
              tappable: this.backdropDismiss
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "loading-wrapper",
              role: "dialog"
            }, spinner && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "loading-spinner"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
              name: spinner
            })), message && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "loading-content",
              innerHTML: Object(_chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_4__["s"])(message)
            })));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
          }
        }]);

        return Loading;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=36-es5.js.map