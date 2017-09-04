import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-property-profile',
  templateUrl: 'property-profile.html',
})
export class PropertyProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyProfilePage');
  }

  public goBack() {
    this.navCtrl.pop()
  }

}
