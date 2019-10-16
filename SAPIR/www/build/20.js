webpackJsonp([20],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(363);
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
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(translate, storage, languageService, poviderForAllProvider, navCtrl, navParams, events, callNumber) {
        this.translate = translate;
        this.storage = storage;
        this.languageService = languageService;
        this.poviderForAllProvider = poviderForAllProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.callNumber = callNumber;
        this.userdetails = [];
        this.contactDetails = [];
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
    }
    ContactUsPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            _this.userdetails = details;
            _this.getDetails();
            console.table(details);
            _this.translate.use(details.selected_language);
            console.log("user language ======= ", details.selected_language);
        });
        var defaultLanguage = this.translate.getDefaultLang();
        this.languageSelected = defaultLanguage;
        this.lanCss = defaultLanguage;
    };
    // Languages
    ContactUsPage.prototype.setLanguage = function () {
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
                console.log("user details", details);
                _this.storage.set('user', details);
                _this.lanCss = _this.languageSelected;
                _this.events.publish('lan:created', details.selected_language);
                _this.getDetails();
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    ContactUsPage.prototype.goSocilaMedia = function (url) {
        console.log(url);
        window.open(url, 'location=yes');
    };
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage.prototype.calling = function (num) {
        this.callNumber.callNumber(num, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ContactUsPage.prototype.getDetails = function () {
        var _this = this;
        console.log("USER DETAILS  === ", this.userdetails);
        console.log('LANGUAGE ===== ', this.lanCss);
        var url = "get_contact_us_info";
        var data;
        data = {
            token: this.userdetails.token,
            language: this.lanCss
        };
        this.poviderForAllProvider.post(url, data).subscribe(function (res) {
            _this.contactDetails = res;
            console.log("CONTACT DETAILS === ", _this.contactDetails);
        }), function (err) {
            console.log(err);
            // loader.dismiss();
        };
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/contact-us/contact-us.html"*/'<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n        <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n        </ion-title>\n        <div class="language_selector" end>\n          <!-- <ion-label>{{ \'SELECT_LANGUAGE\' | translate }}</ion-label> -->\n          <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n            <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n          </ion-select>\n        </div>\n      <!-- <img src="assets/imgs/search.png" class="serach"> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="lightest-bg">\n\n\n<ion-grid fixed class="contact-content">\n <div class="top_center" text-center>\n  <ion-row>\n    \n    <ion-col col-12 class="connect contact_list">\n         \n        <h3>{{\'Contact Us\' | translate}}</h3>\n        <h4 ion-text color="dark">israel.eliya2@gmail.com</h4>\n        <h4 ion-text color="dark" (click)="calling(contactDetails.contact_us_phone_number)">{{contactDetails.contact_us_phone_number}}</h4>\n\n    </ion-col>\n\n    <ion-col [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" col-12 class="connect contact_list">\n        <h3>{{\'Location\' | translate}}</h3>\n        <h4 [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">{{\'145 OKeren Hayesod 6, Qiryat Bialik, Israel\' |translate}}</h4>\n      \n        <h4 (click)="calling(contactDetails.contact_us_location_phone)">{{contactDetails.contact_us_location_phone}}</h4>\n      <h3>{{\'Connect\' | translate}}</h3>\n\n      <ul>\n        <li><ion-icon (click)="goSocilaMedia(\'https://www.facebook.com/sapirnadlan1/\')" name="logo-facebook"></ion-icon></li>\n      </ul>\n    </ion-col>\n\n  </ion-row>\n </div>  \n</ion-grid>\n\n</ion-content>\n<ion-footer class="footer_sec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n  <ion-toolbar>\n      <ion-title class="title_img_sec">\n        <img src="assets/imgs/logosapir.png">\n      </ion-title>\n      <ion-buttons end class="social_icons">\n        <button ion-button color="save"  (click)="goSocilaMedia(\'https://www.facebook.com/sapirnadlan1/\')">\n            <ion-icon name="logo-facebook"></ion-icon>\n            <!-- <ion-icon (click)="goSocilaMedia()" name="logo-googleplus"></ion-icon>\n            <ion-icon (click)="goSocilaMedia()" name="logo-instagram"></ion-icon> -->\n        </button>\n      </ion-buttons> \n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ })

});
//# sourceMappingURL=20.js.map