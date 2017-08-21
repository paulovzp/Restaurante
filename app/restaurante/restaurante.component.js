System.register(["@angular/core", "./shared/restaurante.service"], function (exports_1, context_1) {
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
    var core_1, restaurante_service_1, RestaurantesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }
        ],
        execute: function () {
            RestaurantesComponent = (function () {
                function RestaurantesComponent(restaurantesService) {
                    this.restaurantesService = restaurantesService;
                    this.restaurantes = [];
                }
                RestaurantesComponent.prototype.refresh = function () {
                    var _this = this;
                    this.restaurantesService.getRestaurantes()
                        .subscribe(function (data) { return _this.restaurantes = data; });
                };
                RestaurantesComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                RestaurantesComponent.prototype.deleteRestaurante = function (restaurante) {
                    var _this = this;
                    this.restaurantesService.deleteRestaurante(restaurante.id).subscribe(function (data) { _this.refresh(); });
                };
                RestaurantesComponent.prototype.pesquisar = function () {
                    var _this = this;
                    console.log(this.nomePesquisa);
                    if (this.nomePesquisa) {
                        this.restaurantesService.pesquisarRestaurante(this.nomePesquisa).subscribe(function (data) { _this.restaurantes = data; });
                    }
                    else {
                        this.refresh();
                    }
                };
                RestaurantesComponent = __decorate([
                    core_1.Component({
                        selector: "app-restaurantes",
                        templateUrl: "./restaurante.component.html",
                        styleUrls: ["./restaurante.component.css"]
                    }),
                    __metadata("design:paramtypes", [restaurante_service_1.RestaurantesService])
                ], RestaurantesComponent);
                return RestaurantesComponent;
            }());
            exports_1("RestaurantesComponent", RestaurantesComponent);
        }
    };
});
//# sourceMappingURL=restaurante.component.js.map