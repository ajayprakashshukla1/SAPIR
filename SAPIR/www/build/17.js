webpackJsonp([17],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormPageModule = /** @class */ (function () {
    function FormPageModule() {
    }
    FormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form__["a" /* FormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__form__["a" /* FormPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], FormPageModule);
    return FormPageModule;
}());

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
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
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormPage = /** @class */ (function () {
    function FormPage(events, languageService, poviderForAllProvider, navCtrl, navParams, translate, storage) {
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
    FormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormPage');
    };
    FormPage.prototype.openPage = function (page) {
        console.log("PAGE NAME === " + page);
        this.navCtrl.push(page);
    };
    FormPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            console.log("user language ======= ", details.selected_language);
            _this.selectOptions = {
                cssClass: details.selected_language,
            };
        });
        var defaultLanguage = this.translate.getDefaultLang();
        this.languageSelected = defaultLanguage;
        this.lanCss = defaultLanguage;
    };
    // Languages
    FormPage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        console.log("LANGUAGE === " + defaultLanguage);
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.storage.get('user').then(function (details) {
                _this.lanCss = details.selected_language;
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                    console.log("Change Language === ", val);
                });
                console.table(details);
                details.selected_language = _this.languageSelected;
                console.log("user details", details);
                _this.storage.set('user', details);
                _this.lanCss = _this.languageSelected;
                _this.events.publish('lan:created', details.selected_language);
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-form',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/form/form.html"*/'<!--\n  Generated template for the FormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n          <div class="language_selector" end>\n            <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n            </ion-select>\n          </div>\n    </ion-navbar>\n  </ion-header>\n\n  \n<ion-content padding>\n<ion-grid no-padding>\n  <ion-row>\n    <ion-col col-12 class="card-background-page">\n        <ion-card>\n            <img src="assets/imgs/about.png" class="about_img">\n            <div class="img_form_sec">\n            <img src="assets/imgs/form_doc_img.png" class="form_doc">\n          </div>\n            <div class="card-title">\n              <h1>{{\'RENT/SALE\' | translate}}</h1>\n              <!-- <P>{{\'Please choose the Form Type.\' | translate}}</P> -->\n            </div>\n          </ion-card>\n          <div class="box_shadow">\n              <ion-col col-12 text-center>\n                  <img src="assets/imgs/logosapir.png" class="logo_sapir">\n                  <!-- <p class="complete_text">{{\'Please complete the form with your property information.\' | translate}}</p> -->\n                  </ion-col>\n                  <ion-row class="rent_out_sec">\n                    <ion-col col-6 class="rent_out" text-center>\n                      <button ion-button (click)="openPage(\'page-rent-out-form\')" class="rent_out_border">{{\'RENT\' | translate}}</button>\n                    </ion-col>\n                    <ion-col col-6 class="rent_out" text-center>\n                        <button ion-button (click)="openPage(\'page-sell-out-form\')" >{{\'SELL\' | translate}}</button>\n                      </ion-col>\n                  </ion-row>\n                \n                    \n           </div>\n    </ion-col>\n  \n      <ion-col col-12 text-center class="form_text_content">\n        <h1>RENT/SELL OUT FORM</h1>\n        <P>Please follow these three step form in order to finalize\n          the renting process\n        </P>\n      </ion-col>\n\n  </ion-row>\n \n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/form/form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FormPage);
    return FormPage;
}());

//# sourceMappingURL=form.js.map

/***/ })

});
//# sourceMappingURL=17.js.map