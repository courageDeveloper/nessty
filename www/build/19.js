webpackJsonp([19],{

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(575);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]),
            ],
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__ = __webpack_require__(90);
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
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, alertCtrl, viewCtrl, firebaseService, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.firebaseService = firebaseService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.passwordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            oldpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            newpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            confirmpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.user = {
            username: '',
            password: '',
            email: '',
            points: 0,
            image: '',
            status: '',
            online: false
        };
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
        this.passwordForm = this.formBuilder.group({
            newpassword: [this.newpassword],
            confirmpassword: [this.confirmpassword]
        });
    };
    PasswordPage.prototype.ionViewDidEnter = function () {
        this.passwordForm = this.formBuilder.group({
            newpassword: [this.newpassword],
            confirmpassword: [this.confirmpassword]
        });
    };
    PasswordPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    PasswordPage.prototype.submit = function () {
        if (this.confirmpassword == this.newpassword) {
            this.firebaseService.updateSignInPassword(this.newpassword);
        }
        else {
            this.errorMessage = "Confirm Password is not the same as New Password";
        }
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-password',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\password\password.html"*/'<!--\n  Generated template for the PasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons class="button">\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n        <ion-icon class="icon-color" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="title">Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="passwordForm">\n\n    <div class="align-bottom">\n      <ion-item>\n        <ion-label>New Password</ion-label>\n        <ion-input type="password" [formControl]="passwordForm.controls[\'newpassword\']" [(ngModel)]="newpassword" name="newpassword" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Confirm Password</ion-label>\n        <ion-input type="password" [formControl]="passwordForm.controls[\'confirmpassword\']" [(ngModel)]="confirmpassword" name="confirmpassword" required></ion-input>\n      </ion-item>\n    </div>\n\n    <ion-label color="danger" class="error-size" *ngIf="errorMessage" no-margin>{{errorMessage}}</ion-label>\n    <br>\n\n    <button ion-button type="submit" (click)="submit()" block [disabled]="!confirmpassword || !newpassword">Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\password\password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=19.js.map