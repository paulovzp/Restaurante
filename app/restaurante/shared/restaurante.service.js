System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/do", "rxjs/add/operator/catch"], function (exports_1, context_1) {
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
    var core_1, http_1, RestaurantesService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            RestaurantesService = (function () {
                function RestaurantesService(http) {
                    this.http = http;
                    this.url = "http://localhost:2591/api/restaurantes";
                }
                RestaurantesService.prototype.getRestaurantes = function () {
                    return this.http.get(this.url)
                        .map(function (res) { return res.json(); });
                };
                RestaurantesService.prototype.getRestaurante = function (id) {
                    return this.http.get(this.getRestauranteUrl(id))
                        .map(function (res) { return res.json(); });
                };
                RestaurantesService.prototype.addRestaurante = function (restaurante) {
                    return this.http.post(this.url, restaurante)
                        .map(function (res) { return res.json(); });
                };
                RestaurantesService.prototype.updateRestaurante = function (restaurante) {
                    return this.http.put(this.url, restaurante)
                        .map(function (res) { return res.json(); });
                };
                RestaurantesService.prototype.deleteRestaurante = function (id) {
                    return this.http.delete(this.getRestauranteUrl(id))
                        .map(function (res) { return res.json(); });
                };
                RestaurantesService.prototype.pesquisarRestaurante = function (nome) {
                    var pesquisaUrl = "http://localhost:2591/api/filter/restaurantes/FilterRestaurante/" + nome;
                    return this.http.get(pesquisaUrl)
                        .map(function (res) { return res.json(); });
                };
                RestaurantesService.prototype.getRestauranteUrl = function (id) {
                    return this.url + "/" + id;
                };
                RestaurantesService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], RestaurantesService);
                return RestaurantesService;
            }());
            exports_1("RestaurantesService", RestaurantesService);
        }
    };
});
//# sourceMappingURL=restaurante.service.js.map