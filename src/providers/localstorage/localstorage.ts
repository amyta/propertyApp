import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

@Injectable()
export class LocalstorageProvider {
  public property: any;

  constructor(public http: Http, private storage:Storage) {
    console.log('Hello LocalstorageProvider Provider');
  }

  //store the email address
  setProperty(property){
  this.storage.set('property',property);
  console.log(property)
  }

  //get the stored email
  getProperty(){
    this.storage.get('property').then(property => {
      this.property = property;
    });
    return this.property;
  }

  //delete the email address
  removeEmail(){
  this.storage.remove('email').then(()=>{
      console.log('email is removed');
    });
  }

  //clear the whole local storage
  clearStorage(){
    this.storage.clear().then(()=>{
  console.log('all keys are cleared');
    });
  }

}
