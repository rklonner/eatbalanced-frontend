webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"\">EatBalanced</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"!isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n\t    <!-- angular: use combination of routerLink=\"/recipes\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" so that\n\t\t     navbar will collapse after click on link-->\n        <li class=\"nav-item active\"><a id=\"mainRecipes\" class=\"nav-link\" \n\t\t  routerLink=\"/recipes\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" href=#>Rezepte\n\t\t  <span class=\"sr-only\">(current)</span></a></li>\n        <li class=\"nav-item\"><a id=\"mainMenu\" class=\"nav-link\"\n\t\t  routerLink=\"/menuplan\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" href=#>Menüplan\n\t\t  </a></li>\n\t\t<li class=\"nav-item\"><a id=\"mainShoppingList\" class=\"nav-link\"\n\t\t  routerLink=\"/shoppinglist\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" href=#>Einkaufsliste\n\t\t</a></li>\n\t\t\n\t\t<!-- only if user is loggend in -->\n\t\t<ng-container *ngIf=\"authService.getUser()\">\n\t\t<div class=\"dropdown-divider\" style=\"border-color:grey;\"></div>\n\t\t<li class=\"nav-item\" *ngIf=\"authService.getUser()\">\n          <a class=\"nav-link\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" routerLink=\"/user-profile\" href=#>\n\t\t  User: <b>{{ authService.getUser() }}</b></a>\n\t\t</li>\n\t\t<li class=\"nav-item\" *ngIf=\"authService.getUser()\">\n          <a href class=\"nav-link\" routerLink=\"/login\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\n\t\t  (click)=\"authService.logout()\" href=#>Logout</a>\n\t\t</li>\n\t\t</ng-container>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(authService) {
        this.authService = authService;
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["b" /* AuthService */]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuplan_menuplan_component__ = __webpack_require__("../../../../../src/app/menuplan/menuplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menuplan_detail_menuplan_detail_component__ = __webpack_require__("../../../../../src/app/menuplan-detail/menuplan-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logged_in_guard__ = __webpack_require__("../../../../../src/app/logged-in.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    // routes are protected by LoggedInGuard
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_2__recipes_recipes_component__["a" /* RecipesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'menuplan', component: __WEBPACK_IMPORTED_MODULE_4__menuplan_menuplan_component__["a" /* MenuplanComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'menuplan-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__menuplan_detail_menuplan_detail_component__["a" /* MenuplanDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'shoppinglist', component: __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__["a" /* UserProfileComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--bootstrap navbar-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n\t<!--<app-messages></app-messages>-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_navbar_app_navbar_component__ = __webpack_require__("../../../../../src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menuplan_menuplan_component__ = __webpack_require__("../../../../../src/app/menuplan/menuplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menuplan_service__ = __webpack_require__("../../../../../src/app/menuplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__menuplan_detail_menuplan_detail_component__ = __webpack_require__("../../../../../src/app/menuplan-detail/menuplan-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menuplan_users_select_menuplan_users_select_component__ = __webpack_require__("../../../../../src/app/menuplan-users-select/menuplan-users-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__logged_in_guard__ = __webpack_require__("../../../../../src/app/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_round_pipe__ = __webpack_require__("../../../../../src/app/pipes/round.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_multiply_pipe__ = __webpack_require__("../../../../../src/app/pipes/multiply.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- NgModel lives here

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__recipes_recipes_component__["a" /* RecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__menuplan_menuplan_component__["a" /* MenuplanComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__menuplan_detail_menuplan_detail_component__["a" /* MenuplanDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_round_pipe__["a" /* RoundPipe */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_multiply_pipe__["a" /* MultiplyPipe */],
                __WEBPACK_IMPORTED_MODULE_21__menuplan_users_select_menuplan_users_select_component__["a" /* MenuplanUsersSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__user_profile_user_profile_component__["a" /* UserProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_14__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_17__menuplan_service__["a" /* MenuplanService */], __WEBPACK_IMPORTED_MODULE_18__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__auth_service__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_24__auth_service__["a" /* AUTH_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_25__logged_in_guard__["a" /* LoggedInGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (user, password) {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

var AUTH_PROVIDERS = [
    { provide: AuthService, useClass: AuthService }
];


/***/ }),

/***/ "../../../../../src/app/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disble max-line-length */



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        if (isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Login</h3>\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n  {{ message }}\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-4 col-12\">\n<form *ngIf=\"!authService.getUser()\">\n  <div class=\"form-group input-group\">\n    <label for=\"username\"></label>\n    <input class=\"form-control\" name=\"username\" placeholder=\"User\" #username>\n  </div>\n  <div class=\"form-group input-group\">\n    <label for=\"password\"></label>\n    <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Passwort\" #password>\n  </div>\n  <button class=\"btn btn-primary\" (click)=\"login(username.value, password.value)\">Submit</button>\n</form>\n</div>\n</div>\n\n<div class=\"well\" *ngIf=\"authService.getUser()\">\n  Logged in as <b>{{ authService.getUser() }}</b>\n  <a href (click)=\"logout()\">Log out</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.return = '';
        this.message = '';
    }
    LoginComponent.prototype.login = function (username, password) {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Benutzername oder Passwort inkorrect.';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        else {
            this.router.navigateByUrl(this.return);
        }
        //return false;
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the query params
        this.route.queryParams
            .subscribe(function (params) { return _this.return = params['return'] || '/recipes'; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menuplan-detail/menuplan-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recipeListImageContainer {\r\n\twidth:  260px;\r\n\theight: 174px;\r\n\t\r\n\t/*background-image is set by recipesComponent */\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n}\r\n\r\n/* otherwise anchor is valid on full width an not only the image */\r\n\r\na{\r\n    display:inline-block;\r\n\tvertical-align:middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menuplan-detail/menuplan-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n<div \n  class=\"col-lg-6 col-12\"\n  *ngIf=\"recipeMenuplan\">\n  <h4>{{ recipeMenuplan.name }}</h4>\n  <div class=\"recipeListImageContainer\" [style]=\"getBackgroundImage(recipeMenuplan)\"></div>\n  \n  <br>\n  <u>Übersicht:</u>\n  <div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n\t  <tr>\n\t    <th></th>\n\t    <th>Gesamt</th>\n\t    <ng-container *ngFor=\"let userMenuplan of recipeMenuplan.userMenuplan\">\n\t      <th>{{ userMenuplan.name }}</th>\n\t    </ng-container>\n      </tr>\n    </thead>\n    <tbody>\n\t  <tr>\n\t    <td>Kalorien</td>\n\t    <td>{{ recipeMenuplan.calories | multiply:recipeMenuplan.householdIngredientFactor | round }} kcal</td>\n\t    <ng-container *ngFor=\"let userMenuplan of recipeMenuplan.userMenuplan\">\n\t      <td>{{ recipeMenuplan.calories | multiply:userMenuplan.ingredientFactor | round }} kcal</td>\n\t    </ng-container>\n\t  </tr>\n\t  <tr>\n\t    <td>Anteil</td>\n\t    <td>100 %</td>\n\t    <ng-container *ngFor=\"let userMenuplan of recipeMenuplan.userMenuplan\">\n\t      <td>{{ userMenuplan.householdPercentage | round }} %</td>\n\t    </ng-container>\n\t  </tr>\n    </tbody>\t\n  </table>\n  </div>\n  <br>\n  \n  <u>Zutaten:</u>\n  <div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n\t  <tr>\n\t    <th>Zutaten</th>\n\t    <th>Gesamt</th>\n\t\t<!-- ng-container: In the DOM, its content is rendered as usual, but the tag itself is rendered as an HTML comment-->\n\t    <ng-container *ngFor=\"let userMenuplan of recipeMenuplan.userMenuplan\">\n\t      <th>{{ userMenuplan.name }}</th>\n\t    </ng-container>\n\t  </tr>\n\t</thead>\n    <tbody>\n\t  <tr *ngFor=\"let ingredient of recipeMenuplan['ingredients']\">\n\t    <td>{{ ingredient.name }}</td>\n\t    <td>{{ ingredient.quantity | multiply:recipeMenuplan.householdIngredientFactor | round }} {{ ingredient.unit }}</td>\n\t    <ng-container *ngFor=\"let userMenuplan of recipeMenuplan.userMenuplan\">\n\t      <td>{{ ingredient.quantity | multiply:userMenuplan.ingredientFactor | round }} {{ ingredient.unit }}</td>\n\t    </ng-container>\n\t  </tr>\n\t</tbody>\n  </table>\n  </div>\n  <br>\n  <div>\n\t<u>Zubereitung:</u>\n\t<ol>\n      <li *ngFor=\"let step of recipeMenuplan['preparation']\">\n        <span>{{ step }}</span> \n      </li>\n    </ol>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">Zurück</button>\n</div>\n\n</div> <!-- class row-->"

/***/ }),

/***/ "../../../../../src/app/menuplan-detail/menuplan-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuplanDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuplan_service__ = __webpack_require__("../../../../../src/app/menuplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuplanDetailComponent = /** @class */ (function () {
    function MenuplanDetailComponent(menuplanService, route, location, sanitizer) {
        this.menuplanService = menuplanService;
        this.route = route;
        this.location = location;
        this.sanitizer = sanitizer;
    }
    MenuplanDetailComponent.prototype.ngOnInit = function () {
        this.getRecipeMenuplan();
    };
    MenuplanDetailComponent.prototype.getRecipeMenuplan = function () {
        //+ converts string to number
        // use - 1 because we add + 1 in template to have nice
        // urls where first id points to 1 not zero
        var id = +this.route.snapshot.paramMap.get('id') - 1;
        this.recipeMenuplan = this.menuplanService.getRecipeMenuplan(id);
        console.log("Get recipe '" + id + " from current menuplan");
    };
    MenuplanDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // use DomSanitizer to secure background-image url
    MenuplanDetailComponent.prototype.getBackgroundImage = function (recipe) {
        //TODO: get baseurl from somewhere else
        var recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
        var style = "background-image: url(" + recipeImageUrl + ")";
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    MenuplanDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menuplan-detail',
            template: __webpack_require__("../../../../../src/app/menuplan-detail/menuplan-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menuplan-detail/menuplan-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__menuplan_service__["a" /* MenuplanService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]])
    ], MenuplanDetailComponent);
    return MenuplanDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menuplan-users-select/menuplan-users-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menuplan-users-select/menuplan-users-select.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor='let user of userMenuplan'>\n  <button\n    type=\"button\"\n    [ngClass]=\"user.isEatingMeal ? 'btn btn-success' : 'btn btn-secondary'\"\n    (click)=\"user.switchEatMeal()\">{{ user.name }}\n  </button>\n  <br>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/menuplan-users-select/menuplan-users-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuplanUsersSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuplanUsersSelectComponent = /** @class */ (function () {
    function MenuplanUsersSelectComponent() {
    }
    MenuplanUsersSelectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__user__["a" /* UserMenuplan */])
    ], MenuplanUsersSelectComponent.prototype, "userMenuplan", void 0);
    MenuplanUsersSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menuplan-users-select',
            template: __webpack_require__("../../../../../src/app/menuplan-users-select/menuplan-users-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menuplan-users-select/menuplan-users-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuplanUsersSelectComponent);
    return MenuplanUsersSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menuplan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuplanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe__ = __webpack_require__("../../../../../src/app/recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_user__ = __webpack_require__("../../../../../src/app/mock-user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuplanService = /** @class */ (function () {
    function MenuplanService() {
        this.currentUser = __WEBPACK_IMPORTED_MODULE_2__mock_user__["b" /* USER */];
        this.currentHousehold = __WEBPACK_IMPORTED_MODULE_2__mock_user__["a" /* HOUSEHOLD */];
        this.selectedRecipes = [];
    }
    MenuplanService.prototype.add = function (recipe) {
        var recipeMenuplan = new __WEBPACK_IMPORTED_MODULE_1__recipe__["b" /* RecipeMenuplan */](recipe, this.currentHousehold);
        this.selectedRecipes.push(recipeMenuplan);
        console.log("added new recipe to menuplan: #", this.selectedRecipes.length);
        //let recipeMenuplan = new RecipeMenuplan(recipe, this.currentHousehold);
        //console.log(recipeMenuplan);
    };
    MenuplanService.prototype.getRecipeMenuplan = function (index) {
        return this.selectedRecipes[index];
    };
    MenuplanService.prototype.moveRecipeUp = function (index) {
        // only move recipe if there are at least 2 entries
        if (this.selectedRecipes.length > 1) {
            var tmp = this.selectedRecipes.splice(index, 1)[0];
            if (index - 1 == -1) {
                // splice(-1, 0, tmp) does not work, puts it on vorletzte stelle, not last
                this.selectedRecipes.push(tmp);
            }
            else {
                this.selectedRecipes.splice(index - 1, 0, tmp);
            }
        }
    };
    MenuplanService.prototype.moveDown = function (index) {
        // only move recipe if there are at least 2 entries
        if (this.selectedRecipes.length > 1) {
            var tmp = this.selectedRecipes.splice(index, 1)[0];
            if (index + 1 == this.selectedRecipes.length + 1) {
                // splice(index+1, 0, tmp) does not work at end beacuse array is not
                // this length any more because of previous splice,
                // use unshift to place it at beginning in this case
                this.selectedRecipes.unshift(tmp);
            }
            else {
                this.selectedRecipes.splice(index + 1, 0, tmp);
            }
        }
    };
    MenuplanService.prototype.delete = function (index) {
        this.selectedRecipes.splice(index, 1);
    };
    MenuplanService.prototype.clear = function () {
        this.selectedRecipes = [];
    };
    MenuplanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuplanService);
    return MenuplanService;
}());



/***/ }),

/***/ "../../../../../src/app/menuplan/menuplan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recipeListImageContainer {\r\n\twidth:  260px;\r\n\theight: 174px;\r\n\t\r\n\t/*background-image is set by recipesComponent */\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n}\r\n\r\n/* otherwise anchor is valid on full width an not only the image */\r\n\r\na{\r\n    display:inline-block;\r\n\tvertical-align:middle;\r\n}\r\n\r\n/* overwrite imported css */\r\n\r\n.recipeListImageContainer {\r\n\twidth:  113px;\r\n\theight: 75px;\r\n}\r\n\r\n.buttonWidth {\r\n    width: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menuplan/menuplan.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Menüplan</h3>\n\n<div *ngIf=\"!menuplanService.selectedRecipes.length\">\nDein Menüplan ist derzeit noch leer.\n<br>\n<a routerLink=\"/recipes\"><button type=\"button\" class=\"btn btn-primary\">Rezepte hinzufügen</button></a>\n</div>\n\n<div *ngIf=\"menuplanService.selectedRecipes.length\">\n  <div>\n    \n    <div *ngFor='let recipe of menuplanService.selectedRecipes; let i = index'>\n\t  <h6><b>{{recipe.name}}</b></h6>\n\t  <!-- use + 1 to have nice id urls, gets substracted in .ts method -->\n\t  <a routerLink=\"/menuplan-detail/{{i + 1}}\">\n\t    <div class=\"recipeListImageContainer\" [style]=\"getBackgroundImage(recipe)\"></div>\n\t  </a><!---->\n\t  <!--<fa *ngFor='let user of recipe.userMenuplan'\n\t    name=\"user-circle\" size=\"3x\"\n\t\t[ngStyle]=\"{'color': user.isEatingMeal ? 'blue' : 'grey'}\"\n\t\t(click)=\"user.switchEatMeal()\"></fa>\n\t  <fa name=\"trash-o\" size=\"3x\" style=\"color: black\" (click)=\"menuplanService.delete(i)\"></fa>-->\n\t  <div style=\"display: inline-block;\">\n\t  <span><button type=\"button\" class=\"btn btn-basic buttonWidth\" syle=\"width: 100px\" (click)=\"recipe.toggleViewUserSelect()\"><fa name=\"users\"></fa></button></span>\n\t  <span><button type=\"button\" class=\"btn btn-basic buttonWidth\" (click)=\"menuplanService.moveRecipeUp(i)\"><fa name=\"angle-up\"></fa></button></span>\n\t  <span><button type=\"button\" class=\"btn btn-basic buttonWidth\" (click)=\"menuplanService.moveDown(i)\"><fa name=\"angle-down\"></fa></button></span>\n\t  <span><button type=\"button\" class=\"btn btn-danger buttonWidth\" (click)=\"menuplanService.delete(i)\"><fa name=\"minus\" style=\"color: white\"></fa></button></span>\n\t  </div>\n\n\t  <br>\n\t  <div *ngIf=\"recipe.viewUserSelect\">\n\t    <app-menuplan-users-select [userMenuplan]=\"recipe.userMenuplan\"></app-menuplan-users-select>\n\t  </div>\n\n\t  <br>\n\t  <br>\n\t  </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-danger btn-md\" (click)=\"menuplanService.clear()\">Menüplan löschen</button>\n  <button type=\"button\" class=\"btn btn-basic btn-md\" (click)=\"toogleViewUserSelectAll()\">Alle Personen bearbeiten</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/menuplan/menuplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuplan_service__ = __webpack_require__("../../../../../src/app/menuplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuplanComponent = /** @class */ (function () {
    function MenuplanComponent(menuplanService, sanitizer) {
        this.menuplanService = menuplanService;
        this.sanitizer = sanitizer;
        this.toogleViewUserStatus = false;
    }
    MenuplanComponent.prototype.ngOnInit = function () {
    };
    MenuplanComponent.prototype.toogleViewUserSelectAll = function () {
        this.toogleViewUserStatus = !this.toogleViewUserStatus;
        for (var _i = 0, _a = this.menuplanService.selectedRecipes; _i < _a.length; _i++) {
            var recipe = _a[_i];
            recipe.viewUserSelect = this.toogleViewUserStatus;
        }
    };
    // use DomSanitizer to secure background-image url
    MenuplanComponent.prototype.getBackgroundImage = function (recipe) {
        //TODO: get baseurl from somewhere else
        var recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
        var style = "background-image: url(" + recipeImageUrl + ")";
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    MenuplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menuplan',
            template: __webpack_require__("../../../../../src/app/menuplan/menuplan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menuplan/menuplan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__menuplan_service__["a" /* MenuplanService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], MenuplanComponent);
    return MenuplanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOUSEHOLD; });
var USER = {
    "id": 1,
    "name": "Robert",
    "username": "r.klonner@gmx.at",
    "password": "123",
    "calorie_requirement_diet": 2100,
    "household_user_ids": [1, 2]
};
var HOUSEHOLD = [
    {
        "id": 1,
        "name": "Robert",
        "username": "r.klonner@gmx.at",
        "password": "123",
        "calorie_requirement_diet": 2100,
        "household_user_ids": [1, 2]
    },
    {
        "id": 2,
        "name": "Sandra",
        "username": "s.bachhofner@gmx.at",
        "password": "123",
        "calorie_requirement_diet": 1400,
        "household_user_ids": [1, 2]
    }
];


/***/ }),

/***/ "../../../../../src/app/pipes/multiply.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultiplyPipe = /** @class */ (function () {
    function MultiplyPipe() {
    }
    // example: {{ val | multiply:2 }}
    MultiplyPipe.prototype.transform = function (value, args) {
        return value * args;
    };
    MultiplyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'multiply' })
    ], MultiplyPipe);
    return MultiplyPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * integrated from http://blog.bastien-donjon.fr/round-number-angular-2-pipe/
 */
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     *
     * @param value
     * @returns {number}
     */
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'round' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "../../../../../src/app/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recipeListImageContainer {\r\n\twidth:  260px;\r\n\theight: 174px;\r\n\t\r\n\t/*background-image is set by recipesComponent */\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n}\r\n\r\n/* otherwise anchor is valid on full width an not only the image */\r\n\r\na{\r\n    display:inline-block;\r\n\tvertical-align:middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recipe\">\n  <h4>{{ recipe.name }}</h4>\n  <div class=\"recipeListImageContainer\" [style]=\"getBackgroundImage(recipe)\"></div>\n  <div>\n    <u>Zutaten:</u>\n    <ul class=\"recipes\">\n      <li *ngFor=\"let ingredient of recipe['ingredients']\">\n        <span class=\"badge\">{{ ingredient.quantity }} {{ ingredient.unit }} {{ ingredient.name }}</span> \n      </li>\n    </ul>\n\t<u>Zubereitung:</u>\n\t<ol class=\"recipes\">\n      <li *ngFor=\"let step of recipe['preparation']\">\n        <span class=\"badge\">{{ step }}</span> \n      </li>\n    </ol>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickAddToMenuplan(recipe)\">+Menüplan</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">Zurück</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe__ = __webpack_require__("../../../../../src/app/recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menuplan_service__ = __webpack_require__("../../../../../src/app/menuplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 // for toast msg



var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route, recipeService, menuplanService, location, sanitizer, toastr, vcr // for toast msg
    ) {
        this.route = route;
        this.recipeService = recipeService;
        this.menuplanService = menuplanService;
        this.location = location;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr); // for toast msg
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.getRecipe();
    };
    RecipeDetailComponent.prototype.getRecipe = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id'); //+ converts string to number
        this.recipeService.getRecipe(id)
            .subscribe(function (recipe) { return _this.recipe = recipe; });
    };
    RecipeDetailComponent.prototype.onClickAddToMenuplan = function (recipe) {
        this.menuplanService.add(recipe);
        var msg = 'Rezept wurde hinzugefügt';
        this.showInfo(msg);
    };
    RecipeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // use DomSanitizer to secure background-image url
    RecipeDetailComponent.prototype.getBackgroundImage = function (recipe) {
        //TODO: get baseurl from somewhere else
        var recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
        var style = "background-image: url(" + recipeImageUrl + ")";
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    // define toast messages
    RecipeDetailComponent.prototype.showInfo = function (msg) {
        var _this = this;
        //this.toastr.info(msg);
        this.toastr.info(msg, '', { dismiss: 'controlled' })
            .then(function (toast) {
            setTimeout(function () {
                _this.toastr.dismissToast(toast);
            }, 1500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__recipe__["a" /* Recipe */])
    ], RecipeDetailComponent.prototype, "recipe", void 0);
    RecipeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_7__menuplan_service__["a" /* MenuplanService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] // for toast msg
        ])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeService = /** @class */ (function () {
    function RecipeService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.recipesUrl = 'http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com' + '/api/recipes'; // URL to web api
        this.recipesSearchUrl = 'http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com' + '/api/recipesSearch';
    }
    /*  getRecipes(): Observable<Recipe[]> {
        // Todo: send the message _after_ fetching the recipes
        //this.messageService.add('RecipeService: fetched recipes');
        //return of(RECIPES);
        //console.log(this.http.get(this.recipesUrl))
        return this.http.get<Recipe[]>(this.recipesUrl)
      }
    */
    /*
      getRecipe(id: number): Observable<Recipe> {
        // Todo: send the message _after_ fetching the hero
        this.messageService.add(`RecipeService: fetched recipe id=${id}`);
        return of(RECIPES.find(recipe => recipe.id === id));
      }*/
    RecipeService.prototype.getRecipes = function () {
        var _this = this;
        return this.http.get(this.recipesUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (recipes) { return _this.log("fetched recipes"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getRecipes', [])));
    };
    /** GET recipe by id. Will 404 if id not found */
    RecipeService.prototype.getRecipe = function (id) {
        var _this = this;
        var url = this.recipesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched recipe id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getRecipe id=" + id)));
    };
    /* GET recipes whose name contains search term */
    RecipeService.prototype.searchRecipes = function (term) {
        var _this = this;
        var url = this.recipesSearchUrl + "/" + term;
        //console.log("call search url", url);
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("found recipes matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchRecipes', [])));
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    RecipeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    RecipeService.prototype.log = function (message) {
        this.messageService.add('RecipeService: ' + message);
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "../../../../../src/app/recipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ingredient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecipeMenuplan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ingredient = /** @class */ (function () {
    function Ingredient(ingredient) {
        this.name = ingredient.name;
        this.unit = ingredient.unit;
        this.quantity = ingredient.quantity;
        this.category = ingredient.category;
    }
    return Ingredient;
}());

var Recipe = /** @class */ (function () {
    function Recipe(recipe) {
        this.id = recipe.id;
        this.name = recipe.name;
        this.calories = recipe.calories;
        this.calories_diet_plan = recipe.calories_diet_plan;
        this.category = recipe.category;
        this.ingredients = [];
        for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
            var i = _a[_i];
            this.ingredients.push(new Ingredient(i));
        }
        this.preparation = recipe.preparation;
        this.image_filename = recipe.image_filename;
    }
    return Recipe;
}());

var RecipeMenuplan = /** @class */ (function (_super) {
    __extends(RecipeMenuplan, _super);
    function RecipeMenuplan(recipe, users) {
        var _this = _super.call(this, recipe) || this;
        _this.userMenuplan = [];
        _this.viewUserSelect = false;
        _this.householdIngredientFactor = 0;
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var u = users_1[_i];
            var uM = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* UserMenuplan */](u, recipe.calories_diet_plan);
            _this.householdIngredientFactor += uM.ingredientFactor;
            _this.userMenuplan.push(uM);
        }
        // now we have all users and the householdIngredientFactor
        // we can set user specific householdPercentage
        _this.setUserHouseholdPercentage();
        return _this;
    }
    RecipeMenuplan.prototype.toggleViewUserSelect = function () {
        this.viewUserSelect = !this.viewUserSelect;
    };
    RecipeMenuplan.prototype.setUserHouseholdPercentage = function () {
        for (var _i = 0, _a = this.userMenuplan; _i < _a.length; _i++) {
            var uM = _a[_i];
            uM.householdPercentage = (uM.ingredientFactor / this.householdIngredientFactor) * 100;
        }
    };
    return RecipeMenuplan;
}(Recipe));



/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recipeListImageContainer {\r\n\twidth:  260px;\r\n\theight: 174px;\r\n\t\r\n\t/*background-image is set by recipesComponent */\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n}\r\n\r\n/* otherwise anchor is valid on full width an not only the image */\r\n\r\na{\r\n    display:inline-block;\r\n\tvertical-align:middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Rezepte</h3>\n<div class=\"row\">\n  <div class=\"col-lg-4 col-12\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Rezeptsuche ...\" [(ngModel)]=\"searchString\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"searchRecipes()\">Go!</button>\n      </span>\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n\n<div class=\"row\">\n  <div class=\"col-lg-4 col-12\" style=\"display: block;\"\n       *ngFor=\"let recipe of recipes\">\n\t<div class=\"test\">\n    <h6><b>{{recipe.name}}</b></h6>\n\t<a routerLink=\"/detail/{{recipe.id}}\">\n\t  <div class=\"recipeListImageContainer\" [style]=\"getBackgroundImage(recipe)\"></div>\n\t</a>\n\t<br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onClickAddToMenuplan(recipe)\"><fa name=\"plus\" style=\"color: white\"></fa> Menüplan</button>\n\t</div>\n\t<br>\n\t<br>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuplan_service__ = __webpack_require__("../../../../../src/app/menuplan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // for toast msg


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService, menuplanService, sanitizer, toastr, vcr // for toast msg
    ) {
        this.recipeService = recipeService;
        this.menuplanService = menuplanService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.searchString = '';
        this.toastr.setRootViewContainerRef(vcr); // for toast msg
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipesComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; });
    };
    RecipesComponent.prototype.searchRecipes = function () {
        var _this = this;
        this.recipeService.searchRecipes(this.searchString)
            .subscribe(function (recipes) { return _this.recipes = recipes; });
        this.searchString = '';
    };
    // use DomSanitizer to secure background-image url
    RecipesComponent.prototype.getBackgroundImage = function (recipe) {
        //TODO: get baseurl from somewhere else
        var recipeImageUrl = "http://backend-eatbalanced.a3c1.starter-us-west-1.openshiftapps.com/" + recipe.image_filename;
        var style = "background-image: url(" + recipeImageUrl + ")";
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    RecipesComponent.prototype.onClickAddToMenuplan = function (recipe) {
        this.menuplanService.add(recipe);
        var msg = 'Rezept wurde hinzugefügt';
        this.showInfo(msg);
    };
    // define toast messages
    RecipesComponent.prototype.showInfo = function (msg) {
        var _this = this;
        //this.toastr.info(msg);
        this.toastr.info(msg, '', { dismiss: 'controlled' })
            .then(function (toast) {
            setTimeout(function () {
                _this.toastr.dismissToast(toast);
            }, 1500);
        });
    };
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__("../../../../../src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_4__menuplan_service__["a" /* MenuplanService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] // for toast msg
        ])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:480px) {\r\n .table td,\r\n .table th {\r\n\t padding: 0;\r\n     font-size: 15px;\r\n }\r\n}\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Einkaufsliste</h3>\n\n<div *ngIf=\"!menuplanService.selectedRecipes.length\">\nDeine Einkaufsliste ist derzeit noch leer. Füge doch ein paar Rezepte zum Menüplan hinzu.\n<br>\n<a routerLink=\"/recipes\"><button type=\"button\" class=\"btn btn-primary\">Rezepte hinzufügen</button></a>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6 col-12\">\n    <table *ngIf=\"shoppingList.items.length\"\n      class=\"table\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>Menge</th>\n          <th>Zutat</th>\n    \t  <th>Kategorie</th>\n    \t  <th></th>\n    \t</tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let ingredient of shoppingList.items; let i = index\">\n          <td align=\"right\">{{ ingredient.quantity | round }} {{ ingredient.unit }}</td>\n          <td>{{ ingredient.name }}</td>\n    \t  <td>{{ ingredient.category }}</td>\n    \t  <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"shoppingList.deleteItem(i)\"><fa name=\"minus\" style=\"color: white\"></fa></button></td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuplan_service__ = __webpack_require__("../../../../../src/app/menuplan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_model__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(menuplanService) {
        this.menuplanService = menuplanService;
        this.allIngredients = [];
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.collectIngredients();
        this.shoppingList = new __WEBPACK_IMPORTED_MODULE_2__shopping_list_model__["a" /* ShoppingList */](this.allIngredients);
        console.log(this.shoppingList);
    };
    ShoppingListComponent.prototype.collectIngredients = function () {
        var ingredientContainer = [];
        for (var _i = 0, _a = this.menuplanService.selectedRecipes; _i < _a.length; _i++) {
            var recipeMenuplan = _a[_i];
            console.log(recipeMenuplan.name);
            for (var _b = 0, _c = recipeMenuplan.userMenuplan; _b < _c.length; _b++) {
                var userMenuplan = _c[_b];
                if (userMenuplan.isEatingMeal) {
                    console.log("User ", userMenuplan.name, " eats recipe,  User factor ", userMenuplan.ingredientFactor);
                    for (var _d = 0, _e = recipeMenuplan.ingredients; _d < _e.length; _d++) {
                        var i = _e[_d];
                        // clone class instance and set new quantity
                        var clonedIngredient = Object.assign(Object.create(Object.getPrototypeOf(i)), i);
                        clonedIngredient.quantity *= userMenuplan.ingredientFactor;
                        ingredientContainer.push(clonedIngredient);
                    }
                }
                else {
                    console.log("User ", userMenuplan.name, " doesnt eat recipe");
                }
            }
        }
        // save to component class attribute
        this.allIngredients = ingredientContainer;
        console.log("ALL INGREDIENTS", this.allIngredients);
    };
    ShoppingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__menuplan_service__["a" /* MenuplanService */]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingList; });
var ShoppingList = /** @class */ (function () {
    function ShoppingList(ingredients) {
        this.items = [];
        this.itemsContainer = {};
        for (var _i = 0, ingredients_1 = ingredients; _i < ingredients_1.length; _i++) {
            var i = ingredients_1[_i];
            console.log(i);
            this.addItem(i);
        }
    }
    ShoppingList.prototype.addItem = function (ingredient) {
        if (this.itemsContainer.hasOwnProperty(ingredient.name)) {
            console.log('has property');
            this.itemsContainer[ingredient.name].quantity += ingredient.quantity;
        }
        else {
            console.log('has not property');
            this.itemsContainer[ingredient.name] = Object.assign(Object.create(Object.getPrototypeOf(ingredient)), ingredient);
        }
        this.itemsContainerToItemsArray();
    };
    ShoppingList.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
    };
    ShoppingList.prototype.itemsContainerToItemsArray = function () {
        this.items = [];
        for (var i in this.itemsContainer) {
            this.items.push(this.itemsContainer[i]);
        }
        // default sort when creating array
        this.items = this.multisort(this.items, ['category', 'name'], ['ASC', 'ASC']);
    };
    // multidimensional sort function, integrated from
    // https://coderwall.com/p/5fu9xw/how-to-sort-multidimensional-array-using-javascript
    ShoppingList.prototype.multisort = function (arr, columns, order_by) {
        if (typeof columns == 'undefined') {
            columns = [];
            for (var x = 0; x < arr[0].length; x++) {
                columns.push(x);
            }
        }
        if (typeof order_by == 'undefined') {
            order_by = [];
            for (var x = 0; x < arr[0].length; x++) {
                order_by.push('ASC');
            }
        }
        function multisort_recursive(a, b, columns, order_by, index) {
            var direction = order_by[index] == 'DESC' ? 1 : 0;
            var is_numeric = !isNaN(+a[columns[index]] - +b[columns[index]]);
            var x = is_numeric ? +a[columns[index]] : a[columns[index]].toLowerCase();
            var y = is_numeric ? +b[columns[index]] : b[columns[index]].toLowerCase();
            if (x < y) {
                return direction == 0 ? -1 : 1;
            }
            if (x == y) {
                return columns.length - 1 > index ? multisort_recursive(a, b, columns, order_by, index + 1) : 0;
            }
            return direction == 0 ? 1 : -1;
        }
        return arr.sort(function (a, b) {
            return multisort_recursive(a, b, columns, order_by, 0);
        });
    };
    return ShoppingList;
}());



/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:8000/api/users'; // URL to web api
    }
    /** GET user by id. Will 404 if id not found */
    UserService.prototype.getUser = function (id) {
        var url = this.usersUrl + "/" + id;
        return this.http.get(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuplan; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.password = user.password;
        this.calorie_requirement_diet = user.calorie_requirement_diet;
        this.household_user_ids = user.household_user_ids;
    }
    return User;
}());

var UserMenuplan = /** @class */ (function (_super) {
    __extends(UserMenuplan, _super);
    function UserMenuplan(user, calories_diet_plan) {
        var _this = _super.call(this, user) || this;
        _this.isEatingMeal = true;
        _this.ingredientFactor = _this.calcCalorieFactor(calories_diet_plan);
        return _this;
    }
    UserMenuplan.prototype.switchEatMeal = function () {
        this.isEatingMeal = !this.isEatingMeal;
    };
    UserMenuplan.prototype.calcCalorieFactor = function (calories_diet_plan) {
        return this.calorie_requirement_diet / calories_diet_plan;
    };
    return UserMenuplan;
}(User));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map