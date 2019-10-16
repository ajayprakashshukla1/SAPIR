import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
// import { ForsalePage } from '../pages/forsale/forsale';
import { StatusBar } from '@ionic-native/status-bar';         
import { SplashScreen } from '@ionic-native/splash-screen';
// import { InitialPage } from '../pages/initial/initial';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule ,Http} from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { PoviderForAllProvider } from '../providers/povider-for-all/povider-for-all';
import { AdvanceSearchProvider } from '../providers/advance-search/advance-search';
import { FavouriteProvider } from '../providers/favourite/favourite';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguageServiceProvider } from '../providers/language-service/language-service';
import{ListPage} from '../pages/list/list';
import { IonicImageViewerModule } from 'ionic-img-viewer';
// import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { CallNumber } from '@ionic-native/call-number';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
 
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EventLoggerProvider } from '../providers/event-logger/event-logger';
// import { Firebase } from '@ionic-native/firebase';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { SocialSharing } from '@ionic-native/social-sharing';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("976595820206-i90kgc499pfgu6euo3pu0trhr3krccsi.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("925766981119337")
    }
  ]);
  
  export function provideConfig() {
    return config;
  }

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicImageViewerModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    SocialLoginModule.initialize(config),
    SocialLoginModule,
  TranslateModule.forRoot({
	loader: {
			 provide: TranslateLoader,
			 useFactory: (createTranslateLoader),
			 deps: [HttpClient]
		 }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
   
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    FileTransfer,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PoviderForAllProvider,
    AdvanceSearchProvider,
    FavouriteProvider,
    ImagePicker,
    Facebook,
    GooglePlus,
    LanguageServiceProvider,
    IonicImageViewerModule,
    CallNumber,
    InAppBrowser,
    EventLoggerProvider,
    SocialSharing,
    // FirebaseAnalytics
    // AuthServiceConfig,
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: provideConfig
    // }
    
  ]
})
export class AppModule {}
