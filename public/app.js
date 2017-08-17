var app =
webpackJsonp_name_([5],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n    alert(\"new\");\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvcm91dGVzL25ld0ZvbC9uZXcuanM/YzMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoXCJuZXdcIik7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvcm91dGVzL25ld0ZvbC9uZXcuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./about.js\": 8,\n\t\"./newFol/new.js\": 12\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error(\"Cannot find module '\" + req + \"'.\");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 15;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMgXFwuanMkPzFhOTIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2Fib3V0LmpzXCI6IDgsXG5cdFwiLi9uZXdGb2wvbmV3LmpzXCI6IDEyXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yb3V0ZXMgXFwuanMkXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

eval("\"use static\";\n\ndocument.getElementById('loginButton').onclick = function () {\n    __webpack_require__.e/* require.ensure */(1).then((function (require) {\n        var login = __webpack_require__(1);\n        console.log(login);\n        login();\n    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n};\n\ndocument.getElementById('logoutButton').onclick = function () {\n    __webpack_require__.e/* require.ensure */(0).then((function (require) {\n        var logout = __webpack_require__(2);\n        console.log(logout);\n        logout();\n    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);\n};\n\nlet moduleName = 'about';\n\nlet context = __webpack_require__(15);\n\ncontext.keys().forEach(function (path) {\n    let module = context(path);\n    module();\n});\n\n// console.log(context.keys());\n// let route;\n// try {\n//     route = context('./' + moduleName);\n// } catch(e) {\n//     alert(e)\n// }\n\n// if(route) {\n//     console.log(route)\n//     route();\n// }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9hcHAuanM/ZDRmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdGF0aWNcIlxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5CdXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcbiAgICAgICAgdmFyIGxvZ2luID0gcmVxdWlyZSgnLi9sb2dpbicpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2dpbilcbiAgICAgICAgbG9naW4oKTtcbiAgICB9LCAnYXV0aCcpXG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXRCdXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcbiAgICAgICAgdmFyIGxvZ291dCA9IHJlcXVpcmUoJy4vbG9nb3V0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ291dClcbiAgICAgICAgbG9nb3V0KCk7XG4gICAgfSlcbn1cblxubGV0IG1vZHVsZU5hbWUgPSAnYWJvdXQnO1xuXG5sZXQgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi9yb3V0ZXMnLCB0cnVlLCAvXFwuanMkLylcblxuY29udGV4dC5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbihwYXRoKSB7XG4gICAgbGV0IG1vZHVsZSA9IGNvbnRleHQocGF0aCk7XG4gICAgbW9kdWxlKCk7XG59KVxuXG4vLyBjb25zb2xlLmxvZyhjb250ZXh0LmtleXMoKSk7XG4vLyBsZXQgcm91dGU7XG4vLyB0cnkge1xuLy8gICAgIHJvdXRlID0gY29udGV4dCgnLi8nICsgbW9kdWxlTmFtZSk7XG4vLyB9IGNhdGNoKGUpIHtcbi8vICAgICBhbGVydChlKVxuLy8gfVxuXG4vLyBpZihyb3V0ZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKHJvdXRlKVxuLy8gICAgIHJvdXRlKCk7XG4vLyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n    alert(\"about\");\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9yb3V0ZXMvYWJvdXQuanM/OGMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoXCJhYm91dFwiKTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9yb3V0ZXMvYWJvdXQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

},[5]);