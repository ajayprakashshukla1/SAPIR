import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import{Storage} from '@ionic/storage';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { Events } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:'page-about'
  }
)
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  languageSelected : any;
  lanCss:any;
  languages : Array<LanguageModel>;
  constructor(public events: Events, public languageService: LanguageServiceProvider,public poviderForAllProvider:PoviderForAllProvider,public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService,public storage:Storage) {
    this.languages = this.languageService.getLanguages();  
    this.getUserDetails();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  getUserDetails(){
    this.storage.get('user').then(details =>{
      console.table(details);
      this.translate.use(details.selected_language);
      console.log("user language ======= ",details.selected_language);
    })
    let defaultLanguage = this.translate.getDefaultLang();
    this.languageSelected = defaultLanguage;
    this.lanCss= defaultLanguage;
  }

   // Languages
setLanguage(){
    
  let defaultLanguage = this.translate.getDefaultLang();
  console.log("LANGUAGE === "+defaultLanguage);
  if(this.languageSelected){
    this.translate.setDefaultLang(this.languageSelected);
    this.translate.use(this.languageSelected);
    this.storage.get('user').then(details =>{
      this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language',details.token,this.languageSelected).subscribe(val=>{
      console.log("Change Language === ",val);   
      })
      console.table(details);
      details.selected_language=this.languageSelected;
      this.lanCss=this.languageSelected;
      console.log("user details",details);
      this.storage.set('user',details);
      this.events.publish('lan:created', details.selected_language); 

    })
  }else{
    this.languageSelected = defaultLanguage;
    this.translate.use(defaultLanguage);

  }
}

  

}
