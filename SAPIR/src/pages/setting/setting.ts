import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { LanguageModel } from "../../models/language.model";
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-setting'
})
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  languageSelected : any;
  languages : Array<LanguageModel>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public languageService: LanguageServiceProvider,public translate: TranslateService,public storage:Storage,public poviderForAllProvider:PoviderForAllProvider
     ) {
    this.languages = this.languageService.getLanguages();
    this.setLanguage();
  }
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
        console.log("user details",details);
        this.storage.set('user',details);
      })

    }else{
      this.languageSelected = defaultLanguage;
      this.translate.use(defaultLanguage);

    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  

}
