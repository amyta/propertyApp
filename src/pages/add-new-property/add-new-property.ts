import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LocalstorageProvider } from '../../providers/localstorage/localstorage';

@Component({
  selector: 'page-add-new-property',
  templateUrl: 'add-new-property.html',
})
export class AddNewPropertyPage {
  private property : FormGroup;
  public nickname: string;
  address: string;
  rent: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
  private storage: Storage, private formBuilder: FormBuilder, private localstorage: LocalstorageProvider) {
    this.property = this.formBuilder.group({
      nickname: ['', Validators.required],
      address: [''],
      rent: ['']
      // rentReminder: [''],
      // rentDueDate: [''],
      // tenant: ['']
    });
  }

  addProperty() {
  debugger;
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let property = {
    nickname: this.property.value.nickname,
    address: this.property.value.address,
    rent: this.property.value.rent    
  }

  this.http.post('/api/properties', property, {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      console.log(data)
    });
  }

  // logForm(){
  //   this.localstorage.setProperty(this.property.value);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPropertyPage');
  }

  public goBack() {
    this.navCtrl.pop()
  }

}
