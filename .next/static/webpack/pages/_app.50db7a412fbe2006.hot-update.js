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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./Components/Header.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/NewFooter */ \"./Components/NewFooter.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    var MakeUserAPICall = function MakeUserAPICall() {\n        SetInfoLoaded(true);\n        var myHeaders = new Headers();\n        myHeaders.append(\"Content-Type\", \"application/json\");\n        var raw = JSON.stringify({\n            device_id: \"guestuser\",\n            version_name: \"bbtv-cms\",\n            version_code: \"1\",\n            device_type: \"Web\",\n            device_model: \"postman\"\n        });\n        var requestOptions = {\n            method: \"POST\",\n            headers: myHeaders,\n            body: raw,\n            redirect: \"follow\"\n        };\n        fetch(\"https://developer.zingotv.com/user\", requestOptions).then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            SetUserInfo(result.result);\n            console.log(result.result);\n        //setMenu(result.results.menu);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), Menu = ref[0], setMenu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), UserInfo = ref1[0], SetUserInfo = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), InfoLoaded = ref2[0], SetInfoLoaded = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(UserInfo.accessToken);\n        if (UserInfo.accessToken == undefined && InfoLoaded == false) {\n            MakeUserAPICall();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#061326]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WORLD BB-TV\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        className: \"object-contain\",\n                        rel: \"icon\",\n                        href: \"https://developer.zingotv.com/uploads/images/default/wbbtv-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Menu: Menu\n            }, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            UserInfo != undefined ? children : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"GL8bd3q0OKTgvR3o3ZRqFAm6V60=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcbmltcG9ydCBOZXdGb290ZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvTmV3Rm9vdGVyXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW01lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbVXNlckluZm8sIFNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtJbmZvTG9hZGVkLCBTZXRJbmZvTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFVzZXJJbmZvLmFjY2Vzc1Rva2VuKVxuICAgIGlmIChVc2VySW5mby5hY2Nlc3NUb2tlbiA9PSB1bmRlZmluZWQgJiYgSW5mb0xvYWRlZCA9PSBmYWxzZSkge1xuICAgICAgTWFrZVVzZXJBUElDYWxsKClcbiAgICB9XG4gIH0pO1xuXG5cbiAgZnVuY3Rpb24gTWFrZVVzZXJBUElDYWxsKCl7XG4gICAgU2V0SW5mb0xvYWRlZCh0cnVlKVxuICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgXG4gICAgdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGRldmljZV9pZDogXCJndWVzdHVzZXJcIixcbiAgICAgIHZlcnNpb25fbmFtZTogXCJiYnR2LWNtc1wiLFxuICAgICAgdmVyc2lvbl9jb2RlOiBcIjFcIixcbiAgICAgIGRldmljZV90eXBlOiBcIldlYlwiLFxuICAgICAgZGV2aWNlX21vZGVsOiBcInBvc3RtYW5cIixcbiAgICB9KTtcblxuICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgICBib2R5OiByYXcsXG4gICAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcbiAgICB9O1xuXG4gICAgZmV0Y2goXCJodHRwczovL2RldmVsb3Blci56aW5nb3R2LmNvbS91c2VyXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIFNldFVzZXJJbmZvKHJlc3VsdC5yZXN1bHQpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXN1bHQpXG4gICAgICAgIC8vc2V0TWVudShyZXN1bHQucmVzdWx0cy5tZW51KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzA2MTMyNl1cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V09STEQgQkItVFY8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIuemluZ290di5jb20vdXBsb2Fkcy9pbWFnZXMvZGVmYXVsdC93YmJ0di1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIE1lbnU9e01lbnV9IC8+XG4gICAgICB7VXNlckluZm8gIT0gdW5kZWZpbmVkID8gY2hpbGRyZW4gOiA8PjwvPn1cbiAgICAgIDxOZXdGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIkhlYWQiLCJDb29raWVzIiwiTmV3Rm9vdGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJNYWtlVXNlckFQSUNhbGwiLCJTZXRJbmZvTG9hZGVkIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJhdyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZXZpY2VfaWQiLCJ2ZXJzaW9uX25hbWUiLCJ2ZXJzaW9uX2NvZGUiLCJkZXZpY2VfdHlwZSIsImRldmljZV9tb2RlbCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZWRpcmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIlNldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsIk1lbnUiLCJzZXRNZW51IiwiVXNlckluZm8iLCJJbmZvTG9hZGVkIiwiYWNjZXNzVG9rZW4iLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout.jsx\n");

/***/ })

});