webpackJsonp([11],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnernamePageModule", function() { return OwnernamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ownername__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OwnernamePageModule = /** @class */ (function () {
    function OwnernamePageModule() {
    }
    OwnernamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ownername__["a" /* OwnernamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ownername__["a" /* OwnernamePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], OwnernamePageModule);
    return OwnernamePageModule;
}());

//# sourceMappingURL=ownername.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnernamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(362);
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
/**
 * Generated class for the OwnernamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OwnernamePage = /** @class */ (function () {
    function OwnernamePage(camera, transfer, languageService, navCtrl, navParams, storage, translate, poviderForAllProvider, formBuilder, toastCtrl, events, actionSheetCtrl, loadingCtrl) {
        this.camera = camera;
        this.transfer = transfer;
        this.languageService = languageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translate = translate;
        this.poviderForAllProvider = poviderForAllProvider;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userDetails = [];
        this.token = [];
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
        this.myProfileform = this.formBuilder.group({
            token: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            displayname: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            address: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            state: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
        });
    }
    OwnernamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OwnernamePage');
        this.storage.get('user').then(function (val) {
            console.log("USER VALUE " + JSON.stringify(val));
            _this.userDetails = val;
            _this.token = val.token;
            _this.profilePic = val.user_pic;
        });
    };
    OwnernamePage.prototype.goProperty = function () {
        console.log("GO PROPERTIES");
        this.navCtrl.setRoot('page-mylisting');
    };
    // WIEW IMAGE
    OwnernamePage.prototype.viewImage = function (ImgUrl) {
        console.log("IMG URL == " + ImgUrl);
        this.poviderForAllProvider.viewPhoto(ImgUrl);
    };
    OwnernamePage.prototype._tostMsg = function (msg) {
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    // process send button
    OwnernamePage.prototype.myProfileformGo = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        console.log("==========================");
        this.poviderForAllProvider.post("UpdateProfile", this.myProfileform.value)
            .subscribe(function (res) {
            console.log("RESPONSE ===== " + JSON.stringify(res));
            if (res.status == true) {
                var _update = [];
                _update['user_display_name'] = _this.myProfileform.value.displayname;
                _update['user_email'] = _this.myProfileform.value.email;
                _update['user_address'] = _this.myProfileform.value.address;
                _update['user_city'] = _this.myProfileform.value.city;
                _update['user_state'] = _this.myProfileform.value.state;
                _update['user_phone_no'] = _this.myProfileform.value.phoneNumber;
                console.log("UPDATE VALUE === " + _update);
                _this.poviderForAllProvider.updateUser(_update);
                loader.dismiss();
                _this._tostMsg(res.msg);
            }
            else {
                _this._tostMsg(res.msg);
                loader.dismiss();
            }
        }, function (err) {
            _this._tostMsg('Somthing Went Wrong!');
            console.log(JSON.stringify(err));
            loader.dismiss();
        });
    };
    OwnernamePage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
            console.log(" LANGUAGE CSS " + _this.lanCss);
            console.log("user language ======= ", details.selected_language);
        });
        this.selectOptions = {
            cssClass: this.lanCss,
        };
    };
    // Languages
    OwnernamePage.prototype.setLanguage = function () {
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
        this.selectOptions = {
            cssClass: this.lanCss,
        };
    };
    OwnernamePage.prototype.myProfilePic = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: this.translate.instant('Change Your Profile Pic'),
            buttons: [
                {
                    text: this.translate.instant('Camera'),
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
                    text: this.translate.instant('Gallery'),
                    handler: function () {
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.imageURI = imageData;
                            console.log("IMAGE DATA From Gallery ==" + _this.imageURI);
                            _this.uploadFile();
                        }, function (err) {
                            console.log(err);
                            toast.present(err);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OwnernamePage.prototype.uploadFile = function () {
        var _this = this;
        var upImgUrl = 'https://sapir.app/wp-json/mobileapi/upload_profile_image?token=';
        console.log("Profile URL == " + upImgUrl + this.token);
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'image_url',
            fileName: 'ionicfile.jpeg',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, upImgUrl + this.token, options)
            .then(function (data) {
            console.log(" image upload Response === ", data);
            var imgupdate = data.response;
            var newUrl = JSON.parse(imgupdate.replace(/\\/g, ""));
            console.log("NEW URLs == " + newUrl);
            _this.profilePic = newUrl;
            _this.storage.get('user').then(function (data) {
                console.log("storage data" + JSON.stringify(data));
                console.log("current pic ====== ========" + data.user_pic);
                data.user_pic = newUrl;
                _this.storage.set('user', data);
            });
            //update user profile    
            loader.dismiss();
            var pus = _this.translate.instant('Profile uploaded successfully');
            _this.presentToast(pus);
            _this.storage.get('user').then(function (val) {
                console.log("AFTER UPDATE IMAGE  " + JSON.stringify(val));
                _this.userDetails = val;
            });
        }, function (err) {
            console.log("Error = " + JSON.stringify(err));
            loader.dismiss();
            _this.presentToast(err);
        });
        // loader.dismiss();
    };
    OwnernamePage.prototype.presentToast = function (msg) {
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
    OwnernamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ownername',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/ownername/ownername.html"*/'<!--\n  Generated template for the OwnernamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n    <ion-title Class="for_sale">\n      <img src="assets/imgs/logosapir.png" class="logo_img">\n    </ion-title>\n    <div class="language_selector" end>\n      <!-- <ion-label>{{ \'SELECT_LANGUAGE\' | translate }}</ion-label> -->\n      <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n        <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n      </ion-select>\n    </div>\n      <!-- <img src="assets/imgs/search.png" class="serach"> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-grid no-padding>\n      <ion-row class="home_img">\n          <ion-col col-12>\n              <img  src="assets/imgs/My_Listings1.png" class="My_Listings_img">\n          </ion-col>\n          <ion-col col-12 text-center class="user_img">\n              <img (click)="viewImage(profilePic)" src="{{profilePic}}">\n              <button (click)="myProfilePic()" class="edit_btn_sec"><ion-icon name="md-create"></ion-icon></button>\n            </ion-col>\n        </ion-row>\n   \n   \n <ion-row class="border_box form_content">\n\n    <form [formGroup]="myProfileform" (ngSubmit)="myProfileformGo()" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n      <ion-row>\n        <ion-col col-12 padding text-center class="img_sec token_sec">\n            <ion-input  type="text" formControlName="token" type="hidden" value="{{token}}" readonly></ion-input>\n          </ion-col>\n      <ion-col col-12 class="listed">\n          <ion-input type="text" class="name_sec" formControlName="displayname" value="{{userDetails.user_display_name}}"></ion-input>\n          <ion-icon name="md-create" class="edit_icon"></ion-icon>\n      </ion-col>\n          <ion-col col-12 text-center class="listed">\n              <ion-input type="text" formControlName="email" value="{{userDetails.user_email}}"></ion-input>\n              <ion-icon name="md-create" class="edit_icon"></ion-icon>\n          </ion-col>\n\n          <!-- <h1 class="rtl">Hello World</h1> -->\n          <ion-col col-12 text-center class="listed">\n              <ion-input type="Number" placeholder="{{\'Contact Number\' | translate}}" formControlName="phoneNumber" value="{{userDetails.user_phone_no}}"></ion-input>\n              <ion-icon name="md-create" class="edit_icon"></ion-icon>\n          </ion-col>\n          <ion-col col-12 text-center class="listed">\n              <span>{{\'Number of properties\' | translate}} = {{userDetails.no_of_properties}}</span>\n              <!-- <ion-icon name="md-create" class="edit_icon"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 class="update">\n              <button ion-button type="submit">{{\'Update\' | translate}}</button>\n          </ion-col>\n        </ion-row>\n    </form>\n          <ion-col col-12 text-center>\n                  <button ion-button (click)="goProperty()" class="view_map">{{\'My ads\' | translate}}</button>\n          </ion-col>\n          &nbsp;\n </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/ownername/ownername.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], OwnernamePage);
    return OwnernamePage;
}());

//# sourceMappingURL=ownername.js.map

/***/ })

});
//# sourceMappingURL=11.js.map