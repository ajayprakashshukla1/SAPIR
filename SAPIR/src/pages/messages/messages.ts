import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-messages'
})
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  contentData:any;
  showStatus:any;
  pet:any;
  user:any;
  token:any;
  loading:any;
  lanCss:any;
  messages: Array<any> = [];
  messages2: Array<any> = [];
  languageSelected : any;
  languages : Array<LanguageModel>;
  selectOptions:any;
  constructor(public languageService: LanguageServiceProvider,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public events: Events,
    public loadingCtrl:LoadingController,public poviderForAllProvider:PoviderForAllProvider,public alertCtrl:AlertController,public translate: TranslateService,) {
    this.languages = this.languageService.getLanguages();  
    this.getUserDetails();  
    this.getMessages();
    this.pet='featured';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }
  getToken(){
    console.log("GET TOKEN");
      this.storage.get('user').then((val) => {
        this.user = val.token;
        console.log("User TOKEN == "+this.user);
      });
    
    }


    getMessages() {
      // this.showLoader();
          console.log("GET MESSAGE");
          this.storage.get('user').then((val) => {
            console.log("USER == "+JSON.stringify(val));
              if (val) {
                  this.token = val.token;
                  this.poviderForAllProvider.getMessages('https://sapir.app/wp-json/mobileapi/get_notification_data', this.token).subscribe(data => {
                    console.log("MESSAGE RESPONSE == "+JSON.stringify(data));
                  if(data.msg_data=="No Notification"){
                      // this.loading.dismiss();
                      console.log("NO NOTIFICATION ====== "+data.msg_data);
                  }else{
                      let count = data.msg_data.length;
                      console.log("MESSAGE ==========" + count);
                      if(count>0){
                          // this.loading.dismiss();
                      for (let i = 0; i < count; i++) {
                          console.log(" i = " + i + " data.msg_data " + data.msg_data[i]);
                          this.messages.push(data.msg_data[i]);
                      }
                     }else{
                      // this.loading.dismiss();
                      }

                      }
                      console.log("DATTA == " + JSON.stringify(data));
                  });
              }
          });
      // this.messages = this.service.getMessages();
    }

  // read msg
  readMsg(msg){

   let id = msg.id;
   let match = this.messages.find(x => x.id === id)
   console.log("MATCH === ",match);
   let messageIndex = this.messages.indexOf(match);

   let status = this.messages[messageIndex].read_status; 
   console.log("STATUS == "+status);
   if(status ==1){
    this.messages[messageIndex].read_status =0;
   }else{
    this.messages[messageIndex].read_status =1;
   }
   
  console.log("MEssage ==============================="+JSON.stringify(msg)+" INDEX ++++===== "+messageIndex);
  this.poviderForAllProvider.readMessage('https://sapir.app/wp-json/mobileapi/get_notification_data', this.token,msg.id).subscribe(res=>{
  
  // this.showAlert(msg.msg_title); 
  // this.navCtrl.setRoot('page-messages');

  })
 
  }

  showAlert(msg) {
    const prompt = this.alertCtrl.create({
      title: 'MESSAGE!',
      message: msg,
      
      buttons: [ 
        {
          text: 'Close',
          handler: data => {
            // this.navCtrl.setRoot('page-messages');
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }


// accordian //

addContent(showStatus){
  this.contentData='All the thing about Technology! Informatic technology especially.All the thing about Technology! Informatic technology especially.';
  this.showStatus=!showStatus;
  console.log(showStatus);
}
toggleGroup(events) {
  console.log("EVENTS === ",events);
  console.log(this.showStatus);
  if (this.showStatus) {
    this.showStatus = false;
  } else {
    this.showStatus = true;
  }
};
isGroupShown = function() {
  return  this.showStatus;
};

//end
getUserDetails(){
  this.storage.get('user').then(details =>{
    console.table(details);
    this.translate.use(details.selected_language);
    console.log("user language ======= ",details.selected_language);
    this.selectOptions = {
      cssClass: this.lanCss,
    };
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
      this.events.publish('lan:created', details.selected_language); 

    })
  }else{
    this.languageSelected = defaultLanguage;
    this.translate.use(defaultLanguage);

  }
  this.selectOptions = {
    cssClass: this.lanCss,
  };
}



}
