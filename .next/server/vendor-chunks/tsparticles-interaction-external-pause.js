"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pauser = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass Pauser extends tsparticles_engine_1.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this.handleClickMode = (mode) => {\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            }\n            else {\n                container.play();\n            }\n        };\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact() {\n    }\n    isEnabled() {\n        return true;\n    }\n    reset() {\n    }\n}\nexports.Pauser = Pauser;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsNkJBQTZCLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYW5heW8tZWxlY3RyaWNhbHMvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL1BhdXNlci5qcz8wOTE1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXVzZXIgPSB2b2lkIDA7XG5jb25zdCB0c3BhcnRpY2xlc19lbmdpbmVfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIik7XG5jbGFzcyBQYXVzZXIgZXh0ZW5kcyB0c3BhcnRpY2xlc19lbmdpbmVfMS5FeHRlcm5hbEludGVyYWN0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja01vZGUgPSAobW9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGUgIT09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5nZXRBbmltYXRpb25TdGF0dXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgfVxuICAgIGFzeW5jIGludGVyYWN0KCkge1xuICAgIH1cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICB9XG59XG5leHBvcnRzLlBhdXNlciA9IFBhdXNlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/cjs/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadExternalPauseInteraction = void 0;\nconst Pauser_1 = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/Pauser.js\");\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container) => new Pauser_1.Pauser(container), refresh);\n}\nexports.loadExternalPauseInteraction = loadExternalPauseInteraction;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQztBQUNwQyxpQkFBaUIsbUJBQU8sQ0FBQywyRkFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFuYXlvLWVsZWN0cmljYWxzLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXBhdXNlL2Nqcy9pbmRleC5qcz82Yzc4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkRXh0ZXJuYWxQYXVzZUludGVyYWN0aW9uID0gdm9pZCAwO1xuY29uc3QgUGF1c2VyXzEgPSByZXF1aXJlKFwiLi9QYXVzZXJcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkRXh0ZXJuYWxQYXVzZUludGVyYWN0aW9uKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkSW50ZXJhY3RvcihcImV4dGVybmFsUGF1c2VcIiwgKGNvbnRhaW5lcikgPT4gbmV3IFBhdXNlcl8xLlBhdXNlcihjb250YWluZXIpLCByZWZyZXNoKTtcbn1cbmV4cG9ydHMubG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbiA9IGxvYWRFeHRlcm5hbFBhdXNlSW50ZXJhY3Rpb247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/cjs/index.js\n");

/***/ })

};
;