import { Component ,ElementRef,  ViewChild,QueryList,ViewChildren} from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController, LoadingController,ModalController,Slides} from 'ionic-angular';
import {PoviderForAllProvider } from '../../providers/povider-for-all/povider-for-all';
import { Storage } from '@ionic/storage';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';

declare var google;

/**
 * Generated class for the PropertiesForSellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-properties-for-sell'
})
@Component({
  selector: 'page-properties-for-sell',
  templateUrl: 'properties-for-sell.html',
})
export class PropertiesForSellPage {
  @ViewChildren(Slides) slide : QueryList<Slides>;

public sellForm: FormGroup;
titlechange:any="Recently Added";
token:any;
properties:any=[];
map: any;
pet:any = 'featured';
directionsDisplay = new google.maps.DirectionsRenderer;
propPage:any;
maxPages:any;
newPageNum:any;
loading:any;
propertySearch:any;
studioClass:any;
citys:any;
heading:any;
studioClass1:any;
  studioClass2:any;
  studioClass3:any;
  studioClass4:any;
  len:any;
  studios:any ='';
  lanCss:any;
studioValue:Array<any> = [];
languageSelected : any;
languages : Array<LanguageModel>;
selectOptions:any;
selectMinPrice:any;
selectMaxPrice:any;  
errMsg:any;
searchNumber:any;
numbers = ['1','2','3','4','5','6','7','8','9','10+'];
rooms =['1.5','2','2.5','3','3.5','4','4.5','5','6+'];
minSellList=['300,000','450,000','600,000','750,000','900,000','1,000,000','1,500,000','2,000,000','2,500,000','3,000,000','3,500,000','40,00,000'];
minrooms =['1.5','2','2.5','3','3.5','4','4.5','5'];
maxSellList=['300,000','450,000','600,000','750,000','900,000','1,000,000','1,500,000','2,000,000','2,500,000','3,000,000','3,500,000','40,00,000'];
  constructor(public events: Events,public languageService: LanguageServiceProvider,public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public poviderForAllProvider:PoviderForAllProvider,public translate: TranslateService,
    public toastController:ToastController,public loadingCtrl:LoadingController,public fb:FormBuilder,public ToastController:ToastController,public modalCtrl:ModalController) {
      this.languages = this.languageService.getLanguages();  
      this.getUserDetails(); 
      this.getSellProperty();
      this.getCity();
  }

  ngOnInit(){
    this.sellForm = this.fb.group({
     city: ['', Validators.compose([Validators.required])],
     minmaxprice:[{upper:5000000,lower:100000}, Validators.compose([Validators.required])],
     bedroom:['', Validators.compose([Validators.required])],
     bathrooms:['', Validators.compose([Validators.required])],
     token:[],
     paged:['', Validators.compose([Validators.required])],
     minPrice:['', Validators.compose([Validators.required])],
     maxPrice:['', Validators.compose([Validators.required])],
     studio:[],
     floor:['', Validators.compose([Validators.required])],
     propertyType:['', Validators.compose([Validators.required])],
     minfloor:[''],
     maxfloor:[''],
     minRoom:[''],
     maxRoom:['']

   })
  }


  slidePrev(i) {
    this.slide.toArray()[i].slidePrev(500);

    // console.log(this.slide);
    // this.slide.forEach((slideInstance) => {
    //   // console.log("SLIDE INSTANCE ========== ",slideInstance);
    //    console.log("slide Instance == ",slideInstance.id+" Slide Length  == "+slideInstance.length());
    //   if(i<slideInstance.id && this.slide.length<=slideInstance.id){
    //   i = slideInstance.id+i;
    //   }
  
    //   if(slideInstance.id == i){
    //     console.log("SLIDE INSTANCE 22222== ",slideInstance.id);
    //     //slideInstance.id = s;
    //     slideInstance.slidePrev(); 
    //  }
    // }); 
  }
  
  
  slideNext(i) {
    console.log("I ==== "+i);
    this.slide.toArray()[i].slideNext(500);

    // console.log(this.slide);
    // this.slide.forEach((slideInstance) => {
    //   // console.log("SLIDE INSTANCE ========== ",slideInstance);
    //    console.log("slide Instance == ",slideInstance.id+" Slide Length  == "+slideInstance.length());
    //   if(i<slideInstance.id && this.slide.length<=slideInstance.id){
    //   i = slideInstance.id+i;
    //   }
    //   if(slideInstance.id == i){
    //     console.log("SLIDE INSTANCE 22222== ",slideInstance.id);
    //     //slideInstance.id = s;
    //     slideInstance.slideNext();  
    //  }
    // });
  
  }
  
  

  CheckMap(){
    if(this.pet=="albums"){
      
      setTimeout(
        (z)=> {
          this.initMap();
        }, 1000);
    }
  }

  ionViewDidLoad() {
    // this.getSellProperty();
    console.log('ionViewDidLoad PropertiesForSellPage');
    // this.initMap();

  }

  getSellProperty(){

    this.storage.get('user').then((val) => {
      this.token =val.token;
      console.log("Token === "+this.token);
      // this.showLoader();
      this.poviderForAllProvider.getSellProperty(this.token,1).subscribe(res=>{
        console.log("RENT PROPERTY RESPONSE == "+JSON.stringify(res));
        this.properties=[];
        this.propPage=res.paged;
        this.maxPages=res.max_num_pages;
        this.properties.push(res.property);
       this.CheckMap();
      //  this.loading.dismiss();
        console.log("ALL RENT PROPERTIES == "+JSON.stringify(this.properties));
      })
    })
  }


//INFINITY SCROllER

// doInfinite(infiniteScroll,getPageNum) {

//   this.newPageNum = parseInt(getPageNum)+parseInt('1');

//   if(this.newPageNum<=this.maxPages){
//       this.propPage = this.newPageNum;
   
//   this.poviderForAllProvider.getSellProperty(this.token,this.newPageNum).subscribe(data => {

//     this.propPage=data.paged;
   
//     for(let i=0;i<data.property.length;i++){
//           console.log("Loop Data === "+JSON.stringify(data));
//               this.properties[0].push(data.property[i]);
//           }
//       infiniteScroll.complete();

//   })
//  }else{          
//      console.log("YOUR LIMIT IS DONE");
//      infiniteScroll.complete();
//  }

// }

doInfinite(infiniteScroll, getPageNum) {
  if (this.propertySearch == undefined || getPageNum == undefined) {
    console.log("SCrolling BAnd ==========================]");
    infiniteScroll.complete();
  }
  else if (this.propertySearch.paged <= this.maxPages) {
    console.log("current PAGE ==" + this.propertySearch.paged);
    this.propertySearch.paged = parseInt(this.propertySearch.paged) + 1;
    this.poviderForAllProvider.post('filterProperties', this.propertySearch).subscribe(res => {
      console.log(" infinity ResPons =",res);
      if (res.property) {
        infiniteScroll.complete();
        for (let i = 0; i < res.property.length; i++) {
          this.properties[0].push(res.property[i]);
        }
        this.propPage = res.paged;
        this.maxPages = res.max_num_pages;
        this.propertySearch = this.propertySearch;
      }
    })
  }
  infiniteScroll.complete();
}


showLoader(){
  this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  this.loading.present();
}

  // OPEN PROPERTY DETAILS
  openPropertyDetail(propertyDetails:any){
    console.log('send Details'+JSON.stringify(propertyDetails));    
  this.navCtrl.push('page-propertyinfo',
  {
    'propertyDetails':propertyDetails
  });
  }
////===========================================

  initMap() {
    // FORM DATA======================================================

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {
        lat: this.properties[0][0].lat,
        lng: this.properties[0][0].long
      }  
    }); 
    // this.directionsDisplay.setMap(this.map);
    if(this.properties){
      console.log(" MAP PROPERTIES IF CONDITIONS================= "+JSON.stringify(this.properties));
    for(let i=0;i<this.properties[0].length;i++){
      console.log("LAT deed"+JSON.stringify(this.properties[0]));
      
      var marker = new google.maps.Marker({
      position:  {
        lat: this.properties[0][i].lat,
        lng: this.properties[0][i].long
      },
      map: this.map,
      title: 'Hello World!'
    });
let title= this.properties[0][i].title;
let image =this.properties[0][i].picture;
let price =this.properties[0][i].price;

console.log("POPUP TITLE ==============="+title);
let pid = this.properties[0][i].id;

console.log("P ID ++++============================== "+pid);
    var infowindow = new google.maps.InfoWindow();
    var service = google.maps.places.PlacesService(this.map);
        google.maps.event.addListener(marker,'click',function(){ 
          infowindow.setContent('<div class='+'mapDiv'+'>'+'<h6>'+title+'</h6>'+'<p class='+'price'+'>'+price+'</p>'+
          '<img class='+'mapImg'+' src="'+image+ '" id=' + pid + '>'
          +'</div>');
          infowindow.open(this.map, this);
        })
        this.directionsDisplay.setMap(this.map);
      }
      
    }else{

    }

  }


  doSomething(ev: any) {
    // console.log("TEST=============",ev.target.id);
  
    if (ev.target.id) {
      var a = parseInt(ev.target.id);
      console.log("ALL PROPERTIES ============== "+this.properties[0]);
      console.log("PROP ID === "+a);
      let index = this.properties[0].findIndex(x => x.id == a);
  
      console.log(index);
      console.table(this.properties[0][index]);
      // this.openPropertyDetail(this.properties[index]);
      this.navCtrl.push('page-propertyinfo',
        {
          'propertyDetails': this.properties[0][index]
        });
      //  console.log('open inapp');
      //  this.iab.create(ev.target.href, "_system");
      return false;
    }
  }
  

  // Set fvrt
  favorite(property,status){
    console.log("prop  == "+JSON.stringify(property)+"STATUS == "+status);
     this.storage.get('user').then((val) => {
       console.log("USER INFO === "+val.token);
       if(val.token){
         this.poviderForAllProvider.favorite(property,val,status).then(changeProperty => {
           let resssp = changeProperty.json();
           console.log("Only REsponse ="+JSON.stringify(resssp)+"LENGTH =========="+this.properties[0].length);


           for(let i=0; i<this.properties[0].length;i++){

             console.log("INSIDE LOOP === "+this.properties[0][i].id);

             if(this.properties[0][i].id == property.id){
              this.properties[0][i].status =status;
              
                console.log("PROPERTY TITLE ==== "+this.properties[0][i].title);
             }
           }
           
 
          let toast = this.toastController.create({
              message: resssp.response,
              cssClass: 'mytoast',
              duration: 2000
          });
          toast.present(toast);
      });
       }
     })
     console.log("PROPERTY "+JSON.stringify(property)+" Staus == "+status);
    
 
   }
 //  end favrt

 // FOR Search result
 sendData(value,num){ 

  console.log("SEARCH  === ",value);
  this.searchNumber=num;
  if(this.searchNumber =='1'){
  this.sellForm.value.furniture='';  
  this.sellForm.value.amenities='';
  this.sellForm.value.Type='';
  }
  value.paged=1;
  console.log("Search list  == ",value);


  this.loaderPresent();
  this.poviderForAllProvider.post('filterProperties',value).subscribe(res => {
    if(res.property){
      this.loading.dismiss();
      this.errMsg='';
      this.properties=[];
      this.properties.push(res.property);
      this.propPage = res.paged;
      this.maxPages=res.max_num_pages;
      this.propertySearch=value;
      console.log("SEARCH RESPONSE"+JSON.stringify(res));
    }
     if(res.not_found){
      this.loading.dismiss();
      this.showToast(res.not_found);
      this.errMsg=res.not_found;
    }
    if(res.max_num_pages >0){
      this.titlechange ='Search Result';
    }
    
    },err=>{
      console.log(err);
      this.loading.dismiss();
    }),errs=>{
      console.log(errs);   
      this.loading.dismiss();
  };
}

//END
// 

//GET CITY=======
getCity() {
  this.storage.get('user').then((val) => {
    console.log("prop rent Ts == "+val.token);
    this.poviderForAllProvider.newgetCity(val.token).then(
    data => {
       this.citys = data.res;
    })
  })
}


loaderPresent(){
  this.loading = this.loadingCtrl.create();
 this.loading.present();
 }

  // Show Toast 
 
  showToast(toastMsg){
    let toast = this.ToastController.create({
      message: toastMsg,
      duration: 2000
         });
      toast.present(toast);
      }

// SET STUDIO'S====================
setstudio(studio,formVal){

  this.len = this.studioValue.length;
  if(this.len==0){
    this.studioValue.push(studio);
    formVal.studio=this.studioValue;
    this.studioClass1=studio;
    this.studioClass2=studio;
    this.studioClass3=studio;
    this.studioClass4=studio;
    this.len = this.studioValue.length;

  }else{

   let match = this.studioValue.indexOf(studio);
   if(match >-1){
    let val =this.studioValue[match];
    if(val==1){
     this.studioClass1=5;
    }
   if(val==2){
     this.studioClass2=5;

    }
    if(val==3){
     this.studioClass3=5;

   }
   if(val==4){
     this.studioClass4=5;

   }

    this.studioValue.splice(match, 1);
    formVal.studio=this.studioValue;
    this.len = this.studioValue.length;
   }else{
    this.studioValue.push(studio);
    this.len = this.studioValue.length;
console.log("LENGTH == "+this.len);
    console.log("ELSE",this.studioValue);
    formVal.studio=this.studioValue;
   }

    

  }

  console.log("I AM WORK"); 
   for(let i =0;i<this.len;i++ ){

     var val =this.studioValue[i];
     console.log("VALUE == "+val);
     if(val==1){
      this.studioClass1=val;
     }
    if(val==2){
      this.studioClass2=val;

     }
     if(val==3){
      this.studioClass3=val;

    }
    if(val==4){
      this.studioClass4=val;

    }

   }

}


// ADVANCE FILTER
// advanceFilter(){
//   this.heading="Advance Search Results";
//       let modal = this.modalCtrl.create('page-property-filter');
//           modal.present();
//            modal.onDidDismiss(data => {
//             // console.log("HOM E RES == "+JSON.stringify(data.property.length));
//             if(data ==undefined){
              
//             }
//           else if(data.property){
//             this.properties=[];
//             this.properties.push(data.property);
//             this.propPage = data.paged;
//             this.maxPages=data.max_num_pages;
//             this.titlechange ='Advance Search Result';
//           }
//           else if(data.not_found){
//             console.log("PROPERTIES length "+this.properties.length);
//             this.showToast(data.not_found);
//           }   
//         });
//       }

advanceFilter(){  
  let modal = this.modalCtrl.create('page-property-filter', this.sellForm.value);
  modal.present();
  modal.onDidDismiss(data => {
  console.log("ADVANCE FILTER RESPONSE    ==== ",data); 
  if(data){
  console.log("IF CONDITIONss== ");
  this.sellForm.value.furniture=data.value.furniture;  
  this.sellForm.value.amenities=data.value.amenities;
  this.sellForm.value.Type=data.value.Type;
  this.sendData(this.sellForm.value,'2');
  }else{
    console.log('Null DATA  === ',data);
  } 
  
  });

  }
// END 

setStudioValue(val){
  console.log("Studio ==="+val);
    this.studios=val;  
  }

  getUserDetails(){
    this.storage.get('user').then(details =>{
      console.table(details);
      this.translate.use(details.selected_language);
      this.lanCss = details.selected_language;
      console.log(" LANGUAGE CSS "+this.lanCss);
      console.log("user language ======= ",details.selected_language);
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
      })
      console.table(details);
      details.selected_language=this.languageSelected;
      this.lanCss=this.languageSelected;

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




}