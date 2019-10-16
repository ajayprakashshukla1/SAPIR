webpackJsonp([23],{

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		707,
		22
	],
	"../pages/auth/auth.module": [
		721,
		21
	],
	"../pages/contact-us/contact-us.module": [
		708,
		20
	],
	"../pages/edit-property/edit-property.module": [
		724,
		19
	],
	"../pages/favorite-list/favorite-list.module": [
		709,
		18
	],
	"../pages/form/form.module": [
		710,
		17
	],
	"../pages/forsale/forsale.module": [
		711,
		16
	],
	"../pages/home/home.module": [
		725,
		15
	],
	"../pages/initial/initial.module": [
		712,
		14
	],
	"../pages/messages/messages.module": [
		713,
		13
	],
	"../pages/mylisting/mylisting.module": [
		714,
		12
	],
	"../pages/ownername/ownername.module": [
		722,
		11
	],
	"../pages/properties-for-rent/properties-for-rent.module": [
		727,
		10
	],
	"../pages/properties-for-sell/properties-for-sell.module": [
		726,
		9
	],
	"../pages/property-filter/property-filter.module": [
		715,
		8
	],
	"../pages/property-on-map/property-on-map.module": [
		716,
		7
	],
	"../pages/propertyinfo/propertyinfo.module": [
		723,
		6
	],
	"../pages/rent-out-form/rent-out-form.module": [
		728,
		0
	],
	"../pages/sell-out-form/sell-out-form.module": [
		729,
		5
	],
	"../pages/setting/setting.module": [
		717,
		4
	],
	"../pages/stilllooking/stilllooking.module": [
		718,
		3
	],
	"../pages/support/support.module": [
		719,
		2
	],
	"../pages/termprivacy/termprivacy.module": [
		720,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoviderForAllProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var wordpressAUTH_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/jwt-auth/v1/token';
var myListingURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/myListingProperty';
var citiesUrl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/getcities';
var mainURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/';
var markfavoritesURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/setLikeValue';
var wordpressMOB_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/';
var propertiesURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/getProperties';
/*
  Generated class for the PoviderForAllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PoviderForAllProvider = /** @class */ (function () {
    function PoviderForAllProvider(http, storage, photoViewer, events) {
        this.http = http;
        this.storage = storage;
        this.photoViewer = photoViewer;
        this.events = events;
        console.log('Hello PoviderForAllProvider Provider');
        // this.storage.get('user').then((val) => {
        //   this.token=val.token;
        //   console.log("USER INFO === "+val.token);
        //   this.getCity();
        // })
    }
    //CITY
    // getCity(){
    //  console.log("CITY token ======================= "+this.token);
    //  this.storage.get('user').then((val) => {
    //   this.token=val.token;
    //   console.log("USER INFO === "+val.token);
    // });
    //   return this.http.get(citiesUrl+"?token="+this.token)
    //   .map(res => res.json())  
    //   .toPromise();
    //  }
    PoviderForAllProvider.prototype.newgetCity = function (getToken) {
        return this.http.get(citiesUrl + "?token=" + getToken)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //END
    // HOME RESULT
    PoviderForAllProvider.prototype.post = function (serviceUrl, formData) {
        var url = mainURL + serviceUrl;
        console.log("URL ==" + url);
        return this.http.post(url, formData).map(function (res) { return res.json(); });
    };
    // PROPERTY FAVOURITE 
    PoviderForAllProvider.prototype.favorite = function (property, val, status) {
        console.log("PROVIDER FAVRITE VALUES = " + JSON.stringify(val) + "STATUS = = " + status + "PROPERTY = =" + property);
        var body = { property: property.id, token: val.token, step: status };
        // headers = new Headers({'Content-Type': 'application/json'}),
        // options = new RequestOptions({headers: headers});
        return this.http.post(markfavoritesURL, body).toPromise();
    };
    // GET MY LISTING
    PoviderForAllProvider.prototype.getMyListing = function (token, pageNum) {
        if (pageNum === void 0) { pageNum = null; }
        console.log("Tokens ====================" + token);
        return this.http.get(myListingURL + "?token=" + token + "&paged=" + pageNum)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    // GET MESSAGE
    PoviderForAllProvider.prototype.getMessages = function (URL, token) {
        console.log("URL === " + URL + " TOKEN === " + token);
        var data = { token: token };
        console.log("provider URL ==" + URL + " data =" + data + " provide TOKEN " + token);
        return this.http.post(URL, data).map(function (res) { return res.json(); });
    };
    // Property FOR RENT
    PoviderForAllProvider.prototype.getRentProperty = function (token, page) {
        var url = mainURL + 'getRentProperties?token=' + token + '&paged=' + page;
        console.log("URL  === " + url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    // Property FOR Sell
    PoviderForAllProvider.prototype.getSellProperty = function (token, page) {
        var url = mainURL + 'getSellProperties?token=' + token + '&paged=' + page;
        console.log("URL  === " + url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PoviderForAllProvider.prototype.googleLogin = function (googleUrl, res) {
        var gurl = wordpressMOB_URL + googleUrl;
        return this.http.post(gurl, res).map(function (res) { return res.json(); });
    };
    PoviderForAllProvider.prototype.readMessage = function (url, token, id) {
        console.log("URL == " + url + "=== TOKEN " + token + " ===ID === " + id);
        var data = { 'token': token, 'read_status': 0, 'id': id };
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    PoviderForAllProvider.prototype.stillProperty = function (endPoind, value) {
        var url = wordpressMOB_URL + endPoind;
        return this.http.post(url, value).map(function (res) { return res.json(); });
    };
    // PHOTO VIEWER
    PoviderForAllProvider.prototype.viewPhoto = function (imgUrl) {
        this.photoViewer.show(imgUrl);
    };
    PoviderForAllProvider.prototype.findAll = function (paged, uToken) {
        if (paged === void 0) { paged = null; }
        var newPageNum = '1';
        if (paged) {
            newPageNum = paged;
        }
        return this.http.get(propertiesURL + "?token=" + uToken + "&paged=" + newPageNum)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    // USER UPDATE 
    PoviderForAllProvider.prototype.updateUser = function (_update) {
        var _this = this;
        console.log("User Update ==" + _update);
        this.storage.get('user').then(function (val) {
            if (val) {
                var _user = val;
                for (var key in _update) {
                    if (_update.hasOwnProperty(key)) {
                        var element = _update[key];
                        _user[key] = element;
                    }
                }
                _this.events.publish('user:created', _user);
                return _this.storage.set('user', _user);
            }
            else {
                return true;
            }
        });
    };
    PoviderForAllProvider.prototype.UpdateLanguage = function (url, token, lan) {
        var data = { token: token, selected_language: lan };
        console.log("provider URL ==" + URL + " data =" + data + " provide TOKEN " + token);
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    PoviderForAllProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* Events */]])
    ], PoviderForAllProvider);
    return PoviderForAllProvider;
}());

//# sourceMappingURL=povider-for-all.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the LanguageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LanguageServiceProvider = /** @class */ (function () {
    function LanguageServiceProvider() {
        this.languages = new Array();
        this.languages.push({ name: "English", code: "en" }, 
        // {name: "Spanish", code: "es"},
        { name: "Hebrew", code: "ar" });
    }
    LanguageServiceProvider.prototype.getLanguages = function () {
        return this.languages;
    };
    LanguageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LanguageServiceProvider);
    return LanguageServiceProvider;
}());

//# sourceMappingURL=language-service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var favoritesURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/getFavoritesProperties';
var markfavoritesURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/setLikeValue';
/*
  Generated class for the FavouriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavouriteProvider = /** @class */ (function () {
    function FavouriteProvider(http) {
        this.http = http;
        console.log('Hello FavouriteProvider Provider');
    }
    FavouriteProvider.prototype.getFavorites = function (pageNum, token) {
        console.log("GET FAVORIYES TOKEN  ++==" + token + "PageNum ==" + pageNum);
        return this.http.get(favoritesURL + "?token=" + token + "&paged=" + pageNum)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    FavouriteProvider.prototype.favorite = function (property, val, status) {
        //    console.log("PROVIDER FAVRITE VALUES = "+JSON.stringify(val)+"STATUS = = "+status+"PROPERTY = ="+property);
        var body = { property: property.id, token: val.token, step: status };
        // headers = new Headers({'Content-Type': 'application/json'}),
        // options = new RequestOptions({headers: headers});
        return this.http.post(markfavoritesURL, body).toPromise();
    };
    FavouriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FavouriteProvider);
    return FavouriteProvider;
}());

//# sourceMappingURL=favourite.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceSearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var wordpressMOB_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/mobileapi/';
/*
  Generated class for the AdvanceSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AdvanceSearchProvider = /** @class */ (function () {
    function AdvanceSearchProvider(http) {
        this.http = http;
        console.log('Hello AdvanceSearchProvider Provider');
    }
    AdvanceSearchProvider.prototype.post = function (serviceUrl, formData) {
        var url = wordpressMOB_URL + serviceUrl;
        console.log("URL ==" + url);
        return this.http.post(url, formData).map(function (res) { return res.json(); }
        // console.log("SERVER RES"+res)
        // res.json()
        );
    };
    AdvanceSearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AdvanceSearchProvider);
    return AdvanceSearchProvider;
}());

//# sourceMappingURL=advance-search.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var wordpressAUTH_URL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'wp-json/jwt-auth/v1/token';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (username, password) {
        console.log("USER NAME == " + username + " PASSWORD == " + password);
        return this.http.post(wordpressAUTH_URL, {
            username: username,
            password: password
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(130);
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


// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
// import { Firebase } from '@ionic-native/firebase';
/*
  Generated class for the EventLoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventLoggerProvider = /** @class */ (function () {
    function EventLoggerProvider(http) {
        this.http = http;
        console.log('Hello EventLoggerProvider Provider');
    }
    EventLoggerProvider.prototype.logButton = function (name, value) {
        console.log("name === ", name, " Value == " + value);
        // this.firebaseAnalytics.logEvent('Login', { pram:value })
        // .then((res: any) => {console.log(res);})
        // .catch((error: any) => console.error(error));
    };
    EventLoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EventLoggerProvider);
    return EventLoggerProvider;
}());

//# sourceMappingURL=event-logger.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_advance_search_advance_search__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_favourite_favourite__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_photo_viewer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_language_service_language_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_list_list__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_event_logger_event_logger__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ForsalePage } from '../pages/forsale/forsale';


// import { InitialPage } from '../pages/initial/initial';

















// import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";





// import { Firebase } from '@ionic-native/firebase';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var config = new __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["GoogleLoginProvider"]("976595820206-i90kgc499pfgu6euo3pu0trhr3krccsi.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["FacebookLoginProvider"]("925766981119337")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'page-about', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'page-contact-us', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule', name: 'page-favorite-list', segment: 'favorite-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/form.module#FormPageModule', name: 'page-form', segment: 'form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forsale/forsale.module#ForsalePageModule', name: 'ForsalePage', segment: 'forsale', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial/initial.module#InitialPageModule', name: 'page-initial', segment: 'initial', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'page-messages', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylisting/mylisting.module#MylistingPageModule', name: 'page-mylisting', segment: 'mylisting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-filter/property-filter.module#PropertyFilterPageModule', name: 'page-property-filter', segment: 'property-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-on-map/property-on-map.module#PropertyOnMapPageModule', name: 'page-property-on-map', segment: 'property-on-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'page-setting', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stilllooking/stilllooking.module#StilllookingPageModule', name: 'page-stilllooking', segment: 'stilllooking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termprivacy/termprivacy.module#TermprivacyPageModule', name: 'page-termprivacy', segment: 'termprivacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'page-auth', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ownername/ownername.module#OwnernamePageModule', name: 'page-ownername', segment: 'ownername', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/propertyinfo/propertyinfo.module#PropertyinfoPageModule', name: 'page-propertyinfo', segment: 'propertyinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-property/edit-property.module#EditPropertyPageModule', name: 'page-edit-property', segment: 'edit-property', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'page-home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/properties-for-sell/properties-for-sell.module#PropertiesForSellPageModule', name: 'page-properties-for-sell', segment: 'properties-for-sell', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/properties-for-rent/properties-for-rent.module#PropertiesForRentPageModule', name: 'page-properties-for-rent', segment: 'properties-for-rent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rent-out-form/rent-out-form.module#RentOutFormPageModule', name: 'page-rent-out-form', segment: 'rent-out-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-out-form/sell-out-form.module#SellOutFormPageModule', name: 'page-sell-out-form', segment: 'sell-out-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["SocialLoginModule"].initialize(config),
                __WEBPACK_IMPORTED_MODULE_25_angular4_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_list__["a" /* ListPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_advance_search_advance_search__["a" /* AdvanceSearchProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_favourite_favourite__["a" /* FavouriteProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_21__providers_language_service_language_service__["a" /* LanguageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_27__providers_event_logger_event_logger__["a" /* EventLoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__["a" /* SocialSharing */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertController, storage, googlePlus, translate, events, fb) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertController = alertController;
        this.storage = storage;
        this.googlePlus = googlePlus;
        this.translate = translate;
        this.events = events;
        this.fb = fb;
        this.textDir = "ltr";
        this.rootPage = 'page-auth';
        this.admin = { title: 'Post Ad', component: 'page-form' };
        this.userDetails = [];
        this.storage.get('user').then(function (details) {
            if (details) {
                _this.userDetails = details;
                console.log('My DETAILS', _this.userDetails);
                console.table(details);
                _this.translate.use(details.selected_language);
                _this.lan = details.selected_language;
                _this.events.publish('lan:created', details.selected_language);
                _this.events.subscribe('lan:created', function (lan) {
                    _this.lan = lan;
                    console.log('Welcome', lan, 'at', lan);
                });
            }
            else {
                console.log("Blank Storage");
            }
        });
        console.log(this.platform.platforms());
        // alert("1"+this.platform.platforms());
        this.checkPlatform = this.platform.platforms();
        if (this.checkPlatform == 'core' || this.checkPlatform == 'mobileweb') {
            // alert("2"+this.checkPlatform);
            var itsBroser = 1;
            this.storage.set('platform', itsBroser);
        }
        else {
            var itsdevice = 2;
            this.storage.set('platform', itsdevice);
        }
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: 'page-home' },
            { title: 'Personal Information', component: 'page-ownername' },
            { title: 'FAVORITES', component: 'page-favorite-list' },
        ];
        this.yourProperty = [
            { title: 'PROPERTIES FOR SELL', component: 'page-properties-for-sell' },
            { title: 'PROPERTIES FOR RENT', component: 'page-properties-for-rent' },
        ];
        this.help = [
            { title: 'ABOUT', component: 'page-about' },
            // { title: 'SUPPORT', component: 'page-support' },
            { title: 'CONTACT US', component: 'page-contact-us' },
            { title: 'TERMS AND PRIVACY', component: 'page-termprivacy' },
        ];
        this.events.subscribe('role:created', function (role) {
            _this.role = role;
            console.log('USER ROLE ======= ' + _this.role);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log("App INITIALIZE ");
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.onLangChange.subscribe(function (event) {
                console.log("APP COMPONENT.ts  ===============" + event.lang);
                _this.textDir = event.lang == 'ar' ? 'rtl' : 'ltr';
                _this.lan = event.lang;
            });
            _this.storage.get('user').then(function (val) {
                console.log("LOCAL STORAGE ================================= ", val);
                if (val) {
                    // alert("I M WORK");
                    _this.rootPage = 'page-home';
                }
                else {
                    console.log("ELSE CONDITIONS");
                    _this.rootPage = 'page-auth';
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lan = details.selected_language;
            console.log("user language ======= ", details.selected_language);
            if (details.selected_language == 'en') {
                _this.msg = "Sapir App";
                _this.yes = "Yes";
                _this.no = "No";
            }
            else {
                _this.msg = _this.translate.instant('Sapir App');
                _this.yes = _this.translate.instant('Yes');
                _this.no = _this.translate.instant('No');
            }
            var sapir = _this.translate.instant('Logout');
            var alert = _this.alertController.create({
                title: sapir,
                // message: this.msg,
                buttons: [
                    {
                        text: _this.yes,
                        handler: function () {
                            _this.storage.remove('user');
                            _this.fb.logout();
                            _this.nav.setRoot('page-auth');
                            //this.rootPage='page-auth';      
                        }
                    },
                    {
                        text: _this.no,
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ],
                cssClass: _this.lan
            });
            alert.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/app/app.html"*/'<ion-split-pane when="lg">\n<ion-menu [content]="content" type="overlay" side="left">\n  <ion-header [ngClass]="{\'mirror\' : (lan==\'ar\'),  \'nomirror\' : (lan !=\'ar\')}">\n    <ion-toolbar menuClose class="toolbar_inner_sec">\n       <ion-title><ion-icon name="menu" class="side_bar_menu_icon"></ion-icon><span class="menu_inner_sec">{{\'Menu\' | translate}}</span></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="home_sec" [ngClass]="{\'rtl\' : (lan==\'ar\'),  \'ltr\' : (lan !=\'ar\')}">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title | translate}}\n      </button>\n    </ion-list>\n     <ion-list class="propert_sec" [ngClass]="{\'rtl\' : (lan==\'ar\'),  \'ltr\' : (lan !=\'ar\')}">\n          <ion-list-header no-margin>\n            <span ion-text color="dark" class="fw500">{{\'your Property\' | translate}}</span>\n          </ion-list-header>\n      <button  menuClose ion-item *ngFor="let p of yourProperty" (click)="openPage(p)" [ngClass]="{\'rtl\' : (lan==\'ar\'),  \'ltr\' : (lan !=\'ar\')}">\n        <p class=\'menuNoWrap\'>{{p.title  | translate}}</p>\n      </button>\n      <button *ngIf="role ==\'admin\'" menuClose ion-item  (click)="openPage(admin)" [ngClass]="{\'rtl\' : (lan==\'ar\'),  \'ltr\' : (lan !=\'ar\')}">\n        <p class=\'menuNoWrap\'>{{admin.title | translate}}</p>\n      </button>\n     </ion-list>\n     <ion-list class="help_sec">\n        <ion-list-header no-margin [ngClass]="{\'rtl\' : (lan==\'ar\')}">\n            <span ion-text color="dark" class="fw500">{{\'help\' | translate}}</span>\n          </ion-list-header>\n      <button menuClose ion-item *ngFor="let p of help" (click)="openPage(p)" [ngClass]="{\'rtl\' : (lan==\'ar\'),  \'ltr\' : (lan !=\'ar\')}">\n        {{p.title  | translate}}\n      </button>\n     </ion-list>\n\n     <ion-list class="help_sec" no-lines>\n      <button menuClose ion-item  (click)="logout()" class="logout" [ngClass]="{\'rtl\' : (lan==\'ar\'),  \'ltr\' : (lan !=\'ar\')}">\n       {{\'Logout\' | translate}}\n      </button>\n      </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" main overlay #content swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "https://sapir.app/";
//# sourceMappingURL=config.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map