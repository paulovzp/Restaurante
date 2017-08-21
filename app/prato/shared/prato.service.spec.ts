/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PratosService } from './prato.service';

describe('Service: Pratos', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PratosService]
        });
    });

    it('should ...', inject([PratosService], (service: PratosService) => {
        expect(service).toBeTruthy();
    }));
});