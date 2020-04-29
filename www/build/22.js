webpackJsonp([22],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardselectPageModule", function() { return BoardselectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boardselect__ = __webpack_require__(564);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardselectPageModule = /** @class */ (function () {
    function BoardselectPageModule() {
    }
    BoardselectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__boardselect__["a" /* BoardselectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__boardselect__["a" /* BoardselectPage */]),
            ],
        })
    ], BoardselectPageModule);
    return BoardselectPageModule;
}());

//# sourceMappingURL=boardselect.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardselectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__ = __webpack_require__(90);
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
 * Generated class for the BoardselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoardselectPage = /** @class */ (function () {
    function BoardselectPage(navCtrl, firebaseService, httpService, loadingCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.httpService = httpService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.categories = [];
        this.apiResponse = [];
        this.catObject = {};
        this.images = [];
    }
    BoardselectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (items) {
            _this.catArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.catArray.push(y);
                _this.catArray = _this.catArray.filter(function (data) { return data.userid == _this.firebaseService.userKey; });
            });
        });
        console.log('ionViewDidLoad BoardselectPage');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.httpService.getCategories().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); loading.dismiss(); throw err; })).subscribe(function (res) {
            var images;
            _this.images = ["https://www.healthbootcamps.com/wp-content/uploads/2018/03/Secrets-to-Living-without-Stress-Anxiety-with-Expert-Mary-Thompson.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/07/Renegade-Beauty-by-Nadine-Artemis.png",
                "https://www.healthbootcamps.com/wp-content/uploads/2018/10/Detox-Cleanse-Reena.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/10/Healthy-Relationships-for-Healthy-Life.png",
                "https://www.healthbootcamps.com/wp-content/uploads/2018/10/3-Powerful-Secrets-From-Research.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/04/Even-Short-Bursts-of-Exercise-Can-Decrease-Disease-and-Risk-of-Death.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/09/1-Secret-of-Master-Manifesters-with-Dr.-Dawson-Church.png",
                "https://www.healthbootcamps.com/wp-content/uploads/2018/05/Dr.-Kristin-Comella.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/03/Dr.-Mark-Hyman-on-his-new-book_-Food-What-the-heck-should-I-eat_.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/05/Calming-Chamomile-Tea.png",
                "https://www.healthbootcamps.com/wp-content/uploads/2018/10/CBD-for-Pain-and-Sleep-with-Dr.-Mary-Clifton.png", "https://www.healthbootcamps.com/wp-content/uploads/2018/10/Ursheet-Parikh.png", "https://www.healthbootcamps.com/wp-content/uploads/2018/06/How-to-Meditate-for-Beginners.png", "https://www.healthbootcamps.com/wp-content/uploads/2018/03/HEALTHIER-Proven-Weight-Loss-with-a-Harvard-MD-Dr.-Akil-and-his-PaleoVedic-Diet.jpg"
            ];
            var apiResponse = [];
            var catObject = {};
            apiResponse = res;
            apiResponse.map(function (data) {
                _this.apiData = data;
                var name = _this.apiData.name;
                var id = _this.apiData.id;
                var link = _this.apiData.link;
                _this.catObject = {
                    id: id,
                    name: name,
                    link: link,
                    image: _this.image,
                    togglestatus: false
                };
                _this.categories.push(_this.catObject);
                for (var i = 0; i < _this.categories.length; i++) {
                    _this.categories[i].image = _this.images[i];
                }
                for (var j = 0; j < _this.catArray.length; j++) {
                    for (var i = 0; i < _this.categories.length; i++) {
                        if (_this.catArray[j].categoryid == _this.categories[i].id) {
                            _this.categories[i].togglestatus = _this.catArray[j].togglestatus;
                        }
                    }
                }
            });
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        });
    };
    BoardselectPage.prototype.getName = function (cat, event) {
        console.log(cat);
        cat["togglestatus"] = event;
        if (event == true) {
            this.firebaseService.categoryRef(cat);
        }
        else if (event == false) {
            this.firebaseService.deleteCategory(cat.id + this.firebaseService.userKey);
        }
    };
    BoardselectPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    BoardselectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-boardselect',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\boardselect\boardselect.html"*/'<!--\n  Generated template for the BoardselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>boardselect</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons class="button">\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n        <ion-icon class="icon-color" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="title">\n      Select Boards\n    </ion-title>\n    \n    <ion-buttons start>\n      <button (click)="editUser()" ion-button icon-only>\n        <ion-icon name="ios-exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center"><i>Choose board you want displayed</i></div>\n  <ion-list>\n    <ion-item *ngFor="let cat of categories">\n      <ion-thumbnail item-start>\n        <img [src]="cat.image">\n      </ion-thumbnail>\n      <ion-label>{{cat.name}}</ion-label>\n      <ion-toggle color="danger" class="toggle-color" (ngModelChange)="getName(cat,$event)" [(ngModel)]="cat.togglestatus"></ion-toggle>\n    </ion-item>\n    <div class="without-content">\n      <div class="content" *ngIf="errorMessage!=null">\n        <div>\n          <ion-icon color="formdirty" name="information-circle" style="font-size: 80px;"></ion-icon>\n        </div>\n        <div class="block-text">\n          <p><b>Refresh Page!</b></p>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\boardselect\boardselect.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], BoardselectPage);
    return BoardselectPage;
}());

//# sourceMappingURL=boardselect.js.map

/***/ })

});
//# sourceMappingURL=22.js.map