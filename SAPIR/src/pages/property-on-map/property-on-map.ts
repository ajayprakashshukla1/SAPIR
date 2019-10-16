import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
declare var google;

/**
 * Generated class for the PropertyOnMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'page-property-on-map'
})
@Component({
  selector: 'page-property-on-map',
  templateUrl: 'property-on-map.html',
})
export class PropertyOnMapPage {
  propertyInfo=[];
  map:any;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.propertyInfo=this.navParams.get('property');
    console.log("properties"+JSON.stringify(this.propertyInfo));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyOnMapPage');
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
              lat: this.propertyInfo[0][0].lat,
              lng: this.propertyInfo[0][0].long
            }
          }); 
          for(let i=0;i<this.propertyInfo[0].length;i++){
            console.log("LAT "+JSON.stringify(this.propertyInfo[0]));
            
            var marker = new google.maps.Marker({
            position:  {
              lat: this.propertyInfo[0][i].lat,
              lng: this.propertyInfo[0][i].long
            },
            map: this.map,
            title: 'Hello World!'
          });
let title= this.propertyInfo[0][i].title;
let image =this.propertyInfo[0][i].picture;
let price =this.propertyInfo[0][i].price;

console.log("POPUP TITLE ==============="+title);
          var infowindow = new google.maps.InfoWindow();
          var service = google.maps.places.PlacesService(this.map);
              google.maps.event.addListener(marker,'click',function(){ 
                infowindow.setContent('<div class='+'mapDiv'+'>'+'<h6>'+title+'</h6>'+'<p class='+'price'+'>'+price+'</p>'+
                '<img class='+'mapImg'+' src="'+image+'">'
                +'</div>');
                infowindow.open(this.map, this);
              })
              this.directionsDisplay.setMap(this.map);

            }

  }

}
