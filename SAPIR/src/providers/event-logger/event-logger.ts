import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
// import { Firebase } from '@ionic-native/firebase';

/*
  Generated class for the EventLoggerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventLoggerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventLoggerProvider Provider');
  }

  logButton(name:string,value:any){
    console.log("name === ",name," Value == "+value);
    // this.firebaseAnalytics.logEvent('Login', { pram:value })
    // .then((res: any) => {console.log(res);})
    // .catch((error: any) => console.error(error));
  }

}
