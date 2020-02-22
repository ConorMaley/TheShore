(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\">\n\t<shore-header [menuOptions]=\"menuOptions\"></shore-header>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.menuOptions = [
            { name: 'Home', path: 'Home' },
            { name: 'The Odds Api', path: 'LinesCentral' },
            { name: 'ESPN FF Web Scraper', path: 'ESPNScraper' },
            { name: 'Draft Board 2019', path: 'DraftDay' },
            { name: 'NFL Schedule Pick\'em 2019', path: 'NFLSchedule' }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _linesCentral_linesCentral_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linesCentral/linesCentral.component */ "./src/app/linesCentral/linesCentral.component.ts");
/* harmony import */ var _espnScraper_espnScraper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./espnScraper/espnScraper.component */ "./src/app/espnScraper/espnScraper.component.ts");
/* harmony import */ var _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homePage/homePage.component */ "./src/app/homePage/homePage.component.ts");
/* harmony import */ var _nflSchedule_nflSchedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nflSchedule/nflSchedule.component */ "./src/app/nflSchedule/nflSchedule.component.ts");
/* harmony import */ var _dummyPage_dummyPage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dummyPage/dummyPage.component */ "./src/app/dummyPage/dummyPage.component.ts");
/* harmony import */ var _draftDay_draftDay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./draftDay/draftDay.component */ "./src/app/draftDay/draftDay.component.ts");
/* harmony import */ var _draftDay_playerCard_playerCard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./draftDay/playerCard/playerCard.component */ "./src/app/draftDay/playerCard/playerCard.component.ts");
/* harmony import */ var _linesCentral_game_game_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./linesCentral/game/game.component */ "./src/app/linesCentral/game/game.component.ts");















var appRoutes = [
    { path: 'Home', component: _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"] },
    { path: 'LinesCentral', component: _linesCentral_linesCentral_component__WEBPACK_IMPORTED_MODULE_7__["LinesCentralComponent"] },
    { path: 'ESPNScraper', component: _espnScraper_espnScraper_component__WEBPACK_IMPORTED_MODULE_8__["ESPNScraperComponent"] },
    { path: 'DraftDay', component: _draftDay_draftDay_component__WEBPACK_IMPORTED_MODULE_12__["DraftDayComponent"] },
    { path: 'NFLSchedule', component: _nflSchedule_nflSchedule_component__WEBPACK_IMPORTED_MODULE_10__["NFLScheduleComponent"] },
    { path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    { path: '**', component: _dummyPage_dummyPage_component__WEBPACK_IMPORTED_MODULE_11__["DummyPageComponent"] } // page not found 
    // { path: 'LinesCentral:id', component: LinesCentralComponent }
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // }
];
// TODO since this app is small, for now, we can just have one module 
// but as we add more component, we should move towards modularizing this app 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _linesCentral_linesCentral_component__WEBPACK_IMPORTED_MODULE_7__["LinesCentralComponent"],
                _linesCentral_game_game_component__WEBPACK_IMPORTED_MODULE_14__["GameComponent"],
                _homePage_homePage_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _dummyPage_dummyPage_component__WEBPACK_IMPORTED_MODULE_11__["DummyPageComponent"],
                _espnScraper_espnScraper_component__WEBPACK_IMPORTED_MODULE_8__["ESPNScraperComponent"],
                _draftDay_draftDay_component__WEBPACK_IMPORTED_MODULE_12__["DraftDayComponent"],
                _nflSchedule_nflSchedule_component__WEBPACK_IMPORTED_MODULE_10__["NFLScheduleComponent"],
                _draftDay_playerCard_playerCard_component__WEBPACK_IMPORTED_MODULE_13__["PlayerCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/draftDay/draftDay.component.html":
/*!**************************************************!*\
  !*** ./src/app/draftDay/draftDay.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"draft-day-container\">\r\n\t<h2>Underwhelming Gentlemen Draft Board</h2>\r\n\t<div></div>\r\n</div>"

/***/ }),

/***/ "./src/app/draftDay/draftDay.component.ts":
/*!************************************************!*\
  !*** ./src/app/draftDay/draftDay.component.ts ***!
  \************************************************/
/*! exports provided: DraftDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftDayComponent", function() { return DraftDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DraftDayComponent = /** @class */ (function () {
    function DraftDayComponent() {
    }
    DraftDayComponent.prototype.ngOnInit = function () {
        console.log('whaddup');
    };
    DraftDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'draft-day',
            template: __webpack_require__(/*! ./draftDay.component.html */ "./src/app/draftDay/draftDay.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DraftDayComponent);
    return DraftDayComponent;
}());



/***/ }),

/***/ "./src/app/draftDay/playerCard/playerCard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/draftDay/playerCard/playerCard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cardContainer\" class=\"card-container\">\r\n\t<div id=\"playerName\">lastName, firstName</div>\r\n</div>"

/***/ }),

/***/ "./src/app/draftDay/playerCard/playerCard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/draftDay/playerCard/playerCard.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCardComponent", function() { return PlayerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerCardComponent = /** @class */ (function () {
    function PlayerCardComponent() {
    }
    PlayerCardComponent.prototype.ngOnInit = function () {
        console.log('whaddup');
    };
    PlayerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'player-card',
            template: __webpack_require__(/*! ./playerCard.component.html */ "./src/app/draftDay/playerCard/playerCard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerCardComponent);
    return PlayerCardComponent;
}());



/***/ }),

/***/ "./src/app/dummyPage/dummyPage.component.html":
/*!****************************************************!*\
  !*** ./src/app/dummyPage/dummyPage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\tThis page doesn't exist yet you dingus\t\r\n</div>"

/***/ }),

/***/ "./src/app/dummyPage/dummyPage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dummyPage/dummyPage.component.ts ***!
  \**************************************************/
/*! exports provided: DummyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyPageComponent", function() { return DummyPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DummyPageComponent = /** @class */ (function () {
    function DummyPageComponent() {
    }
    DummyPageComponent.prototype.ngOnInit = function () {
        console.error('this page don\'t exist yet');
    };
    DummyPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dummy-page',
            template: __webpack_require__(/*! ./dummyPage.component.html */ "./src/app/dummyPage/dummyPage.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DummyPageComponent);
    return DummyPageComponent;
}());



/***/ }),

/***/ "./src/app/espnScraper/espnScraper.component.css":
/*!*******************************************************!*\
  !*** ./src/app/espnScraper/espnScraper.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scraper-container {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXNwblNjcmFwZXIvZXNwblNjcmFwZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDIiwiZmlsZSI6InNyYy9hcHAvZXNwblNjcmFwZXIvZXNwblNjcmFwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JhcGVyLWNvbnRhaW5lciB7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/espnScraper/espnScraper.component.html":
/*!********************************************************!*\
  !*** ./src/app/espnScraper/espnScraper.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scraper-container\">\r\n\t<h2>Espn Fantasy Football Web Scraper</h2>\r\n\t<div id = \"bodyContainer\" class=\"body-container\">\r\n\t\t<div class=\"input-group mb-3\">\r\n\t\t\t<div class=\"input-group-prepend\">\r\n\t\t  \t\t<span class=\"input-group-text\">League ID</span>\r\n\t\t\t</div>\r\n\t\t\t<input [(ngModel)]=\"leagueID\" type=\"text\" id=\"leagueId\" class=\"form-control\" placeholder=\"league id\">\r\n\t\t</div>\r\n\t\t<div class=\"input-group mb-3\">\r\n\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t<label class=\"input-group-text\" for=\"yearGroupSelect\">Year</label>\r\n\t\t\t</div>\r\n\t\t\t<select [(ngModel)]=\"year\" class=\"custom-select\" id=\"yearGroupSelect\">\r\n\t\t\t\t<option value=\"2017\">2017</option>\r\n\t\t\t\t<option value=\"2018\">2018</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class=\"form-check\">\r\n\t\t\t<input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"privateLeagueCheckbox\">\r\n\t\t\t<label class=\"form-check-label\" for=\"privateLeagueCheckbox\">\r\n\t\t\t\tPrivate League?\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getData()\">Get Data!</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/espnScraper/espnScraper.component.ts":
/*!******************************************************!*\
  !*** ./src/app/espnScraper/espnScraper.component.ts ***!
  \******************************************************/
/*! exports provided: ESPNScraperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESPNScraperComponent", function() { return ESPNScraperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _espnScraper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./espnScraper.service */ "./src/app/espnScraper/espnScraper.service.ts");



var ESPNScraperComponent = /** @class */ (function () {
    function ESPNScraperComponent(espnScraperService) {
        this.espnScraperService = espnScraperService;
    }
    ESPNScraperComponent.prototype.getData = function () {
        console.log('TODO');
        console.log(this.leagueID);
        console.log(this.year);
    };
    ESPNScraperComponent.prototype.ngOnInit = function () {
        // this.year = 2017;
        this.data = this.espnScraperService.getData();
        // console.log(this.data);
    };
    ESPNScraperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'espn-scraper',
            template: __webpack_require__(/*! ./espnScraper.component.html */ "./src/app/espnScraper/espnScraper.component.html"),
            styles: [__webpack_require__(/*! ./espnScraper.component.css */ "./src/app/espnScraper/espnScraper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_espnScraper_service__WEBPACK_IMPORTED_MODULE_2__["EspnScraperService"]])
    ], ESPNScraperComponent);
    return ESPNScraperComponent;
}());



/***/ }),

/***/ "./src/app/espnScraper/espnScraper.service.ts":
/*!****************************************************!*\
  !*** ./src/app/espnScraper/espnScraper.service.ts ***!
  \****************************************************/
/*! exports provided: EspnScraperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspnScraperService", function() { return EspnScraperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var espn_fantasy_football_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! espn-fantasy-football-api */ "./node_modules/espn-fantasy-football-api/dist/index-web.js");
/* harmony import */ var espn_fantasy_football_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(espn_fantasy_football_api__WEBPACK_IMPORTED_MODULE_2__);



var EspnScraperService = /** @class */ (function () {
    function EspnScraperService() {
    }
    EspnScraperService.prototype.getData = function () {
        var cookies1 = {
            espnS2: 'AECLZtFKksq9%2F37dK%2Fr7Vwb7oMuZimuWgIEM%2BLBGnVhkbLYI1LfpQdrG0yeIISJLCkfdrTaVO1cRoAUwO1h7CLuMFx2fz%2BNMqAGs1L4bPyOsok8nQcP5XkdGPdfMjW%2BDT30eElNeJMgcfwhqgE%2BjpcDowPbcuZeUJmC3SxvH58MWG2OUXBXM4TZhpRnaX77%2FQUop%2BxIMze5s%2B0HyfhwcfdTDWEJJp2wsHUc5u7VPeLcAmWTRSJsbd%2FxTHa08Wn15%2BcI%3D',
            SWID: '{0C180A83-D08F-4019-897B-DC860592930B}'
        }, cookies2 = {
            espnS2: 'AEAa9gCT68Yv3vcrjqQU4hA6KVU4gAUDPcRdtte7GmjlIs96HJ%2BLCWOzUdFPYJS%2Fnwzj4oDE4%2B4xqsdLiqI3Te9fYyYtBXTInBcvzAq8nZeR0hZDmwA5IRcREhVLsnZfOe6WPwmBOHzAYvpKnKyo16K9iL1etU%2B%2B1Sdnd2srXYnuVaiNAKl00DxUEDhjDiRhMMc4Zi2YEU5bca8EpXAmDXT%2BwKQ7SZTtqM1XJcM7QOdpqYgHoJtljKY5swtaxS66ioA%3D',
            SWID: '{0C180A83-D08F-4019-897B-DC860592930B}'
        };
        espn_fantasy_football_api__WEBPACK_IMPORTED_MODULE_2__["BaseAPIObject"].setCookies(cookies2); // fire and forget
        // const league = new League({ leagueId: 826265, seasonId: 2017 });
        var league = new espn_fantasy_football_api__WEBPACK_IMPORTED_MODULE_2__["League"]({ leagueId: 336358, seasonId: 2018 });
        league.read().then(function () { return console.log(league); }); // Prints loaded league
    };
    EspnScraperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], EspnScraperService);
    return EspnScraperService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n\tfont-size: 99px;\r\n}\r\n.header-container {\r\n\tmargin-right: -16px;\r\n    margin-left: -16px;\r\n}\r\n.header {\r\n\ttext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxvQkFBb0I7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuXHRmb250LXNpemU6IDk5cHg7XHJcbn1cclxuLmhlYWRlci1jb250YWluZXIge1xyXG5cdG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbn1cclxuLmhlYWRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\r\n  <nav class=\"navbar navbar-expand-sm navbar-dark bg-primary\">\r\n  \t<a class=\"navbar-brand\" href=\"#\">{{title}}</a>\r\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n\t\t<ul class=\"navbar-nav\">\r\n\t\t\t<li class=\"nav-item\" *ngFor=\"let menuOption of menuOptions\">\r\n\t\t\t\t<a class=\"nav-link\" href=\"#\" routerLink=\"{{menuOption.path}}\" routerLinkActive=\"active\">{{menuOption.name}}</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'The Shore';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HeaderComponent.prototype, "menuOptions", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shore-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homePage/homePage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homePage/homePage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVQYWdlL2hvbWVQYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homePage/homePage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homePage/homePage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Welcome home"

/***/ }),

/***/ "./src/app/homePage/homePage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homePage/homePage.component.ts ***!
  \************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        console.log('homepage oninit');
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./homePage.component.html */ "./src/app/homePage/homePage.component.html"),
            styles: [__webpack_require__(/*! ./homePage.component.css */ "./src/app/homePage/homePage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/linesCentral/game/game.component.css":
/*!******************************************************!*\
  !*** ./src/app/linesCentral/game/game.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-container {\r\n\tbox-shadow: grey 0px 0px 10px;\r\n}\r\n.game-header {\r\n\ttext-align: center;\t\r\n}\r\n.home-team {\r\n\tcolor: green;\r\n}\r\n.away-team {\r\n\tcolor: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXNDZW50cmFsL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsV0FBVztDQUNYIiwiZmlsZSI6InNyYy9hcHAvbGluZXNDZW50cmFsL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtY29udGFpbmVyIHtcclxuXHRib3gtc2hhZG93OiBncmV5IDBweCAwcHggMTBweDtcclxufVxyXG4uZ2FtZS1oZWFkZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcdFxyXG59XHJcbi5ob21lLXRlYW0ge1xyXG5cdGNvbG9yOiBncmVlbjtcclxufVxyXG4uYXdheS10ZWFtIHtcclxuXHRjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/linesCentral/game/game.component.html":
/*!*******************************************************!*\
  !*** ./src/app/linesCentral/game/game.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\">\r\n\t<h4 class=\"game-header\">{{gameData.awayTeam}} ({{gameData.lines.awayAvgH2H | number}}) at {{gameData.homeTeam}} ({{gameData.lines.homeAvgH2H | number}})</h4>\r\n\t<div class=\"lines\">\r\n\t\t<div *ngFor=\"let site of gameData.lines.siteLines\">\r\n\t\t\t{{site.name}} : {{site.siteOdds.awayH2H}} / {{site.siteOdds.homeH2H}}\r\n\t\t</div>\r\n\t</div>\r\n</div> "

/***/ }),

/***/ "./src/app/linesCentral/game/game.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/linesCentral/game/game.component.ts ***!
  \*****************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameComponent = /** @class */ (function () {
    function GameComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameComponent.prototype, "gameData", void 0);
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/linesCentral/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/linesCentral/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/linesCentral/linesCentral.component.css":
/*!*********************************************************!*\
  !*** ./src/app/linesCentral/linesCentral.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n}\r\n.game {\r\n\tmargin: 10px;\r\n}\r\n.games-container {\r\n\tmargin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXNDZW50cmFsL2xpbmVzQ2VudHJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsYUFBYTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvbGluZXNDZW50cmFsL2xpbmVzQ2VudHJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxufVxyXG4uZ2FtZSB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG59XHJcbi5nYW1lcy1jb250YWluZXIge1xyXG5cdG1hcmdpbjogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/linesCentral/linesCentral.component.html":
/*!**********************************************************!*\
  !*** ./src/app/linesCentral/linesCentral.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Here's the list of games for this week: </h2>\r\n<div class=\"games-container\">\r\n\t<game class=\"game\" *ngFor=\"let x of games\" [gameData]=\"x\"></game>\r\n\t<button>Load more games</button>\r\n</div>"

/***/ }),

/***/ "./src/app/linesCentral/linesCentral.component.ts":
/*!********************************************************!*\
  !*** ./src/app/linesCentral/linesCentral.component.ts ***!
  \********************************************************/
/*! exports provided: LinesCentralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesCentralComponent", function() { return LinesCentralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _linesCentral_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linesCentral.service */ "./src/app/linesCentral/linesCentral.service.ts");



var LinesCentralComponent = /** @class */ (function () {
    function LinesCentralComponent(lineCentralService) {
        this.lineCentralService = lineCentralService;
    }
    LinesCentralComponent.prototype.ngOnInit = function () {
        this.games = this.lineCentralService.getSampleTheOddsData();
        console.log(this.games);
    };
    LinesCentralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lines-central',
            template: __webpack_require__(/*! ./linesCentral.component.html */ "./src/app/linesCentral/linesCentral.component.html"),
            styles: [__webpack_require__(/*! ./linesCentral.component.css */ "./src/app/linesCentral/linesCentral.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_linesCentral_service__WEBPACK_IMPORTED_MODULE_2__["LineCentralService"]])
    ], LinesCentralComponent);
    return LinesCentralComponent;
}());



/***/ }),

/***/ "./src/app/linesCentral/linesCentral.service.ts":
/*!******************************************************!*\
  !*** ./src/app/linesCentral/linesCentral.service.ts ***!
  \******************************************************/
/*! exports provided: LineCentralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineCentralService", function() { return LineCentralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/data/sample-the-odds-api.json */ "./src/assets/data/sample-the-odds-api.json");
var assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/data/sample-the-odds-api.json */ "./src/assets/data/sample-the-odds-api.json", 1);



var LineCentralService = /** @class */ (function () {
    function LineCentralService() {
    }
    LineCentralService.prototype.getSampleTheOddsData = function () {
        function getFormattedGame(game) {
            var home_team = game.home_team;
            return {
                homeTeam: home_team,
                awayTeam: getAwayTeam(home_team, game.teams),
                timeStamp: game.commence_time,
                lines: getLines(game.sites)
            };
        }
        function getAwayTeam(homeTeam, homeAwayArray) {
            return homeAwayArray.filter(function (team) {
                return team !== homeTeam;
            })[0];
        }
        function getLines(sites) {
            var lines, siteLines = [], awayAvgH2H = 0, homeAvgH2H = 0;
            sites.forEach(function (site) {
                var h2hArray = site.odds.h2h;
                siteLines.push({
                    name: site.site_nice,
                    lastUpdate: site.last_update,
                    siteOdds: getConvertedOdds(h2hArray)
                });
                awayAvgH2H += h2hArray[0];
                homeAvgH2H += h2hArray[1];
            });
            awayAvgH2H /= sites.length;
            homeAvgH2H /= sites.length;
            lines = {
                siteLines: siteLines,
                awayAvgH2H: awayAvgH2H,
                homeAvgH2H: homeAvgH2H,
                awayMedML: '-110',
                homeMedML: '-110' // TODO
            };
            return lines;
        }
        function getConvertedOdds(h2hArray) {
            var _a;
            var homeH2H, awayH2H;
            awayH2H = h2hArray[0], homeH2H = h2hArray[1];
            var awayProb, homeProb;
            _a = getProbabilityOdds(h2hArray), awayProb = _a[0], homeProb = _a[1];
            return {
                awayH2H: awayH2H,
                homeH2H: homeH2H,
                awayProb: awayProb,
                homeProb: homeProb
            };
        }
        function getProbabilityOdds(decimalOdds) { return [1 / decimalOdds[0], 1 / decimalOdds[1]]; }
        function convertToMoneyLine(probabilityOdds) {
            // TODO
        }
        function getMedML(moneyLines) {
            // TODO
        }
        /*
            OUT :
            export interface Lines {
                awayH2H: Number;
                homeH2H: Number;
                awayML: Number;
                homeML: Number;
                lastUpdate: Number;
                name: String;
            }

            export interface GameData {
               awayTeam: String;
               homeTeam: String;
               awayMedML: Number;
               homeMedML: Number;
               lines:Array<Lines>;
            }
            Array <Object>
                {
                    homeTeam: String
                    awayTeam: String
                    awayMedML: Number;
                    homeMedML: Number;
                    timeStamp: Number // TODO convert to nice date layout eventually
                    sites: Array <Object> {
                        awayMoneyLine: String
                        homeMoneyLine: String
                        site: String
                        lastUpdate: Number // TODO convert to nice date layout eventually
                    }
                }
        */
        if (assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2___namespace && assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2__ && assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2__.success) {
            assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2___namespace && assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2__;
            var games = assets_data_sample_the_odds_api_json__WEBPACK_IMPORTED_MODULE_2__.data, formattedData = [];
            games.forEach(function (game) {
                formattedData.push(getFormattedGame(game));
                game.homeTeam = game.home_team;
            });
            return formattedData;
        }
        // an else condition without the explicit else
        console.error('Could not read sample data');
    };
    LineCentralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], LineCentralService);
    return LineCentralService;
}());



/***/ }),

/***/ "./src/app/nflSchedule/nflSchedule.component.css":
/*!*******************************************************!*\
  !*** ./src/app/nflSchedule/nflSchedule.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n\tpadding: 10px;\r\n}\r\n\r\n.week-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n.week-header {\r\n\ttext-align: center;\r\n}\r\n\r\n.game-container {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.home-team {\r\n\twidth: 170px;\r\n}\r\n\r\n.away-team {\r\n\twidth: 170px;\r\n\ttext-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmZsU2NoZWR1bGUvbmZsU2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZDs7QUFFRDtDQUNDLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEI7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsK0JBQStCO0NBQy9COztBQUVEO0NBQ0MsYUFBYTtDQUNiOztBQUVEO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL25mbFNjaGVkdWxlL25mbFNjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53ZWVrLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLndlZWstaGVhZGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ob21lLXRlYW0ge1xyXG5cdHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLmF3YXktdGVhbSB7XHJcblx0d2lkdGg6IDE3MHB4O1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nflSchedule/nflSchedule.component.html":
/*!********************************************************!*\
  !*** ./src/app/nflSchedule/nflSchedule.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h1>NFL Schedule 2019</h1>\r\n\t<div class=\"week-container\" *ngFor=\"let week of schedule; let weekNum = index\">\r\n\t\t<div *ngIf=\"weekNum > 0\">\r\n\t\t\t<h4 class=\"week-header\">Week {{weekNum}} Schedule</h4>\r\n\t\t\t<div class=\"game-container\"*ngFor=\"let game of week\">\r\n\t\t\t\t<!-- TODO probably in the future replace this with bootstrap columns... \r\n\t\t\t\t\tmaybe... this way might look better --> \r\n\t\t\t\t<span class=\"home-team\">{{game.visitor}}</span> <span>@</span> <span class=\"away-team\">{{game.home}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div> "

/***/ }),

/***/ "./src/app/nflSchedule/nflSchedule.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nflSchedule/nflSchedule.component.ts ***!
  \******************************************************/
/*! exports provided: NFLScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFLScheduleComponent", function() { return NFLScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nflSchedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nflSchedule.service */ "./src/app/nflSchedule/nflSchedule.service.ts");



var NFLScheduleComponent = /** @class */ (function () {
    function NFLScheduleComponent(nflScheduleService) {
        this.nflScheduleService = nflScheduleService;
    }
    NFLScheduleComponent.prototype.ngOnInit = function () {
        this.schedule = this.nflScheduleService.getGames();
        console.log('nflScheduleComp oninit');
    };
    NFLScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nfl-schedule',
            template: __webpack_require__(/*! ./nflSchedule.component.html */ "./src/app/nflSchedule/nflSchedule.component.html"),
            styles: [__webpack_require__(/*! ./nflSchedule.component.css */ "./src/app/nflSchedule/nflSchedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nflSchedule_service__WEBPACK_IMPORTED_MODULE_2__["NFLScheduleService"]])
    ], NFLScheduleComponent);
    return NFLScheduleComponent;
}());



/***/ }),

/***/ "./src/app/nflSchedule/nflSchedule.service.ts":
/*!****************************************************!*\
  !*** ./src/app/nflSchedule/nflSchedule.service.ts ***!
  \****************************************************/
/*! exports provided: NFLScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFLScheduleService", function() { return NFLScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var assets_data_nfl_reg_season_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/data/nfl-reg-season.json */ "./src/assets/data/nfl-reg-season.json");
var assets_data_nfl_reg_season_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! assets/data/nfl-reg-season.json */ "./src/assets/data/nfl-reg-season.json", 1);



var NFLScheduleService = /** @class */ (function () {
    function NFLScheduleService() {
    }
    NFLScheduleService.prototype.getGames = function () {
        if (assets_data_nfl_reg_season_json__WEBPACK_IMPORTED_MODULE_2__ && assets_data_nfl_reg_season_json__WEBPACK_IMPORTED_MODULE_2__.data.length) {
            /*
            {
                "Week": 1,
                "Day": "Thu",
                "": "September 5",
                "VisTm": "Green Bay Packers",
                "Pts": "",
                "__1": "@",
                "HomeTm": "Chicago Bears",
                "Pts__1": "",
                "Time": "8:20 PM"
             },
            */
            var formattedData = [];
            for (var i = 1; i <= 17; i++) {
                formattedData[i] = [];
            }
            assets_data_nfl_reg_season_json__WEBPACK_IMPORTED_MODULE_2__.data.forEach(function (element) {
                formattedData[element.Week].push({
                    //todo figure out date
                    day: element.Day + ' ' + element.Time,
                    visitor: element.VisTm,
                    home: element.HomeTm
                });
            });
            var nflSchedule = [];
            return formattedData;
        }
        // an else condition without the explicit else
        console.error('Could not read sample data');
    };
    NFLScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], NFLScheduleService);
    return NFLScheduleService;
}());



/***/ }),

/***/ "./src/assets/data/nfl-reg-season.json":
/*!*********************************************!*\
  !*** ./src/assets/data/nfl-reg-season.json ***!
  \*********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":[{"Week":1,"Day":"Thu","":"September 5","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"8:20 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"1:00 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"4:05 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"4:05 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:25 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"4:25 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"4:25 PM"},{"Week":1,"Day":"Sun","":"September 8","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"8:20 PM"},{"Week":1,"Day":"Mon","":"September 9","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"7:10 PM"},{"Week":1,"Day":"Mon","":"September 9","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"10:20 PM"},{"Week":2,"Day":"Thu","":"September 12","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"8:20 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"4:05 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"4:25 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"4:25 PM"},{"Week":2,"Day":"Sun","":"September 15","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"8:20 PM"},{"Week":2,"Day":"Mon","":"September 16","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"8:15 PM"},{"Week":3,"Day":"Thu","":"September 19","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"8:20 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"1:00 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:05 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"4:05 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"4:25 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"4:25 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"4:25 PM"},{"Week":3,"Day":"Sun","":"September 22","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"8:20 PM"},{"Week":3,"Day":"Mon","":"September 23","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"8:15 PM"},{"Week":4,"Day":"Thu","":"September 26","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"8:20 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"1:00 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:05 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"4:05 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"4:25 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"4:25 PM"},{"Week":4,"Day":"Sun","":"September 29","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"8:20 PM"},{"Week":4,"Day":"Mon","":"September 30","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"8:15 PM"},{"Week":5,"Day":"Thu","":"October 3","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"8:20 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"4:05 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"4:25 PM"},{"Week":5,"Day":"Sun","":"October 6","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"8:20 PM"},{"Week":5,"Day":"Mon","":"October 7","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"8:15 PM"},{"Week":6,"Day":"Thu","":"October 10","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"8:20 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"9:30 AM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"1:00 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"1:00 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"1:00 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"1:00 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"1:00 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:05 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"4:05 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"4:25 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"4:25 PM"},{"Week":6,"Day":"Sun","":"October 13","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"8:20 PM"},{"Week":6,"Day":"Mon","":"October 14","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"8:15 PM"},{"Week":7,"Day":"Thu","":"October 17","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"8:20 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"4:05 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"4:25 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"4:25 PM"},{"Week":7,"Day":"Sun","":"October 20","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"8:20 PM"},{"Week":7,"Day":"Mon","":"October 21","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"8:15 PM"},{"Week":8,"Day":"Thu","":"October 24","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"8:20 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"1:00 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"4:05 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"4:25 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"4:25 PM"},{"Week":8,"Day":"Sun","":"October 27","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"8:20 PM"},{"Week":8,"Day":"Mon","":"October 28","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"8:15 PM"},{"Week":9,"Day":"Thu","":"October 31","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"8:20 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"9:30 AM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"1:00 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"1:00 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"1:00 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"4:05 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"4:05 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"4:25 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"4:25 PM"},{"Week":9,"Day":"Sun","":"November 3","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"8:20 PM"},{"Week":9,"Day":"Mon","":"November 4","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"8:15 PM"},{"Week":10,"Day":"Thu","":"November 7","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"8:20 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"1:00 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"4:05 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"4:25 PM"},{"Week":10,"Day":"Sun","":"November 10","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"8:20 PM"},{"Week":10,"Day":"Mon","":"November 11","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"8:15 PM"},{"Week":11,"Day":"Thu","":"November 14","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"8:20 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"4:05 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"4:25 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"4:25 PM"},{"Week":11,"Day":"Sun","":"November 17","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"8:20 PM"},{"Week":11,"Day":"Mon","":"November 18","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"8:15 PM"},{"Week":12,"Day":"Thu","":"November 21","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"8:20 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"4:05 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"4:25 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"4:25 PM"},{"Week":12,"Day":"Sun","":"November 24","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"8:20 PM"},{"Week":12,"Day":"Mon","":"November 25","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"8:15 PM"},{"Week":13,"Day":"Thu","":"November 28","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"12:30 PM"},{"Week":13,"Day":"Thu","":"November 28","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"4:30 PM"},{"Week":13,"Day":"Thu","":"November 28","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"8:20 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"1:00 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:05 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"4:25 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"4:25 PM"},{"Week":13,"Day":"Sun","":"December 1","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"8:20 PM"},{"Week":13,"Day":"Mon","":"December 2","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"8:15 PM"},{"Week":14,"Day":"Thu","":"December 5","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"8:20 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"1:00 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"4:05 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:25 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"4:25 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"4:25 PM"},{"Week":14,"Day":"Sun","":"December 8","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"8:20 PM"},{"Week":14,"Day":"Mon","":"December 9","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"8:15 PM"},{"Week":15,"Day":"Thu","":"December 12","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"8:20 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Seattle Seahawks","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"New England Patriots","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Tampa Bay Buccaneers","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Green Bay Packers","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Denver Broncos","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"Pittsburgh Steelers","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"Arizona Cardinals","Pts__1":"","Time":"4:05 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Oakland Raiders","Pts__1":"","Time":"4:05 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"4:25 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"4:25 PM"},{"Week":15,"Day":"Sun","":"December 15","VisTm":"Minnesota Vikings","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"8:20 PM"},{"Week":15,"Day":"Mon","":"December 16","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"New Orleans Saints","Pts__1":"","Time":"8:15 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Jacksonville Jaguars","Pts":"","__1":"@","HomeTm":"Atlanta Falcons","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Baltimore Ravens","Pts":"","__1":"@","HomeTm":"Cleveland Browns","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Carolina Panthers","Pts":"","__1":"@","HomeTm":"Indianapolis Colts","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Detroit Lions","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Cincinnati Bengals","Pts":"","__1":"@","HomeTm":"Miami Dolphins","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Buffalo Bills","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"New York Jets","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Tennessee Titans","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Los Angeles Chargers","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Los Angeles Rams","Pts":"","__1":"@","HomeTm":"San Francisco 49ers","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Houston Texans","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"New York Giants","Pts":"","__1":"@","HomeTm":"Washington Redskins","Pts__1":"","Time":"1:00 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Dallas Cowboys","Pts":"","__1":"@","HomeTm":"Philadelphia Eagles","Pts__1":"","Time":"4:25 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"4:25 PM"},{"Week":16,"Day":"Sun","":"December 22","VisTm":"Kansas City Chiefs","Pts":"","__1":"@","HomeTm":"Chicago Bears","Pts__1":"","Time":"8:20 PM"},{"Week":16,"Day":"Mon","":"December 23","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"8:15 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"New York Jets","Pts":"","__1":"@","HomeTm":"Buffalo Bills","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"New Orleans Saints","Pts":"","__1":"@","HomeTm":"Carolina Panthers","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Cleveland Browns","Pts":"","__1":"@","HomeTm":"Cincinnati Bengals","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Washington Redskins","Pts":"","__1":"@","HomeTm":"Dallas Cowboys","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Green Bay Packers","Pts":"","__1":"@","HomeTm":"Detroit Lions","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Tennessee Titans","Pts":"","__1":"@","HomeTm":"Houston Texans","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Indianapolis Colts","Pts":"","__1":"@","HomeTm":"Jacksonville Jaguars","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Los Angeles Chargers","Pts":"","__1":"@","HomeTm":"Kansas City Chiefs","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Chicago Bears","Pts":"","__1":"@","HomeTm":"Minnesota Vikings","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Miami Dolphins","Pts":"","__1":"@","HomeTm":"New England Patriots","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Philadelphia Eagles","Pts":"","__1":"@","HomeTm":"New York Giants","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Pittsburgh Steelers","Pts":"","__1":"@","HomeTm":"Baltimore Ravens","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Atlanta Falcons","Pts":"","__1":"@","HomeTm":"Tampa Bay Buccaneers","Pts__1":"","Time":"1:00 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Oakland Raiders","Pts":"","__1":"@","HomeTm":"Denver Broncos","Pts__1":"","Time":"4:25 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"Arizona Cardinals","Pts":"","__1":"@","HomeTm":"Los Angeles Rams","Pts__1":"","Time":"4:25 PM"},{"Week":17,"Day":"Sun","":"December 29","VisTm":"San Francisco 49ers","Pts":"","__1":"@","HomeTm":"Seattle Seahawks","Pts__1":"","Time":"4:25 PM"}]};

/***/ }),

/***/ "./src/assets/data/sample-the-odds-api.json":
/*!**************************************************!*\
  !*** ./src/assets/data/sample-the-odds-api.json ***!
  \**************************************************/
/*! exports provided: success, data, default */
/***/ (function(module) {

module.exports = {"success":true,"data":[{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Carolina Panthers","Tampa Bay Buccaneers"],"commence_time":1543773600,"home_team":"Tampa Bay Buccaneers","sites":[{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[1.57,2.55]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[1.57,2.5]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[1.59,2.5]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[1.62,2.54]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[1.57,2.55]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[1.6,2.45]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Buffalo Bills","Miami Dolphins"],"commence_time":1543773600,"home_team":"Miami Dolphins","sites":[{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[2.65,1.53]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[2.7,1.5]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[2.66,1.53]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[2.76,1.55]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[2.65,1.53]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[2.66,1.51]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Detroit Lions","Los Angeles Rams"],"commence_time":1543773600,"home_team":"Detroit Lions","sites":[{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[5,1.19]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[4.75,1.18]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[5,1.2]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[4.95,1.21]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[5.1,1.23]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[4.75,1.2]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Indianapolis Colts","Jacksonville Jaguars"],"commence_time":1543773600,"home_team":"Jacksonville Jaguars","sites":[{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[1.43,2.9]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[1.44,2.9]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[1.49,2.78]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[1.53,2.78]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[1.49,2.75]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[1.46,2.81]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Atlanta Falcons","Baltimore Ravens"],"commence_time":1543773600,"home_team":"Atlanta Falcons","sites":[{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[1.87,2.14]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[1.8,2.05]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[1.8,2.05]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[1.77,2.09]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[1.8,2.05]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[1.8,2.05]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Arizona Cardinals","Green Bay Packers"],"commence_time":1543773600,"home_team":"Green Bay Packers","sites":[{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[7.6,1.14]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[7.39,1.1]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[6.5,1.13]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[7,1.1]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[8.75,1.08]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[6.75,1.11]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Cincinnati Bengals","Denver Broncos"],"commence_time":1543773600,"home_team":"Cincinnati Bengals","sites":[{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[3.05,1.47]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[2.95,1.43]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[3.03,1.41]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[3,1.42]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[2.95,1.43]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[2.95,1.43]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Cleveland Browns","Houston Texans"],"commence_time":1543773600,"home_team":"Houston Texans","sites":[{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[3.2,1.43]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[3.05,1.4]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[3.07,1.4]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[3.1,1.4]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[3.1,1.4]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[3,1.42]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Chicago Bears","New York Giants"],"commence_time":1543773600,"home_team":"New York Giants","sites":[{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[1.57,2.68]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[1.54,2.6]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[1.53,2.6]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[1.51,2.65]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[1.53,2.65]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[1.53,2.65]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Kansas City Chiefs","Oakland Raiders"],"commence_time":1543784700,"home_team":"Oakland Raiders","sites":[{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[1.06,9]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[1.09,8.25]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[1.08,9.12]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[1.11,9]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[1.08,8]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[1.08,8.97]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["New York Jets","Tennessee Titans"],"commence_time":1543784700,"home_team":"Tennessee Titans","sites":[{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[4.3,1.29]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[4,1.27]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[4.17,1.25]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[4,1.25]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[4.25,1.24]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[4.15,1.25]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["San Francisco 49ers","Seattle Seahawks"],"commence_time":1543785900,"home_team":"Seattle Seahawks","sites":[{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[4.75,1.18]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[4.65,1.2]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[4.75,1.21]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[5.1,1.23]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[4.65,1.21]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[5,1.19]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Minnesota Vikings","New England Patriots"],"commence_time":1543785900,"home_team":"New England Patriots","sites":[{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[3,1.42]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[3.2,1.44]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[3,1.43]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[2.95,1.43]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[2.95,1.43]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[3,1.42]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Los Angeles Chargers","Pittsburgh Steelers"],"commence_time":1543800000,"home_team":"Pittsburgh Steelers","sites":[{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[2.45,1.59]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[2.7,1.58]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[2.6,1.56]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[2.55,1.57]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[2.55,1.57]}},{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[2.51,1.57]}}],"sites_count":6},{"sport_key":"americanfootball_nfl","sport_nice":"NFL","teams":["Philadelphia Eagles","Washington Redskins"],"commence_time":1543886100,"home_team":"Philadelphia Eagles","sites":[{"site_key":"bookmaker","site_nice":"Bookmaker","last_update":1543688225,"odds":{"h2h":[1.36,3.26]}},{"site_key":"bovada","site_nice":"Bovada","last_update":1543688279,"odds":{"h2h":[1.36,3.25]}},{"site_key":"mybookieag","site_nice":"MyBookie.ag","last_update":1543688255,"odds":{"h2h":[1.37,3.3]}},{"site_key":"betfair","site_nice":"Betfair","last_update":1543688054,"odds":{"h2h":[1.4,3.25]}},{"site_key":"intertops","site_nice":"Intertops","last_update":1543688111,"odds":{"h2h":[1.39,3.15]}},{"site_key":"gtbets","site_nice":"GTbets","last_update":1543688281,"odds":{"h2h":[1.38,3.21]}}],"sites_count":6}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Conor Maley\Documents\code\angular-sandbox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map