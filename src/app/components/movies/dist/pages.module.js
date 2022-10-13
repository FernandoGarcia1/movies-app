"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var popular_component_1 = require("./pages/popular/popular.component");
var show_movie_component_1 = require("./pages/show-movie/show-movie.component");
var libs_module_1 = require("src/app/libs/libs.module");
var router_1 = require("@angular/router");
var principal_component_1 = require("./pages/principal/principal.component");
var movies_routing_module_1 = require("./movies-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var forms_1 = require("@angular/forms");
var search_form_component_1 = require("./pages/principal/search-form/search-form.component");
var index_component_1 = require("./pages/index/index.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                popular_component_1.PopularComponent,
                show_movie_component_1.ShowMovieComponent,
                principal_component_1.PrincipalComponent,
                search_form_component_1.SearchFormComponent,
                index_component_1.IndexComponent,
            ],
            imports: [
                common_1.CommonModule,
                libs_module_1.LibsModule,
                router_1.RouterModule,
                movies_routing_module_1.MoviesRoutingModule,
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                popular_component_1.PopularComponent,
                show_movie_component_1.ShowMovieComponent,
                principal_component_1.PrincipalComponent,
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
