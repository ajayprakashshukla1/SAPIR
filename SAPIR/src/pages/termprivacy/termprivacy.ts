import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import {PoviderForAllProvider } from '../../providers/povider-for-all/povider-for-all';
import { Events } from 'ionic-angular';

/**
 * Generated class for the TermprivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-termprivacy'
})
@Component({
  selector: 'page-termprivacy',
  templateUrl: 'termprivacy.html',
})
export class TermprivacyPage {
  token:any;
  languageSelected : any;
  languages : Array<LanguageModel>;
  lanCss:any;
  selectOptions:any;
  userdetails:any=[];
  hebrew:any;
  english:any;
  content:any;
  constructor(public events:Events,public translate: TranslateService,public languageService: LanguageServiceProvider,public poviderForAllProvider:PoviderForAllProvider,public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    // this.getUserDetails();
    this.storage.get('user').then((val) => {
      if(val!==null){
        this.token=val.token;
        this.userdetails=val;
        // this.getDetails();
      }else{  
        console.log("Token NOT PRESENT ============="); 
        this.navCtrl.push('page-auth');
      }
      
    });
    this.languages = this.languageService.getLanguages();
    this.setLanguage();
    
  }

  setLanguage(){
    
    let defaultLanguage = this.translate.getDefaultLang();
    if(this.languageSelected){
      this.translate.setDefaultLang(this.languageSelected);
      this.translate.use(this.languageSelected);
      
      this.storage.get('user').then(details =>{
        this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language',details.token,this.languageSelected).subscribe(val=>{
        console.log("Change Language === ",val);
         
        })
        details.selected_language=this.languageSelected;
        this.lanCss=this.languageSelected;
        this.storage.set('user',details);
        this.events.publish('lan:created', details.selected_language); 
        // this.getDetails();
        this.termsAndCon(this.lanCss);
      })

    }else{
      this.languageSelected = defaultLanguage;
      this.termsAndCon(this.languageSelected);
      this.translate.use(defaultLanguage);

    }
    this.selectOptions = {
      cssClass: this.lanCss,
    };
  }
  
  
  ionViewDidLoad() {
    this.checkLogin('===============DIdLOAD==========================');
   }
  ionViewDidEnter(){
    this.checkLogin('============DIDENTER=============');
  }
  ionViewDidLeave(){
  this.checkLogin('============didLeave================');
  }

//  user login or Not 
checkLogin(medium){
 this.storage.get('user').then((val) => {
   if(val !==null){
  
   }else{
     if(val==null || val==""){
      this.navCtrl.push('page-auth');
     }
   }
  }) 
}

goSocilaMedia(url){
  window.open(url,'_system', 'location=yes');

}

termsAndCon(language){
  console.log("Language  == "+language);
  let senddata ={
    'token':this.token,
     'language':'en'
  }
  this.poviderForAllProvider.post('getTermsCondition',senddata).subscribe(data=>{
    this.hebrew = data.hebrew;
    this.english =data.english;
    if(language =='ar'){
      console.log("ar "+language);
      this.content = this.hebrew;
     }else if(language =='en'){
      console.log("en "+language);
       this.content = this.english;
     }
  });
}


}
