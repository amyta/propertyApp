import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-new-property',
  templateUrl: 'add-new-property.html',
})
export class AddNewPropertyPage {
  // public tenants: string = "Vacant";
  public myDate;
  public tenants: Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeTenants();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPropertyPage');
  }

  initializeTenants() {
    this.tenants = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  public searchTenant(ev) {
    // Reset items back to all of the items
    this.initializeTenants();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.tenants = this.tenants.filter((tenant) => {
        return (tenant.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public goBack() {
    this.navCtrl.pop()
  }

}
