import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { RestauranteDTO } from '../../models/restaurante.dto';
import { RestauranteService } from '../../services/domain/restaurante.service';

@Injectable()
export class Data {

    rest: RestauranteDTO[];

    constructor(public restauranteService: RestauranteService) {
        this.restauranteService.findAll()
            .subscribe(resposta => {
                this.rest = resposta;
            },
                erro => { });
    }

    filterItems(searchTerm) {

        return this.rest.filter((item) => {
            return item.nome.toLowerCase().includes(searchTerm.toLowerCase());
        });

    }

}