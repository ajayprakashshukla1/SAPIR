import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController,LoadingController,ActionSheetController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import {Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Platform , Nav} from 'ionic-angular';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

/**
/**
 * Generated class for the OwnernamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-ownername'
})
@Component({
  selector: 'page-ownername',
  templateUrl: 'ownername.html',
})
export class OwnernamePage {
  userDetails=[];
  myProfileform: FormGroup;
  token=[];
  languageSelected : any;
  languages : Array<LanguageModel>;
  lanCss:any;
  profilePic:any;
  imageURI:any;
  selectOptions:any;
  constructor(private camera: Camera,private transfer: FileTransfer,public languageService: LanguageServiceProvider,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public translate: TranslateService,
    public poviderForAllProvider:PoviderForAllProvider,public formBuilder: FormBuilder,public toastCtrl: ToastController,public events: Events,public actionSheetCtrl: ActionSheetController,
    public loadingCtrl:LoadingController) {
    this.languages = this.languageService.getLanguages();  
    this.getUserDetails();
    this.myProfileform = this.formBuilder.group({
      token: new FormControl('', Validators.required),
      displayname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnernamePage');
    this.storage.get('user').then((val) => {
      console.log("USER VALUE "+JSON.stringify(val));
      this.userDetails=val;
      this.token=val.token;
      this.profilePic=val.user_pic;    
      });
  }

  goProperty(){
    console.log("GO PROPERTIES");
    this.navCtrl.setRoot('page-mylisting');
  }
 // WIEW IMAGE
 viewImage(ImgUrl){
  console.log("IMG URL == "+ImgUrl);
  this.poviderForAllProvider.viewPhoto(ImgUrl);
}




_tostMsg(msg) {
  let toast = this.toastCtrl.create({
    showCloseButton: true,
    message: msg,
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
}

 // process send button
 myProfileformGo() {

  let loader = this.loadingCtrl.create({
    content: "Please wait..."
  });
  loader.present();
console.log("==========================");
  this.poviderForAllProvider.post("UpdateProfile", this.myProfileform.value)
    .subscribe(res => {

      console.log("RESPONSE ===== "+JSON.stringify(res));

        if (res.status == true) {
          let _update = [];
          _update['user_display_name'] = this.myProfileform.value.displayname;
          _update['user_email'] = this.myProfileform.value.email;
          _update['user_address'] = this.myProfileform.value.address;
          _update['user_city'] = this.myProfileform.value.city;
          _update['user_state'] = this.myProfileform.value.state;
          _update['user_phone_no'] = this.myProfileform.value.phoneNumber;

          console.log("UPDATE VALUE === "+_update);
          this.poviderForAllProvider.updateUser(_update);
          loader.dismiss();
          this._tostMsg(res.msg);
        } else {
          this._tostMsg(res.msg);
          loader.dismiss();
        }

      },
      err => {
        this._tostMsg('Somthing Went Wrong!');
        console.log(JSON.stringify(err));
        loader.dismiss();
      });
}

getUserDetails(){
  this.storage.get('user').then(details =>{
    console.table(details);
    this.translate.use(details.selected_language);
    this.lanCss = details.selected_language;
    console.log(" LANGUAGE CSS "+this.lanCss);
    console.log("user language ======= ",details.selected_language);

  })
  this.selectOptions = {
    cssClass: this.lanCss,
  };
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

    })
  }else{
    this.languageSelected = defaultLanguage;
    this.translate.use(defaultLanguage);

  }
  this.selectOptions = {
    cssClass: this.lanCss,
  };
}




myProfilePic(){

  var toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  }); 
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });



  const actionSheet = this.actionSheetCtrl.create({
    title: this.translate.instant('Change Your Profile Pic'),
    buttons: [
      {
        text: this.translate.instant('Camera'),
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.FILE_URI,
              sourceType: this.camera.PictureSourceType.CAMERA, 
            }
            console.log("OPTION == "+JSON.stringify(options));
            this.camera.getPicture(options).then((imageData) => {

              this.imageURI = imageData;
              console.log("IMAGE DATA"+this.imageURI);
            this.uploadFile();
            }, (err) => {
              console.log(err);
              //toast.present(err);
            });
        }
      },{
        text: this.translate.instant('Gallery'),
        handler: () => {
          const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          }

          this.camera.getPicture(options).then((imageData) => {
            this.imageURI = imageData;
            console.log("IMAGE DATA From Gallery =="+this.imageURI);
          this.uploadFile();
          }, (err) => {
            console.log(err);
            toast.present(err);
          });

        }
      }
    ]
  });
  actionSheet.present();
}




uploadFile() {

  let upImgUrl ='https://sapir.app/wp-json/mobileapi/upload_profile_image?token=';
  console.log("Profile URL == "+upImgUrl+this.token);
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();

  const fileTransfer: FileTransferObject = this.transfer.create();
  let options: FileUploadOptions = {
    fileKey: 'image_url',
    fileName: 'ionicfile.jpeg',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }
  fileTransfer.upload(this.imageURI, upImgUrl+this.token, options)
    .then(data => {
      console.log(" image upload Response === ",data);

      let imgupdate=data.response;
      let  newUrl= JSON.parse(imgupdate.replace(/\\/g,""));
      console.log("NEW URLs == "+newUrl);
    
      this.profilePic = newUrl;
      this.storage.get('user').then((data)=>{
        console.log("storage data"+JSON.stringify(data));
        console.log("current pic ====== ========"+data.user_pic);
        data.user_pic=newUrl;
        this.storage.set('user', data);
      });
        //update user profile    
          loader.dismiss();
          let pus = this.translate.instant('Profile uploaded successfully');
          this.presentToast(pus);
          this.storage.get('user').then((val) => {
            console.log("AFTER UPDATE IMAGE  "+JSON.stringify(val));
            this.userDetails=val;
                
            });
   
  },(err) => {
     console.log("Error = "+JSON.stringify(err));
     loader.dismiss();
     this.presentToast(err);
  });
  // loader.dismiss();
  
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();
}  


}
