import { Component ,ElementRef,  ViewChild,QueryList,ViewChildren} from '@angular/core';

import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { LoadingController, ToastController , ViewController,NavController,ModalController,IonicPage, MenuController,Slides} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Platform , Nav} from 'ionic-angular';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

declare var google;

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // @ViewChild('map') mapElement: ElementRef;
  @ViewChildren(Slides) slide : QueryList<Slides>;

  public homeForm: FormGroup;
  textDir: string = "ltr";
  map: any;
  formDiv: boolean = true;
  contentData: any;
  showStatus: any;
  citys: any;
  pet: any = 'featured';
  loading: any;
  properties = [];
  heading: any;
  token: any;
  propPage: number;
  maxPages: any;
  mapView: boolean = false;
  directionsDisplay = new google.maps.DirectionsRenderer;
  propertySearch: any;
  selectOptions:any;
  studioClass1: any;
  studioClass2: any;
  studioClass3: any;
  studioClass4: any;
  len: any;
  titlechange: any = "Recently Added";
  studios: any = '';
  lanCss:any;
  studioValue: Array<any> = [];
  errMsg:any;
  minmaxprice: any = {
    upper: 5000000,
    lower: 100000
  }
  bathroomnumber: any = {
    upper: 50,
    lower: 0
  }
  bedroom: any = {
    upper: 20,
    lower: 0
  }
  dualKnobs3: any = {
    upper: 5000000,
    lower: 100000,
  }
  dualKnobs2: any = {
    upper: 50,
    lower: 0
  }

  pwaMinMaxPrice: any = {
    upper: 5000000,
    lower: 100000
  }

  pwaFloorLevels: any = {
    upper: 50,
    lower: 0
  }
  viewMapData = [];
  propertyType: any = 'Rent';
  cityList: Array<any> = [];
  checkBrowser: any;
  selectMinPrice:any;
  selectMaxPrice:any;
  userDetails:any=[];  
  popUp:any;
  searchNumber:any;
  langlobal:any;
  numbers = ['1','2','3','4','5','6','7','8','9','10+'];
  rooms =['1.5','2','2.5','3','3.5','4','4.5','5','6+'];
  minrooms =['1.5','2','2.5','3','3.5','4','4.5','5'];

  minRentPriceList = ['1,000', '1,500', '2,000', '2,500', '3,000', '3,500', '4,000', '4,500', '5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000', '10,500', '11,000', '11,500', '12,000', '12,500', '13,000', '13,500', '14,000', '14,500', '15,000', '15,500',
    '16,000', '16,500', '17,000', '17,500', '18,000', '18,500', '19,000', '19,500'];

  maxRentPriceList = ['1,000','1,500', '2,000', '2,500', '3,000', '3,500', '4,000', '4,500', '5,000', '5,500', '6,000', '6,500', '7,000', '7,500', '8,000', '8,500', '9,000', '9,500', '10,000', '10,500', '11,000', '11,500', '12,000', '12,500', '13,000', '13,500', '14,000', '14,500', '15,000', '15,500',
    '16,000', '16,500', '17,000', '17,500', '18,000', '18,500', '19,000', '19,500', '20000'];

  minSellList = ['300,000', '450,000', '600,000', '750,000', '900,000', '1,000,000', '1,500,000', '2,000,000', '2,500,000', '3,000,000', '3,500,000'];

  maxSellList = ['300,000','450,000', '600,000', '750,000', '900,000', '1,000,000', '1,500,000', '2,000,000', '2,500,000', '3,000,000', '3,500,000', '40,00,000'];
  languageSelected : any;
  languages : Array<LanguageModel>;
  getLan:any;
  constructor(public languageService: LanguageServiceProvider,public platform: Platform, public translate: TranslateService, public navCtrl: NavController, public poviderForAllProvider: PoviderForAllProvider, private menu: MenuController,
    public fb: FormBuilder, public ToastController: ToastController, public loadingCtrl: LoadingController,public events: Events,private callNumber: CallNumber,
    public modalController: ModalController, public storage: Storage) {
    //  this.translation();
    this.languages = this.languageService.getLanguages();
    this.getUserDetails();
    this.storage.get('platform').then((val) => {
      this.checkBrowser = val;
      console.log("Value ========",val);
      //  alert('CHECK BROWSER  == '+val);
    })
    this.getCity();
    this.findAll();

    this.popUp = {
      cssClass: 'popUp',
  };
    
  }


slidePrev(i) {
  this.slide.toArray()[i].slidePrev(500);
  
}


slideNext(i) {

  this.slide.toArray()[i].slideNext(500);

}  

 
  // FOR Search result
  sendData(value,num){ 

    console.log("SEARCH  === ",value);
    this.searchNumber=num;
    if(this.searchNumber =='1'){
    this.homeForm.value.furniture='';  
    this.homeForm.value.amenities='';
    this.homeForm.value.Type='';
    }
    if(value.minPrice ==null){
      value.minPrice="";
    }
    if(value.maxPrice ==null){
      value.maxPrice="";
    }

    if (this.searchNumber == '6') {
      value.furniture = '';
      value.amenities = '';
      value.Type='';
      value.city='';
      value.minmaxprice='';
      value.bedroom='';
      value.bathrooms='';
      value.minPrice='';
      value.maxPrice='';
      value.studio='';
      value.floor='';
      value.studios='';
      value.minRoom='';
      value.maxRoom='';
      value.minfloor='';
      value.maxfloor='';
      value.furniture='';
      value.amenities=''; 
    }

    value.propertyType =this.propertyType;
    value.paged=1;
    this.loaderPresent();
    console.log("Search list  == ",value);
    this.poviderForAllProvider.post('filterProperties',value).subscribe(res => {
    
      console.log("NORMAL FILTER RESUlt ",res);
    if(res.property){
    this.loading.dismiss();
    this.errMsg='';
    this.properties=[];
    for(let i=0;i<res.property.length;i++){
    this.properties.push(res.property[i]);
    }
    // this.properties.push(res.property);
    this.propPage = res.paged;
    this.maxPages=res.max_num_pages;
    this.propertySearch=value;
    if(res.max_num_pages >0){
    this.titlechange ='Search Result';
    }
    
    }
    if(res.not_found){
    this.loading.dismiss();
    this.showToast(res.not_found);
    this.titlechange="Recently Added";
    this.findAll();
    this.errMsg=res.not_found;
    }
    
    },err=>{
    console.log(err);
    this.loading.dismiss();
    }),errs=>{
    console.log(errs); 
    this.loading.dismiss();
    };
    }


  // sendData(value) {
  //   value.studios = this.studios;
  //   value.propertyType = this.propertyType;
  //   value.city=this.cityList;
  //   value.paged = 1;
  //   if (value.minPrice > value.maxPrice) {
  //     value.minmaxprice.upper = value.minPrice;
  //     value.minmaxprice.lower = value.maxPrice;
  //   } else {
  //     value.minmaxprice.upper = value.maxPrice;
  //     value.minmaxprice.lower = value.minPrice;
  //   }

  //   if (this.checkBrowser == 1) {
  //     console.log("Browser == " + this.checkBrowser);
  //     value.city = this.cityList;
  //     value.propertyType = this.propertyType;
  //     console.table(value.city);


  //   }
  //   this.loaderPresent();
  //   this.poviderForAllProvider.post('filterProperties', value).subscribe(res => {
  //     if (res.property) {
  //       this.loading.dismiss();
  //       this.properties = [];

  //       for (let i = 0; i < res.property.length; i++) {
  //         this.properties.push(res.property[i]);
  //       }
  //       // this.properties.push(res.property);
  //       this.propPage = res.paged;
  //       this.maxPages = res.max_num_pages;
  //       this.propertySearch = value;
  //       if (res.max_num_pages > 0) {
  //         this.titlechange = 'Search Result';
  //       }

  //     }
  //     if (res.not_found == "Not found") {
  //       this.loading.dismiss();
  //       this.showToast(res.not_found);
  //     }

  //   }, err => {
  //     console.log(err);
  //     this.loading.dismiss();
  //   }), errs => {
  //     console.log(errs);
  //     this.loading.dismiss();
  //   };

  // }


  setStudioValue(val) {
    console.log("Studio ===" + val);
    this.studios = val;

  }
  //END

  // INFINITY SCROLLING

  doInfinite(infiniteScroll, getPageNum) {
    console.log("INFINITY SCROLL");

    if (this.propertySearch == undefined || getPageNum == undefined) {
      console.log("SCrolling BAnd ==========================]");
      infiniteScroll.complete();
    }
    else if (this.propertySearch.paged <= this.maxPages) {

      // alert("FORM PAGE === "+this.propertySearch.paged+"   .. MAX PAGES === "+this.maxPages);

      console.log("current PAGE ==" + this.propertySearch.paged);
      this.propertySearch.paged = parseInt(this.propertySearch.paged) + 1;
      this.poviderForAllProvider.post('filterProperties', this.propertySearch).subscribe(res => {
        // console.log(" infinity ResPons"+JSON.stringify(res));

        if (res.property) {
          infiniteScroll.complete();
          for (let i = 0; i < res.property.length; i++) {

            this.properties.push(res.property[i]);
          }

          this.propPage = res.paged;
          this.maxPages = res.max_num_pages;
          this.propertySearch = this.propertySearch;
        }
      })
    }
    infiniteScroll.complete();
  }

  //GET CITY=======
  getCity() {
    this.storage.get('user').then((val) => {
      console.log("VALUE +++++=========",val);
      this.token = val.token;
      this.poviderForAllProvider.newgetCity(val.token).then(
        data => {
          this.citys = data.res;
        }).catch(error => {
          console.log("ERROR +== ", error);
          if (error.status == 500) {
            this.storage.clear();
          } else {
            console.log("ERROR == ", error);
          }
        })
    })
  }


  //END =================

  // GO TO PROPERTY PAGE 

  openPropertyDetail(propertyDetails: any) {
    console.log('send Details' + JSON.stringify(propertyDetails));
    this.navCtrl.push('page-propertyinfo',
      {
        'propertyDetails': propertyDetails
      });
  }


  // ADVANCE FILTER
  advanceFilter(){  
    let modal = this.modalController.create('page-property-filter', this.homeForm.value);
    modal.present();
    modal.onDidDismiss(data => {
    console.log("ADVANCE FILTER RESPONSE    ==== ",data); 
    if(data){
    console.log("IF CONDITIONss== ");
    this.homeForm.value.furniture=data.value.furniture;  
    this.homeForm.value.amenities=data.value.amenities;
    this.homeForm.value.Type=data.value.Type;
    this.sendData(this.homeForm.value,'2');
    }else{
      console.log('Null DATA  === ',data);
    } 
    
    });

    }
  // END 


  ngOnInit() {
    this.homeForm = this.fb.group({
      propertyType: [],
      city: ['', Validators.compose([Validators.required])],
      minmaxprice: [{ upper: 5000000, lower: 100000 }, Validators.compose([Validators.required])],
      bedroom: ['', Validators.compose([Validators.required])],
      bathrooms: ['', Validators.compose([Validators.required])],
      token: [],
      paged: ['', Validators.compose([Validators.required])],
      minPrice: ['', Validators.compose([Validators.required])],
      maxPrice: ['', Validators.compose([Validators.required])],
      studio: [],
      floor: ['', Validators.compose([Validators.required])],
      minfloor:[''],
      maxfloor:[''],
      minRoom:[''],
      maxRoom:[''],
      sortFilter:[''],
    })
    this.menu.enable(true);
  }


  addContent(showStatus) {
    this.contentData = 'All the thing about Technology! Informatic technology especially.All the thing about Technology! Informatic technology especially.';
    this.showStatus = !showStatus;
    console.log(showStatus);
  }
  loaderPresent() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  // Show Toast 
  showToast(toastMsg) {
    let toast = this.ToastController.create({
      message: toastMsg,
      duration: 2000
    });
    toast.present(toast);
  }

  toggleGroup = function () {
    console.log(this.showStatus);
    if (this.showStatus) {
      this.showStatus = false;
    } else {
      this.showStatus = true;
    }
  };
  isGroupShown = function () {
    return this.showStatus;
  };
  knobValues: any = {
    upper: 20,
    lower: 1
  }
  knobValues2: any = {
    upper: 5000000,
    lower: 1000000
  }

  ionViewDidLoad() {
    this.storage.get('user').then((val) => {
      this.token = val.token;
      this.userDetails =val;
      console.log("ion view did load",this.userDetails.role);
      this.events.publish('role:created',this.userDetails.role); 

    })
  }

  ionViewDidEnter() {
    this.pet = "featured";
  }

  pwaSearch(pwaFormValue) {
    pwaFormValue.minmaxprice.upper = 0;
    pwaFormValue.minmaxprice.lower = 0;
    pwaFormValue.bedroom.upper = 0;
    pwaFormValue.bedroom.lower = 0;
    pwaFormValue.bathroomnumber.upper = 0;
    pwaFormValue.bathroomnumber.lower = 0;
    pwaFormValue.pwaFormValue
    console.log("Form Value" + JSON.stringify(pwaFormValue));
    this.sendData(pwaFormValue,'3');

  }

  viewMap(value) {

    console.log("VIEW MAP");
    this.poviderForAllProvider.post('filterProperties', value).subscribe(res => {
      console.log("res" + res);
      if (res.property) {
        this.viewMapData = [];
        this.viewMapData.push(res.property);
        this.navCtrl.setRoot('page-property-on-map', {
          'property': this.viewMapData
        });
      }

      else if (res.max_num_pages == 0) {
        this.showToast(res.not_found);
      }

    });




  }
  initMap() {
    // console.log(" MAP PROPERTIES ================= "+JSON.stringify(this.properties));
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {
        lat: this.properties[0].lat,
        lng: this.properties[0].long
      }
    });

    console.log("MAP === ", this.map);
    // this.directionsDisplay.setMap(this.map);
    if (this.properties) {
      console.log(" MAP PROPERTIES IF CONDITIONS================= " + JSON.stringify(this.properties));
      for (let i = 0; i < this.properties.length; i++) {

        var marker = new google.maps.Marker({
          position: {
            lat: this.properties[i].lat,
            lng: this.properties[i].long
          },
          map: this.map,
          title: 'Hello World!'
        });
        let title = this.properties[i].title;
        let image = this.properties[i].picture;
        let price = this.properties[i].price;

        let pid = this.properties[i].id;
        var infowindow = new google.maps.InfoWindow();
        var service = google.maps.places.PlacesService(this.map);
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent('<div  id=' + 'propertyInfo' + ' class=' + 'mapDiv' + '>' + '<h6>' + title + '</h6>' + '<p class=' + 'price' + '>' + price + '</p>' +
            '<img class=' + 'mapImg' + ' src="' + image + '" id=' + pid + ' >'
            + '</div>');
          infowindow.open(this.map, this);
        })
        this.directionsDisplay.setMap(this.map);

      }
    } else {
      console.log("There is no property");
    }

  }


  myFunction() {
    document.getElementById("propertyInfo").click(); // Click on the checkbox
  }

  doSomething(ev: any) {
    // console.log("TEST=============",ev.target.id);

    if (ev.target.id) {
      var a = parseInt(ev.target.id);

      let index = this.properties.findIndex(x => x.id == a);

      console.log(index);
      console.table(this.properties[index]);
      // this.openPropertyDetail(this.properties[index]);
      this.navCtrl.push('page-propertyinfo',
        {
          'propertyDetails': this.properties[index]
        });
       //  console.log('open inapp');
      //  this.iab.create(ev.target.href, "_system");
      return false;
    }
  }





  CheckMap() {
    if (this.pet == "albums") {

      setTimeout(
        (z) => {
          this.initMap();
        }, 1000);
    }
  }

  // SET STUDIO'S====================
  setstudio(studio, formVal) {

    this.len = this.studioValue.length;
    if (this.len == 0) {
      this.studioValue.push(studio);
      formVal.studio = this.studioValue;
      this.studioClass1 = studio;
      this.studioClass2 = studio;
      this.studioClass3 = studio;
      this.studioClass4 = studio;
      this.len = this.studioValue.length;

    } else {

      let match = this.studioValue.indexOf(studio);
      if (match > -1) {
        let val = this.studioValue[match];
        if (val == 1) {
          this.studioClass1 = 5;
        }
        if (val == 2) {
          this.studioClass2 = 5;

        }
        if (val == 3) {
          this.studioClass3 = 5;

        }
        if (val == 4) {
          this.studioClass4 = 5;

        }

        this.studioValue.splice(match, 1);
        formVal.studio = this.studioValue;
        this.len = this.studioValue.length;
      } else {
        this.studioValue.push(studio);
        this.len = this.studioValue.length;
        console.log("LENGTH == " + this.len);
        console.log("ELSE", this.studioValue);
        formVal.studio = this.studioValue;
      }
    }

    console.log("I AM WORK");
    for (let i = 0; i < this.len; i++) {

      var val = this.studioValue[i];
      console.log("VALUE == " + val);
      if (val == 1) {
        this.studioClass1 = val;
      }
      if (val == 2) {
        this.studioClass2 = val;
      }
      if (val == 3) {
        this.studioClass3 = val;
      }
      if (val == 4) {
        this.studioClass4 = val;
      }

    }

  }
  // Set PROPERTY TYPE ===============================
  setPropertyType(propertytype, formValue ) {
    this.propertyType = propertytype;
    formValue.propertyType = propertytype;
    this.homeForm.controls['minPrice'].reset();
    this.homeForm.controls['maxPrice'].reset();
   

    console.log("FORM VALUE  ==== ",this.homeForm.value);
  }


  findAll() {

    this.storage.get('user').then((val) => {
      this.poviderForAllProvider.findAll(1, val.token).then(data => {
        console.log("LENGTH =" + data.property.length);
        for (let i = 0; i < data.property.length; i++) {
          this.properties.push(data.property[i]);
        }
        this.propPage = data.paged;
        this.maxPages = data.max_num_pages;
        console.log('ppppppppppp: ', this.maxPages);
        //this.loading = false;
      }).catch(error => {
        console.log("ERROR +== ", error);
        if (error.status == 500) {
          this.storage.clear();
          this.navCtrl.push('page-auth');
        } else {
          console.log("ERROR == ", error);
        }
      });
    })

  }


  // Set fvrt=======================================
  favorite(property, status) {
    this.storage.get('user').then((val) => {
      if (val.token) {
        this.poviderForAllProvider.favorite(property, val, status).then(changeProperty => {
          let resssp = changeProperty.json();
          for (let i = 0; i < this.properties.length; i++) {
            console.log("INSIDE LOOP === " + this.properties[i].id);
            if (this.properties[i].id == property.id) {
              this.properties[i].status = status;
              console.log("PROPERTY TITLE ==== " + this.properties[i].status);
            }
          }
          let toast = this.ToastController.create({
            message: resssp.response,
            cssClass: 'mytoast',
            duration: 2000
          });
          toast.present(toast);
        });
      }
    })
    console.log("PROPERTY " + JSON.stringify(property) + " Staus == " + status);
  }

  //  end favrt
  // checkBox(event, city) {
  //   console.log("EVENTS === ", event.checked + " CITY " + city);
  //   if (event.checked == true) {
  //     this.cityList.push(city);
  //   } else {
  //     let cityIndex = this.cityList.indexOf(city);
  //     this.cityList.splice(cityIndex, 1);
  //   }
  //   console.table(this.cityList);
  // }

  translation() {

    console.log('TRANS');
    this.platform.ready().then(() => {

      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        console.log("HOME LANGUAGE ==-=-= ++++===============" + event.lang);
        this.textDir = event.lang == 'ar' ? 'rtl' : 'ltr';
        // this.translate.use(this.textDir);
      });

    });

  }

  getUserDetails() {
    this.storage.get('user').then(details => {
      console.table(details);
      this.translate.use(details.selected_language);
      this.lanCss = details.selected_language;
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
      2})
      console.table(details);
      details.selected_language=this.languageSelected;
      this.lanCss=this.languageSelected;
          if(this.lanCss =='ar'){
            this.selectMinPrice='בחר מחיר מינימלי';
            this.selectMaxPrice='בחר מחיר מרבי';
            this.propertyType='sell';

          }else{
            this.selectMinPrice='Select Min Price';
            this.selectMaxPrice='Select Max Price';
          }
        this.selectOptions = {
          cssClass: this.lanCss,
      };
      console.log("user details",details);
      this.storage.set('user',details);
      this.getLan = this.languageSelected;
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

      

}
