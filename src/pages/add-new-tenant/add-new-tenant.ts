import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-new-tenant',
  templateUrl: 'add-new-tenant.html',
})
export class AddNewTenantPage {
  public properties: string = "Property #1";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTenantPage');
  }

}
