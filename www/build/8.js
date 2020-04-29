webpackJsonp([8],{

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpicPageModule", function() { return ViewpicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewpic__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewpicPageModule = /** @class */ (function () {
    function ViewpicPageModule() {
    }
    ViewpicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewpic__["a" /* ViewpicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewpic__["a" /* ViewpicPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
        })
    ], ViewpicPageModule);
    return ViewpicPageModule;
}());

//# sourceMappingURL=viewpic.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpicPage; });
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


/**
 * Generated class for the ViewpicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewpicPage = /** @class */ (function () {
    function ViewpicPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.user = this.navParams.get('user');
        console.log(this.user);
    }
    ViewpicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewpicPage');
    };
    ViewpicPage.prototype.ionViewDidEnter = function () {
        this.user = this.navParams.get('user');
        console.log(this.user);
    };
    ViewpicPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    ViewpicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewpic',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\viewpic\viewpic.html"*/'<!--\n  Generated template for the ViewpicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons class="button">\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n      <ion-icon class="icon-color" name="md-close"></ion-icon>\n    </button>\n    </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<img *ngIf="user.image!=\'\'" imageViewer class="img-center"  [src]="user.image" style="width:100%; height: 100%;" />\n<img *ngIf="user.image==\'\'" imageViewer class="img-center"  [alt]="user.username" src="assets/images/blue-bird-with-green.png" style="width:100%; height: 100%;" />\n</ion-content>\n'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\viewpic\viewpic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ViewpicPage);
    return ViewpicPage;
}());

//# sourceMappingURL=viewpic.js.map

/***/ })

});
//# sourceMappingURL=8.js.map