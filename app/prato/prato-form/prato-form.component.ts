import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Prato } from "../shared/prato";
import { PratosService } from "../shared/prato.service";
import { Restaurante } from "../../restaurante/shared/restaurante";
import { RestaurantesService } from "../../restaurante/shared/restaurante.service";

@Component({
    selector: "app-prato-form",
    templateUrl: "./prato-form.component.html",
    styleUrls: ["./prato-form.component.css"]
})
export class PratoFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    prato: Prato = new Prato();
    idKey: number;
    listaRestaurantes: Restaurante[];
    errorMessage: string;
    restauranteIdSelected: number;
    restauranteSelected: Restaurante;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private pratosService: PratosService,
        private restaurantesService: RestaurantesService
    ) {
        this.form = formBuilder.group({
            nome: ["", [
                Validators.required,
                Validators.minLength(3)
            ]],
            preco: [""],
            restauranteIdSelected: [""]
        });
    }

    ngOnInit() {
        this.restaurantesService.getRestaurantes().subscribe(res => this.listaRestaurantes = res, error => this.errorMessage = <any>error);
        this.route.params.subscribe(params => {
            var id = params["id"];
            this.idKey = id;

            this.title = "Cadastro de Prato";

            if (!id)
                return;

            this.pratosService.getPrato(id)
                .subscribe(
                prato => { 
                    this.prato = prato;
                    this.restauranteIdSelected = this.prato.restauranteId;
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(["NotFound"]);
                    }
                });
        });
    }

    save() {
        var result,
            pratoValue = this.form.value;

        pratoValue.id = this.idKey;
        pratoValue.restauranteId = this.restauranteIdSelected;

        if (pratoValue.id) {

            result = this.pratosService.updatePrato(pratoValue);
        } else {
            result = this.pratosService.addPrato(pratoValue);
        }

        result.subscribe(data => this.router.navigate(["pratos"]));
    }

    onDropdownChange(e) {
        console.log(e);
        this.restauranteIdSelected = e;
    }

    onInput($event) {
        $event.preventDefault();
        console.log("selected: " + $event.target.value);
      }
}
