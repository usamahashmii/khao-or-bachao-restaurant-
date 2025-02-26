(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59], {
    /***/
    "./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js ***!
      \**********************************************************************/

    /*! exports provided: ion_segment, ion_segment_button */

    /***/
    function node_modulesIonicCoreDistEsmIonSegment_2IosEntryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_segment", function () {
        return Segment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_segment_button", function () {
        return SegmentButton;
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
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Segment = /*#__PURE__*/function () {
        function Segment(hostRef) {
          _classCallCheck(this, Segment);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the user cannot interact with the segment.
           */

          this.disabled = false;
          /**
           * If `true`, the segment buttons will overflow and the user can swipe to see them.
           */

          this.scrollable = false;
          this.ionChange = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
          this.ionStyle = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        }

        _createClass(Segment, [{
          key: "valueChanged",
          value: function valueChanged(value) {
            this.updateButtons();
            this.ionChange.emit({
              value: value
            });
          }
        }, {
          key: "segmentClick",
          value: function segmentClick(ev) {
            var selectedButton = ev.target;
            this.value = selectedButton.value;
          }
        }, {
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.emitStyle();
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            if (this.value == null) {
              var checked = this.getButtons().find(function (b) {
                return b.checked;
              });

              if (checked) {
                this.value = checked.value;
              }
            }

            this.updateButtons();
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'segment': true
            });
          }
        }, {
          key: "updateButtons",
          value: function updateButtons() {
            var value = this.value;

            var _iterator = _createForOfIteratorHelper(this.getButtons()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var button = _step.value;
                button.checked = button.value === value;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "getButtons",
          value: function getButtons() {
            return Array.from(this.el.querySelectorAll('ion-segment-button'));
          }
        }, {
          key: "hostData",
          value: function hostData() {
            var _Object$assign;

            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'segment-disabled', this.disabled), _defineProperty(_Object$assign, 'segment-scrollable', this.scrollable), _Object$assign))
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
          key: "watchers",
          get: function get() {
            return {
              "value": ["valueChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ".sc-ion-segment-ios-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.segment-scrollable.sc-ion-segment-ios-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-ios-h::-webkit-scrollbar{display:none}.sc-ion-segment-ios-h{--background:transparent;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--background-checked:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary,#3880ff);--color-checked:var(--ion-color-primary-contrast,#fff);--color-disabled:rgba(var(--ion-color-primary-rgb,56,128,255),0.3);--color-checked-disabled:rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);--border-color:var(--ion-color-primary,#3880ff);--indicator-color:transparent}.segment-disabled.sc-ion-segment-ios-h{opacity:.3}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{--border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .activated{background:rgba(var(--ion-color-base-rgb),.16);color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked, .sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.activated{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{color:rgba(var(--ion-color-base-rgb),.3)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.segment-button-disabled{color:rgba(var(--ion-color-contrast-rgb),.3)}\@media (any-hover:hover){.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button:hover:not(.segment-button-checked){background:rgba(var(--ion-color-base-rgb),.1)}}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;font-size:12px;line-height:22px}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{border-color:var(--ion-toolbar-color-checked,var(--border-color));color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked{background:var(--ion-toolbar-color-checked,var(--background-checked));color:var(--ion-toolbar-background,var(--color-checked))}.sc-ion-segment-ios-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{--color:var(--ion-color-contrast);--color-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--color-checked:var(--ion-color-base);--color-checked-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--background-hover:rgba(var(--ion-color-contrast-rgb),0.1);--background-activated:rgba(var(--ion-color-contrast-rgb),0.16);--background-checked:var(--ion-color-contrast);--border-color:var(--ion-color-contrast)}";
          }
        }]);

        return Segment;
      }();

      var ids = 0;
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */

      var SegmentButton = /*#__PURE__*/function () {
        function SegmentButton(hostRef) {
          var _this = this;

          _classCallCheck(this, SegmentButton);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the segment button is selected.
           */

          this.checked = false;
          /**
           * If `true`, the user cannot interact with the segment button.
           */

          this.disabled = false;
          /**
           * Set the layout of the text and icon in the segment.
           */

          this.layout = 'icon-top';
          /**
           * The type of the button.
           */

          this.type = 'button';
          /**
           * The value of the segment button.
           */

          this.value = 'ion-sb-' + ids++;

          this.onClick = function () {
            _this.checked = true;
          };

          this.ionSelect = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSelect", 7);
        }

        _createClass(SegmentButton, [{
          key: "checkedChanged",
          value: function checkedChanged(checked, prev) {
            if (checked && !prev) {
              this.ionSelect.emit();
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _class;

            var checked = this.checked,
                type = this.type,
                disabled = this.disabled,
                hasIcon = this.hasIcon,
                hasLabel = this.hasLabel,
                layout = this.layout;
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "aria-disabled": disabled ? 'true' : null,
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'segment-button-has-label', hasLabel), _defineProperty(_class, 'segment-button-has-icon', hasIcon), _defineProperty(_class, 'segment-button-has-label-only', hasLabel && !hasIcon), _defineProperty(_class, 'segment-button-has-icon-only', hasIcon && !hasLabel), _defineProperty(_class, 'segment-button-disabled', disabled), _defineProperty(_class, 'segment-button-checked', checked), _defineProperty(_class, "segment-button-layout-".concat(layout), true), _defineProperty(_class, 'ion-activatable', true), _defineProperty(_class, 'ion-activatable-instant', true), _class)
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: type,
              "aria-pressed": checked ? 'true' : null,
              "class": "button-native",
              disabled: disabled
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "segment-button-indicator"
            }));
          }
        }, {
          key: "hasLabel",
          get: function get() {
            return !!this.el.querySelector('ion-label');
          }
        }, {
          key: "hasIcon",
          get: function get() {
            return !!this.el.querySelector('ion-icon');
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
              "checked": ["checkedChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type){border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host-context([dir=rtl]):first-of-type,:host-context([dir=rtl]):host(:first-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host(:not(:first-of-type)){border-left-width:0}:host-context([dir=rtl]):host(:not(:first-of-type)),:host-context([dir=rtl]):not(:first-of-type){border-right-width:0;border-left-width:var(--border-width)}:host(:last-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host-context([dir=rtl]):host(:last-of-type),:host-context([dir=rtl]):last-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.button-native{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.segment-button-indicator{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-checked) .segment-button-indicator{background-color:var(--indicator-color-checked,var(--color-checked))}:host(.activated){color:var(--color-activated,var(--color))}:host(.segment-button-disabled){color:var(--color-disabled)}:host(.segment-button-disabled.segment-button-checked){color:var(--color-checked-disabled)}::slotted(ion-icon){-ms-flex-order:-1;order:-1}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}:host{--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;min-height:24px;font-size:13px;line-height:37px}.segment-button-indicator{display:none}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}\@media (any-hover:hover){:host(:hover:not(.segment-button-checked)){background:var(--background-hover)}}:host(.activated){background:var(--background-activated)}:host(.segment-button-checked.activated){background:var(--background-checked);color:var(--color-checked)}";
          }
        }]);

        return SegmentButton;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=59-es5.js.map