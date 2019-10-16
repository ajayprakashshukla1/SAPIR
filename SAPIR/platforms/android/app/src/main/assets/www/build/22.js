webpackJsonp([22],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(events, languageService, poviderForAllProvider, navCtrl, navParams, translate, storage) {
        this.events = events;
        this.languageService = languageService;
        this.poviderForAllProvider = poviderForAllProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.storage = storage;
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            console.log("user language ======= ", details.selected_language);
        });
        var defaultLanguage = this.translate.getDefaultLang();
        this.languageSelected = defaultLanguage;
        this.lanCss = defaultLanguage;
    };
    // Languages
    AboutPage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        console.log("LANGUAGE === " + defaultLanguage);
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.storage.get('user').then(function (details) {
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                    console.log("Change Language === ", val);
                });
                console.table(details);
                details.selected_language = _this.languageSelected;
                _this.lanCss = _this.languageSelected;
                console.log("user details", details);
                _this.storage.set('user', details);
                _this.events.publish('lan:created', details.selected_language);
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/imgs/logosapir.png" class="logo_img">\n    </ion-title>\n    <div class="language_selector" end>\n      <!-- <ion-label>{{ \'SELECT_LANGUAGE\' | translate }}</ion-label> -->\n      <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n        <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n      </ion-select>\n    </div>\n      <!-- <img src="assets/imgs/search.png" class="serach"> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div class="main">\n    <ion-grid class="about-block" no-padding>\n<ion-row>\n  <ion-col col-12 no-padding>\n   <img src="assets/imgs/About us2.jpg">\n  </ion-col>\n</ion-row>\n<ion-card>\n<ion-row padding class="box_shadow" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n    <p class="about">{{\'About Us\' |translate}}</p>\n  <ion-col col-12 class="about_content">\n      <p class="first_content">{{\'SapirApp serves the full lifecycle of owning and living in a home: buying, selling and renting.\' | translate}}</p>\n          <p>{{\'We offer Real Estate services in diverse locations such as Kiryat Bialik, Kiryat Motzkin, Kiryat Yam, United States,\' | translate}}\n            {{\'Cyprus and more. We focus all of our attention on providing you with the best quality service.\' | translate}}</p>\n          <p>{{\'We always strive for quality, not quantity. We are committed to helping them discover a place where you will\' | translate}}\n            {{\'love to live in and where you will feel more connected to the community.\' | translate}}</p>      \n  </ion-col> \n</ion-row>\n<ion-row [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n    <ion-col col-12 class="logo_img">\n        <img src="assets/imgs/logosapir.png"/>\n    </ion-col> \n</ion-row>\n</ion-card>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=22.js.map