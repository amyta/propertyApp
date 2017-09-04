import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tenant-profile',
  templateUrl: 'tenant-profile.html',
})
export class TenantProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TenantProfilePage');
  }

  public goBack() {
    this.navCtrl.pop()
  }

}
