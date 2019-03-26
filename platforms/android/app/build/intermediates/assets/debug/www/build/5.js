webpackJsonp([5],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsPageModule", function() { return AlertsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlertsPageModule = /** @class */ (function () {
    function AlertsPageModule() {
    }
    AlertsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alerts__["a" /* AlertsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alerts__["a" /* AlertsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__["Clipboard"],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__["a" /* Toast */]
            ]
        })
    ], AlertsPageModule);
    return AlertsPageModule;
}());

//# sourceMappingURL=alerts.module.js.map

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

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_clipboard__);
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
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertsPage = /** @class */ (function () {
    function AlertsPage(navCtrl, toastController, clipboard, alrtctrl, platform, socialSharing, navParams, firebaseService, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.clipboard = clipboard;
        this.alrtctrl = alrtctrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.notifications = [];
        this.finishedLoading = false;
        this.limit = 50;
        this.filteredNotifications = [];
    }
    AlertsPage.prototype.ionViewDidLoad = function () {
    };
    AlertsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //Change alert status.
        this.firebaseService.getAlerts().snapshotChanges().subscribe(function (items) {
            _this.arrayAlertsItems = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.arrayAlertsItems.push(y);
            });
            _this.arrayAlertsItems.forEach(function (res) {
                console.log(res.$key);
                res.status = false;
                _this.firebaseService.updateAlert(res);
            });
        });
        this.firebaseService.getAlertLastId().snapshotChanges().subscribe(function (items) {
            items.forEach(function (item) {
                _this.lastId = item.key;
            });
        });
        return this.loadAlerts();
    };
    AlertsPage.prototype.loadAlerts = function () {
        var _this = this;
        this.active = true;
        this.activecomment = true;
        this.activeshare = true;
        this.currentDate = new Date().getTime() / 1000;
        this.alertsArray = [];
        this.firebaseService.getAlert(this.limit).snapshotChanges().subscribe(function (items) {
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                if (_this.currentDate - y["time"] < 59) {
                    _this.seconds = true;
                    y["time"] = Math.round(_this.currentDate - y["time"]) + 's';
                }
                else if (_this.currentDate - y["time"] > 59 && _this.currentDate - y["time"] < 3599) {
                    _this.minutes = true;
                    y["time"] = Math.round((_this.currentDate - y["time"]) / 60) + 'm';
                }
                else if (_this.currentDate - y["time"] > 3599) {
                    _this.hours = true;
                    y["time"] = Math.round((_this.currentDate - y["time"]) / 3600) + 'h';
                }
                _this.alertsArray.push(y);
            });
            _this.filteredNotifications = _this.alertsArray;
            _this.filteredNotifications = _this.filteredNotifications.reverse();
            _this.filteredNotifications = _this.filteredNotifications.filter(function (data) { return data.postuserid == _this.firebaseService.userKey; });
            /* console.log(this.filteredNotifications);
            this.filteredNotifications.forEach(res => {
              this.firebaseService.getSinglePost(res.postid).snapshotChanges().subscribe(item => {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
      
              })
            }) */
            _this.filteredNotifications.forEach(function (data) {
                if (_this.lastId === data.$key) {
                    _this.finishedLoading = true;
                }
            });
        });
        this.boundClass = {
            heart: this.heart,
            comment: this.comment,
            share: this.share
        };
        //DELETE AFTER 12HRS;
        /* this.currentDate = new Date().getTime() / 1000;
        this.alerts = this.firebaseService.getAlert(this.limit);
        var x = this.alerts.snapshotChanges().subscribe(items => {
          this.arrayItems = [];
          items.forEach(elements => {
            var y = elements.payload.toJSON();
            y['$key'] = elements.key;
            this.arrayItems.push(y);
          })
          this.arrayItems.map(res => {
            if (this.currentDate - res.time > 3600 * 12) {
              this.firebaseService.deleteAlert(res.$key);
            }
          })
        })*/
    };
    AlertsPage.prototype.deleteAlert = function (alert) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            _this.firebaseService.deleteAlert(alert.$key);
        });
        loading.dismiss();
        this.navCtrl.push('AlertsPage');
        this.navCtrl.pop();
    };
    AlertsPage.prototype.navPost = function () {
        var modal = this.modalCtrl.create('PostPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    AlertsPage.prototype.reload = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 800);
    };
    AlertsPage.prototype.invite = function () {
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
                            __WEBPACK_IMPORTED_MODULE_4_ts_clipboard__["Clipboard"].copy('Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty');
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
    AlertsPage.prototype.filterUsers = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredNotifications = [];
        for (var _i = 0, _a = this.notifications; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username.toLowerCase().indexOf(value) !== -1) {
                this.filteredNotifications.push(user);
            }
            else if (user.post.toLowerCase().indexOf(value) !== -1) {
                this.filteredNotifications.push(user);
            }
        }
    };
    AlertsPage.prototype.getAlert2 = function (notify) {
        console.log(notify);
        this.connectDb(notify);
    };
    AlertsPage.prototype.connectDb = function (notify) {
        var _this = this;
        this.firebaseService.getSinglePost(notify.postid).snapshotChanges().subscribe(function (itemp) {
            var x = itemp.payload.toJSON();
            x['$key'] = itemp.key;
            _this.posts = x;
            _this.post = {
                $key: _this.posts['$key'],
                comments: _this.posts['comments'],
                content: _this.posts['content'],
                hearts: _this.posts['hearts'],
                time: _this.posts['time'],
                userid: _this.posts['userid']
            };
            //Activate color of heart
            _this.firebaseService.getLikePost().snapshotChanges().subscribe(function (items) {
                _this.arrayPostLike = [];
                items.forEach(function (item) {
                    var y = item.payload.toJSON();
                    y['$key'] = item.key;
                    _this.arrayPostLike.push(y);
                    _this.arrayPostLike = _this.arrayPostLike.filter(function (data) { return data.postid === _this.post['$key']; });
                });
                console.log(_this.arrayPostLike);
                _this.arrayPostLike.forEach(function (res) {
                    if (res.userid == _this.firebaseService.userKey) {
                        _this.post = {
                            $key: _this.posts['$key'],
                            comments: _this.posts['comments'],
                            content: _this.posts['content'],
                            color: 'active',
                            hearts: _this.posts['hearts'],
                            time: _this.posts['time'],
                            userid: _this.posts['userid']
                        };
                    }
                });
            });
            _this.firebaseService.getUsers(_this.posts.userid).snapshotChanges().subscribe(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.user = y;
                var modal = _this.modalCtrl.create('ViewalertPage', { notify: notify, user: _this.user, post: _this.post });
                modal.onDidDismiss(function (data) {
                    if (data) {
                        console.log(data);
                    }
                });
                modal.present();
            });
        });
    };
    AlertsPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.limit += 50;
        setTimeout(function () {
            _this.ionViewDidLoad();
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    AlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alerts',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\alerts\alerts.html"*/'<!--\n  Generated template for the AlertsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button (click)="navPost()" ion-button icon-only>\n        <ion-icon class="icon-chat" name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div class="btn-align">\n      <button style="text-transform: none;" class="btn-invite" small (click)="invite()" ion-button>\n        <ion-icon class="icon-chat2" name="md-person-add"></ion-icon>\n        <span>Invite</span>\n      </button>\n    </div>\n\n\n    <ion-title class="title">Notifications</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background-image" no-padding (swipe)="reload()">\n  <ion-toolbar color="secondary">\n    <ion-searchbar placeholder="Enter tag, topic or name" (ionInput)="filterUsers($event)"></ion-searchbar>\n  </ion-toolbar>\n  <div class="bg-color bg-size">\n    <ion-card *ngFor="let notify of filteredNotifications" no-padding>\n      <ion-row>\n        <!-- <ion-col col-1> -->\n        <ion-item>\n          <ion-icon class="ion-icon" item-left [name]="notify.action" [ngClass]="{\'heart\':notify.color===\'active\', \'comment\':notify.color===\'activecomment\', \'share\': notify.color===\'activeshare\'}"></ion-icon>\n          <ion-avatar>\n            <img *ngIf="notify.image!=\'\'" [src]="notify.image" item-left [alt]="notify.username" class="avatar" />\n            <img *ngIf="notify.image==\'\'" [alt]="notify.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n              height="60">\n          </ion-avatar>\n        </ion-item>\n        <!-- </ion-col> -->\n        <ion-col align-self-start>\n          <ion-card-header>\n            <span class="user-name"> {{notify.username}} </span> <span class="message-text">{{notify.message}}</span>\n            <span class="time"> -{{notify.time}} </span>\n          </ion-card-header>\n          <ion-card-content class="posts">\n            {{notify.post}}\n            <div class="align-btn">\n            <button ion-button icon-left clear small color="light" (click)="deleteAlert(notify)">\n                <ion-icon name="md-trash" class="icon-color"></ion-icon>\n              </button>\n              </div>\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n <ion-infinite-scroll *ngIf="!finishedLoading" (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll> \n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\alerts\alerts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ts_clipboard__["Clipboard"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], AlertsPage);
    return AlertsPage;
}());

//# sourceMappingURL=alerts.js.map

/***/ })

});
//# sourceMappingURL=5.js.map