System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "@angular/http", "./prato.component", "./shared/prato.service", "./prato-form/prato-form.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, http_1, prato_component_1, prato_service_1, prato_form_component_1, PratosModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (prato_component_1_1) {
                prato_component_1 = prato_component_1_1;
            },
            function (prato_service_1_1) {
                prato_service_1 = prato_service_1_1;
            },
            function (prato_form_component_1_1) {
                prato_form_component_1 = prato_form_component_1_1;
            }
        ],
        execute: function () {
            PratosModule = (function () {
                function PratosModule() {
                }
                PratosModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            router_1.RouterModule,
                            http_1.HttpModule
                        ],
                        declarations: [
                            prato_component_1.PratosComponent,
                            prato_form_component_1.PratoFormComponent
                        ],
                        exports: [
                            prato_component_1.PratosComponent
                        ],
                        providers: [
                            prato_service_1.PratosService
                        ]
                    })
                ], PratosModule);
                return PratosModule;
            }());
            exports_1("PratosModule", PratosModule);
        }
    };
});
//# sourceMappingURL=prato.module.js.map