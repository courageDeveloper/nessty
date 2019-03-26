webpackJsonp([24],{

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/login/login-flat/login-flat.module": [
		535,
		23
	],
	"../pages/alerts/alerts.module": [
		536,
		5
	],
	"../pages/boards/boards.module": [
		537,
		4
	],
	"../pages/boardselect/boardselect.module": [
		538,
		22
	],
	"../pages/editprofile/editprofile.module": [
		539,
		0
	],
	"../pages/firstpost/firstpost.module": [
		540,
		21
	],
	"../pages/home-page/home-page.module": [
		541,
		20
	],
	"../pages/login-flat-page/login-flat-page.module": [
		542,
		1
	],
	"../pages/password/password.module": [
		543,
		19
	],
	"../pages/passwordreseted/passwordreseted.module": [
		544,
		18
	],
	"../pages/post/post.module": [
		545,
		17
	],
	"../pages/profile/profile.module": [
		546,
		3
	],
	"../pages/register/register.module": [
		547,
		16
	],
	"../pages/resetpassword/resetpassword.module": [
		548,
		15
	],
	"../pages/resetrequest/resetrequest.module": [
		549,
		14
	],
	"../pages/tabs/tabs.module": [
		550,
		13
	],
	"../pages/tagboard/tagboard.module": [
		551,
		12
	],
	"../pages/verified/verified.module": [
		552,
		11
	],
	"../pages/verify/verify.module": [
		553,
		10
	],
	"../pages/viewalert/viewalert.module": [
		554,
		9
	],
	"../pages/viewpic/viewpic.module": [
		555,
		8
	],
	"../pages/viewpost/viewpost.module": [
		556,
		7
	],
	"../pages/wall/wall.module": [
		558,
		2
	],
	"../pages/welcome/welcome.module": [
		557,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service__ = __webpack_require__(90);
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
 .
 */







var HttpService = /** @class */ (function () {
    function HttpService(http, firebaseService, httpClient) {
        this.http = http;
        this.firebaseService = firebaseService;
        this.httpClient = httpClient;
        this.page = 1;
    }
    Object.defineProperty(HttpService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    HttpService.prototype.sendData = function (email) {
        var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    HttpService.prototype.getBoards = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=" + this.page + "&categories=707+718+720+715+714+717+711+721+727+713+712+719+728+722", { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.errorMessage = err.json();
            console.log(err.json());
            throw err;
        }));
    };
    HttpService.prototype.getHeaders = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=" + this.page + "&categories=707+718+720+715+714+717+711+721+727+713+712+719+728+722", { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.errorMessage = err.json();
            console.log(err.json());
            throw err;
        }));
    };
    HttpService.prototype.getCategories = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://www.healthbootcamps.com/wp-json/wp/v2/categories?include=707+718+720+715+714+717+711+721+727+713+712+719+728+722&per_page=100", { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.errorMessage = err.json();
            console.log(err.json());
            throw err;
        }));
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = {
            "duration": 1000,
            "position": "buttom"
        };
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["v" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(441);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web_animations_js_web_animations_min__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web_animations_js_web_animations_min__);

//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loading_service__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_tooltips__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_img_viewer__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyAvmO6mCpbRBgIyMNub0iZncrwzXNLGtfA",
    authDomain: "nessty-be23f.firebaseapp.com",
    databaseURL: "https://nessty-be23f.firebaseio.com",
    projectId: "nessty-be23f",
    storageBucket: "nessty-be23f.appspot.com",
    messagingSenderId: "744746575299"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/login/login-flat/login-flat.module#LoginFlatModule', name: 'LoginFlat', segment: 'login-flat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alerts/alerts.module#AlertsPageModule', name: 'AlertsPage', segment: 'alerts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boards/boards.module#BoardsPageModule', name: 'BoardsPage', segment: 'boards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boardselect/boardselect.module#BoardselectPageModule', name: 'BoardselectPage', segment: 'boardselect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstpost/firstpost.module#FirstpostPageModule', name: 'FirstpostPage', segment: 'firstpost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-page/home-page.module#HomePageModule', name: 'HomePage', segment: 'home-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-flat-page/login-flat-page.module#LoginFlatPageModule', name: 'LoginFlatPage', segment: 'login-flat-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passwordreseted/passwordreseted.module#passwordresetedPageModule', name: 'passwordresetedPage', segment: 'passwordreseted', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetrequest/resetrequest.module#resetrequestPageModule', name: 'resetrequestPage', segment: 'resetrequest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tagboard/tagboard.module#TagboardPageModule', name: 'TagboardPage', segment: 'tagboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verified/verified.module#verifiedPageModule', name: 'verifiedPage', segment: 'verified', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#verifyPageModule', name: 'verifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewalert/viewalert.module#ViewalertPageModule', name: 'ViewalertPage', segment: 'viewalert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewpic/viewpic.module#ViewpicPageModule', name: 'ViewpicPage', segment: 'viewpic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewpost/viewpost.module#ViewpostPageModule', name: 'ViewpostPage', segment: 'viewpost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wall/wall.module#WallPageModule', name: 'WallPage', segment: 'wall', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_11__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service__["a" /* FirebaseServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_HttpService__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_mail_chimp_service__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase_dynamic_links_ngx__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, httpService, alertCtrl, mailChimpService, firebaseDynamicLinks, firebaseService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.mailChimpService = mailChimpService;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this.firebaseService = firebaseService;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.rootPage = 'RegisterPage';
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
        this.userId = localStorage.getItem('userId');
        console.log(this.userId);
        this.emailVerification = JSON.parse(localStorage.getItem('emailVerification'));
        console.log(this.emailVerification);
        if (this.userId != undefined || this.userId != null) {
            this.rootPage = 'TabsPage';
        }
        else {
            if (this.emailVerification == undefined || this.emailVerification == null) {
                this.rootPage = 'RegisterPage';
            }
            else if (this.emailVerification == false) {
                this.rootPage = 'verifyPage';
            }
            else if (this.emailVerification == true) {
                this.rootPage = 'LoginFlatPage';
            }
        }
        /*  else if(this.userId != undefined || this.userId != null){
           this.rootPage = 'WallPage';
         } */
        /*   this.firebaseDynamicLinks.onDynamicLink()
        .subscribe((res: any) => console.log(res), (error:any) => console.log(error)); */
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__services_mail_chimp_service__["a" /* MailChimpService */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase_dynamic_links_ngx__["a" /* FirebaseDynamicLinks */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services_mail_chimp_service__["a" /* MailChimpService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase_dynamic_links_ngx__["a" /* FirebaseDynamicLinks */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailChimpService; });
var MailChimpService = /** @class */ (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.showMailChimpForm = function () {
        var mailChimp = localStorage.getItem("mailChimp") == "true";
        var mailChimpLocal = localStorage.getItem("mailChimpLocal") == "true";
        if (mailChimp) {
            return false;
        }
        else {
            return mailChimpLocal;
        }
    };
    MailChimpService.prototype.setMailChimpForm = function (isVisible) {
        localStorage.setItem("mailChimpLocal", isVisible + "");
    };
    MailChimpService.prototype.hideMailChimp = function () {
        localStorage.setItem("mailChimp", "true");
    };
    return MailChimpService;
}());

//# sourceMappingURL=mail-chimp-service.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_firestore__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_auth__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_storage__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(http, firebasedb, alertCtrl, afAuth, _CAMERA) {
        var _this = this;
        this.http = http;
        this.firebasedb = firebasedb;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this._CAMERA = _CAMERA;
        this.alertListRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('alerts');
        this.commentListRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('comments');
        this.categoryListRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('categories');
        this.postListRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('posts');
        this.userListRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('users');
        this.postLikeRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref('postlikes');
        this.authenticated = false;
        this.limit = 50;
        this.userAuth = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        console.log('Hello FirebaseServiceProvider Provider');
        this.user = afAuth.authState;
        console.log(this.user);
        this.afAuth.authState.subscribe(function (auth) {
            if (auth != undefined && auth != null) {
                _this.userObject = auth;
            }
            if (_this.getUser() != undefined || _this.getUser() != null) {
                _this.getUser().snapshotChanges().subscribe(function (item) {
                    _this.arrayItem = [];
                    var y = item.payload.toJSON();
                    y['$key'] = item.key;
                    _this.arrayItem.push(y);
                    _this.usersObject = _this.arrayItem[0];
                    _this.userKey = _this.arrayItem[0].$key;
                    _this.userName = _this.arrayItem[0].username;
                    _this.userImage = _this.arrayItem[0].image;
                });
            }
        });
    }
    FirebaseServiceProvider.prototype.getUser = function () {
        if (this.userObject != undefined || this.userObject != null) {
            var userId = this.userObject.uid;
            var path = "users/" + userId;
            return this.firebasedb.object(path);
        }
    };
    FirebaseServiceProvider.prototype.getUsers = function (id) {
        var usersId = id;
        var path = "users/" + id;
        return this.firebasedb.object(path);
    };
    FirebaseServiceProvider.prototype.getAuthUser = function () {
        console.log(this.userAuth);
        return this.userAuth = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
    };
    FirebaseServiceProvider.prototype.updateSignIEmail = function (email) {
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        user.updateEmail(email).then(function (res) {
            console.log("Update Successful");
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    FirebaseServiceProvider.prototype.reauthenticateUser = function (credentials) {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        var credential = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].EmailAuthProvider.credential(credentials.email, credentials.password);
        user.reauthenticateAndRetrieveDataWithCredential(credential).then(function (res) {
            _this.authenticated = true;
        }).catch(function (error) {
        });
    };
    FirebaseServiceProvider.prototype.updateSignInPassword = function (password) {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        user.updatePassword(password).then(function (res) {
            console.log("Update Successful");
        }).catch(function (err) {
            _this.errorMessageReauth = err.message;
            var alert = _this.alertCtrl.create({
                title: 'Login',
                inputs: [{
                        name: 'email',
                        placeholder: 'Email'
                    },
                    {
                        name: 'password',
                        placeholder: 'Password',
                        type: 'password'
                    }
                ],
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Canceled Clicked');
                        }
                    },
                    {
                        text: 'Login',
                        handler: function (data) {
                            console.log(data);
                            if (data.email, data.password) {
                                _this.reauthenticateUser(data);
                                //loggedin
                            }
                            else {
                                //failed login
                                return false;
                            }
                        }
                    }
                ]
            });
            alert.present();
            console.log(err.message);
        });
    };
    FirebaseServiceProvider.prototype.verifyEmail = function (email) {
        console.log(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.email);
        var actionCodeSettings = {
            url: "http://demo.sarutech.com/nessty/#/verified/" + __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.email,
            handleCodeInApp: false,
            /* iOS: {
              bundleId: 'com.nessty.app'
            }, */
            android: {
                packageName: 'com.nessty.app',
                installApp: true,
            },
            dynamicLinkDomain: "nesstyapp.page.link"
        };
        console.log(email);
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        console.log(user);
        user.sendEmailVerification(actionCodeSettings).then(function (res) {
            console.log("Email sent");
        }).catch(function (err) {
            console.log(err);
        });
    };
    FirebaseServiceProvider.prototype.resetPassword = function (email) {
        var _this = this;
        /*  var actionCodeSettings = {
           url: "http://localhost:8100/#/passwordreseted" + firebase.auth().currentUser.email,
            handleCodeInApp: false,
           iOS: {
             bundleId: 'com.nessty.app'
           },
           android: {
             packageName: 'com.nessty.app',
             installApp: true,
             minimumVersion: '12'
           },
           dynamicLinkDomain: "https://nesstyapp.page.link/6SuK?d=1"
         }; */
        console.log(email);
        var auth = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]();
        return auth.sendPasswordResetEmail(email).then(function (res) {
            console.log("Email Sent");
        }).catch(function (err) {
            _this.errorMessageReset = err.message;
            console.log(err.message);
        });
    };
    FirebaseServiceProvider.prototype.category = function (categories) {
        this.categoryList = this.getCategories();
        this.categoryList.push({
            userid: this.userKey,
            categoryid: categories["id"],
            name: categories.name,
            link: categories.link,
            togglestatus: categories.togglestatus
        });
    };
    FirebaseServiceProvider.prototype.categoryRef = function (categories) {
        this.categoryList = this.getCategories();
        this.categoryListRef.child(categories["id"] + this.userKey).set({
            userid: this.userKey,
            categoryid: categories["id"],
            name: categories.name,
            link: categories.link,
            togglestatus: categories.togglestatus
        });
    };
    FirebaseServiceProvider.prototype.post = function (posts) {
        this.postList = this.getPost(this.limit);
        this.postList.push({
            userid: this.userKey,
            content: posts.content,
            time: posts.time,
            hearts: posts.hearts,
            comments: posts.comments
        });
    };
    FirebaseServiceProvider.prototype.alert = function (alerts) {
        this.alertList = this.getAlert(this.limit);
        this.alertList.push({
            userid: this.userKey,
            postid: alerts.postid,
            time: alerts.time,
            action: alerts.action,
            color: alerts.color,
            status: alerts.status,
            commentid: alerts.commentid,
            image: alerts.image,
            username: alerts.username,
            post: alerts.post,
            comment: alerts.comment,
            postuserid: alerts.postuserid
        });
    };
    FirebaseServiceProvider.prototype.updateAlert = function (alerts) {
        console.log(alerts);
        this.alertListRef.child(alerts.$key).update({
            userid: this.userKey,
            postid: alerts.postid,
            time: alerts.time,
            action: alerts.action,
            color: alerts.color,
            status: alerts.status,
            commentid: alerts.commentid,
            image: alerts.image,
            username: alerts.username,
            post: alerts.post,
            comment: alerts.comment,
            postuserid: alerts.postuserid
        });
    };
    FirebaseServiceProvider.prototype.comment = function (comments) {
        this.commentTime = comments.time;
        this.commentList = this.getComments();
        this.commentList.push({
            userid: this.userKey,
            postid: comments.postid,
            comment: comments.comment,
            time: comments.time
        });
    };
    FirebaseServiceProvider.prototype.likePost = function (postlike) {
        this.postLike = this.firebasedb.list('postlikes');
        this.postLikeRef.child(postlike.postid + this.userKey).set({
            userid: this.userKey,
            postid: postlike.postid,
            status: true
        });
    };
    FirebaseServiceProvider.prototype.alertCustomId = function (alerts) {
        console.log(alerts);
        //this.alertList = this.getAlert(this.limit);
        this.alertListRef.child(alerts.postid + this.userKey).set({
            userid: this.userKey,
            postid: alerts.postid,
            time: alerts.time,
            action: alerts.action,
            color: alerts.color,
            status: alerts.status,
            commentid: alerts.commentid,
            image: alerts.image,
            username: alerts.username,
            post: alerts.post,
            comment: alerts.comment,
            message: alerts.message,
            postuserid: alerts.postuserid
        });
    };
    FirebaseServiceProvider.prototype.alertCustomId2 = function (alerts) {
        //this.alertList = this.getAlert(this.limit);
        this.alertListRef.child((this.commentTime * 1000).toString() + this.userKey).set({
            userid: this.userKey,
            postid: alerts.postid,
            time: alerts.time,
            action: alerts.action,
            color: alerts.color,
            status: alerts.status,
            commentid: alerts.commentid,
            image: alerts.image,
            username: alerts.username,
            post: alerts.post,
            comment: alerts.comment,
            message: alerts.message,
            postuserid: alerts.postuserid
        });
    };
    FirebaseServiceProvider.prototype.updatePost = function (posts) {
        this.postListRef.child(posts.$key).update({
            userid: posts.userid,
            content: posts.content,
            hearts: posts.hearts,
            comments: posts.comments
        });
    };
    FirebaseServiceProvider.prototype.updatePostTime = function (posts) {
        this.postListRef.child(posts.$key).update({
            userid: this.userKey,
            content: posts.content,
            time: posts.time,
            hearts: posts.hearts,
            comments: posts.comments
        });
    };
    FirebaseServiceProvider.prototype.getLikePost = function () {
        return this.firebasedb.list('postlikes');
    };
    FirebaseServiceProvider.prototype.deleteLikePost = function (id) {
        return this.postLikeRef.child(id).remove();
    };
    FirebaseServiceProvider.prototype.deleteAlert = function (id) {
        return this.alertListRef.child(id).remove();
    };
    FirebaseServiceProvider.prototype.deletePost = function (id) {
        return this.postListRef.child(id).remove();
    };
    FirebaseServiceProvider.prototype.deleteCategory = function (id) {
        this.categoryListRef.child(id).remove();
    };
    FirebaseServiceProvider.prototype.deleteMultiplePost = function (post) {
        this.postList.remove(post.$key);
    };
    FirebaseServiceProvider.prototype.deleteComment = function (id) {
        this.commentListRef.child(id).remove();
    };
    FirebaseServiceProvider.prototype.getSingleLikePost = function (postlikeid) {
        return this.firebasedb.object("postlikes/" + postlikeid);
    };
    FirebaseServiceProvider.prototype.getPost = function (limit) {
        return this.firebasedb.list('posts', function (ref) {
            return ref.limitToLast(limit).orderByKey();
        });
    };
    FirebaseServiceProvider.prototype.getCategories = function () {
        return this.firebasedb.list('categories', function (ref) {
            return ref.orderByKey();
        });
    };
    FirebaseServiceProvider.prototype.getAlert = function (limit) {
        return this.firebasedb.list('alerts', function (ref) {
            return ref.limitToLast(limit).orderByKey();
        });
    };
    FirebaseServiceProvider.prototype.getAllUsers = function () {
        return this.firebasedb.list('users');
    };
    FirebaseServiceProvider.prototype.getAlerts = function () {
        return this.firebasedb.list('alerts');
    };
    FirebaseServiceProvider.prototype.getMorePost = function () {
        return this.firebasedb.list('posts');
    };
    FirebaseServiceProvider.prototype.getSinglePost = function (postid) {
        return this.firebasedb.object("posts/" + postid);
    };
    FirebaseServiceProvider.prototype.getSingleAlert = function (alertid) {
        return this.firebasedb.object("alerts/" + alertid);
    };
    FirebaseServiceProvider.prototype.getSingleComment = function (commentid) {
        return this.firebasedb.object("comments/" + commentid);
    };
    FirebaseServiceProvider.prototype.getComments = function () {
        return this.firebasedb.list('comments');
    };
    FirebaseServiceProvider.prototype.getMoreComments = function (limit) {
        return this.firebasedb.list('comments', function (ref) {
            return ref.orderByKey();
        });
    };
    FirebaseServiceProvider.prototype.getCommentLastId = function () {
        return this.firebasedb.list('comments');
    };
    FirebaseServiceProvider.prototype.getPostLastId = function () {
        return this.firebasedb.list('posts', function (ref) {
            return ref.limitToFirst(1).orderByKey();
        });
    };
    FirebaseServiceProvider.prototype.getAlertLastId = function () {
        return this.firebasedb.list('alerts', function (ref) {
            return ref.limitToFirst(1).orderByKey();
        });
    };
    FirebaseServiceProvider.prototype.authUser = function () {
        return this.user;
    };
    Object.defineProperty(FirebaseServiceProvider.prototype, "currentUserId", {
        get: function () {
            return this.authState !== null ? this.authState.user.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    FirebaseServiceProvider.prototype.login = function (users) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(users.email, users.password).then(function (user) {
            _this.authState = user;
            _this.arrayUsers = user;
            users.online = true;
            _this.onlineStatus(users);
            var verfiedEmail = user.user.emailVerified;
            var emailVerification = JSON.parse(localStorage.getItem('emailVerification'));
            console.log(emailVerification);
            _this.localStorageItem = localStorage.setItem('emailVerification', verfiedEmail.toString());
        });
    };
    FirebaseServiceProvider.prototype.updatePoints = function (user) {
        var _this = this;
        return this.getUsers(user.user.uid).snapshotChanges().subscribe(function (item) {
            _this.arrayUsers = [];
            var y = item.payload.toJSON();
            y['$key'] = item.key;
            _this.userObjects = y;
            _this.arrayUsers.push(_this.userObjects);
            _this.arrayUsers.forEach(function (res) {
                res.points = res.points + 1;
                console.log(res);
                _this.updateUser(res);
            });
        });
    };
    FirebaseServiceProvider.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    FirebaseServiceProvider.prototype.signUp = function (users) {
        var _this = this;
        this.errorMessage = " ";
        return this.afAuth.auth.createUserWithEmailAndPassword(users.email, users.password).then(function (user) {
            _this.authState = user;
            console.log(_this.authState);
            var online = true;
            _this.insertUser(users);
            var verfiedEmail = _this.authState.user.emailVerified;
            _this.localStorageItem = localStorage.setItem('emailVerification', verfiedEmail.toString());
            console.log(_this.authState);
        }).catch(function (error) {
            _this.errorMessage = error.message;
            console.log(error);
        });
    };
    FirebaseServiceProvider.prototype.insertUser = function (user) {
        var path = "users/" + this.currentUserId;
        var newUser = {
            username: user.username,
            email: user.email,
            points: user.points,
            image: user.image,
            status: user.status,
            blobFile: user.blobFile,
            online: user.online
        };
        this.firebasedb.object(path).update(newUser);
    };
    FirebaseServiceProvider.prototype.onlineStatus = function (user) {
        var path = "users/" + this.currentUserId;
        var newUser = {
            online: user.online
        };
    };
    //UPLOAD IMAGES
    FirebaseServiceProvider.prototype.takePhotograph = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._CAMERA.getPicture({
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                targetWidth: 320,
                targetHeight: 240
            })
                .then(function (data) {
                _this.cameraImage = "data:image/jpeg;base64," + data;
                resolve(_this.cameraImage);
            });
        });
    };
    FirebaseServiceProvider.prototype.selectPhotograph = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this._CAMERA.PictureSourceType.PHOTOLIBRARY,
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                encodingType: _this._CAMERA.EncodingType.JPEG,
                correctOrientation: true
            };
            _this._CAMERA.getPicture(cameraOptions)
                .then(function (data) {
                _this.cameraImage = "data:image/jpeg;base64," + data;
                resolve(_this.cameraImage);
            });
        });
    };
    FirebaseServiceProvider.prototype.updateUser = function (user) {
        var _this = this;
        return this.userListRef.child(user["$key"]).update({
            username: user.username,
            email: user.email,
            points: user.points,
            image: user.image,
            status: user.status,
            blobFile: user.blobFile,
            online: user.online
        }).then(function (res) {
            _this.updateSignIEmail(user.email);
            if (user.blobFile !== "") {
                _this.uploadFiles(user);
            }
        });
    };
    FirebaseServiceProvider.prototype.updateUser2 = function (user) {
        console.log(user);
        this.userListRef.child(user["$key"]).update({
            username: user.username,
            email: user.email,
            points: user.points,
            image: user.image,
            status: user.status,
            //blobFile: user.blobFile,
            online: user.online
        });
    };
    FirebaseServiceProvider.prototype.uploadFiles = function (uploads) {
        var _this = this;
        console.log(uploads);
        //if (uploads.blobFile !== "") {
        var fileName = uploads.blobFile.name;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref();
        var uploadTask = storageRef.child("users/" + fileName).put(uploads.blobFile);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            /*  uploads.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
             console.log(uploads.progress); */
        }, function (error) {
            console.log(error);
        }, function () {
            var pictureUrl = storageRef.child("users/" + fileName).getDownloadURL();
            pictureUrl.then(function (url) {
                uploads.image = url;
                _this.saveFileData(uploads);
            });
        });
        //}
    };
    FirebaseServiceProvider.prototype.saveFileData = function (upload) {
        this.userListRef.child(upload["$key"]).update({
            image: upload.image
        });
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map