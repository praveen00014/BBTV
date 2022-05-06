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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./Components/Header.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/NewFooter */ \"./Components/NewFooter.jsx\");\n/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Loader */ \"./Components/Loader.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    var MakeUserAPICall = function MakeUserAPICall() {\n        SetInfoLoaded(true);\n        var myHeaders = new Headers();\n        myHeaders.append(\"Content-Type\", \"application/json\");\n        var raw = JSON.stringify({\n            device_id: \"guestuser\",\n            version_name: \"bbtv-cms\",\n            version_code: \"1\",\n            device_type: \"Web\",\n            device_model: \"postman\"\n        });\n        var requestOptions = {\n            method: \"POST\",\n            headers: myHeaders,\n            body: raw,\n            redirect: \"follow\"\n        };\n        fetch(\"https://developer.zingotv.com/user\", requestOptions).then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            if (UserInfo == undefined) {\n                SetUserInfo(result.results);\n                SetMenu(result.results.menu);\n                console.log(result.results.menu);\n            }\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), Menu = ref[0], SetMenu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), UserInfo = ref1[0], SetUserInfo = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), InfoLoaded = ref2[0], SetInfoLoaded = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (UserInfo == undefined && InfoLoaded == false) {\n            MakeUserAPICall();\n        } else if (UserInfo != undefined) {\n            if (Menu.length == 0) {\n                SetMenu(UserInfo.menu);\n            }\n        }\n    }, [\n        InfoLoaded,\n        Menu,\n        UserInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#061326]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WORLD BB-TV\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        className: \"object-contain\",\n                        rel: \"icon\",\n                        href: \"https://developer.zingotv.com/uploads/images/default/wbbtv-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            UserInfo != undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Menu: Menu\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 38\n                    }, _this),\n                    children,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 70\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 66,\n                columnNumber: 33\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 66,\n                columnNumber: 92\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"GL8bd3q0OKTgvR3o3ZRqFAm6V60=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs7a0NBQUMsOERBQUN6QywrQ0FBTTt3QkFBQ3NDLElBQUksRUFBRUEsSUFBSTs7Ozs7NkJBQUk7b0JBQUNoQyxRQUFRO2tDQUFDLDhEQUFDSCw2REFBUzs7Ozs2QkFBRzs7Ozs7O3FCQUFNLGlCQUFHLDhEQUFDQywwREFBTTs7OztxQkFBRTs7Ozs7O2FBQzFGLENBQ047Q0FDSDtHQTVES0MsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBOERaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQuanN4P2IyYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5pbXBvcnQgTmV3Rm9vdGVyIGZyb20gXCIuLi9Db21wb25lbnRzL05ld0Zvb3RlclwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vQ29tcG9uZW50cy9Mb2FkZXJcIjtcblxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtNZW51LCBTZXRNZW51XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW1VzZXJJbmZvLCBTZXRVc2VySW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbSW5mb0xvYWRlZCwgU2V0SW5mb0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoVXNlckluZm8gPT0gdW5kZWZpbmVkICYmIEluZm9Mb2FkZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgTWFrZVVzZXJBUElDYWxsKClcbiAgICB9ZWxzZSBpZiAoVXNlckluZm8gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoTWVudS5sZW5ndGggPT0gMCkge1xuICAgICAgICBTZXRNZW51KFVzZXJJbmZvLm1lbnUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxbSW5mb0xvYWRlZCwgTWVudSwgVXNlckluZm9dKTtcblxuXG4gIGZ1bmN0aW9uIE1ha2VVc2VyQVBJQ2FsbCgpe1xuICAgIFNldEluZm9Mb2FkZWQodHJ1ZSlcbiAgICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgIFxuICAgIHZhciByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkZXZpY2VfaWQ6IFwiZ3Vlc3R1c2VyXCIsXG4gICAgICB2ZXJzaW9uX25hbWU6IFwiYmJ0di1jbXNcIixcbiAgICAgIHZlcnNpb25fY29kZTogXCIxXCIsXG4gICAgICBkZXZpY2VfdHlwZTogXCJXZWJcIixcbiAgICAgIGRldmljZV9tb2RlbDogXCJwb3N0bWFuXCIsXG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgYm9keTogcmF3LFxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXG4gICAgfTtcblxuICAgIGZldGNoKFwiaHR0cHM6Ly9kZXZlbG9wZXIuemluZ290di5jb20vdXNlclwiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoVXNlckluZm8gPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBTZXRVc2VySW5mbyhyZXN1bHQucmVzdWx0cylcbiAgICAgICAgICBTZXRNZW51KHJlc3VsdC5yZXN1bHRzLm1lbnUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXN1bHRzLm1lbnUpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzA2MTMyNl1cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V09STEQgQkItVFY8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIuemluZ290di5jb20vdXBsb2Fkcy9pbWFnZXMvZGVmYXVsdC93YmJ0di1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7VXNlckluZm8gIT0gdW5kZWZpbmVkID8gKDxkaXY+PEhlYWRlciBNZW51PXtNZW51fSAvPntjaGlsZHJlbn08TmV3Rm9vdGVyIC8+PC9kaXY+KTogPExvYWRlci8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiSGVhZCIsIkNvb2tpZXMiLCJOZXdGb290ZXIiLCJMb2FkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk1ha2VVc2VyQVBJQ2FsbCIsIlNldEluZm9Mb2FkZWQiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiSlNPTiIsInN0cmluZ2lmeSIsImRldmljZV9pZCIsInZlcnNpb25fbmFtZSIsInZlcnNpb25fY29kZSIsImRldmljZV90eXBlIiwiZGV2aWNlX21vZGVsIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiVXNlckluZm8iLCJ1bmRlZmluZWQiLCJTZXRVc2VySW5mbyIsInJlc3VsdHMiLCJTZXRNZW51IiwibWVudSIsImNvbnNvbGUiLCJsb2ciLCJNZW51IiwiSW5mb0xvYWRlZCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout.jsx\n");

/***/ })

});