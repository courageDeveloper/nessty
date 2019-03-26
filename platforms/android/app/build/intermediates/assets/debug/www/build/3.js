webpackJsonp([3],{

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__["Clipboard"],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__["a" /* Toast */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// greg hedin
Object.defineProperty(exports, "__esModule", { value: true });
var Clipboard = /** @class */ (function () {
    function Clipboard() {
    }
    Clipboard.init = function () {
        window.addEventListener('copy', function (e) {
            if (Clipboard._data) {
                e.clipboardData.setData('text/plain', Clipboard._data);
                e.preventDefault(); // this disables 'ctrl + c'
                Clipboard._data = null;
            }
        });
    };
    Clipboard._data = null;
    // MSIE boolean
    Clipboard.POS = !!window['clipboardData'];
    Clipboard.copy = function (data) {
        Clipboard._data = data;
        if (!Clipboard.POS) {
            document.execCommand('copy');
        }
        //  POS browsers
        else if (!!window['clipboardData']) {
            window['clipboardData'].setData('Text', Clipboard._data);
            Clipboard._data = null;
        }
    };
    return Clipboard;
}());
exports.Clipboard = Clipboard;
Clipboard.init();
//# sourceMappingURL=ts-clipboard.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.show = function (message, duration, position) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "show", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.hide = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "hide", {}, arguments); };
    Toast.prototype.showWithOptions = function (options) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showWithOptions", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortTop = function (message) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showShortTop", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortCenter = function (message) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showShortCenter", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showShortBottom = function (message) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showShortBottom", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongTop = function (message) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showLongTop", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongCenter = function (message) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showLongCenter", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.prototype.showLongBottom = function (message) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "showLongBottom", { "observable": true, "clearFunction": "hide" }, arguments); };
    Toast.pluginName = "Toast";
    Toast.plugin = "cordova-plugin-x-toast";
    Toast.pluginRef = "plugins.toast";
    Toast.repo = "https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin";
    Toast.platforms = ["Android", "BlackBerry 10", "iOS", "Windows", "Windows Phone 8"];
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])({
            providedIn: 'root'
        })
    ], Toast);
    return Toast;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RvYXN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBc0VQLHlCQUFpQjs7OztJQWExQyxvQkFBSSxhQUFDLE9BQWUsRUFBRSxRQUFnQixFQUFFLFFBQWdCO0lBU3hELG9CQUFJO0lBbUJKLCtCQUFlLGFBQUMsT0FBcUI7SUFhckMsNEJBQVksYUFBQyxPQUFlO0lBYTVCLCtCQUFlLGFBQUMsT0FBZTtJQWEvQiwrQkFBZSxhQUFDLE9BQWU7SUFhL0IsMkJBQVcsYUFBQyxPQUFlO0lBYTNCLDhCQUFjLGFBQUMsT0FBZTtJQWE5Qiw4QkFBYyxhQUFDLE9BQWU7Ozs7OztJQXZIbkIsS0FBSztRQUhqQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csS0FBSztnQkF4RWxCO0VBd0UyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNZXNzYWdlIHRvIGRpc3BsYXlcbiAgICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEdXJhdGlvbiBpbiBtcyB0byBzaG93XG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFBvc2l0aW9uXG4gICAqL1xuICBwb3NpdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZCBuZWdhdGl2ZSB2YWx1ZSB0byBtb3ZlIGl0IHVwIGEgYml0XG4gICAqL1xuICBhZGRQaXhlbHNZPzogbnVtYmVyO1xuICAvKipcbiAgICogUGFzcyBKU09OIG9iamVjdCB0byBiZSBzZW50IGJhY2sgaW4gc3VjY2VzcyBjYWxsYmFja1xuICAgKi9cbiAgZGF0YT86IGFueTtcbiAgLyoqXG4gICAqIFN0eWxpbmdcbiAgICovXG4gIHN0eWxpbmc/OiB7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dENvbG9yPzogc3RyaW5nO1xuICAgIGNvcm5lclJhZGl1cz86IG51bWJlcjtcbiAgICBob3Jpem9udGFsUGFkZGluZz86IG51bWJlcjtcbiAgICB2ZXJ0aWNhbFBhZGRpbmc/OiBudW1iZXI7XG4gIH07XG59XG5cbi8qKlxuICogQG5hbWUgVG9hc3RcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBzaG93IGEgbmF0aXZlIFRvYXN0IChhIGxpdHRsZSB0ZXh0IHBvcHVwKSBvbiBpT1MsIEFuZHJvaWQgYW5kIFdQOC4gSXQncyBncmVhdCBmb3Igc2hvd2luZyBhIG5vbiBpbnRydXNpdmUgbmF0aXZlIG5vdGlmaWNhdGlvbiB3aGljaCBpcyBndWFyYW50ZWVkIGFsd2F5cyBpbiB0aGUgdmlld3BvcnQgb2YgdGhlIGJyb3dzZXIuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi14LXRvYXN0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1RvYXN0IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vVG9hc3QtUGhvbmVHYXAtUGx1Z2luKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3Q6IFRvYXN0KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnRvYXN0LnNob3coYEknbSBhIHRvYXN0YCwgJzUwMDAnLCAnY2VudGVyJykuc3Vic2NyaWJlKFxuICogICB0b2FzdCA9PiB7XG4gKiAgICAgY29uc29sZS5sb2codG9hc3QpO1xuICogICB9XG4gKiApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVG9hc3RPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVG9hc3QnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi14LXRvYXN0JyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy50b2FzdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vVG9hc3QtUGhvbmVHYXAtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvdyBhIG5hdGl2ZSB0b2FzdCBmb3IgdGhlIGdpdmVuIGR1cmF0aW9uIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBkaXNwbGF5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZHVyYXRpb24gIER1cmF0aW9uIHRvIHNob3cgdGhlIHRvYXN0LCBlaXRoZXIgJ3Nob3J0JywgJ2xvbmcnIG9yIGFueSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzOiAnMTUwMCcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbiAgV2hlcmUgdG8gcG9zaXRpb24gdGhlIHRvYXN0LCBlaXRoZXIgJ3RvcCcsICdjZW50ZXInLCBvciAnYm90dG9tJy5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZSdcbiAgfSlcbiAgc2hvdyhtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uOiBzdHJpbmcsIHBvc2l0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBoaWRlIGFueSBjdXJyZW50bHkgdmlzaWJsZSB0b2FzdC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBuYXRpdmUgdG9hc3Qgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgIE9wdGlvbnMgZm9yIHNob3dpbmcgYSB0b2FzdC4gQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAqICAgbWVzc2FnZSAgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheS5cbiAgICogICBkdXJhdGlvbiAgRHVyYXRpb24gdG8gc2hvdyB0aGUgdG9hc3QsIGVpdGhlciAnc2hvcnQnLCAnbG9uZycgb3IgYW55IG51bWJlciBvZiBtaWxsaXNlY29uZHM6ICcxNTAwJy5cbiAgICogICBwb3NpdGlvbiAgV2hlcmUgdG8gcG9zaXRpb24gdGhlIHRvYXN0LCBlaXRoZXIgJ3RvcCcsICdjZW50ZXInLCBvciAnYm90dG9tJy5cbiAgICogICBhZGRQaXhlbHNZICBPZmZzZXQgaW4gcGl4ZWxzIHRvIG1vdmUgdGhlIHRvYXN0IHVwIG9yIGRvd24gZnJvbSBpdHMgc3BlY2lmaWVkIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJ1xuICB9KVxuICBzaG93V2l0aE9wdGlvbnMob3B0aW9uczogVG9hc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnc2hvcnQnLCAndG9wJylgLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJ1xuICB9KVxuICBzaG93U2hvcnRUb3AobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnc2hvcnQnLCAnY2VudGVyJylgLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJ1xuICB9KVxuICBzaG93U2hvcnRDZW50ZXIobWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnc2hvcnQnLCAnYm90dG9tJylgLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJ1xuICB9KVxuICBzaG93U2hvcnRCb3R0b20obWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvcnRoYW5kIGZvciBgc2hvdyhtZXNzYWdlLCAnbG9uZycsICd0b3AnKWAuXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59ICBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBmaXJzdCBvbiBzdWNjZXNzIGFuZCB0aGVuIHdoZW4gdGFwcGVkLCByZWplY3RzIG9uIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2hpZGUnXG4gIH0pXG4gIHNob3dMb25nVG9wKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3J0aGFuZCBmb3IgYHNob3cobWVzc2FnZSwgJ2xvbmcnLCAnY2VudGVyJylgLlxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAgUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgZmlyc3Qgb24gc3VjY2VzcyBhbmQgdGhlbiB3aGVuIHRhcHBlZCwgcmVqZWN0cyBvbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdoaWRlJ1xuICB9KVxuICBzaG93TG9uZ0NlbnRlcihtZXNzYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG9ydGhhbmQgZm9yIGBzaG93KG1lc3NhZ2UsICdsb25nJywgJ2JvdHRvbScpYC5cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIGZpcnN0IG9uIHN1Y2Nlc3MgYW5kIHRoZW4gd2hlbiB0YXBwZWQsIHJlamVjdHMgb24gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnaGlkZSdcbiAgfSlcbiAgc2hvd0xvbmdCb3R0b20obWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_clipboard__);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, toastController, clipboard, alrtctrl, platform, httpService, firebaseService, navParams, modalCtrl, socialSharing, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.clipboard = clipboard;
        this.alrtctrl = alrtctrl;
        this.platform = platform;
        this.httpService = httpService;
        this.firebaseService = firebaseService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.images = [];
        this.active = false;
        this.categories = [];
        this.apiResponse = [];
        this.catObject = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        this.userId = localStorage.getItem('userId');
        if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
            this.firebaseService.getUser().snapshotChanges().subscribe(function (item) {
                _this.arrayItem = [];
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.user = y;
                console.log(_this.user);
            });
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.httpService.getCategories().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); loading.dismiss(); throw err; })).subscribe(function (res) {
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
                    image: _this.image
                };
                _this.categories.push(_this.catObject);
                for (var i = 0; i < _this.categories.length; i++) {
                    _this.categories[i].image = _this.images[i];
                }
            });
            setTimeout(function () {
                loading.dismiss();
            }, 10000);
        });
        setInterval(function () {
            _this.active = true;
            _this.myClass = {
                overlay: _this.overlay
            };
        }, 20000);
        setInterval(function () {
            _this.active = false;
            _this.myClass = {
                overlay: _this.overlay
            };
        }, 25000);
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
    };
    ProfilePage.prototype.navPost = function () {
        var modal = this.modalCtrl.create('PostPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    ProfilePage.prototype.editProfile = function () {
        console.log(this.user);
        var modal = this.modalCtrl.create('EditprofilePage', { user: this.user });
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    ProfilePage.prototype.reload = function () {
        this.navCtrl.push('ProfilePage');
    };
    ProfilePage.prototype.viewimage = function () {
        console.log(this.user);
        var modal = this.modalCtrl.create('ViewpicPage', { user: this.user });
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    ProfilePage.prototype.share = function () {
        var _this = this;
        this.socialSharing.share('Get Nessty health app from', 'Nessty Health app', null, 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(function () {
            _this.firebaseService.usersObject.points += 1;
            _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
        }).catch(function () {
        });
    };
    ProfilePage.prototype.shareTwitter = function () {
        var _this = this;
        this.socialSharing.shareViaTwitter('Get Nessty health app from', 'assets/images/Nessty-Logo-5.png', 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(function () {
            _this.firebaseService.usersObject.points += 1;
            _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
        }).catch(function () {
        });
    };
    ProfilePage.prototype.shareFacebook = function () {
        var _this = this;
        this.socialSharing.shareViaFacebook('Get Nessty health app from', 'assets/images/Nessty-Logo-5.png', 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(function () {
            _this.firebaseService.usersObject.points += 1;
            _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
        }).catch(function () {
        });
    };
    ProfilePage.prototype.shareWhatsapp = function () {
        var _this = this;
        this.socialSharing.shareViaWhatsApp('Get Nessty health app from', 'assets/images/Nessty-Logo-5.png', 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(function () {
            _this.firebaseService.usersObject.points += 1;
            _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
        }).catch(function () {
        });
    };
    ProfilePage.prototype.invite = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.socialSharing.share('Get Nessty health app from', 'Nessty Health app', null, 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(function () {
                _this.firebaseService.usersObject.points += 1;
                _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
            }).catch(function () {
            });
        }
        else {
            console.log('web share');
            var alert_1 = this.alrtctrl.create({
                title: 'Invite friends',
                inputs: [{
                        name: 'content',
                        type: 'text',
                        value: 'Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty'
                    }],
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Canceled Click');
                        }
                    },
                    {
                        text: 'Copy',
                        handler: function (data) {
                            __WEBPACK_IMPORTED_MODULE_6_ts_clipboard__["Clipboard"].copy('Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty');
                            var toast = _this.toastController.create({
                                message: "Copied to Clipboard",
                                duration: 2000
                            });
                            toast.present();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ProfilePage.prototype.changePassword = function () {
        var modal = this.modalCtrl.create('PasswordPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <ion-buttons start>\n      <button class="btn-color" text-lowercase (click)="reload()" medium ion-button>\n        <ion-icon class="icon-refresh" name="ios-refresh"></ion-icon>\n      </button>\n      <button (click)="navPost()" ion-button icon-only>\n        <ion-icon class="icon-chat" name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div class="btn-align">\n      <button style="text-transform: none;" class="btn-invite" small (click)="invite()" ion-button>\n        <ion-icon class="icon-chat2" name="md-person-add"></ion-icon>\n        <span>Invite</span>\n      </button>\n    </div>\n\n    <ion-title class="title">Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background-image" no-padding>\n  <div class="bg-color bg-size">\n\n    <ion-card>\n      <ion-row>\n        <ion-col>\n          <h2 class="text-name" item-left>{{user.username}}</h2>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          </ion-col>\n      <ion-col>\n        <div item-end>\n          <ion-avatar class="ion-avatar" item-right>\n            <label for="file-input">\n              <img *ngIf="user.image!=\'\'" imageViewer class="img-center" [src]="user.image" tooltip="Upload Image" positionH="right" arrow/>\n              <img *ngIf="user.image==\'\'" imageViewer [alt]="user.username" src="assets/images/blue-bird-with-green.png" tooltip="Upload Image" positionH="right"\n                arrow class="img-center" width="160" height="160" />\n            </label>\n          </ion-avatar>\n          <!-- <input id="file-input" type="file" /> -->\n        </div>\n      </ion-col>\n    </ion-row>\n      <ion-card-content>\n        <ion-icon name="ios-mail" color="secondary" class="align-icon"> </ion-icon> <span class="email-text"><a [href]="user.email">\n            {{user.email}} </a></span>\n        <br>\n        <ion-icon name="md-school" color="secondary" class="align-icon"> </ion-icon> <span color="secondary" class="year-text">{{user.status}}</span>\n        <ion-item class="align-item">\n          <ion-avatar class="img-size" item-left>\n            <img src="assets/images/heart.png">\n          </ion-avatar>\n          <h1 class="font"><strong> POINTS:</strong> {{user.points}}</h1>\n        </ion-item>\n        <ion-item>\n          <button ion-button color="secondary" full (click)="editProfile()"> EDIT PROFILE </button>\n        </ion-item>\n        <ion-item>\n          <button ion-button color="secondary" full (click)="changePassword()"> CHANGE PASSWORD </button>\n        </ion-item>\n      </ion-card-content>\n\n    </ion-card>\n    <!-- <div class="pins">\n      <div class="pin container" *ngFor="let cat of categories">\n        <img class="img-curve" [src]="cat.image" />\n        <div [ngClass]="{\'overlay\':active}">\n          <ion-icon *ngIf="active" class="align-icon2 hover" name="ios-link"></ion-icon>\n        </div>\n        <br>\n        <h2 class="divider">{{(cat.name.length > 18)? (cat.name | slice:0:18)+"...":(cat.name)}}</h2>\n      </div>\n    </div> -->\n  </div>\n  <!-- this fab is placed at bottom right -->\n  <!-- <ion-fab bottom right>\n    <button ion-fab color="danger"><ion-icon name="share"> </ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab class="twitter" (click)="shareTwitter()"><ion-icon name="logo-twitter"> </ion-icon></button>\n      <button ion-fab class="facebook" (click)="shareFacebook()"><ion-icon name="logo-facebook"> </ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab class="whatsapp" (click)="shareWhatsapp()"><ion-icon name="logo-whatsapp"> </ion-icon></button> \n      <button ion-fab class="link" (click)="share()"><ion-icon name="ios-link"> </ion-icon></button>\n    </ion-fab-list>\n  </ion-fab> -->\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\profile\profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_ts_clipboard__["Clipboard"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map