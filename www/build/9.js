webpackJsonp([9],{554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"ViewalertPageModule",function(){return a});var o=n(0),i=n(16),s=n(588),r=this&&this.__decorate||function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},a=function(){function e(){}return e=r([Object(o.NgModule)({declarations:[s.a],imports:[i.n.forChild(s.a)]})],e)}()},588:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(0),i=n(16),s=n(90),r=this&&this.__decorate||function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t,n,o,i,s){this.navCtrl=e,this.loadingCtrl=t,this.firebaseService=n,this.modalCtrl=o,this.navParams=i,this.viewCtrl=s,this.notify=[],this.posts=[],this.comments=[],this.loginUser={},this.textLeft=250,this.message="",this.toggled=!1,this.heart=!0,this.comment={comment:""},this.taggedItem=!1,this.limit=50,this.user=[],this.trackByName=function(e,t){return t.commentid},this.notify=this.navParams.get("notify"),console.log(this.notify),this.user=this.navParams.get("user"),this.post=this.navParams.get("post"),this.currentDate=(new Date).getTime()/1e3,this.currentDate-this.post.time<59?(this.seconds=!0,this.post.time=Math.round(this.currentDate-this.post.time)+"s"):this.currentDate-this.post.time>59&&this.currentDate-this.post.time<3599?(this.minutes=!0,this.post.time=Math.round((this.currentDate-this.post.time)/60)+"m"):this.currentDate-this.post.time>3599&&(this.hours=!0,this.post.time=Math.round((this.currentDate-this.post.time)/3600)+"h"),console.log(this.post)}return e.prototype.ionViewDidLoad=function(){var e=this;console.log("ionViewDidLoad ViewalertPage"),void 0==this.firebaseService.getUser()&&null==this.firebaseService.getUser()||this.firebaseService.getUser().snapshotChanges().subscribe(function(t){e.arrayItem=[];var n=t.payload.toJSON();n.$key=t.key,e.loginUser=n}),this.firebaseService.getCommentLastId().snapshotChanges().subscribe(function(t){if(e.arrayLastid=[],t.forEach(function(t){var n=t.payload.toJSON();n.$key=t.key,e.arrayLastid.push(n)}),e.arrayLastid=e.arrayLastid.filter(function(t){return t.postid===e.post.$key}),0!=e.arrayLastid){e.arrayLastItem=e.arrayLastid.slice(0),e.lastId=e.arrayLastItem[0].$key}}),this.active=!0,this.firebaseService.getLikePost().snapshotChanges().subscribe(function(t){e.arrayLikePosts=[],t.forEach(function(t){var n=t.payload.toJSON();n.$key=t.key,e.liked=n,e.arrayLikePosts.push(n)})}),this.firebaseService.getUser().snapshotChanges().subscribe(function(t){e.arrayUser=[];var n=t.payload.toJSON();n.$key=t.key,e.loginUser=n}),this.postComments=this.firebaseService.getMoreComments();this.postComments.snapshotChanges().subscribe(function(t){e.arrayComments=[],e.filteredArrayComments=[],t.forEach(function(t){var n=t.payload.toJSON();n.$key=t.key,e.arrayComments.push(n)}),e.filteredArrayComments=e.arrayComments,e.filteredArrayComments=e.arrayComments.filter(function(t){return t.postid==e.post.$key}),e.currentDate=(new Date).getTime()/1e3,e.filteredArrayComments.map(function(t){var n=t.time;e.commentsArray=[],e.users=t,e.currentDate-t.time<59?t.time=Math.round(e.currentDate-t.time)+"s":e.currentDate-t.time>59&&e.currentDate-t.time<3599?t.time=Math.round((e.currentDate-t.time)/60)+"m":e.currentDate-t.time>3599&&(t.time=Math.round((e.currentDate-t.time)/3600)+"h");e.firebaseService.getUsers(e.users.userid).snapshotChanges().subscribe(function(o){var i=o.payload.toJSON();i.$key=o.key,e.userProfile=i,e.commentObject={commentid:t.$key,postid:t.postid,userid:t.userid,comment:t.comment,image:e.userProfile.image,username:e.userProfile.username,time:t.time,color:!1,taggedText:"",originalTime:n};var s=e.commentObject.comment.indexOf("#");if(e.commentObject.comment.indexOf("#")>-1){e.taggedItem=!0;var r=e.commentObject.comment.indexOf(" ",s);e.taggedText=e.commentObject.comment.substring(s,r),e.commentObject.taggedText=e.taggedText}e.commentsArray.push(e.commentObject),e.commentsArray=e.commentsArray.reverse(),e.boundClass={heart:e.heart},e.commentObject.color="not active";for(var a=0;a<e.arrayLikePosts.length;a++)e.arrayLikePosts[a].postid===e.commentObject.$key?e.arrayLikePosts[a].userid===e.firebaseService.userKey&&(e.commentObject.color="active"):console.log("no")})})})},e.prototype.ionViewDidEnter=function(){},e.prototype.deleteComment=function(e){var t=this;console.log(e.time),console.log(e.$key);var n=this.loadingCtrl.create({content:"Please wait..."});n.present().then(function(n){t.firebaseService.deleteComment(e.commentid),t.firebaseService.deleteAlert((1e3*e.originalTime).toString()+t.firebaseService.userKey),t.postComments=t.firebaseService.getComments();t.postComments.snapshotChanges().subscribe(function(e){t.arrayComments=[],t.filteredArrayComments=[],e.forEach(function(e){var n=e.payload.toJSON();n.$key=e.key,t.arrayComments.push(n)})});t.firebaseService.getSinglePost(e.postid).snapshotChanges().subscribe(function(n){console.log(n),t.arraySinglePost=[];var o=n.payload.toJSON();o.$key=n.key,t.arrayComments=t.arrayComments.filter(function(t){return t.postid==e.postid}),o.comments=t.arrayComments.length,t.firebaseService.updatePost(o)})}),n.dismiss(),this.viewCtrl.dismiss()},e.prototype.likePost=function(e){console.log(e);var t;if(t={userid:this.firebaseService.userKey,postid:e.$key,status:!0},"active"!=e.color)if(this.firebaseService.likePost(t),this.active=!0,t.postid===e.$key){if(t.userid===this.firebaseService.userKey){e.color="active",e.hearts+=1,this.firebaseService.updatePost(e);var n={postid:e.$key,postuserid:e.userid,action:"md-heart",color:"active",time:(new Date).getTime()/1e3,commentid:"",userid:this.firebaseService.userKey,image:this.firebaseService.userImage,username:this.firebaseService.userName,comment:"",message:"liked your post",post:e.content};this.firebaseService.alertCustomId(n)}}else console.log("no");else e.color="not active",this.firebaseService.deleteLikePost((e.$key+this.firebaseService.userKey).toString()),this.firebaseService.deleteAlert(e.$key+this.firebaseService.userKey),e.hearts-=1,this.firebaseService.updatePost(e);this.viewCtrl.dismiss()},e.prototype.deletePost=function(e){this.deletePostComment(e)},e.prototype.deletePostComment=function(e){var t=this;this.loadingCtrl.create({content:"Please wait..."}).present().then(function(n){t.firebaseService.deletePost(e.$key),t.navCtrl.push("AlertsPage")})},e.prototype.commentPost=function(e){var t=this,n=this.loadingCtrl.create({content:"Please wait..."});n.present().then(function(n){e.postid=t.post.$key,e.userid=t.firebaseService.userKey,e.time=(new Date).getTime()/1e3,t.firebaseService.comment(e);var o={postid:t.post.$key,action:"md-chatbubbles",color:"activecomment",time:(new Date).getTime()/1e3,commentid:"",postuserid:t.post.userid,userid:t.firebaseService.userKey,image:t.firebaseService.userImage,username:t.firebaseService.userName,comment:"",message:"commented on your post",post:e.comment};t.firebaseService.alertCustomId2(o),t.postComments=t.firebaseService.getComments();t.postComments.snapshotChanges().subscribe(function(e){t.arrayComments=[],t.filteredArrayComments=[],e.forEach(function(e){var n=e.payload.toJSON();n.$key=e.key,t.arrayComments.push(n)})});t.updatePost(e)}),n.dismiss()},e.prototype.updatePost=function(e){var t=this;this.firebaseService.getSinglePost(e.postid).snapshotChanges().subscribe(function(n){if(null!=n.key){t.arraySinglePost=[];var o=n.payload.toJSON();o.$key=n.key,t.arrayComments=t.arrayComments.filter(function(t){return t.postid==e.postid}),o.comments=t.arrayComments.length,t.firebaseService.updatePost(o)}})},e.prototype.closePost=function(){this.viewCtrl.dismiss()},e.prototype.textLength=function(e){this.textLeft=250-e.length,console.log(this.textLeft)},e.prototype.handleSelection=function(e){this.message=this.message+" "+e.char,console.log(this.message)},e.prototype.navTag=function(){var e=this,t=this.modalCtrl.create("TagboardPage");t.onDidDismiss(function(t){t&&(t.name=t.name.replace(/ +/g,""),e.message=e.message+" #"+t.name.toLowerCase())}),t.present()},e=r([Object(o.Component)({selector:"page-viewalert",template:'\x3c!--\n  Generated template for the ViewalertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n--\x3e\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons class="button" end>\n      <button (click)="closePost()" ion-button icon-only menuToggle>\n        <ion-icon class="icon-color" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title class="title">Alert</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class="background-image" no-padding>\n  <div class="bg-color bg-size">\n    <ion-card no-padding>\n      <ion-row>\n        \x3c!-- <ion-col col-1> --\x3e\n        <ion-item>\n          <ion-avatar item-left>\n            <img *ngIf="user.image!=\'\'" [src]="user.image" [alt]="user.username" class="avatar" />\n            <img *ngIf="user.image==\'\'" [alt]="user.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n              height="60">\n          </ion-avatar>\n        </ion-item>\n        \x3c!-- </ion-col> --\x3e\n        <ion-col align-self-start>\n          <ion-card-header>\n            <span class="user-name"> {{user.username}} </span> <span class="time"> - {{post.time}} </span>\n          </ion-card-header>\n          <ion-card-content class="posts">\n            {{post.content}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        \x3c!-- <ion-col>\n          <button ion-button icon-left clear (click)="likePost(post)" small color="light">\n            <ion-icon [ngClass]="{\'heart\':post.color===\'active\'}" name="md-heart" class="icon-color"></ion-icon>\n            <div class="icon-num">{{post.hearts}}</div>\n          </button>\n        </ion-col> --\x3e\n       \x3c!--  <ion-col>\n          <button ion-button icon-left (click)="likePost(notify)" clear small color="light">\n            <ion-icon name="md-chatbubbles" class="icon-color"></ion-icon>\n            <div class="icon-num">{{notify.comment}}</div>\n          </button>\n        </ion-col> --\x3e\n       \x3c!--  <ion-col>\n          <button ion-button icon-left clear small color="light">\n            <ion-icon name="md-share-alt" class="icon-color"></ion-icon>\n            <div class="icon-num">{{notify.repost}}</div>\n          </button>\n        </ion-col> --\x3e\n       \x3c!--  <ion-col center text-center>\n          <button ion-button icon-left (click)="deletePost(post)" clear small color="light">\n            <ion-icon name="md-trash" class="icon-color"></ion-icon>\n          </button>\n        </ion-col> --\x3e\n      </ion-row>\n    </ion-card>\n   \x3c!--  <ion-card class="card-color">\n      <ion-row>\n        <ion-col>\n          <img *ngIf="loginUser.image!=\'\'" [src]="loginUser.image" [alt]="loginUser.username" class="avatar" />\n          <img *ngIf="loginUser.image==\'\'" [alt]="loginUser.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n            height="60">\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <form margin-top>\n          <div input-field>\n            <ion-item no-padding class="item-color">\n              <ion-textarea maxLength="250" class="text-input" type="text" placeholder="Comment on post" [(ngModel)]="message" [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="textLength($event)"></ion-textarea>\n            </ion-item>\n          </div>\n          <ion-row>\n            <ion-col>\n              <button item-left class="tag" ion-button small (click)="navTag()">\n                Tag It?\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n              <span item-left class="icon-num"> {{textLeft}} </span>\n              <button ion-button (click)="commentPost(comment)" medium color="secondary">\n                Comment\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-card-content>\n    </ion-card> --\x3e\n    <div class="comment">\n      COMMENTS\n    </div>\n    <ion-content no-scroll>\n      <ion-card [virtualScroll]="commentsArray" [virtualTrackBy]="trackByName">\n        <ion-row *virtualItem="let comment">\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col align-self-start>\n            <ion-card-header>\n              <ion-item class="col-align">\n                <ion-avatar item-left>\n                  <img *ngIf="comment.image!=\'\'" [src]="comment.image" [alt]="comment.username" class="avatar" />\n                  <img *ngIf="comment.image==\'\'" [alt]="comment.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n                    height="60">\n                </ion-avatar>\n              </ion-item>\n              <span class="user-name"> {{comment.username}} </span> <span class="time"> - {{comment.time}} </span>\n             \x3c!--  <button ion-button icon-left class="trash-align" clear small color="light" (click)="deleteComment(comment)">\n                <ion-icon name="md-trash" class="icon-color"></ion-icon>\n              </button> --\x3e\n            </ion-card-header>\n            <ion-card-content class="posts">\n              {{comment.comment}} <span *ngIf="comment.comment.indexOf(\'#\') > -1" class="tag-color">{{comment.taggedText}}</span>\n              <hr class="divide-line">\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-content>\n  </div>\n</ion-content>'}),a("design:paramtypes",[i.q,i.o,s.a,i.p,i.r,i.x])],e)}()}});