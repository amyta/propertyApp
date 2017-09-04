import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-new-property',
  templateUrl: 'add-new-property.html',
})
export class AddNewPropertyPage {
  public tenants: string = "Vacant";
  public myDate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPropertyPage');
  }

  public goBack() {
    this.navCtrl.pop()
  }

}
