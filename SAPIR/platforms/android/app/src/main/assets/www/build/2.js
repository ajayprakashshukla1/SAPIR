webpackJsonp([2],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* SupportPage */]),
            ],
        })
    ], SupportPageModule);
    return SupportPageModule;
}());

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = /** @class */ (function () {
    function SupportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SupportPage.prototype.openChat = function () {
        // console.log(proptype);
        this.navCtrl.push('page-chat-detail');
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/support/support.html"*/'<ion-header padding>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n						<img src="assets/imgs/logosapir.png" class="logo_img">\n					</ion-title>\n        <!-- <img src="assets/imgs/search.png" class="serach"> -->\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="lightest-bg">\n	<div class="support-header">\n			<img src="assets/imgs/support-app.jpg">\n	</div>\n	<ion-grid fixed>\n		<ion-row>\n			<ion-col>\n				<ion-card>\n\n					<ion-list class="contact_list">\n						<a href="tel:1111" ion-item>\n								<ion-icon name="call" item-start></ion-icon>\n								<p ion-text class="support_text">Call to General Support</p>\n								<h2 ion-text color="dark">+1 (123) 456-7890</h2>\n						</a>\n						<a href="tel:1111" ion-item>\n								<ion-icon name="call" item-start></ion-icon>\n								<p ion-text class="support_text">Call to Lease & Sale Support</p>\n								<h2 ion-text color="dark">+1 (123) 456-7890</h2>\n						</a>\n						<a href="mailto:support@ionproperty.ionic" ion-item>\n								<ion-icon name="mail" item-start></ion-icon>\n								<p ion-text class="support_text">Email</p>\n								<h2 ion-text color="dark">support@ionproperty.ionic</h2>\n						</a>\n					</ion-list>\n\n				</ion-card>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n\n	<!-- <button ion-button icon-start large full color="primary" (click)="openChat()">\n		<ion-icon name="chatboxes"></ion-icon>\n		Chat with Us!\n	</button> -->\n\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=2.js.map