"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var router_1 = require("@angular/router");
var card_movie_component_1 = require("./card-movie/card-movie.component");
var libs_module_1 = require("src/app/libs/libs.module");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                sidebar_component_1.SidebarComponent,
                card_movie_component_1.CardMovieComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                libs_module_1.LibsModule
            ],
            exports: [
                sidebar_component_1.SidebarComponent,
                card_movie_component_1.CardMovieComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
