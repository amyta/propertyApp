import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { ModalController } from 'ionic-angular';

import { AddNewPropertyPage } from '../add-new-property/add-new-property';
import { PropertyProfilePage } from '../property-profile/property-profile';

@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html'
})
export class PropertiesPage implements OnInit {
  public propertyList: any;
  public property: any;
  public users: any;

  constructor(public navCtrl: NavController, public http: Http,
  public modalCtrl: ModalController) {
		}

	ngOnInit() {
  }

  ionViewDidLoad(){
  this.http.get('https://obscure-reef-64251.herokuapp.com/api/properties')
    .map(res => res.json())
    .subscribe(data => {
      this.property = data;
    });
  }
    
  public goAddNewProperty() {
    let modal = this.modalCtrl.create(AddNewPropertyPage);
    modal.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  public goPropertyProfile() {
      this.navCtrl.push(PropertyProfilePage);
  }

  public goRootPage(tabIndex:number) {
      this.navCtrl.parent.select(tabIndex);
  }
}
