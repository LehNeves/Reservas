import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { RestauranteDTO } from "../../models/restaurante.dto";

@Injectable()
export class RestauranteService {
    constructor( public http: HttpClient){}

    findAll() : Observable<RestauranteDTO[]>{
        return this.http.get<RestauranteDTO[]>(`${API_CONFIG.baseURL}/restaurantes/list`);
    }
}
