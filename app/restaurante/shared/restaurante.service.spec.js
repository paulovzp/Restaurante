/* tslint:disable:no-unused-variable */
System.register(["@angular/core/testing", "./restaurante.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, restaurante_service_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }
        ],
        execute: function () {/* tslint:disable:no-unused-variable */
            describe('Service: Restaurantes', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [restaurante_service_1.RestaurantesService]
                    });
                });
                it('should ...', testing_1.inject([restaurante_service_1.RestaurantesService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    };
});
//# sourceMappingURL=restaurante.service.spec.js.map