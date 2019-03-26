webpackJsonp([14],{

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetrequestPageModule", function() { return resetrequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetrequest__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var resetrequestPageModule = /** @class */ (function () {
    function resetrequestPageModule() {
    }
    resetrequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetrequest__["a" /* resetrequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetrequest__["a" /* resetrequestPage */]),
            ],
        })
    ], resetrequestPageModule);
    return resetrequestPageModule;
}());

//# sourceMappingURL=resetrequest.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetrequestPage; });
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



/**
 * Generated class for the resetrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var resetrequestPage = /** @class */ (function () {
    function resetrequestPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    resetrequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad resetrequestPage');
        /* var verfiedEmail = this.firebaseService.userObject.emailVerified */
        /* this.localStorageItem = localStorage.setItem('emailVerification',verfiedEmail.toString()); */
    };
    resetrequestPage.prototype.resend = function (users) {
        var _this = this;
        var email = this.navParams.get('email');
        this.firebaseService.resetPassword(email.trim()).then(function (res) {
            _this.errorMessageReset = _this.firebaseService.errorMessageReset;
        });
    };
    resetrequestPage.prototype.navSign = function () {
        this.navCtrl.push('LoginFlatPage');
    };
    resetrequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetrequest',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\resetrequest\resetrequest.html"*/'<!--\n  Generated template for the resetrequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Themes  register-flat-->\n<ion-content class="background-image">\n  <ion-grid no-padding class="bg-color">\n\n    <!-- Section form>-->\n    <ion-row align-items-start>\n      <ion-col col-12 offset-1 col-md-6 offset-md-3>\n        <ion-list text-center>\n          <img src="assets/images/Nesstynew.png" width="150px" height="150px" />\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div>\n      <p class="align-text"><strong>We have sent you an email to reset your password! Please check your email. <br>If\n          you did not get the mail, click on <a class="verify" (click)="resend()">resend</a> to send the mail again.\n        </strong></p>\n    </div>\n    <ion-row align-items-start>\n    <ion-col col-12>\n      <p no-margin no-padding class="signup"> Back to <a class="anchor-color" (click)="navSign()">Login</a> </p>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\resetrequest\resetrequest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], resetrequestPage);
    return resetrequestPage;
}());

//# sourceMappingURL=resetrequest.js.map

/***/ })

});
//# sourceMappingURL=14.js.map