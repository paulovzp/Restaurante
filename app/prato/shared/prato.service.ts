import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PratosService {

    private url: string = "http://localhost:2591/api/pratos";

    constructor(private http: Http) { }

    getPratos() {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    getPrato(id) {
        return this.http.get(this.getPratoUrl(id))
            .map(res => res.json());
    }

    addPrato(restaurante) {
        return this.http.post(this.url, restaurante)
            .map(res => res.json());
    }

    updatePrato(restaurante) {
        return this.http.put(this.url, restaurante)
            .map(res => res.json());
    }

    deletePrato(id) {
        return this.http.delete(this.getPratoUrl(id))
            .map(res => res.json());
    }

    private getPratoUrl(id) {
        return this.url + "/" + id;
    }
}