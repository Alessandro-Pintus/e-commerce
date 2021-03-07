(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\omen9\Desktop\Progetto Angular 2 di Alessandro Pintus\e-commerce\src\main.ts */"zUnb");


/***/ }),

/***/ "9R8I":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brand:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Model:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Display:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back camera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Front Camera:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Battery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cpu:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Memory:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ram:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "S.O.:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\uD83D\uDED2Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_div_0_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.details.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.brand, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.display, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.camera, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.camera2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.battery, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.cpu, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.memory, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.details.ram);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.so, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.item.details.price, " $");
} }
function DetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error! Please turn back and try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailsComponent {
    constructor(db, location, router) {
        this.db = db;
        this.location = location;
        this.router = router;
        this.id = window.location.search.substr(1).split("=")[1];
        db.firestore.collection("items").doc(this.id).get()
            .then((doc) => {
            if (doc.exists) {
                let details = doc.data();
                let element = { details };
                element.id = doc.id;
                this.item = element;
            }
            else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        console.log(this.id);
    }
    add() {
        console.log('Add to cart: ' + this.item.details.productName);
        let temp = localStorage.getItem("carrello");
        if (temp != null) {
            let cart = JSON.parse(temp);
            cart.push(this.item);
            localStorage.setItem("carrello", JSON.stringify(cart));
        }
        else {
            console.log("Empty cart");
            localStorage.setItem("carrello", JSON.stringify([this.item]));
        }
        this.router.navigate(['cart']);
    }
    back() {
        this.location.back();
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "errorContainer", 4, "ngIf"], [1, "container"], [1, "subContainer"], [1, "searchBtn", 3, "click"], [1, "backBtn", 3, "click"], [1, "errorContainer"], [1, "error"], [1, "backBtn"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 52, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item == undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%], .errorContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.subContainer[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n\r\n.subContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.searchBtn[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 42px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  background-color: lightgray;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\n.backBtn[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 30px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  background-color: lightgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIsXHJcbi5lcnJvckNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YkNvbnRhaW5lcixcclxuLmVycm9yIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YkNvbnRhaW5lciBwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaEJ0biB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG59XHJcblxyXG4uYmFja0J0biB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAer3Volgi-K45hOlmUzy3PBbSoW-RePWI",
        authDomain: "app-e-commerce-1b03a.firebaseapp.com",
        databaseURL: "https://e-commerce-1b03a.firebaseio.com",
        projectId: "e-commerce-1b03a",
        storageBucket: "e-commerce-1b03a.appspot.com",
        messagingSenderId: "466193296139"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "RNaf":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");








function ItemsComponent_div_10_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_10_li_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.id = item_r4.id; return ctx_r5.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_10_li_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r7.id = item_r4.id; return ctx_r7.getDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_10_li_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r8.id = item_r4.id; return ctx_r8.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\uD83D\uDED2Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.details.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", item_r4.details.price, " $");
} }
function ItemsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemsComponent_div_10_li_2_Template, 11, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_10_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add product \u2795 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function ItemsComponent_div_11_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_11_li_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r13.id = item_r12.id; return ctx_r13.getDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_11_li_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r15.id = item_r12.id; return ctx_r15.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\uD83D\uDED2Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.details.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", item_r12.details.price, " $");
} }
function ItemsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemsComponent_div_11_li_2_Template, 9, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_11_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add product \u2795 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filterItemList);
} }
function ItemsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemsComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.filter = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ItemsComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.items = [];
        this.filterItemList = [];
        this.filter = false;
        db.firestore.collection("items").get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    let details = doc.data();
                    let element = { details };
                    element.id = doc.id;
                    this.items.push(element);
                }
                else {
                    console.log("No such document!");
                }
            });
        });
    }
    searchProduct() {
        this.filter = true;
        this.filterItemList = [];
        let input = this.search.value.toLowerCase();
        this.db.firestore.collection('items').where("brand", "in", [input])
            .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    let details = doc.data();
                    let element = { details };
                    element.id = doc.id;
                    this.filterItemList.push(element);
                }
                else {
                    console.log("No such document!");
                }
            });
        });
    }
    ;
    getDetail() {
        this.router.navigate(['details'], { queryParams: { id: this.id } });
    }
    delete() {
        let answer;
        let deleteConfirm = confirm("Are you sure you delete the item? The operation is irreversible.");
        if (deleteConfirm == true) {
            answer = "Item deleted!";
            this.db.firestore.collection("items").doc(this.id).delete().then(() => {
                console.log("Document successfully deleted!");
                console.log("Item id deleted: " + this.id);
                location.reload();
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
        else {
            answer = "Operation canceled!";
        }
        alert(answer);
    }
    addItem() {
        this.router.navigate(['add-item']);
    }
    addToCart() {
        let added;
        for (let i of this.items) {
            if (i.id == this.id)
                added = i;
        }
        console.log('Add to cart: ' + added.details.productName);
        let temp = localStorage.getItem("carrello");
        if (temp != null) {
            let cart = JSON.parse(temp);
            cart.push(added);
            localStorage.setItem("carrello", JSON.stringify(cart));
        }
        else {
            console.log("Empty cart");
            localStorage.setItem("carrello", JSON.stringify([added]));
        }
        this.router.navigate(['cart']);
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], decls: 13, vars: 4, consts: [[1, "searchContainer"], [1, "searchSpace"], [3, "ngSubmit"], ["type", "search", "minlength", "2", "maxlength", "40", 1, "searchBar", 3, "formControl"], ["type", "submit", 1, "searchBtn"], [4, "ngIf"], ["class", "filterItemContainer", 4, "ngIf"], ["class", "btnContainer", 4, "ngIf"], [1, "productList"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "addProduct", 3, "click"], [1, "product"], [1, "deleteBtn", 3, "click"], [1, "detailBtn", 3, "click"], [1, "addToCartBtn", 3, "click"], [1, "filterItemContainer"], [1, "filterList"], [1, "btnContainer"], [1, "backBtn", 3, "click"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search products for brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*full brand name required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ItemsComponent_Template_form_ngSubmit_6_listener() { return ctx.searchProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemsComponent_div_10_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemsComponent_div_11_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ItemsComponent_div_12_Template, 3, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@media only screen and (max-width: 600px) and (orientation: portrait) {\r\n  .addToCartBtn[_ngcontent-%COMP%] {\r\n    left: 48px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) and (orientation: portrait) {\r\n  .detailBtn[_ngcontent-%COMP%] {\r\n    position: unset !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n  .searchBar[_ngcontent-%COMP%] {\r\n    float: left !important;\r\n    margin-left: 7px !important;\r\n    width: 38vw !important;\r\n  }\r\n\r\n  .searchBtn[_ngcontent-%COMP%] {\r\n    margin-top: unset !important;\r\n    width: 57px !important;\r\n  }\r\n\r\n  .product[_ngcontent-%COMP%], .addProduct[_ngcontent-%COMP%] {\r\n    height: 200px !important;\r\n  }\r\n\r\n  .addProduct[_ngcontent-%COMP%] {\r\n    font-size: 29px !important;\r\n  }\r\n\r\n  .product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 21px !important;\r\n    margin-top: 35px !important;\r\n    margin-bottom: 10px !important;\r\n  }\r\n\r\n  .product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px !important;\r\n    margin-bottom: 8px !important;\r\n    margin-top: 8px !important;\r\n  }\r\n\r\n\r\n  .detailBtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 56px;\r\n    right: 20px;\r\n    width: 56px !important;\r\n  }\r\n\r\n  .addToCartBtn[_ngcontent-%COMP%] {\r\n    height: 37px !important;\r\n    margin-left: 0px !important;\r\n    width: 69px;\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 14px;\r\n  }\r\n\r\n\r\n  .deleteBtn[_ngcontent-%COMP%] {\r\n    font-size: 14px !important;\r\n    width: 25px !important;\r\n    right: 4px !important;\r\n    top: 2px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 642px) and (orientation: landscape) {\r\n  .detailBtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 15px !important;\r\n    left: 4px !important;\r\n    width: 56px !important;\r\n    height: 37px !important;\r\n  }\r\n\r\n  .addToCartBtn[_ngcontent-%COMP%] {\r\n    height: 37px !important;\r\n    margin-left: 0px !important;\r\n    width: 69px;\r\n    position: absolute;\r\n    bottom: 15px;\r\n    right: 12px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.searchContainer[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.searchSpace[_ngcontent-%COMP%]{\r\n  width: 60vw;\r\n  text-align: center;\r\n  background-image: linear-gradient(120deg, #f6a3a3 0%, #80afc6 100%);\r\n  background-blend-mode: normal, multiply;\r\n  border-radius: 5px;\r\n  padding-bottom: 17px;\r\n  border: 1px solid lightgrey;\r\n}\r\n\r\n.searchBar[_ngcontent-%COMP%] {\r\n  width: 50vw;\r\n  height: 30px;\r\n  border-radius: 4px;\r\n  box-shadow:  inset 0 1px 1px rgba(0, 0, 0, .075);\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.searchBtn[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  width: 69px;\r\n  height: 30px;\r\n}\r\n\r\n.productList[_ngcontent-%COMP%], .product[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n.product[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: 1px solid gray;\r\n  float:left;\r\n  width: 30%;\r\n  height: 177px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  margin: 5px 5px 5px 0;\r\n  background: beige;\r\n}\r\n\r\n.deleteBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 5px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  font-size: 19px;\r\n  width: 30px;\r\n  height: 25px;\r\n}\r\n\r\n.product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n}\r\n\r\n.product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.addProduct[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid gray;\r\n  float:left;\r\n  width: 30%;\r\n  height: 177px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  margin: 5px 5px 5px 0;\r\n  background: beige;\r\n  font-size: 33px;\r\n}\r\n\r\n.filterItemContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.filterList[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 96%;\r\n  padding: 0 40px 0 40px;\r\n}\r\n\r\n.btnContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.backBtn[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  width: 130px;\r\n  height: 45px;\r\n}\r\n\r\n.addToCartBtn[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  height: 30px;\r\n}\r\n\r\n.detailBtn[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  height: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0VBQzVCOzs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtFQUNaOzs7RUFHQTtJQUNFLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRjs7QUFHQSwrR0FBK0c7O0FBQy9HO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtRUFBbUU7RUFDbkUsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJpdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuYWRkVG9DYXJ0QnRuIHtcclxuICAgIGxlZnQ6IDQ4cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgLmRldGFpbEJ0biB7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgLnNlYXJjaEJhciB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDM4dncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2hCdG4ge1xyXG4gICAgbWFyZ2luLXRvcDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1N3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdCxcclxuICAuYWRkUHJvZHVjdCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdCB7XHJcbiAgICBmb250LXNpemU6IDI5cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRldGFpbEJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDU2cHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHdpZHRoOiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRkVG9DYXJ0QnRuIHtcclxuICAgIGhlaWdodDogMzdweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDY5cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBsZWZ0OiAxNHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5kZWxldGVCdG4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQycHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5kZXRhaWxCdG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA0cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM3cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hZGRUb0NhcnRCdG4ge1xyXG4gICAgaGVpZ2h0OiAzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNjlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnNlYXJjaENvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hTcGFjZXtcclxuICB3aWR0aDogNjB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2Y2YTNhMyAwJSwgIzgwYWZjNiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbCwgbXVsdGlwbHk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLnNlYXJjaEJhciB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAgaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnNlYXJjaEJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA2OXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnByb2R1Y3RMaXN0LFxyXG4ucHJvZHVjdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMTc3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG4gIGJhY2tncm91bmQ6IGJlaWdlO1xyXG59XHJcblxyXG4uZGVsZXRlQnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnByb2R1Y3QgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnByb2R1Y3QgcCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkUHJvZHVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMTc3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG4gIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxufVxyXG5cclxuLmZpbHRlckl0ZW1Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZpbHRlckxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBwYWRkaW5nOiAwIDQwcHggMCA0MHB4O1xyXG59XHJcblxyXG4uYnRuQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja0J0biB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcblxyXG4uYWRkVG9DYXJ0QnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsQnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-items',
                templateUrl: './items.component.html',
                styleUrls: ['./items.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'e-commerce';
    }
    goToCart() {
        this.router.navigate(['cart']);
    }
    goToHome() {
        this.router.navigate(['home']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "homeBtn", 3, "click"], [1, "title"], [1, "cartBtn", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDFE1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Smartphone Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.goToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uD83D\uDED2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@media only screen and (max-width: 600px) {\r\n  .homeBtn[_ngcontent-%COMP%] {\r\n    left: 6px !important;\r\n  }\r\n\r\n  .cartBtn[_ngcontent-%COMP%] {\r\n    right: 6px !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, rgba(54, 54, 54, 0.15) 0%, rgba(78, 75, 75, 0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #7b6161;\r\n  background-blend-mode: multiply,multiply;\r\n}\r\n\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  height: 55px;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  margin-top: unset;\r\n  margin-bottom: 10px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n.cartBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 8px;\r\n  height: 40px;\r\n  width: 40px;\r\n  border: 1px solid gray;\r\n  border-radius: 30px;\r\n  background: honeydew;\r\n  font-size: 21px;\r\n}\r\n\r\n\r\n\r\n\r\n.homeBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 8px;\r\n  height: 40px;\r\n  width: 40px;\r\n  border: 1px solid gray;\r\n  border-radius: 30px;\r\n  background: honeydew;\r\n  font-size: 21px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7Ozs7QUFLQTtFQUNFLHdMQUF3TDtFQUN4TCx3Q0FBd0M7QUFDMUM7Ozs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOzs7OztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5ob21lQnRuIHtcclxuICAgIGxlZnQ6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcnRCdG4ge1xyXG4gICAgcmlnaHQ6IDZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg1NCwgNTQsIDU0LCAwLjE1KSAwJSwgcmdiYSg3OCwgNzUsIDc1LCAwLjE1KSAxMDAlKSwgcmFkaWFsLWdyYWRpZW50KGF0IHRvcCBjZW50ZXIsIHJnYmEoMjU1LDI1NSwyNTUsMC40MCkgMCUsIHJnYmEoMCwwLDAsMC40MCkgMTIwJSkgIzdiNjE2MTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5LG11bHRpcGx5O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGhlaWdodDogNTVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FydEJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IDhweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGhvbmV5ZGV3O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4uaG9tZUJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogOHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogaG9uZXlkZXc7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "9R8I");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "jmUF");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/analytics */ "AAub");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-item/add-item.component */ "cV+c");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _items_items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
        _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_13__["AddItemComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _items_items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"],
                    _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
                    _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_13__["AddItemComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function CartComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.details.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.details.price, " $");
} }
function CartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products in shopping cart:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_0_li_5_Template, 5, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.clearCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Clear cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx_r0.total, " $");
} }
function CartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your shopping cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(router) {
        this.router = router;
        this.cart = [];
        this.total = 0;
    }
    ngOnInit() {
        let tmp = localStorage.getItem("carrello");
        let cart = JSON.parse(tmp);
        console.log(cart);
        if (cart != null) {
            this.cart = cart;
            for (let i of cart) {
                this.total += i.details.price;
            }
        }
    }
    clearCart() {
        localStorage.clear();
        location.reload();
    }
    goToHome() {
        this.router.navigate(['home']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "emptyContainer", 4, "ngIf"], [1, "container"], [1, "subContainer", 2, "width", "50%"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "line"], [1, "total"], [1, "btnContainer"], ["onclick", "alert('We have received the order. You will receive a confirmation notification. Thank you for purchasing from our store')", 1, "buyBtn"], [1, "clearCart", 3, "click"], [1, "product"], [1, "detail"], [1, "emptyContainer"], [1, "homeBtn", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_div_0_Template, 14, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total == 0 || ctx.cart == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@media only screen and (max-width: 450px) and (orientation: portrait) {\r\n  .subContainer[_ngcontent-%COMP%] {\r\n    width: 100vw !important;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n  }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.emptyContainer[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n\r\n.emptyContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.homeBtn[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 30px;\r\n  border: 1px solid gray;\r\n  border-radius: 10px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.detail[_ngcontent-%COMP%] {\r\n  float:left;\r\n}\r\n\r\n.subContainer[_ngcontent-%COMP%], .detail[_ngcontent-%COMP%] {\r\n  width: 50vw;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n  padding-left: 45%;\r\n  text-align: end;\r\n  padding-right: 75px;\r\n}\r\n\r\n.btnContainer[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\r\n\r\n.buyBtn[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  width: 101px;\r\n  height: 41px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.clearCart[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  width: 69px;\r\n  height: 41px;\r\n  background-color: lightgray;\r\n  float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2QiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAuc3ViQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpbmUge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcHR5Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcHR5Q29udGFpbmVyIHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWVCdG4ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLnN1YkNvbnRhaW5lcixcclxuLmRldGFpbCB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gIHBhZGRpbmctbGVmdDogNDUlO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uYnRuQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5idXlCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB3aWR0aDogMTAxcHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNsZWFyQ2FydCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA2OXB4O1xyXG4gIGhlaWdodDogNDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "cV+c":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");






class AddItemComponent {
    constructor(router, fb, db) {
        this.router = router;
        this.fb = fb;
        this.db = db;
        this.i = 12;
        this.addItem = this.fb.group({
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            display: [''],
            camera: [''],
            camera2: [''],
            battery: [''],
            cpu: [''],
            memory: [''],
            ram: [''],
            so: [''],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    newItem() {
        this.i + 1;
        this.db.firestore.collection('items').doc(this.i.toString()).set({
            productName: this.addItem.value.product,
            brand: this.addItem.value.brand,
            model: this.addItem.value.model,
            display: this.addItem.value.display,
            camera: this.addItem.value.camera,
            camera2: this.addItem.value.camera2,
            battery: this.addItem.value.battery,
            cpu: this.addItem.value.cpu,
            memory: this.addItem.value.memory,
            ram: this.addItem.value.ram,
            so: this.addItem.value.so,
            price: this.addItem.value.price,
        });
        alert("Item added!");
    }
    goBack() {
        this.router.navigate(['home']);
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 47, vars: 2, consts: [[1, "container"], [1, "subContainer"], [1, "title"], [3, "formGroup"], ["type", "text", "placeholder", "required", "formControlName", "product", "required", ""], ["type", "text", "placeholder", "required", "formControlName", "brand", "required", ""], ["type", "text", "placeholder", "required", "formControlName", "model", "required", ""], ["type", "text", "formControlName", "display"], ["type", "text", "formControlName", "camera"], ["type", "text", "formControlName", "camera2"], ["type", "text", "formControlName", "battery"], ["type", "text", "formControlName", "cpu"], ["type", "text", "formControlName", "memory"], ["type", "text", "formControlName", "ram"], ["type", "text", "formControlName", "so"], ["type", "text", "placeholder", "required", "formControlName", "price", "required", ""], [1, "btnContainer"], [1, "createBtn", 3, "disabled", "click"], [1, "backBtn", 3, "click"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ProductName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Brand: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Model: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Display: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Back camera: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Front camera: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Battery: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cpu: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Memory: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ram: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " S.O.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_42_listener() { return ctx.newItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_45_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addItem.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["@media only screen and (max-width: 600px) {\r\n  .subContainer[_ngcontent-%COMP%]{\r\n  width: 50vw !important;\r\n  }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.subContainer[_ngcontent-%COMP%]{\r\n  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);\r\n  width: 25vw;\r\n\r\n}\r\n\r\n.subContainer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-content: center;\r\n  font-size: 25px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  font-size: 30px;\r\n}\r\n\r\n.btnContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 12px 0 25px 0;\r\n}\r\n\r\n.createBtn[_ngcontent-%COMP%], .backBtn[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 4px;\r\n  width: 69px;\r\n  height: 30px;\r\n  background-color: lightgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtFQUNBLHNCQUFzQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFJQTtFQUNFLG1FQUFtRTtFQUNuRSxXQUFXOztBQUViOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImFkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnN1YkNvbnRhaW5lcntcclxuICB3aWR0aDogNTB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uc3ViQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNkMjk5YzIgMCUsICNmZWY5ZDcgMTAwJSk7XHJcbiAgd2lkdGg6IDI1dnc7XHJcblxyXG59XHJcblxyXG4uc3ViQ29udGFpbmVyIGxhYmVsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5idG5Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAwIDI1cHggMDtcclxufVxyXG5cclxuLmNyZWF0ZUJ0bixcclxuLmJhY2tCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB3aWR0aDogNjlweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-item',
                templateUrl: './add-item.component.html',
                styleUrls: ['./add-item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/items.component */ "RNaf");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "9R8I");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-item/add-item.component */ "cV+c");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");








const routes = [
    { path: "home", component: _items_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: 'detail', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
    { path: 'add-item', component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_4__["AddItemComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: '**', component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map