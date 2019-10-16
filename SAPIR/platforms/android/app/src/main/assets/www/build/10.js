webpackJsonp([10],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesForRentPageModule", function() { return PropertiesForRentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_for_rent__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PropertiesForRentPageModule = /** @class */ (function () {
    function PropertiesForRentPageModule() {
    }
    PropertiesForRentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__properties_for_rent__["a" /* PropertiesForRentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__properties_for_rent__["a" /* PropertiesForRentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], PropertiesForRentPageModule);
    return PropertiesForRentPageModule;
}());

//# sourceMappingURL=properties-for-rent.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesForRentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_service_language_service__ = __webpack_require__(360);
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
 * Generated class for the PropertiesForRentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropertiesForRentPage = /** @class */ (function () {
    function PropertiesForRentPage(languageService, navCtrl, navParams, poviderForAllProvider, storage, events, toastController, loadingCtrl, fb, modalCtrl, translate) {
        this.languageService = languageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poviderForAllProvider = poviderForAllProvider;
        this.storage = storage;
        this.events = events;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.titlechange = "Recently Added";
        this.properties = [];
        this.pet = "featured";
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
        this.rooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '6+'];
        this.minrooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
        this.studioValue = [];
        this.studios = '';
        this.maxRentPriceList = ['1,000', '1,500', '2,000', '2,500', '3,000', '3,500', '4,000', '4,500', '5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000', '10,500', '11,000', '11,500', '12,000', '12,500', '13,000', '13,500', '14,000', '14,500', '15,000', '15,500',
            '16,000', '16,500', '17,000', '17,500', '18,000', '18,500', '19,000', '19,500', '20000'];
        this.minRentPriceList = ['1,000', '1,500', '2,000', '2,500', '3,000', '3,500', '4,000', '4,500', '5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000', '10,500', '11,000', '11,500', '12,000', '12,500', '13,000', '13,500', '14,000', '14,500', '15,000', '15,500',
            '16,000', '16,500', '17,000', '17,500', '18,000', '18,500', '19,000', '19,500', '20000'];
        this.filter = 0;
        this.filterData = [];
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
        this.getCity();
        this.getRentProperty();
    }
    PropertiesForRentPage.prototype.CheckMap = function () {
        var _this = this;
        if (this.pet == "albums") {
            setTimeout(function (z) {
                _this.initMap();
            }, 1000);
        }
    };
    PropertiesForRentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertiesForRentPage');
        this.getCity();
    };
    PropertiesForRentPage.prototype.setStudioValue = function (val) {
        console.log("Studio ===" + val);
        this.studios = val;
    };
    PropertiesForRentPage.prototype.ngOnInit = function () {
        this.rentForm = this.fb.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            minmaxprice: [{ upper: 5000000, lower: 100000 }, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            bedroom: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            bathrooms: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            token: [],
            paged: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            minPrice: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            maxPrice: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            studio: [],
            floor: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            propertyType: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            minfloor: [''],
            maxfloor: [''],
            minRoom: [''],
            maxRoom: ['']
        });
    };
    PropertiesForRentPage.prototype.slidePrev = function (i) {
        console.log(this.slide);
        this.slide.toArray()[i].slidePrev(500);
        // this.slide.forEach((slideInstance) => {
        //   // console.log("SLIDE INSTANCE ========== ",slideInstance);
        //    console.log("slide Instance == ",slideInstance.id+" Slide Length  == "+slideInstance.length());
        //   if(i<slideInstance.id && this.slide.length<=slideInstance.id){
        //   i = slideInstance.id+i;
        //   }
        //   if(slideInstance.id == i){
        //     console.log("SLIDE INSTANCE 22222== ",slideInstance.id);
        //     //slideInstance.id = s;
        //     slideInstance.slidePrev(); 
        //  }
        // }); 
    };
    PropertiesForRentPage.prototype.slideNext = function (i) {
        console.log("I ==== " + i);
        this.slide.toArray()[i].slideNext(500);
    };
    PropertiesForRentPage.prototype.getRentProperty = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.token = val.token;
            console.log("Token === " + _this.token);
            // this.showLoader();
            _this.poviderForAllProvider.getRentProperty(_this.token, 1).subscribe(function (res) {
                console.log("RENT PROPERTY RESPONSE == " + JSON.stringify(res));
                if (res.property) {
                    _this.errMsg = '';
                    _this.propertyNullMsg = res.msg;
                    _this.hideProperty = false;
                    _this.NotFoundMsg = true;
                    // this.loading.dismiss();
                }
                else {
                    // this.properties.push(data.property);
                    console.log("PROPERTY DETAILS === " + JSON.stringify(res));
                    var dataPropLength = res.property.length;
                    for (var i = 0; i < dataPropLength; i++) {
                        _this.properties.push(res.property[i]);
                    }
                    //  this.loading.dismiss();
                    _this.propPage = res.paged;
                    _this.maxPages = res.max_num_pages;
                    _this.loading = false;
                }
                _this.properties = [];
                _this.properties.push(res.property);
                console.log("ALL RENT PROPERTIES == " + JSON.stringify(_this.properties));
            });
        });
    };
    //INFINITY SCROllER
    // doInfinite(infiniteScroll,getPageNum) {
    //   this.newPageNum = parseInt(getPageNum)+parseInt('1');
    //   if(this.newPageNum<=this.maxPages){
    //       this.propPage = this.newPageNum;
    //   this.poviderForAllProvider.getRentProperty(this.token,this.newPageNum).subscribe(data => {
    //     this.propPage=data.paged;
    //     for(let i=0;i<data.property.length;i++){
    //           console.log("Loop Data === "+JSON.stringify(data));
    //               this.properties[0].push(data.property[i]);
    //           }
    //       infiniteScroll.complete();
    //   })
    //  }else{          
    //      console.log("YOUR LIMIT IS DONE");
    //      infiniteScroll.complete();
    //  }
    // }
    // doInfinite(infiniteScroll,getPageNum) {
    //   console.log("FILTER VAL === "+this.filter);
    //   this.newPageNum = parseInt(getPageNum)+parseInt('1');
    //   if(this.newPageNum<=this.maxPages){
    //       this.propPage = this.newPageNum;
    // if( this.filter ==0){
    //   this.poviderForAllProvider.getRentProperty(this.token,this.newPageNum).subscribe(data => {
    //     this.propPage=data.paged;
    //     for(let i=0;i<data.property.length;i++){
    //           // console.log("Loop Data === "+JSON.stringify(data));
    //               this.properties[0].push(data.property[i]);
    //           }
    //       infiniteScroll.complete();
    //   })
    // }else{
    //   console.log("Filter data == ",this.filterData);
    //   this.filterData.paged
    //   var nxtpage = parseInt(this.filterData.paged)+1;
    //   this.filterData.paged =nxtpage;
    //   console.log("Filter data Next== ",this.filterData);
    //   if(this.filterData.paged <=this.maxPages){
    //   this.poviderForAllProvider.post('filterProperties',this.filterData).subscribe(res => {
    // console.log("Filter response === ",res);
    //     if(res.property){ 
    //       infiniteScroll.complete();
    //       for(let i=0;i<res.property.length;i++){
    //         console.log("Loop ",res.property[i]);
    //       this.properties[0].push(res.property[i]);
    //       }
    //       this.propPage = res.paged;
    //       this.maxPages=res.max_num_pages;
    //       }
    //      console.log('Add prop ',this.properties);
    //     },err=>{
    //       console.log(err);
    //       this.loading.dismiss();
    //     }),errs=>{
    //       console.log(errs);   
    //       this.loading.dismiss();
    //   };
    //   }
    // }
    //  }else{          
    //      console.log("YOUR LIMIT IS DONE");
    //      infiniteScroll.complete();
    //  }
    // }
    PropertiesForRentPage.prototype.doInfinite = function (infiniteScroll, getPageNum) {
        var _this = this;
        console.log("INFINITY SCROLL");
        if (this.propertySearch == undefined || getPageNum == undefined) {
            console.log("SCrolling BAnd ==========================]");
            infiniteScroll.complete();
        }
        else if (this.propertySearch.paged <= this.maxPages) {
            console.log("current PAGE ==" + this.propertySearch.paged);
            this.propertySearch.paged = parseInt(this.propertySearch.paged) + 1;
            this.poviderForAllProvider.post('filterProperties', this.propertySearch).subscribe(function (res) {
                console.log(" infinity ResPons =", res);
                if (res.property) {
                    infiniteScroll.complete();
                    for (var i = 0; i < res.property.length; i++) {
                        _this.properties[0].push(res.property[i]);
                    }
                    _this.propPage = res.paged;
                    _this.maxPages = res.max_num_pages;
                    _this.propertySearch = _this.propertySearch;
                }
            });
        }
        infiniteScroll.complete();
    };
    PropertiesForRentPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    PropertiesForRentPage.prototype.openPropertyDetail = function (propertyDetails) {
        console.log('send Details' + JSON.stringify(propertyDetails));
        this.navCtrl.push('page-propertyinfo', {
            'propertyDetails': propertyDetails
        });
    };
    PropertiesForRentPage.prototype.initMap = function () {
        console.log(" MAP PROPERTIES ================= " + JSON.stringify(this.properties));
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
                lat: this.properties[0][0].lat,
                lng: this.properties[0][0].long
            }
        });
        // this.directionsDisplay.setMap(this.map);
        if (this.properties) {
            console.log(" MAP PROPERTIES IF CONDITIONS================= " + JSON.stringify(this.properties));
            var _loop_1 = function (i) {
                console.log("LAT deed" + JSON.stringify(this_1.properties[0]));
                marker = new google.maps.Marker({
                    position: {
                        lat: this_1.properties[0][i].lat,
                        lng: this_1.properties[0][i].long
                    },
                    map: this_1.map,
                    title: 'Hello World!'
                });
                var title = this_1.properties[0][i].title;
                var image = this_1.properties[0][i].picture;
                var price = this_1.properties[0][i].price;
                var pid = this_1.properties[0][i].id;
                console.log("POPUP TITLE ===============" + title);
                infowindow = new google.maps.InfoWindow();
                service = google.maps.places.PlacesService(this_1.map);
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent('<div class=' + 'mapDiv' + '>' + '<h6>' + title + '</h6>' + '<p class=' + 'price' + '>' + price + '</p>' +
                        '<img class=' + 'mapImg' + ' src="' + image + '" id=' + pid + '>'
                        + '</div>');
                    infowindow.open(this.map, this);
                });
                this_1.directionsDisplay.setMap(this_1.map);
            };
            var this_1 = this, marker, infowindow, service;
            for (var i = 0; i < this.properties[0].length; i++) {
                _loop_1(i);
            }
        }
        else {
        }
    };
    PropertiesForRentPage.prototype.doSomething = function (ev) {
        // console.log("TEST=============",ev.target.id);
        if (ev.target.id) {
            var a = parseInt(ev.target.id);
            console.log("ALL PROPERTIES ============== " + this.properties[0]);
            console.log("PROP ID === " + a);
            var index = this.properties[0].findIndex(function (x) { return x.id == a; });
            console.log(index);
            console.table(this.properties[0][index]);
            // this.openPropertyDetail(this.properties[index]);
            this.navCtrl.push('page-propertyinfo', {
                'propertyDetails': this.properties[0][index]
            });
            //  console.log('open inapp');
            //  this.iab.create(ev.target.href, "_system");
            return false;
        }
    };
    // Set fvrt=======================================
    PropertiesForRentPage.prototype.favorite = function (property, status) {
        var _this = this;
        console.log("prop  == " + JSON.stringify(property) + "STATUS == " + status);
        this.storage.get('user').then(function (val) {
            console.log("USER INFO === " + val.token);
            if (val.token) {
                _this.poviderForAllProvider.favorite(property, val, status).then(function (changeProperty) {
                    var resssp = changeProperty.json();
                    console.log("Only REsponse =" + JSON.stringify(resssp) + "LENGTH ==========" + _this.properties[0].length);
                    for (var i = 0; i < _this.properties[0].length; i++) {
                        console.log("INSIDE LOOP === " + _this.properties[0][i].id);
                        if (_this.properties[0][i].id == property.id) {
                            _this.properties[0][i].status = status;
                            console.log("PROPERTY TITLE ==== " + _this.properties[0][i].title);
                        }
                    }
                    var toast = _this.toastController.create({
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
    //GET CITY=======
    PropertiesForRentPage.prototype.getCity = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            console.log("prop rent Ts == " + val.token);
            _this.poviderForAllProvider.newgetCity(val.token).then(function (data) {
                _this.citys = data.res;
            });
        });
    };
    // FOR Search result
    PropertiesForRentPage.prototype.sendData = function (value, num) {
        var _this = this;
        value.paged = 1;
        this.filterData = value;
        this.loaderPresent();
        this.poviderForAllProvider.post('filterProperties', value).subscribe(function (res) {
            if (res.property) {
                _this.loading.dismiss();
                _this.properties = [];
                _this.properties.push(res.property);
                _this.propPage = res.paged;
                _this.maxPages = res.max_num_pages;
                _this.propertySearch = value;
                _this.errMsg = '';
                console.log("SEARCH RESPONSE" + JSON.stringify(res));
            }
            if (res.not_found) {
                _this.loading.dismiss();
                _this.showToast(res.not_found);
                _this.errMsg = res.not_found;
            }
            if (res.max_num_pages > 0) {
                _this.titlechange = 'Search Result';
            }
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        }), function (errs) {
            console.log(errs);
            _this.loading.dismiss();
        };
    };
    //END
    // ADVANCE FILTER 
    // advanceSearch(){   
    //   console.log("ADVANCE SEARCH =====");
    //   this.heading="Advance Search Results";
    //   let modal = this.modalCtrl.create('page-property-filter',this.rentForm.value);
    //       modal.present();
    //       modal.onDidDismiss(data => {
    //         console.log("HOM E RES == "+JSON.stringify(data));
    //         if(data ==undefined){
    //           console.log("undefined==============================");
    //         }
    //       else if(data.property){
    //         this.properties=[];
    //         this.properties.push(data.property);
    //         this.propPage = data.paged;
    //         this.maxPages=data.max_num_pages;
    //           this.titlechange ='Advance Search Results';
    //         console.log("PROP PAGES == "+this.propPage+" MAX PAGES === "+this.maxPages);
    //       }
    //       else if(data.not_found){
    //         let toast = this.toastController.create({
    //           message: data.not_found,
    //           cssClass: data.not_found,
    //           duration: 2000
    //       });
    //       toast.present(toast);
    //       }	  
    //     });
    // }
    PropertiesForRentPage.prototype.advanceFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create('page-property-filter', this.rentForm.value);
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log("ADVANCE FILTER RESPONSE    ==== ", data);
            if (data) {
                console.log("IF CONDITIONss== ");
                _this.rentForm.value.furniture = data.value.furniture;
                _this.rentForm.value.amenities = data.value.amenities;
                _this.rentForm.value.Type = data.value.Type;
                _this.sendData(_this.rentForm.value, '2');
            }
            else {
                console.log('Null DATA  === ', data);
            }
        });
    };
    // SET STUDIO'S====================
    PropertiesForRentPage.prototype.setstudio = function (studio, formVal) {
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
    PropertiesForRentPage.prototype.loaderPresent = function () {
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    };
    // Show Toast 
    PropertiesForRentPage.prototype.showToast = function (toastMsg) {
        var toast = this.toastController.create({
            message: toastMsg,
            duration: 2000
        });
        toast.present(toast);
    };
    PropertiesForRentPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
            console.log(" LANGUAGE CSS " + _this.lanCss);
            console.log("user language ======= ", details.selected_language);
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
    PropertiesForRentPage.prototype.setLanguage = function () {
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
                _this.lanCss = _this.languageSelected;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], PropertiesForRentPage.prototype, "slide", void 0);
    PropertiesForRentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-properties-for-rent',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/properties-for-rent/properties-for-rent.html"*/'<!--\n  Generated template for the ForsalePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding class="lg_screen_bg">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menu_icon"></ion-icon>\n    </button>\n        <ion-title Class="for_sale">\n          <img src="assets/imgs/logosapir.png" class="logo_img">\n        </ion-title>\n        <div class="language_selector" end>\n          <ion-select [(ngModel)]="languageSelected" [selectOptions]="selectOptions"  [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" (ionChange)=\'setLanguage()\' placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n            <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n          </ion-select>\n        </div>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding (click)="doSomething($event)" class="full_app_css">\n   <ion-grid no-padding>\n        <form [formGroup]="rentForm" (ngSubmit)="sendData(rentForm.value,\'1\')">\n                <ion-input formControlName="token" type="hidden" value="{{token}}"></ion-input>\n                <ion-input formControlName="paged" type="hidden" value="1"></ion-input>  \n                <ion-input formControlName="propertyType" type="hidden" value="rent"></ion-input> \n   \n    <ion-row class="heading_sec">\n        \n            <ion-col col-lg-12>\n              <ion-col col-lg-6 class="custom_colm">\n                  <ion-row [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                      <ion-col col-12 text-center>\n                            <img src="assets/imgs/m6.png"><span class="rent_text">{{\'PROPERTIES FOR RENT\' | translate}}</span>\n                          </ion-col>\n                  </ion-row>\n          </ion-col>\n          <ion-col col-lg-6 class="custom_colm">\n           <ion-row class="city_home" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n              <ion-col col-12 class="rent">\n                  <ion-item no-lines>\n                      <ion-label>{{\'Select City\' | translate}}</ion-label>\n                        <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="city" placeholder="{{\'Select City\' | translate}}" multiple="true" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                <ion-option *ngFor="let citydetails of citys" value="{{citydetails.city}}">{{citydetails.city | translate}}</ion-option>\n                        </ion-select>\n                  </ion-item>       \n              </ion-col>\n            </ion-row>\n            </ion-col>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class="floorsec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n              <div class="text_sec">\n                  <p>{{\'Floor\' | translate}}</p>\n              </div>\n             \n            <ion-col col-6 class="bedrooms">\n                <ion-item no-lines>\n                    <ion-label>{{\'Floor\' | translate}}</ion-label>\n                      <ion-select interface="popover" interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minfloor" placeholder="{{\'From\' | translate  }}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                          <ion-option value="0">{{\'Ground level\' | translate}}</ion-option> \n                        <ion-option *ngFor="let num of numbers" value="{{num}}">{{num}}</ion-option>\n                      </ion-select>\n                  </ion-item>\n          </ion-col>\n          <ion-col col-6 class="bedrooms">\n            <ion-item no-lines>\n                <ion-label>{{\'Floor\' | translate}}</ion-label>\n                <ion-select interface="popover" interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="maxfloor"  placeholder="{{\'To\' | translate}}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                  <ion-option value="0">{{\'Ground level\' | translate}}</ion-option>   \n                  <ion-option *ngFor="let num of numbers" value="{{num}}">{{num}}</ion-option>\n                </ion-select>\n             </ion-item>\n      </ion-col>\n            </ion-row>\n\n            <ion-row class="floorsec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                <div class="text_sec">\n                    <p>{{\'Room\' | translate}}</p>\n                </div>\n               \n              <ion-col col-6 class="bedrooms">\n                  <ion-item no-lines>\n                      <ion-label>{{\'Room\' | translate}}</ion-label>\n                        <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minRoom" placeholder="{{\'From\' | translate  }}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                          <ion-option  value="1">Studio</ion-option>    \n                          <ion-option *ngFor="let num of minrooms" value="{{num}}">{{num}}</ion-option>\n                        </ion-select>\n                     </ion-item>   \n            </ion-col>\n            <ion-col col-6 class="bedrooms">\n              <ion-item no-lines>\n                  <ion-label>{{\'Room\' | translate}}</ion-label>\n                    <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="maxRoom"  placeholder="{{\'To\' | translate}}"  [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                      <ion-option  value="1">Studio</ion-option> \n                      <ion-option *ngFor="let num of rooms" value="{{num}}">{{num}}</ion-option>\n                    </ion-select>\n                </ion-item>\n        </ion-col>\n              </ion-row>\n\n          \n            <ion-row class="floorsec" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                <div class="text_sec">\n                    <p>{{\'Price\' | translate}}</p>\n                </div>\n              \n              <ion-col col-6 class="bedrooms" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                  <ion-item no-lines>\n                      <ion-label>{{\'Select Max Price\' | translate}}</ion-label>\n                        <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="minPrice" placeholder="{{\'From\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                          <ion-option *ngFor="let minRentPrice of minRentPriceList" value="{{minRentPrice}}">{{minRentPrice}}</ion-option>\n                        \n                        </ion-select>\n                       </ion-item> \n            </ion-col>\n            <ion-col col-6 class="bedrooms">\n              <ion-item no-lines>\n                  <ion-label>{{\'Select Min Price\' | translate}}</ion-label>\n                    <ion-select interface="popover" [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="maxPrice"  placeholder="{{\'To\' | translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                      <ion-option *ngFor="let maxRentPrice of maxRentPriceList" value="{{maxRentPrice}}">{{maxRentPrice}}</ion-option>\n                    </ion-select>\n                 </ion-item>   \n        </ion-col>\n              </ion-row>\n                <ion-row no-padding>\n                        <ion-col col-lg-12 no-padding>\n                         <ion-col col-lg-6 no-padding class="custom_colm">\n                           <ion-row no-padding>\n                            <ion-col col-12 text-center class="search" no-padding>\n                              <button ion-button class="view_map search">{{\'SEARCH\' | translate}}</button>\n                            </ion-col>\n                          </ion-row>\n                         </ion-col>\n                          </ion-col>\n                      </ion-row>\n                  <ion-row>\n                    <ion-col *ngIf="errMsg" col-12>\n                        <p class="errMsg">{{errMsg}}</p>\n                    </ion-col>\n                </ion-row>\n\n   </form>\n    <h3 text-center>{{titlechange | translate}}</h3>\n\n<ion-segment [(ngModel)]="pet" (ionChange)="CheckMap()" class="segment_list" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n    <ion-segment-button value="featured">\n    <span><img src="assets/imgs/list_view.png"></span><span class="list_view">{{\'List View\' | translate}}</span>\n    </ion-segment-button>\n    <ion-segment-button value="albums">\n        <span><img src="assets/imgs/map1.png"></span><span class="list_view">{{\'Map View\' | translate}}</span>\n    </ion-segment-button>\n  </ion-segment>\n  \n  <div [ngSwitch]="pet">\n\n    <ion-grid class="album card-background-page" *ngSwitchCase="\'featured\'" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n      <ion-row  class="img_box_sec">\n        <ion-col col-12 col-lg-6 class="main_column" no-padding  *ngFor="let property of properties[0]; let i=index ">\n          <ion-row>\n            <ion-col col-12 no-padding>\n                <ion-slides  #slide class="image-slider main-slider" id="img_slider" loop="true" slidesPerView="1">\n                    <ion-slide *ngFor="let img of property.images">\n                      <img  src="{{img}}" (click)="openPropertyDetail(property)" class="large_image"  />\n                </ion-slide>\n                </ion-slides>\n                <ion-icon name="ios-arrow-back-outline" (click)="slidePrev(i)" class="back_icon"></ion-icon>\n                <ion-icon name="ios-arrow-forward-outline" (click)="slideNext(i)" class="for_icon"></ion-icon> \n            </ion-col>\n          </ion-row>\n<ion-row class="for_sell_sec">\n    <ion-col col-10 no-padding>\n        <p>{{property.title}}</p>\n    </ion-col>\n    <ion-col col-2 class="heart_img" no-padding>\n            <button class="form_doc" *ngIf="property.status !== 1" ion-button icon-left (click)="favorite(property,1)" clear item-left>\n                    <ion-icon  name="heart"></ion-icon>\n            </button> \n            <button class="form_doc like" color="danger" *ngIf="property.status == 1" ion-button icon-left (click)="favorite(property,0)" clear item-left>\n                    <ion-icon  name="heart"></ion-icon>\n            </button>	\n    </ion-col>\n</ion-row>\n       \n<ion-row class="person_img">\n    <ion-col col-1 no-padding>\n        <img src="assets/imgs/building.png">\n    </ion-col>\n    <ion-col col-11 no-padding>\n        <span>{{property.city | translate}} </span>\n    </ion-col>\n</ion-row>\n<ion-row class="address_img_sec">\n  <ion-col col-1 no-padding>\n    <ion-icon name="pin"></ion-icon>\n  </ion-col>\n  <ion-col col-11 no-padding>\n    <span>{{property.area | translate}}</span>\n  </ion-col>\n</ion-row>\n      \n        <ion-row class="list_view_img_sec">\n          <ion-col col-7>\n            <div class="bottom_img_sec">\n              <span><img src="assets/imgs/8.png"> &nbsp;<strong>{{property.bedrooms}}</strong></span>&nbsp;\n              <span><img src="assets/imgs/7.png">&nbsp;<strong>{{property.bathrooms}}</strong></span>&nbsp;\n              <span><img src="assets/imgs/building.png">&nbsp;<strong>{{property.floor}}</strong></span>\n          </div>\n          </ion-col>\n          <ion-col col-5 text-right>\n             <span>{{property.price}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n      <ion-grid class="album" *ngSwitchCase="\'albums\'">\n          <div #map id="map"></div>\n      </ion-grid>\n      </div>\n   </ion-grid>\n\n<!-- INFINITY SCROLLER -->\n<ion-infinite-scroll (ionInfinite)="doInfinite($event,propPage)">\n	<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<!-- INFINITY SCROLLER END  -->\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/properties-for-rent/properties-for-rent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], PropertiesForRentPage);
    return PropertiesForRentPage;
}());

//# sourceMappingURL=properties-for-rent.js.map

/***/ })

});
//# sourceMappingURL=10.js.map