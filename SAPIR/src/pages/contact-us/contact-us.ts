import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import{Storage} from '@ionic/storage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-contact-us'
})
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  languageSelected : any;
  lanCss:any;
  languages : Array<LanguageModel>;
  userdetails:any=[];
  contactDetails:any=[];
  constructor(public translate: TranslateService,public storage:Storage,public languageService: LanguageServiceProvider,public poviderForAllProvider:PoviderForAllProvider,
    public navCtrl: NavController, public navParams: NavParams,public events: Events,private callNumber: CallNumber) {
    this.languages = this.languageService.getLanguages();  
    this.getUserDetails();
  }

  getUserDetails(){
    this.storage.get('user').then(details =>{
      this.userdetails=details;
      this.getDetails();

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
      console.log("user details",details);
      this.storage.set('user',details);
      this.lanCss =  this.languageSelected;
      this.events.publish('lan:created', details.selected_language); 
      this.getDetails();

    })
  }else{
    this.languageSelected = defaultLanguage;
    this.translate.use(defaultLanguage);

  }
}


goSocilaMedia(url){
  console.log(url);
  window.open(url, 'location=yes')
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  calling(num){
    this.callNumber.callNumber(num, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  getDetails(){
    console.log("USER DETAILS  === ",this.userdetails);
    console.log('LANGUAGE ===== ',this.lanCss);
    var url = "get_contact_us_info";
    let data:any;
    data={
      token:this.userdetails.token,
      language:this.lanCss
    }
    this.poviderForAllProvider.post(url, data).subscribe(res => {
      this.contactDetails=res;
     
      console.log("CONTACT DETAILS === ",this.contactDetails);
    }), err => {
      console.log(err);
      // loader.dismiss();
    }    
  }


}
