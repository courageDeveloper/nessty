webpackJsonp([11],{552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"verifiedPageModule",function(){return a});var o=n(0),i=n(16),r=n(586),c=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},a=function(){function e(){}return e=c([Object(o.NgModule)({declarations:[r.a],imports:[i.n.forChild(r.a)]})],e)}()},586:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(0),i=n(16),r=n(90),c=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t,n){this.navCtrl=e,this.navParams=t,this.firebaseService=n}return e.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad verifiedPage"),console.log(this.firebaseService.userObject)},e.prototype.login=function(){this.navCtrl.push("LoginFlatPage")},e=c([Object(o.Component)({selector:"page-verified",template:'\x3c!--\n  Generated template for the verifiedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n--\x3e\n\x3c!-- Themes  register-flat--\x3e\n<ion-content class="background-image">\n  <ion-grid no-padding class="bg-color">\n\n    \x3c!-- Section form>--\x3e\n    <ion-row class="wlm-msg" align-items-start>\n      <ion-col col-12 align-self-baseline offset-1 col-md-6 offset-md-3>\n        <ion-list text-center>\n          <img src="assets/images/Nesstynew.png" class="align-img" width="150px" height="150px" />\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div>\n      <p class="align-text"><strong>Your email has been successfully verified!, Proceed to login to Nessty<br><a class="verify" (click)="login()">Login</a>\n        </strong></p>\n    </div>\n  </ion-grid>\n</ion-content>'}),a("design:paramtypes",[i.q,i.r,r.a])],e)}()}});