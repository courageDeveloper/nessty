webpackJsonp([9],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewalertPageModule", function() { return ViewalertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewalert__ = __webpack_require__(588);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewalertPageModule = /** @class */ (function () {
    function ViewalertPageModule() {
    }
    ViewalertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewalert__["a" /* ViewalertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewalert__["a" /* ViewalertPage */]),
            ],
        })
    ], ViewalertPageModule);
    return ViewalertPageModule;
}());

//# sourceMappingURL=viewalert.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewalertPage; });
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
 * Generated class for the ViewalertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewalertPage = /** @class */ (function () {
    function ViewalertPage(navCtrl, loadingCtrl, firebaseService, modalCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notify = [];
        this.posts = [];
        this.comments = [];
        this.loginUser = {};
        this.textLeft = 250;
        this.message = "";
        this.toggled = false;
        this.heart = true;
        this.comment = { comment: "" };
        this.taggedItem = false;
        this.limit = 50;
        this.user = [];
        this.trackByName = function (index, item) {
            return item.commentid;
        };
        this.notify = this.navParams.get('notify');
        console.log(this.notify);
        this.user = this.navParams.get('user');
        this.post = this.navParams.get('post');
        //Change time to hours, minutes, seconds
        this.currentDate = new Date().getTime() / 1000;
        if (this.currentDate - this.post['time'] < 59) {
            this.seconds = true;
            this.post['time'] = Math.round(this.currentDate - this.post['time']) + 's';
        }
        else if (this.currentDate - this.post['time'] > 59 && this.currentDate - this.post['time'] < 3599) {
            this.minutes = true;
            this.post['time'] = Math.round((this.currentDate - this.post['time']) / 60) + 'm';
        }
        else if (this.currentDate - this.post['time'] > 3599) {
            this.hours = true;
            this.post['time'] = Math.round((this.currentDate - this.post['time']) / 3600) + 'h';
        }
        console.log(this.post);
    }
    ViewalertPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ViewalertPage');
        if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
            this.firebaseService.getUser().snapshotChanges().subscribe(function (item) {
                _this.arrayItem = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.loginUser = y;
            });
        }
        this.firebaseService.getCommentLastId().snapshotChanges().subscribe(function (items) {
            _this.arrayLastid = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.arrayLastid.push(y);
            });
            _this.arrayLastid = _this.arrayLastid.filter(function (data) { return data.postid === _this.post['$key']; });
            if (_this.arrayLastid != 0) {
                var arrayLength = _this.arrayLastid.length;
                _this.arrayLastItem = _this.arrayLastid.slice(0);
                _this.lastId = _this.arrayLastItem[0].$key;
            }
        });
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
            _this.filteredArrayComments = _this.arrayComments.filter(function (comments) { return comments.postid == _this.post['$key']; });
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
    ViewalertPage.prototype.ionViewDidEnter = function () {
        /* this.currentDate = new Date().getTime() / 1000;
        this.commentss = this.firebaseService.getMoreComments(this.limit);
    
        var x = this.commentss.snapshotChanges().subscribe(items => {
          this.arrayItems = [];
          items.forEach(elements => {
            var y = elements.payload.toJSON();
            y['$key'] = elements.key;
            this.arrayItems.push(y);
          })
          this.arrayItems.map(res => {
            if (this.currentDate - res.time > 3600 * 12) {
              this.firebaseService.deleteComment(res.$key);
            }
          });
        }); */
    };
    ViewalertPage.prototype.deleteComment = function (comment) {
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
        this.viewCtrl.dismiss();
    };
    ViewalertPage.prototype.likePost = function (post) {
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
                    this.firebaseService.updatePost(post);
                    var alerts = {
                        postid: post.$key,
                        postuserid: post.userid,
                        action: 'md-heart',
                        color: 'active',
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
        this.viewCtrl.dismiss();
    };
    ViewalertPage.prototype.deletePost = function (post) {
        this.deletePostComment(post);
    };
    ViewalertPage.prototype.deletePostComment = function (post) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            _this.firebaseService.deletePost(post.$key);
            /* this.viewCtrl.dismiss();
            this.firebaseService.getComments().snapshotChanges().subscribe(items => {
              this.deleteCommentArray = [];
              items.forEach(item => {
                var y = item.payload.toJSON();
                y["key"] = item.key;
                this.deleteCommentArray.push(y);
              });
              this.deleteCommentArray = this.deleteCommentArray.filter(data => data.postid == post.$key);
              this.deleteCommentArray.map(res => {
                this.firebaseService.deleteComment(res.key);
              })
            }) */
            _this.navCtrl.push('AlertsPage');
        });
    };
    ViewalertPage.prototype.commentPost = function (comment) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            comment.postid = _this.post['$key'];
            comment.userid = _this.firebaseService.userKey;
            comment.time = new Date().getTime() / 1000;
            _this.firebaseService.comment(comment);
            var alerts = {
                postid: _this.post['$key'],
                action: 'md-chatbubbles',
                color: 'activecomment',
                time: new Date().getTime() / 1000,
                commentid: '',
                postuserid: _this.post['userid'],
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
    ViewalertPage.prototype.updatePost = function (comment) {
        var _this = this;
        this.firebaseService.getSinglePost(comment.postid).snapshotChanges().subscribe(function (item) {
            if (item.key != null) {
                _this.arraySinglePost = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.arrayComments = _this.arrayComments.filter(function (data) { return data.postid == comment.postid; });
                y["comments"] = _this.arrayComments.length;
                _this.firebaseService.updatePost(y);
            }
        });
    };
    ViewalertPage.prototype.closePost = function () {
        this.viewCtrl.dismiss();
    };
    ViewalertPage.prototype.textLength = function (str) {
        this.textLeft = 250 - str.length;
        console.log(this.textLeft);
    };
    ViewalertPage.prototype.handleSelection = function (event) {
        this.message = this.message + " " + event.char;
        console.log(this.message);
    };
    ViewalertPage.prototype.navTag = function () {
        var _this = this;
        var modal = this.modalCtrl.create('TagboardPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                data.name = data.name.replace(/ +/g, "");
                _this.message = _this.message + ' #' + data.name.toLowerCase();
            }
        });
        modal.present();
    };
    ViewalertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viewalert',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\viewalert\viewalert.html"*/'<!--\n  Generated template for the ViewalertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons class="button" end>\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n        <ion-icon class="icon-color" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="title">Alert</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class="background-image" no-padding>\n  <div class="bg-color bg-size">\n    <ion-card no-padding>\n      <ion-row>\n        <!-- <ion-col col-1> -->\n        <ion-item>\n          <ion-avatar item-left>\n            <img *ngIf="user.image!=\'\'" [src]="user.image" [alt]="user.username" class="avatar" />\n            <img *ngIf="user.image==\'\'" [alt]="user.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n              height="60">\n          </ion-avatar>\n        </ion-item>\n        <!-- </ion-col> -->\n        <ion-col align-self-start>\n          <ion-card-header>\n            <span class="user-name"> {{user.username}} </span> <span class="time"> - {{post.time}} </span>\n          </ion-card-header>\n          <ion-card-content class="posts">\n            {{post.content}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <!-- <ion-col>\n          <button ion-button icon-left clear (click)="likePost(post)" small color="light">\n            <ion-icon [ngClass]="{\'heart\':post.color===\'active\'}" name="md-heart" class="icon-color"></ion-icon>\n            <div class="icon-num">{{post.hearts}}</div>\n          </button>\n        </ion-col> -->\n       <!--  <ion-col>\n          <button ion-button icon-left (click)="likePost(notify)" clear small color="light">\n            <ion-icon name="md-chatbubbles" class="icon-color"></ion-icon>\n            <div class="icon-num">{{notify.comment}}</div>\n          </button>\n        </ion-col> -->\n       <!--  <ion-col>\n          <button ion-button icon-left clear small color="light">\n            <ion-icon name="md-share-alt" class="icon-color"></ion-icon>\n            <div class="icon-num">{{notify.repost}}</div>\n          </button>\n        </ion-col> -->\n       <!--  <ion-col center text-center>\n          <button ion-button icon-left (click)="deletePost(post)" clear small color="light">\n            <ion-icon name="md-trash" class="icon-color"></ion-icon>\n          </button>\n        </ion-col> -->\n      </ion-row>\n    </ion-card>\n   <!--  <ion-card class="card-color">\n      <ion-row>\n        <ion-col>\n          <img *ngIf="loginUser.image!=\'\'" [src]="loginUser.image" [alt]="loginUser.username" class="avatar" />\n          <img *ngIf="loginUser.image==\'\'" [alt]="loginUser.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n            height="60">\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <form margin-top>\n          <div input-field>\n            <ion-item no-padding class="item-color">\n              <ion-textarea maxLength="250" class="text-input" type="text" placeholder="Comment on post" [(ngModel)]="message" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="textLength($event)"></ion-textarea>\n            </ion-item>\n          </div>\n          <ion-row>\n            <ion-col>\n              <button item-left class="tag" ion-button small (click)="navTag()">\n                Tag It?\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n              <span item-left class="icon-num"> {{textLeft}} </span>\n              <button ion-button (click)="commentPost(comment)" medium color="secondary">\n                Comment\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-card-content>\n    </ion-card> -->\n    <div class="comment">\n      COMMENTS\n    </div>\n    <ion-content no-scroll>\n      <ion-card [virtualScroll]="commentsArray" [virtualTrackBy]="trackByName">\n        <ion-row *virtualItem="let comment">\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col align-self-start>\n            <ion-card-header>\n              <ion-item class="col-align">\n                <ion-avatar item-left>\n                  <img *ngIf="comment.image!=\'\'" [src]="comment.image" [alt]="comment.username" class="avatar" />\n                  <img *ngIf="comment.image==\'\'" [alt]="comment.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n                    height="60">\n                </ion-avatar>\n              </ion-item>\n              <span class="user-name"> {{comment.username}} </span> <span class="time"> - {{comment.time}} </span>\n             <!--  <button ion-button icon-left class="trash-align" clear small color="light" (click)="deleteComment(comment)">\n                <ion-icon name="md-trash" class="icon-color"></ion-icon>\n              </button> -->\n            </ion-card-header>\n            <ion-card-content class="posts">\n              {{comment.comment}} <span *ngIf="comment.comment.indexOf(\'#\') > -1" class="tag-color">{{comment.taggedText}}</span>\n              <hr class="divide-line">\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-content>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\viewalert\viewalert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ViewalertPage);
    return ViewalertPage;
}());

//# sourceMappingURL=viewalert.js.map

/***/ })

});
//# sourceMappingURL=9.js.map