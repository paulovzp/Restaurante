System.register(["@angular/core", "@angular/forms", "@angular/router", "../shared/restaurante", "../shared/restaurante.service"], function (exports_1, context_1) {
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
    var core_1, forms_1, router_1, restaurante_1, restaurante_service_1, RestauranteFormComponent;
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
            function (restaurante_1_1) {
                restaurante_1 = restaurante_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }
        ],
        execute: function () {
            RestauranteFormComponent = (function () {
                function RestauranteFormComponent(formBuilder, router, route, restaurantesService) {
                    this.router = router;
                    this.route = route;
                    this.restaurantesService = restaurantesService;
                    this.restaurante = new restaurante_1.Restaurante();
                    this.form = formBuilder.group({
                        nome: ['', [
                                forms_1.Validators.required,
                                forms_1.Validators.minLength(3)
                            ]]
                    });
                }
                RestauranteFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this.idKey = id;
                        _this.title = 'Cadastro de Restaurante';
                        if (!id)
                            return;
                        _this.restaurantesService.getRestaurante(id)
                            .subscribe(function (restaurante) { return _this.restaurante = restaurante; }, function (response) {
                            if (response.status == 404) {
                                _this.router.navigate(['NotFound']);
                            }
                        });
                    });
                };
                RestauranteFormComponent.prototype.save = function () {
                    var _this = this;
                    var result, restauranteValue = this.form.value;
                    restauranteValue.id = this.idKey;
                    if (restauranteValue.id) {
                        result = this.restaurantesService.updateRestaurante(restauranteValue);
                    }
                    else {
                        result = this.restaurantesService.addRestaurante(restauranteValue);
                    }
                    result.subscribe(function (data) { return _this.router.navigate(['restaurantes']); });
                };
                RestauranteFormComponent = __decorate([
                    core_1.Component({
                        selector: 'app-restaurante-form',
                        templateUrl: './restaurante-form.component.html',
                        styleUrls: ['./restaurante-form.component.css']
                    }),
                    __metadata("design:paramtypes", [forms_1.FormBuilder,
                        router_1.Router,
                        router_1.ActivatedRoute,
                        restaurante_service_1.RestaurantesService])
                ], RestauranteFormComponent);
                return RestauranteFormComponent;
            }());
            exports_1("RestauranteFormComponent", RestauranteFormComponent);
        }
    };
});
//# sourceMappingURL=restaurante-form.component.js.map