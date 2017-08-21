import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Restaurante } from '../shared/restaurante';
import { RestaurantesService } from '../shared/restaurante.service';

@Component({
    selector: 'app-restaurante-form',
    templateUrl: './restaurante-form.component.html',
    styleUrls: ['./restaurante-form.component.css']
})
export class RestauranteFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    restaurante: Restaurante = new Restaurante();
    idKey: number;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private restaurantesService: RestaurantesService
    ) {
        this.form = formBuilder.group({
            nome: ['', [
                Validators.required,
                Validators.minLength(3)
            ]]
        });
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var id = params['id'];
            this.idKey = id;

            this.title = 'Cadastro de Restaurante';

            if (!id)
                return;

            this.restaurantesService.getRestaurante(id)
                .subscribe(
                restaurante => this.restaurante = restaurante,
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    save() {
        var result,
            restauranteValue = this.form.value;

        restauranteValue.id = this.idKey;

        if (restauranteValue.id) {

            result = this.restaurantesService.updateRestaurante(restauranteValue);
        } else {
            result = this.restaurantesService.addRestaurante(restauranteValue);
        }

        result.subscribe(data => this.router.navigate(['restaurantes']));
    }
}
