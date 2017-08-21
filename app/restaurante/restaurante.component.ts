import { Component, OnInit } from "@angular/core";
import { RestaurantesService } from "./shared/restaurante.service";
import { Restaurante } from "./shared/restaurante";


@Component({
    selector: "app-restaurantes",
    templateUrl: "./restaurante.component.html",
    styleUrls: ["./restaurante.component.css"]
})
export class RestaurantesComponent implements OnInit {

    nomePesquisa: string;

    private restaurantes: Restaurante[] = [];

    constructor(private restaurantesService: RestaurantesService) { }

    refresh(){
        this.restaurantesService.getRestaurantes()
        .subscribe(data => this.restaurantes = data);
    }

    ngOnInit() {
        this.refresh();
    }

    deleteRestaurante(restaurante) {
        this.restaurantesService.deleteRestaurante(restaurante.id).subscribe( data => { this.refresh(); } );
    }

    pesquisar() {
        console.log(this.nomePesquisa);
        if(this.nomePesquisa){
            this.restaurantesService.pesquisarRestaurante(this.nomePesquisa).subscribe( data => { this.restaurantes = data } );
        }else
        {
            this.refresh();
        }
    }
}