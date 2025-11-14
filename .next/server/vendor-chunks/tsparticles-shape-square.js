"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SquareDrawer = void 0;\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\nexports.SquareDrawer = SquareDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FhbmF5by1lbGVjdHJpY2Fscy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zcXVhcmUvY2pzL1NxdWFyZURyYXdlci5qcz83NmEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TcXVhcmVEcmF3ZXIgPSB2b2lkIDA7XG5jb25zdCBmaXhGYWN0b3IgPSBNYXRoLnNxcnQoMik7XG5jbGFzcyBTcXVhcmVEcmF3ZXIge1xuICAgIGRyYXcoY29udGV4dCwgcGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICBjb25zdCBmaXhlZFJhZGl1cyA9IHJhZGl1cyAvIGZpeEZhY3RvciwgZml4ZWREaWFtZXRlciA9IGZpeGVkUmFkaXVzICogMjtcbiAgICAgICAgY29udGV4dC5yZWN0KC1maXhlZFJhZGl1cywgLWZpeGVkUmFkaXVzLCBmaXhlZERpYW1ldGVyLCBmaXhlZERpYW1ldGVyKTtcbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxufVxuZXhwb3J0cy5TcXVhcmVEcmF3ZXIgPSBTcXVhcmVEcmF3ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadSquareShape = void 0;\nconst SquareDrawer_1 = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/cjs/SquareDrawer.js\");\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\"edge\", \"square\"], new SquareDrawer_1.SquareDrawer(), refresh);\n}\nexports.loadSquareShape = loadSquareShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFPLENBQUMseUZBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYW5heW8tZWxlY3RyaWNhbHMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2Nqcy9pbmRleC5qcz8wNjQyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkU3F1YXJlU2hhcGUgPSB2b2lkIDA7XG5jb25zdCBTcXVhcmVEcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL1NxdWFyZURyYXdlclwiKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRTcXVhcmVTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFtcImVkZ2VcIiwgXCJzcXVhcmVcIl0sIG5ldyBTcXVhcmVEcmF3ZXJfMS5TcXVhcmVEcmF3ZXIoKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRTcXVhcmVTaGFwZSA9IGxvYWRTcXVhcmVTaGFwZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/cjs/index.js\n");

/***/ })

};
;