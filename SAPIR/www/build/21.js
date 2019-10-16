webpackJsonp([21],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
            ]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_event_logger_event_logger__ = __webpack_require__(369);
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
var AuthPage = /** @class */ (function () {
    function AuthPage(http, events, _fb, forgotCtrl, loadingCtrl, menu, toastCtrl, authProvider, storage, navController, poviderForAllProvider, fb, googlePlus, authService, logger) {
        var _this = this;
        this.http = http;
        this.events = events;
        this._fb = _fb;
        this.forgotCtrl = forgotCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
        this.storage = storage;
        this.navController = navController;
        this.poviderForAllProvider = poviderForAllProvider;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.authService = authService;
        this.logger = logger;
        this.auth = "login";
        this.error_message = '';
        this.error_message_r = '';
        this.isLoggedIn = false;
        this.properStorage = [];
        this.menu.swipeEnable(false);
        this.menu.enable(false);
        this.storage.get('platform').then(function (val) {
            _this.checkBrowser = val;
            // alert(this.checkBrowser);
        });
    }
    // BROWSER LOGIN
    AuthPage.prototype.fblogin = function () {
        var _this = this;
        console.log("FB===");
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            console.log("RESPONS === ", res);
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    AuthPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender,short_name,name_format", ["public_profile"])
            .then(function (res) {
            _this.users = res;
            console.log("REAL DATA == " + JSON.stringify(res));
            _this.properStorage = {
                facebook_id: res.id,
                authToken: res.authToken,
                email: res.email,
                fbname: res.firstName,
                username: res.firstName,
                user_pic: res.photoUrl
            };
            // alert("FaceBook Data   = "+JSON.stringify(this.properStorage));
            _this.error_message_r = "";
            var loading = _this.loadingCtrl.create();
            loading.present();
            _this.poviderForAllProvider.post('facebook_login', _this.properStorage).subscribe(function (res) {
                // alert('Successssss === '+JSON.stringify(res));
                _this.storage.set('user', res);
                if (res.token) {
                    _this.navController.setRoot('page-home');
                }
                else {
                    console.log("STORAGE EMPTY");
                }
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                // this.error_message_r = err.json().msg;
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    AuthPage.prototype.ngOnInit = function () {
        this.onLoginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ])]
        });
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ])]
        });
        // NPM LOGIN HERE=========
        // this.authService.authState.subscribe((user) => {
        //   this.user = user;
        //   // alert("USER === "+this.user);
        //   console.log("USER ============",this.user);
        //   this.loggedIn = (user != null);
        //   console.log("LOGIN STATUS  ==",this.loggedIn);
        //   if(this.user){
        //     this.poviderForAllProvider.googleLogin('facebook_login',user).subscribe(res => {
        //       this.storage.set('user', res);
        //       this.navController.setRoot('page-home');
        //     },err=>{
        //       this.error_message = "Invalid username or password.";
        //     })
        //   }else{
        //      console.log("USER NOT LOGIN");
        //   }
        // });
    };
    // go to register page
    AuthPage.prototype.register = function () {
        var _this = this;
        this.error_message_r = "";
        console.log("ON REGISTER " + JSON.stringify(this.onRegisterForm.value));
        var loading = this.loadingCtrl.create();
        loading.present();
        this.poviderForAllProvider.post('register', this.onRegisterForm.value).subscribe(function (res) {
            _this.onRegisterForm.reset();
            var toast = _this.toastCtrl.create({
                message: res.msg,
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
            _this.error_message_r = err.json().msg;
        }), function (errs) {
            loading.dismiss();
            _this.error_message_r = "Somthing went wrong!";
        };
        loading.dismiss();
    };
    // login and go to home page
    AuthPage.prototype.login = function () {
        var _this = this;
        this.error_message = "";
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authProvider.login(this.onLoginForm.value.email, this.onLoginForm.value.password).subscribe(function (res) {
            console.log("AFTER LOGIN DATA NEW= " + JSON.stringify(res));
            // this.logger.logButton('homeButton',{ pram: "paramValue" })
            // this.firebaseAnalytics.logEvent('login', {page: "dashboard"})
            // .then((res: any) => console.log("Analytics Response === "+res))
            // .catch((error: any) => console.error("Error",error));
            _this.storage.set('user', res);
            _this.navController.setRoot('page-home');
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            _this.error_message = "Invalid username or password.";
        }), function (errs) {
            loading.dismiss();
            _this.error_message = "Invalid username or password.";
        };
    };
    AuthPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    AuthPage.prototype.sendPropertyDetails = function (value) {
        // this.rest.post('register',this.onRegisterForm.value)
        // this.http.post('url' ,value).subscribe(res => {
        //   console.log(res);
        // }),err=>{
        //  console.log(err);
        // }
    };
    AuthPage.prototype.signInWithFB = function () {
        var _this = this;
        console.log('Fb Signin');
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (res) {
            console.table(res);
            console.log("FACEBOOK RESPONSE ", res);
            _this.properStorage = {
                facebook_id: res.id,
                authToken: res.authToken,
                email: res.email,
                fbname: res.firstName,
                username: res.firstName,
                user_pic: res.photoUrl
            };
            _this.error_message_r = "";
            var loading = _this.loadingCtrl.create();
            loading.present();
            _this.poviderForAllProvider.post('facebook_login', _this.properStorage).subscribe(function (res) {
                console.log('Successssss === ', res);
                _this.storage.set('user', res);
                if (res.token) {
                    _this.navController.setRoot('page-home');
                }
                else {
                    console.log("STORAGE EMPTY");
                }
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
                _this.error_message_r = err.json().msg;
            });
        });
    };
    //LOGIN to FACE BOOK 
    AuthPage.prototype.faceBookLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
            console.log("RESPONSE  == " + JSON.stringify(res));
            _this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large,short_name)', []).then(function (profile) {
                console.log("PROFILE == " + JSON.stringify(profile));
                console.log("GOOGLE LOGIN RESPONSE  =" + JSON.stringify(profile));
                _this.poviderForAllProvider.googleLogin('facebook_login', profile).subscribe(function (res) {
                    console.log("FACEBOOK LOGIN == " + JSON.stringify(res));
                    _this.storage.set('user', res);
                    _this.navController.setRoot('page-home');
                    _this.events.publish('user:created', res);
                    loading.dismiss();
                });
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        loading.dismiss();
    };
    //Google Plus Login
    AuthPage.prototype.loginFrmGoogle = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.googlePlus.login({})
            .then(function (res) {
            // console.log("GOOGLE LOGIN RESPONSE  ="+JSON.stringify(res));
            _this.poviderForAllProvider.googleLogin('registerlogin', res).subscribe(function (res) {
                console.log("GOOGLE PROVIDER RES" + JSON.stringify(res));
                _this.storage.set('user', res);
                _this.navController.setRoot('page-home');
                _this.events.publish('user:created', res);
                loading.dismiss();
            });
        }).catch(function (err) { return console.error(err); });
        loading.dismiss();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/auth/auth.html"*/'<!-- -->\n<ion-content padding class="profiles-bg">\n	<div class="auth-content">\n\n		<!-- Logo -->\n		<div padding-horizontal text-center>\n			<div class="logo">\n				<img src="assets/imgs/logosapir.png">\n			</div>\n			<!-- <h2 ion-text class="text-white" no-margin>\n				Sapir<strong>App</strong>\n			</h2> -->\n		</div>\n\n		<div padding-vertical>\n		  <ion-segment [(ngModel)]="auth" color="light">\n		    <ion-segment-button value="login">\n		      Login\n		    </ion-segment-button>\n		    <ion-segment-button value="register">\n		      Register\n		    </ion-segment-button>\n		  </ion-segment>\n		</div>\n\n		<div [ngSwitch]="auth">\n			\n			<!-- Login form -->\n			<div id="loginForm" *ngSwitchCase="\'login\'">\n				<form [formGroup]="onLoginForm" class="list-form">\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="mail" item-start class="text-white"></ion-icon>\n							Email\n						</ion-label>\n						<ion-input type="email" formControlName="email"></ion-input>\n					</ion-item>\n					<p ion-text color="danger" class="text-1x has-error" *ngIf="onLoginForm.get(\'email\').touched && onLoginForm.get(\'email\').hasError(\'required\') && onLoginForm.get(\'email\').hasError(\'email\')">This field is required</p>\n\n					<ion-item>\n						<ion-label floating>\n							<ion-icon name="lock" item-start class="text-white"></ion-icon>\n							Password\n						</ion-label>\n						<ion-input type="password" formControlName="password"></ion-input>\n					</ion-item>\n					<p ion-text  class="text-1x has-error " *ngIf="onLoginForm.get(\'password\').touched && onLoginForm.get(\'password\').hasError(\'required\')">This field is required</p>\n				</form>\n\n				<p text-right ion-text color="light" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n				<div>\n						<p ion-text  text-center class="has-error no-padding red">{{error_message}}</p>\n					<button ion-button icon-start block outline color="light" (click)="login()" [disabled]="!onLoginForm.valid">\n						<ion-icon name="log-in"></ion-icon>\n						SIGN IN\n					</button>\n\n					<!-- <p text-center ion-text color="light">Or Sign in with:</p>  -->\n				<ion-grid class="btn-group">    \n						<ion-row>\n							<button (click)="fblogin()" ion-button icon-only block class="btn-facebook col col-4">\n								<ion-icon name="logo-facebook"></ion-icon>\n							</button>&nbsp;	\n						</ion-row>\n					</ion-grid> \n				</div>\n			</div>\n\n			<div id="registerForm" *ngSwitchCase="\'register\'">\n		    <!-- Register form -->\n		    <form [formGroup]="onRegisterForm" class="list-form">\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="person" item-start class="text-white"></ion-icon>\n		          Full Name\n		        </ion-label>\n		        <ion-input type="text" formControlName="fullName"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">This field is required</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n		          Email\n		        </ion-label>\n		        <ion-input type="email" formControlName="email"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n		      <ion-item>\n		        <ion-label floating>\n		          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n		          Password\n		        </ion-label>\n		        <ion-input type="password" formControlName="password"></ion-input>\n		      </ion-item>\n		      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n		    </form>\n\n		    <div margin-top>\n						<p ion-text color="danger" text-center class="has-error no-padding">{{error_message_r}}</p>\n		      <button ion-button block outline color="light" (click)="register()" [disabled]="!onRegisterForm.valid">\n		        SIGN UP\n		      </button>\n		      \n		    </div>\n		  </div>\n\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/auth/auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["AuthService"],
            __WEBPACK_IMPORTED_MODULE_10__providers_event_logger_event_logger__["a" /* EventLoggerProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=21.js.map