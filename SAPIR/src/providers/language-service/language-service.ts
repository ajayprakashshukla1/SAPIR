import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageModel } from "../../models/language.model";

/*
  Generated class for the LanguageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LanguageServiceProvider {

  languages : Array<LanguageModel> = new Array<LanguageModel>();

  constructor() {
    this.languages.push(
      {name: "English", code: "en"},
      // {name: "Spanish", code: "es"},
      {name: "Hebrew", code: "ar"},
      // {name: "Hindi", code:"hn"},
    );
  }

  getLanguages(){
    return this.languages;
  }
 

}
