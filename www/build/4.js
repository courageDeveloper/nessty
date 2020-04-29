webpackJsonp([4],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsPageModule", function() { return BoardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boards__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BoardsPageModule = /** @class */ (function () {
    function BoardsPageModule() {
    }
    BoardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__boards__["a" /* BoardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__boards__["a" /* BoardsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ts_clipboard__["Clipboard"],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast_ngx__["a" /* Toast */]
            ]
        })
    ], BoardsPageModule);
    return BoardsPageModule;
}());

//# sourceMappingURL=boards.module.js.map

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

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpService__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_clipboard__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ts_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ts_clipboard__);
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
 * Generated class for the BoardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoardsPage = /** @class */ (function () {
    function BoardsPage(navCtrl, toastController, clipboard, alrtctrl, platform, socialSharing, firebaseService, navParams, httpService, modalCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.clipboard = clipboard;
        this.alrtctrl = alrtctrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.firebaseService = firebaseService;
        this.navParams = navParams;
        this.httpService = httpService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.images = [];
        this.active = false;
        this.boardsObjArray = [];
        this.boardsArrays = [];
        this.imageArray = [];
        this.boardObject = {};
        this.catObject = {};
        this.boardsArrayLimit = [];
        this.categories = [];
        this.page = 1;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    BoardsPage.prototype.ionViewDidLoad = function (infiniteScroll) {
        console.log('ionViewDidLoad BoardsPage');
        this.loadPosts();
        this.loadCategories();
    };
    BoardsPage.prototype.loadCategories = function (infiniteScroll) {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (items) {
            _this.catArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.catArray.push(y);
                _this.catArray = _this.catArray.filter(function (data) { return data.userid == _this.firebaseService.userKey; });
            });
            console.log(_this.httpService.getCategories());
            if (_this.catArray.length == 0) {
                _this.httpService.getCategories().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); throw err; })).subscribe(function (res) {
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
                        console.log(_this.categories);
                        for (var i = 0; i < _this.categories.length; i++) {
                            _this.categories[i].image = _this.images[i];
                        }
                    });
                });
            }
            else {
                _this.categories = _this.catArray;
            }
        });
    };
    BoardsPage.prototype.loadPosts = function (infiniteScroll) {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (items) {
            _this.catArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.catArray.push(y);
                _this.catArray = _this.catArray.filter(function (data) { return data.userid == _this.firebaseService.userKey; });
            });
        });
        this.loading.present();
        this.httpService.getBoards().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); _this.loading.dismiss(); throw err; })).subscribe(function (res) {
            if (_this.catArray == undefined || _this.catArray.length == 0) {
                var boardsArrays = [];
                boardsArrays = boardsArrays.concat(res);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                boardsArrays.map(function (res) {
                    _this.boardsItems = res;
                    if (_this.boardsItems._links["wp:featuredmedia"] === undefined) {
                        var attachArray = {
                            embedded: true,
                            href: "https://www.healthbootcamps.com/wp-json/wp/v2/media/14114"
                        };
                        _this.boardsItems._links["wp:featuredmedia"] = [];
                        _this.boardsItems._links["wp:featuredmedia"].push(attachArray);
                    }
                    var categoryBoard = _this.boardsItems.categories;
                    var boardsTitle = _this.boardsItems.title.rendered;
                    var boardsLink = _this.boardsItems.guid.rendered;
                    _this.attachmentArray = [];
                    _this.boardsAttachment = _this.boardsItems._links["wp:featuredmedia"];
                    if (_this.boardsAttachment !== undefined) {
                        _this.boardsAttachment.map(function (data) {
                            _this.attachmentLink = data.href;
                            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/json');
                            return _this.http.get(_this.attachmentLink, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (res) {
                                _this.imageLink = res.guid.rendered;
                                _this.boardObject = {
                                    title: boardsTitle,
                                    link: boardsLink,
                                    image: _this.imageLink,
                                    category: categoryBoard
                                };
                                _this.boardsObjArray.push(_this.boardObject);
                            });
                        });
                    }
                });
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 10000);
            }
            else {
                _this.getSelectedApi();
            }
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
    };
    BoardsPage.prototype.getConcat = function (total, sum) {
        return total + sum;
    };
    BoardsPage.prototype.invite = function () {
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
                            __WEBPACK_IMPORTED_MODULE_7_ts_clipboard__["Clipboard"].copy('Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty');
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
    BoardsPage.prototype.getSelectedApi = function (infiniteScroll) {
        var _this = this;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (items) {
            _this.catArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.catArray.push(y);
                _this.catArray = _this.catArray.filter(function (data) { return data.userid == _this.firebaseService.userKey; });
            });
            var catIdArray = [];
            _this.catArray.forEach(function (res) {
                var catId = res.categoryid.toString() + '+' + '0';
                catIdArray.push(catId);
            });
            _this.catIdArray = catIdArray.reduce(_this.getConcat);
            return _this.getSelectedCat(_this.catIdArray).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); _this.loading.dismiss(); throw err; })).subscribe(function (res) {
                var boardsArrays = [];
                boardsArrays = boardsArrays.concat(res);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                boardsArrays.map(function (res) {
                    _this.boardsItems = res;
                    if (_this.boardsItems._links["wp:featuredmedia"] === undefined) {
                        var attachArray = {
                            embedded: true,
                            href: "https://www.healthbootcamps.com/wp-json/wp/v2/media/14114"
                        };
                        _this.boardsItems._links["wp:featuredmedia"] = [];
                        _this.boardsItems._links["wp:featuredmedia"].push(attachArray);
                    }
                    var categoryBoard = _this.boardsItems.categories;
                    var boardsTitle = _this.boardsItems.title.rendered;
                    var boardsLink = _this.boardsItems.guid.rendered;
                    _this.attachmentArray = [];
                    _this.boardsAttachment = _this.boardsItems._links["wp:featuredmedia"];
                    if (_this.boardsAttachment !== undefined) {
                        _this.boardsAttachment.map(function (data) {
                            _this.attachmentLink = data.href;
                            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/json');
                            return _this.http.get(_this.attachmentLink, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (res) {
                                _this.imageLink = res.guid.rendered;
                                _this.boardObject = {
                                    title: boardsTitle,
                                    link: boardsLink,
                                    image: _this.imageLink,
                                    category: categoryBoard
                                };
                                _this.boardsObjArray.push(_this.boardObject);
                            });
                        });
                    }
                });
                setTimeout(function () {
                    _this.loading.dismiss();
                }, 10000);
            });
        });
    };
    BoardsPage.prototype.getSelectedCat = function (catIds) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=" + this.page + "&categories=" + catIds, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.errorMessage = err.json();
            console.log(err.json());
            throw err;
        }));
    };
    BoardsPage.prototype.getSelectedHeader = function (catIds) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=" + this.page + "&categories=" + catIds, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) {
            _this.errorMessage = err.json();
            console.log(err.json());
            throw err;
        }));
    };
    BoardsPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.httpService.page++;
        this.firebaseService.getCategories().snapshotChanges().subscribe(function (items) {
            _this.catArray = [];
            items.forEach(function (item) {
                var y = item.payload.toJSON();
                y['$key'] = item.key;
                _this.catArray.push(y);
                _this.catArray = _this.catArray.filter(function (data) { return data.userid == _this.firebaseService.userKey; });
            });
        });
        this.httpService.getBoards().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function (err) { _this.errorMessage = err; console.log(err); throw err; })).subscribe(function (res) {
            if (_this.catArray == undefined || _this.catArray.length == 0) {
                var boardsArrays = [];
                boardsArrays = boardsArrays.concat(res);
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
                boardsArrays.map(function (res) {
                    _this.boardsItems = res;
                    var categoryBoard = _this.boardsItems.categories;
                    var boardsTitle = _this.boardsItems.title.rendered;
                    var boardsLink = _this.boardsItems.guid.rendered;
                    _this.boardsAttachment = _this.boardsItems._links["wp:featuredmedia"];
                    if (_this.boardsAttachment !== undefined) {
                        _this.boardsAttachment.map(function (data) {
                            _this.attachmentLink = data.href;
                            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/json');
                            return _this.http.get(_this.attachmentLink, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (res) { return res.json(); })).subscribe(function (res) {
                                _this.imageLink = res.guid.rendered;
                                _this.boardObject = {
                                    title: boardsTitle,
                                    link: boardsLink,
                                    image: _this.imageLink,
                                    category: categoryBoard
                                };
                                _this.boardsObjArray.push(_this.boardObject);
                            });
                        });
                    }
                });
            }
            else {
                _this.getSelectedApi();
            }
        });
        if (this.catArray == undefined || this.catArray.length == 0) {
            this.httpService.getHeaders().subscribe(function (response) {
                var maximumPages = Number(response.headers["_headers"].get("x-wp-totalpages")[0]);
                if (_this.httpService.page === maximumPages) {
                    infiniteScroll.enable(false);
                }
            });
        }
        else {
            var catIdArray = [];
            this.catArray.forEach(function (res) {
                var catId = res.categoryid.toString() + '+' + '0';
                catIdArray.push(catId);
            });
            this.catIdArray = catIdArray.reduce(this.getConcat);
            this.getSelectedHeader(this.catIdArray).subscribe(function (response) {
                var maximumNumber = Number(response.headers["_headers"].get("x-wp-total")[0]);
                var maximumPages = Number(response.headers["_headers"].get("x-wp-totalpages")[0]);
                if (_this.page === maximumPages) {
                    infiniteScroll.enable(false);
                }
            });
        }
    };
    BoardsPage.prototype.ionViewDidEnter = function () {
    };
    BoardsPage.prototype.reload = function () {
        this.navCtrl.push('BoardsPage');
    };
    BoardsPage.prototype.navEditBoard = function () {
        var modal = this.modalCtrl.create('BoardselectPage');
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    BoardsPage.prototype.navPost = function () {
        var modal = this.modalCtrl.create('PostPage');
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    BoardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-boards',template:/*ion-inline-start:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\boards\boards.html"*/'<!--\n  Generated template for the BoardsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button class="btn-color" text-lowercase (click)="reload()" medium ion-button>\n        <ion-icon class="icon-refresh" name="ios-refresh"></ion-icon>\n      </button>\n      <button (click)="navPost()" ion-button icon-only>\n        <ion-icon class="icon-chat" name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div class="btn-align">\n        <button style="text-transform: none;" class="btn-invite" small (click)="invite()" ion-button>\n          <ion-icon class="icon-chat2" name="md-person-add"></ion-icon>\n           <span>Invite</span>\n        </button>\n      </div>\n\n    <ion-title class="title">\n     Experts\n    </ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background-image" no-padding (swipe)="reload()">\n  <div class="bg-color bg-size">\n    <span class="cat-style">CATEGORY FILTER:</span>\n    <span *ngFor="let cat of categories" class="cat-style">\n      <a [href]="cat.link" target="_blank">{{cat.name}}</a>\n    </span>\n    \n    <div class="pins">\n      <div class="pin container" *ngFor="let board of boardsObjArray">\n        <br>\n        <h2 class="divider">{{(board.title.length > 18)? (board.title | slice:0:18)+"...":(board.title)}}</h2>\n        <br>\n        <a [href]="board.link" target="_blank"> <img class="img-curve" [src]="board.image" />\n          <div [ngClass]="{\'overlay\':active}">\n            <ion-icon *ngIf="active" class="align-icon hover" name="ios-link"></ion-icon>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class="without-content">\n      <div class="content" *ngIf="errorMessage!=null">\n        <div>\n          <ion-icon color="formdirty" name="information-circle" style="font-size: 80px;"></ion-icon>\n        </div>\n        <div class="block-text">\n          <p><b>Refresh Page!</b></p>\n        </div>\n      </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n      <ion-infinite-scroll-content class="infinite-loading-text" loadingSpinner="bubbles" loadingText="Loading..."> </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <ion-fab bottom right>\n    <button ion-fab color="secondary" (click)="navEditBoard()"> <ion-icon name="md-cog"> </ion-icon> </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\IRORO\Desktop\ionicprojects\nessty\src\pages\boards\boards.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7_ts_clipboard__["Clipboard"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BoardsPage);
    return BoardsPage;
}());

//# sourceMappingURL=boards.js.map

/***/ })

});
//# sourceMappingURL=4.js.map