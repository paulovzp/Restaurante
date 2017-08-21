import { Component, OnInit } from '@angular/core';
import { PratosService } from "./shared/prato.service";
import { Prato } from "./shared/prato";


@Component({
    selector: 'app-pratos',
    templateUrl: './prato.component.html',
    styleUrls: ['./prato.component.css']
})
export class PratosComponent implements OnInit {

    private pratos: Prato[] = [];

    constructor(private pratosService: PratosService) { }

    refresh(){
        this.pratosService.getPratos()
        .subscribe(data => this.pratos = data);
    }

    ngOnInit() {
        this.refresh();
    }

    deletePrato(prato) {
        this.pratosService.deletePrato(prato.id).subscribe( data => { this.refresh(); } );
    }

}