import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PropertiesPage } from '../pages/properties/properties';
import { PropertyProfilePage } from '../pages/property-profile/property-profile';
import { AddNewPropertyPage } from '../pages/add-new-property/add-new-property';
import { RentPage } from '../pages/rent/rent';
import { TenantsPage } from '../pages/tenants/tenants';
import { TenantProfilePage } from '../pages/tenant-profile/tenant-profile';
import { AddNewTenantPage } from '../pages/add-new-tenant/add-new-tenant';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RentPage,
    TenantsPage,
    TenantProfilePage,
    AddNewTenantPage,
    HomePage,
    PropertiesPage,
    PropertyProfilePage,
    AddNewPropertyPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RentPage,
    TenantsPage,
    TenantProfilePage,
    AddNewTenantPage,
    HomePage,
    PropertiesPage,
    PropertyProfilePage,
    AddNewPropertyPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}