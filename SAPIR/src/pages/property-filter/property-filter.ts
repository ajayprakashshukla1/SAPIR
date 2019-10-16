import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { Storage } from '@ionic/storage';
import{AdvanceSearchProvider}from '../../providers/advance-search/advance-search'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

/**
 * Generated class for the PropertyFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-property-filter'
})
@Component({
  selector: 'page-property-filter',
  templateUrl: 'property-filter.html',
})
export class PropertyFilterPage {
  public filterPropertyForm: FormGroup;
  token:any;
	minmaxbeds: any;
	minmaxbaths: any;
	minmaxprice: any;
	radiusmiles: Number;
	
	minmaxarea: any;
	minmaxfloor: any;
	assetype_p: any;
	moredetails_p: any;

	minmaxarea_min:any = 100;
	minmaxarea_max:any = 5000;

	minmaxfloor_min:any = 1;
	minmaxfloor_max:any = 20;

	minmaxprice_min:any = 100000;
	minmaxprice_max:any = 5000000;
  loadings:any;
	numrooms_min:any = 1;
	numrooms_max:any = 20;
	settlement:any;
	rentForm:boolean;
	citys:any;
	propertyDropDownValue:any;
	propertyTypDropdown:boolean =true;
  gettoken:any;
  Type: any;
  squareMeters:any;
  amenities:any;
  propCheck:any='rent';
  lanCss:any;
  selectOptions:any;
  selectMinPrice:any;
  selectMaxPrice:any; 
  constructor(public navCtrl: NavController, public navParams: NavParams,private _fb: FormBuilder,public translate:TranslateService,
     public poviderForAllProvider:PoviderForAllProvider,public storage:Storage,public advanceSearchProvider:AdvanceSearchProvider,
     public loadingCtrl:LoadingController,public viewCtrl:ViewController, public params: NavParams) {

    console.log(" City === ",this.params.get('city'));
    this.getUserDetails();  
    this.getToken();
    this.getCity();
  }
	closeModal() {
    this.navCtrl.pop();
      }
      
  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyFilterPage');
  }
  ngOnInit() {
    this.filterPropertyForm = this._fb.group({
      token:[],
      propertyType: ['rent', Validators.compose([Validators.required])],
      minmaxprice: [{upper:20000,lower:1000}, Validators.compose([Validators.required])],
      minmaxprice2: [{upper:4000000,lower:300000}, Validators.compose([Validators.required])],
			numrooms: [{upper:20,lower:1}, Validators.compose([Validators.required])],
      furniture: ['', Validators.compose([Validators.required])],
      Type: ['', Validators.compose([Validators.required])],
      squareMeters: ['', Validators.compose([Validators.required])],
      amenities: ['', Validators.compose([Validators.required])],

      city:[this.params.get('city'), Validators.compose([Validators.required])],

      
    })
  }

  // get City
  getCity() {
    this.storage.get('user').then((val) => {
      console.log("prop rent Ts == "+val.token);
      this.poviderForAllProvider.newgetCity(val.token).then(
      data => {
         this.citys = data.res;
      })
    })
  }
  // GET Token

  getToken(){
    this.storage.get('user').then((val) => {
      this.getToken=val.token;
  
      console.log("USER Details === "+this.getToken);
    })
  
  }

  // FILTER
  filterMe(){
    console.log("ADVANCE FILTER DETAILS === ",this.filterPropertyForm.value);
    this.viewCtrl.dismiss(this.filterPropertyForm);
  }
  
  // Loading 
  loading(){
  this.loadings = this.loadingCtrl.create();
	this.loadings.present();
	
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


  onChange1(val){
    console.log(val);
    this.propCheck =val;
    }

}
