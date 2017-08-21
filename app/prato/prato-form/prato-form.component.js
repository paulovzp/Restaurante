System.register(["@angular/core", "@angular/forms", "@angular/router", "../shared/prato", "../shared/prato.service", "../../restaurante/shared/restaurante.service"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, router_1, prato_1, prato_service_1, restaurante_service_1, PratoFormComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (prato_1_1) {
                prato_1 = prato_1_1;
            },
            function (prato_service_1_1) {
                prato_service_1 = prato_service_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }
        ],
        execute: function () {
            PratoFormComponent = (function () {
                function PratoFormComponent(formBuilder, router, route, pratosService, restaurantesService) {
                    this.router = router;
                    this.route = route;
                    this.pratosService = pratosService;
                    this.restaurantesService = restaurantesService;
                    this.prato = new prato_1.Prato();
                    this.form = formBuilder.group({
                        nome: ["", [
                                forms_1.Validators.required,
                                forms_1.Validators.minLength(3)
                            ]],
                        preco: [""],
                        restauranteIdSelected: [""]
                    });
                }
                PratoFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.restaurantesService.getRestaurantes().subscribe(function (res) { return _this.listaRestaurantes = res; }, function (error) { return _this.errorMessage = error; });
                    this.route.params.subscribe(function (params) {
                        var id = params["id"];
                        _this.idKey = id;
                        _this.title = "Cadastro de Prato";
                        if (!id)
                            return;
                        _this.pratosService.getPrato(id)
                            .subscribe(function (prato) {
                            _this.prato = prato;
                            _this.restauranteIdSelected = _this.prato.restauranteId;
                        }, function (response) {
                            if (response.status == 404) {
                                _this.router.navigate(["NotFound"]);
                            }
                        });
                    });
                };
                PratoFormComponent.prototype.save = function () {
                    var _this = this;
                    var result, pratoValue = this.form.value;
                    pratoValue.id = this.idKey;
                    pratoValue.restauranteId = this.restauranteIdSelected;
                    if (pratoValue.id) {
                        result = this.pratosService.updatePrato(pratoValue);
                    }
                    else {
                        result = this.pratosService.addPrato(pratoValue);
                    }
                    result.subscribe(function (data) { return _this.router.navigate(["pratos"]); });
                };
                PratoFormComponent.prototype.onDropdownChange = function (e) {
                    console.log(e);
                    this.restauranteIdSelected = e;
                };
                PratoFormComponent.prototype.onInput = function ($event) {
                    $event.preventDefault();
                    console.log("selected: " + $event.target.value);
                };
                PratoFormComponent = __decorate([
                    core_1.Component({
                        selector: "app-prato-form",
                        templateUrl: "./prato-form.component.html",
                        styleUrls: ["./prato-form.component.css"]
                    }),
                    __metadata("design:paramtypes", [forms_1.FormBuilder,
                        router_1.Router,
                        router_1.ActivatedRoute,
                        prato_service_1.PratosService,
                        restaurante_service_1.RestaurantesService])
                ], PratoFormComponent);
                return PratoFormComponent;
            }());
            exports_1("PratoFormComponent", PratoFormComponent);
        }
    };
});
//# sourceMappingURL=prato-form.component.js.map