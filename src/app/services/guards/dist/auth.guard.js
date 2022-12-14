"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthGuard = void 0;
var core_1 = require("@angular/core");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        console.group('service: ', this.authService);
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(this.authService.auth);
        if (this.authService.auth === true) {
            return this.authService.auth;
        }
        else {
            console.log('guard-false');
            this.router.navigate(['']);
        }
        return false;
    };
    AuthGuard.prototype.canLoad = function (route, segments) {
        if (this.authService.auth === true) {
            return this.authService.auth;
        }
        else {
            console.log('guard-false');
            this.router.navigate(['']);
        }
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
