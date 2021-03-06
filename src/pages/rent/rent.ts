import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html'
})
export class RentPage {
  public year: string = "2017";
  public months: Array<String>;
  public select: boolean = false;

  constructor(public navCtrl: NavController) {
    this.months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  }

  public getRentStatusColor(rentStatus:string) {
    let rentStatusColor = '';

    if (rentStatus === 'PAST DUE') {
      rentStatusColor = 'red';
    } else if (rentStatus === 'DUE') {
      rentStatusColor = 'orange';
    } else if (rentStatus === 'PAID') {
      rentStatusColor = 'green';
    }
  }

  public sendReminder() {
    this.select = !this.select;
    // let i in propertyList;
    // if (propertyList[x].checked === true) {
    //   send reminder
    // } else {
    //   this.select = !this.select;
    // }
  }

}
