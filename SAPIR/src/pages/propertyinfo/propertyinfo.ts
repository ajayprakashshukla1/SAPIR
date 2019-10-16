import { Component, ViewChild,QueryList,ViewChildren, } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,Slides,Content,LoadingController} from 'ionic-angular';
import{Storage} from '@ionic/storage';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { ImageViewerController } from 'ionic-img-viewer';
declare var google;
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';
 import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the PropertyinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-propertyinfo'
})
@Component({
  selector: 'page-propertyinfo',
  templateUrl: 'propertyinfo.html',
})
export class PropertyinfoPage {
  @ViewChildren(Slides) slides1: QueryList<Slides>;
@ViewChild(Slides) slides: Slides;
@ViewChild(Content) content: Content;
languageSelected : any;
languages : Array<LanguageModel>;

  _imageViewerCtrl: ImageViewerController;
  propertyInfo:any=[];
    fullText:boolean;
    halftext:boolean;
    readMoreBtn:boolean;
    readLessBtn:boolean;
    checkBrowser:any;
    // for map 
    map2:any;
    directionsDisplay = new google.maps.DirectionsRenderer;
    lanCss:any;
    phoneNum:any;
    selectOptions:any;

  constructor( public languageService: LanguageServiceProvider,public translate:TranslateService,public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public iab:InAppBrowser,
    public storage:Storage,public poviderForAllProvider:PoviderForAllProvider,imageViewerCtrl: ImageViewerController,private callNumber: CallNumber,public pt:Platform,
    public events:Events, public loadingCtrl: LoadingController,
   public socialSharing:SocialSharing) {
      this.languages = this.languageService.getLanguages();  

      console.log('Platform === ',this.pt.platforms());
    this.propertyInfo=this.navParams.get('propertyDetails');
    this.getUserDetails();
    this._imageViewerCtrl = imageViewerCtrl;
    this.storage.get('platform').then((val) => {
      this.checkBrowser=val;
      })
      
    let desLen =this.propertyInfo.description.length;
        if(desLen<=33){
           console.log("Description Length == "+desLen);
           this.halftext=true;
           this.fullText=false;
          }else{
            this.halftext=true;
            this.readMoreBtn=true;
            console.log("Description Length == "+desLen);
          } 
  }

  // Languages
setLanguage(){

  let defaultLanguage = this.translate.getDefaultLang();
  console.log("LANGUAGE === "+defaultLanguage);
  if(this.languageSelected){
    this.translate.setDefaultLang(this.languageSelected);
    this.translate.use(this.languageSelected);
    this.lanCss=this.languageSelected;
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
  console.log("LAN CSSS === "+this.lanCss);
  this.selectOptions = {
    cssClass: this.lanCss
};

}

  share(propertyInfo){

    let loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loader.present();
    console.log("Property info",propertyInfo);
    let title= propertyInfo.titlel;
    let price =' Price: '+propertyInfo.price;
    let con=' Contact Num: '+propertyInfo.property_phone; 
    let msg =title+' '+price+' '+con
    this.socialSharing.share('Click here for details: '+propertyInfo.property_url, 'subject', propertyInfo.picture).then(res=>{
     
      loader.dismiss();
    },err =>{
      loader.dismiss();
      console.log("Error == ",err);
    })

  }

  mapInt(){

    console.log("MAP INT");
     if(this.propertyInfo.lat && this.propertyInfo.long ){
      console.log("MAP1 ===== lat"+this.propertyInfo.lat+"..lng"+this.propertyInfo.long);
    this.map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 12,
      center: {
        lat: this.propertyInfo.lat ,
        lng: this.propertyInfo.long
      }
    }); 
    var marker = new google.maps.Marker({
      position:  {
        lat: this.propertyInfo.lat,
        lng: this.propertyInfo.long
      },
      map: this.map2,
      title: 'Hello World!'
    });
    this.directionsDisplay.setMap(this.map2);
  }

  }

// READ MORE OR READ LESS
readMore(){
  this.halftext=false;
  this.fullText=true;
  this.readMoreBtn=false;
}
readless(){
  this.halftext=true;
  this.fullText=false;
  this.readMoreBtn=true;
  this.readLessBtn=false;
 }

slidePrev() {
  this.slides.slidePrev();
  this.slides1.toArray()[1].slidePrev(500);
}
slideNext() {
  this.slides.slideNext();
  this.slides1.toArray()[1].slideNext(500);
}

//END 
  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyinfoPage');
    // this.mapInt();
    setTimeout(
      (z)=> {
        this.mapInt();
      }, 1000);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter PropertyinfoPage');
    setTimeout(
      (z)=> {
        this.mapInt();
      }, 1000);  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter PropertyinfoPage');
    setTimeout(
      (z)=> {
        this.mapInt();
      }, 1000);  }

  // Set fvrt
  favorite(property,status){
   console.log("prop  == "+JSON.stringify(property)+"STATUS == "+status);
    this.storage.get('user').then((val) => {
      console.log("USER INFO === "+val.token);
      if(val.token){
        this.poviderForAllProvider.favorite(property,val,status).then(changeProperty => {
          let resssp = changeProperty.json();
          console.log("Only REsponse ="+JSON.stringify(resssp));
          
          //FOR LIKE
          if(resssp.status == 1){
              console.log("get Status 1111== "+resssp.status);
              this.propertyInfo.status=1;
            //  console.log("Change Property  "+JSON.stringify(property));
            
          }
          //FOR UNLIKE 
          else if(resssp.status== 0){
             console.log("get Status "+resssp.status);

           //  console.log("Change Property 00000= "+JSON.stringify(property));

           this.propertyInfo.status=0;
          }

        // property.status =changeProperty.status;
       //  console.log("YOUR PROPERTY = "+JSON.stringify(resssp.response));

         let toast = this.toastCtrl.create({
             message: resssp.response,
             cssClass: 'mytoast',
             duration: 2000
         });
         toast.present(toast);
     });
      }
    })
   

  }
//  end favrt

stillLooking(){
  this.navCtrl.push('page-stilllooking');
}
  //Code For alert
   showToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      cssClass: 'mytoast',
      duration: 2000
  });
  toast.present(toast);
   }

  //END ALERT

  // WIEW IMAGE
  viewImage(ImgUrl){
    console.log("IMG URL == "+ImgUrl);
    this.poviderForAllProvider.viewPhoto(ImgUrl);
  }

  presentImage(myImage,events) {
    console.log("MY IMG"+myImage);
    console.log("EVENTS == ",events);
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }

    
  getUserDetails(){
    this.storage.get('user').then(details =>{
      console.table(details);
      this.translate.use(details.selected_language);
      console.log("user language ======= ",details.selected_language);
      this.lanCss = details.selected_language;
    })
    this.selectOptions = {
      cssClass: this.lanCss,
    };
  }

scrollToBottom(){
console.log("Scroll Bottom");
this.content.scrollToBottom();
}

whatsAppChat(num){

  let url = 'https://wa.me/'+num+'/?text=HELLO%22';
//  let url='https://api.whatsapp.com/send?phone=+972523655051';
 console.log(" URL ==="+url+"Browser"+this.checkBrowser);
//  window.open(url, '_system');
// const browser = this.iab.create(url,'_blank', 'location=yes');
//  window.open('http://www.twitter.com/nraboy', '_system', 'location=yes');

if(this.pt.is('ios')){
  const browser = this.iab.create(url,'_blank', 'location=yes');
}else{
  window.open(url, '_system');
}


}

calling(){
  this.callNumber.callNumber(this.propertyInfo.property_phone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
}

}
