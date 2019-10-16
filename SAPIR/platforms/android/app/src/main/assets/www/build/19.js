webpackJsonp([19],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyPageModule", function() { return EditPropertyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_property__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditPropertyPageModule = /** @class */ (function () {
    function EditPropertyPageModule() {
    }
    EditPropertyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_property__["a" /* EditPropertyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_property__["a" /* EditPropertyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], EditPropertyPageModule);
    return EditPropertyPageModule;
}());

//# sourceMappingURL=edit-property.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPropertyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(163);
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
 * Generated class for the EditPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPropertyPage = /** @class */ (function () {
    function EditPropertyPage(translate, navCtrl, navParams, fb, storage, poviderForAllProvider, toastCtrl, alertCtrl, transfer, actionSheetCtrl, camera, imagePicker, loadingCtrl, imageViewerCtrl) {
        var _this = this;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.storage = storage;
        this.poviderForAllProvider = poviderForAllProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.loadingCtrl = loadingCtrl;
        this.section1 = true;
        this.section2 = false;
        this.section3 = false;
        this.imageUploadId = [];
        this.remainingUploadId = [];
        this.rooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '6+'];
        this.getUserDetails();
        this.storage.get('platform').then(function (val) {
            _this.checkBrowser = val;
        });
        this.editProperty = this.navParams.get('editProperty');
        this.area = this.editProperty.area;
        this.unit = this.editProperty.propertyUnit;
        this.getToken();
        this.getCity();
        this._imageViewerCtrl = imageViewerCtrl;
        //  this.editForm.city ='test';
        // this.propTyp=this.editProperty.title;
    }
    EditPropertyPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
            console.log(" LANGUAGE CSS " + _this.lanCss);
            console.log("user language ======= ", details.selected_language + " LANGUAGE CSSS======== " + _this.lanCss);
            _this.selectOptions = {
                cssClass: _this.lanCss,
            };
            if (details.selected_language == 'ar') {
                _this.propertyTypeDropDown = [
                    { value: 'sell', component: 'השכרה' },
                    { value: 'rent', component: 'מכירה' },
                ];
                _this.propertyTypesDropDown = [
                    { value: 'Cottage', component: 'קוטג' },
                    { value: 'Duplex', component: 'דופלקס' },
                    { value: 'Flats', component: 'דירות' },
                    { value: 'Penthouse', component: 'פנטהאוז' },
                    { value: 'Villa', component: 'וילה' },
                    { value: 'Studio', component: 'סטודיו' },
                    { value: 'Commercial', component: 'מסחרי' },
                ];
                _this.furnitureDropDown = [
                    { value: 'Fully Furnished', component: 'מרוהט' },
                    { value: 'Semi Furnished', component: 'חצי-מרוהט' },
                    { value: 'Non Furnished', component: 'לא מרוהט' }
                ];
                _this.amenitiesDropDown = [
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
                _this.propertyTypeDropDown = [
                    { value: 'sell', component: 'Sell' },
                    { value: 'rent', component: 'Rent' },
                ];
                _this.propertyTypesDropDown = [
                    { value: 'Cottage', component: 'Cottage' },
                    { value: 'Duplex', component: 'Duplex' },
                    { value: 'Flats', component: 'Flats' },
                    { value: 'Penthouse', component: 'Penthouse' },
                    { value: 'Villa', component: 'Villa' },
                    { value: 'Studio', component: 'Studio' },
                    { value: 'Commercial', component: 'Commercial' },
                ];
                _this.furnitureDropDown = [
                    { value: 'Fully Furnished', component: 'Furnished' },
                    { value: 'Semi Furnished', component: 'Semi-Furnished' },
                    { value: 'Non Furnished', component: 'Unfurnished' }
                ];
                _this.amenitiesDropDown = [
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
    EditPropertyPage.prototype.ngOnInit = function () {
        this.editForm = this.fb.group({
            token: [],
            ImagesId: [],
            propertyType: [],
            propertyId: [this.editProperty.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            city: [this.editProperty.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyTitle: [this.editProperty.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyTypes: [this.editProperty.propertyTypes, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            rooms: [this.editProperty.bedrooms, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            furniture: [this.editProperty.furniture, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            currency_type: [this.editProperty.currency_type, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            age_of_home: [this.editProperty.age_of_home, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            amenities: [this.editProperty.property_amenities, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            floor: [this.editProperty.floor, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            utilybills: [this.editProperty.utilybills, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertydetails: [],
            description: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(1)])],
            price: [this.editProperty.price, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            parking: [this.editProperty.parking, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propImges: [],
            label: [this.editProperty.label, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            currentImages: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            saleArea: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            bathrooms: [this.editProperty.bathrooms, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            squareMeters: [this.editProperty.minimum_square_meter, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyUnit: [this.editProperty.minimum_square_meter, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
        });
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    EditPropertyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPropertyPage');
    };
    EditPropertyPage.prototype.sendData = function (editProperty) {
        var _this = this;
        // console.log("EDIT PROPERTY DATA == "+JSON.stringify(editProperty));
        editProperty.currentImages = [];
        for (var i = 0; i < this.editProperty.imagesid.length; i++) {
            this.remainingUploadId.push(this.editProperty.imagesid[i].imagesID);
        }
        editProperty.ImagesId = this.imageUploadId;
        // editProperty.currentImages= this.editProperty.images;
        editProperty.currentImages = this.remainingUploadId;
        editProperty.propertydetails = this.propertiesDetails;
        var uploadImage = this.imageUploadId.length;
        var currentImage = this.editProperty.imagesid.length;
        var total = uploadImage + currentImage;
        var url = 'editproperty';
        if (total >= 5 && total <= 15) {
            this.poviderForAllProvider.post(url, editProperty).subscribe(function (res) {
                if (res.status == "success") {
                    _this.alertMsg(res.msg);
                    _this.navCtrl.setRoot('page-home');
                }
            }), function (err) {
                console.log(err);
            };
        }
        else {
            this.alertMsg('please upload min 5 or max 15 images');
        }
    };
    EditPropertyPage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.token = val.token;
        });
    };
    //GET CITY=======
    EditPropertyPage.prototype.getCity = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.poviderForAllProvider.newgetCity(val.token).then(function (data) {
                _this.citys = data.res;
            });
        });
    };
    EditPropertyPage.prototype.section = function (val) {
        var sectionShow = val;
        console.log("SHOW section ==" + sectionShow);
        if (sectionShow == 'section2') {
            this.section1 = false;
            this.section2 = true;
            this.section3 = false;
        }
        if (sectionShow == 'section3') {
            this.section3 = true;
            this.section1 = false;
            this.section2 = false;
        }
        if (sectionShow == 'section1') {
            this.section1 = true;
            this.section2 = false;
            this.section3 = false;
        }
    };
    // AUTO Complete
    EditPropertyPage.prototype.updateSearch = function () {
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
    EditPropertyPage.prototype.chooseItem = function (item) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': item.description
        }, function (results, status) {
            _this.propertiesDetails = results;
        });
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
    };
    // MULTIPLE IMAGE UPLOAD =================
    EditPropertyPage.prototype.onSelectFile = function (event) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        this.filesAmount = event.target.files.length;
        var total = this.filesAmount + this.editProperty.imagesid.length;
        if (event.target.files && total >= 5 && total <= 15) {
            this.imageURI = event.target.files;
            var reader = new FormData();
            for (var i = 0; i < this.filesAmount; i++) {
                reader.append('file[]', event.target.files[i]);
            }
            var url = "pwa_fileupload";
            this.poviderForAllProvider.post(url, reader).subscribe(function (res) {
                console.table(res);
                for (var i = 0; i <= res.length; i++) {
                    _this.imageUploadId.push(res[i]);
                    if (i == res.length) {
                        loader.dismiss();
                    }
                    else {
                        _this.presentToast("Image uploaded successfully");
                    }
                }
            }), function (err) {
                console.log(err);
            };
        }
        else {
            this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
        }
    };
    EditPropertyPage.prototype.alertMsg = function (msg) {
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    EditPropertyPage.prototype.deleteImage = function (imageUrl) {
        var _this = this;
        console.log("LAN == " + this.lanCss);
        if (this.lanCss == 'ar') {
            this.del = 'מאשר מחיקת תמונה';
            this.msg = '?האם ברצונך למחוק תמונה זו';
            this.cancel = 'בטל';
            this.okay = 'אישור';
        }
        else {
            this.del = 'Delete!';
            this.msg = 'Do you want to delete this image?';
            this.cancel = 'Cancel';
            this.okay = 'Ok';
        }
        var confirm = this.alertCtrl.create({
            title: this.del,
            message: this.msg,
            buttons: [
                {
                    text: this.cancel,
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: this.okay,
                    handler: function () {
                        var len = _this.editProperty.imagesid.length;
                        console.log('IMAGE LENGTH===' + len);
                        for (var i = 0; i < len; i++) {
                            console.log("I AM WORK");
                            console.log("IMAGE URL ==" + _this.editProperty.imagesid[i].imagesurl);
                            if (_this.editProperty.imagesid[i].imagesurl == imageUrl) {
                                console.log("Match ==" + _this.editProperty.imagesid[i].imagesurl);
                                _this.editProperty.imagesid[i].imagesurl = "";
                                _this.editProperty.imagesid[i].imagesID = "";
                                console.log(JSON.stringify(_this.editProperty.imagesid));
                                _this.editProperty.imagesid.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    //IMAGE SHAREING
    EditPropertyPage.prototype.addImage = function () {
        var _this = this;
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
                            for (var i = 0; i < results.length; i++) {
                                console.log('Image URI: ' + results[i]);
                                _this.imageURI = results[i];
                                _this.uploadFile();
                            }
                        }, function (err) { });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditPropertyPage.prototype.uploadFile = function () {
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
        console.log("IMAGE ", this.imageURI);
        fileTransfer.upload(this.imageURI, upImgUrl + this.token, options)
            .then(function (data) {
            _this.imageUploadId.push(data.response);
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log("Error = " + JSON.stringify(err));
            loader.dismiss();
            _this.presentToast(err);
        });
        // loader.dismiss();
    };
    EditPropertyPage.prototype.presentToast = function (msg) {
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
    EditPropertyPage.prototype.presentImage = function (myImage, events) {
        console.log("MY IMG" + myImage);
        console.log("EVENTS == ", events);
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    EditPropertyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-property',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/edit-property/edit-property.html"*/'\n<ion-header padding>\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <ion-grid no-padding>\n      <form [formGroup]="editForm" (ngSubmit)="sendData(editForm.value)">\n      <ion-input formControlName="token"  type="hidden" value="{{token}}"></ion-input>\n      <ion-input formControlName="propertyId" type="hidden"></ion-input>\n\n      <ion-row class="city_home" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n          <ion-col col-12 class="rent">\n                <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}"  formControlName="city" placeholder="Select city" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                        <ion-option *ngFor="let citydetails of citys" value="{{citydetails.city}}">{{citydetails.city | translate}}</ion-option>\n                </ion-select>   \n          </ion-col>\n        </ion-row>\n\n        <div *ngIf="section1" id="slide1">\n          <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">  \n            <ion-item lines="none">\n                <ion-select interface="popover" class="rent_sell_sec" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}"  formControlName="label" placeholder="{{\'Property Purpose\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                    <ion-option *ngFor="let type of propertyTypeDropDown" value="{{type.value}}">{{type.component}}</ion-option>\n                  </ion-select>   \n            </ion-item>        \n              <ion-item class="type_here">\n                  <ion-label color="primary" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" stacked>{{\'Property Title\' | translate}}:</ion-label>\n                  <ion-input type="text" placeholder="Type here..." formControlName="propertyTitle"></ion-input>\n                </ion-item>\n                <ion-item class="type_sec">\n                  <ion-label color="primary" stacked padding>{{\'Select Type\' | translate}}:</ion-label>\n                    <ion-select interface="popover" [selectOptions]="selectOptions" formControlName="propertyTypes" placeholder="{{\'Select Type\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                      <ion-option *ngFor="let type of propertyTypesDropDown" value="{{type.value}}">{{type.component}}</ion-option>\n                   </ion-select>\n                </ion-item>\n<!-- \n                <ion-item>\n                            <ion-label color="primary" stacked>{{\'Number of Bedrooms\' | translate}}:</ion-label>\n                            <ion-range min="1" max="20" pin="true" formControlName="rooms" snaps="true" color="primary"></ion-range>       \n                </ion-item> -->\n\n                <ion-item>\n                    <ion-label color="primary" stacked>{{\'Number of Bedrooms\' | translate}}:</ion-label>\n                  <ion-select ([ngModel])="editProperty.bedrooms" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="rooms" placeholder="{{\'Number of Bedrooms\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate"> \n                    <ion-option  value="1">Studio</ion-option>      \n                    <ion-option *ngFor="let num of rooms" value="{{num}}">{{num}}</ion-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item class="type_sec">\n                    <ion-label color="primary" stacked padding>{{\'Furniture\' | translate}}:</ion-label>\n                    <ion-select interface="popover" [selectOptions]="selectOptions" formControlName="furniture" placeholder="{{\'Furniture\' | translate}}" class="select_cateog_sell" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                      <ion-option *ngFor="let type of furnitureDropDown" value="{{type.value}}">{{type.component}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-row>\n                    <ion-col col-12 class="Next" padding text-right>\n                      <button ion-button (click)="section(\'section2\')"  color="secondary">{{\'Next\' | translate}}</button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n\n        </div>\n\n        <div *ngIf="section2" id="section2">\n       <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n          <ion-list no-lines>\n            \n                <ion-item>\n                    <ion-label color="primary" stacked>{{\'Amenities\' | translate}}:</ion-label>\n                    <ion-select [selectOptions]="selectOptions" formControlName="amenities" placeholder="{{\'Amenities\' | translate}}"  class="select_cateog_sell" multiple [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                      <ion-option *ngFor="let type of amenitiesDropDown" value="{{type.value}}">{{type.component}}</ion-option>\n                    </ion-select>                      \n                  </ion-item>\n           \n            <ion-item>\n                <ion-label [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" color="primary" stacked>{{\'Floor\' | translate}}:</ion-label>\n                <ion-input [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" type="number" placeholder="{{\'floor\' | translate}}" formControlName="floor"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" color="primary" stacked>{{\'Bathrooms\' | translate}}:</ion-label>\n                <ion-input [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" type="number" placeholder="{{\'Bathrooms\' | translate}}" formControlName="bathrooms"></ion-input>\n              </ion-item>\n          </ion-list>\n\n          <ion-row class="next_prev">\n              <ion-col col-6  text-left padding>					\n                  <button ion-button color="secondary" (click)="section(\'section1\')">{{\'Back\' | translate}}</button>\n                </ion-col>\n\n                <ion-col col-6 text-right padding>\n                    <button ion-button color="secondary" (click)="section(\'section3\')">{{\'Next\' | translate}}</button>\n                  </ion-col>\n          </ion-row>\n        </ion-card>\n       </div>\n       <div *ngIf="section3" id="section3">\n          <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n              <ion-row class="price_border">\n                  <ion-col col-12 class="type_sec">\n                    <ion-label [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" color="primary" stacked padding>{{\'Price\' | translate}}:</ion-label>\n                    <ion-input [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" type="text" formControlName="price" placeholder="{{\'Price\' | translate}}" class="select_cateog_sell"></ion-input>\n                  </ion-col>\n            </ion-row>\n            \n             \n\n                  <ion-row class="square_sec" *ngIf="editForm.value.label==\'sell\'">\n                    <ion-col col-6 class="rent">\n                      <ion-item>\n                          <ion-label [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" color="primary" stacked>{{\'Property Size\' | translate}}:</ion-label>\n                          <ion-input [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" type="number" placeholder="{{\'Property Size\' | translate}}" formControlName="squareMeters"></ion-input>\n                      </ion-item>\n                    </ion-col>\n\n                    <ion-col col-6>\n                      <ion-select  formControlName="propertyUnit" placeholder="{{\'Property unit\' | translate}}" [(ngModel)]="unit" class="select_cateog_sell" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                        <ion-option value="sq.m">{{\'Square metre\' | translate}}</ion-option>\n                        <ion-option value="sq.ft">{{\'Square feet\' | translate}}</ion-option>\n                    </ion-select>\n                    </ion-col>\n\n                  </ion-row>\n\n                  \n            <ion-row class="current_add">\n                <ion-label [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" color="primary" stacked padding>{{\'Current Address\' | translate}}</ion-label>\n              <ion-col [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" col-12 padding>\n                <p>{{area}}</p>\n              </ion-col>\n            </ion-row>\n              <ion-row>\n                      <ion-col col-12 padding>\n                          <ion-searchbar\n                          [(ngModel)]="autocomplete.query"\n                          [showCancelButton]="false"\n                          (ionInput)="updateSearch()"\n                          formControlName="saleArea"\n                          placeholder="{{\'Change Address\' | translate}}" value="IONIC">\n                          </ion-searchbar>\n                          <ion-list class="placelist">\n                          <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                          {{item.description}}\n                          </ion-item>\n                          </ion-list>\n                          <ion-input [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" type="text" hidden formControlName="propertydetails"></ion-input>\n                        </ion-col>\n              </ion-row>\n\n            <ion-row class="submit_sec">\n              <ion-col col-12>\n                  <button ion-button *ngIf="checkBrowser !==1" icon-only color="light" type="button" (click)="addImage()" margin-left>\n                      <ion-icon name="log-out"></ion-icon>\n                    </button>\n              </ion-col>\n            </ion-row>\n              \n                <!-- for BROWSER -->\n                <ion-input [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" type=\'file\'  *ngIf="checkBrowser==1"  (change)="onSelectFile($event)" multiple></ion-input>\n              <ion-row class="upload_img_sec">\n                <ion-col  *ngFor="let image of editProperty.imagesid" col-3>\n                <img  src="{{image.imagesurl}}" (click)="presentImage(myImage,$event)"> \n                <img [src]="image.imagesurl" #myImage [hidden]="true"/>\n                <span (click)="deleteImage(image.imagesurl)" class="cross_icon"><ion-icon name="close-circle"></ion-icon></span>\n              </ion-col>\n              </ion-row>\n             <ion-row class="upload_btn_sec">\n                <ion-col col-6>\n                  <button ion-button color="secondary" (click)="section(\'section2\')">{{\'Back\' | translate}}</button>\n              </ion-col> \n              <ion-col col-6>\n                  <button  ion-button block color="dark" type="submit">{{\'Submit\' | translate}}</button> \n              </ion-col>\n            </ion-row>\n                   \n      </ion-card>\n      </div>\n     </form>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/edit-property/edit-property.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], EditPropertyPage);
    return EditPropertyPage;
}());

//# sourceMappingURL=edit-property.js.map

/***/ })

});
//# sourceMappingURL=19.js.map