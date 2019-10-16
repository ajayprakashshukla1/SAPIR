webpackJsonp([12],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistingPageModule", function() { return MylistingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mylisting__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MylistingPageModule = /** @class */ (function () {
    function MylistingPageModule() {
    }
    MylistingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mylisting__["a" /* MylistingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mylisting__["a" /* MylistingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], MylistingPageModule);
    return MylistingPageModule;
}());

//# sourceMappingURL=mylisting.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__ = __webpack_require__(360);
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
 * Generated class for the MylistingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MylistingPage = /** @class */ (function () {
    function MylistingPage(languageService, navCtrl, navParams, poviderForAllProvider, translate, loadingCtrl, storage, alertCtrl) {
        this.languageService = languageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poviderForAllProvider = poviderForAllProvider;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.properties = [];
        this.user = [];
        this.userDetails = [];
        this.userInfo = [];
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
    }
    MylistingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MylistingPage');
        this.getToken();
    };
    // SHOW LISTING
    MylistingPage.prototype.myListing = function () {
        var _this = this;
        console.log("My LISTING" + " TOKEN === " + this.user);
        if (this.user) {
            this.showLoader();
            this.poviderForAllProvider.getMyListing(this.user).then(function (data) {
                console.log(" response" + JSON.stringify(data));
                if (data.property) {
                    _this.properties = [];
                    _this.properties.push(data.property);
                    console.log("NUll PROPERTIES  == " + JSON.stringify(_this.properties));
                    _this.loading.dismiss();
                    _this.maxPages = data.max_num_pages;
                    _this.currentPage = data.paged;
                }
                else {
                    _this.loading.dismiss();
                    _this.properties = [];
                    _this.properties.push(data.max_num_pages);
                }
            });
        }
        else {
            console.log("TOKEN NOT FOUND");
        }
    };
    MylistingPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    MylistingPage.prototype.getToken = function () {
        var _this = this;
        console.log("GET TOKEN");
        this.storage.get('user').then(function (val) {
            _this.user = val.token;
            _this.userInfo = val;
            _this.myListing();
            console.log("USER INFO == ", _this.userInfo);
            console.log("User TOKEN == " + _this.user);
        });
    };
    // PAGE Info
    MylistingPage.prototype.openPropertyDetail = function (propertyDetails) {
        console.log('send Details' + JSON.stringify(propertyDetails));
        this.navCtrl.push('page-propertyinfo', {
            'propertyDetails': propertyDetails
        });
    };
    //INFINITY SCROllER
    MylistingPage.prototype.doInfinite = function (infiniteScroll, getPageNum) {
        var _this = this;
        this.newPageNum = parseInt(getPageNum) + parseInt('1');
        if (this.newPageNum <= this.maxPages) {
            // console.log("NEW PAGE  == "+this.newPageNum+ " MAX PAGES    = "+this.maxPages);
            this.currentPage = this.newPageNum;
            this.poviderForAllProvider.getMyListing(this.user, this.newPageNum)
                .then(function (data) {
                _this.currentPage = data.paged;
                for (var i = 0; i < data.property.length; i++) {
                    _this.properties[0].push(data.property[i]);
                }
                infiniteScroll.complete();
            })
                .catch(function (error) { return alert(error); });
            console.log('Begin async operation');
            // infiniteScroll.complete();
        }
        else {
            console.log("YOUR LIMIT IS DONE");
            infiniteScroll.complete();
        }
    };
    MylistingPage.prototype.deleteProperty = function (property) {
        var _this = this;
        console.log(property);
        this.showLoader();
        var data = { "post_id": property.id, "update_type": "delete", "token": this.user };
        this.poviderForAllProvider.post('update_property_data', data).subscribe(function (data) {
            console.log("DELETE DATA === ", data.msg);
            // this.myListing();
            if (data.msg) {
                var myList_1 = _this.properties[0].length;
                console.log("LENGTH === " + myList_1 + " property Delete ");
                _this.storage.get('user').then(function (val) {
                    console.log("LOCAL STORAGE === ", JSON.stringify(val));
                    val.no_of_properties = parseInt(val.no_of_properties) - 1;
                    _this.storage.set('user', val);
                    for (var i = 0; i < myList_1; i++) {
                        console.log("LOOP PROPERTIES " + JSON.stringify(_this.properties[0][i].id) + " PROPERTY ID === " + property.id);
                        if (_this.properties[0][i].id == property.id) {
                            // console.log("DEL prop"+JSON.stringify(this.properties[0][i].id)+" match property "+property.id);
                            _this.properties[0].splice(i, 1);
                            break;
                            // console.log(" DELETE MY LIST PROPERT MATCHED == "+this.properties[0][i].id);
                        }
                    }
                });
            }
            _this.showAlert(data.msg);
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    MylistingPage.prototype.editProperty = function (property) {
        this.navCtrl.push('page-edit-property', {
            'editProperty': property
        });
    };
    MylistingPage.prototype.showAlert = function (msg) {
        var prompt = this.alertCtrl.create({
            title: 'MESSAGE!',
            message: msg,
            buttons: [
                {
                    text: 'Close',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    MylistingPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            // console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
        });
    };
    // Languages
    MylistingPage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        console.log("LANGUAGE === " + defaultLanguage);
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.storage.get('user').then(function (details) {
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                });
                details.selected_language = _this.languageSelected;
                _this.storage.set('user', details);
                _this.lanCss = _this.languageSelected;
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
        this.selectOptions = {
            cssClass: this.lanCss,
        };
    };
    MylistingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mylisting',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/mylisting/mylisting.html"*/'<!--\n  Generated template for the MylistingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="lg_screen_bg" padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n        <ion-title Class="for_sale">\n          <img src="assets/imgs/logosapir.png" class="logo_img">\n        </ion-title>\n        <div class="language_selector" end>\n          <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n            <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n          </ion-select>\n        </div>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content no-padding>\n<ion-grid no-padding [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n  <ion-row class="mobile_img">\n    <ion-col col-12 no-padding>\n        <img  src="assets/imgs/My_Listings1.png">\n    </ion-col>\n      <ion-col col-12>\n       <ion-row class="mylisting_user">\n         <ion-col col-4 text-center>\n           <img src="{{userInfo.user_pic}}">\n         </ion-col>\n         <ion-col col-6>\n           <p>{{userInfo.user_display_name}}</p>\n          </ion-col>\n       </ion-row>\n      </ion-col>\n  </ion-row>\n<ion-row class="property_home" padding [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n  <ion-col col-7>\n    <span><img src="assets/imgs/Propreties-Icon.png"></span>\n    <span>{{userInfo.no_of_properties}} {{\'Properties Listed\' |translate}}</span>\n  </ion-col>\n</ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <ion-row class="my_listing_text">\n          <ion-col col-12 text-center>\n              <h3>{{\'My Listings\' | translate}}</h3>\n            </ion-col>\n      </ion-row>\n      <ion-row class="property_bedroom" *ngFor="let property of properties[0]">\n          <ion-col col-12 no-padding>\n              <img (click)="openPropertyDetail(property)" src="{{property.picture}}">\n              <p no-margin>{{property.title}}</p>\n            </ion-col>\n            <ion-col col-12 no-padding class="border_align">\n              <span> <img src="assets/imgs/building.png"></span>\n              <span class="kiryat_Bialik">{{property.city | translate}}</span>\n            </ion-col>\n            <ion-col col-12 no-padding class="address_img_sec">\n                <span>\n                    <ion-icon name="pin"></ion-icon>\n                 </span>\n              <span>{{property.area | translate}}</span>\n            </ion-col>\n            \n            <ion-col col-7>\n                <div class="bottom_img_sec">\n                  <span><img src="assets/imgs/8.png"> &nbsp;<strong>{{property.bedrooms}}</strong></span>&nbsp;\n                  <span><img src="assets/imgs/7.png">&nbsp;<strong>{{property.bathrooms}}</strong></span>&nbsp;\n                  <span><img src="assets/imgs/building.png">&nbsp;<strong>{{property.floor}}</strong></span>\n                </div>\n            </ion-col>\n            <ion-col col-5 class="payment">\n               <p no-margin>{{property.price}}</p>\n              </ion-col>\n              <ion-col col-12 class="date_sec">\n                <p> {{\'Date Listed:\' | translate}} 02/05/2019</p>\n              </ion-col>\n   <div class="edit" (click)="editProperty(property)">\n     <p>{{\'Edit\' | translate}}</p>\n   </div>\n      </ion-row>\n\n    </ion-col>\n  </ion-row>\n    \n</ion-grid>\n<!-- INFINITY SCROLLER -->\n<ion-infinite-scroll (ionInfinite)="doInfinite($event,currentPage)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<!-- INFINITY SCROLLER END -->\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/mylisting/mylisting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MylistingPage);
    return MylistingPage;
}());

//# sourceMappingURL=mylisting.js.map

/***/ })

});
//# sourceMappingURL=12.js.map