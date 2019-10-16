webpackJsonp([8],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFilterPageModule", function() { return PropertyFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_filter__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PropertyFilterPageModule = /** @class */ (function () {
    function PropertyFilterPageModule() {
    }
    PropertyFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__property_filter__["a" /* PropertyFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__property_filter__["a" /* PropertyFilterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], PropertyFilterPageModule);
    return PropertyFilterPageModule;
}());

//# sourceMappingURL=property-filter.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_advance_search_advance_search__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(163);
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
 * Generated class for the PropertyFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropertyFilterPage = /** @class */ (function () {
    function PropertyFilterPage(navCtrl, navParams, _fb, translate, poviderForAllProvider, storage, advanceSearchProvider, loadingCtrl, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.translate = translate;
        this.poviderForAllProvider = poviderForAllProvider;
        this.storage = storage;
        this.advanceSearchProvider = advanceSearchProvider;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.minmaxarea_min = 100;
        this.minmaxarea_max = 5000;
        this.minmaxfloor_min = 1;
        this.minmaxfloor_max = 20;
        this.minmaxprice_min = 100000;
        this.minmaxprice_max = 5000000;
        this.numrooms_min = 1;
        this.numrooms_max = 20;
        this.propertyTypDropdown = true;
        this.propCheck = 'rent';
        console.log(" City === ", this.params.get('city'));
        this.getUserDetails();
        this.getToken();
        this.getCity();
    }
    PropertyFilterPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    PropertyFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyFilterPage');
    };
    PropertyFilterPage.prototype.ngOnInit = function () {
        this.filterPropertyForm = this._fb.group({
            token: [],
            propertyType: ['rent', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            minmaxprice: [{ upper: 20000, lower: 1000 }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            minmaxprice2: [{ upper: 4000000, lower: 300000 }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            numrooms: [{ upper: 20, lower: 1 }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            furniture: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            Type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            squareMeters: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            amenities: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            city: [this.params.get('city'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
        });
    };
    // get City
    PropertyFilterPage.prototype.getCity = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            console.log("prop rent Ts == " + val.token);
            _this.poviderForAllProvider.newgetCity(val.token).then(function (data) {
                _this.citys = data.res;
            });
        });
    };
    // GET Token
    PropertyFilterPage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.getToken = val.token;
            console.log("USER Details === " + _this.getToken);
        });
    };
    // FILTER
    PropertyFilterPage.prototype.filterMe = function () {
        console.log("ADVANCE FILTER DETAILS === ", this.filterPropertyForm.value);
        this.viewCtrl.dismiss(this.filterPropertyForm);
    };
    // Loading 
    PropertyFilterPage.prototype.loading = function () {
        this.loadings = this.loadingCtrl.create();
        this.loadings.present();
    };
    PropertyFilterPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
            console.log(" LANGUAGE CSS " + _this.lanCss);
            console.log("user language ======= ", details.selected_language + " LANGUAGE CSSS======== " + _this.lanCss);
            _this.lanCss = details.selected_language;
            if (_this.lanCss == 'ar') {
                _this.selectMinPrice = 'בחר מחיר מינימלי';
                _this.selectMaxPrice = 'בחר מחיר מרבי';
            }
            else {
                _this.selectMinPrice = 'Select Min Price';
                _this.selectMaxPrice = 'Select Max Price';
            }
            _this.selectOptions = {
                cssClass: _this.lanCss,
            };
        });
    };
    PropertyFilterPage.prototype.onChange1 = function (val) {
        console.log(val);
        this.propCheck = val;
    };
    PropertyFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-property-filter',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/property-filter/property-filter.html"*/'<!--\n  Generated template for the PropertyFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n        <ion-buttons start>\n                <button ion-button round color="dark" (click)="closeModal()">\n                    <ion-icon name="close" class="button-round"></ion-icon>\n                </button>\n            </ion-buttons>\n      <ion-title Class="for_sale">\n        <img src="assets/imgs/logosapir.png" class="logo_img">\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  	<form [formGroup]="filterPropertyForm" class="list-form">\n      <ion-list [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n        <ion-item class="filter_top_border"> \n            <ion-input type="text" hidden formControlName="token" value="{{getToken}}"></ion-input>\n        </ion-item>\n\n\n        <ion-item class="form_label">\n            <ion-label color="primary"  stacked>{{\'Property Type\' | translate}}:</ion-label>\n            <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}"  formControlName="Type" placeholder="{{\'Select Property Type\' | translate}}" multiple="true" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option value="Cottage">{{\'Cottage\' | translate}}</ion-option>\n              <ion-option value="Duplex">{{\'Duplex\' | translate}}</ion-option>\n              <ion-option value="Flats">{{\'Flats\' | translate}}</ion-option>\n              <ion-option value="Penthouse">{{\'Penthouse\' | translate}}</ion-option>\n              <ion-option value="Villa">{{\'Villa\' | translate}}</ion-option>\n              <ion-option value="Studio">{{\'Studio\' | translate}}</ion-option>\n              <ion-option value="Commercial">{{\'Commercial\' | translate}}</ion-option>\n            </ion-select>\n        </ion-item>\n\n              <ion-item class="form_label">\n                  <ion-label color="primary" stacked>{{\'Furniture\' | translate}}:</ion-label>\n                  <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="furniture" placeholder="{{\'Furniture\' | translate}}" multiple="true" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                    <ion-option value="Fully Furnished">{{\'Furnished\' | translate}}</ion-option>\n                    <ion-option value="Non Furnished">{{\'Unfurnished\' | translate}}</ion-option>\n                    <ion-option value="Semi Furnished">{{\'Semi-Furnished\' | translate}}</ion-option>\n                   </ion-select>\n                </ion-item>\n\n                  <ion-item class="form_label">\n                      <ion-label color="primary" stacked>{{\'Amenities\' | translate}}:</ion-label>\n                                        <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="amenities" placeholder="{{\'Amenities\' | translate}}" class="select_cateog_sell" multiple="true" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                          <ion-option value="Air-conditioning">{{\'Air-conditioning\' | translate}}</ion-option>\n                                          <ion-option value="Balcony">{{\'Balcony\' | translate}}</ion-option>\n                                          <ion-option value="Storage">{{\'Storage\' | translate}}</ion-option>\n                                          <ion-option value="Parking">{{\'Parking\' | translate}}</ion-option>\n                                          <ion-option value="Elevator">{{\'Elevator\' | translate}}</ion-option>\n                                          <ion-option value="Pets">{{\'Pets\' | translate}}</ion-option>\n                                          <ion-option value="Accessibility">{{\'Accessibility\' | translate}}</ion-option>\n                                          <ion-option value="Bars"> {{\'Bars\' | translate}}</ion-option>\n                                          <ion-option value="Renovated">{{\'Renovated\' | translate}}</ion-option>\n                                          <ion-option value="Safe Room">{{\'Safe Room\' | translate}}</ion-option>\n                                          <ion-option value="Long-Term">{{\'Long-Term\' | translate}}</ion-option>\n                                        </ion-select>\n                    </ion-item>\n                    &nbsp;\n                <button ion-button block color="primary" type="submit" (click)="filterMe()">{{\'Filter Results\' | translate}}</button>\n\n      </ion-list>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/property-filter/property-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_advance_search_advance_search__["a" /* AdvanceSearchProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PropertyFilterPage);
    return PropertyFilterPage;
}());

//# sourceMappingURL=property-filter.js.map

/***/ })

});
//# sourceMappingURL=8.js.map