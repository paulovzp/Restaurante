/* tslint:disable:no-unused-variable */
System.register(["@angular/core/testing", "./prato.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, prato_service_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (prato_service_1_1) {
                prato_service_1 = prato_service_1_1;
            }
        ],
        execute: function () {/* tslint:disable:no-unused-variable */
            describe('Service: Pratos', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [prato_service_1.PratosService]
                    });
                });
                it('should ...', testing_1.inject([prato_service_1.PratosService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    };
});
//# sourceMappingURL=prato.service.spec.js.map