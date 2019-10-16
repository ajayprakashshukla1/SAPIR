import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,ActionSheetController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage';
import {PoviderForAllProvider } from '../../providers/povider-for-all/povider-for-all';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImageViewerController } from 'ionic-img-viewer';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

declare var google;

/**
 * Generated class for the EditPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-edit-property'
})
@Component({
  selector: 'page-edit-property',
  templateUrl: 'edit-property.html',
})
export class EditPropertyPage { 
  _imageViewerCtrl: ImageViewerController;

  section1:boolean=true;
  section2:boolean=false;
  section3:boolean=false;  
editProperty:any;
public editForm: FormGroup;
token:any;
citys:any;
propTyp:any;
autocomplete: any;
autocompleteItems: any;
acService: any;
propertiesDetails:any;
area:any;
filesAmount:any;
imageURI:any;
imageUploadId:Array<any> = [];
remainingUploadId:Array<any> = [];
checkBrowser:any;
lanCss:any;
propertyTypeDropDown: Array<{value: any, component: any}>;
propertyTypesDropDown: Array<{value: any, component: any}>;
furnitureDropDown:Array<{value: any, component: any}>;
amenitiesDropDown:Array<{value: any, component: any}>;
selectOptions:any;
del:any;
msg:any;
cancel:any;
okay:any;
unit:any;
rooms =['1.5','2','2.5','3','3.5','4','4.5','5','6+'];

  constructor(public translate: TranslateService,public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public storage: Storage,
    public poviderForAllProvider: PoviderForAllProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, private transfer: FileTransfer,
    public actionSheetCtrl: ActionSheetController, public camera: Camera, public imagePicker: ImagePicker, public loadingCtrl: LoadingController, imageViewerCtrl: ImageViewerController) {
      this.getUserDetails();
      this.storage.get('platform').then((val) => {
        this.checkBrowser=val;
        })
    this.editProperty = this.navParams.get('editProperty');
    this.area = this.editProperty.area;
    this.unit = this.editProperty.propertyUnit;
    this.getToken();
    this.getCity();
    this._imageViewerCtrl = imageViewerCtrl;
    //  this.editForm.city ='test';
    // this.propTyp=this.editProperty.title;

    
  }

  
  getUserDetails(){
    this.storage.get('user').then(details =>{
      console.table(details);
      this.translate.use(details.selected_language);
      this.lanCss = details.selected_language;
      console.log(" LANGUAGE CSS "+this.lanCss);
      console.log("user language ======= ", details.selected_language+" LANGUAGE CSSS======== "+this.lanCss);

      this.selectOptions = {
        cssClass: this.lanCss,
      };

      if(details.selected_language=='ar'){

        this.propertyTypeDropDown = [
          { value: 'sell', component: 'השכרה' },
          { value: 'rent', component: 'מכירה' },   
        ];

        this.propertyTypesDropDown =[
          { value: 'Cottage', component: 'קוטג' },
          { value: 'Duplex', component: 'דופלקס' },
          { value: 'Flats', component: 'דירות' },
          { value: 'Penthouse', component: 'פנטהאוז' },
          { value: 'Villa', component: 'וילה' },
          { value: 'Studio', component: 'סטודיו' },
          { value: 'Commercial', component: 'מסחרי' },

        ];
       
        this.furnitureDropDown=[
          { value: 'Fully Furnished', component: 'מרוהט' },
          { value: 'Semi Furnished', component: 'חצי-מרוהט' },
          { value: 'Non Furnished', component: 'לא מרוהט' }
        ];

        this.amenitiesDropDown=[
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
        this.propertyTypeDropDown = [
          { value: 'sell', component: 'Sell' },
          { value: 'rent', component: 'Rent' },      
        ];

        this.propertyTypesDropDown =[
          { value: 'Cottage', component: 'Cottage' },
          { value: 'Duplex', component: 'Duplex' },
          { value: 'Flats', component: 'Flats' },
          { value: 'Penthouse', component: 'Penthouse' },
          { value: 'Villa', component: 'Villa' },
          { value: 'Studio', component: 'Studio' },
          { value: 'Commercial', component: 'Commercial' },

        ];

        this.furnitureDropDown=[
          { value: 'Fully Furnished', component: 'Furnished' },
          { value: 'Semi Furnished', component: 'Semi-Furnished' },
          { value: 'Non Furnished', component: 'Unfurnished' }
        ];

        this.amenitiesDropDown=[
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


  ngOnInit(){
    this.editForm = this.fb.group({
      token: [],
      ImagesId:[],
      propertyType:[],
      propertyId:[this.editProperty.id,Validators.compose([Validators.required])],
      city:[this.editProperty.city, Validators.compose([Validators.required])],
      propertyTitle:[this.editProperty.title, Validators.compose([Validators.required])],
      propertyTypes:[this.editProperty.propertyTypes, Validators.compose([Validators.required])],
      rooms:[this.editProperty.bedrooms,Validators.compose([Validators.required])],
      furniture:[this.editProperty.furniture, Validators.compose([Validators.required])],
      currency_type:[this.editProperty.currency_type, Validators.compose([Validators.required])],
      age_of_home:[this.editProperty.age_of_home, Validators.compose([Validators.required])],
      amenities:[this.editProperty.property_amenities, Validators.compose([Validators.required])],
      floor:[this.editProperty.floor, Validators.compose([Validators.required])],
      utilybills:[this.editProperty.utilybills, Validators.compose([Validators.required])],
      propertydetails:[],
      description: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      price:[this.editProperty.price, Validators.compose([Validators.required])], 
      parking:[this.editProperty.parking, Validators.compose([Validators.required])],  
      propImges:[],
      label:[this.editProperty.label,Validators.compose([Validators.required])],
      currentImages:['',Validators.compose([Validators.required])],   
      saleArea:['', Validators.compose([Validators.required])],
      bathrooms:[this.editProperty.bathrooms, Validators.compose([Validators.required])],
      squareMeters:[this.editProperty.minimum_square_meter, Validators.compose([Validators.required])],
      propertyUnit:[this.editProperty.minimum_square_meter, Validators.compose([Validators.required])],
   })

   this.acService = new google.maps.places.AutocompleteService();
   this.autocompleteItems = [];
   this.autocomplete = {
     query: ''
   };
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPropertyPage');
  }

  sendData(editProperty) {
    // console.log("EDIT PROPERTY DATA == "+JSON.stringify(editProperty));
    editProperty.currentImages = [];
    for (let i = 0; i < this.editProperty.imagesid.length; i++) {
      this.remainingUploadId.push(this.editProperty.imagesid[i].imagesID);

    }

    editProperty.ImagesId = this.imageUploadId;
    // editProperty.currentImages= this.editProperty.images;
    editProperty.currentImages = this.remainingUploadId;
    editProperty.propertydetails = this.propertiesDetails;

    let uploadImage = this.imageUploadId.length;

    let currentImage = this.editProperty.imagesid.length;
    let total = uploadImage + currentImage;
    let url = 'editproperty';
    if (total >= 5 && total <= 15) {
      this.poviderForAllProvider.post(url, editProperty).subscribe(res => {
        if (res.status == "success") {
          this.alertMsg(res.msg);
          this.navCtrl.setRoot('page-home');
        }
      }), err => {
        console.log(err);
      }
    } else {
      this.alertMsg('please upload min 5 or max 15 images');
    }


  }

  getToken(){
    this.storage.get('user').then((val) => {
      this.token=val.token;
    })
  }

  //GET CITY=======
  getCity() {
    this.storage.get('user').then((val) => {
      this.poviderForAllProvider.newgetCity(val.token).then(
        data => {
          this.citys = data.res;
        })
    })
  }

section(val) {

  let sectionShow = val;
  console.log("SHOW section ==" + sectionShow);
 
  if (sectionShow == 'section2') {
    this.section1 = false;
    this.section2 = true;
    this.section3 = false;
  }
  if (sectionShow == 'section3') {
    this.section3 = true;
    this.section1 = false;
    this.section2 = false;

  }
  if (sectionShow == 'section1') {
    this.section1 = true;
    this.section2 = false;
    this.section3 = false;

  }
}


// AUTO Complete

updateSearch() {
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

    this.propertiesDetails=results;
    
  });
 
  this.autocompleteItems = [];
  this.autocomplete.query = item.description;
}


// MULTIPLE IMAGE UPLOAD =================
  onSelectFile(event) {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    this.filesAmount = event.target.files.length;
    let total = this.filesAmount + this.editProperty.imagesid.length;
    if (event.target.files && total >= 5 && total <= 15) {
      this.imageURI = event.target.files;
      var reader = new FormData();
      for (let i = 0; i < this.filesAmount; i++) {
        reader.append('file[]', event.target.files[i]);

      }
      var url = "pwa_fileupload";
      this.poviderForAllProvider.post(url, reader).subscribe(res => {
        console.table(res);
        for (let i = 0; i <= res.length; i++) {
          this.imageUploadId.push(res[i]);
          if(i==res.length){
           loader.dismiss();
          }else{
              this.presentToast("Image uploaded successfully");

          }
        }

      }), err => {
        console.log(err);
      }
    } else {
      this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');

    }
  }


alertMsg(msg) {
  let toast = this.toastCtrl.create({
    showCloseButton: true,
    message: msg,
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
}

  deleteImage(imageUrl) {

    
    console.log("LAN == "+this.lanCss);
    if(this.lanCss=='ar'){
     this.del='מאשר מחיקת תמונה';
     this.msg='?האם ברצונך למחוק תמונה זו';
     this.cancel='בטל';
     this.okay='אישור'
    }else{
      this.del='Delete!'
      this.msg='Do you want to delete this image?'
      this.cancel='Cancel'
      this.okay='Ok'
    }
    const confirm = this.alertCtrl.create({
      title: this.del,
      message: this.msg,
      buttons: [
        {
          text: this.cancel,
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: this.okay,
          handler: () => {
            let len = this.editProperty.imagesid.length;
            console.log('IMAGE LENGTH===' + len);
            for (let i = 0; i < len; i++) {
              console.log("I AM WORK");
              console.log("IMAGE URL ==" + this.editProperty.imagesid[i].imagesurl);

              if (this.editProperty.imagesid[i].imagesurl == imageUrl) {

                console.log("Match ==" + this.editProperty.imagesid[i].imagesurl);
                this.editProperty.imagesid[i].imagesurl = "";
                this.editProperty.imagesid[i].imagesID = "";
                console.log(JSON.stringify(this.editProperty.imagesid));
                this.editProperty.imagesid.splice(i, 1);
                break;
              }


            }
          }
        }
      ]
    });
    confirm.present();
  }



 //IMAGE SHAREING
 addImage(){
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
              for (var i = 0; i < results.length; i++) {
                  console.log('Image URI: ' + results[i]);
                  this.imageURI =results[i];
                  this.uploadFile();
              }
            }, (err) => { });

           }
         }    
       ]
     });
     actionSheet.present();
   }
   
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
    console.log("IMAGE ", this.imageURI);
    fileTransfer.upload(this.imageURI, upImgUrl + this.token, options)
      .then(data => {

        this.imageUploadId.push(data.response);
        loader.dismiss();
        this.presentToast("Image uploaded successfully");

      }, (err) => {
        console.log("Error = " + JSON.stringify(err));
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

  presentImage(myImage, events) {
    console.log("MY IMG" + myImage);
    console.log("EVENTS == ", events);
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
}
