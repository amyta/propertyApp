import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';

import { AddNewPropertyPage } from '../add-new-property/add-new-property';
import { PropertyProfilePage } from '../property-profile/property-profile';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

// declare var google;

@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html'
})
export class PropertiesPage implements OnInit {
//   @ViewChild('map') mapElement: ElementRef;
//   public map: any;
  public propertyList: any;
  public property: any;
  public users: any;

	constructor(public navCtrl: NavController, private storage: Storage,
		private localstorage: LocalstorageProvider, public http: Http) {
		}

	ngOnInit() {
  }

	public getPropertyList() {
		// this.localstorage.getProperty();
        this.propertyList = this.localstorage.getProperty();
        console.log(this.localstorage.getProperty());        
	}

  ionViewDidLoad(){
		this.http.get('https://obscure-reef-64251.herokuapp.com/api/properties')
			.map(res => res.json())
			.subscribe(data => {
        this.property = data;
			});
		
    // this.loadMap();
  }

  // loadMap(){
  //   this.geolocation.getCurrentPosition().then((position) => {
 
  //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //     let marker = new google.maps.Marker({
  //       position: latLng,
  //       map: this.map
  //     })

  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
    
  public goAddNewProperty() {
      this.navCtrl.push(AddNewPropertyPage);
  }

  public goPropertyProfile() {
      this.navCtrl.push(PropertyProfilePage);
  }

  public goRootPage(tabIndex:number) {
      this.navCtrl.parent.select(tabIndex);
  }
}
