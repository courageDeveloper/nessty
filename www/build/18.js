webpackJsonp([18],{

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordresetedPageModule", function() { return passwordresetedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passwordreseted__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var passwordresetedPageModule = /** @class */ (function () {
    function passwordresetedPageModule() {
    }
    passwordresetedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__passwordreseted__["a" /* passwordresetedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__passwordreseted__["a" /* passwordresetedPage */]),
            ],
        })
    ], passwordresetedPageModule);
    return passwordresetedPageModule;
}());

//# sourceMappingURL=passwordreseted.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passwordresetedPage; });
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
 * Generated class for the passwordresetedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var passwordresetedPage = /** @class */ (function () {
    function passwordresetedPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    passwordresetedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad passwordresetedPage');
    };
    passwordresetedPage.prototype.login = function () {
        this.navCtrl.push('LoginFlatPage');
    };
    passwordresetedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-passwordreseted',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\passwordreseted\passwordreseted.html"*/'<!--\n  Generated template for the passwordresetedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Themes  register-flat-->\n<ion-content class="background-image">\n  <ion-grid no-padding class="bg-color">\n\n    <!-- Section form>-->\n    <ion-row class="wlm-msg" align-items-start>\n      <ion-col col-12 align-self-baseline offset-1 col-md-6 offset-md-3>\n        <ion-list text-center>\n          <img src="assets/images/Nesstynew.png" class="align-img" width="150px" height="150px" />\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div>\n      <p class="align-text"><strong>Your password has been successfully changed!, Proceed to login to Nessty<br><a class="verify" (click)="login()">Login</a>\n        </strong></p>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\passwordreseted\passwordreseted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], passwordresetedPage);
    return passwordresetedPage;
}());

//# sourceMappingURL=passwordreseted.js.map

/***/ })

});
//# sourceMappingURL=18.js.map