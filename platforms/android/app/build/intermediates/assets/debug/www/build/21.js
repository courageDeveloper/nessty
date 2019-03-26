webpackJsonp([21],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstpostPageModule", function() { return FirstpostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstpost__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstpostPageModule = /** @class */ (function () {
    function FirstpostPageModule() {
    }
    FirstpostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firstpost__["a" /* FirstpostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firstpost__["a" /* FirstpostPage */]),
            ],
        })
    ], FirstpostPageModule);
    return FirstpostPageModule;
}());

//# sourceMappingURL=firstpost.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstpostPage; });
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
 * Generated class for the FirstpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstpostPage = /** @class */ (function () {
    function FirstpostPage(navCtrl, modalCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.message = "";
        this.textLeft = 250;
        this.toggled = false;
        this.user = {};
        this.posts = { content: "" };
    }
    FirstpostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FirstpostPage');
        if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
            this.firebaseService.getUser().snapshotChanges().subscribe(function (item) {
                _this.arrayItem = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.user = y;
            });
        }
        /* console.log(this.firebaseService.arrayUsers);
        this.firebaseService.getUsers(this.firebaseService.arrayUsers.user.uid).snapshotChanges().subscribe(item => {
            var y = item.payload.toJSON();
            y['$key'] = item.key;
            this.loggedUser = {
              $key: y['$key'],
              email: y['email'],
              username: y['username'],
              online: y['online'],
              blobFile: y['blobFile'],
              image: y['image'],
              points: y['points'],
              status: y['status']
            }
            console.log(this.loggedUser);
            this.loggedUser.points += 1;
            this.firebaseService.updateUser(this.loggedUser);
          })
          console.log(this.loggedUser); */
    };
    FirstpostPage.prototype.ionViewDidEnter = function () {
        this.quote = "When the whole class is arguing over the answer being 27 or 28 and you got 278";
    };
    FirstpostPage.prototype.textLength = function (str) {
        this.textLeft = 250 - str.length;
    };
    FirstpostPage.prototype.handleSelection = function (event) {
        this.message = this.message + " " + event.char;
    };
    FirstpostPage.prototype.navWall = function () {
        this.navCtrl.push('TabsPage');
    };
    FirstpostPage.prototype.post = function (posts) {
        console.log(posts);
        posts.hearts = 0;
        posts.comments = 0;
        posts.time = new Date().getTime() / 1000;
        this.firebaseService.post(posts);
        this.firebaseService.usersObject.points += 1;
        this.firebaseService.updateUser2(this.firebaseService.usersObject);
        this.navCtrl.push('TabsPage');
    };
    FirstpostPage.prototype.navTag = function () {
        var _this = this;
        var modal = this.modalCtrl.create('TagboardPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                data.name = data.name.replace(/ +/g, "");
                _this.posts.content = _this.posts.content + ' #' + data.name.toLowerCase() + ' ';
            }
        });
        modal.present();
    };
    FirstpostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-firstpost',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\firstpost\firstpost.html"*/'<!--\n  Generated template for the FirstpostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content no-padding class="background-image">\n  <div class="bg-color">\n    <span class="aligntext" (click)="navWall()"> <strong> SKIP  </strong> </span>\n    <div class="position">\n      <h1 class="subtext"><strong>Give advice, share opinions or ask a question!</strong></h1>\n\n      <form margin-top class="text-item">\n        <ion-item class="border">\n          <ion-label>\n            <ion-avatar item-left>\n              <img *ngIf="user.image!=\'\'" [alt]="user.username" [src]="user.image" class="avatar" width="60" height="60">\n              <img *ngIf="user.image==\'\'" [alt]="user.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60" height="60">\n            </ion-avatar>\n          </ion-label>\n          <ion-textarea name="message" rows="7" maxLength="250" placeholder="Hi! What\'s on your mind?" [(ngModel)]="posts.content" (ngModelChange)="textLength($event)"></ion-textarea>\n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <button item-left class="tag" ion-button small (click)="navTag()">\n               Tag It?\n                </button>\n          </ion-col>\n          <ion-col center text-center>\n            <button ion-button medium color="secondary" (click)="post(posts)">\n               POST\n                </button>\n            <span item-right class="icon-num"> {{textLeft}} </span>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\firstpost\firstpost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], FirstpostPage);
    return FirstpostPage;
}());

//# sourceMappingURL=firstpost.js.map

/***/ })

});
//# sourceMappingURL=21.js.map