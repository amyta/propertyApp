import { Component } from '@angular/core';

import { RentPage } from '../rent/rent';
import { TenantsPage } from '../tenants/tenants';
import { HomePage } from '../home/home';
import { PropertiesPage } from '../properties/properties';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PropertiesPage;
  tab3Root = RentPage;
  tab4Root = TenantsPage;

  constructor() {

  }
}
