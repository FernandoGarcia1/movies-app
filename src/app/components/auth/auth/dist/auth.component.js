"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        console.group('service: ', this.authService);
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.formLoginGroup();
        var PREVIEW_LOGIN = localStorage.getItem('movie-auth');
        if ((PREVIEW_LOGIN === null || PREVIEW_LOGIN === void 0 ? void 0 : PREVIEW_LOGIN.toLowerCase()) === 'true') {
            this.authService.auth = true;
            this.router.navigate(['/movie']);
        }
    };
    AuthComponent.prototype.formLoginGroup = function () {
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    AuthComponent.prototype.onLoginSubmit = function () {
        var _a, _b;
        var USERNAME = (_a = this.loginForm.get("username")) === null || _a === void 0 ? void 0 : _a.value;
        var PASSWORD = (_b = this.loginForm.get("password")) === null || _b === void 0 ? void 0 : _b.value;
        this.authService.login(USERNAME, PASSWORD);
        this.router.navigate(['/movie']);
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
