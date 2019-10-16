webpackJsonp([5],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellOutFormPageModule", function() { return SellOutFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_out_form__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SellOutFormPageModule = /** @class */ (function () {
    function SellOutFormPageModule() {
    }
    SellOutFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_out_form__["a" /* SellOutFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_out_form__["a" /* SellOutFormPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], SellOutFormPageModule);
    return SellOutFormPageModule;
}());

//# sourceMappingURL=sell-out-form.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellOutFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_language_service_language_service__ = __webpack_require__(360);
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
 * Generated class for the SellOutFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellOutFormPage = /** @class */ (function () {
    function SellOutFormPage(languageService, events, _fb, navCtrl, navParams, poviderForAllProvider, toastCtrl, actionSheetCtrl, camera, loadingCtrl, transfer, storage, imagePicker, translate) {
        var _this = this;
        this.languageService = languageService;
        this.events = events;
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poviderForAllProvider = poviderForAllProvider;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.storage = storage;
        this.imagePicker = imagePicker;
        this.translate = translate;
        this.sellSection1 = true;
        this.sellSection2 = false;
        this.sellSection3 = false;
        this.imageUploadId = [];
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
        this.rooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '6+'];
        this.unit = 'sq.m';
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
        this.getCity();
        this.storage.get('platform').then(function (val) {
            _this.checkBrowser = val;
            //  alert('CHECK BROWSER  == '+val);
        });
    }
    SellOutFormPage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        console.log("LANGUAGE === " + defaultLanguage);
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.lanCss = this.languageSelected;
            this.storage.get('user').then(function (details) {
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                    console.log("Change Language === ", val);
                });
                console.table(details);
                details.selected_language = _this.languageSelected;
                console.log("user details", details);
                _this.storage.set('user', details);
                _this.events.publish('lan:created', details.selected_language);
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
    SellOutFormPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SellOutFormPage');
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.token = val.token;
                _this.getCity();
                console.log("VAL TOKEn" + val.token);
            }
            else {
            }
        });
    };
    SellOutFormPage.prototype.ngOnInit = function () {
        this.onYourPropertyForm = this._fb.group({
            token: [],
            ImagesId: [],
            propertyType: [],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyTitle: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)])],
            propertyTypes: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            rooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            furniture: [],
            floor: [],
            amenities: [],
            description: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4)])],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            currency_type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            ageOfHome: [''],
            squareMeters: [],
            saleArea: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propImges: [],
            propertydetails: [],
            bathrooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyUnit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    SellOutFormPage.prototype.getCity = function () {
        var _this = this;
        // alert(" I am city");
        this.storage.get('user').then(function (val) {
            _this.poviderForAllProvider.newgetCity(val.token).then(function (data) {
                _this.citys = data.res;
            });
        });
    };
    //  section Hide or Show
    SellOutFormPage.prototype.section = function (val) {
        console.log("value === " + val);
        var sectionShow = val;
        console.log("SHOW section ==" + sectionShow);
        if (sectionShow == 'sellSection2') {
            this.sellSection2 = true;
            this.sellSection1 = false;
            this.sellSection3 = false;
        }
        if (sectionShow == 'sellSection3') {
            this.sellSection2 = false;
            this.sellSection1 = false;
            this.sellSection3 = true;
        }
        if (sectionShow == 'sellSection1') {
            this.sellSection2 = false;
            this.sellSection1 = true;
            this.sellSection3 = false;
        }
    };
    SellOutFormPage.prototype.updateSearch = function () {
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
    SellOutFormPage.prototype.chooseItem = function (item) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': item.description
        }, function (results, status) {
            console.log("RESULTS  == " + JSON.stringify(results));
            _this.propertiesDetails = results;
            // this.start = results[0].address_components[0].long_name;
            // console.log("Start Origin +++===" + JSON.stringify(results[0].address_components[0].long_name));
            //end
        });
        // console.log(item);
        // console.log(item.description);
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
    };
    SellOutFormPage.prototype.addImage = function () {
        var _this = this;
        console.log("iMAGE upload counnt " + this.imageUploadId.length);
        if (this.imageUploadId.length <= 15) {
            var toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Upload your Image:',
                buttons: [
                    {
                        text: 'Camera',
                        role: 'destructive',
                        handler: function () {
                            console.log('Destructive clicked');
                            var options = {
                                quality: 100,
                                destinationType: _this.camera.DestinationType.FILE_URI,
                                sourceType: _this.camera.PictureSourceType.CAMERA,
                            };
                            console.log("OPTION == " + JSON.stringify(options));
                            _this.camera.getPicture(options).then(function (imageData) {
                                _this.imageURI = imageData;
                                console.log("IMAGE DATA" + _this.imageURI);
                                _this.uploadFile();
                            }, function (err) {
                                console.log(err);
                                //toast.present(err);
                            });
                        }
                    }, {
                        text: 'Gallery',
                        handler: function () {
                            var options = {
                                maximumImagesCount: 15,
                                minimumImagesCount: 5,
                                width: 800,
                                height: 800,
                                quality: 80
                            };
                            _this.imagePicker.getPictures(options).then(function (results) {
                                var totalImage = results.length + _this.imageUploadId.length;
                                if (totalImage <= 15) {
                                    for (var i = 0; i < results.length; i++) {
                                        console.log('Image URI: ' + results[i]);
                                        _this.imageURI = results[i];
                                        _this.uploadFile();
                                    }
                                }
                                else {
                                    _this.alertMsg(' please add images min 5 max 15  you are uploded ' + _this.imageUploadId.length + ' image');
                                }
                            }, function (err) { });
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'You are uploaded maximum images',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    //  UPLOAD FILE
    SellOutFormPage.prototype.uploadFile = function () {
        var _this = this;
        var upImgUrl = 'https://sapir.app/wp-json/mobileapi/image_upload?token=';
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'imageURI',
            fileName: 'ionicfile.jpeg',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, upImgUrl + this.token, options)
            .then(function (data) {
            _this.imageUploadId.push(data.response);
            console.log("Store image Id == " + _this.imageUploadId + " Image Response Data == " + JSON.stringify(data.response));
            loader.dismiss();
            // this.presentToast("Image uploaded successfully");
            _this.uplodedImage = _this.imageUploadId.length;
        }, function (err) {
            console.log("Error = " + JSON.stringify(err));
            loader.dismiss();
            _this.presentToast(err);
        });
        // loader.dismiss();
    };
    SellOutFormPage.prototype.sendData = function (formValue) {
        // console.log("FORM DATA === " + JSON.stringify(formValue.value));
        this.numOfImages = this.imageUploadId.length;
        console.log("IMAGE LEANGTH     ===============================================================  " + this.imageUploadId.length);
        if (this.imageUploadId.length < 5) {
            this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
        }
        else {
            // this.alertMsg('you are added '+this.imageUploadId+'image');
            formValue.value.propertydetails = this.propertiesDetails;
            formValue.value.ImagesId = this.imageUploadId;
            this.sendDataNow(formValue);
        }
    };
    // process send button
    SellOutFormPage.prototype.sendDataNow = function (formValue) {
        var _this = this;
        console.log("VALUEsss ===== " + JSON.stringify(formValue.value));
        var url = "createformdata";
        this.poviderForAllProvider.post(url, formValue.value).subscribe(function (res) {
            if (res.status == "success") {
                _this.alertMsg(res.msg);
                _this.storage.get('user').then(function (val) {
                    console.log("LOCAL STORAGE === ", JSON.stringify(val));
                    val.no_of_properties = parseInt(val.no_of_properties) + 1;
                    _this.storage.set('user', val);
                });
                _this.navCtrl.setRoot('page-home');
            }
            else if (res.status == "error") {
                if (res.errMsg == 'invalid_token') {
                    _this.alertMsg(res.msg);
                }
                else {
                    _this.alertMsg(res.msg);
                }
            }
        }), function (err) {
            console.log(err);
        };
    };
    //  TOAST ========
    SellOutFormPage.prototype.alertMsg = function (msg) {
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SellOutFormPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    // MULTIPLE IMAGE UPLOAD =================
    SellOutFormPage.prototype.onSelectFile = function (event) {
        var _this = this;
        this.filesAmount = event.target.files.length;
        if (event.target.files && event.target.files[0] && this.filesAmount >= 5 && this.filesAmount <= 15) {
            this.imageURI = event.target.files;
            var reader = new FormData();
            console.log("READER ", reader);
            for (var i = 0; i < this.filesAmount; i++) {
                reader.append('file[]', event.target.files[i]);
            }
            var url = "pwa_fileupload";
            this.poviderForAllProvider.post(url, reader).subscribe(function (res) {
                console.log("IMAGE ", res);
                for (var i = 0; i < res.length; i++) {
                    _this.imageUploadId.push(res[i]);
                }
            }), function (err) {
                console.log(err);
            };
        }
        else {
            this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
        }
    };
    SellOutFormPage.prototype.BrowsersendData = function (formValue) {
        formValue.value.ImagesId = this.imageUploadId;
        var imgIdLength = this.imageUploadId.length;
        console.log("image Length == ", imgIdLength);
        if (imgIdLength >= 5 && imgIdLength <= 15) {
            this.sendDataNow(formValue);
        }
        else {
            this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
        }
    };
    SellOutFormPage.prototype.getUserDetails = function () {
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
            if (details.selected_language == 'ar') {
                _this.amenitiesDropDown = [
                    // { value: 'Air-conditioning', component: 'מיזוג אויר' },
                    // { value: 'Patio or balcony', component: 'מרפסת' },
                    // { value: 'Storage', component: 'מחסן' },
                    // { value: 'Dishwasher', component: 'מדיח כלים' },
                    // { value: 'Covered parking', component: 'חניה מקורה' },
                    // { value: 'Laundry Washe', component: 'מכונת כביסה' },
                    // { value: 'Dryer', component: 'מייבש כביסה' },
                    // { value: 'Pool', component: 'בריכה' },
                    // { value: 'Garden', component: 'דירת גן' },
                    // { value: 'Pet Friendly', component: 'אפשרי בעלי חיים' },
                    { value: 'Air-conditioning', component: 'מיזוג אויר' },
                    { value: 'Balcony', component: 'מרפסת' },
                    { value: 'Storage', component: 'מחסן' },
                    { value: 'Parking', component: 'חניה' },
                    { value: 'Elevator', component: 'מעלית' },
                    { value: 'Pets', component: 'חיות מחמד' },
                    { value: 'Accessibility', component: 'נגישות' },
                    { value: 'Bars', component: 'ברים' },
                    { value: 'Renovated', component: 'משופץ' },
                    { value: 'Safe Room', component: 'חדר בטוח' },
                    { value: 'Long-Term', component: 'טווח ארוך' },
                ];
            }
            else {
                _this.amenitiesDropDown = [
                    // { value: 'Air-conditioning', component: 'Air-conditioning' },
                    // { value: 'Patio or balcony', component: 'Patio or balcony' },
                    // { value: 'Storage', component: 'Storage' },
                    // { value: 'Dishwasher', component: 'Dishwasher' },
                    // { value: 'Covered parking', component: 'Covered parking' },
                    // { value: 'Laundry Washe', component: 'Laundry Washe' },
                    // { value: 'Dryer', component: 'Dryer' },
                    // { value: 'Pool', component: 'Pool' },
                    // { value: 'Garden', component: 'Garden' },
                    // { value: 'Pet Friendly', component: 'Pet Friendly' },
                    { value: 'Air-conditioning', component: 'Air-conditioning' },
                    { value: 'Balcony', component: 'Balcony' },
                    { value: 'Storage', component: 'Storage' },
                    { value: 'Parking', component: 'Parking' },
                    { value: 'Elevator', component: 'Elevator' },
                    { value: 'Pets', component: 'Pets' },
                    { value: 'Accessibility', component: 'Accessibility' },
                    { value: 'Bars', component: 'Bars' },
                    { value: 'Renovated', component: 'Renovated' },
                    { value: 'Safe Room', component: 'Safe Room' },
                    { value: 'Long-Term', component: 'Long-Term' },
                ];
            }
        });
    };
    SellOutFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sell-out-form',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/sell-out-form/sell-out-form.html"*/'<!--\n  Generated template for the SellOutFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding class="lg_screen_bg">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n        <!-- <img src="assets/imgs/search.png" class="serach"> -->\n    </ion-navbar>\n    <div class="language_selector" end>\n      <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n        <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n      </ion-select>\n    </div>\n  </ion-header>\n<ion-content>\n    <!-- <ion-card>\n        <ion-card-content> -->\n            <form [formGroup]="onYourPropertyForm" class="list-form" (ngSubmit)="sendData(onYourPropertyForm)">\n                <ion-row class="city_home1" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                    <ion-col col-12 class="rent">\n                      <span class="red astrick">*</span><ion-select formControlName="city" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{\'Select Location\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                        <ion-option *ngFor="let citydetails of citys" value="{{citydetails.id}}">{{citydetails.city | translate}}</ion-option>\n                      </ion-select>\n                      <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'city\').touched && onYourPropertyForm.get(\'city\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                    </ion-col>\n                  </ion-row>\n\n                <div *ngIf="sellSection1" id="sellForm">\n                    <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                        <ion-card-content no-padding>\n                <ion-input type="text" hidden formControlName="token" value="{{token}}" class="token_sec"></ion-input>\n								<ion-input type="text" hidden formControlName="ImagesId" class="token_sec"></ion-input>\n                <ion-input type="text" hidden formControlName="propertyType" value=\'sell\' class="token_sec"></ion-input>\n                <ion-input type="text" hidden formControlName="currency_type" value=\'Shekel\' ></ion-input>   \n\n              <ion-item>\n                  <ion-label color="primary" stacked><span class="red">*</span>{{\'Property Title\' | translate}}:</ion-label>\n                  <ion-input type="text" placeholder="{{\'Type here\' | translate}}" maxlength="50" formControlName="propertyTitle" class="input_border"></ion-input>\n                </ion-item>\n                <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'propertyTitle\').touched && onYourPropertyForm.get(\'propertyTitle\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n\n                  <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Type\' | translate}}:</ion-label>\n											<ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="propertyTypes" placeholder="{{\'Select Type\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n												     <ion-option value="Cottage">{{\'Cottage\' | translate}}</ion-option>\n                              <ion-option value="Duplex">{{\'Duplex\' | translate}}</ion-option>\n                              <ion-option value="Flats">{{\'Flats\' | translate}}</ion-option>\n                              <ion-option value="Penthouse">{{\'Penthouse\' | translate}}</ion-option>\n                              <ion-option value="Villa">{{\'Villa\' | translate}}</ion-option>\n                              <ion-option value="Studio">{{\'Studio\' | translate}}</ion-option>\n                              <ion-option value="Commercial">{{\'Commercial\' | translate}}</ion-option>\n											</ion-select>\n\n											<p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'propertyTypes\').touched && onYourPropertyForm.get(\'propertyTypes\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                       <!-- <ion-row>\n                          <ion-col col-12>\n                            <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Currency\' | translate}}:</ion-label>\n                            <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="currency_type" placeholder="{{\'Preferred Currency\' |translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                              <ion-option value="Euro">{{\'Euro\' |translate}} </ion-option>\n                              <ion-option value="Shekel">{{\'Shekel\' | translate}}</ion-option>\n                            </ion-select>\n                            <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'currency_type\').touched && onYourPropertyForm.get(\'currency_type\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                         </ion-col>\n                       </ion-row> -->\n\n                       <ion-row class="new_type">\n                        <ion-col col-12>\n                          <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Price\' | translate}}:</ion-label>\n                          <ion-input type="tel" formControlName="price" placeholder="{{\'Type here\' | translate}}" class="select_cateog_sell input_border"></ion-input>\n                          <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'price\').touched && onYourPropertyForm.get(\'price\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                        </ion-col>\n                      </ion-row>  \n\n                      <ion-row class="new_type">\n                        <ion-col col-12 no-padding>\n                            <ion-label color="primary" stacked padding><sup class="red">*</sup>{{\'Phone Number\' | translate}}:</ion-label>\n                            <ion-input type="tel"  formControlName="phone" placeholder="{{\'Phone Number\' | translate}}" class="select_cateog_sell"></ion-input>\n                            <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'phone\').touched && onYourPropertyForm.get(\'phone\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                        </ion-col>\n                      </ion-row>\n\n                          <ion-row>\n                              <ion-col col-12 class="Next" padding text-right>\n                                <button ion-button type="button" (click)="section(\'sellSection2\')" [disabled]="onYourPropertyForm.get(\'propertyTitle\').hasError(\'required\') || onYourPropertyForm.get(\'phone\').hasError(\'required\') || onYourPropertyForm.get(\'propertyTypes\').hasError(\'required\') || onYourPropertyForm.get(\'currency_type\').hasError(\'required\' || onYourPropertyForm.get(\'city\').hasError(\'required\')) || onYourPropertyForm.get(\'price\').hasError(\'required\')"\n                                 ion-button color="secondary">{{\'Next\' | translate}}</button>\n                              </ion-col>\n                            </ion-row>\n                          </ion-card-content>\n                        </ion-card>\n                            </div>\n                            \n                            <div *ngIf="sellSection2" id="section2">\n                                <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                                  <ion-card-content no-padding>\n                                    <!-- <p>&nbsp;</p> -->\n                                    <ion-row>\n                                      <ion-col col-12>\n                                          <ion-item>\n                                              <ion-label color="primary" stacked><span class="red">*</span>{{\'Number of Bedrooms\' | translate}}:</ion-label>                          \n                                              <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="rooms" placeholder="{{\'Number of Bedrooms\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate"> \n                                                <ion-option  value="1">Studio</ion-option>      \n                                                <ion-option *ngFor="let num of rooms" value="{{num}}">{{num}}</ion-option>\n                                              </ion-select>\n                                            </ion-item>\n                    \n                                            <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'rooms\').touched && onYourPropertyForm.get(\'rooms\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                                      </ion-col>\n                                      </ion-row>\n\n\n                                      <ion-row>\n                                        <ion-col col-12>\n                                            <ion-item>\n                                                <ion-label color="primary" stacked><span class="red">*</span>{{\'Number of Bathrooms\' | translate}}:</ion-label>                          \n                                                <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="bathrooms" placeholder="{{\'Number of Bathrooms\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                                  <ion-option value="1">1</ion-option>\n                                                  <ion-option value="2">2</ion-option>     \n                                                  <ion-option value="3">3</ion-option>\n                                                  <ion-option value="4">4</ion-option>\n                                                  <ion-option value="5">5</ion-option>\n                                                  <ion-option value="6">6</ion-option>\n                                                  <ion-option value="7+">7+</ion-option>\n                                                </ion-select>\n                                            </ion-item>\n                                            <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'bathrooms\').touched && onYourPropertyForm.get(\'bathrooms\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                                        </ion-col>\n                                    </ion-row>\n\n                                    <ion-row class="square_sec">\n                                      <ion-col col-6 class="rent">\n                                        <ion-item>\n                                            <ion-label color="primary" stacked>{{\'Property Size\' | translate}}:</ion-label>\n                                            <ion-input type="number" placeholder="{{\'Property Size\' | translate}}" formControlName="squareMeters" class="input_border"></ion-input>\n                                          </ion-item>\n                                          <!-- <p ion-text color="danger" class="text-1x has-error" padding *ngIf="onYourPropertyForm.get(\'squareMeters\').touched && onYourPropertyForm.get(\'squareMeters\').hasError(\'required\')">{{\'This field is required\' | translate}}</p> -->\n                                      </ion-col>\n\n                                      <ion-col col-6>\n                                        <ion-select  formControlName="propertyUnit" placeholder="{{\'Property unit\' | translate}}" [(ngModel)]="unit" class="select_cateog_sell" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                          <ion-option value="sq.m">{{\'Square metre\' | translate}}</ion-option>\n                                          <ion-option value="sq.ft">{{\'Square feet\' | translate}}</ion-option>\n                                      </ion-select>\n                                      </ion-col>\n                                    </ion-row>\n\n                                    <ion-row>\n                                      <ion-col col-12 class="rent">\n                                          <ion-item>\n                                            <ion-label color="primary" stacked>{{\'Age of home\' | translate}}:</ion-label>\n                                            <ion-input type="tel"   placeholder="{{\'Ex\' | translate}}: 1947" formControlName="ageOfHome" maxlength="4" minlength="4" class="input_border"></ion-input>\n                                          </ion-item>\n                                          <!-- <p ion-text color="danger" class="text-1x has-error" padding *ngIf="onYourPropertyForm.get(\'ageOfHome\').touched && onYourPropertyForm.get(\'ageOfHome\').hasError(\'required\') || onYourPropertyForm.get(\'ageOfHome\').hasError(\'minLength\')">{{\'This field is required\' | translate}}</p> -->\n                                      </ion-col>\n                                    </ion-row>\n                                    \n                                    <ion-row class="furniture_sec">\n                                      <ion-label color="primary" stacked padding>{{\'Furniture\' | translate}}:</ion-label>\n                                  <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="furniture" placeholder="{{\'Furniture\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                    <ion-option value="Furnished">{{\'Furnished\' | translate}}</ion-option>\n                                    <ion-option value="Unfurnished">{{\'Unfurnished\' | translate}}</ion-option>\n                                    <ion-option value="Semi Furnished">{{\'Semi-Furnished\' | translate}}</ion-option>\n                                  </ion-select>\n                                      </ion-row>\n\n                                    <ion-row class="previous_btn">\n                                      <ion-col col-6 text-left padding>\n                                        <button type="button" ion-button (click)="section(\'sellSection1\')" color="secondary">{{\'Back\' | translate}}</button>\n                                    </ion-col>\n                                      <ion-col col-6  text-right padding>\n                                        <button [disabled]=" onYourPropertyForm.get(\'rooms\').hasError(\'required\') || onYourPropertyForm.get(\'bathrooms\').hasError(\'required\') "\n                                         ion-button color="secondary" (click)="section(\'sellSection3\')">{{\'Next\' | translate}}</button>\n                                      </ion-col>\n                                    </ion-row>\n                                  </ion-card-content>\n                                </ion-card>\n                              </div>\n\n                          <div *ngIf="sellSection3" id="section3">\n                                <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                                    <ion-card-content no-padding>\n                                      <ion-row>\n                                        <ion-col col-12 class="rent">\n                                            <ion-item>\n                                                <ion-label color="primary" stacked>{{\'Building Floor\' | translate}}:</ion-label>\n                                                <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="floor" placeholder="{{\'floor\' | translate}}"  class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                                    <ion-option value="0">{{\'Ground level\' | translate}}</ion-option>   \n                                                  <ion-option *ngFor="let num of numbers" value="{{num}}">{{num}}</ion-option>\n                                                  </ion-select>\n                                              </ion-item>\n                                          </ion-col>\n                                    </ion-row>\n                                     \n                                      <ion-row>\n                                          <ion-col col-12>\n                                              <ion-label color="primary" class="search_bar_margin" stacked padding><span class="red">*</span>{{\'Address\' | translate}}:</ion-label><ion-searchbar\n                                              [(ngModel)]="autocomplete.query"\n                                              [showCancelButton]="false"\n                                              (ionInput)="updateSearch()"\n                                              formControlName="saleArea"\n                                              placeholder="{{\'Address\' | translate}}">\n                                              </ion-searchbar>\n                                              <ion-list class="placelist">\n                                              <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                                              {{ item.description }}\n                                              </ion-item>\n                                              </ion-list>\n\n                                              <ion-input type="text" type="hidden" formControlName="propertydetails" placeholder="{{\'Type here\' | translate}}..." class="select_cateog_sell" ></ion-input>\n                                            </ion-col>\n                                          <p ion-text color="danger" padding class="text-1x has-error" *ngIf="onYourPropertyForm.get(\'saleArea\').touched && onYourPropertyForm.get(\'saleArea\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                                      </ion-row>\n                                      <ion-row>\n                                        <ion-col col-12 class="rent">\n                                            <ion-item>\n                                                <ion-label color="primary" stacked>{{\'Amenities\' | translate}}:</ion-label>\n                                                 <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="amenities" placeholder="{{\'Amenities\' | translate}}"  class="select_cateog_sell input_border" multiple [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                                  <ion-option *ngFor="let type of amenitiesDropDown" value="{{type.value}}">{{type.component}}</ion-option> \n                                                  </ion-select>\n                                              </ion-item>\n                                        </ion-col> \n                                    </ion-row>\n\n\n                                     <ion-row>\n                                      <ion-col col-12>\n                                        <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Description\' | translate}}:</ion-label>\n              \n                                        <ion-input type="text" formControlName="description" placeholder="{{\'Type here\' | translate}}" class="select_cateog_sell input_border"></ion-input>\n              \n                              <p ion-text color="danger" class="text-1x has-error" padding *ngIf="onYourPropertyForm.get(\'description\').touched &&  onYourPropertyForm.get(\'description\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                                      </ion-col>\n                                    </ion-row>\n                        <ion-row>\n												<ion-col col-12 padding class="upload_btn">         \n                          <ion-label ion-text color="dark" margin-bottom class="fw500">{{\'Add Images of Property Min 5 & Max 15\' | translate}}</ion-label>\n                          <ion-input type=\'file\' *ngIf="checkBrowser==1" accept="image/*"  (change)="onSelectFile($event)" multiple></ion-input>\n    \n                          <button ion-button *ngIf="checkBrowser !==1" icon-only color="light" type="button" (click)="addImage()"> <span *ngIf=" uplodedImage > 0" class="upload_text">{{uplodedImage}}</span>\n                                <ion-icon name="log-out" color="dark"></ion-icon>\n                              </button>\n                             \n\n                          </ion-col>\n                          <ion-col col-12>\n                            <ion-row class="final_btn">\n                              <ion-col col-6>\n                                <button type="button" ion-button (click)="section(\'sellSection2\')" color="secondary" class="back_btn">{{\'Back\' | translate}}</button>\n  \n                              </ion-col>\n                              <ion-col col-6>\n                                <button *ngIf="checkBrowser !==1" [disabled]="!onYourPropertyForm.valid" ion-button block color="dark" type="submit">{{\'Submit\' | translate}}</button>\n                                <!-- for BROWSER -->\n                                    <button *ngIf="checkBrowser==1" [disabled]="!onYourPropertyForm.valid" type="button" (click)="BrowsersendData(onYourPropertyForm)" ion-button block color="dark">{{\'Submit\' | translate}}</button>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                        </ion-card-content>\n                      </ion-card>  \n                    </div>\n\n            </form>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/sell-out-form/sell-out-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], SellOutFormPage);
    return SellOutFormPage;
}());

//# sourceMappingURL=sell-out-form.js.map

/***/ })

});
//# sourceMappingURL=5.js.map