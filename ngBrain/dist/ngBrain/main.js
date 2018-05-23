(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-reg/log-reg.component */ "./src/app/log-reg/log-reg.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _brain_brain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brain/brain.component */ "./src/app/brain/brain.component.ts");
/* harmony import */ var _brain_display_brain_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brain-display/brain-display.component */ "./src/app/brain-display/brain-display.component.ts");
/* harmony import */ var _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-view/course-view.component */ "./src/app/course-view/course-view.component.ts");
/* harmony import */ var _course_create_course_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-create/course-create.component */ "./src/app/course-create/course-create.component.ts");
/* harmony import */ var _course_update_course_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-update/course-update.component */ "./src/app/course-update/course-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'log-reg', component: _log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_2__["LogRegComponent"] },
    { path: 'brain', component: _brain_brain_component__WEBPACK_IMPORTED_MODULE_4__["BrainComponent"], children: [
            { path: 'brain-display', component: _brain_display_brain_display_component__WEBPACK_IMPORTED_MODULE_5__["BrainDisplayComponent"] },
            { path: 'course-view', component: _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewComponent"] },
            { path: 'course-create', component: _course_create_course_create_component__WEBPACK_IMPORTED_MODULE_7__["CourseCreateComponent"] },
            { path: 'course-update', component: _course_update_course_update_component__WEBPACK_IMPORTED_MODULE_8__["CourseUpdateComponent"] },
        ] },
    { path: '', pathMatch: 'full', redirectTo: '/log-reg' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"nav-bar\">\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'The Outward Bound Brain';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log-reg/log-reg.component */ "./src/app/log-reg/log-reg.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _brain_brain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brain/brain.component */ "./src/app/brain/brain.component.ts");
/* harmony import */ var _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-view/course-view.component */ "./src/app/course-view/course-view.component.ts");
/* harmony import */ var _course_create_course_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-create/course-create.component */ "./src/app/course-create/course-create.component.ts");
/* harmony import */ var _course_update_course_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./course-update/course-update.component */ "./src/app/course-update/course-update.component.ts");
/* harmony import */ var _brain_display_brain_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brain-display/brain-display.component */ "./src/app/brain-display/brain-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_7__["LogRegComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _brain_brain_component__WEBPACK_IMPORTED_MODULE_9__["BrainComponent"],
                _brain_display_brain_display_component__WEBPACK_IMPORTED_MODULE_13__["BrainDisplayComponent"],
                _course_view_course_view_component__WEBPACK_IMPORTED_MODULE_10__["CourseViewComponent"],
                _course_create_course_create_component__WEBPACK_IMPORTED_MODULE_11__["CourseCreateComponent"],
                _course_update_course_update_component__WEBPACK_IMPORTED_MODULE_12__["CourseUpdateComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brain-display/brain-display.component.css":
/*!***********************************************************!*\
  !*** ./src/app/brain-display/brain-display.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brain-display/brain-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/brain-display/brain-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"buildCalendar(2018)\">log days</button>\n<table>\n    <thead>\n        <th *ngFor=\"let day of daysOfTheYear\">{{day}}</th>\n    </thead>\n</table>\n<div *ngIf=\"cal\">\n    {{cal[45]}}\n</div>"

/***/ }),

/***/ "./src/app/brain-display/brain-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/brain-display/brain-display.component.ts ***!
  \**********************************************************/
/*! exports provided: BrainDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainDisplayComponent", function() { return BrainDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrainDisplayComponent = /** @class */ (function () {
    function BrainDisplayComponent() {
    }
    BrainDisplayComponent.prototype.ngOnInit = function () {
    };
    BrainDisplayComponent.prototype.buildCalendar = function (year) {
        var date = new Date(year, 0, 1);
        var end = new Date(date);
        end.setFullYear(end.getFullYear() + 1);
        var array = [];
        while (date < end) {
            console.log(date);
            array.push(date);
            date.setDate(date.getDate() + 1);
        }
        this.cal = array;
    };
    BrainDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brain-display',
            template: __webpack_require__(/*! ./brain-display.component.html */ "./src/app/brain-display/brain-display.component.html"),
            styles: [__webpack_require__(/*! ./brain-display.component.css */ "./src/app/brain-display/brain-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrainDisplayComponent);
    return BrainDisplayComponent;
}());



/***/ }),

/***/ "./src/app/brain/brain.component.css":
/*!*******************************************!*\
  !*** ./src/app/brain/brain.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brain/brain.component.html":
/*!********************************************!*\
  !*** ./src/app/brain/brain.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['brain-display']\">Brain</a> | <a [routerLink]=\"['course-create']\">Add New Course</a> | <a href=\"\" (click)=\"logOff()\">Log Out</a>\n\n<div style=\"background-color:grey; padding: 10px 25px;\"> \n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/brain/brain.component.ts":
/*!******************************************!*\
  !*** ./src/app/brain/brain.component.ts ***!
  \******************************************/
/*! exports provided: BrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrainComponent", function() { return BrainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrainComponent = /** @class */ (function () {
    function BrainComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    BrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // turn this on to use log reg again.
        // if (this._httpService.retrieveLogUser() == null) {
        //     this._router.navigate(['/log-reg']);
        // } else {
        //     this.loggedUser = this._httpService.retrieveLogUser();
        //     this._router.navigate(['/brain/brain-display']);
        // }
        //
        // turn this on and above off to auto log in.
        var autoLogin = {
            email: 'm@k.com',
            password: 'Aa121212'
        };
        var observable = this._httpService.login(autoLogin);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['loggedUser']) {
                _this.loggedUser = data['loggedUser'];
                _this._httpService.setLogUser(_this.loggedUser);
            }
        });
        //
    };
    BrainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brain',
            template: __webpack_require__(/*! ./brain.component.html */ "./src/app/brain/brain.component.html"),
            styles: [__webpack_require__(/*! ./brain.component.css */ "./src/app/brain/brain.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BrainComponent);
    return BrainComponent;
}());



/***/ }),

/***/ "./src/app/course-create/course-create.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-create/course-create.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-create/course-create.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-create/course-create.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/course-create/course-create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-create/course-create.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCreateComponent", function() { return CourseCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseCreateComponent = /** @class */ (function () {
    function CourseCreateComponent() {
    }
    CourseCreateComponent.prototype.ngOnInit = function () {
    };
    CourseCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-create',
            template: __webpack_require__(/*! ./course-create.component.html */ "./src/app/course-create/course-create.component.html"),
            styles: [__webpack_require__(/*! ./course-create.component.css */ "./src/app/course-create/course-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseCreateComponent);
    return CourseCreateComponent;
}());



/***/ }),

/***/ "./src/app/course-update/course-update.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-update/course-update.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-update/course-update.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-update/course-update.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-update works!\n</p>\n"

/***/ }),

/***/ "./src/app/course-update/course-update.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-update/course-update.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseUpdateComponent", function() { return CourseUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseUpdateComponent = /** @class */ (function () {
    function CourseUpdateComponent() {
    }
    CourseUpdateComponent.prototype.ngOnInit = function () {
    };
    CourseUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-update',
            template: __webpack_require__(/*! ./course-update.component.html */ "./src/app/course-update/course-update.component.html"),
            styles: [__webpack_require__(/*! ./course-update.component.css */ "./src/app/course-update/course-update.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseUpdateComponent);
    return CourseUpdateComponent;
}());



/***/ }),

/***/ "./src/app/course-view/course-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-view/course-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-view/course-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-view/course-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/course-view/course-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-view/course-view.component.ts ***!
  \******************************************************/
/*! exports provided: CourseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewComponent", function() { return CourseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseViewComponent = /** @class */ (function () {
    function CourseViewComponent() {
    }
    CourseViewComponent.prototype.ngOnInit = function () {
    };
    CourseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-view',
            template: __webpack_require__(/*! ./course-view.component.html */ "./src/app/course-view/course-view.component.html"),
            styles: [__webpack_require__(/*! ./course-view.component.css */ "./src/app/course-view/course-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseViewComponent);
    return CourseViewComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    HttpService.prototype.login = function (loginUser) {
        console.log('logging in through service');
        return this._http.post('/loginUser', loginUser);
    };
    HttpService.prototype.register = function (registerUser) {
        console.log('registering through service');
        return this._http.post('/registerUser', registerUser);
    };
    HttpService.prototype.setLogUser = function (loggedUser) {
        this.loggedUser = loggedUser;
        this._router.navigate(['/brain/brain-display']);
    };
    HttpService.prototype.retrieveLogUser = function () {
        console.log(this.loggedUser);
        return this.loggedUser;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/log-reg/log-reg.component.css":
/*!***********************************************!*\
  !*** ./src/app/log-reg/log-reg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login, #register {\r\n    border: 3px solid black;\r\n    width: 40%;\r\n    display: inline-block;\r\n    padding: 10px 40px 10px 10px;\r\n    margin: 2%;\r\n    vertical-align: top;\r\n    text-align: right;\r\n}\r\n\r\n#login {\r\n    width: 30%;\r\n}"

/***/ }),

/***/ "./src/app/log-reg/log-reg.component.html":
/*!************************************************!*\
  !*** ./src/app/log-reg/log-reg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>Welcome to The NWOBS Brain!</h1>\n    <h3>Please login or register if you haven't already</h3>\n    <img width=\"300\" alt=\"OB-Logo\" src=\"https://cdn-images-1.medium.com/max/1200/1*RDNSZ_Lkvj0RlIx8KawNIw.png\">\n</div>\n\n<div id=\"register\">\n    <h3>Register Here</h3>\n    {{registerUser | json}}\n    <form (submit)=\"registerThroughService()\">\n        <label for=\"registerUser.firstName\">First Name:\n            <input type=\"text\" name=\"registerUser.firstName\" id=\"registerUser-firstName\" [(ngModel)]=\"registerUser.firstName\" required minlength=\"3\"\n                #firstName=\"ngModel\">\n        </label>\n        <br>\n        <p style=\"color:red\" *ngIf=\"firstName.errors && firstName.errors.minlength\">First Name needs to be longer</p>\n        <label for=\"registerUser.lastName\">Last Name:\n            <input type=\"text\" name=\"registerUser.lastName\" id=\"registerUser-lastName\" [(ngModel)]=\"registerUser.lastName\" required minlength=\"3\"\n                #lastName=\"ngModel\">\n        </label>\n        <br>\n        <p style=\"color:red\" *ngIf=\"lastName.errors && lastName.errors.minlength\">Last Name needs to be longer</p>\n        <label for=\"registerUser.email\">Email:\n            <input type=\"email\" name=\"registerUser.email\" id=\"registerUser-email\" [(ngModel)]=\"registerUser.email\" required #email=\"ngModel\"\n                pattern=\"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b\">\n        </label>\n        <br>\n        <div style=\"color:red\" *ngIf=\"email.errors && email.errors.pattern\">That's not a valid email</div>\n        <label for=\"registerUser.password\">Password:\n            <input type=\"password\" name=\"registerUser.password\" id=\"registerUser-password\" [(ngModel)]=\"registerUser.password\" required\n                minlength=\"8\" #password=\"ngModel\" pattern=\"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{8,64}$\">\n            <p *ngIf=\"password-err\">Password must be at least 8 characters long.</p>\n        </label>\n        <br>\n        <p style=\"color:red\" *ngIf=\"password.errors && password.errors.minlength\">Password needs to be longer</p>\n        <p style=\"color:red\" *ngIf=\"password.errors && password.errors.pattern\">Password must have upper, lower and number</p>\n        <label for=\"registerUser.passwordConf\">Password Confirmation:\n            <input type=\"password\" name=\"registerUser.passwordConf\" id=\"registerUser-passwordConf\" [(ngModel)]=\"registerUser.passwordConf\"\n                required #passwordConf=\"ngModel\">\n        </label>\n        <br>\n        <p style=\"color:red\" *ngIf=\"registerUser.password != registerUser.passwordConf\">Password doesn't match confirmation.</p>\n        <input *ngIf=\"firstName.valid && lastName.valid && email.valid && password.valid && passwordConf.valid\" type=\"submit\" value=\"registerUser\"\n            id=\"registerUser-btn\">\n    </form>\n    <h3 *ngIf=\"responseMsg\" style=\"color: red\">{{responseMsg}}</h3>\n</div>\n\n<div id=\"login\">\n    <h3>Login Here</h3>\n    {{login | json}}\n    <form (submit)=\"loginThroughService()\">\n        <label for=\"login.email\">Email:\n            <input type=\"email\" name=\"login.email\" id=\"login-email\" [(ngModel)]=\"login.email\" required>\n        </label>\n        <br>\n        <br>\n        <label for=\"login.password\">Password:\n            <input type=\"password\" name=\"login.password\" id=\"login-password\" [(ngModel)]=\"login.password\" required>\n        </label>\n        <br>\n        <br>\n        <p *ngIf=\"login-err\">Invalid Credentials</p>\n        <input type=\"submit\" value=\"Login\" id=\"login-btn\">\n        <p *ngIf=\"errorMsg\">{{errorMsg}}</p>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/log-reg/log-reg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/log-reg/log-reg.component.ts ***!
  \**********************************************/
/*! exports provided: LogRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRegComponent", function() { return LogRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    LogRegComponent.prototype.ngOnInit = function () {
        console.log('halp!');
        this.login = {
            email: '',
            password: ''
        };
        this.registerUser = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: '',
        };
    };
    LogRegComponent.prototype.loginThroughService = function () {
        var _this = this;
        console.log('logging in now');
        var observable = this._httpService.login(this.login);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['loggedUser']) {
                _this.loggedInUser = data['loggedUser'];
                _this._httpService.setLogUser(_this.loggedInUser);
            }
            else {
                _this.errorMsg = data['errorMsg'];
            }
        });
    };
    LogRegComponent.prototype.registerThroughService = function () {
        var _this = this;
        if (this.registerUser.password === this.registerUser.passwordConf) {
            console.log('registering now');
            var observable = this._httpService.register(this.registerUser);
            observable.subscribe(function (data) {
                console.log(data);
                if (data['message']) {
                    _this.responseMsg = data['message'];
                    console.log('reg success');
                }
                else if (data['error']) {
                    _this.responseMsg = data['error'];
                    console.log('reg failed');
                }
            });
        }
        else {
        }
    };
    LogRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-reg',
            template: __webpack_require__(/*! ./log-reg.component.html */ "./src/app/log-reg/log-reg.component.html"),
            styles: [__webpack_require__(/*! ./log-reg.component.css */ "./src/app/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogRegComponent);
    return LogRegComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wamsutta\Desktop\Coding\Independent Projects\OBBrain_project\OBBrain\ngBrain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map