webpackJsonp([17],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]),
            ],
        })
    ], PostPageModule);
    return PostPageModule;
}());

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
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
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, app, firebaseService, modalCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.message = "";
        this.data = "";
        this.textLeft = 250;
        this.toggled = false;
        this.user = {};
        this.posts = { content: "" };
    }
    PostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PostPage');
        if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
            this.firebaseService.getUser().snapshotChanges().subscribe(function (item) {
                _this.arrayItem = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.user = y;
            });
        }
    };
    PostPage.prototype.ionViewDidEnter = function (data) {
        this.quote = "When the whole class is arguing over the answer being 27 or 28 and you got 278";
    };
    PostPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    PostPage.prototype.textLength = function (str) {
        this.textLeft = 250 - str.length;
    };
    PostPage.prototype.post = function (posts) {
        console.log(posts);
        posts.hearts = 0;
        posts.comments = 0;
        posts.time = new Date().getTime() / 1000;
        this.firebaseService.post(posts);
        this.firebaseService.usersObject.points += 1;
        this.firebaseService.updateUser2(this.firebaseService.usersObject);
        this.navCtrl.push('TabsPage');
    };
    PostPage.prototype.signOut = function () {
        console.log("Logged Out");
        this.viewCtrl.dismiss();
        this.firebaseService.logout();
        this.app.getRootNav().push("LoginFlatPage");
        localStorage.removeItem('userId');
    };
    PostPage.prototype.handleSelection = function (event) {
        this.message = this.message + " " + event.char;
    };
    PostPage.prototype.navTag = function () {
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
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-post',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\post\post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons class="button">\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n      <ion-icon class="icon-color" name="md-close"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-buttons start>\n      <button (click)="signOut()" ion-button icon-only>\n          <ion-icon name="ios-exit"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="background-image">\n  <div class="bg-color">\n    <div id="parent" class="position">\n      <h1 class="subtext"><strong>Give advice, share opinions or ask a question!</strong></h1>\n      <form margin-top class="text-item">\n        <ion-item class="border">\n          <ion-label>\n            <ion-avatar item-left>\n              <img *ngIf="user.image!=\'\'" [alt]="user.username" [src]="user.image" class="avatar" width="60" height="60">\n              <img *ngIf="user.image==\'\'" [alt]="user.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60" height="60">\n            </ion-avatar>\n          </ion-label>\n          <ion-textarea value="my name" name="message" rows="7" maxLength="250" class="text-size" placeholder="Hi! What is on your mind?"\n            [(ngModel)]="posts.content" (ngModelChange)="textLength($event)"></ion-textarea>\n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <button item-left class="tag" ion-button small (click)="navTag()">\n               Tag It?\n                </button>\n          </ion-col>\n          <ion-col center text-center>\n            <button ion-button medium color="secondary" (click)="post(posts)">\n               POST\n                </button>\n            <span item-right class="icon-num"> {{textLeft}} </span>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=17.js.map