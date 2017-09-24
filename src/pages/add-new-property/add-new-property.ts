import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-add-new-property',
  templateUrl: 'add-new-property.html',
})
export class AddNewPropertyPage {
  private property : FormGroup;
  reminderDates: Array<number>;  
  monthDates: Array<number>;
  public nickname: string;
  address: string;
  rent: number;
  rentReminder: string;
  rentDueDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
    private formBuilder: FormBuilder) {
    this.property = this.formBuilder.group({
      nickname: ['', Validators.required],
      address: [''],
      rent: [''],
      rentReminder: [''],
      rentDueDate: ['']
      // tenant: ['']
    });

    this.reminderDates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    this.monthDates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  }

  addProperty() {
    debugger;
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  this.http.post('https://obscure-reef-64251.herokuapp.com/api/properties', this.property.value, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data)
      this.navCtrl.pop()      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPropertyPage');
  }

  public goBack() {
    this.navCtrl.pop()
  }

}
