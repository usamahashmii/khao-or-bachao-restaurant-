(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34], {
    /***/
    "./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js ***!
      \*******************************************************************/

    /*! exports provided: ion_item, ion_item_divider, ion_item_group, ion_label, ion_list, ion_list_header, ion_note, ion_skeleton_text */

    /***/
    function node_modulesIonicCoreDistEsmIonItem_8IosEntryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_item", function () {
        return Item;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_item_divider", function () {
        return ItemDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_item_group", function () {
        return ItemGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_label", function () {
        return Label;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_list", function () {
        return List;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_list_header", function () {
        return ListHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_note", function () {
        return Note;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_skeleton_text", function () {
        return SkeletonText;
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
       *
       * @slot - Content is placed between the named slots if provided without a slot.
       * @slot start - Content is placed to the left of the item text in LTR, and to the right in RTL.
       * @slot end - Content is placed to the right of the item text in LTR, and to the left in RTL.
       */


      var Item = /*#__PURE__*/function () {
        function Item(hostRef) {
          _classCallCheck(this, Item);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.itemStyles = new Map();
          this.multipleInputs = false;
          /**
           * If `true`, a button tag will be rendered and the item will be tappable.
           */

          this.button = false;
          /**
           * The icon to use when `detail` is set to `true`.
           */

          this.detailIcon = 'ios-arrow-forward';
          /**
           * If `true`, the user cannot interact with the item.
           */

          this.disabled = false;
          /**
           * When using a router, it specifies the transition direction when navigating to
           * another page using `href`.
           */

          this.routerDirection = 'forward';
          /**
           * The type of the button. Only used when an `onclick` or `button` property is present.
           */

          this.type = 'button';
        }

        _createClass(Item, [{
          key: "itemStyle",
          value: function itemStyle(ev) {
            ev.stopPropagation();
            var tagName = ev.target.tagName;
            var updatedStyles = ev.detail;
            var newStyles = {};
            var childStyles = this.itemStyles.get(tagName) || {};
            var hasStyleChange = false;
            Object.keys(updatedStyles).forEach(function (key) {
              if (updatedStyles[key]) {
                var itemKey = "item-".concat(key);

                if (!childStyles[itemKey]) {
                  hasStyleChange = true;
                }

                newStyles[itemKey] = true;
              }
            });

            if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
              hasStyleChange = true;
            }

            if (hasStyleChange) {
              this.itemStyles.set(tagName, newStyles);
              this.el.forceUpdate();
            }
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            // The following elements have a clickable cover that is relative to the entire item
            var covers = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio'); // The following elements can accept focus alongside the previous elements
            // therefore if these elements are also a child of item, we don't want the
            // input cover on top of those interfering with their clicks

            var inputs = this.el.querySelectorAll('ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle'); // Check for multiple inputs to change the position of the input cover to relative
            // for all of the covered inputs above

            this.multipleInputs = covers.length + inputs.length > 1;
          } // If the item contains an input including a checkbox, datetime, select, or radio
          // then the item will have a clickable input cover that covers the item
          // that should get the hover, focused and activated states UNLESS it has multiple
          // inputs, then those need to individually get each click

        }, {
          key: "hasCover",
          value: function hasCover() {
            var inputs = this.el.querySelectorAll('ion-checkbox, ion-datetime, ion-select, ion-radio');
            return inputs.length === 1 && !this.multipleInputs;
          } // If the item has an href or button property it will render a native
          // anchor or button that is clickable

        }, {
          key: "isClickable",
          value: function isClickable() {
            return this.href !== undefined || this.button;
          }
        }, {
          key: "canActivate",
          value: function canActivate() {
            return this.isClickable() || this.hasCover();
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign;

            var detail = this.detail,
                detailIcon = this.detailIcon,
                download = this.download,
                lines = this.lines,
                disabled = this.disabled,
                href = this.href,
                rel = this.rel,
                target = this.target,
                routerDirection = this.routerDirection;
            var childStyles = {};
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            var clickable = this.isClickable();
            var canActivate = this.canActivate();
            var TagType = clickable ? href === undefined ? 'button' : 'a' : 'div';
            var attrs = TagType === 'button' ? {
              type: this.type
            } : {
              download: download,
              href: href,
              rel: rel,
              target: target
            };
            var showDetail = detail !== undefined ? detail : mode === 'ios' && clickable;
            this.itemStyles.forEach(function (value) {
              Object.assign(childStyles, value);
            });
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "aria-disabled": disabled ? 'true' : null,
              "class": Object.assign({}, childStyles, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_Object$assign = {
                'item': true
              }, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, "item-lines-".concat(lines), lines !== undefined), _defineProperty(_Object$assign, 'item-disabled', disabled), _defineProperty(_Object$assign, 'in-list', Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-list', this.el)), _defineProperty(_Object$assign, 'item-multiple-inputs', this.multipleInputs), _defineProperty(_Object$assign, 'ion-activatable', canActivate), _defineProperty(_Object$assign, 'ion-focusable', true), _Object$assign))
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
              "class": "item-native",
              disabled: disabled,
              onClick: function onClick(ev) {
                return Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, routerDirection);
              }
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "start"
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "item-inner"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "input-wrapper"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "end"
            }), showDetail && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              icon: detailIcon,
              lazy: false,
              "class": "item-detail-icon"
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "item-inner-highlight"
            })), canActivate && mode === 'md' && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "item-highlight"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:var(--ion-item-background-activated,currentColor);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.ion-focused) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}\@media (any-hover:hover){:host(.ion-activatable:hover) .item-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.activated) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.item-disabled),:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){opacity:.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){-ms-flex:1;flex:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .item-native,:host(.item-label-stacked) .item-native{-ms-flex-align:start;align-items:start}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.ion-touched.ion-invalid),:host(.item-interactive.item-has-focus){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:44px;--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--ion-item-background-activated,var(--ion-color-step-150,#d9d9d9));--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,#e1e1e1));--background-hover:var(--ion-item-background-hover,rgba(var(--ion-text-color-rgb,0,0,0),0.04));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--color:var(--ion-item-color,var(--ion-text-color,#000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:17px}:host(.activated){--transition:none}:host(.ion-color.activated) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}\@media (any-hover:hover){:host(.activated.ion-activatable:hover) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.activated.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:8px;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-toggle[slot=end]),::slotted(ion-toggle[slot=start]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";
          }
        }]);

        return Item;
      }();
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       *
       * @slot - Content is placed between the named slots if provided without a slot.
       * @slot start - Content is placed to the left of the divider text in LTR, and to the right in RTL.
       * @slot end - Content is placed to the right of the divider text in LTR, and to the left in RTL.
       */


      var ItemDivider = /*#__PURE__*/function () {
        function ItemDivider(hostRef) {
          _classCallCheck(this, ItemDivider);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * When it's set to `true`, the item-divider will stay visible when it reaches the top
           * of the viewport until the next `ion-item-divider` replaces it.
           *
           * This feature relies in `position:sticky`:
           * https://caniuse.com/#feat=css-sticky
           */

          this.sticky = false;
        }

        _createClass(ItemDivider, [{
          key: "hostData",
          value: function hostData() {
            var _Object$assign2;

            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_Object$assign2 = {}, _defineProperty(_Object$assign2, mode, true), _defineProperty(_Object$assign2, 'item-divider-sticky', this.sticky), _defineProperty(_Object$assign2, 'item', true), _Object$assign2))
            };
          }
        }, {
          key: "__stencil_render",
          value: function __stencil_render() {
            return [Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "start"
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "item-divider-inner"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "item-divider-wrapper"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "end"
            }))];
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--inner-padding-top:0px;--inner-padding-end:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.item-divider-sticky){position:-webkit-sticky;position:sticky;top:0}.item-divider-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-divider-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-divider-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}:host{--background:var(--ion-color-step-50,#f2f2f2);--color:var(--ion-color-step-850,#262626);--padding-start:16px;--inner-padding-end:8px;border-radius:0;position:relative;font-size:17px}:host([slot=start]){margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}:host([slot=end]){margin-left:8px;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:7px;margin-bottom:7px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(h1){font-size:24px}::slotted(h1),::slotted(h2){margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-weight:400}::slotted(h2){font-size:17px}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin-bottom:3px;font-weight:400}::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),::slotted(p){margin-left:0;margin-right:0;margin-top:0;font-size:14px;line-height:normal}::slotted(p){margin-bottom:2px;color:rgba(var(--ion-text-color-rgb,0,0,0),.4);text-overflow:inherit;overflow:inherit}::slotted(h2:last-child) ::slotted(h3:last-child),::slotted(h4:last-child),::slotted(h5:last-child),::slotted(h6:last-child),::slotted(p:last-child){margin-bottom:0}";
          }
        }]);

        return ItemDivider;
      }();

      var ItemGroup = /*#__PURE__*/function () {
        function ItemGroup(hostRef) {
          _classCallCheck(this, ItemGroup);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(ItemGroup, [{
          key: "hostData",
          value: function hostData() {
            var _class;

            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              'role': 'group',
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "item-group-".concat(mode), true), _defineProperty(_class, 'item', true), _class)
            };
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData());
          }
        }], [{
          key: "style",
          get: function get() {
            return "ion-item-group{display:block}.item-group-ios ion-item-sliding:last-child .item,.item-group-ios ion-item:last-child{--border-width:0}";
          }
        }]);

        return ItemGroup;
      }();
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Label = /*#__PURE__*/function () {
        function Label(hostRef) {
          _classCallCheck(this, Label);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.noAnimate = false;
          this.ionStyle = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        }

        _createClass(Label, [{
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.noAnimate = this.position === 'floating';
            this.emitStyle();
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            var _this = this;

            if (this.noAnimate) {
              setTimeout(function () {
                _this.noAnimate = false;
              }, 1000);
            }
          }
        }, {
          key: "positionChanged",
          value: function positionChanged() {
            this.emitStyle();
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            var position = this.position;
            this.ionStyle.emit(_defineProperty({
              'label': true
            }, "label-".concat(position), position !== undefined));
          }
        }, {
          key: "hostData",
          value: function hostData() {
            var _Object$assign3;

            var position = this.position;
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_Object$assign3 = {}, _defineProperty(_Object$assign3, mode, true), _defineProperty(_Object$assign3, "label-".concat(position), position !== undefined), _defineProperty(_Object$assign3, "label-no-animate", this.noAnimate), _Object$assign3))
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
              "position": ["positionChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ".item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h, [text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs), .item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-ios-h, .item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h, .item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.ion-text-wrap.sc-ion-label-ios-h, [text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:13.6px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}[dir=rtl].label-floating.sc-ion-label-ios-h, [dir=rtl] .label-floating.sc-ion-label-ios-h, [dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h, [dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.sc-ion-label-ios-s  h1 {font-size:24px}.sc-ion-label-ios-s  h1 , .sc-ion-label-ios-s  h2 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-weight:400}.sc-ion-label-ios-s  h2 {font-size:17px}.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-ios-s  p {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s > p{color:rgba(var(--ion-text-color-rgb,0,0,0),.4)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p{color:inherit}.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child {margin-bottom:0}";
          }
        }]);

        return Label;
      }();
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var List = /*#__PURE__*/function () {
        function List(hostRef) {
          _classCallCheck(this, List);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the list will have margin around it and rounded corners.
           */

          this.inset = false;
        }
        /**
         * If `ion-item-sliding` are used inside the list, this method closes
         * any open sliding item.
         *
         * Returns `true` if an actual `ion-item-sliding` is closed.
         */


        _createClass(List, [{
          key: "closeSlidingItems",
          value: function () {
            var _closeSlidingItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var item;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      item = this.el.querySelector('ion-item-sliding');

                      if (!(item && item.closeOpened)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", item.closeOpened());

                    case 3:
                      return _context.abrupt("return", false);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function closeSlidingItems() {
              return _closeSlidingItems.apply(this, arguments);
            }

            return closeSlidingItems;
          }()
        }, {
          key: "hostData",
          value: function hostData() {
            var _class2;

            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, "list-".concat(mode), true), _defineProperty(_class2, 'list-inset', this.inset), _defineProperty(_class2, "list-lines-".concat(this.lines), this.lines !== undefined), _defineProperty(_class2, "list-".concat(mode, "-lines-").concat(this.lines), this.lines !== undefined), _class2)
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
            return "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-ios{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:32px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-ios.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-ios.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-ios.list-inset ion-item{--border-width:0 0 1px 0;--inner-border-width:0}.list-ios.list-inset ion-item:last-child{--border-width:0;--inner-border-width:0}.list-ios.list-inset+ion-list.list-inset{margin-top:0}.list-ios-lines-none .item{--border-width:0;--inner-border-width:0}.list-ios-lines-full .item,.list-ios .item-lines-full{--border-width:0 0 0.55px 0}.list-ios-lines-full .item{--inner-border-width:0}.list-ios-lines-inset .item,.list-ios .item-lines-inset{--inner-border-width:0 0 0.55px 0}.list-ios .item-lines-inset{--border-width:0}.list-ios .item-lines-full{--inner-border-width:0}.list-ios .item-lines-none{--border-width:0;--inner-border-width:0}";
          }
        }]);

        return List;
      }();
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var ListHeader = /*#__PURE__*/function () {
        function ListHeader(hostRef) {
          _classCallCheck(this, ListHeader);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(ListHeader, [{
          key: "hostData",
          value: function hostData() {
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), _defineProperty({}, mode, true))
            };
          }
        }, {
          key: "__stencil_render",
          value: function __stencil_render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-color-step-850,#262626);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);position:relative;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}";
          }
        }]);

        return ListHeader;
      }();
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Note = /*#__PURE__*/function () {
        function Note(hostRef) {
          _classCallCheck(this, Note);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        }

        _createClass(Note, [{
          key: "hostData",
          value: function hostData() {
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return {
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), _defineProperty({}, mode, true))
            };
          }
        }, {
          key: "__stencil_render",
          value: function __stencil_render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350,#a6a6a6)}";
          }
        }]);

        return Note;
      }();

      var SkeletonText = /*#__PURE__*/function () {
        function SkeletonText(hostRef) {
          _classCallCheck(this, SkeletonText);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the skeleton text will animate.
           */

          this.animated = false;
        }

        _createClass(SkeletonText, [{
          key: "calculateWidth",
          value: function calculateWidth() {
            // If width was passed in to the property use that first
            if (this.width !== undefined) {
              return {
                style: {
                  width: this.width
                }
              };
            }

            return;
          }
        }, {
          key: "__stencil_render",
          value: function __stencil_render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\xA0");
          }
        }, {
          key: "hostData",
          value: function hostData() {
            var _class3;

            var animated = this.animated && _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);

            var inMedia = Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-avatar', this.el) || Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-thumbnail', this.el);
            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            return Object.assign({
              "class": (_class3 = {}, _defineProperty(_class3, mode, true), _defineProperty(_class3, 'skeleton-text-animated', animated), _defineProperty(_class3, 'in-media', inMedia), _class3)
            }, this.calculateWidth());
          }
        }, {
          key: "render",
          value: function render() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{--background:rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),0.065);border-radius:var(--border-radius,inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:-webkit-gradient(linear,left top,right top,color-stop(8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)),color-stop(18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135)),color-stop(33%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065)));background:linear-gradient(90deg,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 8%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.135) 18%,rgba(var(--background-rgb,var(--ion-text-color-rgb,0,0,0)),.065) 33%);background-size:800px 104px;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:shimmer;animation-name:shimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}\@-webkit-keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}\@keyframes shimmer{0%{background-position:-468px 0}to{background-position:468px 0}}";
          }
        }]);

        return SkeletonText;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=34-es5.js.map