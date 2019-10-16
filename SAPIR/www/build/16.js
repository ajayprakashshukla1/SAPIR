webpackJsonp([16],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForsalePageModule", function() { return ForsalePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forsale__ = __webpack_require__(739);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForsalePageModule = /** @class */ (function () {
    function ForsalePageModule() {
    }
    ForsalePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forsale__["a" /* ForsalePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forsale__["a" /* ForsalePage */]),
            ],
        })
    ], ForsalePageModule);
    return ForsalePageModule;
}());

//# sourceMappingURL=forsale.module.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForsalePage; });
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


/**
 * Generated class for the ForsalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForsalePage = /** @class */ (function () {
    function ForsalePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForsalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForsalePage');
    };
    ForsalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forsale',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/forsale/forsale.html"*/'<!--\n  Generated template for the ForsalePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n        <ion-title Class="for_sale">\n          <img src="assets/imgs/logosapir.png" class="logo_img">\n        </ion-title>\n      <!-- <img src="assets/imgs/search.png" class="serach"> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-segment [(ngModel)]="pet">\n        <ion-segment-button value="featured">\n         RECENT\n        </ion-segment-button>\n        <ion-segment-button value="albums">\n          VIEW MAP\n        </ion-segment-button>\n      </ion-segment>\n      <div [ngSwitch]="pet">\n          <ion-grid class="album card-background-page" *ngSwitchCase="\'featured\'">\n            <ion-card>\n              <img src="assets/imgs/sale_img1.png" class="recent_img_sec">\n              <div class="heart_img">\n                <img src="assets/imgs/heart.png">\n              </div>\n              <div class="card-title">$ 1,354,000</div>\n              <div class="card-subtitle">12356 Fleet Street</div>\n              <div class="bottom_img_sec">\n               <span>3 &nbsp;<img src="assets/imgs/bed.png"></span>&nbsp; &nbsp;\n               <span>2 &nbsp;<img src="assets/imgs/bath_tub.png"></span>\n            </div>\n            </ion-card>\n            <ion-card>\n              <img src="assets/imgs/sale_img2.png" class="recent_img_sec">\n              <div class="heart_img">\n                  <img src="assets/imgs/heart.png">\n                </div>\n              <div class="card-title">$ 1,354,000</div>\n              <div class="card-subtitle">12356 Fleet Street</div>\n              <div class="bottom_img_sec">\n                  <span>3 &nbsp;<img src="assets/imgs/bed.png"></span>&nbsp; &nbsp;\n                  <span>2 &nbsp;<img src="assets/imgs/bath_tub.png"></span>\n               </div>\n            </ion-card>\n          \n            <ion-card>\n              <img src="assets/imgs/sale_img3.png" class="recent_img_sec">\n              <div class="heart_img">\n                  <img src="assets/imgs/heart.png">\n                </div>\n              <div class="card-title">$ 1,354,000</div>\n              <div class="card-subtitle">12356 Fleet Street</div>\n              <div class="bottom_img_sec">\n                  <span>3 &nbsp;<img src="assets/imgs/bed.png"></span>&nbsp; &nbsp;\n                  <span>2 &nbsp;<img src="assets/imgs/bath_tub.png"></span>\n               </div>\n            </ion-card>\n          \n          </ion-grid>\n          \n          <ion-grid class="album" *ngSwitchCase="\'albums\'">\n              <p>vishal</p>\n              <p>hgdeh</p>\n          </ion-grid>\n          </div>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/forsale/forsale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ForsalePage);
    return ForsalePage;
}());

//# sourceMappingURL=forsale.js.map

/***/ })

});
//# sourceMappingURL=16.js.map