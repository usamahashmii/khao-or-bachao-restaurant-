(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72], {
    /***/
    "./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js ***!
      \*********************************************************************/

    /*! exports provided: ion_textarea */

    /***/
    function node_modulesIonicCoreDistEsmIonTextareaIosEntryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_textarea", function () {
        return Textarea;
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


      var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chunk-ba834eff.js */
      "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js");
      /* harmony import */


      var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chunk-c90aaa66.js */
      "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Textarea = /*#__PURE__*/function () {
        function Textarea(hostRef) {
          var _this = this;

          _classCallCheck(this, Textarea);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.inputId = "ion-input-".concat(textareaIds++);
          this.didBlurAfterEdit = false;
          this.hasFocus = false;
          /**
           * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
           */

          this.autocapitalize = 'none';
          /**
           * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
           */

          this.autofocus = false;
          /**
           * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
           */

          this.clearOnEdit = false;
          /**
           * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
           */

          this.debounce = 0;
          /**
           * If `true`, the user cannot interact with the textarea.
           */

          this.disabled = false;
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;
          /**
           * If `true`, the user cannot modify the value.
           */

          this.readonly = false;
          /**
           * If `true`, the user must fill in a value before submitting a form.
           */

          this.required = false;
          /**
           * If `true`, the element will have its spelling and grammar checked.
           */

          this.spellcheck = false;
          /**
           * If `true`, the element height will increase based on the value.
           */

          this.autoGrow = false;
          /**
           * The value of the textarea.
           */

          this.value = '';

          this.onInput = function (ev) {
            if (_this.nativeInput) {
              _this.value = _this.nativeInput.value;
            }

            _this.emitStyle();

            _this.ionInput.emit(ev);
          };

          this.onFocus = function () {
            _this.hasFocus = true;

            _this.focusChange();

            _this.ionFocus.emit();
          };

          this.onBlur = function () {
            _this.hasFocus = false;

            _this.focusChange();

            _this.ionBlur.emit();
          };

          this.onKeyDown = function () {
            _this.checkClearOnEdit();
          };

          this.ionChange = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
          this.ionInput = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
          this.ionStyle = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
          this.ionBlur = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
          this.ionFocus = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
          this.ionInputDidLoad = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInputDidLoad", 7);
          this.ionInputDidUnload = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInputDidUnload", 7);
        }

        _createClass(Textarea, [{
          key: "debounceChanged",
          value: function debounceChanged() {
            this.ionChange = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this.ionChange, this.debounce);
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            this.emitStyle();
          }
          /**
           * Update the native input element when the value changes
           */

        }, {
          key: "valueChanged",
          value: function valueChanged() {
            var nativeInput = this.nativeInput;
            var value = this.getValue();

            if (nativeInput && nativeInput.value !== value) {
              nativeInput.value = value;
            }

            this.runAutoGrow();
            this.emitStyle();
            this.ionChange.emit({
              value: value
            });
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.emitStyle();
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.debounceChanged();
            this.runAutoGrow();
            this.ionInputDidLoad.emit();
          } // TODO: performance hit, this cause layout thrashing

        }, {
          key: "runAutoGrow",
          value: function runAutoGrow() {
            var nativeInput = this.nativeInput;

            if (nativeInput && this.autoGrow) {
              Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                nativeInput.style.height = 'inherit';
                nativeInput.style.height = nativeInput.scrollHeight + 'px';
              });
            }
          }
        }, {
          key: "componentDidUnload",
          value: function componentDidUnload() {
            this.ionInputDidUnload.emit();
          }
          /**
           * Sets focus on the specified `ion-textarea`. Use this method instead of the global
           * `input.focus()`.
           */

        }, {
          key: "setFocus",
          value: function () {
            var _setFocus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.nativeInput) {
                        this.nativeInput.focus();
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setFocus() {
              return _setFocus.apply(this, arguments);
            }

            return setFocus;
          }()
          /**
           * Returns the native `<textarea>` element used under the hood.
           */

        }, {
          key: "getInputElement",
          value: function getInputElement() {
            return Promise.resolve(this.nativeInput);
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'interactive': true,
              'textarea': true,
              'input': true,
              'interactive-disabled': this.disabled,
              'has-placeholder': this.placeholder != null,
              'has-value': this.hasValue(),
              'has-focus': this.hasFocus
            });
          }
          /**
           * Check if we need to clear the text input if clearOnEdit is enabled
           */

        }, {
          key: "checkClearOnEdit",
          value: function checkClearOnEdit() {
            if (!this.clearOnEdit) {
              return;
            } // Did the input value change after it was blurred and edited?


            if (this.didBlurAfterEdit && this.hasValue()) {
              // Clear the input
              this.value = '';
            } // Reset the flag


            this.didBlurAfterEdit = false;
          }
        }, {
          key: "focusChange",
          value: function focusChange() {
            // If clearOnEdit is enabled and the input blurred but has a value, set a flag
            if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
              this.didBlurAfterEdit = true;
            }

            this.emitStyle();
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.getValue() !== '';
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value || '';
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;

            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            var value = this.getValue();
            var labelId = this.inputId + '-lbl';
            var label = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el);

            if (label) {
              label.id = labelId;
            }

            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "aria-disabled": this.disabled ? 'true' : null,
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), _defineProperty({}, mode, true))
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", {
              "class": "native-textarea",
              ref: function ref(el) {
                return _this2.nativeInput = el;
              },
              autoCapitalize: this.autocapitalize,
              autoFocus: this.autofocus,
              disabled: this.disabled,
              maxLength: this.maxlength,
              minLength: this.minlength,
              name: this.name,
              placeholder: this.placeholder || '',
              readOnly: this.readonly,
              required: this.required,
              spellCheck: this.spellcheck,
              cols: this.cols,
              rows: this.rows,
              wrap: this.wrap,
              onInput: this.onInput,
              onBlur: this.onBlur,
              onFocus: this.onFocus,
              onKeyDown: this.onKeyDown
            }, value));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "debounce": ["debounceChanged"],
              "disabled": ["disabledChanged"],
              "value": ["valueChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";
          }
        }]);

        return Textarea;
      }();

      var textareaIds = 0;
      /***/
    }
  }]);
})();
//# sourceMappingURL=72-es5.js.map