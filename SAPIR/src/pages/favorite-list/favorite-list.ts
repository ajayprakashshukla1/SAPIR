import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastCmp, ToastController } from 'ionic-angular';
import{FavouriteProvider} from '../../providers/favourite/favourite';
import{Storage} from '@ionic/storage';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageModel } from "../../models/language.model";
import { LanguageServiceProvider } from '../../providers/language-service/language-service';
import{PoviderForAllProvider} from '../../providers/povider-for-all/povider-for-all';
import { Events } from 'ionic-angular';

/**
 * Generated class for the FavoriteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-favorite-list'
})

@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html',
})

export class FavoriteListPage {
loading:any;

favorites: Array<any> = [];
loadingContent: Boolean = true;
propPage:number;
maxPages:any;
newPageNum:any;
properties:any;
userToken:any;
languageSelected : any;
languages : Array<LanguageModel>;
lanCss:any;
  constructor(public languageService: LanguageServiceProvider,public poviderForAllProvider:PoviderForAllProvider,public navCtrl: NavController, public navParams: NavParams,public favouriteProvider:FavouriteProvider,public loadingCtrl:LoadingController,
    public storage:Storage,public toastCtrl:ToastController,public translate: TranslateService,public events: Events) {
      this.languages = this.languageService.getLanguages();  
      this.getUserDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriteListPage');
    this.getFavouriteProperty();

  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter========================== FavoriteListPage');
    // this.getFavouriteProperty();

  }
 
  // GET PROPERTY
  getFavouriteProperty(){
    // this.showLoader();
    this.newPageNum =this.propPage+1;
    //console.log("GET PAGE NUm ="+this.propPage+"  .PAGE ==== "+this.newPageNum);
    this.storage.get('user').then((val) => {
        this.userToken=val.token;
        console.log("TOKEN   ==== "+this.userToken);
        console.log("USER TOKEN ="+this.userToken+"NEW PAGE NUMBER ======="+this.newPageNum);
        this.favouriteProvider.getFavorites(1,this.userToken)
        .then(data => {
            console.log("FAVORITES DATA === "+JSON.stringify(data));

            if(data.property){
                this.favorites = data.property;
            }    
            this.propPage = data.paged;
            this.maxPages=data.max_num_pages;
            if(this.maxPages==0){
                this.favorites =[];
            }
            console.log("GET PAGE NUm ="+this.propPage+"  .PAGE ==== "+this.maxPages);
            this.loadingContent = false; }); 

      }); 
      // this.loading.dismiss();
  }

  // DELETE PROPERTY
  deleteItem(favorite) {
       console.log("UNFAVOURITE");
    this.storage.get('user').then((val) => {
    this.favouriteProvider.favorite(favorite,val,0)
    .then(property => {
        let favPropLength = this.favorites.length;
        for(let i=0;i<favPropLength;i++){
            if(this.favorites[i].id==favorite.id){
                this.favorites.splice(i, 1);
                console.log("FAVORITE PROPERT MATCHED == "+this.favorites[i].id);
            }else{
                console.log("NOT MATCHED == "+this.favorites[i].id);

            }
        }
        var msg = property.json().response;
        console.log("MESSAGE  == "+msg);
        let toast = this.toastCtrl.create({
            message: msg,
            cssClass: 'mytoast',
            duration: 2000
        });
        toast.present(toast);
    })
    .catch(
        error => console.log(JSON.stringify(error))
        );
    });

}

   
    //INFINITY SCROllER

    doInfinite(infiniteScroll,getPageNum) {   
      // infiniteScroll.complete();
      console.log("PAGE NUM ="+getPageNum);
      this.newPageNum = parseInt(getPageNum)+parseInt('1');
      console.log("ADD page = "+this.newPageNum+ "  OLD PAGE NUM = "+getPageNum+" max PAGE "+this.maxPages);

      if(this.newPageNum<=this.maxPages){
          this.propPage = this.newPageNum;
      //    alert("NEW PAGE NUM = "+this.newPageNum+"MAX PAGES "+this.maxPages);
          console.log("IN IF CONDITION ="+"MAX PAGES = "+this.maxPages+" NEW PAGE NUMBER ="+this.newPageNum);
      this.favouriteProvider.getFavorites(this.newPageNum,this.userToken)
      .then(data => {
          this.propPage = data.paged;
          this.maxPages = data.max_num_pages;
          console.log("Scrooling Response == "+JSON.stringify(data)+" ========= Scrooling DATA LEANGTH ========="+data.property.length);
              for(let i=0;i<data.property.length;i++){
                  this.favorites.push(data.property[i]);
              }
             this.loading = false; 
      }).catch(error => alert(error));
      console.log('Begin async operation');
     infiniteScroll.complete();
     }else{          
         console.log("YOUR LIMIT IS DONE");
         infiniteScroll.complete();
     }

  }

  //Property Details

  itemTapped(favorite) {
		this.navCtrl.push('page-propertyinfo', {
			'id': favorite.id,
			'propertyDetails': favorite
		});
    }


// DELETE PROPERTY END
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  getUserDetails(){
    this.storage.get('user').then(details =>{
      console.table(details);
      this.translate.use(details.selected_language);
      this.lanCss = details.selected_language;
      console.log(" LANGUAGE CSS "+this.lanCss);
      console.log("user language ======= ",details.selected_language);
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
      console.log("user details",details);
      this.storage.set('user',details);
      this.lanCss =  this.languageSelected;
      this.events.publish('lan:created', details.selected_language); 

    })
  }else{
    this.languageSelected = defaultLanguage;
    this.translate.use(defaultLanguage);

  }
}

  
  

}
