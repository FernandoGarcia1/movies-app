"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoviesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var popular_component_1 = require("./pages/popular/popular.component");
var show_movie_component_1 = require("./pages/show-movie/show-movie.component");
var principal_component_1 = require("./pages/principal/principal.component");
var index_component_1 = require("./pages/index/index.component");
var tmdb_resolver_1 = require("src/app/libs/resolvers/tmdb.resolver");
var routes = [
    {
        path: '',
        component: index_component_1.IndexComponent,
        resolve: {
            genres: tmdb_resolver_1.TmdbResolver
        },
        children: [
            {
                path: 'popular',
                component: popular_component_1.PopularComponent
            },
            {
                path: 'movie/:id',
                component: show_movie_component_1.ShowMovieComponent
            },
            {
                path: '',
                component: principal_component_1.PrincipalComponent,
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/movie'
            }
        ]
    }
];
var MoviesRoutingModule = /** @class */ (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());
exports.MoviesRoutingModule = MoviesRoutingModule;
