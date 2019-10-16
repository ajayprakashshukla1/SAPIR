webpackJsonp([7],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyOnMapPageModule", function() { return PropertyOnMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_on_map__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PropertyOnMapPageModule = /** @class */ (function () {
    function PropertyOnMapPageModule() {
    }
    PropertyOnMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__property_on_map__["a" /* PropertyOnMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__property_on_map__["a" /* PropertyOnMapPage */]),
            ],
        })
    ], PropertyOnMapPageModule);
    return PropertyOnMapPageModule;
}());

//# sourceMappingURL=property-on-map.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyOnMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
 * Generated class for the PropertyOnMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropertyOnMapPage = /** @class */ (function () {
    function PropertyOnMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyInfo = [];
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.propertyInfo = this.navParams.get('property');
        console.log("properties" + JSON.stringify(this.propertyInfo));
    }
    PropertyOnMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyOnMapPage');
        this.initMap();
    };
    PropertyOnMapPage.prototype.initMap = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
                lat: this.propertyInfo[0][0].lat,
                lng: this.propertyInfo[0][0].long
            }
        });
        var _loop_1 = function (i) {
            console.log("LAT " + JSON.stringify(this_1.propertyInfo[0]));
            marker = new google.maps.Marker({
                position: {
                    lat: this_1.propertyInfo[0][i].lat,
                    lng: this_1.propertyInfo[0][i].long
                },
                map: this_1.map,
                title: 'Hello World!'
            });
            var title = this_1.propertyInfo[0][i].title;
            var image = this_1.propertyInfo[0][i].picture;
            var price = this_1.propertyInfo[0][i].price;
            console.log("POPUP TITLE ===============" + title);
            infowindow = new google.maps.InfoWindow();
            service = google.maps.places.PlacesService(this_1.map);
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent('<div class=' + 'mapDiv' + '>' + '<h6>' + title + '</h6>' + '<p class=' + 'price' + '>' + price + '</p>' +
                    '<img class=' + 'mapImg' + ' src="' + image + '">'
                    + '</div>');
                infowindow.open(this.map, this);
            });
            this_1.directionsDisplay.setMap(this_1.map);
        };
        var this_1 = this, marker, infowindow, service;
        for (var i = 0; i < this.propertyInfo[0].length; i++) {
            _loop_1(i);
        }
    };
    PropertyOnMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-property-on-map',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/property-on-map/property-on-map.html"*/'<!--\n  Generated template for the PropertyOnMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n  <ion-navbar> \n    <button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/imgs/logosapir.png" class="logo_img">\n    </ion-title>\n      <!-- <img src="assets/imgs/search.png" class="serach"> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div  #map id="map">   \n    HEllo world\n  </div>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/property-on-map/property-on-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["v" /* NavParams */]])
    ], PropertyOnMapPage);
    return PropertyOnMapPage;
}());

//# sourceMappingURL=property-on-map.js.map

/***/ })

});
//# sourceMappingURL=7.js.map