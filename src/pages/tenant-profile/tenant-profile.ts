import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RepairRequestPage } from '../repair-request/repair-request';

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

  public goRepairRequest() {
    this.navCtrl.push(RepairRequestPage);
  }

}
