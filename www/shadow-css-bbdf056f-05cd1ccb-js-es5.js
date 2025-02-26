(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shadow-css-bbdf056f-05cd1ccb-js"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/shadow-css-bbdf056f-05cd1ccb.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/shadow-css-bbdf056f-05cd1ccb.js ***!
      \***************************************************************************/

    /*! exports provided: ShadowCss, scopeCss */

    /***/
    function node_modulesIonicCoreDistEsmShadowCssBbdf056f05cd1ccbJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShadowCss", function () {
        return ShadowCss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scopeCss", function () {
        return scopeCss;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       *
       * This file is a port of shadowCSS from webcomponents.js to TypeScript.
       * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
       * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
       */


      var ShadowCss = /*#__PURE__*/function () {
        function ShadowCss() {
          _classCallCheck(this, ShadowCss);

          this.strictStyling = true;
        }

        _createClass(ShadowCss, [{
          key: "shimCssText",
          value: function shimCssText(cssText, scopeId) {
            var hostScopeId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var slotScopeId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var commentOriginalSelector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var commentsWithHash = extractCommentsWithHash(cssText);
            cssText = stripComments(cssText);
            var orgSelectors = [];

            if (commentOriginalSelector) {
              var processCommentedSelector = function processCommentedSelector(rule) {
                var placeholder = "/*!@___".concat(orgSelectors.length, "___*/");
                var comment = "/*!@".concat(rule.selector, "*/");
                orgSelectors.push({
                  placeholder: placeholder,
                  comment: comment
                });
                rule.selector = placeholder + rule.selector;
                return rule;
              };

              cssText = processRules(cssText, function (rule) {
                if (rule.selector[0] !== '@') {
                  return processCommentedSelector(rule);
                } else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
                  rule.content = processRules(rule.content, processCommentedSelector);
                  return rule;
                }

                return rule;
              });
            }

            var scopedCssText = this._scopeCssText(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector);

            cssText = [scopedCssText].concat(_toConsumableArray(commentsWithHash)).join('\n');

            if (commentOriginalSelector) {
              orgSelectors.forEach(function (_ref) {
                var placeholder = _ref.placeholder,
                    comment = _ref.comment;
                cssText = cssText.replace(placeholder, comment);
              });
            }

            return cssText;
          }
        }, {
          key: "_scopeCssText",
          value: function _scopeCssText(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
            // replace :host and :host-context -shadowcsshost and -shadowcsshost respectively
            cssText = this._insertPolyfillHostInCssText(cssText);
            cssText = this._convertColonHost(cssText);
            cssText = this._convertColonHostContext(cssText);
            cssText = this._convertColonSlotted(cssText, slotScopeId);
            cssText = this._convertShadowDOMSelectors(cssText);

            if (scopeId) {
              cssText = this._scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector);
            }

            cssText = cssText.replace(/-shadowcsshost-no-combinator/g, ".".concat(hostScopeId));
            cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
            return cssText.trim();
          }
          /*
           * convert a rule like :host(.foo) > .bar { }
           *
           * to
           *
           * .foo<scopeName> > .bar
          */

        }, {
          key: "_convertColonHost",
          value: function _convertColonHost(cssText) {
            return this._convertColonRule(cssText, _cssColonHostRe, this._colonHostPartReplacer);
          }
          /*
          * convert a rule like ::slotted(.foo) { }
          */

        }, {
          key: "_convertColonSlotted",
          value: function _convertColonSlotted(cssText, slotAttr) {
            var regExp = _cssColonSlottedRe;
            return cssText.replace(regExp, function () {
              for (var _len = arguments.length, m = new Array(_len), _key = 0; _key < _len; _key++) {
                m[_key] = arguments[_key];
              }

              if (m[2]) {
                var compound = m[2].trim();
                var suffix = m[3];
                var sel = '.' + slotAttr + ' > ' + compound + suffix;
                return sel;
              } else {
                return _polyfillHostNoCombinator + m[3];
              }
            });
          }
          /*
           * convert a rule like :host-context(.foo) > .bar { }
           *
           * to
           *
           * .foo<scopeName> > .bar, .foo scopeName > .bar { }
           *
           * and
           *
           * :host-context(.foo:host) .bar { ... }
           *
           * to
           *
           * .foo<scopeName> .bar { ... }
          */

        }, {
          key: "_convertColonHostContext",
          value: function _convertColonHostContext(cssText) {
            return this._convertColonRule(cssText, _cssColonHostContextRe, this._colonHostContextPartReplacer);
          }
        }, {
          key: "_convertColonRule",
          value: function _convertColonRule(cssText, regExp, partReplacer) {
            // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
            return cssText.replace(regExp, function () {
              for (var _len2 = arguments.length, m = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                m[_key2] = arguments[_key2];
              }

              if (m[2]) {
                var parts = m[2].split(',');
                var r = [];

                for (var i = 0; i < parts.length; i++) {
                  var p = parts[i].trim();
                  if (!p) break;
                  r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
                }

                return r.join(',');
              } else {
                return _polyfillHostNoCombinator + m[3];
              }
            });
          }
        }, {
          key: "_colonHostContextPartReplacer",
          value: function _colonHostContextPartReplacer(host, part, suffix) {
            if (part.indexOf(_polyfillHost) > -1) {
              return this._colonHostPartReplacer(host, part, suffix);
            } else {
              return host + part + suffix + ', ' + part + ' ' + host + suffix;
            }
          }
        }, {
          key: "_colonHostPartReplacer",
          value: function _colonHostPartReplacer(host, part, suffix) {
            return host + part.replace(_polyfillHost, '') + suffix;
          }
          /*
           * Convert combinators like ::shadow and pseudo-elements like ::content
           * by replacing with space.
          */

        }, {
          key: "_convertShadowDOMSelectors",
          value: function _convertShadowDOMSelectors(cssText) {
            return _shadowDOMSelectorsRe.reduce(function (result, pattern) {
              return result.replace(pattern, ' ');
            }, cssText);
          } // change a selector like 'div' to 'name div'

        }, {
          key: "_scopeSelectors",
          value: function _scopeSelectors(cssText, scopeSelector, hostSelector, slotSelector, commentOriginalSelector) {
            var _this = this;

            return processRules(cssText, function (rule) {
              var selector = rule.selector;
              var content = rule.content;

              if (rule.selector[0] !== '@') {
                selector = _this._scopeSelector(rule.selector, scopeSelector, hostSelector, slotSelector, _this.strictStyling);
              } else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
                content = _this._scopeSelectors(rule.content, scopeSelector, hostSelector, slotSelector, commentOriginalSelector);
              }

              selector = selector.replace(/\s{2,}/g, ' ').trim();
              return new CssRule(selector, content);
            });
          }
        }, {
          key: "_scopeSelector",
          value: function _scopeSelector(selector, scopeSelector, hostSelector, slotSelector, strict) {
            var _this2 = this;

            return selector.split(',').map(function (shallowPart) {
              if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
                return shallowPart.trim();
              }

              if (_this2._selectorNeedsScoping(shallowPart, scopeSelector)) {
                return strict ? _this2._applyStrictSelectorScope(shallowPart, scopeSelector, hostSelector).trim() : _this2._applySelectorScope(shallowPart, scopeSelector, hostSelector).trim();
              } else {
                return shallowPart.trim();
              }
            }).join(', ');
          }
        }, {
          key: "_selectorNeedsScoping",
          value: function _selectorNeedsScoping(selector, scopeSelector) {
            var re = this._makeScopeMatcher(scopeSelector);

            return !re.test(selector);
          }
        }, {
          key: "_makeScopeMatcher",
          value: function _makeScopeMatcher(scopeSelector) {
            var lre = /\[/g;
            var rre = /\]/g;
            scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
            return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
          }
        }, {
          key: "_applySelectorScope",
          value: function _applySelectorScope(selector, scopeSelector, hostSelector) {
            // Difference from webcomponents.js: scopeSelector could not be an array
            return this._applySimpleSelectorScope(selector, scopeSelector, hostSelector);
          } // scope via name and [is=name]

        }, {
          key: "_applySimpleSelectorScope",
          value: function _applySimpleSelectorScope(selector, scopeSelector, hostSelector) {
            // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
            _polyfillHostRe.lastIndex = 0;

            if (_polyfillHostRe.test(selector)) {
              var replaceBy = this.strictStyling ? ".".concat(hostSelector) : scopeSelector;
              return selector.replace(_polyfillHostNoCombinatorRe, function (_, selector) {
                return selector.replace(/([^:]*)(:*)(.*)/, function (_, before, colon, after) {
                  return before + replaceBy + colon + after;
                });
              }).replace(_polyfillHostRe, replaceBy + ' ');
            }

            return scopeSelector + ' ' + selector;
          }
        }, {
          key: "_applyStrictSelectorScope",
          value: function _applyStrictSelectorScope(selector, scopeSelector, hostSelector) {
            var _this3 = this;

            var isRe = /\[is=([^\]]*)\]/g;
            scopeSelector = scopeSelector.replace(isRe, function (_) {
              return arguments.length <= 1 ? undefined : arguments[1];
            });
            var className = '.' + scopeSelector;

            var _scopeSelectorPart = function _scopeSelectorPart(p) {
              var scopedP = p.trim();

              if (!scopedP) {
                return '';
              }

              if (p.indexOf(_polyfillHostNoCombinator) > -1) {
                scopedP = _this3._applySimpleSelectorScope(p, scopeSelector, hostSelector);
              } else {
                // remove :host since it should be unnecessary
                var t = p.replace(_polyfillHostRe, '');

                if (t.length > 0) {
                  var matches = t.match(/([^:]*)(:*)(.*)/);

                  if (matches) {
                    scopedP = matches[1] + className + matches[2] + matches[3];
                  }
                }
              }

              return scopedP;
            };

            var safeContent = new SafeSelector(selector);
            selector = safeContent.content();
            var scopedSelector = '';
            var startIndex = 0;
            var res;
            var sep = /( |>|\+|~(?!=))\s*/g; // If a selector appears before :host it should not be shimmed as it
            // matches on ancestor elements and not on elements in the host's shadow
            // `:host-context(div)` is transformed to
            // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
            // the `div` is not part of the component in the 2nd selectors and should not be scoped.
            // Historically `component-tag:host` was matching the component so we also want to preserve
            // this behavior to avoid breaking legacy apps (it should not match).
            // The behavior should be:
            // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
            // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
            //   `:host-context(tag)`)

            var hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1; // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present

            var shouldScope = !hasHost;

            while ((res = sep.exec(selector)) !== null) {
              var separator = res[1];

              var _part = selector.slice(startIndex, res.index).trim();

              shouldScope = shouldScope || _part.indexOf(_polyfillHostNoCombinator) > -1;
              var scopedPart = shouldScope ? _scopeSelectorPart(_part) : _part;
              scopedSelector += "".concat(scopedPart, " ").concat(separator, " ");
              startIndex = sep.lastIndex;
            }

            var part = selector.substring(startIndex);
            shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
            scopedSelector += shouldScope ? _scopeSelectorPart(part) : part; // replace the placeholders with their original values

            return safeContent.restore(scopedSelector);
          }
        }, {
          key: "_insertPolyfillHostInCssText",
          value: function _insertPolyfillHostInCssText(selector) {
            selector = selector.replace(_colonHostContextRe, _polyfillHostContext).replace(_colonHostRe, _polyfillHost).replace(_colonSlottedRe, _polyfillSlotted);
            return selector;
          }
        }]);

        return ShadowCss;
      }();

      var SafeSelector = /*#__PURE__*/function () {
        function SafeSelector(selector) {
          var _this4 = this;

          _classCallCheck(this, SafeSelector);

          this.placeholders = [];
          this.index = 0; // Replaces attribute selectors with placeholders.
          // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.

          selector = selector.replace(/(\[[^\]]*\])/g, function (_, keep) {
            var replaceBy = "__ph-".concat(_this4.index, "__");

            _this4.placeholders.push(keep);

            _this4.index++;
            return replaceBy;
          }); // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
          // WS and "+" would otherwise be interpreted as selector separators.

          this._content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, function (_, pseudo, exp) {
            var replaceBy = "__ph-".concat(_this4.index, "__");

            _this4.placeholders.push(exp);

            _this4.index++;
            return pseudo + replaceBy;
          });
        }

        _createClass(SafeSelector, [{
          key: "restore",
          value: function restore(content) {
            var _this5 = this;

            return content.replace(/__ph-(\d+)__/g, function (_, index) {
              return _this5.placeholders[+index];
            });
          }
        }, {
          key: "content",
          value: function content() {
            return this._content;
          }
        }]);

        return SafeSelector;
      }();

      var CssRule = function CssRule(selector, content) {
        _classCallCheck(this, CssRule);

        this.selector = selector;
        this.content = content;
      };

      var StringWithEscapedBlocks = function StringWithEscapedBlocks(escapedString, blocks) {
        _classCallCheck(this, StringWithEscapedBlocks);

        this.escapedString = escapedString;
        this.blocks = blocks;
      };

      var _polyfillHost = '-shadowcsshost';
      var _polyfillSlotted = '-shadowcssslotted'; // note: :host-context pre-processed to -shadowcsshostcontext.

      var _polyfillHostContext = '-shadowcsscontext';

      var _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';

      var _cssColonHostRe = new RegExp('(' + _polyfillHost + _parenSuffix, 'gim');

      var _cssColonHostContextRe = new RegExp('(' + _polyfillHostContext + _parenSuffix, 'gim');

      var _cssColonSlottedRe = new RegExp('(' + _polyfillSlotted + _parenSuffix, 'gim');

      var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';

      var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
      var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
      var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
      var _polyfillHostRe = /-shadowcsshost/gim;
      var _colonHostRe = /:host/gim;
      var _colonSlottedRe = /::slotted/gim;
      var _colonHostContextRe = /:host-context/gim;
      var _commentRe = /\/\*\s*[\s\S]*?\*\//g;

      var stripComments = function stripComments(input) {
        return input.replace(_commentRe, '');
      };

      var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;

      var extractCommentsWithHash = function extractCommentsWithHash(input) {
        return input.match(_commentWithHashRe) || [];
      };

      var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
      var _curlyRe = /([{}])/g;
      var OPEN_CURLY = '{';
      var CLOSE_CURLY = '}';
      var BLOCK_PLACEHOLDER = '%BLOCK%';

      var processRules = function processRules(input, ruleCallback) {
        var inputWithEscapedBlocks = escapeBlocks(input);
        var nextBlockIndex = 0;
        return inputWithEscapedBlocks.escapedString.replace(_ruleRe, function () {
          var selector = arguments.length <= 2 ? undefined : arguments[2];
          var content = '';
          var suffix = arguments.length <= 4 ? undefined : arguments[4];
          var contentPrefix = '';

          if (suffix && suffix.startsWith('{' + BLOCK_PLACEHOLDER)) {
            content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
            suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
            contentPrefix = '{';
          }

          var rule = ruleCallback(new CssRule(selector, content));
          return "".concat(arguments.length <= 1 ? undefined : arguments[1]).concat(rule.selector).concat(arguments.length <= 3 ? undefined : arguments[3]).concat(contentPrefix).concat(rule.content).concat(suffix);
        });
      };

      var escapeBlocks = function escapeBlocks(input) {
        var inputParts = input.split(_curlyRe);
        var resultParts = [];
        var escapedBlocks = [];
        var bracketCount = 0;
        var currentBlockParts = [];

        for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
          var part = inputParts[partIndex];

          if (part === CLOSE_CURLY) {
            bracketCount--;
          }

          if (bracketCount > 0) {
            currentBlockParts.push(part);
          } else {
            if (currentBlockParts.length > 0) {
              escapedBlocks.push(currentBlockParts.join(''));
              resultParts.push(BLOCK_PLACEHOLDER);
              currentBlockParts = [];
            }

            resultParts.push(part);
          }

          if (part === OPEN_CURLY) {
            bracketCount++;
          }
        }

        if (currentBlockParts.length > 0) {
          escapedBlocks.push(currentBlockParts.join(''));
          resultParts.push(BLOCK_PLACEHOLDER);
        }

        return new StringWithEscapedBlocks(resultParts.join(''), escapedBlocks);
      };

      var scopeCss = function scopeCss(cssText, scopeId, commentOriginalSelector) {
        var sc = new ShadowCss();
        return sc.shimCssText(cssText, scopeId, scopeId + '-h', scopeId + '-s', commentOriginalSelector);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=shadow-css-bbdf056f-05cd1ccb-js-es5.js.map