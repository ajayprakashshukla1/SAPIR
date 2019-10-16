import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../config';

let wordpressAUTH_URL = SERVER_URL + 'wp-json/jwt-auth/v1/token';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }
  login(username, password){
    console.log("USER NAME == "+username+" PASSWORD == "+password);
    return this.http.post(wordpressAUTH_URL,{
      username: username,
      password: password
    });
}
}
