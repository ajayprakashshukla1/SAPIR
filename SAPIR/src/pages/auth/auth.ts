import { Component, OnInit , ViewChild} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, Nav, AlertController, LoadingController, ToastController, MenuController,NavController } from 'ionic-angular';
import{AuthProvider} from'../../providers/auth/auth';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { AuthService } from "angular4-social-login";
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { EventLoggerProvider } from '../../providers/event-logger/event-logger';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';


@IonicPage({
	name: 'page-auth',
	segment: 'auth',
	// priority: 'high'
})

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage{
  // @ViewChild(Nav) nav: Nav;
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  auth: string = "login";
  error_message:string = '';
  error_message_r:string = '';
  isLoggedIn:boolean = false;
  users: any;
  user:any;
  loggedIn:any;
  checkBrowser:any;
  properStorage:any=[];
  constructor(public http:Http,public events: Events,private _fb: FormBuilder, public forgotCtrl: AlertController, public loadingCtrl: LoadingController, 
    public menu: MenuController, public toastCtrl: ToastController,public authProvider:AuthProvider,public storage:Storage,
    public navController:NavController,public poviderForAllProvider:PoviderForAllProvider,public fb:Facebook,public googlePlus:GooglePlus,public authService:AuthService,
    public logger: EventLoggerProvider
    ) {
		this.menu.swipeEnable(false);
    this.menu.enable(false);
    this.storage.get('platform').then((val) => {
      this.checkBrowser=val;
      // alert(this.checkBrowser);
      })
  }


// BROWSER LOGIN
fblogin() {
  console.log("FB===");
  this.fb.login(['public_profile', 'email'])
    .then(res => {
      console.log("RESPONS === ",res);
      if(res.status === "connected") {
        this.isLoggedIn = true;
        this.getUserDetail(res.authResponse.userID);
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
}

getUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender,short_name,name_format",["public_profile"])
    .then(res => {
      this.users = res;
      console.log("REAL DATA == "+JSON.stringify(res));
      this.properStorage ={
        facebook_id:res.id,
        authToken:res.authToken,
        email:res.email,
        fbname:res.firstName,
        username:res.firstName,
        user_pic:res.photoUrl
      }
        // alert("FaceBook Data   = "+JSON.stringify(this.properStorage));
        this.error_message_r = "";
        let loading = this.loadingCtrl.create();
        loading.present();
        this.poviderForAllProvider.post('facebook_login',this.properStorage).subscribe(res => {
          // alert('Successssss === '+JSON.stringify(res));
          this.storage.set('user', res);
          if(res.token){
          this.navController.setRoot('page-home');
          }else{
          console.log("STORAGE EMPTY");
          }
          loading.dismiss();
          
          },err=>{
          console.log(err);
          loading.dismiss();
          // this.error_message_r = err.json().msg;
          })
    })
    .catch(e => {
      console.log(e);
    });
}


  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
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


  }

  // go to register page
  register() {
    this.error_message_r = "";
    console.log("ON REGISTER "+JSON.stringify(this.onRegisterForm.value));
    let loading = this.loadingCtrl.create();
    loading.present();
    this.poviderForAllProvider.post('register',this.onRegisterForm.value).subscribe(res => {
      this.onRegisterForm.reset();
      let toast = this.toastCtrl.create({
        message: res.msg,
        duration: 3000,
        position: 'bottom',
        cssClass: 'dark-trans',
        closeButtonText: 'OK',
        showCloseButton: true
      });
      toast.present();
      loading.dismiss();

    },err=>{
      console.log(err);
      loading.dismiss();
      this.error_message_r = err.json().msg;
    }),errs=>{
      loading.dismiss();
      this.error_message_r = "Somthing went wrong!";
    };
    loading.dismiss();
  }

  // login and go to home page
  login() {

   
    this.error_message = "";
    let loading = this.loadingCtrl.create();
     loading.present();
  
     this.authProvider.login(this.onLoginForm.value.email,this.onLoginForm.value.password).subscribe(res =>{
      console.log("AFTER LOGIN DATA NEW= "+JSON.stringify(res));
      // this.logger.logButton('homeButton',{ pram: "paramValue" })

      // this.firebaseAnalytics.logEvent('login', {page: "dashboard"})
      // .then((res: any) => console.log("Analytics Response === "+res))
      // .catch((error: any) => console.error("Error",error));

     this.storage.set('user', res);
     this.navController.setRoot('page-home');
      loading.dismiss();
    },err=>{
      loading.dismiss();
      this.error_message = "Invalid username or password.";
    }),errs=>{
      loading.dismiss();
      this.error_message = "Invalid username or password.";
    };    

  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
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
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {

            console.log('Send clicked');
            let toast = this.toastCtrl.create({
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
  }

  sendPropertyDetails(value){
   // this.rest.post('register',this.onRegisterForm.value)

    // this.http.post('url' ,value).subscribe(res => {
    //   console.log(res);

    // }),err=>{

    //  console.log(err);
    // }
  }



  signInWithFB(): void {
    console.log('Fb Signin');
    
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res=>{
    console.table(res);
    console.log("FACEBOOK RESPONSE ",res);

    this.properStorage ={
      facebook_id:res.id,
      authToken:res.authToken,
      email:res.email,
      fbname:res.firstName,
      username:res.firstName,
      user_pic:res.photoUrl
    }
    
    this.error_message_r = "";
    let loading = this.loadingCtrl.create();
    loading.present();
    this.poviderForAllProvider.post('facebook_login',this.properStorage).subscribe(res => {
    console.log('Successssss === ',res);
    
    this.storage.set('user', res);
    
    if(res.token){
    this.navController.setRoot('page-home');
    }else{
    console.log("STORAGE EMPTY");
    }
    loading.dismiss();
    
    },err=>{
    console.log(err);
    loading.dismiss();
    this.error_message_r = err.json().msg;
    })
    
    });
    
    }


  //LOGIN to FACE BOOK 
  faceBookLogin(){

    let loading = this.loadingCtrl.create();

    loading.present();
    this.fb.login(['public_profile', 'user_friends', 'email']).then(res => {
    console.log("RESPONSE  == "+JSON.stringify(res));
    this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large,short_name)', []).then(profile => {
      console.log("PROFILE == "+JSON.stringify(profile));
        console.log("GOOGLE LOGIN RESPONSE  ="+JSON.stringify(profile));
        this.poviderForAllProvider.googleLogin('facebook_login',profile).subscribe(res => {
         console.log("FACEBOOK LOGIN == "+JSON.stringify(res));
         this.storage.set('user', res);
         this.navController.setRoot('page-home');
         this.events.publish('user:created', res);
         loading.dismiss();
        })
    })
  })
  .catch(e => console.log('Error logging into Facebook', e));
  loading.dismiss();
}

  //Google Plus Login
  loginFrmGoogle(){
    let loading = this.loadingCtrl.create();
    loading.present();
    this.googlePlus.login({})
    .then(res => {
      // console.log("GOOGLE LOGIN RESPONSE  ="+JSON.stringify(res));
      this.poviderForAllProvider.googleLogin('registerlogin',res).subscribe(res => {
        console.log("GOOGLE PROVIDER RES"+JSON.stringify(res));
       this.storage.set('user', res);
       this.navController.setRoot('page-home');
       this.events.publish('user:created', res);
       loading.dismiss();
      })
    }).catch(err => console.error(err));
    loading.dismiss();
    }
    //GOOGLE END
  
}
