webpackJsonp([13],{550:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"TabsPageModule",function(){return s});var a=o(0),n=o(16),r=o(584),i=this&&this.__decorate||function(t,e,o,a){var n,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(r<3?n(i):r>3?n(e,o,i):n(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},s=function(){function t(){}return t=i([Object(a.NgModule)({declarations:[r.a],imports:[n.n.forChild(r.a)]})],t)}()},584:function(t,e,o){"use strict";o.d(e,"a",function(){return c});var a=o(0),n=o(16),r=o(90),i=this&&this.__decorate||function(t,e,o,a){var n,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(r<3?n(i):r>3?n(e,o,i):n(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,o){this.navCtrl=t,this.navParams=e,this.firebaseService=o,this.tab1Root="WallPage",this.tab2Root="AlertsPage",this.tab3Root="ProfilePage",this.tab4Root="BoardsPage",this.show=!1,this.mySelectedIndex=e.data.tabIndex||0}return t.prototype.ionViewDidEnter=function(){var t=this;this.firebaseService.getAlerts().snapshotChanges().subscribe(function(e){t.arrayItems=[],e.forEach(function(e){var o=e.payload.toJSON();o.$key=e.key,t.arrayItems.push(o)}),t.arrayItems=t.arrayItems.filter(function(e){return 1==e.status&&e.postuserid==t.firebaseService.userKey}),t.arrayItemsLength=t.arrayItems.length,t.arrayItems.forEach(function(e){1==e.status&&(t.show=!0)})})},t=i([Object(a.Component)({selector:"page-tabs",template:'\x3c!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n--\x3e\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Wall" tabIcon="md-list-box"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Alerts" [tabBadge]="arrayItemsLength" tabIcon="md-notifications"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="md-person"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Boards" tabIcon="md-albums"></ion-tab>\n</ion-tabs>\n'}),s("design:paramtypes",[n.q,n.r,r.a])],t)}()}});