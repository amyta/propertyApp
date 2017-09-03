webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewPropertyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        this.tenants = "Add new tenant";
    }
    AddNewPropertyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewPropertyPage');
    };
    return AddNewPropertyPage;
}());
AddNewPropertyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-new-property',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/add-new-property/add-new-property.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add New Property</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="property-profile" text-center >\n    <img src="assets/img/map.png">\n    <ion-item class="position-bottom" style="background: rgba(204, 204, 204, 0.5);" (click)="goAddNewTenant()">\n      <ion-icon name="add" item-left large></ion-icon>Add image\n    </ion-item>\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Address</ion-label>\n      <ion-input type="address" placeholder="Address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Rent Amount</ion-label>\n      <ion-input type="rent" placeholder="Rent Amount"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Set Reminder</ion-label>\n      <ion-input type="rent" placeholder="Days"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Rent Due Date</ion-label>\n      <ion-input type="rent" placeholder="Rent Due Date"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Tenant</ion-label>\n      <ion-select [(ngModel)]="tenants" multiple="true">\n        <ion-option value="Add new tenant">Add new tenant</ion-option>\n        <ion-option value="n64">John Smith</ion-option>\n        <ion-option value="ps">Sara</ion-option>\n        <ion-option value="genesis">Sam</ion-option>\n        <ion-option value="saturn">Nicole</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/add-new-property/add-new-property.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
], AddNewPropertyPage);

var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rent_rent__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tenants_tenants__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__properties_properties__ = __webpack_require__(199);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__properties_properties__["a" /* PropertiesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__rent_rent__["a" /* RentPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__tenants_tenants__["a" /* TenantsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab> -->\n  <ion-tab [root]="tab2Root" tabTitle="Properties" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Rent" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Tenants" tabIcon="people"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        this.months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    }
    return RentPage;
}());
RentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rent',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/rent/rent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Rent\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Overdue</ion-list-header>\n    <ion-item>Property #3\n      <span item-end>$2,000</span>\n      <p>Past due (2) days</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Due</ion-list-header>\n    <ion-item>Property #1\n      <span item-end>$3,300</span>\n      <p>Due in (10) days</p>\n    </ion-item>\n    <!-- <ion-item>Payment History\n      <span class="right">2017</span>\n    </ion-item> -->\n    <ion-item>\n      Payment History\n      <span class="right">2017</span>\n      <ion-row class="row-styling">\n        <ion-col col-1 *ngFor="let month of months;let i=index">{{months[i]}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1 *ngFor="let month of months;let i=index">\n          <ion-icon name="checkmark" style="color: #4cc94c"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Paid</ion-list-header>\n    <ion-item>Property #2<span item-end>$2,100</span></ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/rent/rent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], RentPage);

//# sourceMappingURL=rent.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-tenants',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/tenants/tenants.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tenants\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color="primary" (click)="goAddNewTenant()">\n    <ion-icon name="add" class="border-bottom" item-left large></ion-icon>Add new tenant\n  </ion-item>\n\n  <ion-list>\n    <ion-list-header>\n      Property #1 Tenants\n    </ion-list-header>\n\n    <ion-item-sliding>\n      <ion-item (click)="goTenantProfile()">\n        <ion-avatar item-start>\n          <img src="assets/img/venkman.jpg">\n        </ion-avatar>\n        <h2>John Smith</h2>\n        <p>Rent Due: 09/19/17</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start (click)="goTenantProfile()">\n          <ion-icon name="ios-more"></ion-icon>\n          View Profile\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Property #2 Tenants\n    </ion-list-header>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/slimer.jpg">\n        </ion-avatar>\n        <h2>Sarah</h2>\n        <p>Rent Due: 09/05/17</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/marshmallow-man.png">\n        </ion-avatar>\n        <h2>Sam</h2>\n        <p>Rent Due: 09/05/17</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/gozer.png">\n        </ion-avatar>\n        <h2>Nicole</h2>\n        <p>Rent Due: 09/05/17</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/tenants/tenants.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], TenantsPage);

//# sourceMappingURL=tenants.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TenantProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the TenantProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TenantProfilePage = (function () {
    function TenantProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TenantProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TenantProfilePage');
    };
    return TenantProfilePage;
}());
TenantProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tenant-profile',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/tenant-profile/tenant-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tenant Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="tenant-icon" text-center >\n    <img src="assets/img/map.png">\n    <ion-item class="position-bottom" style="background: rgba(204, 204, 204, 0.5);" (click)="goAddNewTenant()">\n      <ion-icon name="add" item-left large></ion-icon>Add image\n    </ion-item>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <p>First Name</p>\n      <h2>John</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Last Name</p>\n      <h2>Smith</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Phone Number</p>\n      <h2>(626) 555-5555</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Email</p>\n      <h2>johnsmith@gmail.com</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Driver License No.</p>\n      <h2>F324A97</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Property</p>\n      <h2>Property #1</h2>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/tenant-profile/tenant-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], TenantProfilePage);

//# sourceMappingURL=tenant-profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewTenantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
], AddNewTenantPage);

var _a, _b;
//# sourceMappingURL=add-new-tenant.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_new_property_add_new_property__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_profile_property_profile__ = __webpack_require__(269);
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
    function PropertiesPage(navCtrl, geolocation, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.popoverCtrl = popoverCtrl;
    }
    PropertiesPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    PropertiesPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                map: _this.map
            });
        }, function (err) {
            console.log(err);
        });
    };
    PropertiesPage.prototype.goAddNewProperty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_new_property_add_new_property__["a" /* AddNewPropertyPage */]);
    };
    PropertiesPage.prototype.goPropertyProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__property_profile_property_profile__["a" /* PropertyProfilePage */]);
        // let popover = this.popoverCtrl.create(PropertyProfilePage);
        // popover.present()
    };
    return PropertiesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PropertiesPage.prototype, "mapElement", void 0);
PropertiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-properties',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/properties/properties.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Properties</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color="primary" (click)="goAddNewProperty()">\n    <ion-icon name="add" item-left large></ion-icon>Add new property\n  </ion-item>\n\n<ion-card>\n\n  <ion-item>\n    <h2>Property #1</h2>\n    <p>888 Marengo Street Pasadena, Ca 91101</p>\n    <ion-icon color="primary" name="arrow-dropright-circle" large item-end (click)="goPropertyProfile()"></ion-icon>\n  </ion-item>\n\n<div class="map-container">\n<div #map id="map"></div>\n</div>\n  <!-- <img src="assets/img/map.png"> -->\n<!-- \n  <ion-card-content>\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n  </ion-card-content> -->\n\n  <ion-item>\n    <ion-icon name="cash" item-start large style="color: #4cc94c"></ion-icon>\n    <h2>Rent due in (10) days</h2>\n    <p>$3,300</p>\n  </ion-item>\n\n  <ion-item class="border-top">\n    <ion-icon name="text" item-left large color="primary"></ion-icon>\n    <h2>New Message</h2>\n    <p>Hi Kenny, there seems to be a problem with the garage door.</p>\n  </ion-item>\n\n  <ion-item class="border-top">\n    <ion-icon name="build" item-left large style="color: #ffa64c"></ion-icon>\n    <h2>(1) Repair request</h2>\n    <p>Garage door</p>\n  </ion-item>\n\n  <!-- <ion-item class="border-top">\n    <span item-left>18 min</span>\n    <span item-left>(2.6 mi)</span>\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      Start\n    </button>\n  </ion-item> -->\n\n  <!-- <ion-row class="border-top">\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row> -->\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-item>\n    <h2>Property #2</h2>\n    <p>3581 Whistler Avenue El Monte, Ca 91732</p>\n  </ion-item>\n\n  <img src="assets/img/map.png">\n\n  <ion-item>\n    <ion-icon name="cash" item-start large style="color: #4cc94c"></ion-icon>\n    <h2>Rent paid <ion-icon name="checkmark-circle" style="color: #4cc94c"></ion-icon></h2>\n    <p>$2,100</p>\n  </ion-item>\n\n  <!-- <ion-item class="border-top">\n    <span item-left>30 min</span>\n    <span item-left>(8.4 mi)</span>\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      Start\n    </button>\n  </ion-item> -->\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/properties/properties.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */]])
], PropertiesPage);

//# sourceMappingURL=properties.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_properties_properties__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_property_profile_property_profile__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_new_property_add_new_property__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rent_rent__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tenants_tenants__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tenant_profile_tenant_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_new_tenant_add_new_tenant__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_properties_properties__["a" /* PropertiesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_property_profile_property_profile__["a" /* PropertyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_new_property_add_new_property__["a" /* AddNewPropertyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
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
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_properties_properties__["a" /* PropertiesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_property_profile_property_profile__["a" /* PropertyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_new_property_add_new_property__["a" /* AddNewPropertyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amyta/propertyApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/amyta/propertyApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the PropertyProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PropertyProfilePage = (function () {
    function PropertyProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PropertyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyProfilePage');
    };
    return PropertyProfilePage;
}());
PropertyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-property-profile',template:/*ion-inline-start:"/Users/amyta/propertyApp/src/pages/property-profile/property-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Property #1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n <ion-content>\n  <div class="property-profile" text-center >\n    <img src="assets/img/map.png">\n    <ion-item class="position-bottom" style="background: rgba(204, 204, 204, 0.5);" (click)="goAddNewTenant()">\n      <ion-icon name="add" item-left large></ion-icon>Add image\n    </ion-item>\n  </div>\n\n  <ion-list>\n\n    <ion-item>\n      <p>Address</p>\n      <h2>888 Marengo Street Pasadena, Ca 91101</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Rent Amount</p>\n      <h2>$3,300</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Rent Reminder</p>\n      <h2>10 days before due</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Rent Due Date</p>\n      <h2>09/19/17</h2>\n    </ion-item>\n\n    <ion-item>\n      <p>Tenant</p>\n      <h2>John Smith</h2>\n    </ion-item>\n\n  </ion-list>\n</ion-content> \n'/*ion-inline-end:"/Users/amyta/propertyApp/src/pages/property-profile/property-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], PropertyProfilePage);

//# sourceMappingURL=property-profile.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map