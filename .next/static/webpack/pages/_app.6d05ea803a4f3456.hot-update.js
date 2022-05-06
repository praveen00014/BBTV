"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/Layout.jsx":
/*!*******************************!*\
  !*** ./Components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./Components/Header.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/NewFooter */ \"./Components/NewFooter.jsx\");\n/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Loader */ \"./Components/Loader.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    var MakeUserAPICall = function MakeUserAPICall() {\n        SetInfoLoaded(true);\n        var myHeaders = new Headers();\n        myHeaders.append(\"Content-Type\", \"application/json\");\n        var raw = JSON.stringify({\n            device_id: \"guestuser\",\n            version_name: \"bbtv-cms\",\n            version_code: \"1\",\n            device_type: \"Web\",\n            device_model: \"postman\"\n        });\n        var requestOptions = {\n            method: \"POST\",\n            headers: myHeaders,\n            body: raw,\n            redirect: \"follow\"\n        };\n        fetch(\"https://developer.zingotv.com/user\", requestOptions).then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            SetUserInfo(result.results);\n            SetMenu(result.results.menu);\n            console.log(result.results.menu);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), Menu = ref[0], SetMenu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), UserInfo = ref1[0], SetUserInfo = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), InfoLoaded = ref2[0], SetInfoLoaded = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (UserInfo == undefined && InfoLoaded == false) {\n            MakeUserAPICall();\n        } else if (UserInfo != undefined) {\n            console.log(UserInfo);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#061326]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WORLD BB-TV\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        className: \"object-contain\",\n                        rel: \"icon\",\n                        href: \"https://developer.zingotv.com/uploads/images/default/wbbtv-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Menu: Menu\n            }, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            UserInfo != undefined ? children : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 63,\n                columnNumber: 43\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"GL8bd3q0OKTgvR3o3ZRqFAm6V60=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOQSxLQUFBQSxNQUFNO0FBNERaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQuanN4P2IyYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5pbXBvcnQgTmV3Rm9vdGVyIGZyb20gXCIuLi9Db21wb25lbnRzL05ld0Zvb3RlclwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vQ29tcG9uZW50cy9Mb2FkZXJcIjtcblxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtNZW51LCBTZXRNZW51XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW1VzZXJJbmZvLCBTZXRVc2VySW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbSW5mb0xvYWRlZCwgU2V0SW5mb0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoVXNlckluZm8gPT0gdW5kZWZpbmVkICYmIEluZm9Mb2FkZWQgPT0gZmFsc2UpIHtcbiAgICAgIE1ha2VVc2VyQVBJQ2FsbCgpXG4gICAgfWVsc2UgaWYgKFVzZXJJbmZvICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coVXNlckluZm8pXG4gICAgfVxuICB9KTtcblxuXG4gIGZ1bmN0aW9uIE1ha2VVc2VyQVBJQ2FsbCgpe1xuICAgIFNldEluZm9Mb2FkZWQodHJ1ZSlcbiAgICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgIFxuICAgIHZhciByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkZXZpY2VfaWQ6IFwiZ3Vlc3R1c2VyXCIsXG4gICAgICB2ZXJzaW9uX25hbWU6IFwiYmJ0di1jbXNcIixcbiAgICAgIHZlcnNpb25fY29kZTogXCIxXCIsXG4gICAgICBkZXZpY2VfdHlwZTogXCJXZWJcIixcbiAgICAgIGRldmljZV9tb2RlbDogXCJwb3N0bWFuXCIsXG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgYm9keTogcmF3LFxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXG4gICAgfTtcblxuICAgIGZldGNoKFwiaHR0cHM6Ly9kZXZlbG9wZXIuemluZ290di5jb20vdXNlclwiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBTZXRVc2VySW5mbyhyZXN1bHQucmVzdWx0cylcbiAgICAgICAgU2V0TWVudShyZXN1bHQucmVzdWx0cy5tZW51KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3VsdHMubWVudSlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzA2MTMyNl1cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V09STEQgQkItVFY8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIuemluZ290di5jb20vdXBsb2Fkcy9pbWFnZXMvZGVmYXVsdC93YmJ0di1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIE1lbnU9e01lbnV9IC8+XG4gICAgICB7VXNlckluZm8gIT0gdW5kZWZpbmVkID8gY2hpbGRyZW4gOiA8TG9hZGVyLz59XG4gICAgICA8TmV3Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJIZWFkIiwiQ29va2llcyIsIk5ld0Zvb3RlciIsIkxvYWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiTWFrZVVzZXJBUElDYWxsIiwiU2V0SW5mb0xvYWRlZCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJKU09OIiwic3RyaW5naWZ5IiwiZGV2aWNlX2lkIiwidmVyc2lvbl9uYW1lIiwidmVyc2lvbl9jb2RlIiwiZGV2aWNlX3R5cGUiLCJkZXZpY2VfbW9kZWwiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVkaXJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJTZXRVc2VySW5mbyIsInJlc3VsdHMiLCJTZXRNZW51IiwibWVudSIsImNvbnNvbGUiLCJsb2ciLCJNZW51IiwiVXNlckluZm8iLCJJbmZvTG9hZGVkIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Layout.jsx\n");

/***/ })

});