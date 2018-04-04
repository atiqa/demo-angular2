webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chess_chess_component__ = __webpack_require__("../../../../../src/app/chess/chess.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'chess', component: __WEBPACK_IMPORTED_MODULE_6__chess_chess_component__["a" /* ChessComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_component__["a" /* HeroesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
        console.log("AppRoutingModule");
        console.log("routes=" + JSON.stringify(routes));
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<bootstrap-grid>\n<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/heroes\">Heroes</a>\n  <a routerLink=\"/chess\">Chess</a>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n</bootstrap-grid>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_grid__ = __webpack_require__("../../../../ng2-bootstrap-grid/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chess_chess_component__ = __webpack_require__("../../../../../src/app/chess/chess.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_grid__["a" /* BootstrapGridModule */],
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__chess_chess_component__["a" /* ChessComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_10__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chess/chess.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chess {\n\tborder-style: solid;\n\theight: 100px;\n\t\n}\n\nimg {\n\tmargin-top: 0px;\n\tmargin-right: 15px;\n\theight: 80%;\n\twidth: 100%;\n}\n\n.darkgrey {\n\tbackground-color : darkgrey;\n}\n\n.lightgrey {\n\tbackground-color : lightgrey;\n}\n\n@keyframes flickerAnimation {\n  0%   { opacity:1; }\n  50%  { opacity:0; }\n  100% { opacity:1; }\n}\n\n@-webkit-keyframes flickerAnimation{\n  0%   { opacity:1; }\n  50%  { opacity:0; }\n  100% { opacity:1; }\n}\n\n.animate-flicker {\n   -webkit-animation: flickerAnimation .5s infinite;\n    animation: flickerAnimation .5s infinite;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chess/chess.component.html":
/***/ (function(module, exports) {

module.exports = "<row *ngFor=\"let columns of rowList\">\n\t<column  *ngFor=\"let column of columns\" ngClass=\"{{column.cl}} {{column.bc}}\" sm=\"{{column.sm}}\" (click)=\"move(column)\"  >\n\t\t<img  [src]=\"imagePath + column.img\" *ngIf=\"column.img\" />\n\t</column>\n</row>\n"

/***/ }),

/***/ "../../../../../src/app/chess/chess.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { Promise } from 'es6-promise';
var blackPieces = ["-", "rook-black.png", "knight-black.png", "bishop-black.png", "queen-black.png", "king-black.png", "bishop-black.png", "knight-black.png", "rook-black.png"];
var whitePieces = ["-", "rook-white.png", "knight-white.png", "bishop-white.png", "queen-white.png", "king-white.png", "bishop-white.png", "knight-white.png", "rook-white.png"];
var darkgrey = "darkgrey";
var lightgrey = "lightgrey";
var activeImage = null;
var lastPosition = null;
var white = true;
var flickeringCells = [];
function resolveAfter2Seconds(x) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(x);
        }, 2000);
    });
}
function f1(f) {
    return __awaiter(this, void 0, void 0, function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, resolveAfter2Seconds(f)];
                case 1:
                    x = _a.sent();
                    console.log(x); // 10
                    f();
                    return [2 /*return*/];
            }
        });
    });
}
var ChessComponent = (function () {
    function ChessComponent() {
        this.rowList = [];
        this.pieceLocation = [];
        this.imagePath = "assets/Images/";
        this.validateRook = this.validateRook.bind(this);
    }
    ChessComponent.prototype.ngOnInit = function () {
        var bc = darkgrey;
        for (var i = 1; i <= 8; i++) {
            var columnList = [];
            columnList.push({ sm: 2, img: null });
            bc = bc == darkgrey ? lightgrey : darkgrey;
            for (var j = 1; j <= 8; j++) {
                var id = "i" + i + "j" + j;
                bc = bc == darkgrey ? lightgrey : darkgrey;
                var img = i == 1 ? blackPieces[j] : i == 8 ? whitePieces[j] : i == 2 ? "pawn-black.png" : i == 7 ? "pawn-white.png" : null;
                var pos = { r: i - 1, c: j };
                if (img != null) {
                    // img = "assets/Images/" + img;
                }
                columnList.push({ pos: pos, cl: "chess", sm: 1, bc: bc, img: img });
            }
            columnList.push({ sm: 2, img: null });
            this.rowList.push(columnList);
        }
        for (var ndx in this.rowList) {
            // console.table(this.rowList[ndx]);
        }
    };
    ChessComponent.prototype.validateKing = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var rDiff = Math.abs(r - lastPosition.r);
        var cDiff = Math.abs(c - lastPosition.c);
        if (Math.abs(rDiff - cDiff) <= 1) {
            var img = this.rowList[r][c].img;
            if (img != null) {
                return this.validateColor(img);
            }
            return true;
        }
        return false;
    };
    ChessComponent.prototype.validateQueen = function (pos) {
        return this.validateBishop(pos) || this.validateRook(pos);
    };
    ChessComponent.prototype.validateBishop = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var rDiff = Math.abs(r - lastPosition.r);
        var cDiff = Math.abs(c - lastPosition.c);
        console.log("validateBishop - rDiff=" + rDiff + " cDiff=" + cDiff);
        if (rDiff == cDiff) {
            var rDelta = (lastPosition.r < r) ? 1 : -1;
            var cDelta = (lastPosition.c < c) ? 1 : -1;
            //alert("rDelta=" + rDelta + " cDelta=" + cDelta);
            for (var row = lastPosition.r, col = lastPosition.c; row != r; row += rDelta, col += cDelta) {
                //alert("row=" + row + " col=" + col);
                var cell = this.rowList[row][col];
                // console.table(cell);
                if (cell.img != null) {
                    return false;
                }
            }
            var img = this.rowList[r][c].img;
            if (img != null) {
                return this.validateColor(img);
            }
            return true;
        }
        return false;
    };
    ChessComponent.prototype.validateKnight = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var rDiff = Math.abs(r - lastPosition.r);
        var cDiff = Math.abs(c - lastPosition.c);
        if (((rDiff == 1) && (cDiff == 2)) || ((rDiff == 2) && (cDiff == 1)) || ((c == lastPosition.c) && (r == lastPosition.r))) {
            return true;
        }
        return false;
    };
    ChessComponent.prototype.validateColor = function (img) {
        var ret = false;
        if (((img.search("white") == -1) && (activeImage.search("white") != -1)) || ((img.search("black") == -1) && (activeImage.search("black") != -1))) {
            ret = true;
        }
        console.log("validateColor: ret=" + ret);
        return ret;
    };
    ChessComponent.prototype.validateRook = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var ret = false;
        if ((c == lastPosition.c) || (r == lastPosition.r)) {
            var delta = (lastPosition.r < r) ? 1 : -1;
            var cellWithImage = null;
            var ndx = lastPosition.r;
            var last = r;
            var row = true;
            if (r == lastPosition.r) {
                delta = (lastPosition.c < c) ? 1 : -1;
                ndx = lastPosition.c;
                last = c;
                row = false;
            }
            while (ndx != last) {
                var cell = row ? this.rowList[ndx][c] : this.rowList[r][ndx];
                if (cell.img != null) {
                    cellWithImage = cell;
                    break;
                }
                ndx += delta;
            }
            if (ndx == last) {
                var img = row ? this.rowList[ndx][c].img : this.rowList[r][ndx].img;
                ret = img == null ? true : this.validateColor(img);
            }
        }
        return ret;
    };
    ChessComponent.prototype.validateWhitePawn = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var rOffset = lastPosition.r - r;
        var cOffset = Math.abs(lastPosition.c - c);
        var ret = false;
        var img = this.rowList[r][c].img;
        if ((img == null) && (c == lastPosition.c) && (rOffset == 1 || rOffset == 0)) {
            ret = true;
        }
        else if ((img != null) && (cOffset == 1) && (rOffset == 1 || rOffset == 0)) {
            ret = this.validateColor(img);
        }
        return ret;
    };
    ChessComponent.prototype.fleckerCell = function (r, c) {
        if (r >= 0 && r < 8 && c > 0 && c < 9) {
            var cell = this.rowList[r][c];
            var img = cell.img;
            if ((img == null) || this.validateColor(img)) {
                cell.cl = "animate-flicker";
                flickeringCells.push(cell);
                console.log("flickering");
            }
        }
    };
    ChessComponent.prototype.fleckerCellA = function (cell) {
        var img = cell.img;
        if ((img == null) || this.validateColor(img)) {
            cell.cl = "animate-flicker";
            flickeringCells.push(cell);
            console.log("flickering image: " + img);
        }
    };
    ChessComponent.prototype.flickerPawn = function (pos, delta) {
        var r = pos.r;
        var c = pos.c;
        this.fleckerCell(r, c);
        r = pos.r + delta;
        var cell = this.rowList[r][c];
        var img = cell.img;
        console.log("img=" + img);
        if (img == null) {
            this.fleckerCellA(cell);
        }
        if (c + 1 < 9) {
            cell = this.rowList[r][c + 1];
            img = cell.img;
            if ((img != null) && this.validateColor(img)) {
                this.fleckerCellA(cell);
            }
        }
        if (c - 1 > 0) {
            cell = this.rowList[r][c - 1];
            img = cell.img;
            if ((img != null) && this.validateColor(img)) {
                this.fleckerCellA(cell);
            }
        }
    };
    ChessComponent.prototype.flickerKnight = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var list = [{ r: 0, c: 0 }, { r: -2, c: -1 }, { r: -2, c: 1 }, { r: -1, c: 2 }, { r: -1, c: -2 }, { r: 2, c: 1 }, { r: 2, c: -1 }, { r: 1, c: -2 }, { r: 1, c: 2 }];
        for (var i in list) {
            var v = list[i];
            this.fleckerCell(r + v.r, c + v.c);
        }
    };
    ChessComponent.prototype.flickerBishop = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var list = [{ r: -1, c: -1 }, { r: -1, c: 1 }, { r: 1, c: -1 }, { r: 1, c: 1 }];
        for (var i in list) {
            console.log("flickerBishop - i=" + i);
            var v = list[i];
            for (var row = lastPosition.r, col = lastPosition.c; row < 8 && row >= 0 && col > 0 && col < 9; row += v.r, col += v.c) {
                console.log("flickerBishop - row/col=" + row + "/" + col);
                var cell = this.rowList[row][col];
                this.fleckerCellA(cell);
                if (cell.img != null) {
                    break;
                }
            }
        }
        console.log("flickerBishop - completed.");
    };
    ChessComponent.prototype.flickerRook = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var list = [{ r: 0, c: -1 }, { r: 0, c: 1 }, { r: 1, c: 0 }, { r: -1, c: 0 }];
        for (var i in list) {
            console.log("flickerRook - i=" + i);
            var v = list[i];
            for (var row = lastPosition.r, col = lastPosition.c; row < 8 && row >= 0 && col > 0 && col < 9; row += v.r, col += v.c) {
                var cell = this.rowList[row][col];
                console.log("flickerRook - row/col=" + row + "/" + col);
                this.fleckerCellA(cell);
                if (cell.img != null && cell.img != activeImage) {
                    break;
                }
            }
        }
        console.log("flickerRook - completed.");
    };
    ChessComponent.prototype.flickerQueen = function (pos) {
        this.flickerRook(pos);
        this.flickerBishop(pos);
    };
    ChessComponent.prototype.flickerKing = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var list = [{ r: 0, c: 0 }, { r: 0, c: -1 }, { r: 0, c: 1 }, { r: 1, c: 0 }, { r: -1, c: 0 }, { r: -1, c: -1 }, { r: -1, c: 1 }, { r: 1, c: -1 }, { r: 1, c: 1 }];
        for (var i in list) {
            var v = list[i];
            this.fleckerCell(r + v.r, c + v.c);
        }
    };
    ChessComponent.prototype.flicker = function (pos) {
        console.log("flicker: pos=" + JSON.stringify(pos));
        switch (activeImage) {
            case "pawn-white.png":
                this.flickerPawn(pos, -1);
                break;
            case "pawn-black.png":
                this.flickerPawn(pos, 1);
                break;
            case "rook-white.png":
            case "rook-black.png":
                this.flickerRook(pos);
                break;
            case "knight-white.png":
            case "knight-black.png":
                this.flickerKnight(pos);
                break;
            case "bishop-white.png":
            case "bishop-black.png":
                this.flickerBishop(pos);
                break;
            case "queen-white.png":
            case "queen-black.png":
                this.flickerQueen(pos);
                break;
            case "king-white.png":
            case "king-black.png":
                this.flickerKing(pos);
                break;
            default:
                break;
        }
    };
    ChessComponent.prototype.validateBlackPawn = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var rOffset = r - lastPosition.r;
        var cOffset = Math.abs(lastPosition.c - c);
        var ret = false;
        var img = this.rowList[r][c].img;
        if ((img == null) && (c == lastPosition.c) && (rOffset == 1 || rOffset == 0)) {
            ret = true;
        }
        else if ((img != null) && (cOffset == 1) && (rOffset == 1 || rOffset == 0)) {
            ret = this.validateColor(img);
        }
        return ret;
    };
    ChessComponent.prototype.validate = function (pos) {
        var r = pos.r;
        var c = pos.c;
        var ret = false;
        switch (activeImage) {
            case "pawn-white.png":
                ret = this.validateWhitePawn(pos);
                break;
            case "pawn-black.png":
                ret = this.validateBlackPawn(pos);
                break;
            case "rook-white.png":
            case "rook-black.png":
                ret = this.validateRook(pos);
                break;
            case "knight-white.png":
            case "knight-black.png":
                ret = this.validateKnight(pos);
                break;
            case "bishop-white.png":
            case "bishop-black.png":
                ret = this.validateBishop(pos);
                break;
            case "queen-white.png":
            case "queen-black.png":
                ret = this.validateQueen(pos);
                break;
            case "king-white.png":
            case "king-black.png":
                ret = this.validateKing(pos);
                break;
            default:
                if ((c == lastPosition.c) && (r == lastPosition.r)) {
                    ret = true;
                }
                break;
        }
        console.log("validate - ret=" + ret);
        return ret;
    };
    ChessComponent.prototype.canMove = function (img) {
        if ((white && img.search("white") != -1) || (!white && img.search("black") != -1)) {
            white = !white;
            console.log("canMove : true");
            return true;
        }
        console.log("canMove : false");
        return false;
    };
    ChessComponent.prototype.cancelFlikering = function () {
        for (var i in flickeringCells) {
            var v = flickeringCells[i];
            this.rowList[v.pos.r][v.pos.c].cl = "chess";
        }
        flickeringCells = [];
    };
    ChessComponent.prototype.move = function (column) {
        var pos = column.pos;
        var r = pos.r;
        var c = pos.c;
        var img = column.img;
        this.cancelFlikering();
        console.log("Moving " + img + " row=" + r + " col=" + c + " activeImage=" + activeImage);
        if (img != null && activeImage == null && this.canMove(img)) {
            this.rowList[r][c].img = null;
            activeImage = img;
            lastPosition = pos;
            this.flicker(pos);
            console.log("M1: Clicked on image");
        }
        else if (img == null && activeImage != null) {
            if (this.validate(pos)) {
                this.rowList[r][c].img = activeImage;
                activeImage = null;
                // promise1.then(() => { this.flicker(pos);activeImage = null;});
                // setTimeout(function(){doInvoke();}, 3000);
                // p.then((res) => {this.hello();}); 
                // lastPosition = pos;
                // f1(() => {this.flicker(lastPosition);activeImage = null;console.log("flicker completed.");});
                console.log("M2: Clicked on empty cell - Active image placed");
            }
            else {
                console.log("M2: Clicked on empty cell ignored");
            }
        }
        else if (activeImage != null) {
            if (this.validate(pos)) {
                this.rowList[r][c].img = activeImage;
                activeImage = null;
                console.log("M3: Clicked on image - image replaced by Active image");
            }
            else {
                console.log("M3: Clicked on image ignored.");
            }
        }
        else {
            console.log("M4: No Action");
        }
    };
    ChessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chess',
            template: __webpack_require__("../../../../../src/app/chess/chess.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chess/chess.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChessComponent);
    return ChessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n      routerLink=\"/detail/{{hero.id}}\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 7); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{ hero.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{hero.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var id = this.route.snapshot.paramMap.get('id');
        // this.heroService.getHero(id.toFixed).subscribe(hero:Hero => this.hero = hero);
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_heroes__ = __webpack_require__("../../../../../src/app/mock-heroes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroService = (function () {
    function HeroService(messageService) {
        this.messageService = messageService;
    }
    HeroService.prototype.getHeroes = function () {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mock_heroes__["a" /* HEROES */]);
    };
    HeroService.prototype.getHero = function (id) {
        // Todo: send the message _after_ fetching the hero
        this.messageService.add("HeroService: fetched hero id=" + id);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mock_heroes__["a" /* HEROES */].find(function (hero) { return hero.id === id; }));
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroesComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.heroes a:hover {\n  color:#607D8B;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes',
            template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor=\"let message of messageService.messages\"> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-heroes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map