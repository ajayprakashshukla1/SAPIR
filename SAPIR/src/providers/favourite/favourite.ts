import { Http,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import{SERVER_URL}from'../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Storage } from '@ionic/storage';
let favoritesURL = SERVER_URL + 'wp-json/mobileapi/getFavoritesProperties';
let markfavoritesURL = SERVER_URL + 'wp-json/mobileapi/setLikeValue';

/*
  Generated class for the FavouriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavouriteProvider {

  constructor(public http: Http) {
    console.log('Hello FavouriteProvider Provider');
  }
  getFavorites(pageNum,token) {
        
    console.log("GET FAVORIYES TOKEN  ++=="+token+"PageNum =="+pageNum);
    return this.http.get(favoritesURL+"?token="+token+"&paged="+pageNum)
        .map(res => res.json()
        )
        .toPromise();
}
favorite(property,val,status) {
  //    console.log("PROVIDER FAVRITE VALUES = "+JSON.stringify(val)+"STATUS = = "+status+"PROPERTY = ="+property);

      let body = {property:property.id,token:val.token,step:status}
          // headers = new Headers({'Content-Type': 'application/json'}),
          // options = new RequestOptions({headers: headers});
      return this.http.post(markfavoritesURL, body).toPromise();
  }
  

}
