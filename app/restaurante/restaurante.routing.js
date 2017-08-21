System.register(["@angular/router", "./restaurante.component", "./restaurante-form/restaurante-form.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, restaurante_component_1, restaurante_form_component_1, restaurantesRoutes, restaurantesRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_component_1_1) {
                restaurante_component_1 = restaurante_component_1_1;
            },
            function (restaurante_form_component_1_1) {
                restaurante_form_component_1 = restaurante_form_component_1_1;
            }
        ],
        execute: function () {
            restaurantesRoutes = [
                { path: 'restaurantes', component: restaurante_component_1.RestaurantesComponent, pathMatch: 'full' },
                { path: 'restaurantes/new', component: restaurante_form_component_1.RestauranteFormComponent },
                { path: 'restaurantes/:id', component: restaurante_form_component_1.RestauranteFormComponent }
            ];
            exports_1("restaurantesRouting", restaurantesRouting = router_1.RouterModule.forChild(restaurantesRoutes));
        }
    };
});
//# sourceMappingURL=restaurante.routing.js.map