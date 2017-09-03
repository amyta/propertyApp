import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-new-property',
  templateUrl: 'add-new-property.html',
})
export class AddNewPropertyPage {
  public tenants: string = "Add new tenant";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPropertyPage');
  }

}
