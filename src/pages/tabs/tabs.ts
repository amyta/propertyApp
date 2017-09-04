import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RentPage } from '../rent/rent';
import { TenantsPage } from '../tenants/tenants';
import { HomePage } from '../home/home';
import { PropertiesPage } from '../properties/properties';
import { RepairsPage } from '../repairs/repairs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PropertiesPage;
  tab2Root = RentPage;
  tab3Root = RepairsPage;
  tab4Root = TenantsPage;

  constructor(public navCtrl: NavController) {
  }
}
