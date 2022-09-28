"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GeneresComponent = void 0;
var core_1 = require("@angular/core");
var GeneresComponent = /** @class */ (function () {
    function GeneresComponent(activatedRoute, tmbdRequest) {
        this.activatedRoute = activatedRoute;
        this.tmbdRequest = tmbdRequest;
        this.idGenres = '';
    }
    GeneresComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.tmbdRequest.searchMovies(this.idGenres).subscribe({
            next: function (resp) {
                _this.movies = resp.results;
                console.log('Aqui....form', resp.results);
            }
        });
    };
    GeneresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.idGenres = params['id'];
            console.log(_this.idGenres);
        });
    };
    GeneresComponent = __decorate([
        core_1.Component({
            selector: 'app-generes',
            templateUrl: './generes.component.html',
            styleUrls: ['./generes.component.scss']
        })
    ], GeneresComponent);
    return GeneresComponent;
}());
exports.GeneresComponent = GeneresComponent;
