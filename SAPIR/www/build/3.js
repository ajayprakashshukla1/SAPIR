webpackJsonp([3],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StilllookingPageModule", function() { return StilllookingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stilllooking__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StilllookingPageModule = /** @class */ (function () {
    function StilllookingPageModule() {
    }
    StilllookingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stilllooking__["a" /* StilllookingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stilllooking__["a" /* StilllookingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], StilllookingPageModule);
    return StilllookingPageModule;
}());

//# sourceMappingURL=stilllooking.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StilllookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(163);
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
 * Generated class for the StilllookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StilllookingPage = /** @class */ (function () {
    function StilllookingPage(translate, _fb, navCtrl, navParams, storage, poviderForAllProvider, loadingController, toastController) {
        this.translate = translate;
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.poviderForAllProvider = poviderForAllProvider;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.getToken();
        this.getUserDetails();
    }
    StilllookingPage.prototype.ngOnInit = function () {
        this.stillLookingForm = this._fb.group({
            token: [],
            type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            budget: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            furniture: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyTitle: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            serviceAddress: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            settlement: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            neighbourhood: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            sqMeter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            numberOfBedrooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            numberOfBathrooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            floorPreferred: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            parkingSpot: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            amenities: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyAddress: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            houseNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            sizeInSquareFeet: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
        });
        // For Auto fill
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    StilllookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StilllookingPage');
    };
    StilllookingPage.prototype.sendData = function (formValue) {
        var _this = this;
        console.log("Form Value === " + JSON.stringify(formValue));
        var loading = this.loadingController.create();
        loading.present();
        var endPoint = 'still_looking_form';
        this.poviderForAllProvider.stillProperty(endPoint, formValue).subscribe(function (res) {
            console.log(" STIlling looking RES================== ", JSON.stringify(res));
            if (res.msg) {
                var toast = _this.toastController.create({
                    message: res.msg,
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                loading.dismiss();
                _this.navCtrl.setRoot('page-home');
            }
            else {
                loading.dismiss();
            }
        });
    };
    // AUTo Search 
    // this.acService = new google.maps.places.AutocompleteService();
    StilllookingPage.prototype.updateSearch = function () {
        // console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            //   console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            if (predictions != null) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                });
            }
        });
    };
    StilllookingPage.prototype.getUserDetails = function () {
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
    StilllookingPage.prototype.chooseItem = function (item) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': item.description
        }, function (results, status) {
            console.log("RESULTS  == " + JSON.stringify(results));
            // this.propertiesDetails=results;
            // this.start = results[0].address_components[0].long_name;
            // console.log("Start Origin +++===" + JSON.stringify(results[0].address_components[0].long_name));
            //end
        });
        // console.log(item);
        // console.log(item.description);
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
    };
    // AUTO SEARCH END
    // STRAGE
    StilllookingPage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.token = val.token;
            console.log("USER Details === " + _this.token);
        });
    };
    StilllookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stilllooking',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/stilllooking/stilllooking.html"*/'\n<ion-header padding class="lg_screen_bg">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-grid [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n        <ion-row class="content_align">\n            <ion-col col-12 text-center>\n                <span class="tellus">{{\'Tell us what you are looking for\' | translate}}</span><br><span class="small_text">{{\'Please fill out the form below and we will contact you shortly.\' | translate}}</span>\n            </ion-col>\n          </ion-row>\n        <form class="list-form" [formGroup]="stillLookingForm"  (ngSubmit)="sendData(stillLookingForm.value)"> \n            <ion-input formControlName="token" value="{{token}}" hidden type="text" placeholder="{{\'PROPERTY TYPE\' | translate}}"></ion-input>\n      <ion-row class="form_padding" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n        <ion-col col-12>\n    <ion-item>\n      <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="type" type="text" placeholder="{{\'Property Purpose\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n        <ion-option  value="sell">{{\'Sell\' | translate}}</ion-option>           \n        <ion-option  value="rent">{{\'Rent\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n        <ion-select [selectOptions]="selectOptions" multiple="true" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="propertyType" type="text" placeholder="{{\'Properties Type\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n          <ion-option value="Cottage">{{\'Cottage\' | translate}}</ion-option>\n          <ion-option value="Duplex">{{\'Duplex\' | translate}}</ion-option>\n          <ion-option value="Flats">{{\'Flats\' | translate}}</ion-option>\n          <ion-option value="Penthouse">{{\'Penthouse\' | translate}}</ion-option>\n          <ion-option value="Villa">{{\'Villa\' | translate}}</ion-option>\n          <ion-option value="Studio">{{\'Studio\' | translate}}</ion-option>\n          <ion-option value="Commercial">{{\'Commercial\' | translate}}</ion-option>\n        </ion-select>\n      </ion-item>\n        <ion-item>\n          <ion-input formControlName="budget" type="number" placeholder="{{\'Budget\' | translate}}"></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-select [selectOptions]="selectOptions" multiple="true" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="furniture" placeholder="{{\'Furniture\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n          <ion-option value="Fully Furnished">{{\'Fully Furnished\' | translate}}</ion-option>\n          <ion-option value="Semi Furnished">{{\'Semi Furnished\' | translate}}</ion-option>\n          <ion-option value="Non Furnished">{{\'Non Furnished\' | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n   \n      <ion-item>\n          <ion-input formControlName="neighbourhood" type="text" placeholder="{{\'NEIGHBOURHOOD\' | translate}}"></ion-input>\n        </ion-item>\n\n          <ion-item>\n              <ion-input formControlName="numberOfBedrooms" type="tel" placeholder="{{\'Number of Bedrooms\' | translate}}"></ion-input>\n            </ion-item>\n  \n            <ion-item>\n                <ion-input formControlName="numberOfBathrooms" type="tel" placeholder="{{\'Number of Bathrooms\' | translate}}"></ion-input>\n              </ion-item>\n  \n              <ion-item>\n                  <ion-input formControlName="floorPreferred" type="tel" placeholder="{{\'Floor Preferred\' | translate}}"></ion-input>\n                </ion-item>\n  \n                <ion-item>\n  \n                <ion-select [selectOptions]="selectOptions" multiple="true" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="amenities" placeholder="{{\'Amenities\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                  <ion-option value="Air-conditioning">{{\'Air-conditioning\' | translate}}</ion-option>\n                  <ion-option value="Balcony">{{\'Balcony\' | translate}}</ion-option>\n                  <ion-option value="Storage">{{\'Storage\' | translate}}</ion-option>\n                  <ion-option value="Parking">{{\'Parking\' | translate}}</ion-option>\n                  <ion-option value="Elevator">{{\'Elevator\' | translate}}</ion-option>\n                  <ion-option value="Pets">{{\'Pets\' | translate}}</ion-option>\n                  <ion-option value="Accessibility">{{\'Accessibility\' | translate}}</ion-option>\n                  <ion-option value="Bars"> {{\'Bars\' | translate}}</ion-option>\n                  <ion-option value="Renovated">{{\'Renovated\' | translate}}</ion-option>\n                  <ion-option value="Safe Room">{{\'Safe Room\' | translate}}</ion-option>\n                  <ion-option value="Long-Term">{{\'Long-Term\' | translate}}</ion-option>\n                  </ion-select>\n                </ion-item>\n  \n  </ion-col>\n  <ion-col col-12>\n      <ion-item>\n          <ion-input formControlName="city" type="text" placeholder="{{\'City\' | translate}}"></ion-input>\n        </ion-item>\n  </ion-col> \n    <ion-col col-12>\n          <ion-item>\n              <ion-input formControlName="sizeInSquareFeet" type="number" placeholder="{{\'SIZE IN SQUARE FEET\' | translate}}"></ion-input>\n            </ion-item>\n    </ion-col>\n  </ion-row>\n \n  <ion-row class="bottom_color_bg" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'rtl\' : (normalContent !=\'ar\')}">\n  <ion-col col-12>\n      <ion-item>\n          <ion-input type="text"  formControlName="name" placeholder="{{\'NAME\' | translate}}" class="place_holder_text"></ion-input>\n        </ion-item>\n  </ion-col>\n  <ion-col col-6>\n      <ion-item>\n          <ion-input formControlName="phoneNumber" type="tel" placeholder="{{\'PHONE\' | translate}} #" class="place_holder_text"></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col col-6>\n        <ion-item>\n            <ion-input formControlName="email" type="email" placeholder="{{\'Email\' | translate}}" class="place_holder_text"></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col col-12>\n          <ion-item>\n              <ion-input formControlName="message" type="text" placeholder="{{\'MESSAGE\' | translate}}" class="place_holder_text"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col col-12 text-center class="send_btn">\n            <ion-col col-5>      \n              <button type="submit" ion-button  [disabled]="stillLookingForm.get(\'name\').hasError(\'required\')  || stillLookingForm.get(\'email\').hasError(\'required\') || stillLookingForm.get(\'phoneNumber\').hasError(\'required\') || stillLookingForm.get(\'message\').hasError(\'required\') "class="view_map">{{\'SEND\' | translate}}</button>\n            </ion-col>\n          </ion-col>\n  </ion-row>\n  </form>\n  </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/stilllooking/stilllooking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */]])
    ], StilllookingPage);
    return StilllookingPage;
}());

//# sourceMappingURL=stilllooking.js.map

/***/ })

});
//# sourceMappingURL=3.js.map