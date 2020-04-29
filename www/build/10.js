webpackJsonp([10],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyPageModule", function() { return verifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var verifyPageModule = /** @class */ (function () {
    function verifyPageModule() {
    }
    verifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify__["a" /* verifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify__["a" /* verifyPage */]),
            ],
        })
    ], verifyPageModule);
    return verifyPageModule;
}());

//# sourceMappingURL=verify.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verifyPage; });
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
 * Generated class for the verifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var verifyPage = /** @class */ (function () {
    function verifyPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    verifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad verifyPage');
        /* var verfiedEmail = this.firebaseService.userObject.emailVerified */
        /* this.localStorageItem = localStorage.setItem('emailVerification',verfiedEmail.toString()); */
    };
    verifyPage.prototype.resend = function (users) {
        var user = this.navParams.get('user');
        this.firebaseService.verifyEmail(user.email);
    };
    verifyPage.prototype.navSign = function () {
        this.navCtrl.push('RegisterPage');
    };
    verifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verify',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\verify\verify.html"*/'<!--\n  Generated template for the verifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Themes  register-flat-->\n<ion-content class="background-image">\n  <ion-grid no-padding class="bg-color">\n\n    <!-- Section form>-->\n    <ion-row class="wlm-msg" align-items-start>\n      <ion-col align-self-baseline col-12 offset-1 col-md-6 offset-md-3>\n        <ion-list text-center>\n          <img src="assets/images/Nesstynew.png" class="align-img" width="150px" height="150px" />\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div>\n      <p class="align-text"><strong>An email has been sent to your mailbox, click on it to verify your email address.<br>If\n          you did not get the mail, click on <a class="verify" (click)="resend()">resend</a> to send the mail again.\n        </strong></p>\n    </div>\n    <ion-row align-items-start>\n    <ion-col col-12>\n      <p no-margin no-padding class="signup"> Back to <a class="anchor-color" (click)="navSign()">Signup</a> </p>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\verify\verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], verifyPage);
    return verifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ })

});
//# sourceMappingURL=10.js.map