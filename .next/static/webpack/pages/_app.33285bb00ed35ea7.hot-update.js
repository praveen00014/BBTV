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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./Components/Header.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/NewFooter */ \"./Components/NewFooter.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    var MakeUserAPICall = function MakeUserAPICall() {\n        SetInfoLoaded(true);\n        var myHeaders = new Headers();\n        myHeaders.append(\"Content-Type\", \"application/json\");\n        var raw = JSON.stringify({\n            device_id: \"guestuser\",\n            version_name: \"bbtv-cms\",\n            version_code: \"1\",\n            device_type: \"Web\",\n            device_model: \"postman\"\n        });\n        var requestOptions = {\n            method: \"POST\",\n            headers: myHeaders,\n            body: raw,\n            redirect: \"follow\"\n        };\n        fetch(\"https://developer.zingotv.com/user\", requestOptions).then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            SetUserInfo(result.result);\n        //setMenu(result.results.menu);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), Menu = ref[0], setMenu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), UserInfo = ref1[0], SetUserInfo = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), InfoLoaded = ref2[0], SetInfoLoaded = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(UserInfo);\n        if (UserInfo == null && InfoLoaded == false) {\n            MakeUserAPICall();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#061326]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"WORLD BB-TV\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        className: \"object-contain\",\n                        rel: \"icon\",\n                        href: \"https://developer.zingotv.com/uploads/images/default/wbbtv-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Menu: Menu\n            }, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            UserInfo !== null ? children : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_NewFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hari/Downloads/worldbbtv-feat-next-bbtv/Components/Layout.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"GL8bd3q0OKTgvR3o3ZRqFAm6V60=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0xheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2Q7QUFDRDtBQUNVO0FBQ1M7O0FBRWhELElBQU1NLE1BQU0sR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO1FBYWZDLGVBQWUsR0FBeEIsU0FBU0EsZUFBZSxHQUFFO1FBQ3hCQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUlDLFNBQVMsR0FBRyxJQUFJQyxPQUFPLEVBQUU7UUFDN0JELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXJELElBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFDdkJDLFNBQVMsRUFBRSxXQUFXO1lBQ3RCQyxZQUFZLEVBQUUsVUFBVTtZQUN4QkMsWUFBWSxFQUFFLEdBQUc7WUFDakJDLFdBQVcsRUFBRSxLQUFLO1lBQ2xCQyxZQUFZLEVBQUUsU0FBUztTQUN4QixDQUFDO1FBRUYsSUFBSUMsY0FBYyxHQUFHO1lBQ25CQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxPQUFPLEVBQUViLFNBQVM7WUFDbEJjLElBQUksRUFBRVgsR0FBRztZQUNUWSxRQUFRLEVBQUUsUUFBUTtTQUNuQjtRQUVEQyxLQUFLLENBQUMsb0NBQW9DLEVBQUVMLGNBQWMsQ0FBQyxDQUN4RE0sSUFBSSxDQUFDLFNBQUNDLFFBQVE7bUJBQUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFDLFNBQUNHLE1BQU0sRUFBSztZQUNoQkMsV0FBVyxDQUFDRCxNQUFNLENBQUNBLE1BQU0sQ0FBQztRQUMxQiwrQkFBK0I7U0FDbEMsQ0FBQyxDQUFDO0tBQ0o7O0lBdENELElBQXdCOUIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVB0QyxJQU9hLEdBQWFBLEdBQVksR0FBekIsRUFQYixPQU9zQixHQUFJQSxHQUFZLEdBQWhCO0lBQ3BCLElBQWdDQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFSNUMsUUFRaUIsR0FBaUJBLElBQVUsR0FBM0IsRUFSakIsV0FROEIsR0FBSUEsSUFBVSxHQUFkO0lBQzVCLElBQW9DQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBVHJELFVBU21CLEdBQW1CQSxJQUFlLEdBQWxDLEVBVG5CLGFBU2tDLEdBQUlBLElBQWUsR0FBbkI7SUFFaENDLGdEQUFTLENBQUMsV0FBTTtRQUNkbUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztRQUNyQixJQUFJQSxRQUFRLElBQUksSUFBSSxJQUFJQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzNDM0IsZUFBZSxFQUFFO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDO0lBK0JILHFCQUNFLDhEQUFDOEIsS0FBRztRQUFDQyxTQUFTLEVBQUMsY0FBYzs7MEJBQzNCLDhEQUFDcEMsa0RBQUk7O2tDQUNILDhEQUFDcUMsT0FBSztrQ0FBQyxhQUFXOzs7Ozs2QkFBUTtrQ0FDMUIsOERBQUNDLE1BQUk7d0JBQ0hGLFNBQVMsRUFBQyxnQkFBZ0I7d0JBQzFCRyxHQUFHLEVBQUMsTUFBTTt3QkFDVkMsSUFBSSxFQUFDLHFFQUFxRTs7Ozs7NkJBQzFFOzs7Ozs7cUJBQ0c7MEJBQ1AsOERBQUN6QywrQ0FBTTtnQkFBQzhCLElBQUksRUFBRUEsSUFBSTs7Ozs7cUJBQUk7WUFDckJFLFFBQVEsS0FBSyxJQUFJLEdBQUczQixRQUFRLGlCQUFHLDZJQUFLOzBCQUNyQyw4REFBQ0YsNkRBQVM7Ozs7cUJBQUc7Ozs7OzthQUNULENBQ047Q0FDSDtHQXhES0MsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBMERaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQuanN4P2IyYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5pbXBvcnQgTmV3Rm9vdGVyIGZyb20gXCIuLi9Db21wb25lbnRzL05ld0Zvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtNZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW1VzZXJJbmZvLCBTZXRVc2VySW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbSW5mb0xvYWRlZCwgU2V0SW5mb0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhVc2VySW5mbylcbiAgICBpZiAoVXNlckluZm8gPT0gbnVsbCAmJiBJbmZvTG9hZGVkID09IGZhbHNlKSB7XG4gICAgICBNYWtlVXNlckFQSUNhbGwoKVxuICAgIH1cbiAgfSk7XG5cblxuICBmdW5jdGlvbiBNYWtlVXNlckFQSUNhbGwoKXtcbiAgICBTZXRJbmZvTG9hZGVkKHRydWUpXG4gICAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICBcbiAgICB2YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZGV2aWNlX2lkOiBcImd1ZXN0dXNlclwiLFxuICAgICAgdmVyc2lvbl9uYW1lOiBcImJidHYtY21zXCIsXG4gICAgICB2ZXJzaW9uX2NvZGU6IFwiMVwiLFxuICAgICAgZGV2aWNlX3R5cGU6IFwiV2ViXCIsXG4gICAgICBkZXZpY2VfbW9kZWw6IFwicG9zdG1hblwiLFxuICAgIH0pO1xuXG4gICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICAgIGJvZHk6IHJhdyxcbiAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxuICAgIH07XG5cbiAgICBmZXRjaChcImh0dHBzOi8vZGV2ZWxvcGVyLnppbmdvdHYuY29tL3VzZXJcIiwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgU2V0VXNlckluZm8ocmVzdWx0LnJlc3VsdClcbiAgICAgICAgLy9zZXRNZW51KHJlc3VsdC5yZXN1bHRzLm1lbnUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMDYxMzI2XVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XT1JMRCBCQi1UVjwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RldmVsb3Blci56aW5nb3R2LmNvbS91cGxvYWRzL2ltYWdlcy9kZWZhdWx0L3diYnR2LWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgTWVudT17TWVudX0gLz5cbiAgICAgIHtVc2VySW5mbyAhPT0gbnVsbCA/IGNoaWxkcmVuIDogPD48Lz59XG4gICAgICA8TmV3Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJIZWFkIiwiQ29va2llcyIsIk5ld0Zvb3RlciIsIkxheW91dCIsImNoaWxkcmVuIiwiTWFrZVVzZXJBUElDYWxsIiwiU2V0SW5mb0xvYWRlZCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJKU09OIiwic3RyaW5naWZ5IiwiZGV2aWNlX2lkIiwidmVyc2lvbl9uYW1lIiwidmVyc2lvbl9jb2RlIiwiZGV2aWNlX3R5cGUiLCJkZXZpY2VfbW9kZWwiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVkaXJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJTZXRVc2VySW5mbyIsIk1lbnUiLCJzZXRNZW51IiwiVXNlckluZm8iLCJJbmZvTG9hZGVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout.jsx\n");

/***/ })

});