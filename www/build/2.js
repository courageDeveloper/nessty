webpackJsonp([2],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPageModule", function() { return WallPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WallPageModule = /** @class */ (function () {
    function WallPageModule() {
    }
    WallPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wall__["a" /* WallPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wall__["a" /* WallPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__["Clipboard"],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__["a" /* Toast */]
            ]
        })
    ], WallPageModule);
    return WallPageModule;
}());

//# sourceMappingURL=wall.module.js.map

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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ts_clipboard__);
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
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WallPage = /** @class */ (function () {
    function WallPage(navCtrl, toastController, clipboard, alrtctrl, platform, socialSharing, firebasedb, navParams, app, modalCtrl, loadingCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.clipboard = clipboard;
        this.alrtctrl = alrtctrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.firebasedb = firebasedb;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.users = [];
        this.filteredUsers = [];
        this.heart = true;
        this.taggedItem = false;
        this.show = false;
        this.finishedLoading = false;
        this.limit = 50;
    }
    WallPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.firebaseService.getPostLastId().snapshotChanges().subscribe(function (items) {
            items.forEach(function (item) {
                _this.lastId = item.key;
            });
        });
        console.log('ionViewDidLoad WallPage');
        this.active = true;
        this.postComments = this.firebaseService.getComments();
        var z = this.postComments.snapshotChanges().subscribe(function (items) {
            _this.arrayComments = [];
            items.forEach(function (elements) {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                _this.arrayComments.push(y);
            });
        });
        this.firebaseService.getLikePost().snapshotChanges().subscribe(function (items) {
            _this.arrayLikePosts = [];
            items.forEach(function (elements) {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                _this.liked = y;
                _this.arrayLikePosts.push(y);
            });
        });
        this.posts = this.firebaseService.getPost(this.limit);
        var x = this.posts.snapshotChanges().subscribe(function (items) {
            _this.arrayItems = [];
            items.forEach(function (elements) {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                _this.arrayItems.push(y);
            });
            _this.currentDate = new Date().getTime() / 1000;
            _this.arrayItems.map(function (res) {
                _this.arrayPosts = [];
                if (_this.currentDate - res.time < 59) {
                    _this.seconds = true;
                    res.time = Math.round(_this.currentDate - res.time) + 's';
                }
                else if (_this.currentDate - res.time > 59 && _this.currentDate - res.time < 3599) {
                    _this.minutes = true;
                    res.time = Math.round((_this.currentDate - res.time) / 60) + 'm';
                }
                else if (_this.currentDate - res.time > 3599) {
                    _this.hours = true;
                    res.time = Math.round((_this.currentDate - res.time) / 3600) + 'h';
                }
                var x = _this.firebaseService.getUsers(res.userid).snapshotChanges().subscribe(function (items) {
                    console.log(items.payload.toJSON());
                    if (items.payload.toJSON() != null) {
                        var y = items.payload.toJSON();
                        y['$key'] = items.key;
                        _this.userObjects = y;
                        console.log(_this.userObjects);
                        _this.objPost = {
                            username: _this.userObjects.username,
                            image: _this.userObjects.image,
                            userid: res.userid,
                            $key: res.$key,
                            comments: res.comments,
                            content: res.content,
                            hearts: res.hearts,
                            time: res.time,
                            status: "",
                            color: false,
                            taggedText: ""
                        };
                        var indexHarsh = _this.objPost.content.indexOf('#');
                        if (_this.objPost.content.indexOf('#') > -1) {
                            _this.taggedItem = true;
                            var indexSpace = _this.objPost.content.indexOf(' ', indexHarsh);
                            _this.taggedText = _this.objPost.content.substring(indexHarsh, indexSpace);
                            _this.objPost.taggedText = _this.taggedText;
                        }
                        _this.arrayPosts.push(_this.objPost);
                        _this.filteredUsers = _this.arrayPosts;
                        _this.filteredUsers = _this.filteredUsers.reverse();
                        _this.userId = _this.firebaseService.userKey;
                        console.log(_this.filteredUsers);
                        _this.filteredUsers.forEach(function (data) {
                            if (_this.lastId === data.$key) {
                                _this.finishedLoading = true;
                            }
                            _this.filteredArrayComments = _this.arrayComments.filter(function (comments) { return comments.postid == data.$key; });
                            _this.commentLength = _this.filteredArrayComments.length;
                            data.comments = _this.commentLength;
                        });
                        _this.boundClass = {
                            heart: _this.heart
                        };
                        _this.objPost.color = "not active";
                        for (var q = 0; q < _this.arrayLikePosts.length; q++) {
                            if (_this.arrayLikePosts[q].postid === _this.objPost.$key) {
                                if (_this.arrayLikePosts[q].userid === _this.firebaseService.userKey) {
                                    _this.objPost.color = "active";
                                }
                            }
                            else {
                                console.log('no');
                            }
                        }
                    }
                });
            });
        });
    };
    WallPage.prototype.ionViewDidEnter = function () {
        /*     this.currentDate = new Date().getTime() / 1000;
            this.posts = this.firebaseService.getPost(this.limit);
        
            var x = this.posts.snapshotChanges().subscribe(items => {
              this.arrayItems = [];
              items.forEach(elements => {
                var y = elements.payload.toJSON();
                y['$key'] = elements.key;
                this.arrayItems.push(y);
              })
              this.arrayItems.map(res => {
                if (this.currentDate - res.time > 3600 * 12) {
                  this.firebaseService.deletePost(res.$key);
                  this.deleteCommentArray = [];
                  this.firebaseService.getComments().snapshotChanges().subscribe(items => {
                    items.forEach(item => {
                      var y = item.payload.toJSON();
                      y["key"] = item.key;
                      this.deleteCommentArray.push(y);
                    });
                    this.deleteCommentArray = this.deleteCommentArray.filter(data => data.postid == res.$key);
                    this.deleteCommentArray.map(data => {
                      this.firebaseService.deleteComment(data.key);
                    })
                  });
                }
              })
            }) */
    };
    WallPage.prototype.newPosts = function () {
        this.navCtrl.push('WallPage');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 800);
    };
    WallPage.prototype.likePost = function (post) {
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
                        status: true,
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
    };
    WallPage.prototype.invite = function () {
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
                            __WEBPACK_IMPORTED_MODULE_5_ts_clipboard__["Clipboard"].copy('Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty');
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
    WallPage.prototype.signOut = function () {
        console.log("Logged Out");
        this.firebaseService.logout();
        this.app.getRootNav().push("LoginFlatPage");
        localStorage.removeItem('userId');
    };
    WallPage.prototype.sharePost = function (user) {
        var _this = this;
        console.log(user);
        if (this.platform.is('cordova')) {
            this.socialSharing.share('Get Nessty health app from', 'https://play.google.com/store/apps/details?id=com.nessty.nessty', null, user.content).then(function () {
                _this.firebaseService.usersObject.points += 1;
                _this.firebaseService.updateUser2(_this.firebaseService.usersObject);
            }).catch(function () {
            });
        }
        else {
            console.log('web share');
            var alert_2 = this.alrtctrl.create({
                title: 'Copy link to share',
                inputs: [{
                        name: 'content',
                        type: 'text',
                        value: user.content
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
                            __WEBPACK_IMPORTED_MODULE_5_ts_clipboard__["Clipboard"].copy(user.content);
                            var toast = _this.toastController.create({
                                message: "Copied to Clipboard",
                                duration: 2000
                            });
                            toast.present();
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    WallPage.prototype.navPost = function () {
        var modal = this.modalCtrl.create('PostPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    WallPage.prototype.reload = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 800);
    };
    WallPage.prototype.getPost = function (user) {
        console.log(user);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 800);
        var modal = this.modalCtrl.create('ViewpostPage', { user: user });
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    WallPage.prototype.filterUsers = function ($event) {
        var value = $event.target.value ? $event.target.value.toLowerCase() : '';
        this.filteredUsers = [];
        for (var _i = 0, _a = this.arrayPosts; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username.toLowerCase().indexOf(value) !== -1) {
                this.filteredUsers.push(user);
            }
            else if (user.content.toLowerCase().indexOf(value) !== -1) {
                this.filteredUsers.push(user);
            }
        }
    };
    WallPage.prototype.deletePost = function (post) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function (res) {
            _this.firebaseService.deletePost(post.$key);
            _this.deleteCommentArray = [];
            _this.firebaseService.getComments().snapshotChanges().subscribe(function (items) {
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
        });
        loading.dismiss();
    };
    WallPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.limit += 50;
        setTimeout(function () {
            _this.ionViewDidLoad();
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    };
    WallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wall',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\wall\wall.html"*/'<!--\n  Generated template for the WallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-buttons start>\n      <button (click)="signOut()" ion-button icon-only>\n        LOGOUT\n        <ion-icon class="icon-chat" name="ios-exit"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div class="btn-align2">\n      <button style="text-transform: none;" class="btn-invite" small (click)="invite()" ion-button>\n        <ion-icon class="icon-chat2" name="md-person-add"></ion-icon>\n        <span>Invite</span>\n      </button>\n    </div>\n\n\n    <ion-title class="title">Wall</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background-image" no-padding (swipe)="reload()">\n  <ion-toolbar color="secondary">\n    <ion-searchbar placeholder="Enter tag, topic or name" (ionInput)="filterUsers($event)"></ion-searchbar>\n  </ion-toolbar>\n  <div class="bg-color bg-size">\n    <ion-row>\n      <ion-col align-self-end>\n        <button class="btn-align" ion-button small color="secondary" (click)="newPosts()">\n          New Posts\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-card *ngFor="let user of filteredUsers, index as i" no-padding>\n      <ion-row (click)="getPost(user)">\n        <!-- <ion-col col-1> -->\n        <ion-item>\n          <ion-avatar item-left>\n            <img *ngIf="user.image!=\'\'" [src]="user.image" [alt]="user.username" class="avatar" />\n            <img *ngIf="user.image==\'\'" [alt]="user.username" src="assets/images/blue-bird-with-green.png" class="avatar" width="60"\n              height="60">\n          </ion-avatar>\n        </ion-item>\n        <!-- </ion-col> -->\n        <ion-col align-self-start>\n          <ion-card-header>\n            <span class="user-name"> {{user.username}} </span> <span class="time"> -{{user.time}}</span>\n          </ion-card-header>\n          <ion-card-content class="posts">\n            {{user.content}} <span class="tag-color">{{user.taggedText}}</span>\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear small color="light" (click)="likePost(user)">\n            <ion-icon name="md-heart" [ngClass]="{\'heart\':user.color===\'active\'}" class="icon-color"></ion-icon>\n            <div class="icon-num">{{user.hearts}}</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear small color="light" (click)="getPost(user)">\n            <ion-icon name="md-chatbubbles" class="icon-color"></ion-icon>\n            <div class="icon-num">{{user.comments}}</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="sharePost(user)" icon-left clear small color="light">\n                    <ion-icon name="md-share-alt" class="icon-color"></ion-icon>\n                    <div class="icon-num">{{user.repost}}</div>\n                 </button>\n        </ion-col>\n        <ion-col center text-center>\n          <button *ngIf="user.userid == userId" ion-button icon-left clear small color="light" (click)="deletePost(user)">\n            <ion-icon name="md-trash" class="icon-color"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-infinite-scroll *ngIf="!finishedLoading" (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n  <ion-fab bottom right>\n    <button ion-fab color="secondary" (click)="navPost()"> <ion-icon name="md-create"> </ion-icon> </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\wall\wall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ts_clipboard__["Clipboard"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], WallPage);
    return WallPage;
}());

//# sourceMappingURL=wall.js.map

/***/ })

});
//# sourceMappingURL=2.js.map