"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst url = \"https://jsonplaceholder.typicode.com/posts\";\n//const usl = \"api/staticdata\"\n//const fetcher = (url) => fetch(url).then((res) => res.json());\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction BlogPage() {\n    //Set up SWR to run the fetcher function when calling \"/api/staticdata\"\n    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data\n    //const { data, error } = useSWR(\"../../api/staticdata\", fetcher);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, fetcher);\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n        lineNumber: 17,\n        columnNumber: 23\n    }, this);\n    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            data && data?.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Id: \",\n                                item.userId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Name: \",\n                                item.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Language: \",\n                                item.body\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUV6QixNQUFNQyxHQUFHLEdBQUcsNENBQTRDO0FBQ3hELDhCQUE4QjtBQUM5QixnRUFBZ0U7QUFDaEUsTUFBTUMsT0FBTyxHQUFHLENBQUlDLEdBQUFBLElBQUksR0FBS0MsS0FBSyxJQUFJRCxJQUFJLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztBQUVyRSxTQUFTQyxRQUFRLEdBQUc7SUFDaEIsdUVBQXVFO0lBQ3ZFLG9KQUFvSjtJQUNwSixrRUFBa0U7SUFDbEUsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHViwrQ0FBTSxDQUFDQyxHQUFHLEVBQUVDLE9BQU8sQ0FBQztJQUU1Qyx3QkFBd0I7SUFDeEIsSUFBSVEsS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNLENBQUM7SUFDNUMsMEJBQTBCO0lBQzFCLElBQUksQ0FBQ0YsSUFBSSxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLFlBQVU7Ozs7O1lBQU0sQ0FBQztJQUN4QyxxSEFBcUg7SUFFckgscUJBQ0ksOERBQUNBLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Ozs7O29CQUFLO1lBQ1pILElBQUksSUFDREEsSUFBSSxFQUFFSSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDWCw4REFBQ0MsSUFBRTs7c0NBQ0MsOERBQUNDLElBQUU7O2dDQUFDLE1BQUk7Z0NBQUNGLElBQUksQ0FBQ0csTUFBTTs7Ozs7O2dDQUFNO3NDQUMxQiw4REFBQ0QsSUFBRTs7Z0NBQUMsUUFBTTtnQ0FBQ0YsSUFBSSxDQUFDSSxLQUFLOzs7Ozs7Z0NBQU07c0NBQzNCLDhEQUFDRixJQUFFOztnQ0FBQyxZQUFVO2dDQUFDRixJQUFJLENBQUNLLElBQUk7Ozs7OztnQ0FBTTs7Ozs7O3dCQUM3QixDQUNQOzs7Ozs7WUFDSixDQUNSO0FBQ04sQ0FBQztBQUVELGlFQUFlWCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXUtcHJvamV0by1uZXh0anMvLi9wYWdlcy9ibG9nL2luZGV4LmpzPzExYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJ1xuLy9jb25zdCB1c2wgPSBcImFwaS9zdGF0aWNkYXRhXCJcbi8vY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG5mdW5jdGlvbiBCbG9nUGFnZSgpIHtcbiAgICAvL1NldCB1cCBTV1IgdG8gcnVuIHRoZSBmZXRjaGVyIGZ1bmN0aW9uIHdoZW4gY2FsbGluZyBcIi9hcGkvc3RhdGljZGF0YVwiXG4gICAgLy9UaGVyZSBhcmUgMyBwb3NzaWJsZSBzdGF0ZXM6ICgxKSBsb2FkaW5nIHdoZW4gZGF0YSBpcyBudWxsICgyKSByZWFkeSB3aGVuIHRoZSBkYXRhIGlzIHJldHVybmVkICgzKSBlcnJvciB3aGVuIHRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZGF0YVxuICAgIC8vY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiLi4vLi4vYXBpL3N0YXRpY2RhdGFcIiwgZmV0Y2hlcik7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcblxuICAgIC8vSGFuZGxlIHRoZSBlcnJvciBzdGF0ZVxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gICAgLy9IYW5kbGUgdGhlIGxvYWRpbmcgc3RhdGVcbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgLy9IYW5kbGUgdGhlIHJlYWR5IHN0YXRlIGFuZCBkaXNwbGF5IHRoZSByZXN1bHQgY29udGFpbmVkIGluIHRoZSBkYXRhIG9iamVjdCBtYXBwZWQgdG8gdGhlIHN0cnVjdHVyZSBvZiB0aGUganNvbiBmaWxlXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgICAgICBkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklkOiB7aXRlbS51c2VySWR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5OYW1lOiB7aXRlbS50aXRsZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxhbmd1YWdlOiB7aXRlbS5ib2R5fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1cmwiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJCbG9nUGFnZSIsImRhdGEiLCJlcnJvciIsImRpdiIsImgxIiwibWFwIiwiaXRlbSIsInVsIiwibGkiLCJ1c2VySWQiLCJ0aXRsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/index.js"));
module.exports = __webpack_exports__;

})();