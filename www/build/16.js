webpackJsonp([16],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(578);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.users = {};
        this.years = [];
        this.disable = false;
        this.emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.emailForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.selectedStatus = "Graduate";
        this.slides.lockSwipes(true);
        console.log('ionViewDidLoad RegisterPage');
        this.years = [{ name: "Graduate" }, { name: "Freshman" }, { name: "Sophomore" }, { name: "Junior" }, { name: "Senior" }];
        this.emailForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(this.emailValidate)])
            ]
        });
    };
    RegisterPage.prototype.ionViewDidEnter = function () {
        this.selectedStatus = "Graduate";
        this.slides.lockSwipes(true);
        this.years = [{ name: "Freshman" }, { name: "Sophomore" }, { name: "Junior" }, { name: "Senior" }, { name: "Graduate" }];
        this.startSlide = this.slides.isBeginning();
        this.emailForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(this.emailValidate)])
            ]
        });
    };
    RegisterPage.prototype.backlogin = function () {
        this.navCtrl.push('LoginFlatPage');
    };
    RegisterPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.slides.lockSwipes(true);
        this.startSlide = this.slides.isBeginning();
    };
    RegisterPage.prototype.emailNext = function () {
        if (this.emailForm.valid) {
            this.slides.lockSwipes(false);
            this.slides.slideNext(500, true);
        }
    };
    RegisterPage.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext(500, true);
        this.errorMessage = " ";
    };
    RegisterPage.prototype.prev = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev(500, true);
    };
    RegisterPage.prototype.chooseImage = function (event) {
        console.log(event);
    };
    RegisterPage.prototype.checkUser = function () {
        var _this = this;
        this.disable = false;
        this.errorMessageUser = "";
        this.firebaseService.getAllUsers().snapshotChanges().subscribe(function (items) {
            _this.usersArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.usersArray.push(y);
            });
            _this.usersArray.forEach(function (res) {
                if (_this.users.username.toLowerCase() == res.username.toLowerCase()) {
                    _this.errorMessageUser = "This user already exists";
                    _this.disable = true;
                }
            });
        });
    };
    RegisterPage.prototype.checkEmail = function () {
        var _this = this;
        this.disable = false;
        this.errorMessageUser = "";
        this.firebaseService.getAllUsers().snapshotChanges().subscribe(function (items) {
            _this.usersArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.usersArray.push(y);
            });
            _this.usersArray.forEach(function (res) {
                if (_this.users.email == res.email) {
                    _this.errorMessageUser = "This email already exists";
                    _this.disable = true;
                }
            });
        });
    };
    RegisterPage.prototype.submit = function (users) {
        var _this = this;
        users.points = 0;
        users.blobFile = "";
        users.image = "";
        users.online = true;
        this.firebaseService.signUp(users).then(function (res) {
            _this.errorMessage = _this.firebaseService.errorMessage;
            if (_this.errorMessage == null || _this.errorMessage == " ") {
                _this.navCtrl.push('verifyPage', { user: users });
                _this.firebaseService.verifyEmail(users.email);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
    ], RegisterPage.prototype, "slides", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Themes  register-flat-->\n<ion-content class="background-image">\n  <ion-grid no-padding class="bg-color">\n    <ion-row header align-items-start align-items-stretch>\n      <!-- Section form>-->\n      <ion-col col-10 offset-1 col-md-6 offset-md-3>\n        <ion-slides (ionSlideDidChange)="slideChanged()">\n          <ion-slide>\n            <form padding>\n              <ion-row class="wlm-msg" align-items-start>\n                <ion-col align-self-baseline col-12>\n                  <ion-list text-center>\n                    <img src="assets/images/Nesstynew.png" class="img-size" />\n                  </ion-list>\n                  <h1 class="align-center"><strong>Hi! Get ready to make college the best years of your life</strong></h1>\n                </ion-col>\n              </ion-row>\n              <!-- Input-field -->\n              <ion-row>\n                <ion-col col-12>\n                  <div input-field>\n                    <!-- Input-field-text -->\n                    <ion-item no-padding>\n                      <ion-input class="text-input" name="username" type="text" placeholder="Username (Use real or anonymous)" [(ngModel)]="users.username" (ngModelChange)="checkUser()" [ngModelOptions]="{standalone: true}" required></ion-input>\n                    </ion-item>\n                  </div>\n                  <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n                  <br>\n                  <ion-col col-12 no-padding>\n                    <button no-margin ion-button color="primary" full text-uppercase (click)="next()" [disabled]="!users.username || disable">Next</button>\n                  </ion-col>\n                </ion-col>\n                <!-- Login button -->\n                <ion-col col-12 padding>\n                  <p no-margin class="login" no-padding>Already have an account? <a class="anchor-color" (click)="backlogin()">Login</a> </p>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-slide>\n          <ion-slide>\n            <form padding>\n              <ion-row class="wlm-msg" align-items-start>\n                <ion-col align-self-baseline col-12>\n                  <ion-list text-center>\n                    <img src="assets/images/Nesstynew.png" class="img-size" />\n                  </ion-list>\n                  <h1 class="align-center"><strong>Hi! Get ready to make college the best years of your life</strong></h1>\n                </ion-col>\n              </ion-row>\n              <!-- Input-field -->\n              <ion-row>\n                <ion-col col-12>\n                  <div input-field>\n                    <!-- Input-field-password -->\n                    <ion-item no-padding>\n                      <ion-input class="text-input" type="password" placeholder="Password" name="password" [(ngModel)]="users.password" [ngModelOptions]="{standalone: true}" required></ion-input>\n                      <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n                    </ion-item>\n                  </div>\n                  <br>\n                  <!-- Login button -->\n                  <ion-col col-12 no-padding>\n                    <button no-margin ion-button color="primary" full text-uppercase (click)="next()" [disabled]="!users.password">Next</button>\n                  </ion-col>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-slide>\n          <ion-slide>\n            <form padding [formGroup]="emailForm">\n              <ion-row class="wlm-msg" align-items-start>\n                <ion-col align-self-baseline col-12>\n                  <ion-list text-center>\n                    <img src="assets/images/Nesstynew.png" class="img-size" />\n                  </ion-list>\n                  <h1 class="align-center"><strong>Hi! Get ready to make college the best years of your life</strong></h1>\n                </ion-col>\n              </ion-row>\n              <!-- Input-field -->\n              <ion-row>\n                <ion-col col-12>\n                  <div input-field>\n                    <!-- Input-field-email -->\n                    <ion-item no-padding>\n                      <ion-input class="text-input" type="email" name="email" placeholder="Email" [formControl]="emailForm.controls[\'email\']" [(ngModel)]="users.email" (ngModelChange)="checkEmail()" required></ion-input>\n                    </ion-item>\n                    <ion-label color="danger" class="error-size" *ngIf="!emailForm.controls.email.valid && emailForm.controls.email.dirty" no-margin>Please enter a valid email.</ion-label>\n                  </div>\n                  <ion-label color="danger" no-margin>{{errorMessageUser}}</ion-label>\n                  <br>\n                  <!-- Login button -->\n                  <ion-col col-12 no-padding>\n                    <button no-margin ion-button color="primary" full text-uppercase (click)="emailNext()" [disabled]="!users.email || disable">Next</button>\n                  </ion-col>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-slide>\n          <ion-slide>\n            <form padding>\n              <ion-row class="wlm-msg" align-items-start>\n                <ion-col align-self-baseline col-12>\n                  <ion-list text-center>\n                    <img src="assets/images/Nesstynew.png" class="img-size" />\n                  </ion-list>\n                  <h1 class="align-center"><strong>Hi! Get ready to make college the best years of your life</strong></h1>\n                </ion-col>\n              </ion-row>\n              <!-- Input-field -->\n              <ion-row>\n                <ion-col col-12>\n                  <div input-field>\n                    <ion-item>\n                      <ion-label class="select-label">Select Status</ion-label>\n                      <ion-select class="select-input" name="year" [(ngModel)]="users.status">\n                        <ion-option *ngFor="let year of years" [value]="year.name" [selected]="selectedStatus == year.name">{{year.name}}</ion-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <ion-label color="danger" class="error-size" *ngIf="errorMessage" no-margin>{{errorMessage}}</ion-label>\n                  <br>\n                  <!-- Login button -->\n                  <ion-col col-12 no-padding>\n                    <button no-margin ion-button color="primary" full text-uppercase (click)="submit(users)" [disabled]="!users.status">Submit</button>\n                  </ion-col>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n   <ion-fab bottom right *ngIf="!startSlide">\n    <button ion-fab color="primary" (click)="prev()" mini> <ion-icon name="arrow-back">  </ion-icon> </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=16.js.map