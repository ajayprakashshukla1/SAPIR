webpackJsonp([13],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
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
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = /** @class */ (function () {
    function MessagesPage(languageService, navCtrl, navParams, storage, events, loadingCtrl, poviderForAllProvider, alertCtrl, translate) {
        this.languageService = languageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.poviderForAllProvider = poviderForAllProvider;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.messages = [];
        this.messages2 = [];
        this.isGroupShown = function () {
            return this.showStatus;
        };
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
        this.getMessages();
        this.pet = 'featured';
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
    };
    MessagesPage.prototype.getToken = function () {
        var _this = this;
        console.log("GET TOKEN");
        this.storage.get('user').then(function (val) {
            _this.user = val.token;
            console.log("User TOKEN == " + _this.user);
        });
    };
    MessagesPage.prototype.getMessages = function () {
        var _this = this;
        // this.showLoader();
        console.log("GET MESSAGE");
        this.storage.get('user').then(function (val) {
            console.log("USER == " + JSON.stringify(val));
            if (val) {
                _this.token = val.token;
                _this.poviderForAllProvider.getMessages('https://sapir.app/wp-json/mobileapi/get_notification_data', _this.token).subscribe(function (data) {
                    console.log("MESSAGE RESPONSE == " + JSON.stringify(data));
                    if (data.msg_data == "No Notification") {
                        // this.loading.dismiss();
                        console.log("NO NOTIFICATION ====== " + data.msg_data);
                    }
                    else {
                        var count = data.msg_data.length;
                        console.log("MESSAGE ==========" + count);
                        if (count > 0) {
                            // this.loading.dismiss();
                            for (var i = 0; i < count; i++) {
                                console.log(" i = " + i + " data.msg_data " + data.msg_data[i]);
                                _this.messages.push(data.msg_data[i]);
                            }
                        }
                        else {
                            // this.loading.dismiss();
                        }
                    }
                    console.log("DATTA == " + JSON.stringify(data));
                });
            }
        });
        // this.messages = this.service.getMessages();
    };
    // read msg
    MessagesPage.prototype.readMsg = function (msg) {
        var id = msg.id;
        var match = this.messages.find(function (x) { return x.id === id; });
        console.log("MATCH === ", match);
        var messageIndex = this.messages.indexOf(match);
        var status = this.messages[messageIndex].read_status;
        console.log("STATUS == " + status);
        if (status == 1) {
            this.messages[messageIndex].read_status = 0;
        }
        else {
            this.messages[messageIndex].read_status = 1;
        }
        console.log("MEssage ===============================" + JSON.stringify(msg) + " INDEX ++++===== " + messageIndex);
        this.poviderForAllProvider.readMessage('https://sapir.app/wp-json/mobileapi/get_notification_data', this.token, msg.id).subscribe(function (res) {
            // this.showAlert(msg.msg_title); 
            // this.navCtrl.setRoot('page-messages');
        });
    };
    MessagesPage.prototype.showAlert = function (msg) {
        var prompt = this.alertCtrl.create({
            title: 'MESSAGE!',
            message: msg,
            buttons: [
                {
                    text: 'Close',
                    handler: function (data) {
                        // this.navCtrl.setRoot('page-messages');
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    MessagesPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    // accordian //
    MessagesPage.prototype.addContent = function (showStatus) {
        this.contentData = 'All the thing about Technology! Informatic technology especially.All the thing about Technology! Informatic technology especially.';
        this.showStatus = !showStatus;
        console.log(showStatus);
    };
    MessagesPage.prototype.toggleGroup = function (events) {
        console.log("EVENTS === ", events);
        console.log(this.showStatus);
        if (this.showStatus) {
            this.showStatus = false;
        }
        else {
            this.showStatus = true;
        }
    };
    ;
    //end
    MessagesPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            console.log("user language ======= ", details.selected_language);
            _this.selectOptions = {
                cssClass: _this.lanCss,
            };
        });
        var defaultLanguage = this.translate.getDefaultLang();
        this.languageSelected = defaultLanguage;
        this.lanCss = defaultLanguage;
    };
    // Languages
    MessagesPage.prototype.setLanguage = function () {
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
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-messages',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding class="lg_screen_bg">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n          <div class="language_selector" end>\n            <!-- <ion-label>{{ \'SELECT_LANGUAGE\' | translate }}</ion-label> -->\n            <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n            </ion-select>\n          </div>\n        <!-- <img src="assets/imgs/search.png" class="serach"> -->\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content padding>\n    <ion-grid no-padding>\n\n        <img src="assets/imgs/MyMessagemobile.jpg" class="home_img">\n        <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="featured">\n             {{\'Alerts\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="albums">\n              {{\'Notifications\' | translate}}\n            </ion-segment-button>\n          </ion-segment>\n          <div [ngSwitch]="pet">\n              <ion-grid class="album card-background-page" *ngSwitchCase="\'featured\'">\n                  <ion-grid *ngIf="!messages.length" fixed>\n                      <ion-row>\n                        <ion-col col-12>\n                          <ion-card class="primary-bg" margin-top>\n                          <ion-card-content>\n                            <p text-center class="text-white">{{\'You have no messages yet\' | translate}}.</p>\n                          </ion-card-content>\n                          </ion-card>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  \n                    <ion-grid no-padding fixed>\n                        <ion-list>\n                          \n                            <ion-row (click)="readMsg(message)" *ngFor="let message of messages"  [ngClass]="{\'visited\' : (message.read_status==\'1\')}">\n                                <ion-col no-padding col-3>\n                                    <img *ngIf="message.read_status == !1" src="assets/imgs/messages_Mobile-(2).png">\n                                    <img *ngIf="message.read_status ==1" src="assets/imgs/messages-Mobile-(1).png">\n                                </ion-col>\n                                <ion-col col-9>\n                                    <h5 [ngClass]="{\'fw700\': !message.read}">\n                                      {{message.msg_title}}\n                                      </h5>\n                                    <p>{{message.push_date }}</p>\n                                </ion-col>\n\n                                <ion-item *ngIf="message.read_status ==1" >\n                                <ion-row>\n                                    <ion-col col-12>\n                                      <p>{{\'Received on\' |translate}}: 03/26/2019</p>\n                                      <p>{{message.msg_title}}</p>\n                                    </ion-col>\n               \n                                    <ion-col col-12>\n                                      <p>{{message.content}}</p>\n                                    </ion-col>\n                                    <ion-col col-12>\n                                       \n                                         <p text-right>SapirApp Team,</p>\n                                     </ion-col>\n                                     <ion-col col-12 text-left class="trash_icons">\n                                         <ion-icon name="ios-trash-outline"></ion-icon>\n                                     </ion-col>\n                                   </ion-row>\n                                </ion-item>\n                            </ion-row>    \n                        </ion-list>\n\n                        <!-- <ion-list> \n                            <div>\n                              <ion-item class="item-stable"\n                                        (click)="toggleGroup($events)" class="drop_down_icon">\n                                        <ion-icon *ngIf="isGroupShown()" name="md-arrow-dropup"></ion-icon>\n                                       <ion-icon [hidden]="isGroupShown()" name="md-arrow-dropdown"></ion-icon> \n                                &nbsp;\n                                <ion-row (click)="readMsg(message)" *ngFor="let message of messages"  [ngClass]="{\'visited\' : (message.read_status==\'1\')}">\n                                    <ion-col no-padding col-3>\n                                        <img *ngIf="message.read_status == !1" src="assets/imgs/messages_Mobile-(2).png">\n                                        <img *ngIf="message.read_status ==1 " src="assets/imgs/messages-Mobile-(1).png">\n                                    </ion-col>\n                                    <ion-col col-9>\n                                        <h5 [ngClass]="{\'fw700\': !message.read}">\n                                          {{message.msg_title}}\n                                          </h5>\n                                        <p>{{message.push_date }}</p>\n                                    </ion-col>\n                                    <ion-item class="item-accordion"\n                                    *ngIf="isGroupShown()">\n                                    <ion-row class="message_view">\n                                        <ion-col col-12>\n                                          <p>Received on: 03/26/2019</p>\n                                          <p>{{message.msg_title}}</p>\n                                        </ion-col>\n                   \n                                        <ion-col col-12>\n                                          <p>Lorem ipsum</p>\n                                        </ion-col>\n                                        <ion-col col-12>\n                                            <p>{{message.msg_title}}</p>\n                                             <p text-right>SapirApp Team,</p>\n                                         </ion-col>\n                                         <ion-col col-12 text-left class="trash_icons">\n                                             <ion-icon name="ios-trash-outline"></ion-icon>\n                                         </ion-col>\n                                       </ion-row>\n                                    </ion-item>\n                                  </ion-row>\n                              </ion-item>\n                            \n                            </div>\n                        </ion-list> -->\n                      <!-- (click)="readMsg(message)" -->\n                     \n                    </ion-grid>\n                  \n                \n\n              </ion-grid>\n              \n              <ion-grid class="album" *ngSwitchCase="\'albums\'">\n                  <p text-center class="text-white">{{\'You have no flagged messages yet.\' | translate}}</p>\n                </ion-grid>\n              </div>\n        </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ })

});
//# sourceMappingURL=13.js.map