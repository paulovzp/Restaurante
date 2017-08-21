import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RestaurantesService {

    private url: string = "http://localhost:2591/api/restaurantes";

    constructor(private http: Http) { }

    getRestaurantes() {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    getRestaurante(id) {
        return this.http.get(this.getRestauranteUrl(id))
            .map(res => res.json());
    }

    addRestaurante(restaurante) {
        return this.http.post(this.url, restaurante)
            .map(res => res.json());
    }

    updateRestaurante(restaurante) {
        return this.http.put(this.url, restaurante)
            .map(res => res.json());
    }

    deleteRestaurante(id) {
        return this.http.delete(this.getRestauranteUrl(id))
            .map(res => res.json());
    }

    pesquisarRestaurante(nome) {
        var pesquisaUrl = "http://localhost:2591/api/filter/restaurantes/FilterRestaurante/" + nome;
        return this.http.get(pesquisaUrl)
        .map(res => res.json());
    }

    private getRestauranteUrl(id) {
        return this.url + "/" + id;
    }
}