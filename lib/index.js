(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ct-adc-uploaders"] = factory();
	else
		root["ct-adc-uploaders"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author rubyisapm
 */
!(module.exports = {
    /**
     * 获取字符串的字节长度
     * @param str
     * @returns {number}
     */
    getByteLen: function (str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i].match(/[^x00-xff]/ig) != null) //全角
                len += 2;
            else
                len += 1;
        }
        return len;
    },
    /**
     * 将字符串的首字母大写
     * @param {string} str 原字符串
     * @returns {string} 转换后的字符串
     */
    upperCaseFirst: function (str) {
        str = str + '';
        return str.replace(/^[a-z]/, function (firstLetter) {
            return firstLetter.toUpperCase();
        })
    },
    /**
     * 将字符串的首字母小写
     * @param {string} str 原字符串
     * @returns {string} 转换后的字符串
     */
    lowerCaseFirst: function (str) {
        str = str + '';
        return str.replace(/^[A-Z]/, function (firstLetter) {
            return firstLetter.toLowerCase();
        })
    },
    /**
     * 判断一个值是不是window对象
     * @param obj
     * @returns {boolean}
     */
    isWindow: function (obj) {
        return obj != null && obj === obj.window;
    },
    /**
     * 判断一个值是不是数组
     * @param {*} val 要判断的值
     * @returns {boolean} 是否为数组
     */
    isArray: function (val) {
        return Array.isArray(val);
    },
    /**
     * 判断一个值是不是对象
     * @param {*} val 要判断的值
     * @returns {boolean} 是否为数组
     */
    isObject: function (val) {
        return typeof val === 'object' && !this.isArray(val);
    },
    /**
     * 判断一个值是不是纯文本对象
     * 即其属性不是对象/dom节点/window
     * @param obj
     * @returns {boolean}
     */
    isPlainObject: function (obj) {
        if (!this.isObject(obj) || obj.nodeType || this.isWindow(obj)) {
            return false;
        }
        if (obj.constructor && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
            return false;
        }
        return true;
    },
    /**
     * 判断一个值是不是JSON
     * @param val
     * @returns {boolean}
     */
    isJSON: function (val) {
        try {
            var result = JSON.parse(val);
            return typeof result === 'object';
        } catch (e) {
            return false;
        }
    },
    /**
     * 判断一个值是不是函数
     * @param val
     * @returns {boolean}
     */
    isFunction: function (val) {
        return typeof val === 'function';
    },
    /**
     * 判断一个值是不是正则表达式
     * @param obj
     * @returns {boolean}
     */
    isRegExp: function (obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
    },

    extend: function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (!this.isObject(target) && !this.isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if (( options = arguments[i] ) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && ( this.isPlainObject(copy) ||
                        ( copyIsArray = this.isArray(copy) ) )) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];

                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = this.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    },

    /**
     * 检测对象是否为空对象
     * @param {?Object} obj 要检测的对象，null会被检测为空对象
     * @returns {boolean}
     */
    isEmptyObject: function (obj) {
        for (var i in obj) {
            return false;
        }
        return true;
    },

    getObjValByKey: function (obj, key) {
        key = key.split('.');
        var result = obj;
        key.map(function (item) {
            result = result[item];
        });
        return result;
    },
    /**
     * 判断浏览器是否支持storage
     * @param {string} type 'localStorage'/'sessionStorage'
     * @returns {boolean}
     */
    isStorageAvailable: function (type) {
        try {
            var x = '__storage_test__',
                storage = window[type];
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }
})
;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    var base = __webpack_require__(0),
        objTransfer = __webpack_require__(17),
        cookie = __webpack_require__(14),
        localStorage = __webpack_require__(16),
        sessionStorage = __webpack_require__(18),
        URIParser = __webpack_require__(13),
        numberFormat=__webpack_require__(3),
        dateFilter=__webpack_require__(15);

    return {
        base: base,
        objTransfer: objTransfer,
        cookie: cookie,
        localStorage: localStorage,
        sessionStorage: sessionStorage,
        URIParser:URIParser,
        numberFormat:numberFormat,
        dateFilter:dateFilter
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by wx-wangxiang on 17/01/03.
 */
!(module.exports = {
	//将字符串转化为数字
	toInt: function(str){
	    return parseInt(str, 10) || 0;
	},
	/**
	 * 补零操作
	 * @param  {int} num    需要进行补零操作的参数
	 * @param  {int} digits 想要拓展的位数
	 * @return {string}     补零操作后的数字
	 */
	zeroFill: function(num, digits) {
		var num = '' + num; //将数字转为字符串的简便方法，同样的如果将数字字符串转为数字可以在其前面加上"+"号
		while(num.length < digits) {
			num = '0' + num;
		}
		return num;
	}
})

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(23)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/uploader/component/img-uploader/img-uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] img-uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-368ce0ec", Component.options)
  } else {
    hotAPI.reload("data-v-368ce0ec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/uploader/component/importer/importer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] importer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f72296c", Component.options)
  } else {
    hotAPI.reload("data-v-7f72296c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_uploader_img_uploader_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_uploader_img_uploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_uploader_img_uploader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__importer_importer_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__importer_importer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__importer_importer_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ImgUploader", function() { return __WEBPACK_IMPORTED_MODULE_0__img_uploader_img_uploader_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Importer", function() { return __WEBPACK_IMPORTED_MODULE_1__importer_importer_vue___default.a; });





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ct_utility__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ct_utility___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ct_utility__);



var ERRORS = {
    Q_EXCEED_NUM_LIMIT: '文件数量超出限制!',
    Q_EXCEED_SIZE_LIMIT: '文件总大小超出限制!',
    Q_TYPE_DENIED: '文件类型不正确!',
    F_EXCEED_SIZE: '文件大小超出限制!',
    F_DUPLICATE: '文件重复!'
};

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'img-uploader',
    props: {
        thumbnailWidth: {
            type: Number,
            default: 110
        },
        thumbnailHeight: {
            type: Number,
            default: 110
        },
        imgs: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        server: {
            type: String,
            default: ''
        },
        resultFilter: {
            type: Function,
            default: function _default() {
                return new Function();
            }
        },
        method: {
            type: String,
            default: 'post'
        },
        duplicate: {
            type: Boolean,
            default: true
        },
        accept: {
            type: Object,
            default: function _default() {
                return {
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/gif,image/jpg,image/jpeg,image/bmp,image/png'
                };
            }
        },
        fileSingleSizeLimit: {
            type: Number,
            default: 2 * 1024 * 1024
        },
        fileNumLimit: {
            type: Number,
            default: 5
        },
        formData: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            thumbs: []
        };
    },

    computed: {
        uploadedImgs: function uploadedImgs() {
            var _this = this;

            var imgs = [];

            this.thumbs.map(function (item) {
                if (_this.isCompleteImg(item.status)) {
                    imgs.push({
                        errorText: item.errorText,
                        previewSrc: item.previewSrc,
                        previewStatus: item.previewStatus,
                        status: item.status,
                        url: item.url
                    });
                }
            });
            return imgs;
        },
        errorImgs: function errorImgs() {
            var _this2 = this;

            var imgs = [];

            this.thumbs.map(function (item) {
                if (_this2.isErrorImg(item.status)) {
                    imgs.push({
                        errorText: item.errorText,
                        previewSrc: item.previewSrc,
                        previewStatus: item.previewStatus,
                        status: item.status,
                        url: item.url
                    });
                }
            });
            return imgs;
        },
        pendingImgs: function pendingImgs() {
            var _this3 = this;

            var imgs = [];

            this.thumbs.map(function (item) {
                if (_this3.isPendingImg(item.status)) {
                    imgs.push({
                        errorText: item.errorText,
                        previewSrc: item.previewSrc,
                        previewStatus: item.previewStatus,
                        status: item.status,
                        url: item.url
                    });
                }
            });
            return imgs;
        }
    },
    created: function created() {
        this.initThumbs();
    },
    mounted: function mounted() {
        var _this4 = this;

        this.initUploader();
        setTimeout(function () {
            var element = _this4.$refs.root.querySelector('.webuploader-element-invisible');
            element.style.width = _this4.thumbnailWidth + 'px';
            element.style.height = _this4.thumbnailHeight + 'px';
        });
    },

    methods: {
        isCompleteImg: function isCompleteImg(status) {
            return status === 'complete';
        },
        isPendingImg: function isPendingImg(status) {
            var statuses = ['inited', 'progress', 'queued', 'progress'];

            return statuses.indexOf(status) > -1;
        },
        isErrorImg: function isErrorImg(status) {
            var statuses = ['error', 'cancelled', 'interrupt', 'invalid'];

            return statuses.indexOf(status) > -1;
        },
        isCanBeStoppedImg: function isCanBeStoppedImg(status) {
            var statuses = ['inited', 'queued', 'progress', 'interrupt', 'cancelled'];

            return statuses.indexOf(status) > -1;
        },
        initThumbs: function initThumbs() {
            var _this5 = this;

            var defaults = {
                file: null,
                status: '',
                errorText: '',
                previewStatus: true,
                previewSrc: '',
                url: '' };
            this.imgs.map(function (url) {
                _this5.thumbs.push(__WEBPACK_IMPORTED_MODULE_0_ct_utility___default.a.base.extend(defaults, {
                    url: url,
                    previewSrc: url,
                    status: 'complete'
                }));
            });
        },
        removeFile: function removeFile(index) {
            if (index === this.thumbs.length - 1) {
                this.$emit('runtime-error', '');
                this.$emit('change-status');
            }
            if (this.thumbs[index].file !== null) {
                this.uploader.removeFile(this.thumbs[index].file);
            }
            this.thumbs = this.thumbs.filter(function (item, i) {
                return i !== index;
            });
        },
        upload: function upload() {
            this.uploader.upload();
        },
        initUploader: function initUploader() {
            var that = this;

            var uploader = WebUploader.create({
                pick: {
                    id: '.addThumb'
                },
                server: that.server,
                method: that.method,
                duplicate: that.duplicate,
                auto: true,
                chunked: true,
                accept: that.accept,
                fileSingleSizeLimit: that.fileSingleSizeLimit,
                fileNumLimit: that.fileNumLimit
            });

            function addFile(file) {
                var fileData = {
                    file: file,
                    status: '',
                    errorText: '',
                    previewStatus: false,
                    previewSrc: '',
                    url: '' };
                uploader.makeThumb(file, function (error, src) {
                    if (error) {
                        fileData.previewStatus = false;
                        return;
                    }
                    fileData.previewStatus = true;
                    fileData.previewSrc = src;
                }, that.thumbnailWidth, that.thumbnailHeight);

                file.on('statuschange', function (cur) {
                    fileData.status = cur;
                });
                that.thumbs.push(fileData);
            }

            uploader.on('uploadBeforeSend', function (object, data, headers) {
                __WEBPACK_IMPORTED_MODULE_0_ct_utility___default.a.base.extend(data, that.formData);
            });
            uploader.onFileQueued = function (file) {
                addFile(file);
            };
            uploader.onUploadSuccess = function (file, res) {
                var result = that.resultFilter(res);
                that.thumbs = that.thumbs.map(function (item) {
                    if (item.file !== null && item.file.id === file.id) {
                        if (result.status) {
                            item.url = result.path;
                            that.$emit('runtime-success');
                            that.$emit('runtime-error', '');
                            that.$emit('change-status');
                            return item;
                        } else {
                            item.url = '';
                            item.status = 'error';
                            item.errorText = result.msg;
                            that.$emit('runtime-error', result.msg);
                            that.$emit('change-status');
                            return item;
                        }
                    } else {
                        return item;
                    }
                });
            };
            uploader.onUploadError = function (file, reason) {
                that.thumbs = that.thumbs.map(function (item) {
                    that.$emit('runtime-error', reason);
                    that.$emit('change-status');
                    if (item.file !== null && item.file.id === file.id) {
                        item.url = '';
                        item.errorText = reason;
                        return item;
                    } else {
                        return item;
                    }
                });
            };
            uploader.onError = function (code) {
                that.$emit('runtime-error', ERRORS[code] || '请检查文件是否符合要求!');
                that.$emit('change-status');
            };
            that.uploader = uploader;
        },
        isPending: function isPending() {
            return this.pendingImgs.length > 0;
        },
        getUploadedImgs: function getUploadedImgs() {
            return this.uploadedImgs;
        },
        getErrorImgs: function getErrorImgs() {
            return this.errorImgs;
        },
        getPendingImgs: function getPendingImgs() {
            return this.pendingImgs;
        },
        getUrls: function getUrls() {
            return this.uploadedImgs.map(function (item) {
                return item.url;
            });
        },
        refreshUploader: function refreshUploader() {
            this.uploader.refresh();
        },
        resetUploader: function resetUploader() {
            this.uploader.reset();
        },
        cancelUpload: function cancelUpload() {
            var _this6 = this;

            this.uploader.stop(true);
            this.thumbs = this.thumbs.filter(function (item) {
                if (_this6.isCanBeStoppedImg(item.status)) {
                    if (item.file !== null) {
                        _this6.uploader.removeFile(item.file, true);
                    }
                }
                return !_this6.isCanBeStoppedImg(item.status);
            });
        }
    },
    watch: {
        imgs: function imgs() {
            this.initThumbs();
        },
        thumbs: function thumbs(newVal, oldVal) {
            var _this7 = this;

            if (newVal.length < oldVal.length && oldVal.length === this.fileNumLimit) {
                this.$nextTick(function () {
                    _this7.uploader.addButton({
                        id: '.addThumb'
                    });
                });
            }
        },

        server: function server(_server) {
            this.uploader.option('server', _server);
        },
        method: function method(newVal) {
            this.uploader.option('method', newVal);
        },
        duplicate: function duplicate() {
            this.uploader.destroy();
            this.initUploader();
        },
        accept: function accept() {
            this.uploader.destroy();
            this.initUploader();
        },
        fileSingleSizeLimit: function fileSingleSizeLimit() {
            this.uploader.destroy();
            this.initUploader();
        }
    }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ct_utility__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ct_utility___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ct_utility__);



var ERRORS = {
    Q_EXCEED_NUM_LIMIT: '文件数量超出限制',
    Q_EXCEED_SIZE_LIMIT: '文件总大小超出限制!',
    Q_TYPE_DENIED: '文件类型不正确!'
};
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'importer',
    props: {
        hasInput: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            default: '导入文件'
        },
        inputPlaceholder: {
            type: String,
            default: '请上传一个文件'
        },
        server: {
            type: String,
            default: ''
        },
        method: {
            type: String,
            default: 'GET'
        },
        accept: {
            type: Object,
            default: function _default() {
                return {
                    extensions: '',
                    mimeTypes: ''
                };
            }
        },
        fileSizeLimit: {
            type: Number
        },
        formData: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        chunked: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'top'
        },
        tip: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            fileName: '',
            loading: false
        };
    },
    mounted: function mounted() {
        this.initUploader();
        this.initTip();
        if (this.disabled) {
            this.disableUploader();
        } else {
            this.enableUploader();
        }
        this.refresh();
    },

    methods: {
        initUploader: function initUploader() {
            var that = this;
            that.uploader = WebUploader.create({
                pick: {
                    id: that.$refs.root
                },
                auto: true,
                chunked: that.chunked,
                server: that.server,
                method: that.method,
                accept: that.accept,
                fileSizeLimit: that.fileSizeLimit
            });
            that.uploader.on('uploadBeforeSend', function (object, data, headers) {
                __WEBPACK_IMPORTED_MODULE_0_ct_utility___default.a.base.extend(data, that.formData);
            });
            that.uploader.on('uploadStart', function () {
                that.$emit('start');
                that.loading = true;
            });

            that.uploader.on('uploadSuccess', function (file, response) {
                if (that.hasInput) {
                    that.fileName = file.name;
                }
                that.$emit('success', response);
            });

            that.uploader.on('uploadError', function (file, reason) {
                if (that.hasInput) {
                    that.fileName = '';
                }
                that.$emit('error', reason);
            });

            that.uploader.on('error', function (code) {
                var msg = ERRORS[code] || '上传失败，请重试！';
                that.loading = false;
                if (that.hasInput) {
                    that.fileName = '';
                }
                that.$emit('error', msg);
            });

            that.uploader.on('uploadComplete', function () {
                that.loading = false;
                that.uploader.reset();
            });
        },
        refresh: function refresh() {
            this.uploader.refresh();
        },
        stop: function stop() {
            this.loading = false;
            this.uploader.stop(true);
        },
        initTip: function initTip() {
            $(this.$refs.root).tooltip({
                title: this.tip,
                placement: this.direction
            });
        },
        disableTip: function disableTip() {
            $(this.$refs.root).tooltip('disable');
        },
        enableTip: function enableTip() {
            $(this.$refs.root).tooltip('enable');
        },
        destroyTip: function destroyTip() {
            $(this.$refs.root).tooltip('destroy');
        },
        disableUploader: function disableUploader() {
            var classes = this.$refs.root.querySelector('.webuploader-pick').classList;
            if (!classes.contains('webuploader-pick-disable')) {
                this.$refs.root.querySelector('.webuploader-pick').classList.add('webuploader-pick-disable');
            }
            this.enableTip();
        },
        enableUploader: function enableUploader() {
            var classes = this.$refs.root.querySelector('.webuploader-pick').classList;
            if (classes.contains('webuploader-pick-disable')) {
                this.$refs.root.querySelector('.webuploader-pick').classList.remove('webuploader-pick-disable');
            }
            this.disableTip();
        }
    },
    watch: {
        accept: function accept() {
            this.uploader.destroy();
            this.initUploader();
        },
        fileSizeLimit: function fileSizeLimit() {
            this.uploader.destroy();
            this.initUploader();
        },
        chunked: function chunked(newVal) {
            this.uploader.option('chunked', newVal);
        },
        buttonText: function buttonText(newVal) {
            var $webuploaderPick = this.$refs.root.querySelector('.webuploader-pick');
            $webuploaderPick.innerHTML = '<i class="glyphicon glyphicon-import"></i><span class="title">' + newVal + '</span>';
        },
        hasInput: function hasInput(newVal) {
            var $webuploaderPick = this.$refs.root.querySelector('.webuploader-pick').querySelector('.glyphicon');
            if (newVal) {
                $webuploaderPick.classList.remove('glyphicon-import');
                $webuploaderPick.classList.add('glyphicon-folder-open');
            } else {
                $webuploaderPick.classList.remove('glyphicon-folder-open');
                $webuploaderPick.classList.add('glyphicon-import');
            }
        },
        method: function method(newVal) {
            this.uploader.option('method', newVal);
        },
        loading: function loading(isLoading) {
            var $webuploaderPick = this.$refs.root.querySelector('.webuploader-pick');
            if (isLoading) {
                $webuploaderPick.innerHTML = '<i class="glyphicon glyphicon-refresh rotate"></i><span class="title">' + '上传中...' + '</span>';
            } else {
                $webuploaderPick.innerHTML = '<i class="glyphicon glyphicon-import"></i><span class="title">' + this.buttonText + '</span>';
            }
        },

        server: function server(_server) {
            this.uploader.option('server', _server);
        },
        disabled: function disabled(newVal) {
            if (newVal) {
                this.disableUploader();
            } else {
                this.enableUploader();
            }
        },
        tip: function tip(newVal) {
            if (newVal === '') {
                this.disableTip();
            } else {
                this.enableTip();
            }
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.destroyTip();
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.ct-adc-img-uploader .webuploader-pick {\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.ct-adc-img-uploader .webuploader-element-invisible {\n    /*width: 110px;*/\n    /*height: 110px;*/\n    outline: none;\n    opacity: 0;\n    cursor: pointer;\n}\n.ct-adc-img-uploader.filelist {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.ct-adc-img-uploader.filelist:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    overflow: hidden;\n    clear: both;\n}\n.ct-adc-img-uploader.filelist li {\n    /*width: 110px;*/\n    /*height: 110px;*/\n    border: 1px solid #d4d4d4;\n    border-radius: 6px;\n    text-align: center;\n    margin: 0 8px 20px 0;\n    position: relative;\n    display: inline;\n    float: left;\n    overflow: hidden;\n    font-size: 12px;\n}\n.ct-adc-img-uploader.filelist li img {\n    width: 100%;\n    height: 100%;\n}\n.ct-adc-img-uploader.filelist li .thumbInfo {\n    position: absolute;\n    bottom: -2px;\n    right: -14px;\n    width: 46px;\n    height: 20px;\n    line-height: 20px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.ct-adc-img-uploader.filelist li .success {\n    background-color: #13ce66;\n    box-shadow: 0 0 5px #116235;\n}\n.ct-adc-img-uploader.filelist li .pending {\n    background-color: #ff5722;\n    box-shadow: 0 0 5px #c13509;\n}\n.ct-adc-img-uploader.filelist li .error {\n    background-color: #ec1515;\n    box-shadow: 0 0 5px #bf0303;\n}\n.filelist li .thumbInfo span {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    color: #fff;\n}\n.filelist li.addThumb {\n    position: relative;\n    border: 1px dashed #d4d4d4;\n    cursor: pointer;\n}\n.filelist li.addThumb span {\n    font-size: 30px;\n    color: #e3e3e3;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n.filelist li.addThumb:hover span {\n    color: #aaaaaa;\n}\n.filelist li img {\n    width: 100%;\n}\n.filelist li:hover .file-panel {\n    display: block;\n}\n.filelist div.file-panel {\n    display: none;\n    position: absolute;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    z-index: 300;\n}\n.filelist div.file-panel span {\n    font-size: 20px;\n    color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n}\n.glyphicon-refresh {\n    -webkit-animation: refreshing .8s infinite linear;\n            animation: refreshing .8s infinite linear;\n}\n@-webkit-keyframes refreshing {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes refreshing {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.ct-adc-importer.webuploader-container {\n    position: relative;\n    display: inline-block;\n}\n.ct-adc-importer.disabledWrap label {\n    position: absolute;\n    z-index: -9999;\n}\n.ct-adc-importer .webuploader-element-invisible {\n    position: absolute !important;\n    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n    clip: rect(1px, 1px, 1px, 1px);\n}\n.ct-adc-importer .webuploader-pick {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n    background: #00b7ee;\n    padding: 5px 10px;\n    color: #fff;\n    text-align: center;\n    border-radius: 3px;\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 1.5;\n    margin-bottom: 0;\n    font-weight: normal;\n    vertical-align: middle;\n    touch-action: manipulation;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    -ms-touch-action: manipulation;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.ct-adc-importer .webuploader-pick-hover {\n    background: #00a2d4;\n}\n.ct-adc-importer .webuploader-pick-disable {\n    opacity: 0.6;\n    pointer-events: none;\n}\n.ct-adc-importer .webuploader-pick .glyphicon {\n    margin-right: 5px;\n}\n.ct-adc-importer .input-group-addon{\n    padding:0;\n    border:none;\n}\n.ct-adc-importer .input-group-addon .webuploader-pick{\n    border-radius: 0 3px 3px 0;\n}\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
    var base=__webpack_require__(0);
    /**
     * 将查询字符串解析为查询参数数组
     * @param {string} search
     */
    function searchToParamGroup(search){
        var paramGroup={};
        if(search!==''){
            search.replace(/(\?|&|\b)(([^=?&]+)=([^=&]*))/g,function(_,_,$1,$2,$3){
                paramGroup[$2]=$3;
            });
        }
        return paramGroup;
    }

    /**
     * URL解析并返回对应的参数
     * @param {string} uri uri
     * @returns {{protocol: *, hostname: *, port: *, pathname: *, search: *, hash: *, host: *}}
     */
    function uriParser(uri){
        var parser = document.createElement('a');
        parser.href = uri;
        return {
            protocol:parser.protocol,
            hostname:parser.hostname,
            port:parser.port,
            pathname:parser.pathname,
            search:parser.search,
            hash:parser.hash,
            host:parser.host
        };
    }

    /**
     * 获取url中指定参数的值
     * @param {string} uri 要解析的url
     * @param {string} param 要获取的查询参数的key值
     * @returns {undefined | string}
     */
    function getParam(uri,param){
        var paramGroup=searchToParamGroup(uriParser(uri).search);
        if(!base.isEmptyObject(paramGroup)){
            return paramGroup[param];
        }
    }

    /**
     * 获取url中的参数集合
     * @param {string} uri 要解析的url
     * @returns {object}
     */
    function getParamGroup(uri){
        return searchToParamGroup(uriParser(uri).search);
    }


    return{
        uriParser:uriParser,
        getParamGroup:getParamGroup,
        getParam:getParam,
        searchToParamGroup:searchToParamGroup
    };
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author liwei
 */


!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	"use strict";

	/**
	 * 获取 cookie
	 * @param  {String} sKey 键名
	 * @return {String}      键名
	 */
	function get(sKey) {
		return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
	}

	/**
	 * 设置 cookie
	 * @param {String} sKey    键名
	 * @param {String} sValue  键值
	 * @param {[type]} vEnd    过期时间
	 * @param {String} sPath   路径
	 * @param {String} sDomain 域名
	 * @param {Boolean} bSecure 安全
	 */
	function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		var sExpires = '';

		if ( !sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey) ) {
			return false;
		}

		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
					sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
					break;

				case String:
					sExpires = '; expires=' + vEnd;
					break;
					
				case Date:
					sExpires = '; expires=' + vEnd.toUTCString();
					break;
			}
		}

		document.cookie = encodeURIComponent( sKey ) + '=' + encodeURIComponent( sValue ) +
			sExpires +
			(sDomain ? '; domain=' + sDomain : '') +
			(sPath ? '; path=' + sPath : '') +
			(bSecure ? '; secure' : '');

		return true;
	}

	/**
	 * 移除某个 cookie
	 * @param  {String} sKey    键名
	 * @param  {String} sPath   路径
	 * @param  {String} sDomain 域名
	 * @return {Boolean}        true-删除成功，false-删除失败
	 */
	function remove(sKey, sPath, sDomain) {
		if ( !sKey || !has(sKey) ) {
			return false;
		}

		document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
							(sDomain ? '; domain=' + sDomain : '') +
								(sPath ? '; path=' + sPath : '');
		
		return true;
	}

	/**
	 * 判断是否拥有某个 key
	 * @param  {String}  sKey 键名
	 * @return {Boolean}
	 */
	function has(sKey) {
		var patt = new RegExp( '(?:^|;\\s*)' + encodeURIComponent( sKey ).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=' );

		return patt.test( document.cookie );
	}

	/**
	 * 获取
	 * @return {Object} 所有的 cookie 键值对
	 */
	function keys() {
		var map     = {},
			allKeys = document.cookie.
						replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').
							split( /\s*(?:\=[^;]*)?;\s*/ );


		allKeys.forEach(function( key ) {
			map[ decodeURIComponent(key) ] = get( key );
		});

		return map;
	}

	return {
		get    : get,
		set    : set,
		remove : remove,
		has    : has,
		keys   : keys
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author wangxiang
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	var numberFormat = __webpack_require__(3),
		rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    	raspnetjson = /^\/Date\((\d+)\)\/$/, //匹配 /Date(12345)/ 类型的字符串
		DATE_FORMATS = {
		yyyy: dateGetter("FullYear", 4), //对年份进行四位数的显示 如：2017/01/06
		yy: dateGetter("FullYear", 2, 0, true), //对年份进行两位数的显示 如：17/01/06
		y: dateGetter("FullYear", 1), //年份的一般的显示 如：2017/01/06
		MM: dateGetter("Month", 2, 1), //对于月份的单个数字会进行补零, 如：2017/01/06
	  	M: dateGetter("Month", 1, 1), //对于月份的单个数字不会进行补零, 如：2017/1/06
	  	dd: dateGetter("Date", 2), //对于日期的单个数字会进行补零, 如：2017/01/06
	  	d: dateGetter("Date", 1), //对于日期的单个数字不会补零, 如：2017/01/6
	  	HH: dateGetter("Hours", 2), //对于小时的单个数字会进行补零,并且是24小时制 如：2017/01/06 08:01
	  	H: dateGetter("Hours", 1), //对于小时的单个数字不会进行补零,并且是24小时制 如：2017/01/06 8:01
	  	hh: dateGetter("Hours", 2, -12), //对于小时的单个数字会进行补零,并且是12小时制 如：2017/01/06 08:01
	  	h: dateGetter("Hours", 1, -12), //对于小时的单个数字不会进行补零,并且是12小时制 如：2017/01/06 8:01
	  	mm: dateGetter("Minutes", 2), //对于分钟的单个数字会进行补零 如：2017/03/06 08:01
	  	m: dateGetter("Minutes", 1), //对于分钟的单个数字不会进行补零 如：2017/03/06 08:1
	  	ss: dateGetter("Seconds", 2), //对于秒数的单个数字会进行补零 如：2017/03/06 08:01:09
	  	s: dateGetter("Seconds", 1), //对于秒数的单个数字会进行补零 如：2017/03/06 08:01:9
	};
	/**
	 * 根据不同的日期format,获取相应的年，月，日，时，分，秒的显示格式
	 * @param  {string} name   函数通过该参数执行不同的时间操作的方法
	 * @param  {int} size   日期显示的位数
	 * @param  {int} offset 时间显示的格式，12小时制还是24小时制(用于小时的显示)
	 * @param  {boolean} trim   用于年份的两位数的显示
	 * @return {Function}        返回数字格式化方法
	 */
	function dateGetter(name, size, offset, trim) {
	    return function (date) {
		    var value = date["get" + name]();
		    if (offset > 0 || value > -offset){
		      	value += offset;
		    }
		    if (value === 0 && offset === -12) {
		      	value = 12;
		    }
		    return padNumber(value, size, trim);
		}
	}
	/**
	 * 数字格式化
	 * @param  {int} num    获得的日期
	 * @param  {[type]} digits 日期要显示的位数
	 * @param  {boolean} trim   年份是否是两位数显示
	 * @return {string}        返回格式化后的数字
	 */
	function padNumber(num, digits, trim) {
		var neg = '';
		if (num < 0) {
		    neg = '-';
		    num = -num;
		}
		num = numberFormat.zeroFill(num, digits); //补零操作
		if (trim){
		    num = num.substr(num.length - digits);
		}
		return neg + num;
	}
	/**
	 * 日期格式化
	 * @param  {obj} date   日期对象
	 * @param  {string} format 格式化的方式
	 * @return {string}        格式化后的日期
	 */
	function dateFilter(date, format) {
		var text = "",
		    parts = [],
		    fn, match;
		format = format || "yyyy-M-d";
		if (typeof date === "string") {
		    if (/^\d+$/.test(date)) {
		      	date = numberFormat.toInt(date);
		    } else if (raspnetjson.test(date)) { //匹配 '/Date(1483410908227)/' 类型的字符串
		      	date = +RegExp.$1; //RegExp.$1 表示前面raspnetjson.test()匹配到的第一个括号中的内容
		    } else {
		      	console.error('请输入合法的日期');
		      	return;
		    }
		};
		if (typeof date === 'number') {
		    date = new Date(date);
		}
		while (format) {
		    match = rdateFormat.exec(format);
		    /* istanbul ignore else */
		    if (match) {
		      	parts = parts.concat(match.slice(1));
		      	format = parts.pop();
		    } else {
		      	parts.push(format);
		      	format = null;
		    }
		}
		parts.forEach(function (value) {
		    fn = DATE_FORMATS[value];
		    text += fn ? fn(date) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
		});
		return text;
	}

	return dateFilter
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @author liwei
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	'use strict';

	var base = __webpack_require__(0);

	var IS_LOCAL_STORAGE_AVAILABLE = base.isStorageAvailable( 'localStorage' );

	/**
	 * 设置一个 storage
	 * @param {String} sKey   键名
	 * @param {String} sValue 键值
	 */
	function set( sKey, sValue ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {
			localStorage.setItem( sKey, sValue );
		}
	}

	/**
	 * 获取 storage
	 * @param  {String} sKey 键名
	 * @return {String}      键值
	 */
	function get( sKey ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			return localStorage.getItem( sKey );
		}
	}

	/**
	 * 清除所有 storage
	 */
	function clear() {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			localStorage.clear();
		}
	}

	/**
	 * 删除一个 storage
	 * @param  {String} sKey 键名
	 */
	function remove( sKey ) {
		if ( IS_LOCAL_STORAGE_AVAILABLE ) {

			localStorage.removeItem( sKey );
		}
	}

	return {
		set: set,
		get: get,
		clear: clear,
		remove: remove
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @author rubyisapm
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
  var base=__webpack_require__(0);

  /**
   * 按照给定的规则转换原对象中的key的格式
   * @param {Function} transfer 转换函数
   * @param {?Object} obj 原对象
   * @returns {?Object} obj 转换后的对象
   */
  function transferKeyInObj(transfer,obj,jsonTransfer){
    if(obj===null){
      return obj;
    }
    var newObj={},
      keys=Object.keys(obj);
    if(keys.length===0){
      return obj;
    }
    keys.map(function(key){
      var val=obj[key],
        newKey=transfer(key);
      if(base.isObject(val)){
        newObj[newKey]=transferKeyInObj(transfer,val,jsonTransfer);
      }else if(base.isArray(val)){
        newObj[newKey]=transferKeyInArray(transfer,val,jsonTransfer);
      }else if(base.isJSON(val) && jsonTransfer){
        newObj[newKey]=JSON.stringify(transferKeyInJSON(transfer,val,jsonTransfer));
      }else{
        newObj[newKey]=val;
      }
    });
    return newObj;
  }

  /**
   * 按照给定的规则转换原数组中的对象中的key的格式
   * @param {Function} transfer 转换函数
   * @param {Array} arr 原对象
   * @returns {?Object} obj 转换后的对象
   */
  function transferKeyInArray(transfer,arr,jsonTransfer){
    if(arr.length==0){
      return arr;
    }
    var newArray=[];
    arr.map(function(item,index){
      if(base.isArray(item)){
        newArray[index]=transferKeyInArray(transfer,item,jsonTransfer);
      }else if(base.isObject(item)){
        newArray[index]=transferKeyInObj(transfer,item,jsonTransfer);
      }else if(base.isJSON(item) && jsonTransfer){
        newArray[index]=JSON.stringify(transferKeyInJSON(transfer,item,jsonTransfer));
      }else{
        newArray[index]=item;
      }
    });
    return newArray;
  }

  /**
   * 按照给定的规则转换原json字符串中的key的格式
   * @param {Function} transfer
   * @param {String} json
   */
  function transferKeyInJSON(transfer,json){
    var jsonObj=JSON.parse(json);
    if(base.isArray(jsonObj)){
      return transferKeyInArray(transfer,jsonObj,true);
    }else if(base.isObject(jsonObj)){
      return transferKeyInObj(transfer,jsonObj,true);
    }else if(base.isJSON(jsonObj)){
      return transferKeyInJSON(transfer,jsonObj,true)
    }

  }

  /**
   * 去除对象中某些属性值的前后空格
   * @param {object} obj 原对象
   * @param {array} keys 要修改的key，支持以.分隔的串联属性如app.id
   * @returns {*} 处理后的对象
   */
  function trimSome(obj,keys){
    var objClone=JSON.parse(JSON.stringify(obj));
    keys.map(function(key){
      if(/\./.test(key)){
        var target=objClone;
        keys=key.split('.');
        keys.map(function(key,index,arr){
          if(index===arr.length-1){
            target[key]=target[key].replace(/(^\s*|\s*$)/g,'')
          }else{
            target=target[key];
          }
        });
      }else{
        objClone[key]=objClone[key].replace(/(^\s*|\s*$)/g,'');
      }
    });
    return objClone;
  }


  return {
    /**
     * 将原对象中的key的首字母大写
     * @param {?Object} obj 原对象
     * @returns {?Object} 转换后的对象
     */
    upperKey:function(obj,jsonTransfer){
      if(base.isArray(obj)){
        return transferKeyInArray(base.upperCaseFirst,obj,jsonTransfer);
      }else{
        return transferKeyInObj(base.upperCaseFirst,obj,jsonTransfer);
      }
    },
    /**
     * 将原对象中的key的首字母小写
     * @param {?Object} obj 原对象
     * @returns {?Object} 转换后的对象
     */
    lowerKey:function(obj,jsonTransfer){
      if(base.isArray(obj)){
        return transferKeyInArray(base.lowerCaseFirst,obj,jsonTransfer);
      }else{
        return transferKeyInObj(base.lowerCaseFirst,obj,jsonTransfer);
      }
    },
    trimSome:trimSome
  }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @author liwei
 */


!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	'use strict';

	var base = __webpack_require__(0);

	var IS_SESSION_STORAGE_AVAILABLE = base.isStorageAvailable( 'sessionStorage' );

	/**
	 * 设置一个 storage
	 * @param {String} sKey   键名
	 * @param {String} sValue 键值
	 */
	function set( sKey, sValue ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			sessionStorage.setItem( sKey, sValue );
		}
	}

	/**
	 * 获取 storage
	 * @param  {String} sKey 键名
	 * @return {String}      键值
	 */
	function get( sKey ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			return sessionStorage.getItem( sKey );
		}
	}

	/**
	 * 清除所有 storage
	 */
	function clear() {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {
			
			sessionStorage.clear();
		}
	}

	/**
	 * 删除一个 storage
	 * @param  {String} sKey 键名
	 */
	function remove( sKey ) {
		if ( IS_SESSION_STORAGE_AVAILABLE ) {

			sessionStorage.removeItem( sKey );
		}
	}

	return {
		set: set,
		get: get,
		clear: clear,
		remove: remove
	};
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    ref: "root",
    staticClass: "filelist ct-adc-img-uploader"
  }, [_vm._l((_vm.thumbs), function(thumb, index) {
    return _c('li', {
      style: ({
        width: _vm.thumbnailWidth + 'px',
        height: _vm.thumbnailHeight + 'px'
      })
    }, [_c('img', {
      attrs: {
        "src": thumb.previewSrc
      }
    }), _vm._v(" "), (_vm.isPendingImg(thumb.status)) ? _c('div', {
      staticClass: "thumbInfo text-center pending"
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-refresh"
    })]) : _vm._e(), _vm._v(" "), (_vm.isCompleteImg(thumb.status)) ? _c('div', {
      staticClass: "thumbInfo text-center success"
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-ok"
    })]) : _vm._e(), _vm._v(" "), (_vm.isErrorImg(thumb.status)) ? _c('div', {
      staticClass: "thumbInfo text-center error"
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-remove"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "file-panel",
      on: {
        "click": function($event) {
          _vm.removeFile(index)
        }
      }
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-trash"
    })])])
  }), _vm._v(" "), (_vm.thumbs.length < _vm.fileNumLimit) ? _c('li', {
    staticClass: "addThumb",
    style: ({
      width: _vm.thumbnailWidth + 'px',
      height: _vm.thumbnailHeight + 'px'
    })
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-plus"
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-368ce0ec", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ct-adc-importer",
    class: {
      'input-group': _vm.hasInput
    }
  }, [(_vm.hasInput) ? _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": _vm.inputPlaceholder
    },
    domProps: {
      "value": _vm.fileName
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      'input-group-addon': _vm.hasInput
    }
  }, [_c('span', {
    ref: "root",
    staticClass: "webuploader-container",
    class: _vm.disabled ? 'disabledWrap' : '',
    attrs: {
      "data-placement": _vm.direction,
      "data-original-title": _vm.tip
    }
  }, [_c('i', {
    staticClass: "glyphicon",
    class: _vm.hasInput ? 'glyphicon-folder-open' : 'glyphicon-import'
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.buttonText))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f72296c", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("66ab79fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-368ce0ec\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./img-uploader.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-368ce0ec\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./img-uploader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("772e11ef", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7f72296c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./importer.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7f72296c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./importer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});