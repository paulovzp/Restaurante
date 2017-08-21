/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestaurantesService } from './restaurante.service';

describe('Service: Restaurantes', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RestaurantesService]
        });
    });

    it('should ...', inject([RestaurantesService], (service: RestaurantesService) => {
        expect(service).toBeTruthy();
    }));
});