import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html'
})
export class RentPage {
  public months: Array<String>;

  constructor(public navCtrl: NavController) {
    this.months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  }

}
