webpackJsonp([12],{

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagboardPageModule", function() { return TagboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tagboard__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TagboardPageModule = /** @class */ (function () {
    function TagboardPageModule() {
    }
    TagboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tagboard__["a" /* TagboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tagboard__["a" /* TagboardPage */]),
            ],
        })
    ], TagboardPageModule);
    return TagboardPageModule;
}());

//# sourceMappingURL=tagboard.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(17);
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
 * Generated class for the TagboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TagboardPage = /** @class */ (function () {
    function TagboardPage(navCtrl, loadingCtrl, httpService, modalCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.httpService = httpService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.boards = [];
        this.catObject = {};
        this.categories = [];
    }
    TagboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.red = true;
        this.orange = true;
        this.green = true;
        this.black = true;
        this.purple = true;
        console.log('ionViewDidLoad TagboardPage');
        /*  this.boards = [{image:"assets/images/dark-1.jpg",name:"Physical Health",color:"green"},{image:"assets/images/Home-Default.jpg",name:"Dating",color:"blue"},
           {image:"assets/images/dark-3.jpg",name:"Anxiety",color:"red"},{image:"assets/images/dark-2.jpg",name:"Depression",color:"orange"},{image:"assets/images/light-3.jpg",name:"Kinetics",color:"purple"}
        ]
     */
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.httpService.getCategories().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); loading.dismiss(); throw err; })).subscribe(function (res) {
            _this.colors = ["green", "black", "green", "black", "green", "black", "green", "black", "green", "black", "green", "black", "green", "black",
            ];
            console.log(_this.colors);
            var apiResponse = [];
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
                    color: _this.colors,
                    togglestatus: false
                };
                _this.categories.push(_this.catObject);
                console.log(_this.categories);
                for (var i = 0; i < _this.categories.length; i++) {
                    _this.categories[i].color = _this.colors[i];
                }
            });
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        });
        this.boundClass = {
            green: this.green,
            red: this.red,
            black: this.black,
            orange: this.orange,
            purple: this.purple
        };
    };
    TagboardPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    TagboardPage.prototype.getName = function (board) {
        this.viewCtrl.dismiss(board);
        /*  let modal = this.modalCtrl.create('PostPage',{board:board});
        modal.onDidDismiss((board) => {
          if (board) {
            console.log(board)
          }
        })
        modal.present(); */
    };
    TagboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tagboard',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\tagboard\tagboard.html"*/'<!--\n  Generated template for the TagboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-toolbar>\n  <ion-buttons class="button">\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n      <ion-icon class="icon-color" name="ios-close-outline"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="align-board" *ngFor="let board of categories">\n<ion-badge class="badge" text-lowercase (click)="getName(board)" [ngClass]="{\'green\':board.color===\'green\', \'black\':board.color===\'black\', \'red\':board.color===\'red\',\'orange\':board.color===\'orange\',\'purple\':board.color===\'purple\'}">{{board.name}}</ion-badge>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\tagboard\tagboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], TagboardPage);
    return TagboardPage;
}());

//# sourceMappingURL=tagboard.js.map

/***/ })

});
//# sourceMappingURL=12.js.map