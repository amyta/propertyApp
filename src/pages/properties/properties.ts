import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AddNewPropertyPage } from '../add-new-property/add-new-property';
import { PropertyProfilePage } from '../property-profile/property-profile';

declare var google;

@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html'
})
export class PropertiesPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,
  public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        position: latLng,
        map: this.map
      })

    }, (err) => {
      console.log(err);
    });
  }
    
  public goAddNewProperty() {
      this.navCtrl.push(AddNewPropertyPage);
  }

  public goPropertyProfile() {
      this.navCtrl.setRoot(PropertyProfilePage);
      // let popover = this.popoverCtrl.create(PropertyProfilePage);
      // popover.present()
  }
}
