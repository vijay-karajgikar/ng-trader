"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component/login.component");
var register_component_1 = require("./register.component/register.component");
var profile_component_1 = require("./profile.component/profile.component");
var home_component_1 = require("./home.component/home.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent }
];
exports.AppRouting = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map