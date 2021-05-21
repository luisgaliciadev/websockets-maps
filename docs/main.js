(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa/mapa.component */ "./src/app/mapa/mapa.component.ts");



class AppComponent {
    constructor() {
        this.title = 'mapas';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mapa");
    } }, directives: [_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_1__["MapaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapa/mapa.component */ "./src/app/mapa/mapa.component.ts");








const config = { url: 'https://server-sockets-maps.herokuapp.com', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["MapaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["MapaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["SocketIoModule"].forRoot(config)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mapa/mapa.component.ts":
/*!****************************************!*\
  !*** ./src/app/mapa/mapa.component.ts ***!
  \****************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");




const _c0 = ["map"];
class MapaComponent {
    constructor(_http, _websocketService) {
        this._http = _http;
        this._websocketService = _websocketService;
        this.marcadores = [];
        this.infoWindows = [];
        this.lugares = [];
    }
    ngOnInit() {
        this._http.get('https://server-sockets-maps.herokuapp.com/mapa').subscribe((lugares) => {
            this.lugares = lugares;
            this.cargarMapa();
        });
        this.escucharSockets();
    }
    ngAfterViewInit() {
    }
    escucharSockets() {
        // Marcador nuevo
        this._websocketService.listen('marcador-nuevo').subscribe((marcador) => {
            console.log(marcador);
            this.agregarMarcador(marcador);
        });
        // Marcado mover
        this._websocketService.listen('marcador-mover').subscribe((marcador) => {
            for (let i in this.marcadores) {
                if (this.marcadores[i].getTitle() === marcador.id) {
                    let latLng = new google.maps.LatLng(marcador.lat, marcador.lng);
                    this.marcadores[i].setPosition(latLng);
                    break;
                }
            }
        });
        // Marcador borrar
        this._websocketService.listen('marcador-borrar').subscribe((id) => {
            for (let i in this.marcadores) {
                if (this.marcadores[i].getTitle() === id) {
                    this.marcadores[i].setMap(null);
                    break;
                }
            }
        });
    }
    cargarMapa() {
        console.log(this.mapElement.nativeElement);
        const latLng = new google.maps.LatLng(37.784679, -122.395936);
        const mapaOpciones = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapaOpciones);
        this.map.addListener('click', (coors) => {
            let nuevoMarcador = {
                nombre: 'Nuevo Lugar',
                lat: coors.latLng.lat(),
                lng: coors.latLng.lng(),
                id: new Date().toISOString()
            };
            this.agregarMarcador(nuevoMarcador);
            // Emitir evento de sockets para agregar marcador
            this._websocketService.emit('marcador-nuevo', nuevoMarcador);
        });
        for (let lugar of this.lugares) {
            this.agregarMarcador(lugar);
        }
        ;
    }
    agregarMarcador(marcador) {
        const latLng = new google.maps.LatLng(marcador.lat, marcador.lng);
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            draggable: true,
            title: marcador.id
        });
        this.marcadores.push(marker);
        // Contenido de marcado
        let contenido = `<b>${marcador.nombre}</b>`;
        let infoWindow = new google.maps.InfoWindow({
            content: contenido
        });
        this.infoWindows.push(infoWindow);
        // Evento click
        google.maps.event.addDomListener(marker, 'click', () => {
            this.infoWindows.forEach(infoW => infoW.close());
            infoWindow.open(this.map, marker);
        });
        // Evento doble click
        google.maps.event.addDomListener(marker, 'dblclick', (coors) => {
            // Borrar marcador
            marker.setMap(null);
            // Disparar evento de sockets para borra el marcador de todos
            this._websocketService.emit('marcador-borrar', marcador.id);
        });
        // Evento drag
        google.maps.event.addDomListener(marker, 'drag', (coors) => {
            // Obtener coordenedas      
            let nuevoMarcador = {
                lat: coors.latLng.lat(),
                lng: coors.latLng.lng(),
                nombre: marcador.nombre,
                id: marker.getTitle()
            };
            console.log(nuevoMarcador);
            // Disparar evento de sockets para mover el marcador
            this._websocketService.emit('marcador-mover', nuevoMarcador);
        });
    }
}
MapaComponent.ɵfac = function MapaComponent_Factory(t) { return new (t || MapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"])); };
MapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapaComponent, selectors: [["app-mapa"]], viewQuery: function MapaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, decls: 5, vars: 0, consts: [["id", "map"], ["map", ""]], template: function MapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mapa - Google Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0, 1);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcGEvbWFwYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapa',
                templateUrl: './mapa.component.html',
                styleUrls: ['./mapa.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }]; }, { mapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map']
        }] }); })();


/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");



class WebsocketService {
    constructor(_socket) {
        this._socket = _socket;
        this.socketStatus = false;
        this.checkStatus();
    }
    checkStatus() {
        // Cliente conectado
        this._socket.on('connect', () => {
            this.socketStatus = true;
        });
        // Cliente desconectado
        this._socket.on('disconnect', () => {
            this.socketStatus = false;
        });
    }
    // Emitir
    emit(evento, payload, callback) {
        console.log('Emitiendo: ', evento);
        this._socket.emit(evento, payload, callback);
    }
    // Escuchar/recibir
    listen(evento) {
        return this._socket.fromEvent(evento);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\developer\sockets-googlemaps\websockets-maps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map