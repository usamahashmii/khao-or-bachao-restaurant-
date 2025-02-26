(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61], {
    /***/
    "./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js ***!
      \*********************************************************************/

    /*! exports provided: ion_select, ion_select_option, ion_select_popover */

    /***/
    function node_modulesIonicCoreDistEsmIonSelect_3IosEntryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_select", function () {
        return Select;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_select_option", function () {
        return SelectOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_select_popover", function () {
        return SelectPopover;
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


      var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chunk-c90aaa66.js */
      "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Select = /*#__PURE__*/function () {
        function Select(hostRef) {
          var _this = this;

          _classCallCheck(this, Select);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.childOpts = [];
          this.inputId = "ion-sel-".concat(selectIds++);
          this.didInit = false;
          this.isExpanded = false;
          /**
           * If `true`, the user cannot interact with the select.
           */

          this.disabled = false;
          /**
           * The text to display on the cancel button.
           */

          this.cancelText = 'Cancel';
          /**
           * The text to display on the ok button.
           */

          this.okText = 'OK';
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;
          /**
           * If `true`, the select can accept multiple values.
           */

          this.multiple = false;
          /**
           * The interface the select should use: `action-sheet`, `popover` or `alert`.
           */

          this["interface"] = 'alert';
          /**
           * Any additional options that the `alert`, `action-sheet` or `popover` interface
           * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
           * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
           * [PopoverController API docs](../../popover/PopoverController/#create) for the
           * create options for each interface.
           */

          this.interfaceOptions = {};

          this.onClick = function (ev) {
            _this.setFocus();

            _this.open(ev);
          };

          this.onFocus = function () {
            _this.ionFocus.emit();
          };

          this.onBlur = function () {
            _this.ionBlur.emit();
          };

          this.ionChange = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
          this.ionCancel = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
          this.ionFocus = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
          this.ionBlur = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
          this.ionStyle = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        }

        _createClass(Select, [{
          key: "disabledChanged",
          value: function disabledChanged() {
            this.emitStyle();
          }
        }, {
          key: "valueChanged",
          value: function valueChanged() {
            if (this.didInit) {
              this.updateOptions();
              this.ionChange.emit({
                value: this.value
              });
              this.emitStyle();
            }
          }
        }, {
          key: "selectOptionChanged",
          value: function () {
            var _selectOptionChanged = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadOptions();

                    case 2:
                      if (this.didInit) {
                        this.updateOptions();
                        this.updateOverlayOptions();
                        this.emitStyle();
                        /**
                         * In the event that options
                         * are not loaded at component load
                         * this ensures that any value that is
                         * set is properly rendered once
                         * options have been loaded
                         */

                        if (this.value !== undefined) {
                          this.el.forceUpdate();
                        }
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function selectOptionChanged() {
              return _selectOptionChanged.apply(this, arguments);
            }

            return selectOptionChanged;
          }()
        }, {
          key: "componentDidLoad",
          value: function () {
            var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var checked, _checked;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadOptions();

                    case 2:
                      if (this.value === undefined) {
                        if (this.multiple) {
                          // there are no values set at this point
                          // so check to see who should be selected
                          checked = this.childOpts.filter(function (o) {
                            return o.selected;
                          });
                          this.value = checked.map(function (o) {
                            return o.value;
                          });
                        } else {
                          _checked = this.childOpts.find(function (o) {
                            return o.selected;
                          });

                          if (_checked) {
                            this.value = _checked.value;
                          }
                        }
                      }

                      this.updateOptions();
                      this.emitStyle();
                      this.el.forceUpdate();
                      this.didInit = true;

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function componentDidLoad() {
              return _componentDidLoad.apply(this, arguments);
            }

            return componentDidLoad;
          }()
          /**
           * Open the select overlay. The overlay is either an alert, action sheet, or popover,
           * depending on the `interface` property on the `ion-select`.
           *
           * @param event The user interface event that called the open.
           */

        }, {
          key: "open",
          value: function () {
            var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
              var _this2 = this;

              var overlay;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.disabled || this.isExpanded)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", undefined);

                    case 2:
                      _context3.next = 4;
                      return this.createOverlay(event);

                    case 4:
                      overlay = this.overlay = _context3.sent;
                      this.isExpanded = true;
                      overlay.onDidDismiss().then(function () {
                        _this2.overlay = undefined;
                        _this2.isExpanded = false;

                        _this2.setFocus();
                      });
                      _context3.next = 9;
                      return overlay.present();

                    case 9:
                      return _context3.abrupt("return", overlay);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function open(_x) {
              return _open.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "createOverlay",
          value: function createOverlay(ev) {
            var selectInterface = this["interface"];

            if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
              console.warn("Select interface cannot be \"".concat(selectInterface, "\" with a multi-value select. Using the \"alert\" interface instead."));
              selectInterface = 'alert';
            }

            if (selectInterface === 'popover' && !ev) {
              console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
              selectInterface = 'alert';
            }

            if (selectInterface === 'popover') {
              return this.openPopover(ev);
            }

            if (selectInterface === 'action-sheet') {
              return this.openActionSheet();
            }

            return this.openAlert();
          }
        }, {
          key: "updateOverlayOptions",
          value: function updateOverlayOptions() {
            if (!this.overlay) {
              return;
            }

            var overlay = this.overlay;

            switch (this["interface"]) {
              case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(this.childOpts);
                break;

              case 'popover':
                var popover = overlay.querySelector('ion-select-popover');

                if (popover) {
                  popover.options = this.createPopoverOptions(this.childOpts);
                }

                break;

              default:
                var inputType = this.multiple ? 'checkbox' : 'radio';
                overlay.inputs = this.createAlertInputs(this.childOpts, inputType);
                break;
            }
          }
        }, {
          key: "createActionSheetButtons",
          value: function createActionSheetButtons(data) {
            var _this3 = this;

            var actionSheetButtons = data.map(function (option) {
              return {
                role: option.selected ? 'selected' : '',
                text: option.textContent,
                handler: function handler() {
                  _this3.value = option.value;
                }
              };
            }); // Add "cancel" button

            actionSheetButtons.push({
              text: this.cancelText,
              role: 'cancel',
              handler: function handler() {
                _this3.ionCancel.emit();
              }
            });
            return actionSheetButtons;
          }
        }, {
          key: "createAlertInputs",
          value: function createAlertInputs(data, inputType) {
            return data.map(function (o) {
              return {
                type: inputType,
                label: o.textContent,
                value: o.value,
                checked: o.selected,
                disabled: o.disabled
              };
            });
          }
        }, {
          key: "createPopoverOptions",
          value: function createPopoverOptions(data) {
            var _this4 = this;

            return data.map(function (o) {
              return {
                text: o.textContent,
                value: o.value,
                checked: o.selected,
                disabled: o.disabled,
                handler: function handler() {
                  _this4.value = o.value;

                  _this4.close();
                }
              };
            });
          }
        }, {
          key: "openPopover",
          value: function () {
            var _openPopover = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ev) {
              var interfaceOptions, mode, popoverOpts;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      interfaceOptions = this.interfaceOptions;
                      mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                      popoverOpts = Object.assign({
                        mode: mode
                      }, interfaceOptions, {
                        component: 'ion-select-popover',
                        cssClass: ['select-popover', interfaceOptions.cssClass],
                        event: ev,
                        componentProps: {
                          header: interfaceOptions.header,
                          subHeader: interfaceOptions.subHeader,
                          message: interfaceOptions.message,
                          value: this.value,
                          options: this.createPopoverOptions(this.childOpts)
                        }
                      });
                      return _context4.abrupt("return", _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["c"].create(popoverOpts));

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function openPopover(_x2) {
              return _openPopover.apply(this, arguments);
            }

            return openPopover;
          }()
        }, {
          key: "openActionSheet",
          value: function () {
            var _openActionSheet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var mode, interfaceOptions, actionSheetOpts;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                      interfaceOptions = this.interfaceOptions;
                      actionSheetOpts = Object.assign({
                        mode: mode
                      }, interfaceOptions, {
                        buttons: this.createActionSheetButtons(this.childOpts),
                        cssClass: ['select-action-sheet', interfaceOptions.cssClass]
                      });
                      return _context5.abrupt("return", _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["b"].create(actionSheetOpts));

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function openActionSheet() {
              return _openActionSheet.apply(this, arguments);
            }

            return openActionSheet;
          }()
        }, {
          key: "openAlert",
          value: function () {
            var _openAlert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var label, labelText, interfaceOptions, inputType, mode, alertOpts;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      label = this.getLabel();
                      labelText = label ? label.textContent : null;
                      interfaceOptions = this.interfaceOptions;
                      inputType = this.multiple ? 'checkbox' : 'radio';
                      mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
                      alertOpts = Object.assign({
                        mode: mode
                      }, interfaceOptions, {
                        header: interfaceOptions.header ? interfaceOptions.header : labelText,
                        inputs: this.createAlertInputs(this.childOpts, inputType),
                        buttons: [{
                          text: this.cancelText,
                          role: 'cancel',
                          handler: function handler() {
                            _this5.ionCancel.emit();
                          }
                        }, {
                          text: this.okText,
                          handler: function handler(selectedValues) {
                            _this5.value = selectedValues;
                          }
                        }],
                        cssClass: ['select-alert', interfaceOptions.cssClass, this.multiple ? 'multiple-select-alert' : 'single-select-alert']
                      });
                      return _context6.abrupt("return", _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["a"].create(alertOpts));

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function openAlert() {
              return _openAlert.apply(this, arguments);
            }

            return openAlert;
          }()
          /**
           * Close the select interface.
           */

        }, {
          key: "close",
          value: function close() {
            // TODO check !this.overlay || !this.isFocus()
            if (!this.overlay) {
              return Promise.resolve(false);
            }

            return this.overlay.dismiss();
          }
        }, {
          key: "loadOptions",
          value: function () {
            var _loadOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return Promise.all(Array.from(this.el.querySelectorAll('ion-select-option')).map(function (o) {
                        return o.componentOnReady();
                      }));

                    case 2:
                      this.childOpts = _context7.sent;

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function loadOptions() {
              return _loadOptions.apply(this, arguments);
            }

            return loadOptions;
          }()
        }, {
          key: "updateOptions",
          value: function updateOptions() {
            // iterate all options, updating the selected prop
            var canSelect = true;

            var _iterator = _createForOfIteratorHelper(this.childOpts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var selectOption = _step.value;
                var selected = canSelect && isOptionSelected(this.value, selectOption.value, this.compareWith);
                selectOption.selected = selected; // if current option is selected and select is single-option, we can't select
                // any option more

                if (selected && !this.multiple) {
                  canSelect = false;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "getLabel",
          value: function getLabel() {
            return Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this.el);
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return this.getText() !== '';
          }
        }, {
          key: "getText",
          value: function getText() {
            var selectedText = this.selectedText;

            if (selectedText != null && selectedText !== '') {
              return selectedText;
            }

            return generateText(this.childOpts, this.value, this.compareWith);
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            if (this.buttonEl) {
              this.buttonEl.focus();
            }
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'interactive': true,
              'select': true,
              'has-placeholder': this.placeholder != null,
              'has-value': this.hasValue(),
              'interactive-disabled': this.disabled,
              'select-disabled': this.disabled
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _class,
                _this6 = this;

            var placeholder = this.placeholder,
                name = this.name,
                disabled = this.disabled,
                isExpanded = this.isExpanded,
                value = this.value,
                el = this.el;
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            var labelId = this.inputId + '-lbl';
            var label = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["f"])(el);

            if (label) {
              label.id = labelId;
            }

            var addPlaceholderClass = false;
            var selectText = this.getText();

            if (selectText === '' && placeholder != null) {
              selectText = placeholder;
              addPlaceholderClass = true;
            }

            Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_4__["r"])(true, el, name, parseValue(value), disabled);
            var selectTextClasses = {
              'select-text': true,
              'select-placeholder': addPlaceholderClass
            };
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              role: "combobox",
              "aria-haspopup": "dialog",
              "aria-disabled": disabled ? 'true' : null,
              "aria-expanded": "".concat(isExpanded),
              "aria-labelledby": labelId,
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'in-item', Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el)), _defineProperty(_class, 'select-disabled', disabled), _class)
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": selectTextClasses
            }, selectText), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "select-icon",
              role: "presentation"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "select-icon-inner"
            })), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: "button",
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              disabled: disabled,
              ref: function ref(btnEl) {
                return _this6.buttonEl = btnEl;
              }
            }));
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
              "disabled": ["disabledChanged"],
              "value": ["valueChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}";
          }
        }]);

        return Select;
      }();

      var parseValue = function parseValue(value) {
        if (value == null) {
          return undefined;
        }

        if (Array.isArray(value)) {
          return value.join(',');
        }

        return value.toString();
      };

      var isOptionSelected = function isOptionSelected(currentValue, compareValue, compareWith) {
        if (currentValue === undefined) {
          return false;
        }

        if (Array.isArray(currentValue)) {
          return currentValue.some(function (val) {
            return compareOptions(val, compareValue, compareWith);
          });
        } else {
          return compareOptions(currentValue, compareValue, compareWith);
        }
      };

      var compareOptions = function compareOptions(currentValue, compareValue, compareWith) {
        if (typeof compareWith === 'function') {
          return compareWith(currentValue, compareValue);
        } else if (typeof compareWith === 'string') {
          return currentValue[compareWith] === compareValue[compareWith];
        } else {
          return currentValue === compareValue;
        }
      };

      var generateText = function generateText(opts, value, compareWith) {
        if (value === undefined) {
          return '';
        }

        if (Array.isArray(value)) {
          return value.map(function (v) {
            return textForValue(opts, v, compareWith);
          }).filter(function (opt) {
            return opt !== null;
          }).join(', ');
        } else {
          return textForValue(opts, value, compareWith) || '';
        }
      };

      var textForValue = function textForValue(opts, value, compareWith) {
        var selectOpt = opts.find(function (opt) {
          return compareOptions(opt.value, value, compareWith);
        });
        return selectOpt ? selectOpt.textContent : null;
      };

      var selectIds = 0;

      var SelectOption = /*#__PURE__*/function () {
        function SelectOption(hostRef) {
          _classCallCheck(this, SelectOption);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.inputId = "ion-selopt-".concat(selectOptionIds++);
          /**
           * If `true`, the user cannot interact with the select option.
           */

          this.disabled = false;
          /**
           * If `true`, the element is selected.
           */

          this.selected = false;
          this.ionSelectOptionDidLoad = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSelectOptionDidLoad", 7);
          this.ionSelectOptionDidUnload = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSelectOptionDidUnload", 7);
        }

        _createClass(SelectOption, [{
          key: "componentWillLoad",
          value: function componentWillLoad() {
            if (this.value === undefined) {
              this.value = this.el.textContent || '';
            }
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            this.ionSelectOptionDidLoad.emit();
          }
        }, {
          key: "componentDidUnload",
          value: function componentDidUnload() {
            this.ionSelectOptionDidUnload.emit();
          }
        }, {
          key: "hostData",
          value: function hostData() {
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              'role': 'option',
              'id': this.inputId,
              "class": _defineProperty({}, mode, true)
            };
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData());
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{display:none}";
          }
        }]);

        return SelectOption;
      }();

      var selectOptionIds = 0;
      /**
       * @internal
       */

      var SelectPopover = /*#__PURE__*/function () {
        function SelectPopover(hostRef) {
          _classCallCheck(this, SelectPopover);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /** Array of options for the popover */

          this.options = [];
        }

        _createClass(SelectPopover, [{
          key: "onSelect",
          value: function onSelect(ev) {
            var option = this.options.find(function (o) {
              return o.value === ev.target.value;
            });

            if (option) {
              Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["s"])(option.handler);
            }
          }
        }, {
          key: "hostData",
          value: function hostData() {
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": _defineProperty({}, mode, true)
            };
          }
        }, {
          key: "__stencil_render",
          value: function __stencil_render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", {
              "text-wrap": true
            }, this.subHeader !== undefined && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", null, this.options.map(function (option) {
              return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", {
                checked: option.checked,
                value: option.value,
                disabled: option.disabled
              }));
            })));
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
          }
        }], [{
          key: "style",
          get: function get() {
            return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
          }
        }]);

        return SelectPopover;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=61-es5.js.map