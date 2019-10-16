import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import{Storage} from '@ionic/storage'
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all'
declare var google;
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

/**
 * Generated class for the StilllookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-stilllooking'
})
@Component({
  selector: 'page-stilllooking',
  templateUrl: 'stilllooking.html',
})
export class StilllookingPage {
  public stillLookingForm:FormGroup;
  token:any;
  acService: any;
 autocompleteItems: any;
 autocomplete: any;
 lanCss:any;
 selectOptions:any;
selectMinPrice:any;
selectMaxPrice:any; 
  constructor(public translate: TranslateService,private _fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,
    public poviderForAllProvider:PoviderForAllProvider,public loadingController:LoadingController,public toastController:ToastController) {
    this.getToken();
    this.getUserDetails();

  }
  ngOnInit() {
    this.stillLookingForm = this._fb.group({
      token:[],
      type:['',Validators.compose([Validators.required])],
      propertyType:['',Validators.compose([Validators.required])],
      budget:['',Validators.compose([Validators.required])],
      furniture:['', Validators.compose([Validators.required])],

      propertyTitle:['',Validators.compose([Validators.required])],
      serviceAddress:['',Validators.compose([Validators.required])],
      settlement:['',Validators.compose([Validators.required])],
      neighbourhood:['',Validators.compose([Validators.required])],
      sqMeter:['',Validators.compose([Validators.required])],
      numberOfBedrooms:['',Validators.compose([Validators.required])],
      numberOfBathrooms:['',Validators.compose([Validators.required])],
      floorPreferred:['',Validators.compose([Validators.required])],
      parkingSpot:['',Validators.compose([Validators.required])],
      amenities:['',Validators.compose([Validators.required])],
      propertyAddress:['',Validators.compose([Validators.required])],
      city:['',Validators.compose([Validators.required])],
      state:['',Validators.compose([Validators.required])],
      houseNumber:['',Validators.compose([Validators.required])],
      sizeInSquareFeet:['',Validators.compose([Validators.required])],
      name:['',Validators.compose([Validators.required])],
      phoneNumber:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required])],
      message:['',Validators.compose([Validators.required])],
      
    })
    // For Auto fill

    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StilllookingPage');
  }
  sendData(formValue){
   console.log("Form Value === "+JSON.stringify(formValue));
   let loading = this.loadingController.create();
   loading.present();
   let endPoint ='still_looking_form';
   this.poviderForAllProvider.stillProperty(endPoint,formValue).subscribe(res =>{
     console.log(" STIlling looking RES================== ",JSON.stringify(res));
     if(res.msg){
      let toast = this.toastController.create({
        message: res.msg,
        duration: 3000,
        position: 'bottom',
        cssClass: 'dark-trans',
        closeButtonText: 'OK',
        showCloseButton: true
      });
      toast.present();
      loading.dismiss();
      this.navCtrl.setRoot('page-home');
     }else{
      loading.dismiss();

     }

   })
   
  

  }

  // AUTo Search 

  // this.acService = new google.maps.places.AutocompleteService();

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
    })
  }


chooseItem(item) {
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': item.description
  }, (results, status) => {

    console.log("RESULTS  == "+JSON.stringify(results));
    // this.propertiesDetails=results;
    // this.start = results[0].address_components[0].long_name;
    // console.log("Start Origin +++===" + JSON.stringify(results[0].address_components[0].long_name));
    //end
  });
 // console.log(item);
 // console.log(item.description);
  this.autocompleteItems = [];
  this.autocomplete.query = item.description;
}

  // AUTO SEARCH END

  // STRAGE
  getToken(){
    this.storage.get('user').then((val) => {
      this.token=val.token;
      console.log("USER Details === "+this.token);
    })
  }

  
}
