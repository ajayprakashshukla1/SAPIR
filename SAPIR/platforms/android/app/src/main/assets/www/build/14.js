webpackJsonp([14],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageModule", function() { return InitialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initial__ = __webpack_require__(740);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InitialPageModule = /** @class */ (function () {
    function InitialPageModule() {
    }
    InitialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* InitialPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__initial__["a" /* InitialPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__initial__["a" /* InitialPage */]
            ]
        })
    ], InitialPageModule);
    return InitialPageModule;
}());

//# sourceMappingURL=initial.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitialPage = /** @class */ (function () {
    function InitialPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
        this.dir = 'ltr';
        this.slideList = [
            {
                title: "What is <strong>Sapir App</strong>?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionProperty-ico.png",
            },
            {
                title: "Why Sapir App?",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionProperty-ico.png",
            },
            {
                title: "Find your perfect home",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
                image: "assets/img/ionProperty-ico.png",
            }
        ];
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    InitialPage.prototype.onSlideNext = function () {
        this.slides.slideNext(300);
    };
    InitialPage.prototype.onSlidePrev = function () {
        this.slides.slidePrev(300);
    };
    InitialPage.prototype.onLastSlide = function () {
        this.slides.slideTo(3, 300);
    };
    InitialPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot('page-home');
    };
    InitialPage.prototype.openAuthPage = function () {
        this.navCtrl.setRoot('page-auth');
    };
    InitialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitialPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], InitialPage.prototype, "slides", void 0);
    InitialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-initial',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/initial/initial.html"*/'<ion-content class="dark-bg">\n	<ion-grid no-padding fixed>\n		<ion-row no-padding>\n			<ion-col>\n\n				<ion-slides pager="true" dir="{{dir}}">\n					<ion-slide *ngFor="let slide of slideList">\n						<ion-toolbar>\n							<ion-buttons end>\n								<button ion-button class="text-white" (click)="onLastSlide()">Skip</button>\n							</ion-buttons>\n						</ion-toolbar>\n						<img [src]="slide.image" class="slide-image">\n						<h2 class="slide-title text-white" [innerHTML]="slide.title"></h2>\n						<p [innerHTML]="slide.description" class="text-white"></p>\n\n						<div padding>\n							<button ion-button round block color="secondary" margin-top icon-end (click)="onSlideNext()">\n								Next\n								<ion-icon name="arrow-round-forward" color="light"></ion-icon>\n							</button>\n						</div>\n					</ion-slide>\n					<ion-slide>\n						<ion-toolbar>\n						</ion-toolbar>\n						<img src="assets/img/ionProperty-ico.png" class="slide-image" margin-top>\n						<h2 class="slide-title text-white" margin-bottom>Ready to Play?</h2>\n\n						<div padding>\n							<button ion-button block round outline color="light" margin-top (click)="openAuthPage()">\n								Sign In / Sign Up\n							</button>\n							<!-- <button ion-button block round outline color="light" margin-top (click)="openHomePage()">\n								Get Started\n							</button> -->\n						</div>\n					</ion-slide>\n				</ion-slides>\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/initial/initial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */]])
    ], InitialPage);
    return InitialPage;
}());

//# sourceMappingURL=initial.js.map

/***/ })

});
//# sourceMappingURL=14.js.map