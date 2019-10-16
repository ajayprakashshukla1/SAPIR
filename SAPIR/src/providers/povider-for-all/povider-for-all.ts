import { Http,RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';
import{SERVER_URL}from'../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Storage } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Events } from 'ionic-angular';


let wordpressAUTH_URL = SERVER_URL + 'wp-json/jwt-auth/v1/token';
let myListingURL = SERVER_URL + 'wp-json/mobileapi/myListingProperty';
let citiesUrl = SERVER_URL +'wp-json/mobileapi/getcities';
let mainURL = SERVER_URL + 'wp-json/mobileapi/';
let markfavoritesURL = SERVER_URL + 'wp-json/mobileapi/setLikeValue';
let wordpressMOB_URL = SERVER_URL + 'wp-json/mobileapi/';

let propertiesURL = SERVER_URL + 'wp-json/mobileapi/getProperties';

/*
  Generated class for the PoviderForAllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoviderForAllProvider {
user:any;
token:any;

  constructor(public http: Http,public storage:Storage,public photoViewer:PhotoViewer,public events: Events) {
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

 newgetCity(getToken){
   return this.http.get(citiesUrl+"?token="+getToken)
   .map(res => res.json())  
   .toPromise();
 
  }
//END

// HOME RESULT
post(serviceUrl,formData){
let url = mainURL + serviceUrl;
console.log("URL =="+url);
return this.http.post(url, formData).map(res => res.json()
  
 
  );
}
// PROPERTY FAVOURITE 

favorite(property,val,status) {
     console.log("PROVIDER FAVRITE VALUES = "+JSON.stringify(val)+"STATUS = = "+status+"PROPERTY = ="+property);

      let body = {property:property.id,token:val.token,step:status}
          // headers = new Headers({'Content-Type': 'application/json'}),
          // options = new RequestOptions({headers: headers});
      return this.http.post(markfavoritesURL, body).toPromise();
  }
// GET MY LISTING
getMyListing(token,pageNum =null){
      console.log("Tokens ===================="+token);
      return this.http.get(myListingURL+"?token="+token+"&paged="+pageNum)
      .map(res => res.json())  
      .toPromise();
}

// GET MESSAGE
getMessages(URL,token) {
  console.log("URL === "+URL+" TOKEN === "+token );
  let   data={token:token}
  console.log("provider URL =="+URL+" data ="+data+" provide TOKEN "+token);
  return this.http.post(URL,data).map(res => res.json());
}

// Property FOR RENT

getRentProperty(token,page){
  let url = mainURL+'getRentProperties?token='+token+'&paged='+page;
  console.log("URL  === "+url);
  return this.http.get(url).map(res=>res.json());
}

// Property FOR Sell

getSellProperty(token,page){
  let url = mainURL+'getSellProperties?token='+token+'&paged='+page;
  console.log("URL  === "+url);
  return this.http.get(url).map(res=>res.json());
}


googleLogin(googleUrl,res){
  let gurl = wordpressMOB_URL+googleUrl;
  return this.http.post(gurl,res).map(res =>res.json());
}

readMessage(url,token,id){
  console.log("URL == "+url+"=== TOKEN "+token+" ===ID === "+id);
  let   data={'token':token,'read_status':0,'id':id}
  return this.http.post(url,data).map(res => res.json());
}
stillProperty(endPoind,value){
  let url=wordpressMOB_URL+endPoind;
  return this.http.post(url,value).map(res=>res.json());
}

// PHOTO VIEWER

viewPhoto(imgUrl){
  this.photoViewer.show(imgUrl);
}



findAll(paged =null,uToken) {


  let newPageNum='1';
  if(paged){
      newPageNum=paged
  }
  
  
      return this.http.get(propertiesURL+"?token="+uToken+"&paged="+newPageNum)
      .map(res => res.json())
      .toPromise();
}



// USER UPDATE 
updateUser(_update){

  console.log("User Update =="+_update);
  this.storage.get('user').then((val) => {
    if(val){
      let _user = val;
      for (const key in _update) {
        if (_update.hasOwnProperty(key)) {
          const element = _update[key];
          _user[key] = element;
        }
      }
      this.events.publish('user:created', _user);
      return this.storage.set( 'user', _user );

    }else{
      return true;
    }
  });
  
}

UpdateLanguage(url,token,lan){
  let   data={token:token,selected_language:lan}
  
  console.log("provider URL =="+URL+" data ="+data+" provide TOKEN "+token);
  return this.http.post(url,data).map(res => res.json());
}




}
