webpackJsonp([20],{

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home-page.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pages = [
            { title: 'UNIVERSAL', component: "LoginFlatPage" },
        ];
    }
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        this.navCtrl.push(page.component);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\home-page\home-page.html"*/'<!--- Header -->\n\n<ion-header>\n\n  <ion-navbar padding>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <img padding src="assets/images/csform-logo.png" />\n\n    <button ion-button float-right onClick="window.open(\'https://csform.com/product/premium-login-component-for-ionic-free-sample/\');">\n\n      GET IT FOR FREE\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--- Content -->\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row padding-horizontal no-margin>\n\n      <ion-col>\n\n        <ion-item text-center no-padding margin-vertical background-size no-lines *ngFor="let p of pages">\n\n          <button menuClose text-center transparent ion-item (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row description padding-horizontal justify-content-center>\n\n      <ion-col border col-12>\n\n        <a href="https://csform.com/product/premium-login-component-for-ionic-three-themes/?_ga=2.122725515.1649954292.1523877185-1914786605.1522238104">Check full premium <br> version here</a>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row ionic-app padding-horizontal justify-content-center>\n\n      <ion-col col-12>\n\n        <h3>Check ours templates here</h3>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <a href="https://play.google.com/store/apps/details?id=com.csform.ionic.blue">\n\n                  <img src="assets/images/ionic-3-light-blue.png" />\n\n                </a>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <a href="https://play.google.com/store/apps/details?id=com.csform.ionic.yellow">\n\n                  <img src="assets/images/ionic-3-dark-yellow.png" />\n\n                </a>\n\n      </ion-col>\n\n      <ion-col col-4 text-left>\n\n        <a href="https://play.google.com/store/apps/details?id=com.csform.ionic.green.light">\n\n                  <img src="assets/images/ionic-3-green-light.png" />\n\n                </a>\n\n      </ion-col>\n\n      <!-- Description text -->\n\n      <ion-col col-12>\n\n        <p>For better understanding how our templates works <br> please <a href="https://csform.com/documentation-for-premium-login-component-for-ionic-three-themes/?_ga=2.221278872.1811753998.1522228601-994309764.1514560507">read our documentation</a></p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\home-page\home-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home-page.js.map

/***/ })

});
//# sourceMappingURL=20.js.map