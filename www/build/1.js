webpackJsonp([1,23],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFlatModule", function() { return LoginFlatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_flat__ = __webpack_require__(561);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginFlatModule = /** @class */ (function () {
    function LoginFlatModule() {
    }
    LoginFlatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_flat__["a" /* LoginFlat */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_flat__["a" /* LoginFlat */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_flat__["a" /* LoginFlat */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginFlatModule);
    return LoginFlatModule;
}());

//# sourceMappingURL=login-flat.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFlatPageModule", function() { return LoginFlatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_flat_page__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_flat_login_flat_module__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginFlatPageModule = /** @class */ (function () {
    function LoginFlatPageModule() {
    }
    LoginFlatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_flat_page__["a" /* LoginFlatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_flat_page__["a" /* LoginFlatPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_login_login_flat_login_flat_module__["LoginFlatModule"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], LoginFlatPageModule);
    return LoginFlatPageModule;
}());

//# sourceMappingURL=login-flat-page.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFlat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFlat = /** @class */ (function () {
    function LoginFlat(navCtrl, navParams, firebaseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.user = {
            username: '',
            password: '',
            email: '',
            points: 0,
            image: '',
            status: '',
            online: false
        };
        this.onEvent = function (event) {
            if (event == "onLogin" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
        this.isUsernameValid = true;
        this.isPasswordValid = true;
    }
    LoginFlat.prototype.login = function (user) {
        var _this = this;
        console.log(user);
        this.errorMessage = " ";
        this.firebaseService.login(user).catch(function (error) {
            _this.errorMessage = error.message;
        }).then(function (res) {
            _this.emailVerification = JSON.parse(localStorage.getItem('emailVerification'));
            if (_this.errorMessage == null || _this.errorMessage == " ") {
                console.log(_this.emailVerification);
                setTimeout(function () {
                    console.log(_this.emailVerification);
                    if (_this.emailVerification == true) {
                        console.log(_this.firebaseService.usersObject);
                        var uid = _this.firebaseService.usersObject.$key;
                        _this.localStorageItem = localStorage.setItem('userId', uid);
                        _this.firebaseService.usersObject.points += 1;
                        _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
                        _this.navCtrl.push("FirstpostPage");
                    }
                    else if (_this.emailVerification == false) {
                        _this.errorMessage = "Please verify email before permitted to login, if verified click login button again";
                    }
                }, 1000);
            }
        });
    };
    LoginFlat.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
            console.log("please add data");
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    LoginFlat.prototype.navLogin = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginFlat.prototype.navReset = function () {
        this.navCtrl.push('ResetpasswordPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginFlat.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginFlat.prototype, "events", void 0);
    LoginFlat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-flat',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\components\login\login-flat\login-flat.html"*/'<!-- Themes  register-flat-->\n\n<ion-content class="background-image" *ngIf="data != null">\n\n  <ion-grid no-padding class="bg-color">\n\n    <!-- logo -->\n\n    <ion-row header align-items-start align-items-stretch>\n\n      <!-- Section form>-->\n\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n        <form padding>\n\n          <ion-row class="wlm-msg" align-items-start>\n\n            <ion-col align-self-baseline col-12>\n\n              <ion-list text-center>\n\n                <img src="assets/images/Nesstynew.png" width="200px" height="200px" />\n\n              </ion-list>\n\n              <h1><strong>Yay, let\'s talk!</strong> {{data.subtitle}}</h1>\n\n            </ion-col>\n\n          </ion-row>\n\n          <!-- Input-field -->\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <div input-field>\n\n                <!-- Input-field-text -->\n\n                <ion-item no-padding>\n\n                  <ion-input class="text-input" type="text" placeholder="Email" [(ngModel)]="user.email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n                  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n\n --></ion-item>\n\n                <!-- Input-field-password -->\n\n                <ion-item no-padding>\n\n                  <ion-input class="text-input" type="password" [placeholder]="data.txtPassword" [(ngModel)]="user.password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n                  <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n\n                </ion-item>\n\n              </div>\n\n              <ion-label color="danger" class="error-size" *ngIf="errorMessage" no-margin>{{errorMessage}}</ion-label>\n\n              <!-- Login button -->\n\n              <ion-col col-12 no-padding>\n\n                <button no-margin ion-button color="primary" full text-uppercase (click)="login(user)">{{data.btnLogin}}</button>\n\n              </ion-col>\n\n\n\n              <!-- Description -->\n\n              <div description text-center>\n\n                <ion-row>\n\n                  <!-- Reset your password button -->\n\n                  <ion-col col-12 no-padding no-margin>\n\n                    <p no-margin no-padding class="lbl-color">{{data.txtForgotPassword}} <a (click)="navReset()">{{data.btnResetYourPassword}}</a> </p>\n\n                  </ion-col>\n\n                  <!-- Signup now button -->\n\n                  <ion-col col-12 padding>\n\n                    <p no-margin no-padding>{{data.txtSignupnow}} <a (click)="navLogin()">{{data.btnSignupnow}}</a> </p>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\components\login\login-flat\login-flat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], LoginFlat);
    return LoginFlat;
}());

//# sourceMappingURL=login-flat.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFlatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFlatPage = /** @class */ (function () {
    function LoginFlatPage(navCtrl, navParams, service, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        /*  Todo override this function with your logic
        =================================================*/
        this.onLogin = function (params) {
            _this.toastCtrl.presentToast('Login Now');
        };
        this.data = this.service.getDataForLoginFlat();
        this.events = {
            "onLogin": this.onLogin
        };
    }
    LoginFlatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-flat-page',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\login-flat-page\login-flat-page.html"*/'<login-flat [data]="data" [events]="events"></login-flat>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\login-flat-page\login-flat-page.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]])
    ], LoginFlatPage);
    return LoginFlatPage;
}());

//# sourceMappingURL=login-flat-page.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = /** @class */ (function () {
    function LoginService() {
        /*  Login Universal Data
        ==============================*/
        this.getDataForLoginFlat = function () {
            var data = {
                "logo": "assets/images/csform-logo.png",
                "btnLogin": "Login",
                "txtUsername": "Username",
                "txtPassword": "Password",
                "txtForgotPassword": "Forgot password?",
                "btnResetYourPassword": "Reset your password",
                "txtSignupnow": "Don't have an account?",
                "btnSignupnow": "Signup now",
                "title": "Welcome back,",
                "subtitle": "Please login.",
                "errorUser": "Field can't be empty.",
                "errorPassword": "Field can't be empty."
            };
            return data;
        };
    }
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login-service.js.map

/***/ })

});
//# sourceMappingURL=1.js.map