import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UpdatePhoneNumberPage } from '../update-phone-number/update-phone-number';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  public goUpdatePhoneNumberPage() {
    this.navCtrl.push(UpdatePhoneNumberPage);
  }

}
