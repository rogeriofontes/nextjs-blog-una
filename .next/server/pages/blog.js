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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst url = \"https://jsonplaceholder.typicode.com/posts\";\n//const usl = \"api/staticdata\"\n//const fetcher = (url) => fetch(url).then((res) => res.json());\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction BlogPage() {\n    //Set up SWR to run the fetcher function when calling \"/api/staticdata\"\n    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data\n    //const { data, error } = useSWR(\"../../api/staticdata\", fetcher);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, fetcher);\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n        lineNumber: 15,\n        columnNumber: 23\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n        lineNumber: 17,\n        columnNumber: 23\n    }, this);\n    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            data && data?.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Id: \",\n                                item.userId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Name: \",\n                                item.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"Post: \",\n                                item.body\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rogeriofontes/Documents/meu-projeto-nextjs/pages/blog/index.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLE1BQU07QUFDWiw4QkFBOEI7QUFDOUIsZ0VBQWdFO0FBQ2hFLE1BQU1DLFVBQVUsQ0FBQyxHQUFHQyxPQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUVsRSxTQUFTQyxXQUFXO0lBQ2hCLHVFQUF1RTtJQUN2RSxvSkFBb0o7SUFDcEosa0VBQWtFO0lBQ2xFLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1YsK0NBQU1BLENBQUNDLEtBQUtDO0lBRXBDLHdCQUF3QjtJQUN4QixJQUFJUSxPQUFPLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBQ3ZCLDBCQUEwQjtJQUMxQixJQUFJLENBQUNGLE1BQU0scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIscUhBQXFIO0lBRXJILHFCQUNJLDhEQUFDQTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7WUFDSEgsUUFDR0EsTUFBTUksSUFBSSxDQUFDQyxxQkFDUCw4REFBQ0M7O3NDQUNHLDhEQUFDQzs7Z0NBQUc7Z0NBQUtGLEtBQUtHLE1BQU07Ozs7Ozs7c0NBQ3BCLDhEQUFDRDs7Z0NBQUc7Z0NBQU9GLEtBQUtJLEtBQUs7Ozs7Ozs7c0NBQ3JCLDhEQUFDRjs7Z0NBQUc7Z0NBQU9GLEtBQUtLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUM7QUFFQSxpRUFBZVgsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldS1wcm9qZXRvLW5leHRqcy8uL3BhZ2VzL2Jsb2cvaW5kZXguanM/MTFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnXG4vL2NvbnN0IHVzbCA9IFwiYXBpL3N0YXRpY2RhdGFcIlxuLy9jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbmZ1bmN0aW9uIEJsb2dQYWdlKCkge1xuICAgIC8vU2V0IHVwIFNXUiB0byBydW4gdGhlIGZldGNoZXIgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIFwiL2FwaS9zdGF0aWNkYXRhXCJcbiAgICAvL1RoZXJlIGFyZSAzIHBvc3NpYmxlIHN0YXRlczogKDEpIGxvYWRpbmcgd2hlbiBkYXRhIGlzIG51bGwgKDIpIHJlYWR5IHdoZW4gdGhlIGRhdGEgaXMgcmV0dXJuZWQgKDMpIGVycm9yIHdoZW4gdGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBkYXRhXG4gICAgLy9jb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIuLi8uLi9hcGkvc3RhdGljZGF0YVwiLCBmZXRjaGVyKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuXG4gICAgLy9IYW5kbGUgdGhlIGVycm9yIHN0YXRlXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgICAvL0hhbmRsZSB0aGUgbG9hZGluZyBzdGF0ZVxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICAvL0hhbmRsZSB0aGUgcmVhZHkgc3RhdGUgYW5kIGRpc3BsYXkgdGhlIHJlc3VsdCBjb250YWluZWQgaW4gdGhlIGRhdGEgb2JqZWN0IG1hcHBlZCB0byB0aGUgc3RydWN0dXJlIG9mIHRoZSBqc29uIGZpbGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+QmxvZzwvaDE+XG4gICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICAgIGRhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+SWQ6IHtpdGVtLnVzZXJJZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5hbWU6IHtpdGVtLnRpdGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+UG9zdDoge2l0ZW0uYm9keX08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTsiXSwibmFtZXMiOlsidXNlU1dSIiwidXJsIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiQmxvZ1BhZ2UiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJoMSIsIm1hcCIsIml0ZW0iLCJ1bCIsImxpIiwidXNlcklkIiwidGl0bGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

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