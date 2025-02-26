(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15], {
    /***/
    "./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js ***!
      \********************************************************************/

    /*! exports provided: ion_button, ion_icon */

    /***/
    function node_modulesIonicCoreDistEsmIonButton_2MdEntryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_button", function () {
        return Button;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_icon", function () {
        return Icon;
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
       *
       * @slot - Content is placed between the named slots if provided without a slot.
       * @slot icon-only - Should be used on an icon in a button that has no text.
       * @slot start - Content is placed to the left of the button text in LTR, and to the right in RTL.
       * @slot end - Content is placed to the right of the button text in LTR, and to the left in RTL.
       */


      var Button = /*#__PURE__*/function () {
        function Button(hostRef) {
          var _this = this;

          _classCallCheck(this, Button);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.inToolbar = false;
          this.inItem = false;
          /**
           * The type of button.
           */

          this.buttonType = 'button';
          /**
           * If `true`, the user cannot interact with the button.
           */

          this.disabled = false;
          /**
           * When using a router, it specifies the transition direction when navigating to
           * another page using `href`.
           */

          this.routerDirection = 'forward';
          /**
           * If `true`, activates a button with a heavier font weight.
           */

          this.strong = false;
          /**
           * The type of the button.
           */

          this.type = 'button';

          this.handleClick = function (ev) {
            if (_this.type === 'button') {
              Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["o"])(_this.href, ev, _this.routerDirection);
            } else if (Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_this.el)) {
              // this button wants to specifically submit a form
              // climb up the dom to see if we're in a <form>
              // and if so, then use JS to submit it
              var form = _this.el.closest('form');

              if (form) {
                ev.preventDefault();
                var fakeButton = document.createElement('button');
                fakeButton.type = _this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
              }
            }
          };

          this.onFocus = function () {
            _this.ionFocus.emit();
          };

          this.onBlur = function () {
            _this.ionBlur.emit();
          };

          this.ionFocus = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
          this.ionBlur = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        }

        _createClass(Button, [{
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.inToolbar = !!this.el.closest('ion-buttons');
            this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign;

            var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
            var buttonType = this.buttonType,
                type = this.type,
                disabled = this.disabled,
                rel = this.rel,
                target = this.target,
                size = this.size,
                href = this.href,
                color = this.color,
                expand = this.expand,
                hasIconOnly = this.hasIconOnly,
                shape = this.shape,
                strong = this.strong;
            var finalSize = size === undefined && this.inItem ? 'small' : size;
            var TagType = href === undefined ? 'button' : 'a';
            var attrs = TagType === 'button' ? {
              type: type
            } : {
              download: this.download,
              href: href,
              rel: rel,
              target: target
            };
            var fill = this.fill;

            if (fill === undefined) {
              fill = this.inToolbar ? 'clear' : 'solid';
            }

            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.handleClick,
              "aria-disabled": disabled ? 'true' : null,
              "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, buttonType, true), _defineProperty(_Object$assign, "".concat(buttonType, "-").concat(expand), expand !== undefined), _defineProperty(_Object$assign, "".concat(buttonType, "-").concat(finalSize), finalSize !== undefined), _defineProperty(_Object$assign, "".concat(buttonType, "-").concat(shape), shape !== undefined), _defineProperty(_Object$assign, "".concat(buttonType, "-").concat(fill), true), _defineProperty(_Object$assign, "".concat(buttonType, "-strong"), strong), _defineProperty(_Object$assign, 'button-has-icon-only', hasIconOnly), _defineProperty(_Object$assign, 'button-disabled', disabled), _defineProperty(_Object$assign, 'ion-activatable', true), _defineProperty(_Object$assign, 'ion-focusable', true), _Object$assign))
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
              "class": "button-native",
              disabled: disabled,
              onFocus: this.onFocus,
              onBlur: this.onBlur
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "button-inner"
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "icon-only"
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "start"
            }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
              name: "end"
            })), mode === 'md' && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
              type: this.rippleType
            })));
          }
        }, {
          key: "hasIconOnly",
          get: function get() {
            return !!this.el.querySelector('ion-icon[slot="icon-only"]');
          }
        }, {
          key: "rippleType",
          get: function get() {
            var hasClearFill = this.fill === undefined || this.fill === 'clear'; // If the button is in a toolbar, has a clear fill (which is the default)
            // and only has an icon we use the unbounded "circular" ripple effect

            if (hasClearFill && this.hasIconOnly && this.inToolbar) {
              return 'unbounded';
            }

            return 'bounded';
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-hover:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){--opacity:.5;pointer-events:none}:host(.button-disabled) .button-native{cursor:default;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--background);--box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}:host(.button-solid.activated){--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--color-activated:var(--ion-color-primary,#3880ff)}:host(.button-outline.activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:700}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\@media (any-hover:hover){:host(.button-solid.ion-color:hover) .button-native{background:var(--ion-color-tint)}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.04)}}";
          }
        }]);

        return Button;
      }();

      var CACHED_MAP;

      var getIconMap = function getIconMap() {
        if (!CACHED_MAP) {
          var win = window;
          win.Ionicons = win.Ionicons || {};
          CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
        }

        return CACHED_MAP;
      };

      var getUrl = function getUrl(i) {
        var url = getSrc(i.src);

        if (url) {
          return url;
        }

        url = getName(i.name, i.icon, i.mode, i.ios, i.md);

        if (url) {
          return getNamedUrl(url);
        }

        if (i.icon) {
          url = getSrc(i.icon);

          if (url) {
            return url;
          }

          url = getSrc(i.icon[i.mode]);

          if (url) {
            return url;
          }
        }

        return null;
      };

      var getNamedUrl = function getNamedUrl(name) {
        var url = getIconMap().get(name);

        if (url) {
          return url;
        }

        return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["i"])("svg/".concat(name, ".svg"));
      };

      var getName = function getName(name, icon, mode, ios, md) {
        // default to "md" if somehow the mode wasn't set
        mode = (mode && mode.toLowerCase()) === 'ios' ? 'ios' : 'md'; // if an icon was passed in using the ios or md attributes
        // set the iconName to whatever was passed in

        if (ios && mode === 'ios') {
          name = ios.toLowerCase();
        } else if (md && mode === 'md') {
          name = md.toLowerCase();
        } else {
          if (!name && icon && !isSrc(icon)) {
            name = icon;
          }

          if (isStr(name)) {
            name = name.toLowerCase();

            if (!/^md-|^ios-|^logo-/.test(name)) {
              // this does not have one of the defaults
              // so lets auto add in the mode prefix for them
              name = mode + '-' + name;
            }
          }
        }

        if (!isStr(name) || name.trim() === '') {
          return null;
        } // only allow alpha characters and dash


        var invalidChars = name.replace(/[a-z]|-|\d/gi, '');

        if (invalidChars !== '') {
          return null;
        }

        return name;
      };

      var getSrc = function getSrc(src) {
        if (isStr(src)) {
          src = src.trim();

          if (isSrc(src)) {
            return src;
          }
        }

        return null;
      };

      var isSrc = function isSrc(str) {
        return str.length > 0 && /(\/|\.)/.test(str);
      };

      var isStr = function isStr(val) {
        return typeof val === 'string';
      };

      var validateContent = function validateContent(svgContent) {
        if (svgContent) {
          var div = document.createElement('div');
          div.innerHTML = svgContent; // setup this way to ensure it works on our buddy IE

          for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
              div.removeChild(div.childNodes[i]);
            }
          } // must only have 1 root element


          var svgElm = div.firstElementChild;

          if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon'); // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts

            if (isValid(svgElm)) {
              return div.innerHTML;
            }
          }
        }

        return '';
      };

      var isValid = function isValid(elm) {
        if (elm.nodeType === 1) {
          if (elm.nodeName.toLowerCase() === 'script') {
            return false;
          }

          for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;

            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
              return false;
            }
          }

          for (var _i = 0; _i < elm.childNodes.length; _i++) {
            if (!isValid(elm.childNodes[_i])) {
              return false;
            }
          }
        }

        return true;
      };

      var requests = new Map();

      var getSvgContent = function getSvgContent(url) {
        // see if we already have a request for this url
        var req = requests.get(url);

        if (!req) {
          // we don't already have a request
          req = fetch(url).then(function (rsp) {
            if (rsp.status <= 299) {
              return rsp.text();
            }

            return Promise.resolve(null);
          }).then(function (svgContent) {
            return validateContent(svgContent);
          }); // cache for the same requests

          requests.set(url, req);
        }

        return req;
      };
      /**
       * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
       */


      var Icon = /*#__PURE__*/function () {
        function Icon(hostRef) {
          _classCallCheck(this, Icon);

          Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.mode = getIonMode(this);
          this.isVisible = false;
          /**
           * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
           * Default, `false`.
           */

          this.lazy = false;
        }

        _createClass(Icon, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            var _this2 = this;

            // purposely do not return the promise here because loading
            // the svg file should not hold up loading the app
            // only load the svg if it's visible
            this.waitUntilVisible(this.el, '50px', function () {
              _this2.isVisible = true;

              _this2.loadIcon();
            });
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            if (this.io) {
              this.io.disconnect();
              this.io = undefined;
            }
          }
        }, {
          key: "waitUntilVisible",
          value: function waitUntilVisible(el, rootMargin, cb) {
            var _this3 = this;

            if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
              var io = this.io = new window.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                  io.disconnect();
                  _this3.io = undefined;
                  cb();
                }
              }, {
                rootMargin: rootMargin
              });
              io.observe(el);
            } else {
              // browser doesn't support IntersectionObserver
              // so just fallback to always show it
              cb();
            }
          }
        }, {
          key: "loadIcon",
          value: function loadIcon() {
            var _this4 = this;

            if (this.isVisible) {
              var url = getUrl(this);

              if (url) {
                getSvgContent(url).then(function (svgContent) {
                  return _this4.svgContent = svgContent;
                });
              }
            }

            if (!this.ariaLabel) {
              var label = getName(this.name, this.icon, this.mode, this.ios, this.md); // user did not provide a label
              // come up with the label based on the icon name

              if (label) {
                this.ariaLabel = label.replace('ios-', '').replace('md-', '').replace(/\-/g, ' ');
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign3;

            var mode = this.mode || 'md';
            var flipRtl = this.flipRtl || this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false;
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              role: "img",
              "class": Object.assign(_defineProperty({}, mode, true), createColorClasses(this.color), (_Object$assign3 = {}, _defineProperty(_Object$assign3, "icon-".concat(this.size), !!this.size), _defineProperty(_Object$assign3, 'flip-rtl', !!flipRtl && this.el.ownerDocument.dir === 'rtl'), _Object$assign3))
            }, this.svgContent ? Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "icon-inner",
              innerHTML: this.svgContent
            }) : Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "icon-inner"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "assetsDirs",
          get: function get() {
            return ["svg"];
          }
        }, {
          key: "watchers",
          get: function get() {
            return {
              "name": ["loadIcon"],
              "src": ["loadIcon"],
              "icon": ["loadIcon"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}";
          }
        }]);

        return Icon;
      }();

      var getIonMode = function getIonMode(ref) {
        return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["j"])(ref) || document.documentElement.getAttribute('mode') || 'md';
      };

      var createColorClasses = function createColorClasses(color) {
        return color ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : null;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=15-es5.js.map