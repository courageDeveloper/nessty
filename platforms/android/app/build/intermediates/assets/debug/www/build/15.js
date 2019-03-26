webpackJsonp([15],{

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpassword__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetpasswordPageModule = /** @class */ (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetpassword__["a" /* ResetpasswordPage */]),
            ],
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());

//# sourceMappingURL=resetpassword.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
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
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpasswordPage');
    };
    ResetpasswordPage.prototype.backlogin = function () {
        this.navCtrl.pop();
    };
    ResetpasswordPage.prototype.Send = function () {
        var _this = this;
        console.log(this.email);
        this.navCtrl.push('resetrequestPage', { email: this.email });
        this.firebaseService.resetPassword(this.email.trim()).then(function (res) {
            _this.errorMessageReset = _this.firebaseService.errorMessageReset;
        });
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\resetpassword\resetpassword.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Themes  register-flat-->\n<ion-content class="background-image">\n  <ion-grid no-padding class="bg-color">\n    <!-- logo -->\n    <!-- <ion-row>\n     <ion-col class="aling-bottom" align-self-stretch align-self-end col-10 offset-1 col-md-6 offset-md-3>\n      <img src="assets/images/Nessty-Logo-5.png" />\n      </ion-col>\n  </ion-row>\n    <ion-row>\n      <ion-col align-self-stretch col-10 offset-4 col-md-6 offset-md-5>\n       <span class="sub-title"><strong> Teen Talk!  </strong></span> \n      </ion-col>\n\n  </ion-row> -->\n    <ion-row header align-items-start align-items-stretch>\n      <!-- Section form>-->\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n        <form padding>\n          <ion-row class="wlm-msg" align-items-start>\n            <ion-col align-self-baseline col-12>\n              <ion-list text-center>\n                <img src="assets/images/Nesstynew.png" width="200px" height="200px" />\n              </ion-list>\n              <h1><strong>Get Password</strong> Enter email address</h1>\n            </ion-col>\n          </ion-row>\n          <!-- Input-field -->\n          <ion-row>\n            <ion-col col-12>\n              <div input-field>\n                <!-- Input-field-email -->\n                <ion-item no-padding>\n                  <ion-input class="text-input" type="email" placeholder="Email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n                  <!-- <ion-label no-margin *ngIf="!isEmailValid">{{data.errorPassword}}</ion-label> -->\n                </ion-item>\n\n              </div>\n              <ion-label color="danger" no-margin>{{errorMessageReset}}</ion-label>\n              <br>\n              <!-- Reset button -->\n              <ion-col col-12 no-padding>\n                <button no-margin ion-button color="primary" full text-uppercase (click)="Send()">Send</button>\n              </ion-col>\n\n              <!-- Description -->\n              <div description text-center>\n                <ion-row>\n                  <!-- Message -->\n                  <ion-col col-12 no-padding no-margin>\n                    <p no-margin no-padding class="lbl-color"> Check email address</p>\n                  </ion-col>\n\n                  <!-- Back to login -->\n                  <ion-col col-12padding>\n                    <p no-margin no-padding> Go back to login? <a (click)="backlogin()">LOGIN</a> </p>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click)="backlogin()"> <ion-icon name="arrow-back"> </ion-icon> </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\resetpassword\resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ })

});
//# sourceMappingURL=15.js.map