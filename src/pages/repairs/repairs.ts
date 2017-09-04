import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RepairRequestPage } from '../repair-request/repair-request';

@Component({
  selector: 'page-repairs',
  templateUrl: 'repairs.html',
})
export class RepairsPage {
  public repairStatus: string = "new";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepairsPage');
  }

  public goRepairRequest() {
    this.navCtrl.push(RepairRequestPage);
  }

  public changeRepairStatus(status:string) {
    // this.repair.status === status;
  }
}
