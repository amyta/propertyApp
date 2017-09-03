import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TenantProfilePage } from '../tenant-profile/tenant-profile';
import { AddNewTenantPage } from '../add-new-tenant/add-new-tenant';

@Component({
  selector: 'page-tenants',
  templateUrl: 'tenants.html'
})
export class TenantsPage {

  constructor(public navCtrl: NavController) {

  }
  public goTenantProfile() {
      this.navCtrl.push(TenantProfilePage);
  }

  public goAddNewTenant() {
      this.navCtrl.push(AddNewTenantPage);
  }
}
