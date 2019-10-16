import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { Storage } from '@ionic/storage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import {Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Platform , Nav} from 'ionic-angular';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
/**
 * Generated class for the MylistingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-mylisting'
})
@Component({
  selector: 'page-mylisting',
  templateUrl: 'mylisting.html',
})
export class MylistingPage {
  properties:any =[];
  loading:any;
  maxPages:any;
  currentPage:any;
  newPageNum:any;
  user:any=[];
  myProfileform: FormGroup;
  userDetails=[];
  userInfo=[];
  languageSelected : any;
  languages : Array<LanguageModel>;
  lanCss:any;
  selectOptions:any;
  constructor(public languageService: LanguageServiceProvider,public navCtrl: NavController, public navParams: NavParams ,public poviderForAllProvider:PoviderForAllProvider,public translate: TranslateService,
    public loadingCtrl:LoadingController,public storage:Storage,public alertCtrl:AlertController) {
      this.languages = this.languageService.getLanguages();
      this.getUserDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MylistingPage');
    this.getToken();
  }
  // SHOW LISTING

myListing(){
console.log("My LISTING"+" TOKEN === "+this.user);

if(this.user){
  this.showLoader();
  this.poviderForAllProvider.getMyListing(this.user).then(data => { 
    console.log(" response"+JSON.stringify(data));

    if(data.property){
    this.properties=[];
    this.properties.push(data.property);
    console.log("NUll PROPERTIES  == "+JSON.stringify(this.properties));
    this.loading.dismiss();
    this.maxPages=data.max_num_pages;
    this.currentPage=data.paged;
    }else{
      this.loading.dismiss();
      this.properties=[];
      this.properties.push(data.max_num_pages);
    }


  });
}else
{
  console.log("TOKEN NOT FOUND");
}
 }

 showLoader(){
  this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  this.loading.present();
}

getToken(){
console.log("GET TOKEN");
  this.storage.get('user').then((val) => {
    this.user = val.token;
    this.userInfo= val;
    this.myListing();

    console.log("USER INFO == ",this.userInfo);
    console.log("User TOKEN == "+this.user);
  });

}

// PAGE Info

openPropertyDetail(propertyDetails:any){
  console.log('send Details'+JSON.stringify(propertyDetails));    
  this.navCtrl.push('page-propertyinfo',
  {
  'propertyDetails':propertyDetails
  });
}

//INFINITY SCROllER

doInfinite(infiniteScroll,getPageNum) {

  this.newPageNum = parseInt(getPageNum)+parseInt('1');
  if(this.newPageNum<=this.maxPages){
    // console.log("NEW PAGE  == "+this.newPageNum+ " MAX PAGES    = "+this.maxPages);
      this.currentPage = this.newPageNum;
  this.poviderForAllProvider.getMyListing(this.user,this.newPageNum)
  .then(data => {
    this.currentPage=data.paged;
    for(let i=0;i<data.property.length;i++){
              this.properties[0].push(data.property[i]);
          }
      infiniteScroll.complete();
  })
  .catch(error => alert(error));
  console.log('Begin async operation');
  // infiniteScroll.complete();

 }else{          
     console.log("YOUR LIMIT IS DONE");
     infiniteScroll.complete();
 }

}


deleteProperty(property){
  console.log(property);
 this.showLoader();
let data ={"post_id":property.id, "update_type":"delete","token":this.user};
this.poviderForAllProvider.post('update_property_data',data).subscribe(data=>{
  console.log("DELETE DATA === ",data.msg);
  // this.myListing();
  if(data.msg){
let myList = this.properties[0].length;
console.log("LENGTH === "+myList+" property Delete ");

    this.storage.get('user').then((val) => {
      console.log("LOCAL STORAGE === ",JSON.stringify(val));
      val.no_of_properties =parseInt(val.no_of_properties)-1;
      this.storage.set('user', val);
      for(let i=0;i<myList;i++){
        console.log("LOOP PROPERTIES "+JSON.stringify(this.properties[0][i].id)+" PROPERTY ID === "+property.id);
        if(this.properties[0][i].id==property.id){
          // console.log("DEL prop"+JSON.stringify(this.properties[0][i].id)+" match property "+property.id);
            this.properties[0].splice(i, 1);
            break;
            // console.log(" DELETE MY LIST PROPERT MATCHED == "+this.properties[0][i].id);
        }
      }
    })
  }
  this.showAlert(data.msg);
  this.loading.dismiss();

},err=>{
  console.log(err);
  this.loading.dismiss();
})

}

editProperty(property){
  this.navCtrl.push('page-edit-property',{
   'editProperty':property
  });
}


showAlert(msg) {
  const prompt = this.alertCtrl.create({
    title: 'MESSAGE!',
    message: msg,
    buttons: [
      {
        text: 'Close',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();

}

getUserDetails(){
  this.storage.get('user').then(details =>{
    // console.table(details);
    this.translate.use(details.selected_language);
    this.lanCss = details.selected_language;
    
  })
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
       
      })

      details.selected_language=this.languageSelected;
      this.storage.set('user',details);
      this.lanCss =  this.languageSelected;

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
