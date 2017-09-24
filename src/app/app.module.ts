import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { PropertiesPage } from '../pages/properties/properties';
import { PropertyProfilePage } from '../pages/property-profile/property-profile';
import { AddNewPropertyPage } from '../pages/add-new-property/add-new-property';
import { RentPage } from '../pages/rent/rent';
import { TenantsPage } from '../pages/tenants/tenants';
import { TenantProfilePage } from '../pages/tenant-profile/tenant-profile';
import { AddNewTenantPage } from '../pages/add-new-tenant/add-new-tenant';
import { RepairsPage } from '../pages/repairs/repairs';
import { RepairRequestPage } from '../pages/repair-request/repair-request';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { UpdatePhoneNumberPage } from '../pages/update-phone-number/update-phone-number';

import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { OrdinalPipe } from '../pipes/ordinal/ordinal';
import { PluralPipe } from '../pipes/plural/plural';

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
    RepairsPage,
    RepairRequestPage,
    TabsPage,
    SettingsPage,
    AccountPage,
    UpdatePhoneNumberPage,
    OrdinalPipe,
    PluralPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()    
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
    RepairsPage,
    RepairRequestPage,
    TabsPage,
    SettingsPage,
    AccountPage,
    UpdatePhoneNumberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalstorageProvider
  ]
})
export class AppModule {}
