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
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _live_session_live_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-session/live-session.component */ "./src/app/live-session/live-session.component.ts");
/* harmony import */ var _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashoboard/dashoboard.component */ "./src/app/dashoboard/dashoboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_quard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.quard */ "./src/app/auth.quard.ts");
/* harmony import */ var _ifrmae_ifrmae_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ifrmae/ifrmae.component */ "./src/app/ifrmae/ifrmae.component.ts");
/* harmony import */ var _login_webinar_login_webinar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-webinar/login-webinar.component */ "./src/app/login-webinar/login-webinar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_3__["DashoboardComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'livesession',
        component: _live_session_live_session_component__WEBPACK_IMPORTED_MODULE_2__["LiveSessionComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'session',
        component: _ifrmae_ifrmae_component__WEBPACK_IMPORTED_MODULE_8__["IfrmaeComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'loginwebinar',
        component: _login_webinar_login_webinar_component__WEBPACK_IMPORTED_MODULE_9__["LoginWebinarComponent"]
    }
    // {
    //   path: '**',
    //   redirectTo: '',
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
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

module.exports = "<!-- <app-login></app-login> -->\r\n\r\n<router-outlet></router-outlet>\r\n<!-- <app-name-editor></app-name-editor> -->"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_quard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.quard */ "./src/app/auth.quard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashoboard/dashoboard.component */ "./src/app/dashoboard/dashoboard.component.ts");
/* harmony import */ var _live_session_live_session_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./live-session/live-session.component */ "./src/app/live-session/live-session.component.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profileview/profileview.component */ "./src/app/profileview/profileview.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ifrmae_ifrmae_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ifrmae/ifrmae.component */ "./src/app/ifrmae/ifrmae.component.ts");
/* harmony import */ var _login_webinar_login_webinar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login-webinar/login-webinar.component */ "./src/app/login-webinar/login-webinar.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_21__);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_10__["DashoboardComponent"],
                _live_session_live_session_component__WEBPACK_IMPORTED_MODULE_11__["LiveSessionComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_16__["ProfileviewComponent"],
                _ifrmae_ifrmae_component__WEBPACK_IMPORTED_MODULE_19__["IfrmaeComponent"],
                _login_webinar_login_webinar_component__WEBPACK_IMPORTED_MODULE_20__["LoginWebinarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_21__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                ng2_opd_popup__WEBPACK_IMPORTED_MODULE_12__["PopupModule"].forRoot()
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"]],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_quard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.quard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.quard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('x-auth-token')) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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



var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "http://195.201.120.175:3000/api/register";
        this._loginUrl = "http://195.201.120.175:3000/api/auth";
        this.loginViewerURL = 'http://195.201.120.175:3000/api/auth/login';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'q=0.8;application/json;q=0.9'
            })
        };
        // this.options = new RequestOptions({ headers: this.headers });
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.loginViewer = function (user) {
        return this.http.post(this.loginViewerURL, user);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('x-auth-token');
        console.log('Logging out from application');
        this._router.navigate(['/']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('x-auth-token');
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('x-auth-token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashoboard/dashboard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/dashoboard/dashboard.service.ts ***!
  \*************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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



var DashboardService = /** @class */ (function () {
    function DashboardService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "http://195.201.120.175:3000/api/webinar/register";
        this.getWebinarUrl = 'http://195.201.120.175:3000/api/webinar/listOfWebinar';
        this.deleteWebURL = 'http://195.201.120.175:3000/api/webinar/getById/5b46f9dc3ac50b3438d79cf6';
    }
    DashboardService.prototype.registerWebinar = function (webinar) {
        var body = JSON.stringify(webinar);
        console.log('in service Add webinar : ' + body);
        return this.http.post(this._registerUrl, webinar);
    };
    DashboardService.prototype.getListOfWebinar = function () {
        return this.http.get(this.getWebinarUrl);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashoboard/dashoboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashoboard/dashoboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashoboard/dashoboard.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashoboard/dashoboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"demo-header mdl-layout__header mdl-color--magenta\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">Webinar Application</span>\n            <span class=\"mdl-layout-title page-name-title\">Dashboard</span>\n            <div class=\"mdl-layout-spacer\"></div>\n            <a id=\"show-dialog\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color-text--white-top\">Create New\n                <i class=\"material-icons\" role=\"presentation\">create</i>\n            </a>\n        </div>\n    </header>\n    <div class=\"demo-drawer mdl-layout__drawer backround--color-white\">\n        <app-profileview></app-profileview>\n        <hr>\n        <app-nav></app-nav>\n    </div>\n    <main class=\"mdl-layout__content mdl-color--grey-100\">\n        <div class=\"mdl-grid demo-content\">\n\n            <div class=\"main-upcoming-cards mmdl-cell mdl-cell--12-col mdl-grid\">\n                <p>Up Coming</p>\n                <div class=\"clear\"></div>\n                <div class=\"modal mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--3-col mdl-grid\" style=\"cursor: pointer;\" (click)=\"popupShow()\"\n                    *ngFor=\"let webinar of upcomingWebinar\" (click)=\"getWebinarDetailById(webinar._id)\">\n                    <div class=\"card-for-info\">\n                        <div class=\"event-day\">\n                            <p>{{webinar.web_day}}</p>\n                        </div>\n                        <div class=\"event-timing\">\n                            <p>{{webinar.web_start_time | date }}</p>\n                        </div>\n                        <div class=\"event-timing\">\n                            <p>{{webinar.web_start_time | date:'shortTime' }}</p>\n                        </div>\n                        <div class=\"sepration\">\n                            <hr>\n                        </div>\n                        <div class=\"title-of-event\">{{webinar.web_topic}}</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"main-upcoming-cards mmdl-cell mdl-cell--12-col mdl-grid\">\n                <p>Previous</p>\n                <div class=\"clear\"></div>\n                <div class=\"modal mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--3-col mdl-grid\" style=\"cursor: pointer;\" (click)=\"popupShow()\"\n                    *ngFor=\"let webinar of previousWebinar\" (click)=\"getWebinarDetailById(webinar._id)\">\n                    <div class=\"card-for-info\">\n                        <div class=\"event-day\">\n                            <p>{{webinar.web_day}}</p>\n                        </div>\n                        <div class=\"event-timing\">\n                            <p>{{webinar.web_start_time | date }}</p>\n                        </div>\n                        <div class=\"event-timing\">\n                            <p>{{webinar.web_start_time | date:'shortTime' }}</p>\n                        </div>\n                        <div class=\"sepration\">\n                            <hr>\n                        </div>\n                        <div class=\"title-of-event\">{{webinar.web_topic}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </main>\n</div>\n\n<dialog class=\"mdl-dialog dailog-creating-from\">\n    <h4 class=\"mdl-dialog__title\">Create Your Webinar</h4>\n    <hr>\n    <div class=\"mdl-grid\">\n        <form>\n            <div class=\"mdl-cell mdl-cell--6-col\" style=\"float: left;\">\n                <div class=\"mdl-dialog__content\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_name\" name=\"web_name\" type=\"text\" id=\"name-orignal\">\n                        <label class=\"mdl-textfield__label\" for=\"name-orignal\">Webinar Name</label>\n                    </div>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_topic\" name=\"web_topic\" type=\"text\" id=\"webinar-topic\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-topic\">Webinar Topic</label>\n                    </div>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_description\" name=\"web_description\" type=\"text\" id=\"webinar-decription\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-decription\">Webinar Description</label>\n                    </div>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_start_time\" name=\"web_description\" type=\"text\" id=\"webinar-decription\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-decription\">Time</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mmdl-cell mdl-cell--6-col\" style=\"float: left;\">\n                <div class=\"mdl-dialog__content\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_day\" name=\"web_start_time\" type=\"text\" id=\"webinar-date\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-date\">Webinar Day</label>\n                    </div>\n                    <div class=\"mdl-textfield mdl-js-textfield getmdl-select\">\n                        <input type=\"text\" value=\"\" class=\"mdl-textfield__input\" id=\"sample1\" readonly>\n                        <input type=\"hidden\" value=\"\" name=\"sample1\">\n                        <label for=\"sample1\" class=\"mdl-textfield__label\">Country</label>\n                        <ul for=\"sample1\" class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu\">\n                            <li class=\"mdl-menu__item\" data-val=\"DEU\">Germany</li>\n                            <li class=\"mdl-menu__item\" data-val=\"BLR\">Belarus</li>\n                            <li class=\"mdl-menu__item\" data-val=\"RUS\">Russia</li>\n                        </ul>\n                    </div>\n\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_date\" name=\"web_date\" type=\"date\" id=\"webinar-time\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-time\"></label>\n                    </div>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" [(ngModel)]=\"web_utc\" name=\"web_utc\" type=\"text\" id=\"webinar-time-zone\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-time-zone\">UTC</label>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"mdl-dialog__actions\">\n                <button type=\"button\" routerLink=\"/dashboard\" (click)=\"registerWebinar()\" class=\"mdl-button\">Submit</button>\n                <button type=\"button\" class=\"mdl-button close\">Close</button>\n            </div>\n        </form>\n    </div>\n</dialog>\n\n<popup #popup1>\n    <div class=\"mdl-dialog__content\">\n        <h3>{{webinarDetail.web_day}}</h3>\n        <div class=\"mdl-grid\">\n            <div class=\"mdl-cell mdl-cell--6-col\">\n                <h5>{{webinarDetail.web_start_time | date:'shortTime'}}</h5>\n            </div>\n            <div class=\"mdl-cell mdl-cell--3-col\">\n                <h5>{{webinarDetail.web_start_time | date}}</h5>\n            </div>\n        </div>\n        <hr>\n        <h5>Description</h5>\n        <p id=\"paragraph\">{{webinarDetail.web_description}}</p>\n        <div style=\"text-align: center;\" >\n            <a  (click) = \"morecontent();\" style=\"cursor: pointer;\">more</a>\n        </div>\n    </div>\n    <div class=\"mdl-dialog__actions\">\n        <!-- <button type=\"button\" class=\"mdl-button close\" id=\"closmodal\">Close</button> -->\n        <button (click)=\"buttonlock();\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n            <i id=\"button-icon\" class=\"material-icons\">lock</i>\n        </button>\n        <button id=\"btn-delete\" (click)=\"deleteWebinarById(webinarDetail._id)\" class=\"lock-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n            Delete\n        </button>\n        \n        <div style=\"text-align: left; right: 343px; position: relative;\">\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n                <a style=\"text-decoration: none; color: #fff\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://195.201.120.175:8443/?id={{webinarDetail._id}}&p=1\">Start</a>\n            </button>        \n        </div>\n    </div>\n</popup>"

/***/ }),

/***/ "./src/app/dashoboard/dashoboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashoboard/dashoboard.component.ts ***!
  \****************************************************/
/*! exports provided: DashoboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashoboardComponent", function() { return DashoboardComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ifrmae_ifrmae_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ifrmae/ifrmae.service */ "./src/app/ifrmae/ifrmae.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _live_session_live_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../live-session/live-session.service */ "./src/app/live-session/live-session.service.ts");
/* harmony import */ var _models_webinar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/webinar */ "./src/app/models/webinar.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashoboard/dashboard.service.ts");
/* harmony import */ var _webinar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../webinar.service */ "./src/app/webinar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DashoboardComponent = /** @class */ (function () {
    function DashoboardComponent(webinarService, dashboardService, _router, popup, liveSessionService, settingsService, profileService, ifrmaeService, authService) {
        this.webinarService = webinarService;
        this.dashboardService = dashboardService;
        this._router = _router;
        this.popup = popup;
        this.liveSessionService = liveSessionService;
        this.settingsService = settingsService;
        this.profileService = profileService;
        this.ifrmaeService = ifrmaeService;
        this.authService = authService;
        this.web_name = '';
        this.web_date = '';
        this.web_day = '';
        this.web_start_time = '';
        this.web_description = '';
        this.web_utc = '';
        this.web_topic = '';
        this.upcomingWebinar = [];
        this.previousWebinar = [];
        // webinarDetail: WebinarDetail
        this.webinarDetail = {};
        this.fnameAlert = 'First Name is required';
        this.popup.options = {
            header: "Webinar Detail",
            color: "#283593",
            widthProsentage: 40,
            animationDuration: 0.5,
            showButtons: true,
            confirmBtnContent: "Start",
            cancleBtnContent: "Delete",
            confirmBtnClass: "btn btn-bold",
            cancleBtnClass: "btn btn-bold",
            animation: "fadeInUp" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        if (this.token) {
            _router.navigate(['/dashboard']);
        }
    }
    DashoboardComponent.prototype.ngOnInit = function () {
        this.adminID = sessionStorage.getItem('adminID');
        this.getListOfWebinar();
    };
    DashoboardComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    Object.defineProperty(DashoboardComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('x-auth-token');
        },
        enumerable: true,
        configurable: true
    });
    DashoboardComponent.prototype.registerWebinar = function () {
        console.log('Webinar Method called....!!');
        var startTempTime = '2018-10-15T' + this.web_start_time + ':00Z';
        this.webinar = new _models_webinar__WEBPACK_IMPORTED_MODULE_5__["Webinar"]();
        this.webinar.web_day = this.web_day;
        console.log(this.webinar.web_date);
        this.webinar.web_date = new Date(this.web_date);
        this.webinar.web_description = this.web_description;
        this.webinar.web_name = this.web_name;
        this.webinar.web_start_time = startTempTime;
        this.webinar.web_topic = this.web_topic;
        this.webinar.web_utc = this.web_utc;
        console.log('this.webinar ', this.webinar);
        // let newDate = this.date+'T23:00:00.000Z'
        this.dashboardService.registerWebinar(this.webinar)
            .subscribe(function (res) {
            console.log('Response Data from Register web....', res);
            location.reload();
        }, function (err) { return console.log(err); });
        this._router.navigate(['/dashboard']);
        // location.reload();
    };
    DashoboardComponent.prototype.getListOfWebinar = function () {
        var _this = this;
        this.webinarService.getWebinar()
            .subscribe(function (res) {
            _this.webinars = res.object;
            console.log('WEBINAR OBJECT ', res);
            for (var i = 0; i < res.object.length; i++) {
                var date = new Date();
                var date1 = new Date(res.object[i].web_date);
                if (date1 >= date) {
                    _this.upcomingWebinar.push(res.object[i]);
                }
                else {
                    _this.previousWebinar.push(res.object[i]);
                }
            }
            console.log('Upcoming...', _this.upcomingWebinar);
            console.log('Previous...', _this.previousWebinar);
            _this.UTC = res.object;
        }, function (err) { return console.log(err); });
    };
    DashoboardComponent.prototype.getWebinarDetailById = function (id) {
        var _this = this;
        this.webinarService.getWebinarById(id)
            .subscribe(function (res) {
            _this.webinarDetail = res.object;
            _this.popup1.show(_this.popup.options);
            localStorage.setItem('_id', res.object._id);
            console.log('_id', localStorage.getItem('_id'));
            localStorage.setItem('createdAt', res.object.createdAt);
            localStorage.setItem('updatedAt', res.object.updatedAt);
            localStorage.setItem('web_date', res.object.web_date);
            localStorage.setItem('web_day', res.object.web_day);
            localStorage.setItem('web_name', res.object.web_name);
            localStorage.setItem('web_start_time', res.object.web_start_time);
            localStorage.setItem('web_topic', res.object.web_topic);
            console.log(localStorage.getItem('web_day'));
            console.log('Response from get webinar detail by id method... ', _this.webinarDetail);
        }, function (err) { return console.log(err); });
    };
    DashoboardComponent.prototype.popupShow = function () {
        this.popup1.show(this.popup.options);
    };
    DashoboardComponent.prototype.morecontent = function () {
        this.paragraph = $('#paragraph');
        console.log("VAlue comes here", this.paragraph[0]);
        // e.stopPropagation();
        $('#paragraph').css({
            'height': 'auto'
        });
    };
    DashoboardComponent.prototype.buttonlock = function () {
        this.btndelete = $('#btn-delete');
        console.log("VAlue comes here", this.btndelete);
        $('#btn-delete').removeClass('lock-button').addClass('unlock-button');
        $('#button-icon').html('lock_open');
    };
    DashoboardComponent.prototype.deleteWebinarById = function (id) {
        var _this = this;
        this.webinarService.deleteWebinarById(id).subscribe(function (res) {
            console.log('Response by API...', res);
            _this.popup1.hide();
            _this._router.navigate(['/dashboard']);
            location.reload();
        }, function (err) { return console.log(err); });
    };
    DashoboardComponent.prototype.startLiveSession = function () {
        this.liveSessionService.startLive();
    };
    DashoboardComponent.prototype.dashboard = function () {
        console.log('Click on Home button');
        this._router.navigate(['/dashboard']);
    };
    DashoboardComponent.prototype.liveSession = function () {
        console.log('Im liveSession method...!!!');
        this.ifrmaeService.onSubmit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"])('popup1'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_9__["Popup"])
    ], DashoboardComponent.prototype, "popup1", void 0);
    DashoboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: 'app-dashoboard',
            template: __webpack_require__(/*! ./dashoboard.component.html */ "./src/app/dashoboard/dashoboard.component.html"),
            styles: [__webpack_require__(/*! ./dashoboard.component.css */ "./src/app/dashoboard/dashoboard.component.css")]
        }),
        __metadata("design:paramtypes", [_webinar_service__WEBPACK_IMPORTED_MODULE_7__["WebinarService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            ng2_opd_popup__WEBPACK_IMPORTED_MODULE_9__["Popup"],
            _live_session_live_session_service__WEBPACK_IMPORTED_MODULE_4__["LiveSessionService"],
            _settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _ifrmae_ifrmae_service__WEBPACK_IMPORTED_MODULE_1__["IfrmaeService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], DashoboardComponent);
    return DashoboardComponent;
}());



/***/ }),

/***/ "./src/app/ifrmae/ifrmae.component.css":
/*!*********************************************!*\
  !*** ./src/app/ifrmae/ifrmae.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ifrmae/ifrmae.component.html":
/*!**********************************************!*\
  !*** ./src/app/ifrmae/ifrmae.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe \n  id=\"inlineFrameExample\" \n  title=\"Inline Frame Example\" \n  width=\"500\" \n  height=\"500\" \n  src=\"assets/test.html\"\n  >\n</iframe>\n<!-- src=\"https://195.201.120.175:8443/\" -->\n"

/***/ }),

/***/ "./src/app/ifrmae/ifrmae.component.ts":
/*!********************************************!*\
  !*** ./src/app/ifrmae/ifrmae.component.ts ***!
  \********************************************/
/*! exports provided: IfrmaeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfrmaeComponent", function() { return IfrmaeComponent; });
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

var IfrmaeComponent = /** @class */ (function () {
    function IfrmaeComponent() {
    }
    IfrmaeComponent.prototype.ngOnInit = function () {
    };
    IfrmaeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ifrmae',
            template: __webpack_require__(/*! ./ifrmae.component.html */ "./src/app/ifrmae/ifrmae.component.html"),
            styles: [__webpack_require__(/*! ./ifrmae.component.css */ "./src/app/ifrmae/ifrmae.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IfrmaeComponent);
    return IfrmaeComponent;
}());



/***/ }),

/***/ "./src/app/ifrmae/ifrmae.service.ts":
/*!******************************************!*\
  !*** ./src/app/ifrmae/ifrmae.service.ts ***!
  \******************************************/
/*! exports provided: IfrmaeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfrmaeService", function() { return IfrmaeService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfrmaeService = /** @class */ (function () {
    function IfrmaeService(_router) {
        this._router = _router;
    }
    IfrmaeService.prototype.onSubmit = function () {
        console.log('Iframe service method on submit...');
        return this._router.navigate(['/session']);
    };
    IfrmaeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], IfrmaeService);
    return IfrmaeService;
}());



/***/ }),

/***/ "./src/app/live-session/live-session.component.css":
/*!*********************************************************!*\
  !*** ./src/app/live-session/live-session.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/live-session/live-session.component.html":
/*!**********************************************************!*\
  !*** ./src/app/live-session/live-session.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"demo-header mdl-layout__header \" style=\"background-color: #fff; color: black; z-index: 0 !important;\">\n        <div class=\"mdl-layout__header-row\">\n            <!--   <span class=\"mdl-layout-title\">Webinar Application</span>-->\n            <span class=\"mdl-layout-title page-name-title\">Maths Webinar</span>\n            <div class=\"mdl-layout-spacer\"></div>\n            <a class=\"\" href=\"join-webinar.html\">\n                <i class=\"material-icons\" style=\"margin-right: 295px;\" role=\"presentation\">share</i>\n            </a>\n        </div>\n    </header>\n    <div class=\"demo-drawer mdl-layout__drawer backround--color-white\" style=\"right: 0px;left: 1290px;\">\n        <nav class=\"demo-navigation mdl-navigation\">\n            <div style=\"display: flex; margin-top: -31px; margin-bottom: -23px;\">\n                <h3 style=\"padding-left: 12px;\">Attendees</h3>\n                <h6 style=\"padding-top: 10px; padding-left: 102px;\">18</h6>\n            </div>\n            <hr>\n            <a class=\"mdl-navigation__link\" href=\"\">Ahmed\n                <i style=\"padding-left: 180px;\" class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">person</i>\n            </a>\n            <a class=\"mdl-navigation__link\" href=\"\">Hassan\n                <i style=\"padding-left: 180px;\" class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">person</i>\n            </a>\n            <a class=\"mdl-navigation__link\" href=\"\">Salman\n                <i style=\"padding-left: 180px;\" class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">person</i>\n            </a>\n            <hr>\n            <div style=\"height: 425px;\">\n                <div style=\"float: right;\">\n                    <div class=\"rcorners-receive\" style=\"margin-right: 10px;\">\n                        <p style=\"text-align: center;\">Hi</p>\n                    </div>\n                </div>\n                <div style=\"padding-top: 96px;\">\n                    <p class=\"rcorners-sender\" style=\"text-align: center; margin-left: 10px;\">Hello</p>\n                </div>\n            </div>\n            <hr class=\"hr-margin\">\n            <form action=\"#\">\n                <div class=\"mdl-js-textfield\" style=\"background: #e7e7e7;\">\n                    <textarea style=\" background: #e7e7e7; width: 87%;\" class=\"mdl-textfield__input\" type=\"text\" rows=\"3\" id=\"sample5\" placeholder=\"  Enter Message\"></textarea>\n                    <div style=\"float: right;     margin-top: -43px;\n    margin-right: 9px;\">\n                        <a href=\"#\">\n                            <i class=\"material-icons\">\n                                send\n                            </i>\n                        </a>\n                    </div>\n                </div>\n            </form>\n        </nav>\n    </div>\n    <br>\n    <br>\n    <div style=\"text-align: center; margin-left: 402px;   width: 38% !important;\">\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/iNI8IkBAmgs\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n            allowfullscreen></iframe>\n        <br>\n        <br>\n        <h5>15:02:00</h5>\n        <!-- <button type=\"button\" class=\"mdl-button close\" id=\"closmodal\">Disagree</button> -->\n        <button id=\"button-endsession\" type=\"button\" routerLink='/dashboard' class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n            End Session\n        </button>\n        <!-- <button id=\"button-lock\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n            <i id=\"btn-icon\" class=\"material-icons\">lock</i>\n        </button> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/live-session/live-session.component.ts":
/*!********************************************************!*\
  !*** ./src/app/live-session/live-session.component.ts ***!
  \********************************************************/
/*! exports provided: LiveSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSessionComponent", function() { return LiveSessionComponent; });
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

var LiveSessionComponent = /** @class */ (function () {
    function LiveSessionComponent() {
    }
    LiveSessionComponent.prototype.ngOnInit = function () {
    };
    LiveSessionComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    LiveSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-session',
            template: __webpack_require__(/*! ./live-session.component.html */ "./src/app/live-session/live-session.component.html"),
            styles: [__webpack_require__(/*! ./live-session.component.css */ "./src/app/live-session/live-session.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveSessionComponent);
    return LiveSessionComponent;
}());



/***/ }),

/***/ "./src/app/live-session/live-session.service.ts":
/*!******************************************************!*\
  !*** ./src/app/live-session/live-session.service.ts ***!
  \******************************************************/
/*! exports provided: LiveSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveSessionService", function() { return LiveSessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveSessionService = /** @class */ (function () {
    function LiveSessionService(_router) {
        this._router = _router;
    }
    LiveSessionService.prototype.startLive = function () {
        return this._router.navigate(['/livesession']);
    };
    LiveSessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LiveSessionService);
    return LiveSessionService;
}());



/***/ }),

/***/ "./src/app/login-webinar/login-webinar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login-webinar/login-webinar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-webinar/login-webinar.component.html":
/*!************************************************************!*\
  !*** ./src/app/login-webinar/login-webinar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid background-container\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n      <h2 class=\"mdl-card__title-text\">Join Webinar</h2>\n      <div class=\"login-form-cs\">\n        <form [formGroup]=\"rForm\" class=\"login-action-cs\">\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input \n            class=\"mdl-textfield__input\" \n            formControlName=\"name\"\n            class=\"mdl-textfield__input\" \n            [(ngModel)]=\"name\" \n            id=\"name\">\n            <label class=\"mdl-textfield__label\" for=\"Name\">\n              <i class=\"font-loginfrom material-icons\">person</i>Name</label>\n          </div>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">{{ nameAlert }}</div>\n          \n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input \n            class=\"mdl-textfield__input\" \n            formControlName=\"email\"\n            [(ngModel)]=\"email\" \n            id=\"email\">\n            <label class=\"mdl-textfield__label\" for=\"email\"><i class=\"font-loginfrom material-icons\">email</i> Email</label>\n        </div>\n        <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">{{ emailAlert }}</div>\n      </form>\n        \n      </div>\n      <div (click)=\"loginUser()\" class=\"mdl-card__actions mdl-card--border\">\n        <a class=\"mdl-button login-action mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n          Join\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-webinar/login-webinar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login-webinar/login-webinar.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginWebinarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWebinarComponent", function() { return LoginWebinarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoginWebinarComponent = /** @class */ (function () {
    function LoginWebinarComponent(document, _auth, _router, fb) {
        this.document = document;
        this._auth = _auth;
        this._router = _router;
        this.fb = fb;
        this.emailAlert = 'Email is required';
        this.nameAlert = 'Name is required';
        this.rForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    LoginWebinarComponent.prototype.ngOnInit = function () {
    };
    LoginWebinarComponent.prototype.loginUser = function () {
        var _this = this;
        this.login = new _models_login__WEBPACK_IMPORTED_MODULE_3__["Login"]();
        this.login.email = this.email;
        this.login.name = this.name;
        console.log('Login object ', this.login);
        this._auth.loginViewer(this.login)
            .subscribe(function (res) {
            console.log('Response Data', res);
            if (res.status === 'success') {
                console.log('Status is true');
                var viewerID = res.object._id;
                var webinarID = localStorage.getItem('_id');
                console.log('ID IN VIEWER LOGIN', webinarID);
                _this.document.location.href =
                    'https://195.201.120.175:8443/?id=' + webinarID + '&vid=' + viewerID + '&v=10';
            }
        }, function (err) { return console.log(err); });
    };
    LoginWebinarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login-webinar',
            template: __webpack_require__(/*! ./login-webinar.component.html */ "./src/app/login-webinar/login-webinar.component.html"),
            styles: [__webpack_require__(/*! ./login-webinar.component.css */ "./src/app/login-webinar/login-webinar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginWebinarComponent);
    return LoginWebinarComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid background-container\">\n    <div class=\"mdl-cell mdl-cell--12-col\">\n        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n            <h2 class=\"mdl-card__title-text\">Welcome To webinar Application</h2>\n            <div class=\"login-form-cs\">\n                <form [formGroup]=\"rForm\" class=\"login-action-cs\" >\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input \n                        formControlName=\"email\"\n                        class=\"mdl-textfield__input\" \n                        id=\"email1\"\n                        [(ngModel)]=\"email\"\n                        >\n                        <label class=\"mdl-textfield__label\" for=\"email1\"><i class=\"font-loginfrom material-icons\">email</i> Email</label>\n                    </div>\n                    <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">{{ titleAlert }}</div>\n                    \n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input \n                        formControlName=\"password\" \n                        class=\"mdl-textfield__input\" \n                        type=\"password\" \n                        id=\"password1\"\n                        [(ngModel)]=\"password\"\n                        >\n                        <label class=\"mdl-textfield__label\" for=\"password\"><i class=\"font-loginfrom material-icons\">lock</i> Password</label>\n                    </div>\n                    <div class=\"alert\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">{{ passwordAlert }}</div>\n\n                    <div style=\"margin-top:-19px; top:-16px;\" class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <a href=\"#\" class=\"minior-links\">Forgot Password</a>\n                    </div>\n                    <div (click)=\"loginUser()\" (ngModelChange)=\"!rForm.valid\" type=\"button\"   class=\"mdl-card__actions mdl-card--border\">\n                        <a class=\"mdl-button login-action mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n                          Login\n                        </a>\n                    </div>\n                    \n                </form>\n            </div>\n\n            <!-- <div class=\"mdl-card__menu\">\n                <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n                    <i class=\"material-icons\">share</i>\n                </button>\n            </div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router, fb) {
        this._auth = _auth;
        this._router = _router;
        this.fb = fb;
        this._id = '';
        this.password = '';
        this.email = '';
        this.address = '';
        this.name = '';
        this.description = '';
        this.titleAlert = 'Email is required';
        this.passwordAlert = 'Password is required';
        this.rForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)])],
            'validate': ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]);
                _this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                _this.rForm.get('email').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            }
            _this.rForm.get('email').updateValueAndValidity();
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.login = new _models_login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
        this.login.email = this.email;
        this.login.password = this.password;
        this._auth.loginUser(this.login)
            .subscribe(function (res) {
            console.log('Response Data', res);
            if (res.status === 'success') {
                console.log('Status is true');
                localStorage.setItem('x-auth-token', res.object.token);
                sessionStorage.setItem('adminID', res.object._id);
                sessionStorage.setItem('email', res.object.email);
                sessionStorage.setItem('name', res.object.name);
                sessionStorage.setItem('f_name', res.object.f_name);
                sessionStorage.setItem('l_name', res.object.l_name);
                sessionStorage.setItem('country', res.object.country);
                console.log('After Login Token ', res.object.token);
                _this._router.navigate(['/dashboard']);
            }
        }, function (err) { return console.log(err); });
    };
    LoginComponent.prototype.userDetail = function () {
        console.log('ADMIN ID', this._id);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/models/profile.ts":
/*!***********************************!*\
  !*** ./src/app/models/profile.ts ***!
  \***********************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/models/settings.ts":
/*!************************************!*\
  !*** ./src/app/models/settings.ts ***!
  \************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/models/webinar.ts":
/*!***********************************!*\
  !*** ./src/app/models/webinar.ts ***!
  \***********************************/
/*! exports provided: Webinar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webinar", function() { return Webinar; });
var Webinar = /** @class */ (function () {
    function Webinar() {
    }
    return Webinar;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"demo-navigation mdl-navigation\">\n    <a class=\"mdl-navigation__link\" routerLink=\"/dashboard\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Home</a>\n    <a class=\"mdl-navigation__link\"  routerLink=\"/profile\" (click)=\"profilerefreshed();\" ><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">inbox</i>Profile</a>\n    <a class=\"mdl-navigation__link\"  routerLink=\"/settings\" (click)=\"settingsrefreshed();\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\" >delete</i>Settings</a>\n    <a (click)=\"logout()\" target=\"_blank\" class=\"logout-custom-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white\">Logout</a>\n </nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(_router, authservice, spinnerService) {
        this._router = _router;
        this.authservice = authservice;
        this.spinnerService = spinnerService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.profilerefreshed = function () {
        this.spinnerService.show();
        location.reload();
        this.spinnerService.hide();
    };
    NavComponent.prototype.settingsrefreshed = function () {
        this.spinnerService.show();
        location.reload();
        this.spinnerService.hide();
    };
    NavComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    // sessionStorage.setItem('adminID', res.object._id);
    // sessionStorage.setItem('email', res.object.email);
    // sessionStorage.setItem('name', res.object.name);
    NavComponent.prototype.logout = function () {
        console.log('Logout user called...!!!');
        this.authservice.logoutUser();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"demo-header mdl-layout__header mdl-color--magenta\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">Webinar Application</span>\n            <span class=\"mdl-layout-title page-name-title\">Dashboard</span>\n            <div class=\"mdl-layout-spacer\"></div>\n\n        </div>\n    </header>\n    <div class=\"demo-drawer mdl-layout__drawer backround--color-white\">\n        <app-profileview></app-profileview>\n        <hr>\n        <app-nav></app-nav>\n    </div>\n    <main style=\"height: -webkit-fill-available;\" class=\"mdl-layout__content mdl-color--grey-100\">\n        <div class=\"mdl-grid form-width-settings\">\n            <form [formGroup]=\"rForm\">\n                <div class=\"\" style=\"text-align: center !important;\">\n                    \n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input \n                        formControlName=\"f_name\"\n                        class=\"mdl-textfield__input\" \n                        [(ngModel)]=\"f_name\" \n                        id=\"f_name1\" \n                        >\n                        <label class=\"mdl-textfield__label\" for=\"name-orignal\">First Name</label>\n                    </div>\n                    <div class=\"alert\" *ngIf=\"!rForm.controls['f_name'].valid && rForm.controls['f_name'].touched\" style=\"color:red; text-align: center !important;\">{{ fnameAlert }}</div>\n                     <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input \n                        class=\"mdl-textfield__input\" \n                        [(ngModel)]=\"l_name\"\n                        formControlName=\"l_name\"\n                        id=\"l_name\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-topic\">Last Name</label>\n                    </div>\n                   \n                    <div class=\"alert\" *ngIf=\"!rForm.controls['country'].valid && rForm.controls['country'].touched\" style=\"color:red; text-align: center !important;\">{{ countryAlert }}</div>\n                </div>\n\n                <div class=\"\" style=\"text-align: center !important;\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\" >\n                        <input \n                        class=\"mdl-textfield__input\" \n                        [(ngModel)]=\"country\"\n                        formControlName=\"country\"\n                        id=\"country\"\n                        >\n                        <label class=\"mdl-textfield__label\" for=\"webinar-decription\">Country</label>\n                    </div>\n                    <div class=\"alert\" *ngIf=\"!rForm.controls['l_name'].valid && rForm.controls['l_name'].touched\" style=\"color:red; text-align: center !important;\">{{ lnameAlert }}</div>\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input \n                        class=\"mdl-textfield__input\" \n                        [(ngModel)]=\"timezone\"\n                        formControlName=\"timezone\"\n                        id=\"timezone\"\n                        type=\"text\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-day\">Time Zone</label>\n                    </div>\n                    <div class=\"alert\" *ngIf=\"!rForm.controls['timezone'].valid && rForm.controls['timezone'].touched\" style=\"color:red; text-align: center !important;\">{{ timezoneAlert }}</div>\n                    \n                    \n                </div>\n\n                <!-- <div class=\"mdl-textfield mdl-js-textfield getmdl-select\">\n                    <input class=\"mdl-textfield__input\" value=\"\" id=\"country\" readonly/>\n                    <input value=\"\" type=\"hidden\" name=\"country\"/>\n                    <label class=\"mdl-textfield__label\" for=\"country\">Country</label>\n                    <ul class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu\" for=\"country\">\n                      <li class=\"mdl-menu__item\" data-val=\"BLR\">Belarus</li>\n                      <li class=\"mdl-menu__item\" data-val=\"BRA\">Brazil</li>\n                      <li class=\"mdl-menu__item\" data-val=\"FRA\">France</li>\n                      <li class=\"mdl-menu__item\" data-val=\"DEU\">Germany</li>\n                      <li class=\"mdl-menu__item\" data-val=\"RUS\">Russia</li>\n                    </ul>\n                 </div> -->\n\n                <div (click)=\"changeProfile()\" style=\"text-align: center !important;\">\n                    <a target=\"_blank\" class=\"logout-custom-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white\"\n                        type=\"submit\">Change Profile</a>\n                </div>\n            </form>\n   <!--          <form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form> -->\n        </div>\n    </main>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/profile */ "./src/app/models/profile.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, _router, fb, spinnerService) {
        this.profileService = profileService;
        this._router = _router;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.f_name = '';
        this.l_name = '';
        this.country = '';
        this.timezone = '';
        this.fnameAlert = 'First Name is required';
        this.lnameAlert = 'Last Name is required';
        this.countryAlert = 'Country is required';
        this.timezoneAlert = 'Timezone is required';
        this.profile = new _models_profile__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
        this.profile._id = sessionStorage.getItem('adminID');
        console.log('adminID in profile', this.profile._id);
        this.rForm = fb.group({
            'f_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)])],
            'country': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)])],
            'l_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)])],
            'timezone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)])],
            'validate': ''
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // console.log('Before reloadning');
        // window.location.reload();
        // console.log('After reloadning');
        // this.rForm.get('validate').valueChanges.subscribe(
        //   (validate) => {
        //     if (validate == '1') {
        //       this.rForm.get('email').setValidators([Validators.required, Validators.minLength(3)]);
        //       this.titleAlert = "You need to specify at least 3 characters";
        //     } else {
        //       this.rForm.get('email').setValidators(Validators.required);
        //     }
        //     this.rForm.get('email').updateValueAndValidity();
        //   }
        // )
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js', function () {
            console.log('ngAfterViewInit assets/js/custom.js File is loaded', $);
        });
    };
    ProfileComponent.prototype.changeProfile = function (user) {
        var _this = this;
        this.profile.f_name = this.f_name;
        this.profile.l_name = this.l_name;
        this.profile.country = this.country;
        this.profile.timezone = this.timezone;
        console.log('this.profile ', this.profile);
        this.profileService.changeProfile(this.profile).subscribe(function (res) {
            console.log('Response from api', res);
            _this._router.navigate(['/dashboard']);
        }, function (err) { return console.log(err); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
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



var ProfileService = /** @class */ (function () {
    function ProfileService(http, _router) {
        this.http = http;
        this._router = _router;
        this.changeProfileURL = "http://195.201.120.175:3000/api/users/profile";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        // this.options = new RequestOptions({ headers: this.headers });
    }
    ProfileService.prototype.changeProfile = function (user) {
        return this.http.post(this.changeProfileURL, user);
    };
    ProfileService.prototype.settings = function () {
        return this._router.navigate(['/settings']);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profileview/profileview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profileview/profileview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profileview/profileview.component.html":
/*!********************************************************!*\
  !*** ./src/app/profileview/profileview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"demo-drawer-header\">\n    <img src=\"assets/img/user.jpg\" class=\"demo-avatar\">\n    <div class=\"demo-avatar-dropdown inline-text-cs\">\n        <!-- <p>{{f_name}} {{l_name}}</p> -->\n        <p>{{name}}</p>\n        <p>{{email}}</p>\n        <div class=\"mdl-layout-spacer\"></div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/profileview/profileview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profileview/profileview.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewComponent", function() { return ProfileviewComponent; });
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

var ProfileviewComponent = /** @class */ (function () {
    function ProfileviewComponent() {
    }
    ProfileviewComponent.prototype.ngOnInit = function () {
        this.profileView();
    };
    ProfileviewComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    ProfileviewComponent.prototype.profileView = function () {
        this.email = sessionStorage.getItem('email');
        this.name = sessionStorage.getItem('name');
        this.address = sessionStorage.getItem('address');
        this.f_name = sessionStorage.getItem('f_name');
        this.l_name = sessionStorage.getItem('l_name');
    };
    ProfileviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profileview',
            template: __webpack_require__(/*! ./profileview.component.html */ "./src/app/profileview/profileview.component.html"),
            styles: [__webpack_require__(/*! ./profileview.component.css */ "./src/app/profileview/profileview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileviewComponent);
    return ProfileviewComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"demo-header mdl-layout__header mdl-color--magenta\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">Webinar Application</span>\n            <span class=\"mdl-layout-title page-name-title\">Dashboard</span>\n            <div class=\"mdl-layout-spacer\"></div>\n\n        </div>\n    </header>\n    <div class=\"demo-drawer mdl-layout__drawer backround--color-white\">\n        <app-profileview></app-profileview>\n        <hr>\n        <app-nav></app-nav>\n    </div>\n    <main style=\"height: -webkit-fill-available;\" class=\"mdl-layout__content mdl-color--grey-100\">\n        <div class=\"mdl-grid demo-content\">\n            <form [formGroup]=\"rForm\">\n                <div class=\"\" style=\"text-align: center;\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input \n                        type=\"password\"\n                        formControlName=\"oldPassword\"\n                        class=\"mdl-textfield__input\"  \n                        [(ngModel)]=\"oldPassword\" \n                        >\n                        <label class=\"mdl-textfield__label\" for=\"name-orignal\">Old Password</label>\n                        <div class=\"alert\" *ngIf=\"!rForm.controls['oldPassword'].valid && rForm.controls['oldPassword'].touched\" style=\"text-align: center; color:red;\">{{ oldPasswordAlert }}</div>\n                    </div>\n                    \n                    \n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input \n                        type=\"password\"\n                        formControlName=\"oldPassword\"\n                        class=\"mdl-textfield__input\" \n                        [(ngModel)]=\"newPassword\" \n                        >\n                        <label class=\"mdl-textfield__label\" for=\"webinar-decription\">New Password</label>\n                        <div class=\"alert\" *ngIf=\"!rForm.controls['newPassword'].valid && rForm.controls['newPassword'].touched\" style=\"color:red;\">{{ newPasswordAlert }}</div>\n                    </div>\n                    \n                    \n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input \n                        type=\"password\"\n                        formControlName=\"newPassword1\"\n                        class=\"mdl-textfield__input\"\n                        [(ngModel)]=\"newPassword1\" \n                        >\n                        <label class=\"mdl-textfield__label\" for=\"webinar-decription\">Repeat Password</label>\n                        <div class=\"alert\" *ngIf=\"!rForm.controls['newPassword1'].valid && rForm.controls['newPassword1'].touched\" style=\"color:red;\">{{ newPasswordAlert1 }}</div>\n                    </div>\n                    \n\n                </div>\n                <div>{{passwordStatus}}</div>\n                <div (click)=\"changeSettings()\" style=\"text-align: center;\">\n                    <a  target=\"_blank\" class=\"logout-custom-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white\"\n                        type=\"submit\">Chnage Password</a>\n                </div>\n                \n            </form>\n        </div>\n\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/settings */ "./src/app/models/settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService, _router, fb) {
        this.settingsService = settingsService;
        this._router = _router;
        this.fb = fb;
        this.settingsData = {};
        this.oldPassword = '';
        this.newPassword = '';
        this.newPassword1 = '';
        this.passwordStatus = '';
        this.oldPasswordAlert = 'Password is required';
        this.newPasswordAlert = 'Password is required';
        this.newPasswordAlert1 = 'Password is required';
        this.settings = new _models_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]();
        this.settings._id = sessionStorage.getItem('adminID');
        console.log('adminID in Settings', this.settings._id);
        this.rForm = fb.group({
            'oldPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'newPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'newPassword1': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'validate': ''
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    SettingsComponent.prototype.changeSettings = function () {
        var _this = this;
        this.settings.oldPassword = this.oldPassword;
        this.settings.newPassword = this.newPassword;
        this.settings.newPassword1 = this.newPassword1;
        if (this.newPassword === this.newPassword1) {
            this.settingsService.changeSettings(this.settings)
                .subscribe(function (res) {
                console.log('Response By Settings api', res.status);
                _this.passwordStatus = res.status;
                // location.reload();
                // this._router.navigate(['/settings']);
            }, function (err) {
                console.log('Error in changeSettings method ', err);
            });
        }
        else {
            console.log('Passwords donot match');
        }
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_0__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
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



var SettingsService = /** @class */ (function () {
    function SettingsService(http, _router) {
        this.http = http;
        this._router = _router;
        this.changeSettingUrl = "http://195.201.120.175:3000/api/users/settings";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        // this.options = new RequestOptions({ headers: this.headers });
    }
    SettingsService.prototype.changeSettings = function (user) {
        return this.http.post(this.changeSettingUrl, user);
    };
    SettingsService.prototype.settings = function () {
        return this._router.navigate(['/settings']);
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/webinar.service.ts":
/*!************************************!*\
  !*** ./src/app/webinar.service.ts ***!
  \************************************/
/*! exports provided: WebinarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarService", function() { return WebinarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebinarService = /** @class */ (function () {
    function WebinarService(http, _router) {
        this.http = http;
        this._router = _router;
        this.getWebinarUrl = "http://195.201.120.175:3000/api/webinar/listOfWebinar";
        this.getWebinarByID = 'http://195.201.120.175:3000/api/webinar/getById/';
        this.deleteWebUrl = 'http://195.201.120.175:3000/api/webinar/getById/';
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'x-auth-token'
            })
        };
        httpOptions.headers = httpOptions.headers.set('Authorization', 'x-auth-token');
        httpOptions.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        console.log('x-auth-token : ', localStorage.getItem('x-auth-token'));
    }
    WebinarService.prototype.getWebinar = function () {
        return this.http.get(this.getWebinarUrl);
    };
    WebinarService.prototype.getWebinarById = function (id) {
        return this.http.get(this.getWebinarByID + id);
    };
    WebinarService.prototype.deleteWebinarById = function (id) {
        return this.http.delete(this.deleteWebUrl + id);
    };
    WebinarService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    WebinarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebinarService);
    return WebinarService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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

module.exports = __webpack_require__(/*! E:\webinarFE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map