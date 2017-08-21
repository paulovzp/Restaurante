System.register(["@angular/router", "./prato.component", "./prato-form/prato-form.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, prato_component_1, prato_form_component_1, pratosRoutes, pratosRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (prato_component_1_1) {
                prato_component_1 = prato_component_1_1;
            },
            function (prato_form_component_1_1) {
                prato_form_component_1 = prato_form_component_1_1;
            }
        ],
        execute: function () {
            pratosRoutes = [
                { path: 'pratos', component: prato_component_1.PratosComponent, pathMatch: 'full' },
                { path: 'pratos/new', component: prato_form_component_1.PratoFormComponent },
                { path: 'pratos/:id', component: prato_form_component_1.PratoFormComponent }
            ];
            exports_1("pratosRouting", pratosRouting = router_1.RouterModule.forChild(pratosRoutes));
        }
    };
});
//# sourceMappingURL=prato.routing.js.map