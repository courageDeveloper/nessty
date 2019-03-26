webpackJsonp([7],{

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpostPageModule", function() { return ViewpostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewpost__ = __webpack_require__(590);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewpostPageModule = /** @class */ (function () {
    function ViewpostPageModule() {
    }
    ViewpostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewpost__["a" /* ViewpostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewpost__["a" /* ViewpostPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ViewpostPageModule);
    return ViewpostPageModule;
}());

//# sourceMappingURL=viewpost.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpostPage; });
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
 * Generated class for the ViewpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewpostPage = /** @class */ (function () {
    function ViewpostPage(navCtrl, app, loadingCtrl, firebaseService, modalCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.user = [];
        this.comments = [];
        this.loginUser = {};
        this.textLeft = 250;
        this.message = "";
        this.toggled = false;
        this.postUser = {};
        this.comment = { comment: "" };
        this.heart = true;
        this.taggedItem = false;
        this.finishedLoading = false;
        this.limit = 50;
        this.trackByName = function (index, item) {
            return item.commentid;
        };
        this.user = this.navParams.get('user');
    }
    ViewpostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loggedUser = this.firebaseService.userObject;
        this.firebaseService.getCommentLastId().snapshotChanges().subscribe(function (items) {
            _this.arrayLastid = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.arrayLastid.push(y);
            });
            _this.arrayLastid = _this.arrayLastid.filter(function (data) { return data.postid === _this.user['$key']; });
            if (_this.arrayLastid != 0) {
                var arrayLength = _this.arrayLastid.length;
                _this.arrayLastItem = _this.arrayLastid.slice(0);
                _this.lastId = _this.arrayLastItem[0].$key;
            }
        });
        console.log('ionViewDidLoad ViewpostPage');
        this.active = true;
        this.firebaseService.getLikePost().snapshotChanges().subscribe(function (items) {
            _this.arrayLikePosts = [];
            items.forEach(function (elements) {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                _this.liked = y;
                _this.arrayLikePosts.push(y);
            });
        });
        this.firebaseService.getUser().snapshotChanges().subscribe(function (res) {
            _this.arrayUser = [];
            var y = res.payload.toJSON();
            y['$key'] = res.key;
            _this.loginUser = y;
        });
        this.postComments = this.firebaseService.getMoreComments();
        var x = this.postComments.snapshotChanges().subscribe(function (items) {
            _this.arrayComments = [];
            _this.filteredArrayComments = [];
            items.forEach(function (elements) {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                _this.arrayComments.push(y);
            });
            _this.filteredArrayComments = _this.arrayComments;
            _this.filteredArrayComments = _this.arrayComments.filter(function (comments) { return comments.postid == _this.user['$key']; });
            _this.currentDate = new Date().getTime() / 1000;
            _this.filteredArrayComments.map(function (res) {
                var originalTime = res.time;
                _this.commentsArray = [];
                _this.users = res;
                if (_this.currentDate - res.time < 59) {
                    res.time = Math.round(_this.currentDate - res.time) + 's';
                }
                else if (_this.currentDate - res.time > 59 && _this.currentDate - res.time < 3599) {
                    res.time = Math.round((_this.currentDate - res.time) / 60) + 'm';
                }
                else if (_this.currentDate - res.time > 3599) {
                    res.time = Math.round((_this.currentDate - res.time) / 3600) + 'h';
                }
                var x = _this.firebaseService.getUsers(_this.users.userid).snapshotChanges().subscribe(function (items) {
                    var y = items.payload.toJSON();
                    y['$key'] = items.key;
                    _this.userProfile = y;
                    _this.commentObject = {
                        commentid: res.$key,
                        postid: res.postid,
                        userid: res.userid,
                        comment: res.comment,
                        image: _this.userProfile.image,
                        username: _this.userProfile.username,
                        time: res.time,
                        color: false,
                        taggedText: "",
                        originalTime: originalTime
                    };
                    var indexHarsh = _this.commentObject.comment.indexOf('#');
                    if (_this.commentObject.comment.indexOf('#') > -1) {
                        _this.taggedItem = true;
                        var indexSpace = _this.commentObject.comment.indexOf(' ', indexHarsh);
                        _this.taggedText = _this.commentObject.comment.substring(indexHarsh, indexSpace);
                        _this.commentObject.taggedText = _this.taggedText;
                    }
                    _this.commentsArray.push(_this.commentObject);
                    _this.commentsArray = _this.commentsArray.reverse();
                    _this.userId = _this.firebaseService.userKey;
                    _this.boundClass = {
                        heart: _this.heart
                    };
                    _this.commentObject.color = "not active";
                    for (var q = 0; q < _this.arrayLikePosts.length; q++) {
                        if (_this.arrayLikePosts[q].postid === _this.commentObject.$key) {
                            if (_this.arrayLikePosts[q].userid === _this.firebaseService.userKey) {
                                _this.commentObject.color = "active";
                            }
                        }
                        else {
                            console.log('no');
                        }
                    }
                });
            });
        });
    };
    ViewpostPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.currentDate = new Date().getTime() / 1000;
        this.commentss = this.firebaseService.getMoreComments(this.limit);
        var x = this.commentss.snapshotChanges().subscribe(function (items) {
            _this.arrayItems = [];
            items.forEach(function (elements) {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                _this.arrayItems.push(y);
            });
            _this.arrayItems.map(function (res) {
                if (_this.currentDate - res.time > 3600 * 12) {
                    _this.firebaseService.deleteComment(res.$key);
                }
            });
        });
    };
    ViewpostPage.prototype.deletePost = function (post) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            _this.firebaseService.deletePost(post.$key);
            _this.firebaseService.getComments().snapshotChanges().subscribe(function (items) {
                _this.deleteCommentArray = [];
                items.forEach(function (item) {
                    var y = item.payload.toJSON();
                    y["key"] = item.key;
                    _this.deleteCommentArray.push(y);
                });
                _this.deleteCommentArray = _this.deleteCommentArray.filter(function (data) { return data.postid == post.$key; });
                _this.deleteCommentArray.map(function (res) {
                    _this.firebaseService.deleteComment(res.key);
                });
            });
            _this.navCtrl.push('WallPage');
        });
    };
    ViewpostPage.prototype.deleteComment = function (comment) {
        var _this = this;
        console.log(comment.time);
        console.log(comment.$key);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            _this.firebaseService.deleteComment(comment["commentid"]);
            _this.firebaseService.deleteAlert((comment["originalTime"] * 1000).toString() + _this.firebaseService.userKey);
            _this.postComments = _this.firebaseService.getComments();
            var x = _this.postComments.snapshotChanges().subscribe(function (items) {
                _this.arrayComments = [];
                _this.filteredArrayComments = [];
                items.forEach(function (elements) {
                    var y = elements.payload.toJSON();
                    y['$key'] = elements.key;
                    _this.arrayComments.push(y);
                });
            });
            _this.firebaseService.getSinglePost(comment.postid).snapshotChanges().subscribe(function (item) {
                console.log(item);
                _this.arraySinglePost = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.arrayComments = _this.arrayComments.filter(function (data) { return data.postid == comment.postid; });
                y["comments"] = _this.arrayComments.length;
                _this.firebaseService.updatePost(y);
            });
        });
        loading.dismiss();
    };
    ViewpostPage.prototype.likePost = function (post) {
        console.log(post);
        var postLike;
        postLike = {
            userid: this.firebaseService.userKey,
            postid: post.$key,
            status: true
        };
        if (post["color"] != "active") {
            this.firebaseService.likePost(postLike);
            this.active = true;
            if (postLike.postid === post.$key) {
                if (postLike.userid === this.firebaseService.userKey) {
                    post["color"] = "active";
                    post.hearts += 1;
                    this.firebaseService.usersObject.points += 1;
                    this.firebaseService.updateUser2(this.firebaseService.usersObject);
                    this.firebaseService.updatePost(post);
                    var alerts = {
                        postid: post.$key,
                        postuserid: post.userid,
                        action: 'md-heart',
                        color: 'active',
                        status: true,
                        time: new Date().getTime() / 1000,
                        commentid: '',
                        userid: this.firebaseService.userKey,
                        image: this.firebaseService.userImage,
                        username: this.firebaseService.userName,
                        comment: '',
                        message: 'liked your post',
                        post: post.content
                    };
                    this.firebaseService.alertCustomId(alerts);
                }
            }
            else {
                console.log('no');
            }
        }
        else {
            post["color"] = "not active";
            this.firebaseService.deleteLikePost((post.$key + this.firebaseService.userKey).toString());
            this.firebaseService.deleteAlert(post.$key + this.firebaseService.userKey);
            post.hearts -= 1;
            this.firebaseService.updatePost(post);
        }
    };
    ViewpostPage.prototype.signOut = function () {
        console.log("Logged Out");
        this.viewCtrl.dismiss();
        this.firebaseService.logout();
        this.app.getRootNav().push("LoginFlatPage");
        localStorage.removeItem('userId');
    };
    ViewpostPage.prototype.textLength = function (str) {
        this.textLeft = 250 - str.length;
    };
    ViewpostPage.prototype.handleSelection = function (event) {
        this.message = this.message + " " + event.char;
    };
    ViewpostPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    ViewpostPage.prototype.commentPost = function (comment) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            comment.postid = _this.user['$key'];
            comment.userid = _this.firebaseService.userKey;
            comment.time = new Date().getTime() / 1000;
            _this.firebaseService.comment(comment);
            var alerts = {
                postid: _this.user['$key'],
                postuserid: _this.user['userid'],
                action: 'md-chatbubbles',
                color: 'activecomment',
                status: true,
                time: new Date().getTime() / 1000,
                commentid: '',
                userid: _this.firebaseService.userKey,
                image: _this.firebaseService.userImage,
                username: _this.firebaseService.userName,
                comment: '',
                message: 'commented on your post',
                post: comment.comment
            };
            _this.firebaseService.alertCustomId2(alerts);
            _this.postComments = _this.firebaseService.getComments();
            var x = _this.postComments.snapshotChanges().subscribe(function (items) {
                _this.arrayComments = [];
                _this.filteredArrayComments = [];
                items.forEach(function (elements) {
                    var y = elements.payload.toJSON();
                    y['$key'] = elements.key;
                    _this.arrayComments.push(y);
                });
            });
            _this.updatePost(comment);
        });
        loading.dismiss();
    };
    ViewpostPage.prototype.updatePost = function (comment) {
        var _this = this;
        this.firebaseService.getSinglePost(comment.postid).snapshotChanges().subscribe(function (item) {
            if (item.key != null) {
                _this.arraySinglePost = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.arrayComments = _this.arrayComments.filter(function (data) { return data.postid == comment.postid; });
                y["comments"] = _this.arrayComments.length;
                _this.firebaseService.usersObject.points += 1;
                _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
                _this.firebaseService.updatePost(y);
            }
        });
    };
    ViewpostPage.prototype.navTag = function () {
        var _this = this;
        var modal = this.modalCtrl.create('TagboardPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                data.name = data.name.replace(/ +/g, "");
                _this.comment.comment = _this.comment.comment + ' #' + data.name.toLowerCase() + ' ';
            }
        });
        modal.present();
    };
    //optional pagination method
    ViewpostPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.limit += 50;
        setTimeout(function () {
            _this.ionViewDidLoad();
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    ViewpostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewpost',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\viewpost\viewpost.html"*/'<!--\n  Generated template for the ViewpostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons class="button">\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n        <ion-icon class="icon-color2" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons start>\n      <button (click)="signOut()" ion-button icon-only>\n        <ion-icon name="ios-exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class="background-image" no-padding>\n  <div class="bg-color bg-size">\n    <!-- <ion-row>\n      <ion-col> <button (click)="closePost()" ion-button icon-only menuToggle>\n          <ion-icon class="icon-color" name="md-close"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row> -->\n    <ion-card no-padding>\n      <ion-row>\n        <!-- <ion-col col-1> -->\n        <ion-item>\n          <ion-avatar item-left>\n            <img *ngIf="user.image!=\'\'" [src]="user.image" [alt]="user.username" class="avatar" />\n            <img *ngIf="user.image==\'\'" [alt]="user.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n              height="60">\n          </ion-avatar>\n        </ion-item>\n        <!-- </ion-col> -->\n        <ion-col align-self-start>\n          <ion-card-header>\n            <span class="user-name"> {{user.username}} </span> <span class="time"> - {{user.time}}</span>\n          </ion-card-header>\n          <ion-card-content class="posts">\n            {{user.content}} <span *ngIf="user.content.indexOf(\'#\') > -1" class="tag-color">{{user.taggedText}}</span>\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear small color="light" (click)="likePost(user)">\n            <ion-icon name="md-heart" [ngClass]="{\'heart\':user.color===\'active\'}" class="icon-color"></ion-icon>\n            <div class="icon-num">{{user.hearts}}</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <button ion-button icon-left clear small color="light" (click)="deletePost(user)">\n            <ion-icon name="md-trash" class="icon-color"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card class="card-color">\n      <ion-row>\n        <ion-col>\n          <img *ngIf="loginUser.image!=\'\'" [src]="loginUser.image" class="avatar" />\n          <img *ngIf="loginUser.image==\'\'" [alt]="loginUser.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n            height="60">\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <form margin-top>\n          <div input-field>\n            <ion-item no-padding class="item-color">\n              <ion-textarea maxLength="250" class="text-input" type="text" placeholder="Comment on post" [(ngModel)]="comment.comment"\n                [ngModelOptions]="{standalone: true}" (ngModelChange)="textLength($event)"></ion-textarea>\n            </ion-item>\n          </div>\n          <ion-row>\n            <ion-col>\n              <button item-left class="tag" ion-button small (click)="navTag()">\n                Tag It?\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n              <span item-left class="icon-num2"> {{textLeft}} </span>\n              <button ion-button medium (click)="commentPost(comment)" color="secondary">\n                Comment\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-card-content>\n    </ion-card>\n    <div class="comment">\n      COMMENTS\n    </div>\n    <ion-content no-scroll>\n      <ion-card [virtualScroll]="commentsArray" [virtualTrackBy]="trackByName">\n        <ion-row *virtualItem="let comment">\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col align-self-start>\n            <ion-card-header>\n              <ion-item class="col-align">\n                <ion-avatar item-left>\n                  <img *ngIf="comment.image!=\'\'" [src]="comment.image" [alt]="comment.username" class="avatar" />\n                  <img *ngIf="comment.image==\'\'" [alt]="comment.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n                    height="60">\n                </ion-avatar>\n              </ion-item>\n              <span class="user-name"> {{comment.username}} </span> <span class="time"> - {{comment.time}} </span>\n              <button *ngIf="comment.userid==userId" ion-button icon-left class="trash-align" clear small color="light" (click)="deleteComment(comment)">\n                <ion-icon name="md-trash" class="icon-color"></ion-icon>\n              </button>\n            </ion-card-header>\n            <ion-card-content class="posts">\n              {{comment.comment}} <span *ngIf="comment.comment.indexOf(\'#\') > -1" class="tag-color">{{comment.taggedText}}</span>\n              <hr class="divide-line">\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-content>\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\viewpost\viewpost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ViewpostPage);
    return ViewpostPage;
}());

//# sourceMappingURL=viewpost.js.map

/***/ })

});
//# sourceMappingURL=7.js.map