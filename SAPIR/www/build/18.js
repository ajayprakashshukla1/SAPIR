webpackJsonp([18],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListPageModule", function() { return FavoriteListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_list__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FavoriteListPageModule = /** @class */ (function () {
    function FavoriteListPageModule() {
    }
    FavoriteListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite_list__["a" /* FavoriteListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], FavoriteListPageModule);
    return FavoriteListPageModule;
}());

//# sourceMappingURL=favorite-list.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favourite_favourite__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
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
 * Generated class for the FavoriteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoriteListPage = /** @class */ (function () {
    function FavoriteListPage(languageService, poviderForAllProvider, navCtrl, navParams, favouriteProvider, loadingCtrl, storage, toastCtrl, translate, events) {
        this.languageService = languageService;
        this.poviderForAllProvider = poviderForAllProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favouriteProvider = favouriteProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.events = events;
        this.favorites = [];
        this.loadingContent = true;
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
    }
    FavoriteListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoriteListPage');
        this.getFavouriteProperty();
    };
    FavoriteListPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter========================== FavoriteListPage');
        // this.getFavouriteProperty();
    };
    // GET PROPERTY
    FavoriteListPage.prototype.getFavouriteProperty = function () {
        var _this = this;
        // this.showLoader();
        this.newPageNum = this.propPage + 1;
        //console.log("GET PAGE NUm ="+this.propPage+"  .PAGE ==== "+this.newPageNum);
        this.storage.get('user').then(function (val) {
            _this.userToken = val.token;
            console.log("TOKEN   ==== " + _this.userToken);
            console.log("USER TOKEN =" + _this.userToken + "NEW PAGE NUMBER =======" + _this.newPageNum);
            _this.favouriteProvider.getFavorites(1, _this.userToken)
                .then(function (data) {
                console.log("FAVORITES DATA === " + JSON.stringify(data));
                if (data.property) {
                    _this.favorites = data.property;
                }
                _this.propPage = data.paged;
                _this.maxPages = data.max_num_pages;
                if (_this.maxPages == 0) {
                    _this.favorites = [];
                }
                console.log("GET PAGE NUm =" + _this.propPage + "  .PAGE ==== " + _this.maxPages);
                _this.loadingContent = false;
            });
        });
        // this.loading.dismiss();
    };
    // DELETE PROPERTY
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        console.log("UNFAVOURITE");
        this.storage.get('user').then(function (val) {
            _this.favouriteProvider.favorite(favorite, val, 0)
                .then(function (property) {
                var favPropLength = _this.favorites.length;
                for (var i = 0; i < favPropLength; i++) {
                    if (_this.favorites[i].id == favorite.id) {
                        _this.favorites.splice(i, 1);
                        console.log("FAVORITE PROPERT MATCHED == " + _this.favorites[i].id);
                    }
                    else {
                        console.log("NOT MATCHED == " + _this.favorites[i].id);
                    }
                }
                var msg = property.json().response;
                console.log("MESSAGE  == " + msg);
                var toast = _this.toastCtrl.create({
                    message: msg,
                    cssClass: 'mytoast',
                    duration: 2000
                });
                toast.present(toast);
            })
                .catch(function (error) { return console.log(JSON.stringify(error)); });
        });
    };
    //INFINITY SCROllER
    FavoriteListPage.prototype.doInfinite = function (infiniteScroll, getPageNum) {
        var _this = this;
        // infiniteScroll.complete();
        console.log("PAGE NUM =" + getPageNum);
        this.newPageNum = parseInt(getPageNum) + parseInt('1');
        console.log("ADD page = " + this.newPageNum + "  OLD PAGE NUM = " + getPageNum + " max PAGE " + this.maxPages);
        if (this.newPageNum <= this.maxPages) {
            this.propPage = this.newPageNum;
            //    alert("NEW PAGE NUM = "+this.newPageNum+"MAX PAGES "+this.maxPages);
            console.log("IN IF CONDITION =" + "MAX PAGES = " + this.maxPages + " NEW PAGE NUMBER =" + this.newPageNum);
            this.favouriteProvider.getFavorites(this.newPageNum, this.userToken)
                .then(function (data) {
                _this.propPage = data.paged;
                _this.maxPages = data.max_num_pages;
                console.log("Scrooling Response == " + JSON.stringify(data) + " ========= Scrooling DATA LEANGTH =========" + data.property.length);
                for (var i = 0; i < data.property.length; i++) {
                    _this.favorites.push(data.property[i]);
                }
                _this.loading = false;
            }).catch(function (error) { return alert(error); });
            console.log('Begin async operation');
            infiniteScroll.complete();
        }
        else {
            console.log("YOUR LIMIT IS DONE");
            infiniteScroll.complete();
        }
    };
    //Property Details
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push('page-propertyinfo', {
            'id': favorite.id,
            'propertyDetails': favorite
        });
    };
    // DELETE PROPERTY END
    FavoriteListPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    FavoriteListPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
            console.log(" LANGUAGE CSS " + _this.lanCss);
            console.log("user language ======= ", details.selected_language);
        });
    };
    // Languages
    FavoriteListPage.prototype.setLanguage = function () {
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
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    FavoriteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorite-list',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/favorite-list/favorite-list.html"*/'<!--\n  Generated template for the FavoriteListPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding class="lg_screen_bg">\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n          <div class="language_selector" end>\n            <!-- <ion-label>{{ \'SELECT_LANGUAGE\' | translate }}</ion-label> -->\n            <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n            </ion-select>\n          </div>\n        <!-- <img src="assets/imgs/search.png" class="serach"> -->\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="lightest-bg">	\n          <ion-row class="fav_list_img">\n              <ion-col col-12 no-padding>\n                <img src="assets/imgs/listing_img.png">\n              </ion-col>\n            </ion-row>  \n            &nbsp;\n          <ion-grid *ngIf="!favorites.length && !loadingContent" fixed>\n            <ion-row>\n              <ion-col>\n                <ion-card class="primary-bg" margin-top>\n                  <ion-card-content>\n                    <p text-center class="text-white">{{\'You have no favorite properties\' | translate}}.</p>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n          <ion-grid fixed class="fav_listing_sec">\n            <ion-row>\n              <ion-col col-12 no-padding>\n                <ion-list [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                  <ion-item *ngFor="let favorite of favorites" no-padding no-lines>\n                      <div (click)="deleteItem(favorite)" class="heart_icon_sec"><ion-icon color="danger" name="heart"></ion-icon></div>  \n                      <button ion-item  no-padding (click)="itemTapped(favorite)">\n                          <ion-thumbnail item-left>\n                              <img src="{{favorite.thumbnail}}"/>\n                          </ion-thumbnail>\n                          <ion-row class="title_sec">\n                              <ion-col col-12>\n                                  <h2>{{favorite.title}}</h2>\n                              </ion-col>\n                            </ion-row>\n                          \n                          <ion-row class="title_sec">\n                            <ion-col col-8>\n                              <span>{{favorite.city | translate}}, {{favorite.state}} </span>\n                            </ion-col>\n                            <ion-col col-4 text-center>\n                              <span class="price">{{favorite.price}}</span>\n                            </ion-col>\n                          </ion-row>\n                          &nbsp;\n                \n                      </button>\n                  </ion-item>\n                </ion-list>\n               \n              </ion-col>\n            </ion-row>\n            <!-- INFINITY SCROLLER -->\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event,propPage)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n        <!-- INFINITY SCROLLER END  -->\n            </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/favorite-list/favorite-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_favourite_favourite__["a" /* FavouriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], FavoriteListPage);
    return FavoriteListPage;
}());

//# sourceMappingURL=favorite-list.js.map

/***/ })

});
//# sourceMappingURL=18.js.map