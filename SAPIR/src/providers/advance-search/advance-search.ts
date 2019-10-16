import { HttpClient } from '@angular/common/http';
import { Http,RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';
import{SERVER_URL}from'../config';
let wordpressMOB_URL = SERVER_URL + 'wp-json/mobileapi/';

/*
  Generated class for the AdvanceSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvanceSearchProvider {

  constructor(public http: Http) {
    console.log('Hello AdvanceSearchProvider Provider');
  }
  post(serviceUrl,formData){
    let url = wordpressMOB_URL + serviceUrl;
    console.log("URL =="+url);
    return this.http.post(url, formData).map(res => res.json()
      
      // console.log("SERVER RES"+res)
      
      // res.json()
      );
 }

}
