webpackJsonp([15],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(363);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(languageService, platform, translate, navCtrl, poviderForAllProvider, menu, fb, ToastController, loadingCtrl, events, callNumber, modalController, storage) {
        var _this = this;
        this.languageService = languageService;
        this.platform = platform;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.poviderForAllProvider = poviderForAllProvider;
        this.menu = menu;
        this.fb = fb;
        this.ToastController = ToastController;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.storage = storage;
        this.textDir = "ltr";
        this.formDiv = true;
        this.pet = 'featured';
        this.properties = [];
        this.mapView = false;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.titlechange = "Recently Added";
        this.studios = '';
        this.studioValue = [];
        this.minmaxprice = {
            upper: 5000000,
            lower: 100000
        };
        this.bathroomnumber = {
            upper: 50,
            lower: 0
        };
        this.bedroom = {
            upper: 20,
            lower: 0
        };
        this.dualKnobs3 = {
            upper: 5000000,
            lower: 100000,
        };
        this.dualKnobs2 = {
            upper: 50,
            lower: 0
        };
        this.pwaMinMaxPrice = {
            upper: 5000000,
            lower: 100000
        };
        this.pwaFloorLevels = {
            upper: 50,
            lower: 0
        };
        this.viewMapData = [];
        this.propertyType = 'Rent';
        this.cityList = [];
        this.userDetails = [];
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
        this.rooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '6+'];
        this.minrooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
        this.minRentPriceList = ['1,000', '1,500', '2,000', '2,500', '3,000', '3,500', '4,000', '4,500', '5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000', '10,500', '11,000', '11,500', '12,000', '12,500', '13,000', '13,500', '14,000', '14,500', '15,000', '15,500',
            '16,000', '16,500', '17,000', '17,500', '18,000', '18,500', '19,000', '19,500'];
        this.maxRentPriceList = ['1,000', '1,500', '2,000', '2,500', '3,000', '3,500', '4,000', '4,500', '5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000', '10,500', '11,000', '11,500', '12,000', '12,500', '13,000', '13,500', '14,000', '14,500', '15,000', '15,500',
            '16,000', '16,500', '17,000', '17,500', '18,000', '18,500', '19,000', '19,500', '20000'];
        this.minSellList = ['300,000', '450,000', '600,000', '750,000', '900,000', '1,000,000', '1,500,000', '2,000,000', '2,500,000', '3,000,000', '3,500,000'];
        this.maxSellList = ['300,000', '450,000', '600,000', '750,000', '900,000', '1,000,000', '1,500,000', '2,000,000', '2,500,000', '3,000,000', '3,500,000', '40,00,000'];
        this.toggleGroup = function () {
            console.log(this.showStatus);
            if (this.showStatus) {
                this.showStatus = false;
            }
            else {
                this.showStatus = true;
            }
        };
        this.isGroupShown = function () {
            return this.showStatus;
        };
        this.knobValues = {
            upper: 20,
            lower: 1
        };
        this.knobValues2 = {
            upper: 5000000,
            lower: 1000000
        };
        //  this.translation();
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
        this.storage.get('platform').then(function (val) {
            _this.checkBrowser = val;
            console.log("Value ========", val);
            //  alert('CHECK BROWSER  == '+val);
        });
        this.getCity();
        this.findAll();
        this.popUp = {
            cssClass: 'popUp',
        };
    }
    HomePage.prototype.slidePrev = function (i) {
        this.slide.toArray()[i].slidePrev(500);
    };
    HomePage.prototype.slideNext = function (i) {
        this.slide.toArray()[i].slideNext(500);
    };
    // FOR Search result
    HomePage.prototype.sendData = function (value, num) {
        var _this = this;
        console.log("SEARCH  === ", value);
        this.searchNumber = num;
        if (this.searchNumber == '1') {
            this.homeForm.value.furniture = '';
            this.homeForm.value.amenities = '';
            this.homeForm.value.Type = '';
        }
        if (value.minPrice == null) {
            value.minPrice = "";
        }
        if (value.maxPrice == null) {
            value.maxPrice = "";
        }
        if (this.searchNumber == '6') {
            value.furniture = '';
            value.amenities = '';
            value.Type = '';
            value.city = '';
            value.minmaxprice = '';
            value.bedroom = '';
            value.bathrooms = '';
            value.minPrice = '';
            value.maxPrice = '';
            value.studio = '';
            value.floor = '';
            value.studios = '';
            value.minRoom = '';
            value.maxRoom = '';
            value.minfloor = '';
            value.maxfloor = '';
            value.furniture = '';
            value.amenities = '';
        }
        value.propertyType = this.propertyType;
        value.paged = 1;
        this.loaderPresent();
        console.log("Search list  == ", value);
        this.poviderForAllProvider.post('filterProperties', value).subscribe(function (res) {
            console.log("NORMAL FILTER RESUlt ", res);
            if (res.property) {
                _this.loading.dismiss();
                _this.errMsg = '';
                _this.properties = [];
                for (var i = 0; i < res.property.length; i++) {
                    _this.properties.push(res.property[i]);
                }
                // this.properties.push(res.property);
                _this.propPage = res.paged;
                _this.maxPages = res.max_num_pages;
                _this.propertySearch = value;
                if (res.max_num_pages > 0) {
                    _this.titlechange = 'Search Result';
                }
            }
            if (res.not_found) {
                _this.loading.dismiss();
                _this.showToast(res.not_found);
                _this.titlechange = "Recently Added";
                _this.findAll();
                _this.errMsg = res.not_found;
            }
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }), function (errs) {
            console.log(errs);
            _this.loading.dismiss();
        };
    };
    // sendData(value) {
    //   value.studios = this.studios;
    //   value.propertyType = this.propertyType;
    //   value.city=this.cityList;
    //   value.paged = 1;
    //   if (value.minPrice > value.maxPrice) {
    //     value.minmaxprice.upper = value.minPrice;
    //     value.minmaxprice.lower = value.maxPrice;
    //   } else {
    //     value.minmaxprice.upper = value.maxPrice;
    //     value.minmaxprice.lower = value.minPrice;
    //   }
    //   if (this.checkBrowser == 1) {
    //     console.log("Browser == " + this.checkBrowser);
    //     value.city = this.cityList;
    //     value.propertyType = this.propertyType;
    //     console.table(value.city);
    //   }
    //   this.loaderPresent();
    //   this.poviderForAllProvider.post('filterProperties', value).subscribe(res => {
    //     if (res.property) {
    //       this.loading.dismiss();
    //       this.properties = [];
    //       for (let i = 0; i < res.property.length; i++) {
    //         this.properties.push(res.property[i]);
    //       }
    //       // this.properties.push(res.property);
    //       this.propPage = res.paged;
    //       this.maxPages = res.max_num_pages;
    //       this.propertySearch = value;
    //       if (res.max_num_pages > 0) {
    //         this.titlechange = 'Search Result';
    //       }
    //     }
    //     if (res.not_found == "Not found") {
    //       this.loading.dismiss();
    //       this.showToast(res.not_found);
    //     }
    //   }, err => {
    //     console.log(err);
    //     this.loading.dismiss();
    //   }), errs => {
    //     console.log(errs);
    //     this.loading.dismiss();
    //   };
    // }
    HomePage.prototype.setStudioValue = function (val) {
        console.log("Studio ===" + val);
        this.studios = val;
    };
    //END
    // INFINITY SCROLLING
    HomePage.prototype.doInfinite = function (infiniteScroll, getPageNum) {
        var _this = this;
        console.log("INFINITY SCROLL");
        if (this.propertySearch == undefined || getPageNum == undefined) {
            console.log("SCrolling BAnd ==========================]");
            infiniteScroll.complete();
        }
        else if (this.propertySearch.paged <= this.maxPages) {
            // alert("FORM PAGE === "+this.propertySearch.paged+"   .. MAX PAGES === "+this.maxPages);
            console.log("current PAGE ==" + this.propertySearch.paged);
            this.propertySearch.paged = parseInt(this.propertySearch.paged) + 1;
            this.poviderForAllProvider.post('filterProperties', this.propertySearch).subscribe(function (res) {
                // console.log(" infinity ResPons"+JSON.stringify(res));
                if (res.property) {
                    infiniteScroll.complete();
                    for (var i = 0; i < res.property.length; i++) {
                        _this.properties.push(res.property[i]);
                    }
                    _this.propPage = res.paged;
                    _this.maxPages = res.max_num_pages;
                    _this.propertySearch = _this.propertySearch;
                }
            });
        }
        infiniteScroll.complete();
    };
    //GET CITY=======
    HomePage.prototype.getCity = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            console.log("VALUE +++++=========", val);
            _this.token = val.token;
            _this.poviderForAllProvider.newgetCity(val.token).then(function (data) {
                _this.citys = data.res;
            }).catch(function (error) {
                console.log("ERROR +== ", error);
                if (error.status == 500) {
                    _this.storage.clear();
                }
                else {
                    console.log("ERROR == ", error);
                }
            });
        });
    };
    //END =================
    // GO TO PROPERTY PAGE 
    HomePage.prototype.openPropertyDetail = function (propertyDetails) {
        console.log('send Details' + JSON.stringify(propertyDetails));
        this.navCtrl.push('page-propertyinfo', {
            'propertyDetails': propertyDetails
        });
    };
    // ADVANCE FILTER
    HomePage.prototype.advanceFilter = function () {
        var _this = this;
        var modal = this.modalController.create('page-property-filter', this.homeForm.value);
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log("ADVANCE FILTER RESPONSE    ==== ", data);
            if (data) {
                console.log("IF CONDITIONss== ");
                _this.homeForm.value.furniture = data.value.furniture;
                _this.homeForm.value.amenities = data.value.amenities;
                _this.homeForm.value.Type = data.value.Type;
                _this.sendData(_this.homeForm.value, '2');
            }
            else {
                console.log('Null DATA  === ', data);
            }
        });
    };
    // END 
    HomePage.prototype.ngOnInit = function () {
        this.homeForm = this.fb.group({
            propertyType: [],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            minmaxprice: [{ upper: 5000000, lower: 100000 }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            bedroom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            bathrooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            token: [],
            paged: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            minPrice: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            maxPrice: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            studio: [],
            floor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            minfloor: [''],
            maxfloor: [''],
            minRoom: [''],
            maxRoom: [''],
            sortFilter: [''],
        });
        this.menu.enable(true);
    };
    HomePage.prototype.addContent = function (showStatus) {
        this.contentData = 'All the thing about Technology! Informatic technology especially.All the thing about Technology! Informatic technology especially.';
        this.showStatus = !showStatus;
        console.log(showStatus);
    };
    HomePage.prototype.loaderPresent = function () {
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    };
    // Show Toast 
    HomePage.prototype.showToast = function (toastMsg) {
        var toast = this.ToastController.create({
            message: toastMsg,
            duration: 2000
        });
        toast.present(toast);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.token = val.token;
            _this.userDetails = val;
            console.log("ion view did load", _this.userDetails.role);
            _this.events.publish('role:created', _this.userDetails.role);
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.pet = "featured";
    };
    HomePage.prototype.pwaSearch = function (pwaFormValue) {
        pwaFormValue.minmaxprice.upper = 0;
        pwaFormValue.minmaxprice.lower = 0;
        pwaFormValue.bedroom.upper = 0;
        pwaFormValue.bedroom.lower = 0;
        pwaFormValue.bathroomnumber.upper = 0;
        pwaFormValue.bathroomnumber.lower = 0;
        pwaFormValue.pwaFormValue;
        console.log("Form Value" + JSON.stringify(pwaFormValue));
        this.sendData(pwaFormValue, '3');
    };
    HomePage.prototype.viewMap = function (value) {
        var _this = this;
        console.log("VIEW MAP");
        this.poviderForAllProvider.post('filterProperties', value).subscribe(function (res) {
            console.log("res" + res);
            if (res.property) {
                _this.viewMapData = [];
                _this.viewMapData.push(res.property);
                _this.navCtrl.setRoot('page-property-on-map', {
                    'property': _this.viewMapData
                });
            }
            else if (res.max_num_pages == 0) {
                _this.showToast(res.not_found);
            }
        });
    };
    HomePage.prototype.initMap = function () {
        // console.log(" MAP PROPERTIES ================= "+JSON.stringify(this.properties));
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
                lat: this.properties[0].lat,
                lng: this.properties[0].long
            }
        });
        console.log("MAP === ", this.map);
        // this.directionsDisplay.setMap(this.map);
        if (this.properties) {
            console.log(" MAP PROPERTIES IF CONDITIONS================= " + JSON.stringify(this.properties));
            var _loop_1 = function (i) {
                marker = new google.maps.Marker({
                    position: {
                        lat: this_1.properties[i].lat,
                        lng: this_1.properties[i].long
                    },
                    map: this_1.map,
                    title: 'Hello World!'
                });
                var title = this_1.properties[i].title;
                var image = this_1.properties[i].picture;
                var price = this_1.properties[i].price;
                var pid = this_1.properties[i].id;
                infowindow = new google.maps.InfoWindow();
                service = google.maps.places.PlacesService(this_1.map);
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent('<div  id=' + 'propertyInfo' + ' class=' + 'mapDiv' + '>' + '<h6>' + title + '</h6>' + '<p class=' + 'price' + '>' + price + '</p>' +
                        '<img class=' + 'mapImg' + ' src="' + image + '" id=' + pid + ' >'
                        + '</div>');
                    infowindow.open(this.map, this);
                });
                this_1.directionsDisplay.setMap(this_1.map);
            };
            var this_1 = this, marker, infowindow, service;
            for (var i = 0; i < this.properties.length; i++) {
                _loop_1(i);
            }
        }
        else {
            console.log("There is no property");
        }
    };
    HomePage.prototype.myFunction = function () {
        document.getElementById("propertyInfo").click(); // Click on the checkbox
    };
    HomePage.prototype.doSomething = function (ev) {
        // console.log("TEST=============",ev.target.id);
        if (ev.target.id) {
            var a = parseInt(ev.target.id);
            var index = this.properties.findIndex(function (x) { return x.id == a; });
            console.log(index);
            console.table(this.properties[index]);
            // this.openPropertyDetail(this.properties[index]);
            this.navCtrl.push('page-propertyinfo', {
                'propertyDetails': this.properties[index]
            });
            //  console.log('open inapp');
            //  this.iab.create(ev.target.href, "_system");
            return false;
        }
    };
    HomePage.prototype.CheckMap = function () {
        var _this = this;
        if (this.pet == "albums") {
            setTimeout(function (z) {
                _this.initMap();
            }, 1000);
        }
    };
    // SET STUDIO'S====================
    HomePage.prototype.setstudio = function (studio, formVal) {
        this.len = this.studioValue.length;
        if (this.len == 0) {
            this.studioValue.push(studio);
            formVal.studio = this.studioValue;
            this.studioClass1 = studio;
            this.studioClass2 = studio;
            this.studioClass3 = studio;
            this.studioClass4 = studio;
            this.len = this.studioValue.length;
        }
        else {
            var match = this.studioValue.indexOf(studio);
            if (match > -1) {
                var val_1 = this.studioValue[match];
                if (val_1 == 1) {
                    this.studioClass1 = 5;
                }
                if (val_1 == 2) {
                    this.studioClass2 = 5;
                }
                if (val_1 == 3) {
                    this.studioClass3 = 5;
                }
                if (val_1 == 4) {
                    this.studioClass4 = 5;
                }
                this.studioValue.splice(match, 1);
                formVal.studio = this.studioValue;
                this.len = this.studioValue.length;
            }
            else {
                this.studioValue.push(studio);
                this.len = this.studioValue.length;
                console.log("LENGTH == " + this.len);
                console.log("ELSE", this.studioValue);
                formVal.studio = this.studioValue;
            }
        }
        console.log("I AM WORK");
        for (var i = 0; i < this.len; i++) {
            var val = this.studioValue[i];
            console.log("VALUE == " + val);
            if (val == 1) {
                this.studioClass1 = val;
            }
            if (val == 2) {
                this.studioClass2 = val;
            }
            if (val == 3) {
                this.studioClass3 = val;
            }
            if (val == 4) {
                this.studioClass4 = val;
            }
        }
    };
    // Set PROPERTY TYPE ===============================
    HomePage.prototype.setPropertyType = function (propertytype, formValue) {
        this.propertyType = propertytype;
        formValue.propertyType = propertytype;
        this.homeForm.controls['minPrice'].reset();
        this.homeForm.controls['maxPrice'].reset();
        console.log("FORM VALUE  ==== ", this.homeForm.value);
    };
    HomePage.prototype.findAll = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.poviderForAllProvider.findAll(1, val.token).then(function (data) {
                console.log("LENGTH =" + data.property.length);
                for (var i = 0; i < data.property.length; i++) {
                    _this.properties.push(data.property[i]);
                }
                _this.propPage = data.paged;
                _this.maxPages = data.max_num_pages;
                console.log('ppppppppppp: ', _this.maxPages);
                //this.loading = false;
            }).catch(function (error) {
                console.log("ERROR +== ", error);
                if (error.status == 500) {
                    _this.storage.clear();
                    _this.navCtrl.push('page-auth');
                }
                else {
                    console.log("ERROR == ", error);
                }
            });
        });
    };
    // Set fvrt=======================================
    HomePage.prototype.favorite = function (property, status) {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (val.token) {
                _this.poviderForAllProvider.favorite(property, val, status).then(function (changeProperty) {
                    var resssp = changeProperty.json();
                    for (var i = 0; i < _this.properties.length; i++) {
                        console.log("INSIDE LOOP === " + _this.properties[i].id);
                        if (_this.properties[i].id == property.id) {
                            _this.properties[i].status = status;
                            console.log("PROPERTY TITLE ==== " + _this.properties[i].status);
                        }
                    }
                    var toast = _this.ToastController.create({
                        message: resssp.response,
                        cssClass: 'mytoast',
                        duration: 2000
                    });
                    toast.present(toast);
                });
            }
        });
        console.log("PROPERTY " + JSON.stringify(property) + " Staus == " + status);
    };
    //  end favrt
    // checkBox(event, city) {
    //   console.log("EVENTS === ", event.checked + " CITY " + city);
    //   if (event.checked == true) {
    //     this.cityList.push(city);
    //   } else {
    //     let cityIndex = this.cityList.indexOf(city);
    //     this.cityList.splice(cityIndex, 1);
    //   }
    //   console.table(this.cityList);
    // }
    HomePage.prototype.translation = function () {
        var _this = this;
        console.log('TRANS');
        this.platform.ready().then(function () {
            _this.translate.onLangChange.subscribe(function (event) {
                console.log("HOME LANGUAGE ==-=-= ++++===============" + event.lang);
                _this.textDir = event.lang == 'ar' ? 'rtl' : 'ltr';
                // this.translate.use(this.textDir);
            });
        });
    };
    HomePage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
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
    // Languages
    HomePage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        console.log("LANGUAGE === " + defaultLanguage);
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.storage.get('user').then(function (details) {
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                    console.log("Change Language === ", val);
                    2;
                });
                console.table(details);
                details.selected_language = _this.languageSelected;
                _this.lanCss = _this.languageSelected;
                if (_this.lanCss == 'ar') {
                    _this.selectMinPrice = 'בחר מחיר מינימלי';
                    _this.selectMaxPrice = 'בחר מחיר מרבי';
                    _this.propertyType = 'sell';
                }
                else {
                    _this.selectMinPrice = 'Select Min Price';
                    _this.selectMaxPrice = 'Select Max Price';
                }
                _this.selectOptions = {
                    cssClass: _this.lanCss,
                };
                console.log("user details", details);
                _this.storage.set('user', details);
                _this.getLan = _this.languageSelected;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HomePage.prototype, "slide", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/home/home.html"*/'<ion-header padding class="home_header">\n  <ion-navbar> \n    <button menuToggle icon-only>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/imgs/logosapir.png" class="logo_img">\n    </ion-title>\n    <div class="language_selector" end>\n      <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n        <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n      </ion-select>\n    </div>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding class="home_content" (click)="doSomething($event)" class="full_app_css">\n    <form  [formGroup]="homeForm" (ngSubmit)="sendData(homeForm.value,\'1\')" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n      <img src="assets/imgs/home_img.png" class="home_img">\n  <div>\n     \n\n  <ion-grid  class="img_padd" padding>\n      <ion-input formControlName="token" type="hidden" value="{{token}}"></ion-input>\n      <ion-input formControlName="paged" type="hidden" value="1"></ion-input>\n      <ion-row class="border_box">\n          <ion-col col-12 no-padding text-center>   \n       <span (click)="setPropertyType(\'Rent\',homeForm.value)"  [ngClass]="{\'rent_text\' : (propertyType==\'Rent\')}">{{\'Rent\' | translate}}</span><span>/</span><span (click)="setPropertyType(\'sell\',homeForm.value)"  [ngClass]="{\'rent_text\' : (propertyType==\'sell\')}">{{\'Sell\' | translate}}</span>\n          </ion-col>\n          <ion-col col-12 class="drop_padding desktop_view">\n               <div>\n                 <ion-item class="item-stable"\n                           (click)="toggleGroup()" class="drop_down_icon">\n                           <ion-icon *ngIf="isGroupShown()" name="md-arrow-dropup"></ion-icon>\n                           <ion-icon [hidden]="isGroupShown()" name="md-arrow-dropdown"></ion-icon>\n                   &nbsp;\n                   <span class="neighbor">{{\'Select City\' | translate}}</span>\n                 </ion-item>   \n               </div>\n        </ion-col>\n          <ion-col col-12 class="drop_padding mobile_view">\n             <ion-list> \n                 <div>\n                     <ion-row class="city_home">  \n                         <ion-col col-12 class="rent">\n                            <ion-item no-lines>\n                          <ion-label>{{\'Select City\' | translate}}</ion-label>\n                            <ion-select [selectOptions]="selectOptions" formControlName="city" placeholder="{{\'Select City\' | translate }}" multiple="true" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                             <ion-option *ngFor="let citydetails of citys" value="{{citydetails.city}}">{{citydetails.city | translate}}</ion-option>\n                           </ion-select>\n                          </ion-item>\n                         </ion-col>\n                       </ion-row>\n                 </div>\n             </ion-list>\n          </ion-col>      \n        </ion-row>\n\n <ion-row class="floorsec">\n    <div class="text_sec">\n        <p>{{\'Floor\' | translate}}</p>\n    </div>\n    \n  <ion-col col-6 class="bedrooms">\n      <ion-item no-lines>\n          <ion-label>{{\'Floor\' | translate}}</ion-label>\n            <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minfloor" placeholder="{{\'From\' | translate  }}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option value="0">{{\'Ground level\' | translate}}</ion-option>\n              <ion-option *ngFor="let num of numbers" value="{{num}}">{{num}}</ion-option>\n          </ion-select>\n    </ion-item>\n</ion-col>\n<ion-col col-6 class="bedrooms">\n  <ion-item no-lines>\n      <ion-label>{{\'Floor\' | translate}}</ion-label>\n        <ion-select  interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}"   formControlName="maxfloor"  placeholder="{{\'To\' | translate}}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n          <ion-option value="0">{{\'Ground level\' | translate}}</ion-option> \n          <ion-option *ngFor="let num of numbers" value="{{num}}">{{num}}</ion-option>\n        </ion-select>\n    </ion-item>\n</ion-col>\n  </ion-row>\n\n  <ion-row class="floorsec">\n      <div class="text_sec">\n          <p>{{\'Room\' | translate}}</p>\n      </div>\n     \n    <ion-col col-6 class="bedrooms">\n        <ion-item no-lines>\n            <ion-label>{{\'Room\' | translate}}</ion-label>\n              <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minRoom"  placeholder="{{\'From\' | translate  }}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                <ion-option  value="1">Studio</ion-option>    \n                <ion-option *ngFor="let num of minrooms" value="{{num}}">{{num}}</ion-option>\n              </ion-select>\n        </ion-item>\n     </ion-col>\n     <ion-col col-6 class="bedrooms">\n      <ion-item no-lines>\n          <ion-label>{{\'Room\' | translate}}</ion-label>\n            <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}"  formControlName="maxRoom" placeholder="{{\'To\' | translate}}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n              <ion-option  value="1">Studio</ion-option>      \n              <ion-option *ngFor="let num of rooms" value="{{num}}">{{num}}</ion-option>\n            </ion-select>\n         </ion-item>   \n</ion-col>\n    </ion-row>\n     <ion-row class="floorsec" *ngIf="propertyType==\'Rent\'" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}"> \n        <div class="text_sec" >\n            <p>{{\'Price\' | translate}}</p>\n        </div>\n     \n<ion-col col-6 class="bedrooms">\n<ion-item no-lines>\n  <ion-label>{{\'Select Max Price\' | translate}}</ion-label>\n      <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minPrice" placeholder="{{\'From\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n          <ion-option *ngFor="let maxRentPrice of maxRentPriceList" value="{{maxRentPrice}}">{{maxRentPrice}}</ion-option>\n      </ion-select>\n</ion-item>\n</ion-col>\n<ion-col col-6 class="bedrooms">\n<ion-item no-lines>\n    <ion-label>{{\'Select Min Price\' | translate}}</ion-label>\n      <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="maxPrice"  placeholder="{{\'To\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n          <!-- <ion-option value="">{{\'Select Min Price\' | translate}}</ion-option>     -->\n        <ion-option *ngFor="let minRentPrice of minRentPriceList" value="{{minRentPrice}}">{{minRentPrice}}</ion-option>\n      </ion-select>\n</ion-item>  \n</ion-col>\n  </ion-row>\n  <ion-row class="floorsec" *ngIf="propertyType==\'sell\'">\n      <div class="text_sec">\n          <p>{{\'Price\' | translate}}</p>\n      </div>\n     \n    <ion-col col-6 class="bedrooms">\n        <ion-item no-lines>\n          <ion-label>{{\'Select Max Price\' | translate}}</ion-label>\n            <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minPrice"  placeholder="{{\'From\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                <!-- <ion-option value="">{{\'Select Max Price\' | translate}}</ion-option>    -->\n                <ion-option *ngFor="let maxSellPrice of maxSellList" value="{{maxSellPrice}}">{{maxSellPrice}}</ion-option>\n            </ion-select>\n          </ion-item>  \n    </ion-col>\n    <ion-col col-6 class="bedrooms">\n      <ion-item no-lines>\n          <ion-label>{{\'Select Min Price\' | translate}}</ion-label>\n            <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="maxPrice" placeholder="{{\'To\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                <!-- <ion-option value="">{{\'Select Min Price\' | translate}}</ion-option>     -->\n                <ion-option *ngFor="let minSellPrice of minSellList" value="{{minSellPrice}}">{{minSellPrice}}</ion-option>\n            </ion-select>\n         </ion-item>   \n</ion-col>\n  </ion-row>\n<ion-row>\n  <ion-col col-12 text-center class="search" no-padding>\n    <button ion-button class="view_map search">{{\'SEARCH\' | translate}}</button>\n</ion-col>\n \n      <ion-col col-6 text-center>\n        <button ion-button type="button" (click)="advanceFilter()" class="view_map advance_filter">{{\'ADVANCED FILTER\' | translate}}</button>\n      </ion-col>\n      <ion-col col-6 class="price-filter" text-center>\n        <ion-select interface="popover" (ionChange)="sendData(homeForm.value,\'6\')" formControlName="sortFilter" placeholder="{{\'SORT\' | translate}}">\n          <ion-option value="date">{{\'Date\' | translate}}</ion-option>\n          <ion-option value="price-high">{{\'Price (High)\' | translate}}</ion-option>\n          <ion-option value="price-low">{{\'Price (Low)\' | translate}}</ion-option>\n        </ion-select>\n    </ion-col>\n</ion-row>\n\n<ion-row >\n  <ion-col *ngIf="errMsg" col-12>\n      <p class="errMsg">{{errMsg}}</p>\n  </ion-col>\n</ion-row>\n\n</ion-grid>\n</div>\n\n\n \n</form>\n\n\n<!-- Code STARTED HERE -->\n\n<h3 text-center>{{titlechange | translate}}</h3>\n<ion-segment [(ngModel)]="pet" (ionChange)="CheckMap()" class="segment_list " [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n    <ion-segment-button value="featured">\n    <span><img src="assets/imgs/list_view.png"></span><span class="list_view">{{\'List View\' | translate}}</span>\n    </ion-segment-button>\n    <ion-segment-button value="albums">\n        <span><img src="assets/imgs/map1.png"></span><span class="list_view">{{\'Map View\' | translate}}</span>\n    </ion-segment-button>\n  </ion-segment>\n  \n  <div [ngSwitch]="pet">\n\n      <ion-grid class="album card-background-page" *ngSwitchCase="\'featured\'">\n          \n      <ion-row  class="img_box_sec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n            <ion-col col-12 col-lg-6 class="main_column" no-padding *ngFor="let property of properties; let i=index" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n\n                    <ion-row>\n                            <ion-col col-12 no-padding>\n                                    <!-- <img src="{{property.thumbnail}}"> -->\n                                    <ion-slides  #slide class="image-slider main-slider" id="img_slider" loop="true" slidesPerView="1">\n                                      <ion-slide *ngFor="let img of property.images">\n                                        <img  src="{{img}}" (click)="openPropertyDetail(property)" class="large_image"  />\n                                  </ion-slide>\n                                  </ion-slides>\n                                  \n                                  <ion-icon name="ios-arrow-back-outline" (click)="slidePrev(i)" class="back_icon"></ion-icon>\n                                  <ion-icon name="ios-arrow-forward-outline" (click)="slideNext(i)" class="for_icon"></ion-icon> \n                            </ion-col>\n                          </ion-row>\n              <ion-row class="heart_content_sec">\n                <ion-col col-10 no-padding>\n                        <p>{{property.title}}</p>\n                    </ion-col>\n                    <ion-col col-2 class="heart_img" no-padding>\n                        <button class="form_doc" *ngIf="property.status !== 1" ion-button icon-left (click)="favorite(property,1)" clear item-left>\n                            <ion-icon  name="heart"></ion-icon>\n                        </button> \n                        <button class="form_doc like" color="danger" *ngIf="property.status == 1" ion-button icon-left (click)="favorite(property,0)" clear item-left>\n                            <ion-icon  name="heart"></ion-icon>\n                        </button>	 \n                    </ion-col>\n        </ion-row>\n       \n        <ion-row class="person_city">\n            <ion-col col-1 no-padding>\n                <!-- <ion-icon name="ios-person-outline"></ion-icon> -->\n                <img src="assets/imgs/building.png">\n            </ion-col>\n            <ion-col col-11 no-padding>\n                <span>{{property.city | translate}}</span>\n            </ion-col>\n        </ion-row>  \n        <ion-row class="address_new">\n          <ion-col col-1 no-padding>\n            <ion-icon name="pin"></ion-icon>\n          </ion-col>\n          <ion-col col-11 no-padding>\n            <span>{{property.area | translate}}</span>\n          </ion-col>\n      </ion-row>  \n            <ion-row class="list_view_img_sec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                    <ion-col col-7>\n                        <div class="bottom_img_sec">\n                          <span>\n                            <img src="assets/imgs/8.png"> &nbsp;<strong>{{property.bedrooms}}</strong></span>&nbsp;\n                            <span><img src="assets/imgs/7.png">&nbsp;<strong>{{property.bathrooms}}</strong></span>&nbsp;\n                            <span><img src="assets/imgs/building.png">&nbsp;<strong>{{property.floor}}</strong></span>\n                        </div>\n                    </ion-col>   \n                    <ion-col col-5 text-right>\n                    <span>{{property.price}}</span>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n      </ion-row>\n      <!-- INFINITY SCROLLER -->\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event,propPage)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  <!-- INFINITY SCROLLER END  -->\n      </ion-grid>\n      \n      <ion-grid class="album map_grid" *ngSwitchCase="\'albums\'">\n          <div #map id="map"></div>\n      </ion-grid>\n      </div>\n</ion-content>\n\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map