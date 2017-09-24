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

  this.http.post('https://young-reef-27531.herokuapp.com/api/properties', JSON.stringify(this.property.value), {headers: headers})
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

  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
      first_name: 'foo',
      last_name: 'bar'
    }
    
    this.http.post("https://arcane-everglades-52026.herokuapp.com/", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

}
