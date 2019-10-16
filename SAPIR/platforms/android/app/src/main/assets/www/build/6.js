webpackJsonp([6],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyinfoPageModule", function() { return PropertyinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyinfo__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PropertyinfoPageModule = /** @class */ (function () {
    function PropertyinfoPageModule() {
    }
    PropertyinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__propertyinfo__["a" /* PropertyinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__propertyinfo__["a" /* PropertyinfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], PropertyinfoPageModule);
    return PropertyinfoPageModule;
}());

//# sourceMappingURL=propertyinfo.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(371);
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
 * Generated class for the PropertyinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropertyinfoPage = /** @class */ (function () {
    function PropertyinfoPage(languageService, translate, navCtrl, navParams, toastCtrl, iab, storage, poviderForAllProvider, imageViewerCtrl, callNumber, pt, events, loadingCtrl, socialSharing) {
        var _this = this;
        this.languageService = languageService;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.storage = storage;
        this.poviderForAllProvider = poviderForAllProvider;
        this.callNumber = callNumber;
        this.pt = pt;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.propertyInfo = [];
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.languages = this.languageService.getLanguages();
        console.log('Platform === ', this.pt.platforms());
        this.propertyInfo = this.navParams.get('propertyDetails');
        console.log("PROPERTY INFO =====", this.propertyInfo);
        this.getUserDetails();
        this._imageViewerCtrl = imageViewerCtrl;
        this.storage.get('platform').then(function (val) {
            _this.checkBrowser = val;
        });
        var desLen = this.propertyInfo.description.length;
        console.log("LENgth === " + desLen);
        if (desLen <= 33) {
            console.log("Description Length == " + desLen);
            this.halftext = true;
            this.fullText = false;
        }
        else {
            this.halftext = true;
            this.readMoreBtn = true;
            console.log("Description Length == " + desLen);
        }
    }
    // Languages
    PropertyinfoPage.prototype.setLanguage = function () {
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
        console.log("LAN CSSS === " + this.lanCss);
        this.selectOptions = {
            cssClass: this.lanCss
        };
    };
    PropertyinfoPage.prototype.share = function (propertyInfo) {
        console.log("Property Info ==== ", propertyInfo);
        var loader = this.loadingCtrl.create({
            content: "Please Wait..."
        });
        loader.present();
        console.log("Property info", propertyInfo);
        var title = propertyInfo.titlel;
        var price = ' Price: ' + propertyInfo.price;
        var con = ' Contact Num: ' + propertyInfo.property_phone;
        var msg = title + ' ' + price + ' ' + con;
        this.socialSharing.share('Click here for details: ' + propertyInfo.property_url, 'subject', propertyInfo.picture).then(function (res) {
            console.log("Sharing Rseponse  = ", res);
            loader.dismiss();
        }, function (err) {
            loader.dismiss();
            console.log("Error == ", err);
        });
    };
    PropertyinfoPage.prototype.mapInt = function () {
        console.log("MAP INT");
        if (this.propertyInfo.lat && this.propertyInfo.long) {
            console.log("MAP1 ===== lat" + this.propertyInfo.lat + "..lng" + this.propertyInfo.long);
            this.map2 = new google.maps.Map(document.getElementById('map2'), {
                zoom: 12,
                center: {
                    lat: this.propertyInfo.lat,
                    lng: this.propertyInfo.long
                }
            });
            var marker = new google.maps.Marker({
                position: {
                    lat: this.propertyInfo.lat,
                    lng: this.propertyInfo.long
                },
                map: this.map2,
                title: 'Hello World!'
            });
            this.directionsDisplay.setMap(this.map2);
        }
        console.log("MAP2 ================", this.map2);
    };
    // READ MORE OR READ LESS
    PropertyinfoPage.prototype.readMore = function () {
        console.log("READ MORE ");
        this.halftext = false;
        this.fullText = true;
        this.readMoreBtn = false;
    };
    PropertyinfoPage.prototype.readless = function () {
        this.halftext = true;
        this.fullText = false;
        this.readMoreBtn = true;
        this.readLessBtn = false;
        console.log("READ LESS ");
    };
    PropertyinfoPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
        this.slides1.toArray()[1].slidePrev(500);
    };
    PropertyinfoPage.prototype.slideNext = function () {
        this.slides.slideNext();
        this.slides1.toArray()[1].slideNext(500);
    };
    //END 
    PropertyinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PropertyinfoPage');
        // this.mapInt();
        setTimeout(function (z) {
            _this.mapInt();
        }, 1000);
    };
    PropertyinfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter PropertyinfoPage');
        setTimeout(function (z) {
            _this.mapInt();
        }, 1000);
    };
    PropertyinfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter PropertyinfoPage');
        setTimeout(function (z) {
            _this.mapInt();
        }, 1000);
    };
    // Set fvrt
    PropertyinfoPage.prototype.favorite = function (property, status) {
        var _this = this;
        console.log("prop  == " + JSON.stringify(property) + "STATUS == " + status);
        this.storage.get('user').then(function (val) {
            console.log("USER INFO === " + val.token);
            if (val.token) {
                _this.poviderForAllProvider.favorite(property, val, status).then(function (changeProperty) {
                    var resssp = changeProperty.json();
                    console.log("Only REsponse =" + JSON.stringify(resssp));
                    //FOR LIKE
                    if (resssp.status == 1) {
                        console.log("get Status 1111== " + resssp.status);
                        _this.propertyInfo.status = 1;
                        //  console.log("Change Property  "+JSON.stringify(property));
                    }
                    else if (resssp.status == 0) {
                        console.log("get Status " + resssp.status);
                        //  console.log("Change Property 00000= "+JSON.stringify(property));
                        _this.propertyInfo.status = 0;
                    }
                    // property.status =changeProperty.status;
                    //  console.log("YOUR PROPERTY = "+JSON.stringify(resssp.response));
                    var toast = _this.toastCtrl.create({
                        message: resssp.response,
                        cssClass: 'mytoast',
                        duration: 2000
                    });
                    toast.present(toast);
                });
            }
        });
    };
    //  end favrt
    PropertyinfoPage.prototype.stillLooking = function () {
        this.navCtrl.push('page-stilllooking');
    };
    //Code For alert
    PropertyinfoPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            cssClass: 'mytoast',
            duration: 2000
        });
        toast.present(toast);
    };
    //END ALERT
    // WIEW IMAGE
    PropertyinfoPage.prototype.viewImage = function (ImgUrl) {
        console.log("IMG URL == " + ImgUrl);
        this.poviderForAllProvider.viewPhoto(ImgUrl);
    };
    PropertyinfoPage.prototype.presentImage = function (myImage, events) {
        console.log("MY IMG" + myImage);
        console.log("EVENTS == ", events);
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 1000);
        // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
    };
    PropertyinfoPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            console.log("user language ======= ", details.selected_language);
            _this.lanCss = details.selected_language;
        });
        this.selectOptions = {
            cssClass: this.lanCss,
        };
    };
    PropertyinfoPage.prototype.scrollToBottom = function () {
        console.log("Scroll Bottom");
        this.content.scrollToBottom();
    };
    PropertyinfoPage.prototype.whatsAppChat = function (num) {
        var url = 'https://wa.me/' + num + '/?text=HELLO%22';
        //  let url='https://api.whatsapp.com/send?phone=+972523655051';
        console.log(" URL ===" + url + "Browser" + this.checkBrowser);
        //  window.open(url, '_system');
        // const browser = this.iab.create(url,'_blank', 'location=yes');
        //  window.open('http://www.twitter.com/nraboy', '_system', 'location=yes');
        if (this.pt.is('ios')) {
            var browser = this.iab.create(url, '_blank', 'location=yes');
        }
        else {
            window.open(url, '_system');
        }
    };
    PropertyinfoPage.prototype.calling = function () {
        this.callNumber.callNumber(this.propertyInfo.property_phone, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], PropertyinfoPage.prototype, "slides1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], PropertyinfoPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], PropertyinfoPage.prototype, "content", void 0);
    PropertyinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-propertyinfo',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/propertyinfo/propertyinfo.html"*/'\n<ion-header padding class="lg_screen_bg">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n          <div class="language_selector" end>\n            <ion-select [selectOptions]="selectOptions" [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\'  [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n            </ion-select>\n          </div>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  <ion-grid *ngIf="propertyInfo !=undefined" no-padding [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n  <ion-row>\n  <ion-col col-12 no-padding>\n    <ion-card class="card_sec">\n        <ion-slides  loop="true" slidesPerView="1">\n          <ion-slide *ngFor="let img of propertyInfo.images">\n            <img src="{{img}}" class="thumb-img"  imageViewer/>\n          </ion-slide>\n        </ion-slides>\n        <ion-icon name="ios-arrow-back-outline" (click)="slidePrev()" class="back_icon"></ion-icon>\n        <ion-icon name="ios-arrow-forward-outline" (click)="slideNext()" class="for_icon"></ion-icon>\n\n\n      <button class="form_doc" *ngIf="propertyInfo.status !== 1" ion-button icon-left (click)="favorite(propertyInfo,1)" clear item-left>\n          <ion-icon  name="heart"></ion-icon>\n      </button> \n\n      <button class="form_doc like" color="danger" *ngIf="propertyInfo.status == 1" ion-button icon-left (click)="favorite(propertyInfo,0)" clear item-left>\n          <ion-icon  name="heart"></ion-icon>\n      </button>	 \n      </ion-card>\n  </ion-col>\n  </ion-row>\n  <ion-row  class="property_block">\n\n   \n  </ion-row>\n\n  <ion-row class="slider_imgs">\n    <ion-col col-12> \n      <div class="slider_icons">\n          <ion-icon name="ios-arrow-back-outline" class="backword_icon" (click)="slidePrev()" ></ion-icon>\n          <ion-icon name="ios-arrow-forward-outline" class="forword_icon" (click)="slideNext()"></ion-icon>\n      </div>\n      \n    <ion-slides class="image-slider" loop="true" slidesPerView="4">\n      <ion-slide *ngFor="let img of propertyInfo.images">\n        <img src="{{img}}" class="thumb-img" class="image-container" (click)="presentImage(myImage)" imageViewer/>\n        <img [src]="img" #myImage [hidden]="true"/>\n      </ion-slide>\n    </ion-slides>\n  </ion-col>\n  </ion-row>\n  \n  <ion-row class="dollar_text_padding">\n  <ion-col col-10 class="dollar_numbers">\n    <p>{{propertyInfo.title}}</p>\n    <p>{{propertyInfo.price}}</p>\n    \n  </ion-col>\n  <ion-col col-2 class="share">\n        <button   (click)="share(propertyInfo)">\n          <img src="assets/imgs/share.png">\n        </button>\n  </ion-col>\n   \n  </ion-row>\n  \n  <ion-row class="address_sec" (click)="whatsAppChat(propertyInfo.broker.phone_no)">\n  <ion-col col-1>\n  <img src="assets/imgs/whatsapp.png">\n  </ion-col>\n  <ion-col col-11>\n   <p>{{propertyInfo.broker.phone_no}}</p>\n  </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="propertyInfo.property_phone" class="address_sec tel_info">\n    <ion-col (click)="calling()" col-1>\n        <ion-icon name="call"></ion-icon>\n    </ion-col>\n    <ion-col (click)="calling()" col-11>\n     <p>{{propertyInfo.property_phone}}</p>\n    </ion-col>\n    </ion-row>\n\n  <ion-row class="address_sec">\n    <ion-col col-1>\n  <img src="assets/imgs/map.png">\n    </ion-col>\n    <ion-col col-11 (click)="scrollToBottom()" >\n     <p><span class="city_add">{{propertyInfo.area}}</span>,<span>{{propertyInfo.city |translate}}</span></p> \n    </ion-col>\n  </ion-row>\n \n  \n  <ion-row class="border_img_sec">\n    <ion-col col-4>\n   <span>{{propertyInfo.bedrooms}}</span>\n   <img src="assets/imgs/8.png">\n    </ion-col>\n    <ion-col col-4 class="bath_tub_border">\n        <span>{{propertyInfo.bathrooms}}</span>\n        <img src="assets/imgs/7.png">\n      </ion-col>\n      <ion-col col-4 class="build_img">\n          <span>{{propertyInfo.floor}}</span>\n          <img src="assets/imgs/building.png">\n        </ion-col>\n  </ion-row>\n    <ion-row class="border_img_sec space_rooms_border">\n        <ion-col col-4>\n       <span class="space_text">{{propertyInfo.furniture | translate}}</span>\n        </ion-col>\n        <ion-col col-4 class="bath_tub_border">\n            <span *ngIf="propertyInfo.property_amenities" class="space_text">{{propertyInfo.property_amenities[0] | translate}}</span>\n        </ion-col>\n\n        <ion-col col-4 *ngIf="propertyInfo.minimum_square_meter">\n           <span>{{propertyInfo.minimum_square_meter}} {{propertyInfo.propertyUnit}}</span>\n        </ion-col>\n\n      </ion-row>\n      <ion-row class="content_text">\n        <ion-col col-12>\n        <div>		\n            <ion-card-content class="light-mb">\n              <h2 ion-text color="dark" class="card-title">{{\'Description\' | translate}}</h2>\n              <p text-justify ion-text color="primary" [innerHTML]="propertyInfo.description"></p>\n            </ion-card-content>\n          </div> \n      \n\n        </ion-col>\n      </ion-row>\n      <ion-row class="AMMNETIES">\n          <ion-col col-12>\n          <h3 class="heading">{{\'Amenities\' | translate}}</h3>\n          \n          </ion-col>\n          <ion-col col-12 no-padding>\n              <ion-row>\n                <ion-col col-6 no-padding *ngFor="let ammneties of propertyInfo.property_amenities">\n                    <p class="air_ammenity">{{ammneties | translate}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          \n        </ion-row>\n\n        \n        <ion-row class="owner_img_sec">\n          <ion-col col-9 class="owner_info_sec">   \n              <h3 class="owner">{{\'Owner Info\' | translate}}</h3>\n            <ion-row (click)="whatsAppChat(propertyInfo.broker.phone_no)">\n              <ion-col col-1>\n                  <img src="assets/imgs/whatsapp.png">\n              </ion-col>\n              <ion-col  col-11>\n                  <span>{{propertyInfo.broker.phone_no}}</span>\n              </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-1>\n                  <img src="assets/imgs/propertymessage.png">\n              </ion-col>\n              <ion-col col-11>\n                  <span>{{propertyInfo.broker.email}}</span>\n              </ion-col>\n              </ion-row>\n          </ion-col>\n          <ion-col col-3 text_right class="contact_user">\n            <ion-avatar>\n                <img src="{{propertyInfo.broker.picture}}">\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row class="map-sec card-background-page">\n            <ion-card>\n                <div  #map id="map2" (click)="mapInt()">  \n                  </div>\n            </ion-card>\n          </ion-row>\n          <ion-row class="rent_now_sec">\n            <ion-col col-12>\n              <ion-row>\n                <ion-col col-12 class="looking_for_text" (click)="stillLooking(\'page-stilllooking\')">\n                  <p>{{\'CANNOT FIND WHAT YOU ARE LOOKING FOR?\' | translate}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/propertyinfo/propertyinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], PropertyinfoPage);
    return PropertyinfoPage;
}());

//# sourceMappingURL=propertyinfo.js.map

/***/ })

});
//# sourceMappingURL=6.js.map