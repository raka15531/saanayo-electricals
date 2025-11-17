"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-star";
exports.ids = ["vendor-chunks/tsparticles-shape-star"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/cjs/StarDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StarDrawer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass StarDrawer {\n    draw(context, particle, radius) {\n        const sides = particle.sides, inset = particle.starInset ?? 2;\n        context.moveTo(0, 0 - radius);\n        for (let i = 0; i < sides; i++) {\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius * inset);\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius);\n        }\n    }\n    getSidesCount(particle) {\n        const star = particle.shapeData;\n        return Math.round((0, tsparticles_engine_1.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));\n    }\n    particleInit(container, particle) {\n        const star = particle.shapeData, inset = (0, tsparticles_engine_1.getRangeValue)(star?.inset ?? 2);\n        particle.starInset = inset;\n    }\n}\nexports.StarDrawer = StarDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvU3RhckRyYXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FhbmF5by1lbGVjdHJpY2Fscy8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zdGFyL2Nqcy9TdGFyRHJhd2VyLmpzPzJhNDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0YXJEcmF3ZXIgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jbGFzcyBTdGFyRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3Qgc2lkZXMgPSBwYXJ0aWNsZS5zaWRlcywgaW5zZXQgPSBwYXJ0aWNsZS5zdGFySW5zZXQgPz8gMjtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgMCAtIHJhZGl1cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZXM7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIHNpZGVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDAsIDAgLSByYWRpdXMgKiBpbnNldCk7XG4gICAgICAgICAgICBjb250ZXh0LnJvdGF0ZShNYXRoLlBJIC8gc2lkZXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMCwgMCAtIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBzdGFyID0gcGFydGljbGUuc2hhcGVEYXRhO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoMCwgdHNwYXJ0aWNsZXNfZW5naW5lXzEuZ2V0UmFuZ2VWYWx1ZSkoc3Rhcj8uc2lkZXMgPz8gc3Rhcj8ubmJfc2lkZXMgPz8gNSkpO1xuICAgIH1cbiAgICBwYXJ0aWNsZUluaXQoY29udGFpbmVyLCBwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBzdGFyID0gcGFydGljbGUuc2hhcGVEYXRhLCBpbnNldCA9ICgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5nZXRSYW5nZVZhbHVlKShzdGFyPy5pbnNldCA/PyAyKTtcbiAgICAgICAgcGFydGljbGUuc3Rhckluc2V0ID0gaW5zZXQ7XG4gICAgfVxufVxuZXhwb3J0cy5TdGFyRHJhd2VyID0gU3RhckRyYXdlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-star/cjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/cjs/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadStarShape = void 0;\nconst StarDrawer_1 = __webpack_require__(/*! ./StarDrawer */ \"(ssr)/./node_modules/tsparticles-shape-star/cjs/StarDrawer.js\");\nasync function loadStarShape(engine, refresh = true) {\n    await engine.addShape(\"star\", new StarDrawer_1.StarDrawer(), refresh);\n}\nexports.loadStarShape = loadStarShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCLHFCQUFxQixtQkFBTyxDQUFDLG1GQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYW5heW8tZWxlY3RyaWNhbHMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9janMvaW5kZXguanM/NWQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFN0YXJTaGFwZSA9IHZvaWQgMDtcbmNvbnN0IFN0YXJEcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL1N0YXJEcmF3ZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkU3RhclNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoXCJzdGFyXCIsIG5ldyBTdGFyRHJhd2VyXzEuU3RhckRyYXdlcigpLCByZWZyZXNoKTtcbn1cbmV4cG9ydHMubG9hZFN0YXJTaGFwZSA9IGxvYWRTdGFyU2hhcGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/cjs/index.js\n");

/***/ })

};
;