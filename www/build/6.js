webpackJsonp([6],{

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */])
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(91);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.state = "transparent";
        this.show = false;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WelcomePage');
        this.text = "Hello!, What's on your mind?";
        this.state = "opaque";
        setTimeout(function () {
            _this.state = "transparent";
        }, 5000);
        setTimeout(function () {
            _this.show = false;
            _this.text = "What's Stressing you?, bugging you?, or even making you smile?";
            _this.state = "opaque";
        }, 10000);
        setTimeout(function () {
            _this.state = "transparent";
        }, 15000);
        setTimeout(function () {
            _this.show = false;
            _this.text = "Or ask a question, we are here for you";
            _this.state = "opaque";
        }, 20000);
        setTimeout(function () {
            _this.state = "transparent";
        }, 25000);
        setTimeout(function () {
            _this.show = true;
            _this.text = "";
            _this.textNessty = "assets/images/nesty.png";
            _this.textUnleash = "TEEN TALK!";
            _this.state = "opaque";
            _this.active = true;
            _this.myClasses = {
                bgcolor: _this.bgcolor,
                backgroundimage: _this.backgroundimage
            };
        }, 30000);
        setTimeout(function () {
            _this.navCtrl.push('TabsPage');
        }, 35000);
    };
    WelcomePage.prototype.navWall = function () {
        this.navCtrl.push('TabsPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content [class.backgroundimage]="active">\n    <div class="without-content" [class.bgcolor]="active">\n        <div class="content">\n            <span class="aligntext" (click)="navWall()"> <strong> SKIP  </strong> </span>\n            <div class="block-text">\n                <p><span [@elementState]="state" class="block-text"> {{text}} </span>\n                    <img *ngIf="show" [src]="textNessty" width="250px" class="block-text-title" [@elementState]="state"/><br>\n                    <span class="sub-title" [@elementState]="state">{{textUnleash}}</span>\n                </p>\n                <p></p>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\welcome\welcome.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('elementState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('opaque', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('transparent', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('opaque => transparent', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('5000ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('transparent => opaque', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('5000ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=6.js.map