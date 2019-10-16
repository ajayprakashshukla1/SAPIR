webpackJsonp([1],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermprivacyPageModule", function() { return TermprivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termprivacy__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermprivacyPageModule = /** @class */ (function () {
    function TermprivacyPageModule() {
    }
    TermprivacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__termprivacy__["a" /* TermprivacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termprivacy__["a" /* TermprivacyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], TermprivacyPageModule);
    return TermprivacyPageModule;
}());

//# sourceMappingURL=termprivacy.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermprivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
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
 * Generated class for the TermprivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermprivacyPage = /** @class */ (function () {
    function TermprivacyPage(events, translate, languageService, poviderForAllProvider, navCtrl, navParams, storage) {
        var _this = this;
        this.events = events;
        this.translate = translate;
        this.languageService = languageService;
        this.poviderForAllProvider = poviderForAllProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userdetails = [];
        // this.getUserDetails();
        this.storage.get('user').then(function (val) {
            if (val !== null) {
                _this.token = val.token;
                _this.userdetails = val;
                // this.getDetails();
            }
            else {
                console.log("Token NOT PRESENT =============");
                _this.navCtrl.push('page-auth');
            }
        });
        this.languages = this.languageService.getLanguages();
        this.setLanguage();
    }
    TermprivacyPage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.storage.get('user').then(function (details) {
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                    console.log("Change Language === ", val);
                });
                details.selected_language = _this.languageSelected;
                _this.lanCss = _this.languageSelected;
                _this.storage.set('user', details);
                _this.events.publish('lan:created', details.selected_language);
                // this.getDetails();
                _this.termsAndCon(_this.lanCss);
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.termsAndCon(this.languageSelected);
            this.translate.use(defaultLanguage);
        }
        this.selectOptions = {
            cssClass: this.lanCss,
        };
    };
    TermprivacyPage.prototype.ionViewDidLoad = function () {
        this.checkLogin('===============DIdLOAD==========================');
    };
    TermprivacyPage.prototype.ionViewDidEnter = function () {
        this.checkLogin('============DIDENTER=============');
    };
    TermprivacyPage.prototype.ionViewDidLeave = function () {
        this.checkLogin('============didLeave================');
    };
    //  user login or Not 
    TermprivacyPage.prototype.checkLogin = function (medium) {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val !== null) {
            }
            else {
                if (val == null || val == "") {
                    _this.navCtrl.push('page-auth');
                }
            }
        });
    };
    TermprivacyPage.prototype.goSocilaMedia = function (url) {
        window.open(url, '_system', 'location=yes');
    };
    TermprivacyPage.prototype.termsAndCon = function (language) {
        var _this = this;
        console.log("Language  == " + language);
        var senddata = {
            'token': this.token,
            'language': 'en'
        };
        this.poviderForAllProvider.post('getTermsCondition', senddata).subscribe(function (data) {
            _this.hebrew = data.hebrew;
            _this.english = data.english;
            if (language == 'ar') {
                console.log("ar " + language);
                _this.content = _this.hebrew;
            }
            else if (language == 'en') {
                console.log("en " + language);
                _this.content = _this.english;
            }
        });
    };
    TermprivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-termprivacy',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/termprivacy/termprivacy.html"*/'<!--\n  Generated template for the TermprivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n        <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_sec">\n        </ion-title>\n      <!-- <img src="assets/imgs/search.png" class="serach"> -->\n  </ion-navbar>\n  <div class="language_selector">\n    <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'SELECT_LANGUAGE\' | translate }}" [cancelText]="\'CANCEL\' | translate" [okText]="\'OK\'  | translate">\n      <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n    </ion-select>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="termsprivacy">\n      <ion-col col-12>\n        <h5>{{\'Terms and Privacy\' | translate}}</h5>\n        <div [innerHTML]="content"></div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class="footer_sec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n    <ion-toolbar>\n      <ion-title class="title_img_sec">\n        <img src="assets/imgs/logosapir.png">\n        <a href="https://www.facebook.com/sapirnadlan1/" class="social_icons"><ion-icon  name="logo-facebook"></ion-icon></a>\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/termprivacy/termprivacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TermprivacyPage);
    return TermprivacyPage;
}());

//# sourceMappingURL=termprivacy.js.map

/***/ })

});
//# sourceMappingURL=1.js.map