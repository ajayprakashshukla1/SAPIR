import { Component ,ElementRef,  ViewChild,QueryList,ViewChildren} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController ,ModalController,Slides} from 'ionic-angular';
import {PoviderForAllProvider } from '../../providers/povider-for-all/povider-for-all';
import { Storage } from '@ionic/storage';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import { Events } from 'ionic-angular';

declare var google;

/**
 * Generated class for the PropertiesForRentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-properties-for-rent'
})
@Component({
  selector: 'page-properties-for-rent',
  templateUrl: 'properties-for-rent.html',
})
export class PropertiesForRentPage {
  @ViewChildren(Slides) slide : QueryList<Slides>;

public rentForm: FormGroup;
titlechange:any="Recently Added";
token:any;
properties:any=[];
pet="featured";
map;
propertyNullMsg:any;
hideProperty:any;
NotFoundMsg:any;
propPage:any;
maxPages:any;
loading:any;
newPageNum:any;
propertySearch:any;
directionsDisplay = new google.maps.DirectionsRenderer;
citys:any;
studioClass:any;
heading:any;
selectMinPrice:any;
selectMaxPrice:any;  
numbers = ['1','2','3','4','5','6','7','8','9','10+'];
rooms =['1.5','2','2.5','3','3.5','4','4.5','5','6+'];
minrooms =['1.5','2','2.5','3','3.5','4','4.5','5'];
studioClass1:any;
studioClass2:any;
studioClass3:any;
studioClass4:any;
len:any;
lanCss:any;
selectOptions:any;
studioValue:Array<any> = [];
studios:any ='';
languageSelected : any;
languages : Array<LanguageModel>;
errMsg:any;

maxRentPriceList=['1,000','1,500','2,000','2,500','3,000','3,500','4,000','4,500','5,000','5,500','6,000','6,500','7,000','7,500','8,000','8,500','9,000','9,500','10,000','10,500','11,000','11,500','12,000','12,500','13,000','13,500','14,000','14,500','15,000','15,500',
'16,000','16,500','17,000','17,500','18,000','18,500','19,000','19,500','20000'];

minRentPriceList=['1,000','1,500','2,000','2,500','3,000','3,500','4,000','4,500','5,000','5,500','6,000','6,500','7,000','7,500','8,000','8,500','9,000','9,500','10,000','10,500','11,000','11,500','12,000','12,500','13,000','13,500','14,000','14,500','15,000','15,500',
'16,000','16,500','17,000','17,500','18,000','18,500','19,000','19,500','20000'];

filter:any=0;
filterData:any=[];

constructor(public languageService: LanguageServiceProvider,public navCtrl: NavController, public navParams: NavParams, public poviderForAllProvider:PoviderForAllProvider,
  public storage:Storage, public events: Events,
    public toastController:ToastController,public loadingCtrl:LoadingController,public fb:FormBuilder,public modalCtrl:ModalController,public translate: TranslateService ) {
      this.languages = this.languageService.getLanguages();  
      this.getUserDetails();
     this.getCity();
    this.getRentProperty();
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
    console.log('ionViewDidLoad PropertiesForRentPage');
    this.getCity();

  }

  setStudioValue(val){
    console.log("Studio ==="+val);
      this.studios=val;
      
    }

  ngOnInit(){
    this.rentForm = this.fb.group({
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
  console.log(this.slide);
  this.slide.toArray()[i].slidePrev(500);

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
}


  getRentProperty(){
    this.storage.get('user').then((val) => {
      this.token =val.token;
      console.log("Token === "+this.token);    
      // this.showLoader();

      this.poviderForAllProvider.getRentProperty(this.token,1).subscribe(res=>{
        console.log("RENT PROPERTY RESPONSE == "+JSON.stringify(res));
        if(res.property){
          this.errMsg='';
          this.propertyNullMsg=res.msg;
          this.hideProperty=false;
          this.NotFoundMsg=true;
          // this.loading.dismiss();
      }else{

     // this.properties.push(data.property);
      console.log("PROPERTY DETAILS === "+JSON.stringify(res));
       let dataPropLength =res.property.length;

      for(let i=0;i<dataPropLength;i++){
          this.properties.push(res.property[i]);

      }
//  this.loading.dismiss();
      this.propPage = res.paged;
      this.maxPages=res.max_num_pages;
      this.loading = false;
    }
        this.properties=[];
        this.properties.push(res.property);
        console.log("ALL RENT PROPERTIES == "+JSON.stringify(this.properties));
      })
  
    })
  }


  //INFINITY SCROllER

// doInfinite(infiniteScroll,getPageNum) {

//   this.newPageNum = parseInt(getPageNum)+parseInt('1');

//   if(this.newPageNum<=this.maxPages){
//       this.propPage = this.newPageNum;
   
//   this.poviderForAllProvider.getRentProperty(this.token,this.newPageNum).subscribe(data => {

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




// doInfinite(infiniteScroll,getPageNum) {
//   console.log("FILTER VAL === "+this.filter);
//   this.newPageNum = parseInt(getPageNum)+parseInt('1');
//   if(this.newPageNum<=this.maxPages){
//       this.propPage = this.newPageNum;
   
// if( this.filter ==0){
//   this.poviderForAllProvider.getRentProperty(this.token,this.newPageNum).subscribe(data => {

//     this.propPage=data.paged;
   
//     for(let i=0;i<data.property.length;i++){
//           // console.log("Loop Data === "+JSON.stringify(data));
//               this.properties[0].push(data.property[i]);
//           }
//       infiniteScroll.complete();

//   })
// }else{
  
//   console.log("Filter data == ",this.filterData);
//   this.filterData.paged
//   var nxtpage = parseInt(this.filterData.paged)+1;
//   this.filterData.paged =nxtpage;
//   console.log("Filter data Next== ",this.filterData);
//   if(this.filterData.paged <=this.maxPages){
//   this.poviderForAllProvider.post('filterProperties',this.filterData).subscribe(res => {
// console.log("Filter response === ",res);
//     if(res.property){ 
//       infiniteScroll.complete();
//       for(let i=0;i<res.property.length;i++){
//         console.log("Loop ",res.property[i]);
//       this.properties[0].push(res.property[i]);
//       }
//       this.propPage = res.paged;
//       this.maxPages=res.max_num_pages;
      
//       }

//      console.log('Add prop ',this.properties);
    
//     },err=>{
//       console.log(err);
//       this.loading.dismiss();
//     }),errs=>{
//       console.log(errs);   
//       this.loading.dismiss();
//   };
//   }
// }
//  }else{          
//      console.log("YOUR LIMIT IS DONE");
//      infiniteScroll.complete();
//  }

// }


doInfinite(infiniteScroll, getPageNum) {
  console.log("INFINITY SCROLL");

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


  openPropertyDetail(propertyDetails:any){
    console.log('send Details'+JSON.stringify(propertyDetails));    
  this.navCtrl.push('page-propertyinfo',
  {
    'propertyDetails':propertyDetails
  });
  }


  initMap() {
    console.log(" MAP PROPERTIES ================= "+JSON.stringify(this.properties));
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
let pid = this.properties[0][i].id;

console.log("POPUP TITLE ==============="+title);
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
  

  // Set fvrt=======================================
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



 // FOR Search result
 sendData(value,num){ 
  value.paged=1;
  this.filterData=value;
this.loaderPresent();
  this.poviderForAllProvider.post('filterProperties',value).subscribe(res => {
    if(res.property){
      this.loading.dismiss();
      this.properties=[];
      this.properties.push(res.property);
      this.propPage = res.paged;
      this.maxPages=res.max_num_pages;
      this.propertySearch=value;
      this.errMsg='';

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

// ADVANCE FILTER 
// advanceSearch(){   

//   console.log("ADVANCE SEARCH =====");
//   this.heading="Advance Search Results";
//   let modal = this.modalCtrl.create('page-property-filter',this.rentForm.value);
//       modal.present();
//       modal.onDidDismiss(data => {
//         console.log("HOM E RES == "+JSON.stringify(data));
//         if(data ==undefined){
//           console.log("undefined==============================");
//         }
//       else if(data.property){
//         this.properties=[];
//         this.properties.push(data.property);
//         this.propPage = data.paged;
//         this.maxPages=data.max_num_pages;
//           this.titlechange ='Advance Search Results';
//         console.log("PROP PAGES == "+this.propPage+" MAX PAGES === "+this.maxPages);
//       }
//       else if(data.not_found){
//         let toast = this.toastController.create({
//           message: data.not_found,
//           cssClass: data.not_found,
//           duration: 2000
//       });
//       toast.present(toast);
//       }	  
//     });
// }

advanceFilter(){  
  let modal = this.modalCtrl.create('page-property-filter', this.rentForm.value);
  modal.present();
  modal.onDidDismiss(data => {
  console.log("ADVANCE FILTER RESPONSE    ==== ",data); 
  if(data){
  console.log("IF CONDITIONss== ");
  this.rentForm.value.furniture=data.value.furniture;  
  this.rentForm.value.amenities=data.value.amenities;
  this.rentForm.value.Type=data.value.Type;
  this.sendData(this.rentForm.value,'2');
  }else{
    console.log('Null DATA  === ',data);
  } 
  
  });

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

loaderPresent(){
  this.loading = this.loadingCtrl.create();
 this.loading.present();
 }
 // Show Toast 
 
 showToast(toastMsg){
  let toast = this.toastController.create({
    message: toastMsg,
    duration: 2000
       });
    toast.present(toast);
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
