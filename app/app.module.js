System.register(["@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/http", "./app.component", "./nav-bar/nav-bar.component", "./home/home.component", "./not-found/not-found.component", "./app.routing", "./restaurante/restaurante.routing", "./restaurante/restaurante.module", "./prato/prato.routing", "./prato/prato.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, core_1, forms_1, http_1, app_component_1, nav_bar_component_1, home_component_1, not_found_component_1, app_routing_1, restaurante_routing_1, restaurante_module_1, prato_routing_1, prato_module_1, AppModule;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (nav_bar_component_1_1) {
                nav_bar_component_1 = nav_bar_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (restaurante_routing_1_1) {
                restaurante_routing_1 = restaurante_routing_1_1;
            },
            function (restaurante_module_1_1) {
                restaurante_module_1 = restaurante_module_1_1;
            },
            function (prato_routing_1_1) {
                prato_routing_1 = prato_routing_1_1;
            },
            function (prato_module_1_1) {
                prato_module_1 = prato_module_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            nav_bar_component_1.NavBarComponent,
                            home_component_1.HomeComponent,
                            not_found_component_1.NotFoundComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            restaurante_routing_1.restaurantesRouting,
                            restaurante_module_1.RestaurantesModule,
                            prato_routing_1.pratosRouting,
                            prato_module_1.PratosModule,
                            app_routing_1.routing
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map