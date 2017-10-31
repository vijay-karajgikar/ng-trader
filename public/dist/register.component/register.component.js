"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpClient) {
        this.httpClient = httpClient;
    }
    //Initialize the Form
    RegisterComponent.prototype.ngOnInit = function () {
        this.userForm = new forms_1.FormGroup({
            fullname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(10)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            confirmPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            location: new forms_1.FormControl(''),
            age: new forms_1.FormControl(''),
            website: new forms_1.FormControl('')
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './app/register.component/register.component.html',
            styleUrls: ['./app/register.component/register.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map