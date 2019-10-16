import { Component ,ViewChild} from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
// import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core'
import { Facebook } from '@ionic-native/facebook';

@Injectable()
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  textDir: string = "ltr";
  rootPage: any = 'page-auth';
  checkPlatform:any;
  msg:any;
  yes:any;
  no:any;
  pages: Array<{title: string, component: any}>;
  yourProperty:Array<{title: string, component: any}>;
  help:Array<{title: string, component: any}>;
  lan:any;
  admin:any={title: 'Post Ad', component: 'page-form'};
  userDetails:any=[];
  role:any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public alertController:AlertController,public storage:Storage,public googlePlus:GooglePlus,
    public translate: TranslateService,public events: Events, public fb:Facebook) {

      this.storage.get('user').then(details =>{
        if(details){
          this.userDetails=details;
          console.log('My DETAILS',this.userDetails);        
        console.table(details);
        this.translate.use(details.selected_language);
        this.lan =details.selected_language;
        this.events.publish('lan:created', details.selected_language); 

         this.events.subscribe('lan:created', (lan) => {
          this.lan = lan;
          console.log('Welcome', lan, 'at', lan);
      });

      }else{
          console.log("Blank Storage");
        }
      });

        console.log(this.platform.platforms());
        // alert("1"+this.platform.platforms());
        this.checkPlatform=this.platform.platforms();
        if(this.checkPlatform=='core' || this.checkPlatform=='mobileweb'){
          // alert("2"+this.checkPlatform);
          let itsBroser =1;
          this.storage.set('platform', itsBroser);

        }else{
          let itsdevice =2;
          this.storage.set('platform', itsdevice);
        }
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: 'page-home' },
      { title: 'Personal Information', component: 'page-ownername' },
      {title:'FAVORITES',component: 'page-favorite-list'},
    ];

    this.yourProperty =[
      { title: 'PROPERTIES FOR SELL', component: 'page-properties-for-sell' },
      { title: 'PROPERTIES FOR RENT', component: 'page-properties-for-rent' },
      // {title:'Post Ad',component: 'page-form'},
    ];

this.help=[
      { title: 'ABOUT', component: 'page-about' },
      // { title: 'SUPPORT', component: 'page-support' },
      { title: 'CONTACT US', component: 'page-contact-us' },
      { title: 'TERMS AND PRIVACY', component: 'page-termprivacy' },
      // { title:'Setting',component:'page-setting'}
      ]

      this.events.subscribe('role:created', (role) => {
        this.role = role;
        console.log('USER ROLE ======= '+this.role);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {

      console.log("App INITIALIZE ");
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        console.log("APP COMPONENT.ts  ==============="+event.lang);
        this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
        this.lan =event.lang;
      });

      this.storage.get('user').then((val) => {
     console.log("LOCAL STORAGE ================================= ",val);
				if (val) {
          // alert("I M WORK");
          this.rootPage='page-home';       
				}else{
          console.log("ELSE CONDITIONS");
          this.rootPage='page-auth';
				}
		        
			  });   
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  logout(){
    this.storage.get('user').then(details =>{
      console.table(details);
      
      this.translate.use(details.selected_language);
      this.lan =details.selected_language;
      console.log("user language ======= ",details.selected_language);
      if(details.selected_language=='en'){
         this.msg ="Sapir App";
         this.yes="Yes";
         this.no="No";
      }else{
        this.msg= this.translate.instant('Sapir App');
        this.yes= this.translate.instant('Yes');
        this.no= this.translate.instant('No');
      }
 
      let sapir = this.translate.instant('Logout');
      let alert = this.alertController.create({
        title: sapir,
        // message: this.msg,
        buttons: [
          {
          text: this.yes,
          handler: () => {
            
            this.storage.remove('user');
            this.fb.logout();
            
             this.nav.setRoot('page-auth');
            //this.rootPage='page-auth';      
          }
          },
          {
          text: this.no,
          role: 'cancel',
          handler: () => {
      
          }
          }
        ],
        cssClass: this.lan
        });
        alert.present();
    })

  }

  // signOut(): void {
  //   this.authService.signOut();
  // }

}
