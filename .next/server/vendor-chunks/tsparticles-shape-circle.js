"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-circle";
exports.ids = ["vendor-chunks/tsparticles-shape-circle"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CircleDrawer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass CircleDrawer {\n    draw(context, particle, radius) {\n        if (!particle.circleRange) {\n            particle.circleRange = { min: 0, max: Math.PI * 2 };\n        }\n        const circleRange = particle.circleRange;\n        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);\n    }\n    getSidesCount() {\n        return 12;\n    }\n    particleInit(container, particle) {\n        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {\n            max: 360,\n            min: 0,\n        };\n        particle.circleRange = !(0, tsparticles_engine_1.isObject)(angle)\n            ? {\n                min: 0,\n                max: (angle * Math.PI) / 180,\n            }\n            : { min: (angle.min * Math.PI) / 180, max: (angle.max * Math.PI) / 180 };\n    }\n}\nexports.CircleDrawer = CircleDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9DaXJjbGVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FhbmF5by1lbGVjdHJpY2Fscy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1jaXJjbGUvY2pzL0NpcmNsZURyYXdlci5qcz8wMWFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaXJjbGVEcmF3ZXIgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jbGFzcyBDaXJjbGVEcmF3ZXIge1xuICAgIGRyYXcoY29udGV4dCwgcGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICBpZiAoIXBhcnRpY2xlLmNpcmNsZVJhbmdlKSB7XG4gICAgICAgICAgICBwYXJ0aWNsZS5jaXJjbGVSYW5nZSA9IHsgbWluOiAwLCBtYXg6IE1hdGguUEkgKiAyIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2lyY2xlUmFuZ2UgPSBwYXJ0aWNsZS5jaXJjbGVSYW5nZTtcbiAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcmFkaXVzLCBjaXJjbGVSYW5nZS5taW4sIGNpcmNsZVJhbmdlLm1heCwgZmFsc2UpO1xuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gMTI7XG4gICAgfVxuICAgIHBhcnRpY2xlSW5pdChjb250YWluZXIsIHBhcnRpY2xlKSB7XG4gICAgICAgIGNvbnN0IHNoYXBlRGF0YSA9IHBhcnRpY2xlLnNoYXBlRGF0YSwgYW5nbGUgPSBzaGFwZURhdGE/LmFuZ2xlID8/IHtcbiAgICAgICAgICAgIG1heDogMzYwLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICB9O1xuICAgICAgICBwYXJ0aWNsZS5jaXJjbGVSYW5nZSA9ICEoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuaXNPYmplY3QpKGFuZ2xlKVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogKGFuZ2xlICogTWF0aC5QSSkgLyAxODAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHsgbWluOiAoYW5nbGUubWluICogTWF0aC5QSSkgLyAxODAsIG1heDogKGFuZ2xlLm1heCAqIE1hdGguUEkpIC8gMTgwIH07XG4gICAgfVxufVxuZXhwb3J0cy5DaXJjbGVEcmF3ZXIgPSBDaXJjbGVEcmF3ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadCircleShape = void 0;\nconst CircleDrawer_1 = __webpack_require__(/*! ./CircleDrawer */ \"(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js\");\nasync function loadCircleShape(engine, refresh = true) {\n    await engine.addShape(\"circle\", new CircleDrawer_1.CircleDrawer(), refresh);\n}\nexports.loadCircleShape = loadCircleShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFPLENBQUMseUZBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYW5heW8tZWxlY3RyaWNhbHMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9pbmRleC5qcz8xYmI4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkQ2lyY2xlU2hhcGUgPSB2b2lkIDA7XG5jb25zdCBDaXJjbGVEcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL0NpcmNsZURyYXdlclwiKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRDaXJjbGVTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFwiY2lyY2xlXCIsIG5ldyBDaXJjbGVEcmF3ZXJfMS5DaXJjbGVEcmF3ZXIoKSwgcmVmcmVzaCk7XG59XG5leHBvcnRzLmxvYWRDaXJjbGVTaGFwZSA9IGxvYWRDaXJjbGVTaGFwZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/cjs/index.js\n");

/***/ })

};
;