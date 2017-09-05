webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewPropertyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewPropertyPage = (function () {
    function AddNewPropertyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeTenants();
    }
    AddNewPropertyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewPropertyPage');
    };
    AddNewPropertyPage.prototype.initializeTenants = function () {
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
    };
    AddNewPropertyPage.prototype.searchTenant = function (ev) {
        // Reset items back to all of the items
        this.initializeTenants();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.tenants = this.tenants.filter(function (tenant) {
                return (tenant.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AddNewPropertyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return AddNewPropertyPage;
}());
AddNewPropertyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-new-property',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/add-new-property/add-new-property.html"*/'<ion-content>\n  <div class="property-profile">\n    <div class="overlay">\n      <button ion-button clear (click)="goBack()">\n        <ion-icon name="arrow-back" style="font-size: 2em"></ion-icon>\n      </button>\n      <ion-input type="name" placeholder="Property Name" class="title"></ion-input>\n      <ion-input type="address" placeholder="Address" class="subtitle"></ion-input>\n    </div>\n  </div> \n\n  <ion-list>\n    \n    <ion-item>\n      <ion-label stacked>Rent Amount</ion-label>\n      <ion-input type="rent" placeholder="Rent Amount"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Set Reminder For Rent Due</ion-label>\n      <ion-input type="rent" placeholder="Days Before Due"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Rent Due Date</ion-label>\n      <ion-datetime displayFormat="D" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <span class="label">Tenant</span>\n      <ion-searchbar (ionInput)="searchTenant($event)"></ion-searchbar>\n      <div class="scrollbar">\n        <ion-list>\n          <ion-item *ngFor="let tenant of tenants">\n            {{ tenant }}\n          </ion-item>\n        </ion-list>\n      </div>\n      <!-- <ion-label stacked>Tenant</ion-label>\n      <ion-select [(ngModel)]="tenants" multiple="true">\n        <ion-option value="Vacant">Vacant</ion-option>\n        <ion-option value="n64">John Smith</ion-option>\n        <ion-option value="ps">Sara</ion-option>\n        <ion-option value="genesis">Sam</ion-option>\n        <ion-option value="saturn">Nicole</ion-option>\n      </ion-select> -->\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/add-new-property/add-new-property.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AddNewPropertyPage);

//# sourceMappingURL=add-new-property.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rent_rent__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tenants_tenants__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__properties_properties__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repairs_repairs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__properties_properties__["a" /* PropertiesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__rent_rent__["a" /* RentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__repairs_repairs__["a" /* RepairsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__tenants_tenants__["a" /* TenantsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="tabsIndex">\n  <ion-tab [root]="tab1Root" tabTitle="Properties" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Rent" tabIcon="cash" tabBadge="2" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Repairs" tabIcon="build"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Tenants" tabIcon="people"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RentPage = (function () {
    function RentPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.year = "2017";
        this.select = false;
        this.months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    }
    RentPage.prototype.getRentStatusColor = function (rentStatus) {
        var rentStatusColor = '';
        if (rentStatus === 'PAST DUE') {
            rentStatusColor = 'red';
        }
        else if (rentStatus === 'DUE') {
            rentStatusColor = 'orange';
        }
        else if (rentStatus === 'PAID') {
            rentStatusColor = 'green';
        }
    };
    RentPage.prototype.sendReminder = function () {
        this.select = !this.select;
        // let i in propertyList;
        // if (propertyList[x].checked === true) {
        //   send reminder
        // } else {
        //   this.select = !this.select;
        // }
    };
    return RentPage;
}());
RentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rent',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/rent/rent.html"*/'<ion-header>\n  <ion-navbar>\n     <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Rent</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item color="danger" style="font-size:1.5rem">\n      <ion-icon name="notifications" item-left></ion-icon>Send Notice of Overdue\n    </ion-item>\n\n    <ion-item>\n      <p class="red">PAST DUE</p>\n      Property #3\n      <span class="right">$2,100</span>\n      <p>2 days</p>\n    </ion-item>\n\n    <ion-item style="background-color: #ffa64c; color: white; font-size: 1.5rem" (click)="sendReminder()">\n      <ion-icon name="notifications" item-left></ion-icon>Send Reminder\n    </ion-item>\n\n    <ion-item [ngClass]="{\'select-property\': select === true}">\n      <p class="orange">DUE</p>\n      Property #4\n      <span class="right">$1,300</span>\n      <p>09/14/17</p>\n      <ion-checkbox *ngIf="select" color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item [ngClass]="{\'select-property\': select === true}">\n      <p class="orange">DUE</p>\n      Property #1\n      <span class="right">$3,300</span>\n      <p>09/19/17</p>\n      <ion-checkbox *ngIf="select" color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <p class="green">PAID</p> \n      Property #2\n      <span class="right">$2,100</span>\n    </ion-item>\n    <!-- <ion-item class="border-top">\n      <ion-label>Payment History</ion-label>\n      <ion-select [(ngModel)]="year">\n        <ion-option value="2017">2017</ion-option>\n        <ion-option value="2016">2016</ion-option>\n        <ion-option value="2015">2015</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-row style="color: gray" class="row-styling">\n        <ion-col col-1 *ngFor="let month of months;let i=index">{{months[i]}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1 *ngFor="let month of months;let i=index">\n          <ion-icon name="checkmark" style="color: #4cc94c"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item> -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/rent/rent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], RentPage);

//# sourceMappingURL=rent.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tenant_profile_tenant_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_new_tenant_add_new_tenant__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TenantsPage = (function () {
    function TenantsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TenantsPage.prototype.goTenantProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tenant_profile_tenant_profile__["a" /* TenantProfilePage */]);
    };
    TenantsPage.prototype.goAddNewTenant = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_new_tenant_add_new_tenant__["a" /* AddNewTenantPage */]);
    };
    return TenantsPage;
}());
TenantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tenants',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/tenants/tenants.html"*/'<ion-header>\n  <ion-navbar>\n     <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Tenants</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item color="primary" (click)="goAddNewTenant()">\n    <ion-icon name="add" class="border-bottom" item-left large></ion-icon>Add new tenant\n  </ion-item> -->\n\n  <ion-list>\n    <ion-item-divider color="light">Property #1</ion-item-divider>\n\n    <ion-item-sliding>\n      <ion-item (click)="goTenantProfile()">\n        <ion-avatar item-start>\n          <img src="assets/img/venkman.jpg">\n        </ion-avatar>\n        <h2>John Smith</h2>\n        <!-- <p>Rent Due: 09/19/17</p> -->\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list>\n    <ion-item-divider color="light">Property #2</ion-item-divider>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/slimer.jpg">\n        </ion-avatar>\n        <h2>Sarah</h2>\n        <!-- <p>Rent Due: 09/05/17</p> -->\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/marshmallow-man.png">\n        </ion-avatar>\n        <h2>Sam</h2>\n        <!-- <p>Rent Due: 09/05/17</p> -->\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/gozer.png">\n        </ion-avatar>\n        <h2>Nicole</h2>\n        <!-- <p>Rent Due: 09/05/17</p> -->\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/tenants/tenants.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TenantsPage);

//# sourceMappingURL=tenants.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_request_repair_request__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenantProfilePage = (function () {
    function TenantProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TenantProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TenantProfilePage');
    };
    TenantProfilePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TenantProfilePage.prototype.goRepairRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__repair_request_repair_request__["a" /* RepairRequestPage */]);
    };
    return TenantProfilePage;
}());
TenantProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tenant-profile',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/tenant-profile/tenant-profile.html"*/'<ion-content>\n  <div class="tenant-profile">\n    <div class="overlay">\n      <button ion-button clear (click)="goBack()">\n        <ion-icon name="arrow-back" style="font-size: 2em"></ion-icon>\n      </button>\n      <p class="title" text-center>John Smith</p>\n      <p text-center>Tenant</p>\n      <!-- <ion-item class="position-bottom" style="background: rgba(204, 204, 204, 0.5);" (click)="goAddNewTenant()">\n        <ion-icon name="add" item-left large></ion-icon>Add image\n      </ion-item> -->\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="call" ios="ios-call-outline" item-start></ion-icon>\n      <p>Phone Number</p>\n      <h2>(626) 555-5555</h2>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="mail" ios="ios-mail-outline" item-start></ion-icon>\n      <p>Email</p>\n      <h2>johnsmith@gmail.com</h2>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="document" ios="ios-document-outline" item-start></ion-icon>\n      <p>Driver License No.</p>\n      <h2>F324A97</h2>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="home" ios="ios-home-outline" item-start></ion-icon>\n      <p>Renting</p>\n      <h2>Property #1</h2>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Repair Requests\n      <span class="right">See All</span>\n    </ion-list-header>\n    <ion-item (click)="goRepairRequest()">Garage Door\n      <span item-end class="repair-date">09/02/17</span>\n    </ion-item>\n    <ion-item (click)="goRepairRequest()">Air conditioner\n      <span item-end class="repair-date">09/02/17</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/tenant-profile/tenant-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], TenantProfilePage);

//# sourceMappingURL=tenant-profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewTenantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewTenantPage = (function () {
    function AddNewTenantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.properties = "Property #1";
    }
    AddNewTenantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewTenantPage');
    };
    return AddNewTenantPage;
}());
AddNewTenantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-new-tenant',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/add-new-tenant/add-new-tenant.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add New Tenant</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="tenant-icon" text-center >\n    <img src="assets/img/map.png">\n    <ion-item class="position-bottom" style="background: rgba(204, 204, 204, 0.5);" (click)="goAddNewTenant()">\n      <ion-icon name="add" item-left large></ion-icon>Add image\n    </ion-item>\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>First Name</ion-label>\n      <ion-input type="address" placeholder="First Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Last Name</ion-label>\n      <ion-input type="rent" placeholder="Last Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Phone Number</ion-label>\n      <ion-input type="rent" placeholder="Phone Number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="rent" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Driver License</ion-label>\n      <ion-input type="rent" placeholder="Driver License"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Property</ion-label>\n      <ion-select [(ngModel)]="properties">\n        <ion-option value="Property #1">Property #1</ion-option>\n        <ion-option value="n64">Property #2</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/add-new-tenant/add-new-tenant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AddNewTenantPage);

//# sourceMappingURL=add-new-tenant.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_new_property_add_new_property__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_profile_property_profile__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertiesPage = (function () {
    function PropertiesPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    // ionViewDidLoad(){
    //   this.loadMap();
    // }
    // loadMap(){
    //   this.geolocation.getCurrentPosition().then((position) => {
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     let mapOptions = {
    //       center: latLng,
    //       zoom: 15,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //     let marker = new google.maps.Marker({
    //       position: latLng,
    //       map: this.map
    //     })
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    PropertiesPage.prototype.goAddNewProperty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_new_property_add_new_property__["a" /* AddNewPropertyPage */]);
    };
    PropertiesPage.prototype.goPropertyProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__property_profile_property_profile__["a" /* PropertyProfilePage */]);
    };
    PropertiesPage.prototype.goRootPage = function (tabIndex) {
        this.navCtrl.parent.select(tabIndex);
    };
    return PropertiesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PropertiesPage.prototype, "mapElement", void 0);
PropertiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-properties',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/properties/properties.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Properties</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color="primary" (click)="goAddNewProperty()">\n    <ion-icon name="add" item-left large></ion-icon>Add new property\n  </ion-item>\n  \n    <!-- <div class="map-container">\n  <div #map id="map"></div>\n  </div> -->\n\n  <!-- <div class="property-picture" style="background: url(\'assets/img/house.jpg\') center">\n    <div class="overlay" text-center>\n      <h2 style="color: white">Property #1</h2>\n      <p style="color: white">888 Marengo Street Pasadena, Ca 91101</p>\n    </div>\n  </div> -->\n  <ion-card>\n\n    <div class="property-container" (click)="goPropertyProfile()">\n      <h2>Property #1</h2>\n      <p>888 Marengo Street Pasadena, Ca 91101</p>\n      <!-- <ion-icon style="color: white" name="arrow-forward" large item-end></ion-icon>    -->\n    </div> \n\n    <ion-item class="border-top" (click)="goRootPage(1)">\n      <h2 style="color: #ffa64c">Rent due in (10) days</h2>\n      <p>$3,300</p> \n    </ion-item>\n\n     <!-- <ion-item class="border-top">\n      <h2>New Messages</h2>\n      <p>Hi Kenny, there seems to be a problem with the garage door.</p><ion-badge color="danger" item-end>3</ion-badge>\n    </ion-item> -->\n\n    <!-- <ion-item class="border-top" (click)="goRootPage(2)">\n      <h2>Repair request</h2><ion-badge color="danger" item-end>1</ion-badge>\n       <p>Garage door</p> \n    </ion-item>  -->\n \n     <ion-row class="border-top" text-center>\n      <ion-col>\n        <button ion-button icon-left clear small (click)="goRootPage(2)">\n          <ion-icon name="build"></ion-icon>\n          <div>1 repair request</div>\n        </button>\n      </ion-col>\n      <!-- <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text" color="primary"></ion-icon>\n          <div>3 New Messages</div>\n        </button>\n      </ion-col> -->\n    </ion-row>  \n\n  </ion-card>\n\n  <ion-card>\n    <div class="property-container-2" (click)="goPropertyProfile()">\n      <h2>Property #2</h2>\n      <p>3581 Whistler Avenue El Monte, Ca 91732</p>\n      <!-- <ion-icon style="color: white" name="arrow-dropright-circle" large (click)="goPropertyProfile()" item-end></ion-icon>   -->\n    </div>\n\n    <ion-item class="border-top" (click)="goRootPage(1)">\n      <!-- <ion-icon name="checkmark-circle" style="color: #4cc94c" item-start></ion-icon> -->\n      <h2 style="color: #4cc94c">Rent paid</h2>\n       <ion-icon name="checkmark-circle" style="color: #2DCC70" item-end></ion-icon> \n      <p>$2,100</p> \n    </ion-item>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/properties/properties.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], PropertiesPage);

//# sourceMappingURL=properties.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyProfilePage = (function () {
    function PropertyProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PropertyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyProfilePage');
    };
    PropertyProfilePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return PropertyProfilePage;
}());
PropertyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-property-profile',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/property-profile/property-profile.html"*/' <ion-content>\n   <div class="property-profile">\n    <div class="overlay">\n      <button ion-button clear (click)="goBack()">\n        <ion-icon name="arrow-back" style="font-size: 2em"></ion-icon>\n      </button>\n      <p class="title" text-center>Property #1</p>\n      <p text-center>888 Marengo Street Pasadena, Ca 91101</p>\n    </div>\n  </div> \n\n  <ion-list>\n<!-- \n    <ion-item>\n      <p>Address</p>\n      <h2>888 Marengo Street Pasadena, Ca 91101</h2>\n    </ion-item> -->\n\n    <ion-item>\n      <p>Rent Amount</p>\n      <h2>$3,300</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Rent Reminder</p>\n      <h2>10 days before due</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Rent Due Date</p>\n      <h2>09/19/17</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Tenant</p>\n      <h2>John Smith</h2>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/property-profile/property-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PropertyProfilePage);

//# sourceMappingURL=property-profile.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_request_repair_request__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepairsPage = (function () {
    function RepairsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.repairStatus = "new";
    }
    RepairsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepairsPage');
    };
    RepairsPage.prototype.goRepairRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__repair_request_repair_request__["a" /* RepairRequestPage */]);
    };
    RepairsPage.prototype.changeRepairStatus = function (status) {
        // this.repair.status === status;
    };
    return RepairsPage;
}());
RepairsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-repairs',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/repairs/repairs.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n     <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Repairs</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="repairStatus">\n      <ion-segment-button value="new">\n        New\n      </ion-segment-button>\n      <ion-segment-button value="in-progress">\n        In progress\n      </ion-segment-button>\n      <ion-segment-button value="completed">\n        Completed\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n <div [ngSwitch]="repairStatus">\n    <ion-list no-lines *ngSwitchCase="\'new\'">\n      <ion-item-sliding #item>\n        <ion-item (click)="goRepairRequest()">\n          <h2>Garage door</h2>\n          <h3>Property #1</h3>\n          <p>Date Submitted: 09/02/17</p>\n        </ion-item>\n        <ion-item-options side="left" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button style="background-color: #ffa64c">In Progress</button>\n        </ion-item-options>\n\n        <ion-item-options side="right" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button style="background-color: #4cc94c">Completed</button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n      <ion-item-sliding #item>\n        <ion-item (click)="goRepairRequest()">\n          <h2>Air Conditioning</h2>\n          <h3>Property #1</h3>\n          <p>Date Submitted: 09/02/17</p>\n        </ion-item>\n        <ion-item-options side="left" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button style="background-color: #ffa64c">In Progress</button>\n        </ion-item-options>\n\n        <ion-item-options side="right" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button style="background-color: #4cc94c">Completed</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'in-progress\'">\n      <ion-item-sliding #item>\n        <ion-item (click)="goRepairRequest()">\n          <h2>Garage door</h2>\n          <h3>Property #1</h3>\n          <p>Date Submitted: 09/02/17</p>\n        </ion-item>\n        <ion-item-options side="left" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button color="primary">New</button>\n        </ion-item-options>\n\n        <ion-item-options side="right" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button style="background-color: #4cc94c">Completed</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'completed\'">\n      <ion-item-sliding #item>\n        <ion-item (click)="goRepairRequest()">\n          <h2>Garage door</h2>\n          <h3>Property #1</h3>\n          <p>Date Submitted: 09/02/17</p>\n        </ion-item>\n        <ion-item-options side="left" (ionSwipe)="changeRepairStatus(status)">\n          <button ion-button style="background-color: #ffa64c">In Progress</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/repairs/repairs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RepairsPage);

//# sourceMappingURL=repairs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepairRequestPage = (function () {
    function RepairRequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RepairRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepairRequestPage');
    };
    return RepairRequestPage;
}());
RepairRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-repair-request',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/repair-request/repair-request.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Repair Request No. 1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <ion-list no-lines>\n    <ion-item>\n      <p>Repair Item</p>\n      <h2>Garage door</h2>\n    </ion-item>\n\n    <!-- <ion-item>\n      <p>Urgency</p>\n      <h2>Low</h2>\n    </ion-item> -->\n\n    <ion-item>\n      <p>Comments</p>\n      <h2 class="comments">the garage door is making a squeaking noise when opening and closing. has been going on for 1 week</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Pictures</p>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/img/map.png">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/img/map.png">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item style="background-color: #fafafa">\n      <p class="property">Property #1: 888 Marengo Street Pasadena, Ca 91101</p>\n      <p class="requestor">Requestor: John Smith</p>\n      <p class="date-requested">Date Submitted: 09/02/17</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Receipts</p>\n      <ion-row>\n        <ion-col col-6>\n          <img src="assets/img/map.png">\n        </ion-col>\n        <ion-col col-6>\n          <img src="assets/img/map.png">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n\n    <ion-item color="primary">\n      <ion-icon name="add" item-left large></ion-icon>Add receipts\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/repair-request/repair-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RepairRequestPage);

//# sourceMappingURL=repair-request.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_phone_number_update_phone_number__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.goUpdatePhoneNumberPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__update_phone_number_update_phone_number__["a" /* UpdatePhoneNumberPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/account/account.html"*/'<ion-content>\n  <div class="account-profile">\n    <button ion-button menuToggle clear icon-only>\n      <ion-icon name=\'menu\' style="color: white"></ion-icon>\n    </button>\n    <p class="account-icon" text-center><ion-icon name="contact" style="font-size: 6em"></ion-icon></p>\n    <p class="title" text-center>Kenny</p>\n    <p text-center>kenny@gmail.com</p>\n  </div> \n\n  <ion-list no-lines>\n    <ion-list-header>\n      Account\n    </ion-list-header>\n\n    <ion-item (click)="goUpdatePhoneNumberPage()">\n      <h2>Phone Number</h2>\n    </ion-item>\n\n    <ion-item>\n      <h2>Bank Account</h2>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list no-lines>\n    <ion-item>\n      <h2>Support</h2>\n    </ion-item>\n\n    <ion-item>\n      <h2>Logout</h2>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_properties_properties__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_property_profile_property_profile__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_new_property_add_new_property__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rent_rent__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tenants_tenants__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tenant_profile_tenant_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_new_tenant_add_new_tenant__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_repairs_repairs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_repair_request_repair_request__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_account__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_update_phone_number_update_phone_number__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_rent_rent__["a" /* RentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tenants_tenants__["a" /* TenantsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tenant_profile_tenant_profile__["a" /* TenantProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_new_tenant_add_new_tenant__["a" /* AddNewTenantPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_properties_properties__["a" /* PropertiesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_property_profile_property_profile__["a" /* PropertyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_new_property_add_new_property__["a" /* AddNewPropertyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_repairs_repairs__["a" /* RepairsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_repair_request_repair_request__["a" /* RepairRequestPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_update_phone_number_update_phone_number__["a" /* UpdatePhoneNumberPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_rent_rent__["a" /* RentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tenants_tenants__["a" /* TenantsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tenant_profile_tenant_profile__["a" /* TenantProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_new_tenant_add_new_tenant__["a" /* AddNewTenantPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_properties_properties__["a" /* PropertiesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_property_profile_property_profile__["a" /* PropertyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_new_property_add_new_property__["a" /* AddNewPropertyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_repairs_repairs__["a" /* RepairsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_repair_request_repair_request__["a" /* RepairRequestPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_update_phone_number_update_phone_number__["a" /* UpdatePhoneNumberPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goSettingsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amyta/propertyApp/src/app/app.html"*/'<ion-menu [content]="content" class="side-menu">\n  <ion-header>\n    <ion-toolbar>\n      <div class="account-profile" text-center>\n        <h2>Kenny</h2>\n        <p>Owner</p>\n      </div>\n    </ion-toolbar>\n  </ion-header>  \n\n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose ion-item *ngFor="let p of pages" style="background-color: #fafafa" (click)="openPage(p)">\n      {{p.title}}\n      </button>\n    </ion-list>\n\n    <!-- <ion-footer class="settings-menu">\n      <span menuClose (click)="goSettingsPage()">\n      <ion-icon name="settings"></ion-icon>\n      <p>Settings</p>\n      </span>\n    </ion-footer> -->\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_new_property_add_new_property__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    // @ViewChild('map') mapElement: ElementRef;
    // map: any;
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    // ionViewDidLoad(){
    //   this.loadMap();
    // }
    // loadMap(){
    //   this.geolocation.getCurrentPosition().then((position) => {
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     let mapOptions = {
    //       center: latLng,
    //       zoom: 15,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //     let marker = new google.maps.Marker({
    //       position: latLng,
    //       map: this.map
    //     })
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    // addMarker(){
    //   let marker = new google.maps.Marker({
    //     map: this.map,
    //     animation: google.maps.Animation.DROP,
    //     position: this.map.getCenter()
    //   });
    //   let content = "<h4>Information!</h4>";          
    //   this.addInfoWindow(marker, content);
    // }
    // addInfoWindow(marker, content){
    //   let infoWindow = new google.maps.InfoWindow({
    //     content: content
    //   });
    //   google.maps.event.addListener(marker, 'click', () => {
    //     infoWindow.open(this.map, marker);
    //   });
    // }
    HomePage.prototype.goAddNewProperty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_new_property_add_new_property__["a" /* AddNewPropertyPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Properties</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color="primary" (click)="goAddNewProperty()">\n    <ion-icon name="add" item-left large></ion-icon>Add new property\n    <!-- <button ion-button small class="right" style="width: 175px">Add new property</button> -->\n  </ion-item>\n\n<ion-card>\n\n  <ion-item>\n    <!-- <ion-avatar item-start>\n      <img src="img/marty-avatar.png">\n    </ion-avatar> -->\n    <h2>Property #1</h2>\n    <p>888 Marengo Street Pasadena, Ca 91101</p>\n  </ion-item>\n\n<div class="map-container">\n<div #map id="map"></div>\n</div>\n  <!-- <img src="assets/img/map.png"> -->\n<!-- \n  <ion-card-content>\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n  </ion-card-content> -->\n\n  <ion-item>\n    <ion-icon name="cash" item-start large style="color: #4cc94c"></ion-icon>\n    <h2>Rent due in (10) days</h2>\n    <p>$3,300</p>\n  </ion-item>\n\n  <ion-item class="border-top">\n    <ion-icon name="text" item-left large color="primary"></ion-icon>\n    <h2>New Message</h2>\n    <p>Hi Kenny, there seems to be a problem with the garage door.</p>\n  </ion-item>\n\n  <ion-item class="border-top">\n    <ion-icon name="build" item-left large style="color: #ffa64c"></ion-icon>\n    <h2>(1) Repair request</h2>\n    <p>Garage door</p>\n  </ion-item>\n\n  <ion-item class="border-top">\n    <span item-left>18 min</span>\n    <span item-left>(2.6 mi)</span>\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      Start\n    </button>\n  </ion-item>\n\n  <!-- <ion-row class="border-top">\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row> -->\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-item>\n    <h2>Property #2</h2>\n    <p>3581 Whistler Avenue El Monte, Ca 91732</p>\n  </ion-item>\n\n  <img src="assets/img/map.png">\n\n  <ion-item>\n    <ion-icon name="cash" item-start large style="color: #4cc94c"></ion-icon>\n    <h2>Rent paid <ion-icon name="checkmark-circle" style="color: #4cc94c"></ion-icon></h2>\n    <p>$2,100</p>\n  </ion-item>\n\n  <ion-item class="border-top">\n    <span item-left>30 min</span>\n    <span item-left>(8.4 mi)</span>\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      Start\n    </button>\n  </ion-item>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n     <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePhoneNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UpdatePhoneNumberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdatePhoneNumberPage = (function () {
    function UpdatePhoneNumberPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpdatePhoneNumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePhoneNumberPage');
    };
    return UpdatePhoneNumberPage;
}());
UpdatePhoneNumberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-update-phone-number',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/update-phone-number/update-phone-number.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Phone Numbers</ion-title>\n  </ion-navbar>\n\n</ion-header> \n\n\n<ion-content>\n\n  <ion-list no-lines>\n    <ion-item>\n      (626) 555-555\n    </ion-item>\n\n     <button ion-item (click)="itemSelected(item)">\n      Add phone number\n    </button>  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/update-phone-number/update-phone-number.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], UpdatePhoneNumberPage);

//# sourceMappingURL=update-phone-number.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map