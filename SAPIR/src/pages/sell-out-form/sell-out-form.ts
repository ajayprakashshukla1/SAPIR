import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ActionSheetController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import{PoviderForAllProvider}from'../../providers/povider-for-all/povider-for-all';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';
declare var google;

/**
 * Generated class for the SellOutFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-sell-out-form'
})
@Component({
  selector: 'page-sell-out-form',
  templateUrl: 'sell-out-form.html',
})
export class SellOutFormPage {
  public onYourPropertyForm: FormGroup;
  citys:any;
  propertiesDetails:any;
  sellSection1:boolean=true;
  sellSection2:boolean=false;
  sellSection3:boolean=false;
  imageUploadId:Array<any> = [];
  acService: any;
  autocompleteItems: any;
 autocomplete: any;
 imageURI: any;
 token:any;
 numOfImages:any;
 checkBrowser:any;
 selectOptions:any
 filesAmount:any;
 selectMinPrice:any;
 selectMaxPrice:any; 
 numbers=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
 rooms =['1.5','2','2.5','3','3.5','4','4.5','5','6+'];
 uplodedImage:any;
 lanCss:any;
 amenitiesDropDown:Array<{value: any, component: any}>;
 languageSelected : any;
 languages : Array<LanguageModel>;
 unit='sq.m';
  constructor(public languageService: LanguageServiceProvider,public events:Events,private _fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams,
    public poviderForAllProvider:PoviderForAllProvider,public toastCtrl:ToastController,
    public actionSheetCtrl:ActionSheetController,public camera:Camera,public loadingCtrl:LoadingController,
    public transfer:FileTransfer,public storage:Storage,public imagePicker:ImagePicker,public translate:TranslateService
    ) {
      this.languages = this.languageService.getLanguages();   
     this.getUserDetails(); 
     this.getCity();
     this.storage.get('platform').then((val) => {
      this.checkBrowser=val;
      //  alert('CHECK BROWSER  == '+val);
      })
  }


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
    this.selectOptions = {
      cssClass: this.lanCss,
  };
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellOutFormPage');
    this.storage.get('user').then((val) => {
      if (val) {

        this.token = val.token;
        this.getCity();
        console.log("VAL TOKEn" + val.token);

      } else {  

      }
    });
  }
  ngOnInit() {
    this.onYourPropertyForm = this._fb.group({
      token: [],
      ImagesId:[],
      propertyType:[],
      city:['', Validators.compose([Validators.required])],
      propertyTitle:['', Validators.compose([Validators.required, Validators.maxLength(100)])], 
      propertyTypes:['', Validators.compose([Validators.required])],
      rooms:['', Validators.compose([Validators.required])],
      furniture:[],
      floor:[],
      amenities:[],
      description: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      price:['', Validators.compose([Validators.required])],
      currency_type:['', Validators.compose([Validators.required])],
      ageOfHome:[''],
      squareMeters:[],
      saleArea:['', Validators.compose([Validators.required])],
      propImges:[],
      propertydetails:[],
      bathrooms:['', Validators.compose([Validators.required])],
      propertyUnit:['', Validators.compose([Validators.required])],
      phone:['', Validators.compose([Validators.required])]

    });
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''  
    };

  }




  getCity() {
    // alert(" I am city");
    this.storage.get('user').then((val) => {
      this.poviderForAllProvider.newgetCity(val.token).then(
      data => {
         this.citys = data.res;
      })
    })
  }

    //  section Hide or Show

    section(val) {

      console.log("value === "+val);
      let sectionShow = val;
      console.log("SHOW section ==" + sectionShow);
      if (sectionShow == 'sellSection2') {
        this.sellSection2 = true;
        this.sellSection1 = false;
        this.sellSection3 = false;
      }
      if (sectionShow == 'sellSection3') {
        this.sellSection2 = false;
        this.sellSection1 = false;
        this.sellSection3 = true;
      }
      if (sectionShow == 'sellSection1') {
        this.sellSection2 = false;
        this.sellSection1 = true;
        this.sellSection3 = false;
      }
     
    }


      updateSearch() {
        // console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
          this.autocompleteItems = [];
          return;
        }
        let self = this;
        let config = {
          input: this.autocomplete.query,
          componentRestrictions: {}
        }
        this.acService.getPlacePredictions(config, function (predictions, status) {
          //   console.log('modal > getPlacePredictions > status > ', status);
          self.autocompleteItems = [];
          if (predictions != null) {
            predictions.forEach(function (prediction) {
              self.autocompleteItems.push(prediction);
            });
          }
        });
      }
      
      chooseItem(item) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'address': item.description
        }, (results, status) => {
      
          console.log("RESULTS  == "+JSON.stringify(results));
          this.propertiesDetails=results;
          // this.start = results[0].address_components[0].long_name;
          // console.log("Start Origin +++===" + JSON.stringify(results[0].address_components[0].long_name));
          //end
        });
       // console.log(item);
       // console.log(item.description);
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
      }
      
      addImage(){

        console.log("iMAGE upload counnt "+this.imageUploadId.length);
     
     if(this.imageUploadId.length<=15){
           var toast = this.toastCtrl.create({
           message: 'User was added successfully',
           duration: 3000,
           position: 'top'
         }); 
         toast.onDidDismiss(() => {
           console.log('Dismissed toast');
         });
            const actionSheet = this.actionSheetCtrl.create({
             title: 'Upload your Image:',
             buttons: [
               {  
                 text: 'Camera',
                 role: 'destructive',
                 handler: () => {
                  console.log('Destructive clicked');
                 const options: CameraOptions = {
                   quality: 100,
                   destinationType: this.camera.DestinationType.FILE_URI,
                   sourceType: this.camera.PictureSourceType.CAMERA,
                 }
                 console.log("OPTION == " + JSON.stringify(options));
                 this.camera.getPicture(options).then((imageData) => {    
                   this.imageURI = imageData;
                   console.log("IMAGE DATA" + this.imageURI);
                   this.uploadFile();
                 }, (err) => {
                   console.log(err);
                   //toast.present(err);
                 });
                }
               },{
                 text: 'Gallery',
                 handler: () => {
                   
                  var options = {
                    maximumImagesCount: 15,
                    minimumImagesCount:5,
                    width: 800,
                    height: 800,
                    quality: 80
                   };
                  this.imagePicker.getPictures(options).then((results) => {

                    let totalImage = results.length+this.imageUploadId.length;
                    if(totalImage <=15){
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                        this.imageURI =results[i];
                        this.uploadFile();
                    }
                  }else{
                    this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
                  }
                  }, (err) => { });
                 }
               }
             ]
           });
           actionSheet.present();
         }else{
           var toast = this.toastCtrl.create({
             message: 'You are uploaded maximum images',
             duration: 3000,
             position: 'top'
           }); 
           toast.present();
         }
     
         }


        //  UPLOAD FILE

  uploadFile() {
 
    let upImgUrl = 'https://sapir.app/wp-json/mobileapi/image_upload?token=';
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'imageURI',
      fileName: 'ionicfile.jpeg',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
    fileTransfer.upload(this.imageURI, upImgUrl + this.token, options)
      .then(data => {

        this.imageUploadId.push(data.response);
        console.log("Store image Id == " + this.imageUploadId + " Image Response Data == " + JSON.stringify(data.response));
        loader.dismiss();
         // this.presentToast("Image uploaded successfully");
        this.uplodedImage= this.imageUploadId.length;

      }, (err) => {
        console.log("Error = " + JSON.stringify(err));
        loader.dismiss();
        this.presentToast(err);
      });
    // loader.dismiss();


  }
  sendData(formValue) {
    // console.log("FORM DATA === " + JSON.stringify(formValue.value));

    
    this.numOfImages = this.imageUploadId.length;
    console.log("IMAGE LEANGTH     ===============================================================  " + this.imageUploadId.length);
    if (this.imageUploadId.length < 5) {

      this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');

    } else {

      // this.alertMsg('you are added '+this.imageUploadId+'image');

      formValue.value.propertydetails = this.propertiesDetails;
      formValue.value.ImagesId = this.imageUploadId;
      this.sendDataNow(formValue);

    }


  }


  // process send button
  sendDataNow(formValue) {
    console.log("VALUEsss ===== " + JSON.stringify(formValue.value));
    var url = "createformdata";
    this.poviderForAllProvider.post(url, formValue.value).subscribe(res => {
      if (res.status == "success") {
        this.alertMsg(res.msg);
        this.storage.get('user').then((val) => {
          console.log("LOCAL STORAGE === ",JSON.stringify(val));
          val.no_of_properties =parseInt(val.no_of_properties)+1;
          this.storage.set('user', val);
        })
        this.navCtrl.setRoot('page-home');
      } else if (res.status == "error") {
        if (res.errMsg == 'invalid_token') {
          this.alertMsg(res.msg);
        } else {
          this.alertMsg(res.msg);
        }
      }
    }), err => {
      console.log(err);
    }
  }

//  TOAST ========

alertMsg(msg) {
  let toast = this.toastCtrl.create({
    showCloseButton: true,
    message: msg,
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
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


// MULTIPLE IMAGE UPLOAD =================
onSelectFile(event) {

  this.filesAmount = event.target.files.length;
  if (event.target.files && event.target.files[0] && this.filesAmount>=5 && this.filesAmount<=15) {
    this.imageURI = event.target.files;
  var reader = new FormData();
  console.log("READER ",reader);
    for (let i = 0; i < this.filesAmount; i++) {
      reader.append('file[]',event.target.files[i]); 
    }
    var url = "pwa_fileupload";
    this.poviderForAllProvider.post(url, reader).subscribe(res => {
      console.log("IMAGE ",res);
	  for (let i = 0; i < res.length; i++) {
		this.imageUploadId.push(res[i]);
	  }
      
    }), err => {
      console.log(err);
    }
  }else{
    this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
  }

}
  
BrowsersendData(formValue){
  formValue.value.ImagesId = this.imageUploadId;
  let imgIdLength =this.imageUploadId.length;
  console.log("image Length == ",imgIdLength);
  if(imgIdLength>=5 && imgIdLength<=15){
    this.sendDataNow(formValue);
  }else{
    this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
  }
   
}

  
getUserDetails(){
  this.storage.get('user').then(details =>{
    console.table(details);
    this.translate.use(details.selected_language);
    this.lanCss = details.selected_language;
    console.log(" LANGUAGE CSS "+this.lanCss);
    console.log("user language ======= ", details.selected_language+" LANGUAGE CSSS======== "+this.lanCss);
    this.lanCss = details.selected_language;

      if(this.lanCss =='ar'){
      this.selectMinPrice='בחר מחיר מינימלי';
      this.selectMaxPrice='בחר מחיר מרבי';
      }else{
        this.selectMinPrice='Select Min Price';
        this.selectMaxPrice='Select Max Price';
      }
      this.selectOptions = {
        cssClass: this.lanCss,
      };
    if(details.selected_language=='ar'){
      this.amenitiesDropDown=[
        // { value: 'Air-conditioning', component: 'מיזוג אויר' },
        // { value: 'Patio or balcony', component: 'מרפסת' },
        // { value: 'Storage', component: 'מחסן' },
        // { value: 'Dishwasher', component: 'מדיח כלים' },
        // { value: 'Covered parking', component: 'חניה מקורה' },
        // { value: 'Laundry Washe', component: 'מכונת כביסה' },
        // { value: 'Dryer', component: 'מייבש כביסה' },
        // { value: 'Pool', component: 'בריכה' },
        // { value: 'Garden', component: 'דירת גן' },
        // { value: 'Pet Friendly', component: 'אפשרי בעלי חיים' },


        { value: 'Air-conditioning', component: 'מיזוג אויר' },
        { value: 'Balcony', component: 'מרפסת' },
        { value: 'Storage', component: 'מחסן' },
        { value: 'Parking', component: 'חניה' },
        { value: 'Elevator', component: 'מעלית' },
        { value: 'Pets', component: 'חיות מחמד' },
        { value: 'Accessibility', component: 'נגישות' },
        { value: 'Bars', component: 'ברים' },
        { value: 'Renovated', component: 'משופץ' },
        { value: 'Safe Room', component: 'חדר בטוח' },
        { value: 'Long-Term', component: 'טווח ארוך' },

      ];
    }else{
      this.amenitiesDropDown=[
        // { value: 'Air-conditioning', component: 'Air-conditioning' },
        // { value: 'Patio or balcony', component: 'Patio or balcony' },
        // { value: 'Storage', component: 'Storage' },
        // { value: 'Dishwasher', component: 'Dishwasher' },
        // { value: 'Covered parking', component: 'Covered parking' },
        // { value: 'Laundry Washe', component: 'Laundry Washe' },
        // { value: 'Dryer', component: 'Dryer' },
        // { value: 'Pool', component: 'Pool' },
        // { value: 'Garden', component: 'Garden' },
        // { value: 'Pet Friendly', component: 'Pet Friendly' },

          { value: 'Air-conditioning', component: 'Air-conditioning' },
          { value: 'Balcony', component: 'Balcony' },
          { value: 'Storage', component: 'Storage' },
          { value: 'Parking', component: 'Parking' },
          { value: 'Elevator', component: 'Elevator' },
          { value: 'Pets', component: 'Pets' },
          { value: 'Accessibility', component: 'Accessibility' },
          { value: 'Bars', component: 'Bars' },
          { value: 'Renovated', component: 'Renovated' },
          { value: 'Safe Room', component: 'Safe Room' },
          { value: 'Long-Term', component: 'Long-Term' },

      ];

    }

  })
}
  

}
