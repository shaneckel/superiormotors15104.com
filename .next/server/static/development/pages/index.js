module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\projects\\superiormotors15104\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Home = () => {
  return __jsx("main", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("header", {
    className: "jsx-841182572" + " " + "feature",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("aside", {
    className: "jsx-841182572" + " " + "top-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    href: "#reservation",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "reservation")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "#reservation",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "call")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "menu"))), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/private",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "private parties")))), __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-841182572" + " " + "svg-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/img/superiormotors-update.svg",
    alt: "superior motors 15104",
    className: "jsx-841182572" + " " + "svg-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })))), __jsx("article", {
    className: "jsx-841182572" + " " + "welcome skewleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "mainswipe swiper-container-horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-841182572" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-841182572" + " " + "slide swiper-slide swiper-slide-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/img/swipe/nswp1_l.jpg",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-841182572" + " " + "slide hide swiper-slide swiper-slide-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/img/swipe/nswp2_l.jpg",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-841182572" + " " + "slide swiper-slide swiper-slide-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/img/swipe/nswp3_l.jpg",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })))), __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Superior Motors"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Thoughtfully prepared food drawing inspiration from Braddock, its people, its history and its perseverance. The cuisine will best represent the eclectic style which has become a trademark of ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/kevinsousa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Chef Kevin Sousa")), "."))), __jsx("article", {
    className: "jsx-841182572" + " " + "accolades skewright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "accolades"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.nytimes.com/2018/07/07/travel/superior-motors-restaurant-pittsburgh-review.html",
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "NY Times - A Pittsburgh-Area Restaurant That Trades Fussy for Fun")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    href: "http://www.foodandwine.com/restaurants-of-the-year",
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Food & Wine - Restaurants of the Year 2018")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("a", {
    href: "http://time.com/collection/worlds-greatest-places-2018/5366708/superior-motors-braddock-pennsylvania/",
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Time Magazine - World's Greatest Places")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.pittsburghmagazine.com/Pittsburgh-Magazine/June-2018/Best-New-Restaurant-of-2018-Superior-Motors/",
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Pittsburgh Magazine - Best New Restaurant of 2018")))), __jsx("article", {
    className: "jsx-841182572" + " " + "hours skewright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Hours"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Monday \u2013 Tuesday / ", __jsx("span", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Closed")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Wednesday \u2013 Thursday / ", __jsx("span", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "5p \u2013 10p")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Friday / ", __jsx("span", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "5p \u2013 11p")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Saturday / ", __jsx("span", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "5p \u2013 11p")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Sunday / ", __jsx("span", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "5p \u2013 9p")))), __jsx("article", {
    id: "reservation",
    className: "jsx-841182572" + " " + "reservation skewleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Reservations"), __jsx("div", {
    className: "jsx-841182572" + " " + "reserve-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-841182572" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "We take reservations through ", __jsx("a", {
    href: "http://www.opentable.com/single.aspx?rid=289261&restref=289261",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Opentable"), "."), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Or call ", __jsx("a", {
    href: "tel:4122711022",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "(412) 271-1022"))))), __jsx("a", {
    href: "http://www.opentable.com/single.aspx?rid=289261&restref=289261",
    className: "jsx-841182572" + " " + "badge blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Reserve")), __jsx("article", {
    className: "jsx-841182572" + " " + "sourcing skewright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Getting Here"), __jsx("div", {
    className: "jsx-841182572" + " " + "hearth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-841182572" + " " + "right-hearth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Superior Motors is much closer than you think."), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Here's a list of times it takes to commute to Superior Motors."), __jsx("h2", {
    className: "jsx-841182572" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602",
    className: "jsx-841182572" + " " + "linkbutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "1211 Braddock Ave")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "(in low to moderate traffic)")), __jsx("div", {
    className: "jsx-841182572" + " " + "left-hearth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "North Side"), " 24min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Point Breeze"), " 21min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "South Side"), " 22min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Mount Lebanon"), " 39min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Downtown"), " 22min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Greensburg"), " 40min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Lawrenceville"), " 26min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Penn Hills"), " 20min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Monroeville"), " 13min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Troy Hill"), " 24min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Fox Chapel"), " 32min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Shadyside"), " 20min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Squirrel Hill"), " 15min"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("em", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "North Hills"), " 29min"))))), __jsx("article", {
    className: "jsx-841182572" + " " + "reservation misc skewleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Misc"), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.toasttab.com/superior-motors/giftcards",
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Superior Motors gift cards")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://my.matterport.com/show/?m=wkt14cLxhfg&utm_source=3",
    className: "jsx-841182572" + " " + "inlineorange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Virtual Tour of Superior Motors")))), __jsx("article", {
    className: "jsx-841182572" + " " + "location skewright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-841182572" + " " + "themap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "location"), __jsx("aside", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-841182572" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602",
    className: "jsx-841182572" + " " + "linkbutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "1211 Braddock Ave")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Braddock, Pennsylvania")), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Parking is available at our building."), __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "Located at the former site of one of the first indoor Chevrolet dealerships in the country."))), __jsx("article", {
    className: "jsx-841182572" + " " + "social skewleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-841182572" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "social"), __jsx("div", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.facebook.com/superiormotors15104",
    className: "jsx-841182572" + " " + "linkbutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "facebook"), __jsx("a", {
    href: "https://twitter.com/SM15104",
    className: "jsx-841182572" + " " + "linkbutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "twitter"), __jsx("a", {
    href: "https://instagram.com/superiormotors15104/",
    className: "jsx-841182572" + " " + "linkbutton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "instagram")))), __jsx("footer", {
    className: "jsx-841182572" + " " + "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "Superior Motors | 2019 | BRADDOCK, PA | ", __jsx("a", {
    href: "https://shaneckel.com",
    className: "jsx-841182572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "design"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "841182572",
    __self: undefined
  }, "section.mainswipe.jsx-841182572{margin-top:2.2em;}section.mainswipe.jsx-841182572 div.jsx-841182572{display:inline;}section.mainswipe.jsx-841182572 div.jsx-841182572 img.jsx-841182572{width:33.33%;}h1.jsx-841182572{font-weight:600;font-style:normal;font-size:2.2em;-webkit-letter-spacing:0.095em;-moz-letter-spacing:0.095em;-ms-letter-spacing:0.095em;letter-spacing:0.095em;padding:1.4em 0 .8em;}.hours.jsx-841182572{padding-bottom:15%;}p.jsx-841182572{font-size:1.3em;line-height:1.6em;font-weight:300;-webkit-letter-spacing:-0.015em;-moz-letter-spacing:-0.015em;-ms-letter-spacing:-0.015em;letter-spacing:-0.015em;}>article.jsx-841182572{position:relative;outline:1px solid transparent;}.location.jsx-841182572{padding-bottom:6.5em;}article.location.jsx-841182572 .themap.jsx-841182572{background:url(\"../../static/img/map.jpg\");background-size:cover;width:50%;top:5%;}article.location.jsx-841182572 .content.jsx-841182572{width:50%;padding-bottom:5%;}@media only screen and (max-width:767px){article.location.jsx-841182572 .content.jsx-841182572{width:100%;padding-bottom:15%;}}>article.jsx-841182572:before{display:block;background-color:rgba(71,79,82,0.25);position:absolute;left:0;top:0;content:\" \";width:calc(50% - 1140px / 2);height:100%;z-index:24;}.sourcing.jsx-841182572{padding-bottom:10%;}>article.jsx-841182572:after{display:block;background-color:rgba(71,79,82,0.25);position:absolute;right:0;top:0;content:\" \";width:calc(50% - 1140px / 2);height:100%;z-index:24;}.reservation.jsx-841182572{padding-bottom:20%;margin-top:-5.5em;}>article.jsx-841182572{outline:1px solid transparent;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcc3VwZXJpb3Jtb3RvcnMxNTEwNFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJa0IsQUFHNEIsQUFHRixBQUdGLEFBR0csQUFPRyxBQUdILEFBT0UsQUFLRyxBQUlxQixBQU9oQyxBQUtHLEFBS0MsQUFXSyxBQUdMLEFBV0ksQUFJWSxVQXRDWixDQUtHLEVBekN2QixDQThDMEMsQUFjQSxDQS9EMUMsQ0FNb0IsQUFVQSxDQW5CcEIsQ0EwQmdDLENBVmhDLEFBK0NBLEFBY29CLEVBOUNwQixPQVlBLEVBS0UsQUFpQ2tCLElBdkVGLEFBVUEsR0EwRGxCLE1BM0N3QixLQVJ4QixBQXVEQSxFQXZFeUIsQUFVQyxDQWdDTixBQWNBLGNBL0JSLElBa0JILEFBY0MsTUEvQkQsQ0FrQkQsQ0FjQSxLQS9CUixBQWtCYyxDQWNBLFdBYmlCLENBY0EsNEJBYmpCLENBY0EsV0FiRCxDQWNBLFVBYmIsQ0FjQSxZQTlEdUIsSUFVdkIsaUJBVEEiLCJmaWxlIjoiQzpcXHByb2plY3RzXFxzdXBlcmlvcm1vdG9yczE1MTA0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XG4gICAgICAgICAgPHA+PGEgaHJlZj1cIiNyZXNlcnZhdGlvblwiPnJlc2VydmF0aW9uPC9hPjwvcD5cbiAgICAgICAgICA8cD48YSBocmVmPVwiI3Jlc2VydmF0aW9uXCI+Y2FsbDwvYT48L3A+XG4gICAgICAgICAgPHA+PExpbmsgaHJlZj0nL21lbnUnPjxhPm1lbnU8L2E+PC9MaW5rPjwvcD5cbiAgICAgICAgICA8cD48TGluayBocmVmPScvcHJpdmF0ZSc+PGE+cHJpdmF0ZSBwYXJ0aWVzPC9hPjwvTGluaz48L3A+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1jb250YWluZXJcIj48aW1nIGNsYXNzTmFtZT1cInN2Zy1jb250ZW50XCIgc3JjPVwic3RhdGljL2ltZy9zdXBlcmlvcm1vdG9ycy11cGRhdGUuc3ZnXCIgYWx0PVwic3VwZXJpb3IgbW90b3JzIDE1MTA0XCIvPjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwid2VsY29tZSBza2V3bGVmdFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluc3dpcGUgc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlIHN3aXBlci1zbGlkZSBzd2lwZXItc2xpZGUtYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9zd2lwZS9uc3dwMV9sLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUgaGlkZSBzd2lwZXItc2xpZGUgc3dpcGVyLXNsaWRlLWFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvc3dpcGUvbnN3cDJfbC5qcGdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlIHN3aXBlci1zbGlkZSBzd2lwZXItc2xpZGUtYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9zd2lwZS9uc3dwM19sLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgxPlN1cGVyaW9yIE1vdG9yczwvaDE+XG4gICAgICAgICAgPHA+VGhvdWdodGZ1bGx5IHByZXBhcmVkIGZvb2QgZHJhd2luZyBpbnNwaXJhdGlvbiBmcm9tIEJyYWRkb2NrLCBpdHMgcGVvcGxlLCBpdHMgaGlzdG9yeSBhbmQgaXRzIHBlcnNldmVyYW5jZS4gVGhlIGN1aXNpbmUgd2lsbCBiZXN0IHJlcHJlc2VudCB0aGUgZWNsZWN0aWMgc3R5bGUgd2hpY2ggaGFzIGJlY29tZSBhIHRyYWRlbWFyayBvZiA8TGluayBocmVmPScva2V2aW5zb3VzYSc+PGEgY2xhc3NOYW1lPVwiaW5saW5lb3JhbmdlXCI+Q2hlZiBLZXZpbiBTb3VzYTwvYT48L0xpbms+LjwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhY2NvbGFkZXMgc2tld3JpZ2h0XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+YWNjb2xhZGVzPC9oMT5cbiAgICAgICAgICA8cD48YSBocmVmPVwiaHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAxOC8wNy8wNy90cmF2ZWwvc3VwZXJpb3ItbW90b3JzLXJlc3RhdXJhbnQtcGl0dHNidXJnaC1yZXZpZXcuaHRtbFwiIGNsYXNzTmFtZT1cImlubGluZW9yYW5nZVwiPk5ZIFRpbWVzIC0gQSBQaXR0c2J1cmdoLUFyZWEgUmVzdGF1cmFudCBUaGF0IFRyYWRlcyBGdXNzeSBmb3IgRnVuPC9hPjwvcD5cbiAgICAgICAgICA8cD48YSBocmVmPVwiaHR0cDovL3d3dy5mb29kYW5kd2luZS5jb20vcmVzdGF1cmFudHMtb2YtdGhlLXllYXJcIiBjbGFzc05hbWU9XCJpbmxpbmVvcmFuZ2VcIj5Gb29kICZhbXA7IFdpbmUgLSBSZXN0YXVyYW50cyBvZiB0aGUgWWVhciAyMDE4PC9hPjwvcD5cbiAgICAgICAgICA8cD48YSBocmVmPVwiaHR0cDovL3RpbWUuY29tL2NvbGxlY3Rpb24vd29ybGRzLWdyZWF0ZXN0LXBsYWNlcy0yMDE4LzUzNjY3MDgvc3VwZXJpb3ItbW90b3JzLWJyYWRkb2NrLXBlbm5zeWx2YW5pYS9cIiBjbGFzc05hbWU9XCJpbmxpbmVvcmFuZ2VcIj5UaW1lIE1hZ2F6aW5lIC0gV29ybGQncyBHcmVhdGVzdCBQbGFjZXM8L2E+PC9wPlxuICAgICAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL3d3dy5waXR0c2J1cmdobWFnYXppbmUuY29tL1BpdHRzYnVyZ2gtTWFnYXppbmUvSnVuZS0yMDE4L0Jlc3QtTmV3LVJlc3RhdXJhbnQtb2YtMjAxOC1TdXBlcmlvci1Nb3RvcnMvXCIgY2xhc3NOYW1lPVwiaW5saW5lb3JhbmdlXCI+UGl0dHNidXJnaCBNYWdhemluZSAtIEJlc3QgTmV3IFJlc3RhdXJhbnQgb2YgMjAxODwvYT48L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaG91cnMgc2tld3JpZ2h0XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+SG91cnM8L2gxPlxuICAgICAgICAgIDxwPk1vbmRheSDigJMgVHVlc2RheSAvIDxzcGFuPkNsb3NlZDwvc3Bhbj48L3A+XG4gICAgICAgICAgPHA+V2VkbmVzZGF5IOKAkyBUaHVyc2RheSAvIDxzcGFuPjVwIOKAkyAxMHA8L3NwYW4+PC9wPlxuICAgICAgICAgIDxwPkZyaWRheSAvIDxzcGFuPjVwIOKAkyAxMXA8L3NwYW4+PC9wPlxuICAgICAgICAgIDxwPlNhdHVyZGF5IC8gPHNwYW4+NXAg4oCTIDExcDwvc3Bhbj48L3A+XG4gICAgICAgICAgPHA+U3VuZGF5IC8gPHNwYW4+NXAg4oCTIDlwPC9zcGFuPjwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyZXNlcnZhdGlvbiBza2V3bGVmdFwiIGlkPVwicmVzZXJ2YXRpb25cIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMT5SZXNlcnZhdGlvbnM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXJ2ZS13aWRnZXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICA8cD5XZSB0YWtlIHJlc2VydmF0aW9ucyB0aHJvdWdoIDxhIGhyZWY9J2h0dHA6Ly93d3cub3BlbnRhYmxlLmNvbS9zaW5nbGUuYXNweD9yaWQ9Mjg5MjYxJnJlc3RyZWY9Mjg5MjYxJz5PcGVudGFibGU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgPHA+T3IgY2FsbCA8YSBocmVmPVwidGVsOjQxMjI3MTEwMjJcIj4oNDEyKSAyNzEtMTAyMjwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWRnZSBibHVlXCIgaHJlZj0naHR0cDovL3d3dy5vcGVudGFibGUuY29tL3NpbmdsZS5hc3B4P3JpZD0yODkyNjEmcmVzdHJlZj0yODkyNjEnPlJlc2VydmU8L2E+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInNvdXJjaW5nIHNrZXdyaWdodFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgxPkdldHRpbmcgSGVyZTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydGhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtaGVhcnRoXCI+XG4gICAgICAgICAgICAgIDxwPlN1cGVyaW9yIE1vdG9ycyBpcyBtdWNoIGNsb3NlciB0aGFuIHlvdSB0aGluay48L3A+XG4gICAgICAgICAgICAgIDxwPkhlcmUncyBhIGxpc3Qgb2YgdGltZXMgaXQgdGFrZXMgdG8gY29tbXV0ZSB0byBTdXBlcmlvciBNb3RvcnMuPC9wPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFpblwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvU3VwZXJpb3IrTW90b3JzL0A0MC4zOTc3NjM4LC03OS44NjI2NDg5LDE3ei9kYXRhPSEzbTEhNGIxITRtNSEzbTQhMXMweDg4MzRlZWU0NjExYmI0Yjc6MHgxNWEzZGVmMzJiZTJhM2M0IThtMiEzZDQwLjM5Nzc2MzghNGQtNzkuODYwNDYwMlwiIGNsYXNzTmFtZT1cImxpbmtidXR0b25cIj4xMjExIEJyYWRkb2NrIEF2ZTwvYT48L2gyPlxuICAgICAgICAgICAgICA8cD4oaW4gbG93IHRvIG1vZGVyYXRlIHRyYWZmaWMpPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtaGVhcnRoXCI+XG4gICAgICAgICAgICAgIDxwPjxlbT5Ob3J0aCBTaWRlPC9lbT4gMjRtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5Qb2ludCBCcmVlemU8L2VtPiAyMW1pbjwvcD5cbiAgICAgICAgICAgICAgPHA+PGVtPlNvdXRoIFNpZGU8L2VtPiAyMm1pbjwvcD5cbiAgICAgICAgICAgICAgPHA+PGVtPk1vdW50IExlYmFub248L2VtPiAzOW1pbjwvcD5cbiAgICAgICAgICAgICAgPHA+PGVtPkRvd250b3duPC9lbT4gMjJtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5HcmVlbnNidXJnPC9lbT4gNDBtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5MYXdyZW5jZXZpbGxlPC9lbT4gMjZtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5QZW5uIEhpbGxzPC9lbT4gMjBtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5Nb25yb2V2aWxsZTwvZW0+IDEzbWluPC9wPlxuICAgICAgICAgICAgICA8cD48ZW0+VHJveSBIaWxsPC9lbT4gMjRtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5Gb3ggQ2hhcGVsPC9lbT4gMzJtaW48L3A+XG4gICAgICAgICAgICAgIDxwPjxlbT5TaGFkeXNpZGU8L2VtPiAyMG1pbjwvcD5cbiAgICAgICAgICAgICAgPHA+PGVtPlNxdWlycmVsIEhpbGw8L2VtPiAxNW1pbjwvcD5cbiAgICAgICAgICAgICAgPHA+PGVtPk5vcnRoIEhpbGxzPC9lbT4gMjltaW48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyZXNlcnZhdGlvbiBtaXNjIHNrZXdsZWZ0XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+TWlzYzwvaDE+XG4gICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnRvYXN0dGFiLmNvbS9zdXBlcmlvci1tb3RvcnMvZ2lmdGNhcmRzXCIgY2xhc3NOYW1lPVwiaW5saW5lb3JhbmdlXCI+U3VwZXJpb3IgTW90b3JzIGdpZnQgY2FyZHM8L2E+PC9wPlxuICAgICAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL215Lm1hdHRlcnBvcnQuY29tL3Nob3cvP209d2t0MTRjTHhoZmcmYW1wO3V0bV9zb3VyY2U9M1wiIGNsYXNzTmFtZT1cImlubGluZW9yYW5nZVwiPlZpcnR1YWwgVG91ciBvZiBTdXBlcmlvciBNb3RvcnM8L2E+PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImxvY2F0aW9uIHNrZXdyaWdodFwiPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInRoZW1hcFwiPjwvZmlndXJlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGgxPmxvY2F0aW9uPC9oMT5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFpblwiPjxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvU3VwZXJpb3IrTW90b3JzL0A0MC4zOTc3NjM4LC03OS44NjI2NDg5LDE3ei9kYXRhPSEzbTEhNGIxITRtNSEzbTQhMXMweDg4MzRlZWU0NjExYmI0Yjc6MHgxNWEzZGVmMzJiZTJhM2M0IThtMiEzZDQwLjM5Nzc2MzghNGQtNzkuODYwNDYwMlwiIGNsYXNzTmFtZT1cImxpbmtidXR0b25cIj4xMjExIEJyYWRkb2NrIEF2ZTwvYT48L2gyPlxuICAgICAgICAgICAgPHA+QnJhZGRvY2ssIFBlbm5zeWx2YW5pYTwvcD5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgIDxwPlBhcmtpbmcgaXMgYXZhaWxhYmxlIGF0IG91ciBidWlsZGluZy48L3A+XG4gICAgICAgICAgPHA+TG9jYXRlZCBhdCB0aGUgZm9ybWVyIHNpdGUgb2Ygb25lIG9mIHRoZSBmaXJzdCBpbmRvb3IgQ2hldnJvbGV0IGRlYWxlcnNoaXBzIGluIHRoZSBjb3VudHJ5LjwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzb2NpYWwgc2tld2xlZnRcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMT5zb2NpYWw8L2gxPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3N1cGVyaW9ybW90b3JzMTUxMDRcIiBjbGFzc05hbWU9XCJsaW5rYnV0dG9uXCI+ZmFjZWJvb2s8L2E+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU00xNTEwNFwiIGNsYXNzTmFtZT1cImxpbmtidXR0b25cIj50d2l0dGVyPC9hPjxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vc3VwZXJpb3Jtb3RvcnMxNTEwNC9cIiBjbGFzc05hbWU9XCJsaW5rYnV0dG9uXCI+aW5zdGFncmFtPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGFnXCI+XG4gICAgICAgIDxwPlN1cGVyaW9yIE1vdG9ycyB8IDIwMTkgfCBCUkFERE9DSywgUEEgfCA8YSBocmVmPVwiaHR0cHM6Ly9zaGFuZWNrZWwuY29tXCI+ZGVzaWduPC9hPjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ubWFpbnN3aXBle1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIuMmVtO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ubWFpbnN3aXBlIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ubWFpbnN3aXBlIGRpdiBpbWd7XG4gICAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDIuMmVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA5NWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNGVtIDAgLjhlbTtcbiAgICAgICAgfVxuICAgICAgICAuaG91cnMge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgID4gYXJ0aWNsZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDYuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZS5sb2NhdGlvbiAudGhlbWFwe1xuICAgICAgICAgIGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vc3RhdGljL2ltZy9tYXAuanBnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZS5sb2NhdGlvbiAuY29udGVudHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgICAgICAgIGFydGljbGUubG9jYXRpb24gLmNvbnRlbnR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID4gYXJ0aWNsZTpiZWZvcmUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDc5LCA4MiwgMC4yNSk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDExNDBweCAvIDIpO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAyNDtcbiAgICAgICAgfVxuICAgICAgICAuc291cmNpbmd7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgICAgICA+IGFydGljbGU6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDc5LCA4MiwgMC4yNSk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMTQwcHggLyAyKTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMjQ7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc2VydmF0aW9ue1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOjIwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNS41ZW07XG4gICAgICAgIH1cbiAgICAgICAgPiBhcnRpY2xlIHtcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl19 */\n/*@ sourceURL=C:\\projects\\superiormotors15104\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\superiormotors15104\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map